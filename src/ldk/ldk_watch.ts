import ffi = require('ffi');
import ref = require('ref');
import * as RawFFI from './ffi';
import RawLDKObject from './RawLDKObject';

const library = RawFFI.libldk;

export default class LDKWatch extends RawLDKObject{


	constructor() {
		super();
		const voidPtrType = ref.refType(ref.types.void);

		const addChannelMonitorCallback = ffi.Callback(RawFFI.LDKCResultTempl_u8__ChannelMonitorUpdateErr, [voidPtrType, RawFFI.LDKOutPoint, RawFFI.LDKChannelMonitor], (this_arg, funding_txo, monitor) => {
			console.log('add monitor callback');
			return new RawFFI.LDKCResultTempl_u8__ChannelMonitorUpdateErr();
		});

		const updateChannelMonitorCallback = ffi.Callback(RawFFI.LDKCResultTempl_u8__ChannelMonitorUpdateErr, [voidPtrType, RawFFI.LDKOutPoint, RawFFI.LDKChannelMonitorUpdate], (this_arg, funding_txo, update) => {
			console.log('update monitor callback');
			return new RawFFI.LDKCResultTempl_u8__ChannelMonitorUpdateErr();
		});

		const releasePendingMonitorEventsCallback = ffi.Callback(RawFFI.LDKCVecTempl_MonitorEvent, [voidPtrType], (this_arg) => {
			console.log('release pending monitor events callback');
			return new RawFFI.LDKCVecTempl_MonitorEvent();
		});

		this.rawObject = RawFFI.LDKWatch({
			this_arg: Buffer.alloc(8, 2), // random data (TODO: create tracking)
			watch_channel: addChannelMonitorCallback,
			update_channel: updateChannelMonitorCallback,
			release_pending_monitor_events: releasePendingMonitorEventsCallback,
			free: null,
		});
	}
}
