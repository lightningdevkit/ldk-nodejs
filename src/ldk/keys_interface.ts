import ffi = require('ffi');
import ref = require('ref');
import * as RawFFI from './ffi';
import RawLDKObject from './RawLDKObject';

const library = RawFFI.liblightning;

export default class KeysInterface extends RawLDKObject{

	public static default(secretKeyPointer){
		const testnetNetwork = RawFFI.CONSTANTS.LDKNetwork.LDKNetwork_Testnet;
		const keyManager = library.KeysManager_new(
			secretKeyPointer,
			testnetNetwork,
			0,
			0
		);

		const keyManagerPointer = keyManager.ref();
		const keysInterface = library.KeysManager_as_KeysInterface(37, 54, keyManagerPointer);
		const instance = new KeysInterface();
		instance.rawObject = keysInterface;
		return instance;
	}

}
