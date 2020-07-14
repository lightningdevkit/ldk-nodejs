import * as RawFFI from './ffi';
import * as StructType from 'ref-struct'

export default class RawLDKTypes {

	public static bufferToSecretKey(buffer: Buffer): RawFFI.LDKSecretKey {
		const ldkSecretKey = new RawFFI.LDKSecretKey({bytes: [...buffer]});
		return ldkSecretKey;
	}

	public static structToPointer(struct: StructType): Buffer {
		return struct['ref.buffer'].ref();
	}

}
