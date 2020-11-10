import ffi = require('ffi');
import ref = require('ref');
import * as Struct from 'ref-struct';
import ArrayType = require('ref-array');

import * as RawFFI from './ldk/ffi';
import ManyChannelMonitor from './ldk/ManyChannelMonitor';
import RawLDKTypes from './ldk/RawLDKTypes';

const library = RawFFI.libldk;


function testUnionResult() {
	console.log('arik type size:', RawFFI.ArikType.size);

	for (let i = 0; i < 50; i++) {
		const result = library.arik_test(12, 13/*, peerManagerPointer, remotePublicKeyObject, socketDescriptor*/);
		const pointee = result.q;
	}

	process.exit(0);
	console.log('here');
}


const voidPtrType = ref.refType(ref.types.void);


// const buffer = Buffer.alloc(8, 13);
const u8Arg: Buffer = ref.alloc(ref.types.uint8);
u8Arg.writeUInt8(14, 0);


const ArikStructType = Struct({
	first: ref.types.uint8,
	second: ref.types.uint8,
	third: ref.types.uint8,
	sub: Struct({
		fifth: ref.types.uint8,
		sixth: ref.types.uint8,
		seventh: ref.types.uint8
	})
});


const privateKey = Buffer.from('ERERERERERERERERERERERERERERERERERERERERERE=', 'base64');
const ephemeralPrivateKey = Buffer.from('EhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhI=', 'base64');
const remotePublicKey = Buffer.from('Ao11AN1MEmhdH1aLTCtQSOhTS4czGfOo2qYStGkTLsf3', 'base64');
console.log('Nodejs public key', [...remotePublicKey].join(', '));

const alexPublicKey = Buffer.from('027455aef8453d92f4706b560b61527cc217ddf14da41770e8ed6607190a1851b8', 'hex');

console.log('Nodejs secret:', [...privateKey].join(', '));


const testnetNetwork = RawFFI.CONSTANTS.LDKNetwork.LDKNetwork_Testnet;


const ldkSecretKey = RawLDKTypes.bufferToSecretKey(privateKey);

// const ldkSecretKeyPtrType = ref.refType(RawFFI.LDKSecretKey);
// const ldkSecretKeyPointer = ref.alloc(ldkSecretKeyPtrType, ldkSecretKey.ref());
const ldkSecretKeyPointer = ldkSecretKey.ref();




const logCallback = ffi.Callback('void', [voidPtrType, 'string'], (this_arg, string) => {
	console.log('logging callback');
});
const logger = new RawFFI.LDKLogger({
	this_arg: Buffer.alloc(8, 2),
	log: logCallback
});

const defaultConfig = library.UserConfig_default();

const mcm = new ManyChannelMonitor();

const transactionBroadcaster = new RawFFI.LDKBroadcasterInterface();


const keyManager = library.KeysManager_new(
	ldkSecretKeyPointer,
	testnetNetwork,
	0,
	0
);



const keysInterfaceSize = RawFFI.LDKKeysInterface.size;
const arikTypeSize = RawFFI.ArikType.size;
const peerHandleErrorSize = RawFFI.LDKCResultTempl_CVecTempl_u8_____PeerHandleError.size;

console.log('keys interface size:', keysInterfaceSize);
console.log('arik type size:', arikTypeSize);
console.log('peer handle error size:', peerHandleErrorSize);

const keyManagerPointer = keyManager.ref();
/*
const arik_result = library.arik_test_km(37, 54, keyManagerPointer);
console.dir(arik_result);
// /process.exit(0);
*/
const keysInterface = library.KeysManager_as_KeysInterface(37, 54, keyManagerPointer);



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



const peerManager = library.PeerManager_new(23, messageHandler, ldkSecretKey, ephemeralPrivateKey, logger);
console.log('Node has underlying ref:', peerManager._underlying_ref);
console.log('Node Arik number:', peerManager.arik_number);


// initiate new outbound connection

const sendDataCallback = ffi.Callback(ref.types.uint, [voidPtrType, RawFFI.LDKu8slice, ref.types.bool], (this_arg, buffer, something) => {
	console.log('send data callback');
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
const remotePublicKeyObject = RawLDKTypes.bufferToPublicKey(remotePublicKey);
// const remotePublicKeyObject = ref.alloc(RawFFI.LDKPublicKey, {
// 	compressed_form: [...remotePublicKey]
// })

// const firstMessage = library.PeerManager_new_outbound_connection(93, null, remotePublicKeyObject, socketDescriptor);

const peerManagerPointer = peerManager.ref();








// const expectedResultType = RawFFI.LDKCResultTempl_CVecTempl_u8_____PeerHandleError;
/* const expectedResultType = RawFFI.LDKCVecTempl_u8;
const result = library.arik_test(12, 13, peerManagerPointer, remotePublicKeyObject, socketDescriptor);
const realResult = ref.reinterpret(result, expectedResultType.size);

const typedResult = expectedResultType(realResult);

// const contentResult = typedResult.contents.result.deref();

const interpretedResult = ref.alloc(expectedResultType, realResult).deref();
console.log('jere');

*/

// const pheType = RawFFI.LDKCResultTempl_CVecTempl_u8_____PeerHandleError;

// console.log('size:', RawFFI.LDKCResultTempl_CVecTempl_u8_____PeerHandleError.size);
console.log('size:', RawFFI.ArikType.size);
// const firstMessage = library.PeerManager_new_outbound_connection(93, peerManagerPointer, remotePublicKeyObject, socketDescriptor);
const firstMessage = library.PeerManager_new_outbound_connection(93, 103, peerManagerPointer, remotePublicKeyObject, socketDescriptor);
const pointee = firstMessage.q;
const messageWrapper = firstMessage.message.deref();
if(messageWrapper.result_good){
	const content = messageWrapper.contents.result.deref();
	const length = content.datalen;
	if(length === 50){
		console.log('HALLELUJAH!');
	}
	const rawResponse = ref.reinterpret(content.data, length);
	console.log('raw response:', rawResponse.toString('hex'));
}
const value = pointee.readUInt16LE();
console.log(value);
// testUnionResult();


// console.log(peerManager, peerManagerPointer, ldkSecretKey, ldkSecretKeyPointer);
