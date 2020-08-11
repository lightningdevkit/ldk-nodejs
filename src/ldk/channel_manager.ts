import ffi = require('ffi');
import ref = require('ref');
import * as RawFFI from './ffi';
import RawLDKObject from './RawLDKObject';
import MessageHandler from './message_handler';
import Logger from './logger';
import RawLDKTypes from './RawLDKTypes';
import ManyChannelMonitor from './ManyChannelMonitor';
import KeysInterface from './keys_interface';

const library = RawFFI.liblightning;

export default class ChannelManager extends RawLDKObject {

	constructor(keysInterface: KeysInterface, logger: Logger) {
		super();
		const voidPtrType = ref.refType(ref.types.void);

		const testnetNetwork = RawFFI.CONSTANTS.LDKNetwork.LDKNetwork_Testnet;

		const weightCallback = ffi.Callback(ref.types.uint64, [voidPtrType, ref.types.uint8], (this_arg, confirmationTarget) => {
			console.log('weight callback');
			return 1;
		});
		const feeEstimator = new RawFFI.LDKFeeEstimator({
			this_arg: Buffer.alloc(8, 2),
			get_est_sat_per_1000_weight: weightCallback
		});

		const defaultConfig = library.UserConfig_default();
		const mcm = new ManyChannelMonitor();

		const broadcastCallback = ffi.Callback(ref.types.void, [voidPtrType, RawFFI.LDKTransaction], (this_arg, tx) => {
			console.log('broadcasting');
		});
		const transactionBroadcaster = new RawFFI.LDKBroadcasterInterface({
			broadcast_transaction: broadcastCallback
		});

		this.rawObject = library.ChannelManager_new(
			testnetNetwork,
			feeEstimator,
			mcm.direct,
			transactionBroadcaster,
			logger.direct,
			keysInterface.direct,
			defaultConfig,
			1027
		);
	}
}
