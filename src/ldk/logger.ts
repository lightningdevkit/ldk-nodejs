import ffi = require('ffi');
import ref = require('ref');
import * as RawFFI from './ffi';
import RawLDKObject from './RawLDKObject';

export default class Logger extends RawLDKObject{

	constructor() {
		super();
		const voidPtrType = ref.refType(ref.types.void);
		const logCallback = ffi.Callback(ref.types.void, [voidPtrType, 'string'], (this_arg, string) => {
			console.log('logging callback');
			console.log('log event:', string);
		});
		this.rawObject = new RawFFI.LDKLogger({
			this_arg: Buffer.alloc(8, 2),
			log: logCallback
		});
	}

}
