import ffi = require('ffi');
import ref = require('ref');
import * as RawFFI from './ffi';
import RawLDKObject from './RawLDKObject';

export default class ManyChannelMonitor extends RawLDKObject{

	constructor() {
		super();
		const voidPtrType = ref.refType(ref.types.void);

		const addMonitorCallback = ffi.Callback(RawFFI.LDKCResultTempl_u8__ChannelMonitorUpdateErr, [voidPtrType, RawFFI.LDKOutPoint, RawFFI.LDKChannelMonitor], (this_arg, funding_txo, monitor) => {
			console.log('add monitor callback');
			return new RawFFI.LDKCResultTempl_u8__ChannelMonitorUpdateErr();
		});

		const updateMonitorCallback = ffi.Callback(RawFFI.LDKCResultTempl_u8__ChannelMonitorUpdateErr, [voidPtrType, RawFFI.LDKOutPoint, RawFFI.LDKChannelMonitorUpdate], (this_arg, funding_txo, update) => {
			console.log('update monitor callback');
			return new RawFFI.LDKCResultTempl_u8__ChannelMonitorUpdateErr();
		});

		const clearPendingHTLCsCallback = ffi.Callback(RawFFI.LDKCVecTempl_HTLCUpdate, [voidPtrType], (this_arg) => {
			console.log('clear pending htlcs callback');
			return new RawFFI.LDKCVecTempl_HTLCUpdate();
		});

		this.rawObject = RawFFI.LDKManyChannelMonitor({
			add_monitor: addMonitorCallback,
			update_monitor: updateMonitorCallback,
			get_and_clear_pending_htlcs_updated: clearPendingHTLCsCallback,
		});
	}
}
