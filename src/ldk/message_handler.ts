import ffi = require('ffi');
import ref = require('ref');
import * as RawFFI from './ffi';
import RawLDKObject from './RawLDKObject';

const library = RawFFI.liblightning;

export default class MessageHandler extends RawLDKObject{

	constructor() {
		super();
		const voidPtrType = ref.refType(ref.types.void);

		// todo: proper construction
		const channelMessageHandler = new RawFFI.LDKChannelMessageHandler();

		const routingSelf = Buffer.alloc(8);
		const voidPtr = ffi.Callback(ref.types.void, [voidPtrType], (this_arg) => {
			return false;
		});
		const shouldRequestFullSyncCallback = ffi.Callback(ref.types.bool, [voidPtrType, RawFFI.LDKPublicKey], (this_arg, public_key) => {
			return false;
		});
		const routingMessageHandler = new RawFFI.LDKRoutingMessageHandler({
			this_arg: routingSelf,
			handle_node_announcement: voidPtr,
			handle_channel_announcement: voidPtr,
			handle_channel_update: voidPtr,
			handle_htlc_fail_channel_update: voidPtr,
			get_next_channel_announcements: voidPtr,
			get_next_node_announcements: voidPtr,
			should_request_full_sync: shouldRequestFullSyncCallback,
		});

		this.rawObject = library.MessageHandler_new(channelMessageHandler, routingMessageHandler);
	}

}
