import * as RawFFI from '../src/ldk/ffi';

export default class ManyChannelMonitor {

	public rawManyChannelMonitor;

	constructor() {
		this.rawManyChannelMonitor = RawFFI.LDKManyChannelMonitor()
	}
}
