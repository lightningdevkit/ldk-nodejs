import * as RawFFI from './ffi';
import * as StructType from 'ref-struct'
import * as ref from 'ref';
import {Type} from 'ref';

export default class RawLDKTypes {

	public static bufferToSecretKey(buffer: Buffer): RawFFI.LDKSecretKey {
		const ldkSecretKey = new RawFFI.LDKSecretKey({bytes: [...buffer]});
		return ldkSecretKey;
	}

	public static bufferToPublicKey(buffer: Buffer): RawFFI.LDKSecretKey {
		const ldkPublicKey = new RawFFI.LDKPublicKey({compressed_form: [...buffer]});
		return ldkPublicKey;
	}

	public static structToPointer(struct: any): any {
		// return struct['ref.buffer'].ref();
		// return ref.refType(struct);
		struct.ref();
	}

}
