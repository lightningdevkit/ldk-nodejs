import ffi = require('ffi');
import ref = require('ref');
import ArrayType = require('ref-array');
import chai = require('chai');

const assert = chai.assert;

import * as RawFFI from '../src/ldk/ffi';
import ManyChannelMonitor from '../src/ManyChannelMonitor';
const library = RawFFI.liblightning;

describe('Node Test', () => {

	it('should construct a node',  () => {

		const privateKey = Buffer.from('ERERERERERERERERERERERERERERERERERERERERERE=', 'base64');
		const ephemeralPrivateKey = Buffer.from('EhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhI=', 'base64');
		const remotePublicKey = Buffer.from('Ao11AN1MEmhdH1aLTCtQSOhTS4czGfOo2qYStGkTLsf3', 'base64');

		const alexPublicKey = Buffer.from('027455aef8453d92f4706b560b61527cc217ddf14da41770e8ed6607190a1851b8', 'hex');


		const testnetNetwork = RawFFI.CONSTANTS.LDKNetwork.LDKNetwork_Testnet;
		const ldkSecretKey = new RawFFI.LDKSecretKey({bytes: [...privateKey]});
		const ldkSecretKeyPointer = ldkSecretKey['ref.buffer'].ref();

		const logCallback = ffi.Callback(ref.types.void, [ref.types.void, ref.types.char], (this_arg, string) => {
			console.log('logging callback');
		});
		const logger = new RawFFI.LDKLogger();

		const feeEstimator = new RawFFI.LDKFeeEstimator({
			this_arg: null,
			get_est_sat_per_1000_weight: null
		});

		const defaultConfig = library.UserConfig_default();
		assert.equal(2+2, 4);

		const mcm = new ManyChannelMonitor();

		const transactionBroadcaster = new RawFFI.LDKBroadcasterInterface();

		const keyManager = library.KeysManager_new(
			ldkSecretKeyPointer,
			1,
			2,
			3
		);

		const keyManagerPointer = keyManager['ref.buffer'].ref();
		const keysInterface = library.KeysManager_as_KeysInterface(keyManagerPointer);

		const channelManager = library.ChannelManager_new(
			testnetNetwork,
			feeEstimator,
			mcm.rawManyChannelMonitor,
			transactionBroadcaster,
			logger,
			keysInterface,
			defaultConfig,
			1027
		);

		assert.equal(channelManager['ref.buffer'].length, 16);

	});

})
