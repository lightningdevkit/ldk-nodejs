import ffi = require('ffi');
import ref = require('ref');
import * as net from 'net';
import * as Struct from 'ref-struct';
import ArrayType = require('ref-array');

import * as RawFFI from './ldk/ffi';
import ManyChannelMonitor from './ldk/ManyChannelMonitor';
import RawLDKTypes from './ldk/RawLDKTypes';
import Logger from './ldk/logger';
import FeeEstimator from './ldk/fee_estimator';
import KeysInterface from './ldk/keys_interface';
import MessageHandler from './ldk/message_handler';
import PeerManager from './ldk/peer_manager';

const library = RawFFI.liblightning;







const privateKey = Buffer.from('ERERERERERERERERERERERERERERERERERERERERERE=', 'base64');
const ephemeralPrivateKey = Buffer.from('EhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhI=', 'base64');
const remotePublicKey = Buffer.from('Ao11AN1MEmhdH1aLTCtQSOhTS4czGfOo2qYStGkTLsf3', 'base64');
console.log('Nodejs public key', [...remotePublicKey].join(', '));

const alexPublicKey = Buffer.from('027455aef8453d92f4706b560b61527cc217ddf14da41770e8ed6607190a1851b8', 'hex');

console.log('Nodejs secret:', [...privateKey].join(', '));




const ldkSecretKey = RawLDKTypes.bufferToSecretKey(privateKey);

// const ldkSecretKeyPtrType = ref.refType(RawFFI.LDKSecretKey);
// const ldkSecretKeyPointer = ref.alloc(ldkSecretKeyPtrType, ldkSecretKey.ref());
const ldkSecretKeyPointer = ldkSecretKey.ref();




const logger = new Logger();


const messageHandler = new MessageHandler();
const peerManager = new PeerManager(messageHandler, ldkSecretKey, ephemeralPrivateKey, logger)

// initiate new outbound connection


let socket;

const socketDescriptor = PeerManager.generateSocketDescriptor((data) => {
	if(socket instanceof net.Socket){
		socket.write(data);
	}
});
const remotePublicKeyObject = RawLDKTypes.bufferToPublicKey(alexPublicKey);


const peerManagerPointer = peerManager.pointer;

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
	// console.log('raw response:', rawResponse.toString('hex'));


	// start TCP thing
	const client = new net.Socket();



	client.on('data', (data) => {
		console.log('Received:');
		console.log(data.toString('hex'), '\n');
		const response = RawLDKTypes.bufferToLDKu8slice(data);

		console.log('read return size:', RawFFI.LDKCResultTempl_bool__PeerHandleError.size);

		library.PeerManager_read_event(73, peerManagerPointer, socketDescriptor.ref(), response);
	});

	client.on('error', (error) => {
		console.log('Error:');
		console.log(error);
		process.exit(0);
	});

	client.on('close', function () {
		console.log('Connection closed');
		process.exit(0);
	});

	client.connect(9735, '3.13.29.161', () => {

		socket = client;

		const firstMessage = rawResponse;
		console.log('First message:');
		console.log(firstMessage.toString('hex'), '\n');
		client.write(firstMessage);
	});


}
const value = pointee.readUInt16LE();
console.log(value);


