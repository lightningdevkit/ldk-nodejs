import * as fs from 'fs';

const ffiFilePath = `${__dirname}/../ldk/ffi.js`;

const ffiFileBuffer = fs.readFileSync(ffiFilePath);
const ffiFileString = ffiFileBuffer.toString('utf-8');
const sanitizedFFIString = ffiFileString.replace(
	`exports.../../lib/liblightning = new FFI.Library('../../lib/liblightning', {`,
	`exports.liblightning = new FFI.Library(__dirname + '/../../lib/liblightning', {`);

fs.writeFileSync(ffiFilePath, sanitizedFFIString);


