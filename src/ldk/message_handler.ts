import ffi = require('ffi');
import ref = require('ref');
import * as RawFFI from './ffi';
import RawLDKObject from './RawLDKObject';
import RawLDKTypes from './RawLDKTypes';
import ManyChannelMonitor from './ManyChannelMonitor';
import Logger from './logger';
import KeysInterface from './keys_interface';
import ChannelManager from './channel_manager';
import logger from './logger';

const library = RawFFI.liblightning;

export default class MessageHandler extends RawLDKObject{

	constructor(channelManager: ChannelManager, logger: Logger) {
		super();
		const voidPtrType = ref.refType(ref.types.void);

		const channelMessageHandler = library.ChannelManager_as_ChannelMessageHandler(channelManager.pointer);

		// direct instantiation
		// const channelMessageHandler = new RawFFI.LDKChannelMessageHandler();

		const routingSelf = Buffer.alloc(8);
		const voidPtr = ffi.Callback(ref.types.void, [voidPtrType], (this_arg) => {
			return false;
		});
		const shouldRequestFullSyncCallback = ffi.Callback(ref.types.bool, [voidPtrType, RawFFI.LDKPublicKey], (this_arg, public_key) => {
			return false;
		});


		const testnetNetwork = RawFFI.CONSTANTS.LDKNetwork.LDKNetwork_Testnet;
		const chainWatchInterfaceUtil = library.ChainWatchInterfaceUtil_new(testnetNetwork);
		const chainWatchInterfacePointer = chainWatchInterfaceUtil.ref();
		const chainWatchInterface = library.ChainWatchInterfaceUtil_as_ChainWatchInterface(chainWatchInterfacePointer);
		const netGraphmessageHandler = library.NetGraphMsgHandler_new(chainWatchInterface, logger.direct);
		const netGraphMessageHandlerPointer = netGraphmessageHandler.ref();
		const routingMessageHandler = library.NetGraphMsgHandler_as_RoutingMessageHandler(netGraphMessageHandlerPointer);

		// const routingMessageHandler = new RawFFI.LDKRoutingMessageHandler({
		// 	this_arg: routingSelf,
		// 	handle_node_announcement: voidPtr,
		// 	handle_channel_announcement: voidPtr,
		// 	handle_channel_update: voidPtr,
		// 	handle_htlc_fail_channel_update: voidPtr,
		// 	get_next_channel_announcements: voidPtr,
		// 	get_next_node_announcements: voidPtr,
		// 	should_request_full_sync: shouldRequestFullSyncCallback,
		// });

		this.rawObject = library.MessageHandler_new(channelMessageHandler, routingMessageHandler);
	}

}
