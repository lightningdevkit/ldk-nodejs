import * as fs from 'fs';

const ffiFilePath = `${__dirname}/../ldk/ffi.js`;

const ffiFileBuffer = fs.readFileSync(ffiFilePath);
const ffiFileString = ffiFileBuffer.toString('utf-8');
const sanitizedFFIString = ffiFileString.replace(
	`exports.../../lib/libldk = new FFI.Library('../../lib/libldk', {`,
	`exports.libldk = new FFI.Library(__dirname + '/../../lib/libldk', {`);

fs.writeFileSync(ffiFilePath, sanitizedFFIString);


