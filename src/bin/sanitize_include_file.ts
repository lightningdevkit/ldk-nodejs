import * as fs from 'fs';

const includeFilePath = `${__dirname}/../../include/combined_header_file.h`;

const ffiFileBuffer = fs.readFileSync(includeFilePath);
const ffiFileString = ffiFileBuffer.toString('utf-8');

let sanitizedFFIString = ffiFileString;

const mustUseResRegex = /(?<!#define )MUST_USE_RES /gm;
const mustUseStructRegex = /(?<!#define )MUST_USE_STRUCT /gm;
sanitizedFFIString = sanitizedFFIString.replace(mustUseResRegex, '');
sanitizedFFIString = sanitizedFFIString.replace(mustUseStructRegex, '');

fs.writeFileSync(includeFilePath, sanitizedFFIString);


