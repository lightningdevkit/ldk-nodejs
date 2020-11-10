import ffi = require('ffi');
import ref = require('ref');
import * as RawFFI from './ffi';
import RawLDKObject from './RawLDKObject';
import MessageHandler from './message_handler';
import Logger from './logger';
import RawLDKTypes from './RawLDKTypes';

const library = RawFFI.libldk;

export default class PeerManager extends RawLDKObject {

	static generateSocketDescriptor(sendCallback?) {
		const voidPtrType = ref.refType(ref.types.void);

		const sendDataCallback = ffi.Callback(ref.types.uint, [voidPtrType, RawFFI.LDKu8slice, ref.types.bool], (this_arg, slice, something) => {
			console.log('send data callback');
			const buffer = RawLDKTypes.bufferFromLDKu8slice(slice);
			if(sendCallback){
				sendCallback(buffer);
			}
			return 1;
		});

		const disconnectCallback = ffi.Callback(ref.types.void, [voidPtrType], (this_arg) => {
			console.log('disconnect callback');
		});

		const eqCallback = ffi.Callback(ref.types.bool, [voidPtrType, voidPtrType], (obj1, obj2) => {
			console.log('eq callback');
			return true;
		});

		const hashCallback = ffi.Callback(ref.types.uint64, [voidPtrType], (obj) => {
			const realBuffer = ref.reinterpret(obj, 8);
			console.log('hash callback');
			return 1027;
		});

		const socketDescriptor = new RawFFI.LDKSocketDescriptor({
			this_arg: Buffer.alloc(8, 2),
			send_data: sendDataCallback,
			disconnect_socket: disconnectCallback,
			eq: eqCallback,
			hash: hashCallback
		});
		return socketDescriptor;
	}

	constructor(messageHandler: MessageHandler, ldkSecretKey, ephemeralPrivateKey, logger: Logger) {
		super();
		// this.rawObject = library.PeerManager_new(23, messageHandler.direct, ldkSecretKey, ephemeralPrivateKey, logger.direct);
		this.rawObject = library.PeerManager_new(messageHandler.direct, ldkSecretKey, ephemeralPrivateKey, logger.direct);
	}
}
