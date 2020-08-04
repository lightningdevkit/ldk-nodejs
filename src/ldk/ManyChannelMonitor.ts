import * as RawFFI from './ffi';
import RawLDKObject from './RawLDKObject';

export default class ManyChannelMonitor extends RawLDKObject{

	constructor() {
		super();
		this.rawObject = RawFFI.LDKManyChannelMonitor();
	}
}
