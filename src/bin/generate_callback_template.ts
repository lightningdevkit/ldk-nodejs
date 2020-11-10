import * as fs from 'fs';

import * as RawFFI from '../ldk/ffi';

const library = RawFFI.libldk;

const headerFilePath = `${__dirname}/../../include/combined_header_file.h`;
const ffiFileBuffer = fs.readFileSync(headerFilePath);
const headerString = ffiFileBuffer.toString('utf-8');

const gentype = 'LDKWatch';
const targetObject = RawFFI[gentype];

const fields = targetObject.fields;
const fieldNames = Object.keys(fields);

const lookupTypeDefinition = (typeName: string) => {
	const regex = new RegExp(`typedef (\\S+) ${typeName};`, 'gm');
	const matches = regex.exec(headerString);
	if (Array.isArray(matches) && matches[1]) {
		return matches[1];
	}
	return typeName;
};

const decorateTypeDefinition = (typeName: string) => {
	if (typeName === 'const void') {
		return 'voidPtrType';
	} else if (typeName === 'void') {
		return 'ref.types.void';
	}
	return `RawFFI.${typeName}`;
};



const prefix = `
import ffi = require('ffi');
import ref = require('ref');
import * as RawFFI from './ffi';

const voidPtrType = ref.refType(ref.types.void);
`;


let codegen = prefix;


const instantiationFields = [];

for (const currentField of fieldNames) {

	// const regex = /(?<=typedef struct LDKWatch {).*\n([^\n]*\*watch_channel[^\n]*);/gms;
	const regex = new RegExp(`typedef struct ${gentype} {.*\\n([^\\n(]*\\(?\\*${currentField}[^\\n]*);.*} ${gentype};`, 'gms');
	const matches = regex.exec(headerString);
	const methodDeclaration = matches[1];

	const subRegex = /(\S+) ?(\(\S+\) ?\((.+)\))?/gm;
	const closureDetails = subRegex.exec(methodDeclaration);

	// console.log('');
	// console.log(methodDeclaration);

	if (Array.isArray(closureDetails)) {
		const type = closureDetails[1];
		const resolvedType = lookupTypeDefinition(type);
		// console.log('type:', resolvedType);
		if (!closureDetails[3]) {

			// it's not a callback

			instantiationFields.push(`${currentField}: null`);

			continue;
		}

		// it's a callback

		const argTypes = [];
		const argNames = [];

		const lambdaArguments = closureDetails[3];
		const argumentArray = lambdaArguments.split(', ');
		for (const currentArgument of argumentArray) {
			const argumentDetails = currentArgument.split(' ');
			const argumentType = argumentDetails.slice(0, argumentDetails.length - 1).join(' ');
			const resolvedArgumentType = lookupTypeDefinition(argumentType);
			const argumentName = (argumentDetails[argumentDetails.length - 1]).replace('*', '');

			argTypes.push(decorateTypeDefinition(resolvedArgumentType));
			argNames.push(argumentName);

			// console.log('argtype:', resolvedArgumentType, argumentName);
		}

		const callbackCode = `
const ${currentField}_callback = ffi.Callback(${decorateTypeDefinition(resolvedType)}, [${argTypes.join(', ')}], (${argNames.join(', ')}) => {
	// TODO: your code here
	return new ${decorateTypeDefinition(resolvedType)}();
});
		`;
		codegen += callbackCode;

		// console.log('arguments:', lambdaArguments);
	}

	instantiationFields.push(`${currentField}: ${currentField}_callback`);

}

const  instantiationCode = `
const instance = RawFFI.${gentype}({
	${instantiationFields.join(',\n\t')}
});
`;

codegen += instantiationCode;

console.log(codegen)






