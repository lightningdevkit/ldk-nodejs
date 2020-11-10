import Logger from './src/ldk/logger';
import KeysInterface from './src/ldk/keys_interface';
import ChannelManager from './src/ldk/channel_manager';
import MessageHandler from './src/ldk/message_handler';
import RawLDKTypes from './src/ldk/RawLDKTypes';
import PeerManager from './src/ldk/peer_manager';

function createPeerManager() {

	const ephemeralPrivateKey = Buffer.from('EhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhI=', 'base64');
	const privateKey = Buffer.from('ERERERERERERERERERERERERERERERERERERERERERE=', 'base64');
	const ldkSecretKey = RawLDKTypes.bufferToSecretKey(privateKey);
	const ldkSecretKeyPointer = ldkSecretKey.ref();

	const logger = new Logger();
	const keysInterface = KeysInterface.default(ldkSecretKeyPointer);

	const channelManager = new ChannelManager(keysInterface, logger)
	const messageHandler = new MessageHandler(channelManager, logger);
	const peerManager = new PeerManager(messageHandler, ldkSecretKey, ephemeralPrivateKey, logger);

	return 'peer manager initiated';
}

export {
	PeerManager,
	createPeerManager
};
