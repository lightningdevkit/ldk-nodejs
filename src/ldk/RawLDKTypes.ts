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

	public static bufferFromLDKu8slice(slice: RawFFI.LDKu8slice): Buffer {
		const data = ref.reinterpret(slice.data, slice.datalen);
		return data;
	}

	public static bufferToLDKu8slice(buffer: Buffer): RawFFI.LDKu8slice {
		const datalen = buffer.length;
		const data = Buffer.from([...buffer, null]);
		const slice = RawFFI.LDKu8slice({
			data,
			datalen
		});
		const recoveredData = ref.reinterpret(slice.data, slice.datalen);
		return slice;
	}

	public static structToPointer(struct: any): any {
		// return struct['ref.buffer'].ref();
		// return ref.refType(struct);
		struct.ref();
	}

}
