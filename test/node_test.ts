import ffi = require('ffi');
import ref = require('ref');
import ArrayType = require('ref-array');
import chai = require('chai');

const assert = chai.assert;

import * as RawFFI from '../src/ldk/ffi';
import ManyChannelMonitor from '../src/ldk/ManyChannelMonitor';
import RawLDKTypes from '../src/ldk/RawLDKTypes';
const library = RawFFI.liblightning;

describe('Node Test', () => {

	it('should construct a node',  () => {

		const privateKey = Buffer.from('ERERERERERERERERERERERERERERERERERERERERERE=', 'base64');
		const ephemeralPrivateKey = Buffer.from('EhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhI=', 'base64');
		const remotePublicKey = Buffer.from('Ao11AN1MEmhdH1aLTCtQSOhTS4czGfOo2qYStGkTLsf3', 'base64');

		const alexPublicKey = Buffer.from('027455aef8453d92f4706b560b61527cc217ddf14da41770e8ed6607190a1851b8', 'hex');


		const testnetNetwork = RawFFI.CONSTANTS.LDKNetwork.LDKNetwork_Testnet;

		const ldkSecretKey = RawLDKTypes.bufferToSecretKey(privateKey);
		// const ldkSecretKeyPtrType = ref.refType(RawFFI.LDKSecretKey);
		// const ldkSecretKeyPointer = ref.alloc(ldkSecretKeyPtrType, ldkSecretKey.ref());
		const ldkSecretKeyPointer = ldkSecretKey.ref();

		const logCallback = ffi.Callback('void', [ref.types.void, 'string'], (this_arg, string) => {
			console.log('logging callback');
		});
		const logger = new RawFFI.LDKLogger({
			this_arg: Buffer.alloc(8, 2),
			log: logCallback,
		});

		const feeEstimator = new RawFFI.LDKFeeEstimator({
			this_arg: null,
			get_est_sat_per_1000_weight: null
		});

		const defaultConfig = library.UserConfig_default();
		assert.equal(2+2, 4);

		const mcm = new ManyChannelMonitor();

		const transactionBroadcaster = new RawFFI.LDKBroadcasterInterface();

		const keyManager = library.KeysManager_new(
			ldkSecretKeyPointer,
			testnetNetwork,
			0,
			0
		);

		const keyManagerPointer = keyManager.ref();
		const keysInterface = library.KeysManager_as_KeysInterface(keyManagerPointer);

		/*
		const channelManager = library.ChannelManager_new(
			testnetNetwork,
			feeEstimator,
			mcm.rawManyChannelMonitor,
			transactionBroadcaster,
			logger,
			keysInterface,
			defaultConfig,
			1027
		);
		/*
		const channelManagerPointer = RawLDKTypes.structToPointer(channelManager);
		const channelMessageHandler = library.ChannelManager_as_ChannelMessageHandler(channelManagerPointer);
		 */
		const channelMessageHandler = new RawFFI.LDKChannelMessageHandler();

		// todo: smart construction
		const routingMessageHandler = new RawFFI.LDKRoutingMessageHandler();

		const messageHandler = library.MessageHandler_new(channelMessageHandler, routingMessageHandler);

		const peerManager = library.PeerManager_new(messageHandler, ldkSecretKey, ephemeralPrivateKey, logger);
		console.log('Node has underlying ref:', peerManager._underlying_ref);
		console.log('Node Arik number:', peerManager.arik_number);



		// initiate new outbound connection

		const sendDataCallback = ffi.Callback(ref.types.uint, [ref.types.void, RawFFI.LDKu8slice, ref.types.bool], (this_arg, buffer, something) => {
			console.log('send data callback');
			return 1;
		});

		const disconnectCallback = ffi.Callback(ref.types.void, [ref.types.void], (this_arg) => {
			console.log('disconnect callback');
		});

		const eqCallback = ffi.Callback(ref.types.bool, [ref.types.void, ref.types.void], (obj1, obj2) => {
			console.log('eq callback');
			return true;
		});

		const hashCallback = ffi.Callback(ref.types.uint64, [ref.types.void], (obj) => {
			console.log('hash callback');
			return 1;
		});

		const socketDescriptor = new RawFFI.LDKSocketDescriptor({
			this_arg: Buffer.alloc(8, 0),
			send_data: sendDataCallback,
			disconnect_socket: disconnectCallback,
			eq: eqCallback,
			hash: hashCallback,
		});
		const remotePublicKeyObject = RawLDKTypes.bufferToPublicKey(remotePublicKey);
		// const remotePublicKeyObject = ref.alloc(RawFFI.LDKPublicKey, {
		// 	compressed_form: [...remotePublicKey]
		// })
		const peerManagerPointer = peerManager.ref().ref();

		// const derefPeerManager = peerManagerPointer.deref();
		const arikArgument: Buffer = ref.alloc(ref.types.uint8, 13);
		// const arikArgumentPointer = arikArgument.ref();
		// const firstMessage = library.PeerManager_new_outbound_connection(arikArgumentPointer, peerManagerPointer, remotePublicKeyObject, socketDescriptor);


		console.log(peerManager, peerManagerPointer);

		// assert.equal(channelManager['ref.buffer'].length, 16);
		assert.equal(2+2, 4);

	});

})
