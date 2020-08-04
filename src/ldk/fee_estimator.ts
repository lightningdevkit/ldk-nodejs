import ffi = require('ffi');
import ref = require('ref');
import * as RawFFI from './ffi';
import RawLDKObject from './RawLDKObject';

export default class FeeEstimator extends RawLDKObject{

	constructor() {
		super();
		this.rawObject = RawFFI.LDKFeeEstimator({
			this_arg: null,
			get_est_sat_per_1000_weight: null
		});
	}

}
