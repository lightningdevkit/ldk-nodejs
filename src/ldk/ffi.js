var FFI = require('ffi'),
    ArrayType = require('ref-array'),
    Struct = require('ref-struct'),
    ref = require('ref');

var voidPtr = ref.refType(ref.types.void);

exports.CONSTANTS = {
  'LDKChannelMonitorUpdateErr': {
      LDKChannelMonitorUpdateErr_TemporaryFailure: 0,
      LDKChannelMonitorUpdateErr_PermanentFailure: 1,
      LDKChannelMonitorUpdateErr_Sentinel: 2,
      '0': 'LDKChannelMonitorUpdateErr_TemporaryFailure',
      '1': 'LDKChannelMonitorUpdateErr_PermanentFailure',
      '2': 'LDKChannelMonitorUpdateErr_Sentinel',
  },
  'LDKAPIError_Tag': {
      LDKAPIError_APIMisuseError: 0,
      LDKAPIError_FeeRateTooHigh: 1,
      LDKAPIError_RouteError: 2,
      LDKAPIError_ChannelUnavailable: 3,
      LDKAPIError_MonitorUpdateFailed: 4,
      LDKAPIError_Sentinel: 5,
      '0': 'LDKAPIError_APIMisuseError',
      '1': 'LDKAPIError_FeeRateTooHigh',
      '2': 'LDKAPIError_RouteError',
      '3': 'LDKAPIError_ChannelUnavailable',
      '4': 'LDKAPIError_MonitorUpdateFailed',
      '5': 'LDKAPIError_Sentinel',
  },
  'LDKEvent_Tag': {
      LDKEvent_FundingGenerationReady: 0,
      LDKEvent_FundingBroadcastSafe: 1,
      LDKEvent_PaymentReceived: 2,
      LDKEvent_PaymentSent: 3,
      LDKEvent_PaymentFailed: 4,
      LDKEvent_PendingHTLCsForwardable: 5,
      LDKEvent_SpendableOutputs: 6,
      LDKEvent_Sentinel: 7,
      '0': 'LDKEvent_FundingGenerationReady',
      '1': 'LDKEvent_FundingBroadcastSafe',
      '2': 'LDKEvent_PaymentReceived',
      '3': 'LDKEvent_PaymentSent',
      '4': 'LDKEvent_PaymentFailed',
      '5': 'LDKEvent_PendingHTLCsForwardable',
      '6': 'LDKEvent_SpendableOutputs',
      '7': 'LDKEvent_Sentinel',
  },
  'LDKMessageSendEvent_Tag': {
      LDKMessageSendEvent_SendAcceptChannel: 0,
      LDKMessageSendEvent_SendOpenChannel: 1,
      LDKMessageSendEvent_SendFundingCreated: 2,
      LDKMessageSendEvent_SendFundingSigned: 3,
      LDKMessageSendEvent_SendFundingLocked: 4,
      LDKMessageSendEvent_SendAnnouncementSignatures: 5,
      LDKMessageSendEvent_UpdateHTLCs: 6,
      LDKMessageSendEvent_SendRevokeAndACK: 7,
      LDKMessageSendEvent_SendClosingSigned: 8,
      LDKMessageSendEvent_SendShutdown: 9,
      LDKMessageSendEvent_SendChannelReestablish: 10,
      LDKMessageSendEvent_BroadcastChannelAnnouncement: 11,
      LDKMessageSendEvent_BroadcastNodeAnnouncement: 12,
      LDKMessageSendEvent_BroadcastChannelUpdate: 13,
      LDKMessageSendEvent_HandleError: 14,
      LDKMessageSendEvent_PaymentFailureNetworkUpdate: 15,
      LDKMessageSendEvent_Sentinel: 16,
      '0': 'LDKMessageSendEvent_SendAcceptChannel',
      '1': 'LDKMessageSendEvent_SendOpenChannel',
      '2': 'LDKMessageSendEvent_SendFundingCreated',
      '3': 'LDKMessageSendEvent_SendFundingSigned',
      '4': 'LDKMessageSendEvent_SendFundingLocked',
      '5': 'LDKMessageSendEvent_SendAnnouncementSignatures',
      '6': 'LDKMessageSendEvent_UpdateHTLCs',
      '7': 'LDKMessageSendEvent_SendRevokeAndACK',
      '8': 'LDKMessageSendEvent_SendClosingSigned',
      '9': 'LDKMessageSendEvent_SendShutdown',
      '10': 'LDKMessageSendEvent_SendChannelReestablish',
      '11': 'LDKMessageSendEvent_BroadcastChannelAnnouncement',
      '12': 'LDKMessageSendEvent_BroadcastNodeAnnouncement',
      '13': 'LDKMessageSendEvent_BroadcastChannelUpdate',
      '14': 'LDKMessageSendEvent_HandleError',
      '15': 'LDKMessageSendEvent_PaymentFailureNetworkUpdate',
      '16': 'LDKMessageSendEvent_Sentinel',
  },
  'LDKLevel': {
      LDKLevel_Off: 0,
      LDKLevel_Error: 1,
      LDKLevel_Warn: 2,
      LDKLevel_Info: 3,
      LDKLevel_Debug: 4,
      LDKLevel_Trace: 5,
      LDKLevel_Sentinel: 6,
      '0': 'LDKLevel_Off',
      '1': 'LDKLevel_Error',
      '2': 'LDKLevel_Warn',
      '3': 'LDKLevel_Info',
      '4': 'LDKLevel_Debug',
      '5': 'LDKLevel_Trace',
      '6': 'LDKLevel_Sentinel',
  },
  'LDKSpendableOutputDescriptor_Tag': {
      LDKSpendableOutputDescriptor_StaticOutput: 0,
      LDKSpendableOutputDescriptor_DynamicOutputP2WSH: 1,
      LDKSpendableOutputDescriptor_StaticOutputCounterpartyPayment: 2,
      LDKSpendableOutputDescriptor_Sentinel: 3,
      '0': 'LDKSpendableOutputDescriptor_StaticOutput',
      '1': 'LDKSpendableOutputDescriptor_DynamicOutputP2WSH',
      '2': 'LDKSpendableOutputDescriptor_StaticOutputCounterpartyPayment',
      '3': 'LDKSpendableOutputDescriptor_Sentinel',
  },
  'LDKNetAddress_Tag': {
      LDKNetAddress_IPv4: 0,
      LDKNetAddress_IPv6: 1,
      LDKNetAddress_OnionV2: 2,
      LDKNetAddress_OnionV3: 3,
      LDKNetAddress_Sentinel: 4,
      '0': 'LDKNetAddress_IPv4',
      '1': 'LDKNetAddress_IPv6',
      '2': 'LDKNetAddress_OnionV2',
      '3': 'LDKNetAddress_OnionV3',
      '4': 'LDKNetAddress_Sentinel',
  },
  'LDKErrorAction_Tag': {
      LDKErrorAction_DisconnectPeer: 0,
      LDKErrorAction_IgnoreError: 1,
      LDKErrorAction_SendErrorMessage: 2,
      LDKErrorAction_Sentinel: 3,
      '0': 'LDKErrorAction_DisconnectPeer',
      '1': 'LDKErrorAction_IgnoreError',
      '2': 'LDKErrorAction_SendErrorMessage',
      '3': 'LDKErrorAction_Sentinel',
  },
  'LDKHTLCFailChannelUpdate_Tag': {
      LDKHTLCFailChannelUpdate_ChannelUpdateMessage: 0,
      LDKHTLCFailChannelUpdate_ChannelClosed: 1,
      LDKHTLCFailChannelUpdate_NodeFailure: 2,
      LDKHTLCFailChannelUpdate_Sentinel: 3,
      '0': 'LDKHTLCFailChannelUpdate_ChannelUpdateMessage',
      '1': 'LDKHTLCFailChannelUpdate_ChannelClosed',
      '2': 'LDKHTLCFailChannelUpdate_NodeFailure',
      '3': 'LDKHTLCFailChannelUpdate_Sentinel',
  },
  'LDKSecp256k1Error': {
      LDKSecp256k1Error_IncorrectSignature: 0,
      LDKSecp256k1Error_InvalidMessage: 1,
      LDKSecp256k1Error_InvalidPublicKey: 2,
      LDKSecp256k1Error_InvalidSignature: 3,
      LDKSecp256k1Error_InvalidSecretKey: 4,
      LDKSecp256k1Error_InvalidRecoveryId: 5,
      LDKSecp256k1Error_InvalidTweak: 6,
      LDKSecp256k1Error_NotEnoughMemory: 7,
      LDKSecp256k1Error_CallbackPanicked: 8,
      LDKSecp256k1Error_Sentinel: 9,
      '0': 'LDKSecp256k1Error_IncorrectSignature',
      '1': 'LDKSecp256k1Error_InvalidMessage',
      '2': 'LDKSecp256k1Error_InvalidPublicKey',
      '3': 'LDKSecp256k1Error_InvalidSignature',
      '4': 'LDKSecp256k1Error_InvalidSecretKey',
      '5': 'LDKSecp256k1Error_InvalidRecoveryId',
      '6': 'LDKSecp256k1Error_InvalidTweak',
      '7': 'LDKSecp256k1Error_NotEnoughMemory',
      '8': 'LDKSecp256k1Error_CallbackPanicked',
      '9': 'LDKSecp256k1Error_Sentinel',
  },
};

var uint8_t = exports.uint8_t = voidPtr;
var uint8_tPtr = exports.uint8_tPtr = ref.refType(uint8_t);
var LDKTransaction = exports.LDKTransaction = Struct({
  data: uint8_t,
  datalen: ref.types.ulong,
  data_is_owned: ref.types.byte,
});
var LDKTransactionPtr = exports.LDKTransactionPtr = ref.refType(LDKTransaction);
var LDKCVecTempl_u8 = exports.LDKCVecTempl_u8 = Struct({
  data: uint8_tPtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_u8Ptr = exports.LDKCVecTempl_u8Ptr = ref.refType(LDKCVecTempl_u8);
var LDKTxOut = exports.LDKTxOut = Struct({
  script_pubkey: LDKCVecTempl_u8,
  value: ref.types.ulonglong,
});
var LDKTxOutPtr = exports.LDKTxOutPtr = ref.refType(LDKTxOut);
var LDKC2TupleTempl_usize__Transaction = exports.LDKC2TupleTempl_usize__Transaction = Struct({
  a: ref.types.ulong,
  b: LDKTransaction,
});
var LDKC2TupleTempl_usize__TransactionPtr = exports.LDKC2TupleTempl_usize__TransactionPtr = ref.refType(LDKC2TupleTempl_usize__Transaction);
var LDKChannelMonitorUpdateErr = exports.LDKChannelMonitorUpdateErr = Struct({
  LDKChannelMonitorUpdateErr: ref.types.uint32,
});
var LDKChannelMonitorUpdateErrPtr = exports.LDKChannelMonitorUpdateErrPtr = ref.refType(LDKChannelMonitorUpdateErr);
var LDKCResultPtr_u8__ChannelMonitorUpdateErr = exports.LDKCResultPtr_u8__ChannelMonitorUpdateErr = Struct({
  result: uint8_tPtr,
  err: LDKChannelMonitorUpdateErrPtr,
});
var LDKCResultPtr_u8__ChannelMonitorUpdateErrPtr = exports.LDKCResultPtr_u8__ChannelMonitorUpdateErrPtr = ref.refType(LDKCResultPtr_u8__ChannelMonitorUpdateErr);
var LDKCResultTempl_u8__ChannelMonitorUpdateErr = exports.LDKCResultTempl_u8__ChannelMonitorUpdateErr = Struct({
  contents: LDKCResultPtr_u8__ChannelMonitorUpdateErr,
  result_ok: ref.types.byte,
});
var LDKCResultTempl_u8__ChannelMonitorUpdateErrPtr = exports.LDKCResultTempl_u8__ChannelMonitorUpdateErrPtr = ref.refType(LDKCResultTempl_u8__ChannelMonitorUpdateErr);
var LDKMonitorUpdateError = exports.LDKMonitorUpdateError = voidPtr;
var LDKMonitorUpdateErrorPtr = exports.LDKMonitorUpdateErrorPtr = ref.refType(LDKMonitorUpdateError);
var LDKCResultPtr_u8__MonitorUpdateError = exports.LDKCResultPtr_u8__MonitorUpdateError = Struct({
  result: uint8_tPtr,
  err: LDKMonitorUpdateError,
});
var LDKCResultPtr_u8__MonitorUpdateErrorPtr = exports.LDKCResultPtr_u8__MonitorUpdateErrorPtr = ref.refType(LDKCResultPtr_u8__MonitorUpdateError);
var LDKCResultTempl_u8__MonitorUpdateError = exports.LDKCResultTempl_u8__MonitorUpdateError = Struct({
  contents: LDKCResultPtr_u8__MonitorUpdateError,
  result_ok: ref.types.byte,
});
var LDKCResultTempl_u8__MonitorUpdateErrorPtr = exports.LDKCResultTempl_u8__MonitorUpdateErrorPtr = ref.refType(LDKCResultTempl_u8__MonitorUpdateError);
var LDKThirtyTwoBytes = exports.LDKThirtyTwoBytes = Struct({
  data: ArrayType(ref.types.uchar, 32),
});
var LDKThirtyTwoBytesPtr = exports.LDKThirtyTwoBytesPtr = ref.refType(LDKThirtyTwoBytes);
var LDKCVecTempl_TxOut = exports.LDKCVecTempl_TxOut = Struct({
  data: LDKTxOutPtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_TxOutPtr = exports.LDKCVecTempl_TxOutPtr = ref.refType(LDKCVecTempl_TxOut);
var LDKC2TupleTempl_ThirtyTwoBytes__CVecTempl_TxOut = exports.LDKC2TupleTempl_ThirtyTwoBytes__CVecTempl_TxOut = Struct({
  a: LDKThirtyTwoBytes,
  b: LDKCVecTempl_TxOut,
});
var LDKC2TupleTempl_ThirtyTwoBytes__CVecTempl_TxOutPtr = exports.LDKC2TupleTempl_ThirtyTwoBytes__CVecTempl_TxOutPtr = ref.refType(LDKC2TupleTempl_ThirtyTwoBytes__CVecTempl_TxOut);
var LDKC2TupleTempl_u64__u64 = exports.LDKC2TupleTempl_u64__u64 = Struct({
  a: ref.types.ulonglong,
  b: ref.types.ulonglong,
});
var LDKC2TupleTempl_u64__u64Ptr = exports.LDKC2TupleTempl_u64__u64Ptr = ref.refType(LDKC2TupleTempl_u64__u64);
var LDKSignature = exports.LDKSignature = Struct({
  compact_form: ArrayType(ref.types.uchar, 64),
});
var LDKSignaturePtr = exports.LDKSignaturePtr = ref.refType(LDKSignature);
var LDKCVecTempl_Signature = exports.LDKCVecTempl_Signature = Struct({
  data: LDKSignaturePtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_SignaturePtr = exports.LDKCVecTempl_SignaturePtr = ref.refType(LDKCVecTempl_Signature);
var LDKC2TupleTempl_Signature__CVecTempl_Signature = exports.LDKC2TupleTempl_Signature__CVecTempl_Signature = Struct({
  a: LDKSignature,
  b: LDKCVecTempl_Signature,
});
var LDKC2TupleTempl_Signature__CVecTempl_SignaturePtr = exports.LDKC2TupleTempl_Signature__CVecTempl_SignaturePtr = ref.refType(LDKC2TupleTempl_Signature__CVecTempl_Signature);
var LDKCResultPtr_C2TupleTempl_Signature__CVecTempl_Signature________u8 = exports.LDKCResultPtr_C2TupleTempl_Signature__CVecTempl_Signature________u8 = Struct({
  result: LDKC2TupleTempl_Signature__CVecTempl_SignaturePtr,
  err: uint8_tPtr,
});
var LDKCResultPtr_C2TupleTempl_Signature__CVecTempl_Signature________u8Ptr = exports.LDKCResultPtr_C2TupleTempl_Signature__CVecTempl_Signature________u8Ptr = ref.refType(LDKCResultPtr_C2TupleTempl_Signature__CVecTempl_Signature________u8);
var LDKCResultTempl_C2TupleTempl_Signature__CVecTempl_Signature________u8 = exports.LDKCResultTempl_C2TupleTempl_Signature__CVecTempl_Signature________u8 = Struct({
  contents: LDKCResultPtr_C2TupleTempl_Signature__CVecTempl_Signature________u8,
  result_ok: ref.types.byte,
});
var LDKCResultTempl_C2TupleTempl_Signature__CVecTempl_Signature________u8Ptr = exports.LDKCResultTempl_C2TupleTempl_Signature__CVecTempl_Signature________u8Ptr = ref.refType(LDKCResultTempl_C2TupleTempl_Signature__CVecTempl_Signature________u8);
var LDKCResultPtr_Signature__u8 = exports.LDKCResultPtr_Signature__u8 = Struct({
  result: LDKSignaturePtr,
  err: uint8_tPtr,
});
var LDKCResultPtr_Signature__u8Ptr = exports.LDKCResultPtr_Signature__u8Ptr = ref.refType(LDKCResultPtr_Signature__u8);
var LDKCResultTempl_Signature__u8 = exports.LDKCResultTempl_Signature__u8 = Struct({
  contents: LDKCResultPtr_Signature__u8,
  result_ok: ref.types.byte,
});
var LDKCResultTempl_Signature__u8Ptr = exports.LDKCResultTempl_Signature__u8Ptr = ref.refType(LDKCResultTempl_Signature__u8);
var LDKCResultPtr_CVecTempl_Signature_____u8 = exports.LDKCResultPtr_CVecTempl_Signature_____u8 = Struct({
  result: LDKCVecTempl_SignaturePtr,
  err: uint8_tPtr,
});
var LDKCResultPtr_CVecTempl_Signature_____u8Ptr = exports.LDKCResultPtr_CVecTempl_Signature_____u8Ptr = ref.refType(LDKCResultPtr_CVecTempl_Signature_____u8);
var LDKCResultTempl_CVecTempl_Signature_____u8 = exports.LDKCResultTempl_CVecTempl_Signature_____u8 = Struct({
  contents: LDKCResultPtr_CVecTempl_Signature_____u8,
  result_ok: ref.types.byte,
});
var LDKCResultTempl_CVecTempl_Signature_____u8Ptr = exports.LDKCResultTempl_CVecTempl_Signature_____u8Ptr = ref.refType(LDKCResultTempl_CVecTempl_Signature_____u8);
var LDKAPIError = exports.LDKAPIError = voidPtr;
var LDKAPIErrorPtr = exports.LDKAPIErrorPtr = ref.refType(LDKAPIError);
var LDKCResultPtr_u8__APIError = exports.LDKCResultPtr_u8__APIError = Struct({
  result: uint8_tPtr,
  err: LDKAPIError,
});
var LDKCResultPtr_u8__APIErrorPtr = exports.LDKCResultPtr_u8__APIErrorPtr = ref.refType(LDKCResultPtr_u8__APIError);
var LDKCResultTempl_u8__APIError = exports.LDKCResultTempl_u8__APIError = Struct({
  contents: LDKCResultPtr_u8__APIError,
  result_ok: ref.types.byte,
});
var LDKCResultTempl_u8__APIErrorPtr = exports.LDKCResultTempl_u8__APIErrorPtr = ref.refType(LDKCResultTempl_u8__APIError);
var LDKPaymentSendFailure = exports.LDKPaymentSendFailure = voidPtr;
var LDKPaymentSendFailurePtr = exports.LDKPaymentSendFailurePtr = ref.refType(LDKPaymentSendFailure);
var LDKCResultPtr_u8__PaymentSendFailure = exports.LDKCResultPtr_u8__PaymentSendFailure = Struct({
  result: uint8_tPtr,
  err: LDKPaymentSendFailure,
});
var LDKCResultPtr_u8__PaymentSendFailurePtr = exports.LDKCResultPtr_u8__PaymentSendFailurePtr = ref.refType(LDKCResultPtr_u8__PaymentSendFailure);
var LDKCResultTempl_u8__PaymentSendFailure = exports.LDKCResultTempl_u8__PaymentSendFailure = Struct({
  contents: LDKCResultPtr_u8__PaymentSendFailure,
  result_ok: ref.types.byte,
});
var LDKCResultTempl_u8__PaymentSendFailurePtr = exports.LDKCResultTempl_u8__PaymentSendFailurePtr = ref.refType(LDKCResultTempl_u8__PaymentSendFailure);
var LDKPeerHandleError = exports.LDKPeerHandleError = voidPtr;
var LDKPeerHandleErrorPtr = exports.LDKPeerHandleErrorPtr = ref.refType(LDKPeerHandleError);
var LDKCResultPtr_u8__PeerHandleError = exports.LDKCResultPtr_u8__PeerHandleError = Struct({
  result: uint8_tPtr,
  err: LDKPeerHandleError,
});
var LDKCResultPtr_u8__PeerHandleErrorPtr = exports.LDKCResultPtr_u8__PeerHandleErrorPtr = ref.refType(LDKCResultPtr_u8__PeerHandleError);
var LDKCResultTempl_u8__PeerHandleError = exports.LDKCResultTempl_u8__PeerHandleError = Struct({
  contents: LDKCResultPtr_u8__PeerHandleError,
  result_ok: ref.types.byte,
});
var LDKCResultTempl_u8__PeerHandleErrorPtr = exports.LDKCResultTempl_u8__PeerHandleErrorPtr = ref.refType(LDKCResultTempl_u8__PeerHandleError);
var LDKMessageSendEventsProvider = exports.LDKMessageSendEventsProvider = Struct({
  this_arg: voidPtr,
  get_and_clear_pending_msg_events: voidPtr,
  free: voidPtr,
});
var LDKMessageSendEventsProviderPtr = exports.LDKMessageSendEventsProviderPtr = ref.refType(LDKMessageSendEventsProvider);
var LDKEventsProvider = exports.LDKEventsProvider = Struct({
  this_arg: voidPtr,
  get_and_clear_pending_events: voidPtr,
  free: voidPtr,
});
var LDKEventsProviderPtr = exports.LDKEventsProviderPtr = ref.refType(LDKEventsProvider);
var LDKLogger = exports.LDKLogger = Struct({
  this_arg: voidPtr,
  log: voidPtr,
  free: voidPtr,
});
var LDKLoggerPtr = exports.LDKLoggerPtr = ref.refType(LDKLogger);
var LDKChannelHandshakeConfig = exports.LDKChannelHandshakeConfig = voidPtr;
var LDKChannelHandshakeConfigPtr = exports.LDKChannelHandshakeConfigPtr = ref.refType(LDKChannelHandshakeConfig);
var LDKChannelHandshakeLimits = exports.LDKChannelHandshakeLimits = voidPtr;
var LDKChannelHandshakeLimitsPtr = exports.LDKChannelHandshakeLimitsPtr = ref.refType(LDKChannelHandshakeLimits);
var LDKChannelConfig = exports.LDKChannelConfig = voidPtr;
var LDKChannelConfigPtr = exports.LDKChannelConfigPtr = ref.refType(LDKChannelConfig);
var LDKu8slice = exports.LDKu8slice = Struct({
  data: uint8_tPtr,
  datalen: ref.types.ulong,
});
var LDKu8slicePtr = exports.LDKu8slicePtr = ref.refType(LDKu8slice);
var LDKUserConfig = exports.LDKUserConfig = voidPtr;
var LDKUserConfigPtr = exports.LDKUserConfigPtr = ref.refType(LDKUserConfig);
var LDKAccess = exports.LDKAccess = Struct({
  this_arg: voidPtr,
  get_utxo: voidPtr,
  free: voidPtr,
});
var LDKAccessPtr = exports.LDKAccessPtr = ref.refType(LDKAccess);
var LDKWatch = exports.LDKWatch = Struct({
  this_arg: voidPtr,
  watch_channel: voidPtr,
  update_channel: voidPtr,
  release_pending_monitor_events: voidPtr,
  free: voidPtr,
});
var LDKWatchPtr = exports.LDKWatchPtr = ref.refType(LDKWatch);
var LDKFilter = exports.LDKFilter = Struct({
  this_arg: voidPtr,
  register_tx: voidPtr,
  register_output: voidPtr,
  free: voidPtr,
});
var LDKFilterPtr = exports.LDKFilterPtr = ref.refType(LDKFilter);
var LDKBroadcasterInterface = exports.LDKBroadcasterInterface = Struct({
  this_arg: voidPtr,
  broadcast_transaction: voidPtr,
  free: voidPtr,
});
var LDKBroadcasterInterfacePtr = exports.LDKBroadcasterInterfacePtr = ref.refType(LDKBroadcasterInterface);
var LDKFeeEstimator = exports.LDKFeeEstimator = Struct({
  this_arg: voidPtr,
  get_est_sat_per_1000_weight: voidPtr,
  free: voidPtr,
});
var LDKFeeEstimatorPtr = exports.LDKFeeEstimatorPtr = ref.refType(LDKFeeEstimator);
var LDKChainMonitor = exports.LDKChainMonitor = voidPtr;
var LDKChainMonitorPtr = exports.LDKChainMonitorPtr = ref.refType(LDKChainMonitor);
var LDKCVecTempl_C2TupleTempl_usize__Transaction = exports.LDKCVecTempl_C2TupleTempl_usize__Transaction = Struct({
  data: LDKC2TupleTempl_usize__TransactionPtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_C2TupleTempl_usize__TransactionPtr = exports.LDKCVecTempl_C2TupleTempl_usize__TransactionPtr = ref.refType(LDKCVecTempl_C2TupleTempl_usize__Transaction);
var LDKChannelMonitorUpdate = exports.LDKChannelMonitorUpdate = voidPtr;
var LDKChannelMonitorUpdatePtr = exports.LDKChannelMonitorUpdatePtr = ref.refType(LDKChannelMonitorUpdate);
var LDKHTLCUpdate = exports.LDKHTLCUpdate = voidPtr;
var LDKHTLCUpdatePtr = exports.LDKHTLCUpdatePtr = ref.refType(LDKHTLCUpdate);
var LDKChannelMonitor = exports.LDKChannelMonitor = voidPtr;
var LDKChannelMonitorPtr = exports.LDKChannelMonitorPtr = ref.refType(LDKChannelMonitor);
var LDKMonitorEvent = exports.LDKMonitorEvent = voidPtr;
var LDKMonitorEventPtr = exports.LDKMonitorEventPtr = ref.refType(LDKMonitorEvent);
var LDKCVecTempl_MonitorEvent = exports.LDKCVecTempl_MonitorEvent = Struct({
  data: LDKMonitorEvent,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_MonitorEventPtr = exports.LDKCVecTempl_MonitorEventPtr = ref.refType(LDKCVecTempl_MonitorEvent);
var LDKEvent = exports.LDKEvent = voidPtr;
var LDKEventPtr = exports.LDKEventPtr = ref.refType(LDKEvent);
var LDKCVecTempl_Event = exports.LDKCVecTempl_Event = Struct({
  data: LDKEvent,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_EventPtr = exports.LDKCVecTempl_EventPtr = ref.refType(LDKCVecTempl_Event);
var LDKCVecTempl_Transaction = exports.LDKCVecTempl_Transaction = Struct({
  data: LDKTransactionPtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_TransactionPtr = exports.LDKCVecTempl_TransactionPtr = ref.refType(LDKCVecTempl_Transaction);
var LDKCVecTempl_C2TupleTempl_ThirtyTwoBytes__CVecTempl_TxOut = exports.LDKCVecTempl_C2TupleTempl_ThirtyTwoBytes__CVecTempl_TxOut = Struct({
  data: LDKC2TupleTempl_ThirtyTwoBytes__CVecTempl_TxOutPtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_C2TupleTempl_ThirtyTwoBytes__CVecTempl_TxOutPtr = exports.LDKCVecTempl_C2TupleTempl_ThirtyTwoBytes__CVecTempl_TxOutPtr = ref.refType(LDKCVecTempl_C2TupleTempl_ThirtyTwoBytes__CVecTempl_TxOut);
var LDKOutPoint = exports.LDKOutPoint = voidPtr;
var LDKOutPointPtr = exports.LDKOutPointPtr = ref.refType(LDKOutPoint);
var LDKKeysInterface = exports.LDKKeysInterface = Struct({
  this_arg: voidPtr,
  get_node_secret: voidPtr,
  get_destination_script: voidPtr,
  get_shutdown_pubkey: voidPtr,
  get_channel_keys: voidPtr,
  get_secure_random_bytes: voidPtr,
  free: voidPtr,
});
var LDKKeysInterfacePtr = exports.LDKKeysInterfacePtr = ref.refType(LDKKeysInterface);
var LDKInMemoryChannelKeys = exports.LDKInMemoryChannelKeys = voidPtr;
var LDKInMemoryChannelKeysPtr = exports.LDKInMemoryChannelKeysPtr = ref.refType(LDKInMemoryChannelKeys);
var LDKSecretKey = exports.LDKSecretKey = Struct({
  bytes: ArrayType(ref.types.uchar, 32),
});
var LDKSecretKeyPtr = exports.LDKSecretKeyPtr = ref.refType(LDKSecretKey);
var LDKKeysManager = exports.LDKKeysManager = voidPtr;
var LDKKeysManagerPtr = exports.LDKKeysManagerPtr = ref.refType(LDKKeysManager);
var LDKChannelDetails = exports.LDKChannelDetails = voidPtr;
var LDKChannelDetailsPtr = exports.LDKChannelDetailsPtr = ref.refType(LDKChannelDetails);
var LDKPublicKey = exports.LDKPublicKey = Struct({
  compressed_form: ArrayType(ref.types.uchar, 33),
});
var LDKPublicKeyPtr = exports.LDKPublicKeyPtr = ref.refType(LDKPublicKey);
var LDKChannelManager = exports.LDKChannelManager = voidPtr;
var LDKChannelManagerPtr = exports.LDKChannelManagerPtr = ref.refType(LDKChannelManager);
var LDKCVecTempl_ChannelDetails = exports.LDKCVecTempl_ChannelDetails = Struct({
  data: LDKChannelDetailsPtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_ChannelDetailsPtr = exports.LDKCVecTempl_ChannelDetailsPtr = ref.refType(LDKCVecTempl_ChannelDetails);
var LDKRoute = exports.LDKRoute = voidPtr;
var LDKRoutePtr = exports.LDKRoutePtr = ref.refType(LDKRoute);
var LDKThreeBytes = exports.LDKThreeBytes = Struct({
  data: ArrayType(ref.types.uchar, 3),
});
var LDKThreeBytesPtr = exports.LDKThreeBytesPtr = ref.refType(LDKThreeBytes);
var LDKNetAddress = exports.LDKNetAddress = voidPtr;
var LDKNetAddressPtr = exports.LDKNetAddressPtr = ref.refType(LDKNetAddress);
var LDKCVecTempl_NetAddress = exports.LDKCVecTempl_NetAddress = Struct({
  data: LDKNetAddress,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_NetAddressPtr = exports.LDKCVecTempl_NetAddressPtr = ref.refType(LDKCVecTempl_NetAddress);
var LDKChannelMessageHandler = exports.LDKChannelMessageHandler = Struct({
  this_arg: voidPtr,
  handle_open_channel: voidPtr,
  handle_accept_channel: voidPtr,
  handle_funding_created: voidPtr,
  handle_funding_signed: voidPtr,
  handle_funding_locked: voidPtr,
  handle_shutdown: voidPtr,
  handle_closing_signed: voidPtr,
  handle_update_add_htlc: voidPtr,
  handle_update_fulfill_htlc: voidPtr,
  handle_update_fail_htlc: voidPtr,
  handle_update_fail_malformed_htlc: voidPtr,
  handle_commitment_signed: voidPtr,
  handle_revoke_and_ack: voidPtr,
  handle_update_fee: voidPtr,
  handle_announcement_signatures: voidPtr,
  peer_disconnected: voidPtr,
  peer_connected: voidPtr,
  handle_channel_reestablish: voidPtr,
  handle_error: voidPtr,
  MessageSendEventsProvider: LDKMessageSendEventsProvider,
  free: voidPtr,
});
var LDKChannelMessageHandlerPtr = exports.LDKChannelMessageHandlerPtr = ref.refType(LDKChannelMessageHandler);
var LDKChannelManagerReadArgs = exports.LDKChannelManagerReadArgs = voidPtr;
var LDKChannelManagerReadArgsPtr = exports.LDKChannelManagerReadArgsPtr = ref.refType(LDKChannelManagerReadArgs);
var LDKCVecTempl_ChannelMonitor = exports.LDKCVecTempl_ChannelMonitor = Struct({
  data: LDKChannelMonitorPtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_ChannelMonitorPtr = exports.LDKCVecTempl_ChannelMonitorPtr = ref.refType(LDKCVecTempl_ChannelMonitor);
var LDKErrorMessage = exports.LDKErrorMessage = voidPtr;
var LDKErrorMessagePtr = exports.LDKErrorMessagePtr = ref.refType(LDKErrorMessage);
var LDKStr = exports.LDKStr = Struct({
  chars: uint8_tPtr,
  len: ref.types.ulong,
});
var LDKStrPtr = exports.LDKStrPtr = ref.refType(LDKStr);
var LDKPing = exports.LDKPing = voidPtr;
var LDKPingPtr = exports.LDKPingPtr = ref.refType(LDKPing);
var LDKPong = exports.LDKPong = voidPtr;
var LDKPongPtr = exports.LDKPongPtr = ref.refType(LDKPong);
var LDKOpenChannel = exports.LDKOpenChannel = voidPtr;
var LDKOpenChannelPtr = exports.LDKOpenChannelPtr = ref.refType(LDKOpenChannel);
var LDKAcceptChannel = exports.LDKAcceptChannel = voidPtr;
var LDKAcceptChannelPtr = exports.LDKAcceptChannelPtr = ref.refType(LDKAcceptChannel);
var LDKFundingCreated = exports.LDKFundingCreated = voidPtr;
var LDKFundingCreatedPtr = exports.LDKFundingCreatedPtr = ref.refType(LDKFundingCreated);
var LDKFundingSigned = exports.LDKFundingSigned = voidPtr;
var LDKFundingSignedPtr = exports.LDKFundingSignedPtr = ref.refType(LDKFundingSigned);
var LDKFundingLocked = exports.LDKFundingLocked = voidPtr;
var LDKFundingLockedPtr = exports.LDKFundingLockedPtr = ref.refType(LDKFundingLocked);
var LDKShutdown = exports.LDKShutdown = voidPtr;
var LDKShutdownPtr = exports.LDKShutdownPtr = ref.refType(LDKShutdown);
var LDKClosingSigned = exports.LDKClosingSigned = voidPtr;
var LDKClosingSignedPtr = exports.LDKClosingSignedPtr = ref.refType(LDKClosingSigned);
var LDKUpdateAddHTLC = exports.LDKUpdateAddHTLC = voidPtr;
var LDKUpdateAddHTLCPtr = exports.LDKUpdateAddHTLCPtr = ref.refType(LDKUpdateAddHTLC);
var LDKUpdateFulfillHTLC = exports.LDKUpdateFulfillHTLC = voidPtr;
var LDKUpdateFulfillHTLCPtr = exports.LDKUpdateFulfillHTLCPtr = ref.refType(LDKUpdateFulfillHTLC);
var LDKUpdateFailHTLC = exports.LDKUpdateFailHTLC = voidPtr;
var LDKUpdateFailHTLCPtr = exports.LDKUpdateFailHTLCPtr = ref.refType(LDKUpdateFailHTLC);
var LDKUpdateFailMalformedHTLC = exports.LDKUpdateFailMalformedHTLC = voidPtr;
var LDKUpdateFailMalformedHTLCPtr = exports.LDKUpdateFailMalformedHTLCPtr = ref.refType(LDKUpdateFailMalformedHTLC);
var LDKCommitmentSigned = exports.LDKCommitmentSigned = voidPtr;
var LDKCommitmentSignedPtr = exports.LDKCommitmentSignedPtr = ref.refType(LDKCommitmentSigned);
var LDKRevokeAndACK = exports.LDKRevokeAndACK = voidPtr;
var LDKRevokeAndACKPtr = exports.LDKRevokeAndACKPtr = ref.refType(LDKRevokeAndACK);
var LDKUpdateFee = exports.LDKUpdateFee = voidPtr;
var LDKUpdateFeePtr = exports.LDKUpdateFeePtr = ref.refType(LDKUpdateFee);
var LDKDataLossProtect = exports.LDKDataLossProtect = voidPtr;
var LDKDataLossProtectPtr = exports.LDKDataLossProtectPtr = ref.refType(LDKDataLossProtect);
var LDKChannelReestablish = exports.LDKChannelReestablish = voidPtr;
var LDKChannelReestablishPtr = exports.LDKChannelReestablishPtr = ref.refType(LDKChannelReestablish);
var LDKAnnouncementSignatures = exports.LDKAnnouncementSignatures = voidPtr;
var LDKAnnouncementSignaturesPtr = exports.LDKAnnouncementSignaturesPtr = ref.refType(LDKAnnouncementSignatures);
var LDKUnsignedNodeAnnouncement = exports.LDKUnsignedNodeAnnouncement = voidPtr;
var LDKUnsignedNodeAnnouncementPtr = exports.LDKUnsignedNodeAnnouncementPtr = ref.refType(LDKUnsignedNodeAnnouncement);
var LDKNodeAnnouncement = exports.LDKNodeAnnouncement = voidPtr;
var LDKNodeAnnouncementPtr = exports.LDKNodeAnnouncementPtr = ref.refType(LDKNodeAnnouncement);
var LDKUnsignedChannelAnnouncement = exports.LDKUnsignedChannelAnnouncement = voidPtr;
var LDKUnsignedChannelAnnouncementPtr = exports.LDKUnsignedChannelAnnouncementPtr = ref.refType(LDKUnsignedChannelAnnouncement);
var LDKChannelAnnouncement = exports.LDKChannelAnnouncement = voidPtr;
var LDKChannelAnnouncementPtr = exports.LDKChannelAnnouncementPtr = ref.refType(LDKChannelAnnouncement);
var LDKUnsignedChannelUpdate = exports.LDKUnsignedChannelUpdate = voidPtr;
var LDKUnsignedChannelUpdatePtr = exports.LDKUnsignedChannelUpdatePtr = ref.refType(LDKUnsignedChannelUpdate);
var LDKChannelUpdate = exports.LDKChannelUpdate = voidPtr;
var LDKChannelUpdatePtr = exports.LDKChannelUpdatePtr = ref.refType(LDKChannelUpdate);
var LDKQueryChannelRange = exports.LDKQueryChannelRange = voidPtr;
var LDKQueryChannelRangePtr = exports.LDKQueryChannelRangePtr = ref.refType(LDKQueryChannelRange);
var LDKReplyChannelRange = exports.LDKReplyChannelRange = voidPtr;
var LDKReplyChannelRangePtr = exports.LDKReplyChannelRangePtr = ref.refType(LDKReplyChannelRange);
var uint64_t = exports.uint64_t = voidPtr;
var uint64_tPtr = exports.uint64_tPtr = ref.refType(uint64_t);
var LDKCVecTempl_u64 = exports.LDKCVecTempl_u64 = Struct({
  data: uint64_t,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_u64Ptr = exports.LDKCVecTempl_u64Ptr = ref.refType(LDKCVecTempl_u64);
var LDKQueryShortChannelIds = exports.LDKQueryShortChannelIds = voidPtr;
var LDKQueryShortChannelIdsPtr = exports.LDKQueryShortChannelIdsPtr = ref.refType(LDKQueryShortChannelIds);
var LDKReplyShortChannelIdsEnd = exports.LDKReplyShortChannelIdsEnd = voidPtr;
var LDKReplyShortChannelIdsEndPtr = exports.LDKReplyShortChannelIdsEndPtr = ref.refType(LDKReplyShortChannelIdsEnd);
var LDKGossipTimestampFilter = exports.LDKGossipTimestampFilter = voidPtr;
var LDKGossipTimestampFilterPtr = exports.LDKGossipTimestampFilterPtr = ref.refType(LDKGossipTimestampFilter);
var LDKLightningError = exports.LDKLightningError = voidPtr;
var LDKLightningErrorPtr = exports.LDKLightningErrorPtr = ref.refType(LDKLightningError);
var LDKCommitmentUpdate = exports.LDKCommitmentUpdate = voidPtr;
var LDKCommitmentUpdatePtr = exports.LDKCommitmentUpdatePtr = ref.refType(LDKCommitmentUpdate);
var LDKCVecTempl_UpdateAddHTLC = exports.LDKCVecTempl_UpdateAddHTLC = Struct({
  data: LDKUpdateAddHTLCPtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_UpdateAddHTLCPtr = exports.LDKCVecTempl_UpdateAddHTLCPtr = ref.refType(LDKCVecTempl_UpdateAddHTLC);
var LDKCVecTempl_UpdateFulfillHTLC = exports.LDKCVecTempl_UpdateFulfillHTLC = Struct({
  data: LDKUpdateFulfillHTLCPtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_UpdateFulfillHTLCPtr = exports.LDKCVecTempl_UpdateFulfillHTLCPtr = ref.refType(LDKCVecTempl_UpdateFulfillHTLC);
var LDKCVecTempl_UpdateFailHTLC = exports.LDKCVecTempl_UpdateFailHTLC = Struct({
  data: LDKUpdateFailHTLCPtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_UpdateFailHTLCPtr = exports.LDKCVecTempl_UpdateFailHTLCPtr = ref.refType(LDKCVecTempl_UpdateFailHTLC);
var LDKCVecTempl_UpdateFailMalformedHTLC = exports.LDKCVecTempl_UpdateFailMalformedHTLC = Struct({
  data: LDKUpdateFailMalformedHTLCPtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_UpdateFailMalformedHTLCPtr = exports.LDKCVecTempl_UpdateFailMalformedHTLCPtr = ref.refType(LDKCVecTempl_UpdateFailMalformedHTLC);
var LDKRoutingMessageHandler = exports.LDKRoutingMessageHandler = Struct({
  this_arg: voidPtr,
  handle_node_announcement: voidPtr,
  handle_channel_announcement: voidPtr,
  handle_channel_update: voidPtr,
  handle_htlc_fail_channel_update: voidPtr,
  get_next_channel_announcements: voidPtr,
  get_next_node_announcements: voidPtr,
  should_request_full_sync: voidPtr,
  free: voidPtr,
});
var LDKRoutingMessageHandlerPtr = exports.LDKRoutingMessageHandlerPtr = ref.refType(LDKRoutingMessageHandler);
var LDKInit = exports.LDKInit = voidPtr;
var LDKInitPtr = exports.LDKInitPtr = ref.refType(LDKInit);
var LDKMessageHandler = exports.LDKMessageHandler = voidPtr;
var LDKMessageHandlerPtr = exports.LDKMessageHandlerPtr = ref.refType(LDKMessageHandler);
var LDKSocketDescriptor = exports.LDKSocketDescriptor = Struct({
  this_arg: voidPtr,
  send_data: voidPtr,
  disconnect_socket: voidPtr,
  eq: voidPtr,
  hash: voidPtr,
  clone: voidPtr,
  free: voidPtr,
});
var LDKSocketDescriptorPtr = exports.LDKSocketDescriptorPtr = ref.refType(LDKSocketDescriptor);
var LDKCVecTempl_PublicKey = exports.LDKCVecTempl_PublicKey = Struct({
  data: LDKPublicKeyPtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_PublicKeyPtr = exports.LDKCVecTempl_PublicKeyPtr = ref.refType(LDKCVecTempl_PublicKey);
var LDKPeerManager = exports.LDKPeerManager = voidPtr;
var LDKPeerManagerPtr = exports.LDKPeerManagerPtr = ref.refType(LDKPeerManager);
var LDKCResultPtr_CVecTempl_u8_____PeerHandleError = exports.LDKCResultPtr_CVecTempl_u8_____PeerHandleError = Struct({
  result: LDKCVecTempl_u8Ptr,
  err: LDKPeerHandleErrorPtr,
});
var LDKCResultPtr_CVecTempl_u8_____PeerHandleErrorPtr = exports.LDKCResultPtr_CVecTempl_u8_____PeerHandleErrorPtr = ref.refType(LDKCResultPtr_CVecTempl_u8_____PeerHandleError);
var LDKCResultTempl_CVecTempl_u8_____PeerHandleError = exports.LDKCResultTempl_CVecTempl_u8_____PeerHandleError = Struct({
  contents: LDKCResultPtr_CVecTempl_u8_____PeerHandleError,
  result_ok: ref.types.byte,
});
var LDKCResultTempl_CVecTempl_u8_____PeerHandleErrorPtr = exports.LDKCResultTempl_CVecTempl_u8_____PeerHandleErrorPtr = ref.refType(LDKCResultTempl_CVecTempl_u8_____PeerHandleError);
var LDKCResultPtr_bool__PeerHandleError = exports.LDKCResultPtr_bool__PeerHandleError = Struct({
  result: ref.refType(ref.types.byte),
  err: LDKPeerHandleErrorPtr,
});
var LDKCResultPtr_bool__PeerHandleErrorPtr = exports.LDKCResultPtr_bool__PeerHandleErrorPtr = ref.refType(LDKCResultPtr_bool__PeerHandleError);
var LDKCResultTempl_bool__PeerHandleError = exports.LDKCResultTempl_bool__PeerHandleError = Struct({
  contents: LDKCResultPtr_bool__PeerHandleError,
  result_ok: ref.types.byte,
});
var LDKCResultTempl_bool__PeerHandleErrorPtr = exports.LDKCResultTempl_bool__PeerHandleErrorPtr = ref.refType(LDKCResultTempl_bool__PeerHandleError);
var LDKSecp256k1Error = exports.LDKSecp256k1Error = Struct({
  LDKSecp256k1Error: ref.types.uint32,
});
var LDKSecp256k1ErrorPtr = exports.LDKSecp256k1ErrorPtr = ref.refType(LDKSecp256k1Error);
var LDKCResultPtr_SecretKey__Secp256k1Error = exports.LDKCResultPtr_SecretKey__Secp256k1Error = Struct({
  result: LDKSecretKeyPtr,
  err: LDKSecp256k1ErrorPtr,
});
var LDKCResultPtr_SecretKey__Secp256k1ErrorPtr = exports.LDKCResultPtr_SecretKey__Secp256k1ErrorPtr = ref.refType(LDKCResultPtr_SecretKey__Secp256k1Error);
var LDKCResultTempl_SecretKey__Secp256k1Error = exports.LDKCResultTempl_SecretKey__Secp256k1Error = Struct({
  contents: LDKCResultPtr_SecretKey__Secp256k1Error,
  result_ok: ref.types.byte,
});
var LDKCResultTempl_SecretKey__Secp256k1ErrorPtr = exports.LDKCResultTempl_SecretKey__Secp256k1ErrorPtr = ref.refType(LDKCResultTempl_SecretKey__Secp256k1Error);
var LDKCResultPtr_PublicKey__Secp256k1Error = exports.LDKCResultPtr_PublicKey__Secp256k1Error = Struct({
  result: LDKPublicKeyPtr,
  err: LDKSecp256k1ErrorPtr,
});
var LDKCResultPtr_PublicKey__Secp256k1ErrorPtr = exports.LDKCResultPtr_PublicKey__Secp256k1ErrorPtr = ref.refType(LDKCResultPtr_PublicKey__Secp256k1Error);
var LDKCResultTempl_PublicKey__Secp256k1Error = exports.LDKCResultTempl_PublicKey__Secp256k1Error = Struct({
  contents: LDKCResultPtr_PublicKey__Secp256k1Error,
  result_ok: ref.types.byte,
});
var LDKCResultTempl_PublicKey__Secp256k1ErrorPtr = exports.LDKCResultTempl_PublicKey__Secp256k1ErrorPtr = ref.refType(LDKCResultTempl_PublicKey__Secp256k1Error);
var LDKTxCreationKeys = exports.LDKTxCreationKeys = voidPtr;
var LDKTxCreationKeysPtr = exports.LDKTxCreationKeysPtr = ref.refType(LDKTxCreationKeys);
var LDKPreCalculatedTxCreationKeys = exports.LDKPreCalculatedTxCreationKeys = voidPtr;
var LDKPreCalculatedTxCreationKeysPtr = exports.LDKPreCalculatedTxCreationKeysPtr = ref.refType(LDKPreCalculatedTxCreationKeys);
var LDKChannelPublicKeys = exports.LDKChannelPublicKeys = voidPtr;
var LDKChannelPublicKeysPtr = exports.LDKChannelPublicKeysPtr = ref.refType(LDKChannelPublicKeys);
var LDKCResultPtr_TxCreationKeys__Secp256k1Error = exports.LDKCResultPtr_TxCreationKeys__Secp256k1Error = Struct({
  result: LDKTxCreationKeysPtr,
  err: LDKSecp256k1ErrorPtr,
});
var LDKCResultPtr_TxCreationKeys__Secp256k1ErrorPtr = exports.LDKCResultPtr_TxCreationKeys__Secp256k1ErrorPtr = ref.refType(LDKCResultPtr_TxCreationKeys__Secp256k1Error);
var LDKCResultTempl_TxCreationKeys__Secp256k1Error = exports.LDKCResultTempl_TxCreationKeys__Secp256k1Error = Struct({
  contents: LDKCResultPtr_TxCreationKeys__Secp256k1Error,
  result_ok: ref.types.byte,
});
var LDKCResultTempl_TxCreationKeys__Secp256k1ErrorPtr = exports.LDKCResultTempl_TxCreationKeys__Secp256k1ErrorPtr = ref.refType(LDKCResultTempl_TxCreationKeys__Secp256k1Error);
var LDKHTLCOutputInCommitment = exports.LDKHTLCOutputInCommitment = voidPtr;
var LDKHTLCOutputInCommitmentPtr = exports.LDKHTLCOutputInCommitmentPtr = ref.refType(LDKHTLCOutputInCommitment);
var LDKHolderCommitmentTransaction = exports.LDKHolderCommitmentTransaction = voidPtr;
var LDKHolderCommitmentTransactionPtr = exports.LDKHolderCommitmentTransactionPtr = ref.refType(LDKHolderCommitmentTransaction);
var LDKC2TupleTempl_HTLCOutputInCommitment__Signature = exports.LDKC2TupleTempl_HTLCOutputInCommitment__Signature = Struct({
  a: LDKHTLCOutputInCommitment,
  b: LDKSignature,
});
var LDKC2TupleTempl_HTLCOutputInCommitment__SignaturePtr = exports.LDKC2TupleTempl_HTLCOutputInCommitment__SignaturePtr = ref.refType(LDKC2TupleTempl_HTLCOutputInCommitment__Signature);
var LDKCVecTempl_C2TupleTempl_HTLCOutputInCommitment__Signature = exports.LDKCVecTempl_C2TupleTempl_HTLCOutputInCommitment__Signature = Struct({
  data: LDKC2TupleTempl_HTLCOutputInCommitment__SignaturePtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_C2TupleTempl_HTLCOutputInCommitment__SignaturePtr = exports.LDKCVecTempl_C2TupleTempl_HTLCOutputInCommitment__SignaturePtr = ref.refType(LDKCVecTempl_C2TupleTempl_HTLCOutputInCommitment__Signature);
var LDKRouteHop = exports.LDKRouteHop = voidPtr;
var LDKRouteHopPtr = exports.LDKRouteHopPtr = ref.refType(LDKRouteHop);
var LDKCVecTempl_RouteHop = exports.LDKCVecTempl_RouteHop = Struct({
  data: LDKRouteHopPtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_RouteHopPtr = exports.LDKCVecTempl_RouteHopPtr = ref.refType(LDKCVecTempl_RouteHop);
var LDKCVecTempl_CVecTempl_RouteHop = exports.LDKCVecTempl_CVecTempl_RouteHop = Struct({
  data: LDKCVecTempl_RouteHopPtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_CVecTempl_RouteHopPtr = exports.LDKCVecTempl_CVecTempl_RouteHopPtr = ref.refType(LDKCVecTempl_CVecTempl_RouteHop);
var LDKRouteHint = exports.LDKRouteHint = voidPtr;
var LDKRouteHintPtr = exports.LDKRouteHintPtr = ref.refType(LDKRouteHint);
var LDKCResultPtr_Route__LightningError = exports.LDKCResultPtr_Route__LightningError = Struct({
  result: LDKRoutePtr,
  err: LDKLightningErrorPtr,
});
var LDKCResultPtr_Route__LightningErrorPtr = exports.LDKCResultPtr_Route__LightningErrorPtr = ref.refType(LDKCResultPtr_Route__LightningError);
var LDKCResultTempl_Route__LightningError = exports.LDKCResultTempl_Route__LightningError = Struct({
  contents: LDKCResultPtr_Route__LightningError,
  result_ok: ref.types.byte,
});
var LDKCResultTempl_Route__LightningErrorPtr = exports.LDKCResultTempl_Route__LightningErrorPtr = ref.refType(LDKCResultTempl_Route__LightningError);
var LDKNetworkGraph = exports.LDKNetworkGraph = voidPtr;
var LDKNetworkGraphPtr = exports.LDKNetworkGraphPtr = ref.refType(LDKNetworkGraph);
var LDKCVec_ChannelDetailsZ = exports.LDKCVec_ChannelDetailsZ = Struct({
  LDKCVecTempl_ChannelDetails: LDKCVecTempl_ChannelDetails,
});
var LDKCVec_ChannelDetailsZPtr = exports.LDKCVec_ChannelDetailsZPtr = ref.refType(LDKCVec_ChannelDetailsZ);
var LDKCVecTempl_RouteHint = exports.LDKCVecTempl_RouteHint = Struct({
  data: LDKRouteHintPtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_RouteHintPtr = exports.LDKCVecTempl_RouteHintPtr = ref.refType(LDKCVecTempl_RouteHint);
var LDKLockedNetworkGraph = exports.LDKLockedNetworkGraph = voidPtr;
var LDKLockedNetworkGraphPtr = exports.LDKLockedNetworkGraphPtr = ref.refType(LDKLockedNetworkGraph);
var LDKNetGraphMsgHandler = exports.LDKNetGraphMsgHandler = voidPtr;
var LDKNetGraphMsgHandlerPtr = exports.LDKNetGraphMsgHandlerPtr = ref.refType(LDKNetGraphMsgHandler);
var LDKDirectionalChannelInfo = exports.LDKDirectionalChannelInfo = voidPtr;
var LDKDirectionalChannelInfoPtr = exports.LDKDirectionalChannelInfoPtr = ref.refType(LDKDirectionalChannelInfo);
var LDKChannelInfo = exports.LDKChannelInfo = voidPtr;
var LDKChannelInfoPtr = exports.LDKChannelInfoPtr = ref.refType(LDKChannelInfo);
var LDKRoutingFees = exports.LDKRoutingFees = voidPtr;
var LDKRoutingFeesPtr = exports.LDKRoutingFeesPtr = ref.refType(LDKRoutingFees);
var LDKNodeAnnouncementInfo = exports.LDKNodeAnnouncementInfo = voidPtr;
var LDKNodeAnnouncementInfoPtr = exports.LDKNodeAnnouncementInfoPtr = ref.refType(LDKNodeAnnouncementInfo);
var LDKNodeInfo = exports.LDKNodeInfo = voidPtr;
var LDKNodeInfoPtr = exports.LDKNodeInfoPtr = ref.refType(LDKNodeInfo);

exports.libldk = new FFI.Library(__dirname + '/../../lib/libldk', {
  Transaction_free: [ref.types.void, [
    LDKTransaction,
  ]],
  TxOut_free: [ref.types.void, [
    LDKTxOut,
  ]],
  C2Tuple_usizeTransactionZ_new: [LDKC2TupleTempl_usize__Transaction, [
    ref.types.ulong,
    LDKTransaction,
  ]],
  CResult_NoneChannelMonitorUpdateErrZ_ok: [LDKCResultTempl_u8__ChannelMonitorUpdateErr, [
  ]],
  CResult_NoneMonitorUpdateErrorZ_ok: [LDKCResultTempl_u8__MonitorUpdateError, [
  ]],
  C2Tuple_TxidCVec_TxOutZZ_new: [LDKC2TupleTempl_ThirtyTwoBytes__CVecTempl_TxOut, [
    LDKThirtyTwoBytes,
    LDKCVecTempl_TxOut,
  ]],
  C2Tuple_u64u64Z_new: [LDKC2TupleTempl_u64__u64, [
    ref.types.ulonglong,
    ref.types.ulonglong,
  ]],
  C2Tuple_SignatureCVec_SignatureZZ_new: [LDKC2TupleTempl_Signature__CVecTempl_Signature, [
    LDKSignature,
    LDKCVecTempl_Signature,
  ]],
  CResult_C2Tuple_SignatureCVec_SignatureZZNoneZ_err: [LDKCResultTempl_C2TupleTempl_Signature__CVecTempl_Signature________u8, [
  ]],
  CResult_SignatureNoneZ_err: [LDKCResultTempl_Signature__u8, [
  ]],
  CResult_CVec_SignatureZNoneZ_err: [LDKCResultTempl_CVecTempl_Signature_____u8, [
  ]],
  CResult_NoneAPIErrorZ_ok: [LDKCResultTempl_u8__APIError, [
  ]],
  CResult_NonePaymentSendFailureZ_ok: [LDKCResultTempl_u8__PaymentSendFailure, [
  ]],
  CResult_NonePeerHandleErrorZ_ok: [LDKCResultTempl_u8__PeerHandleError, [
  ]],
  MessageSendEventsProvider_free: [ref.types.void, [
    LDKMessageSendEventsProvider,
  ]],
  EventsProvider_free: [ref.types.void, [
    LDKEventsProvider,
  ]],
  APIError_free: [ref.types.void, [
    LDKAPIError,
  ]],
  Level_max: [ref.types.uint32, [
  ]],
  Logger_free: [ref.types.void, [
    LDKLogger,
  ]],
  ChannelHandshakeConfig_get_minimum_depth: [ref.types.uint32, [
    LDKChannelHandshakeConfig,
  ]],
  ChannelHandshakeConfig_set_minimum_depth: [ref.types.void, [
    LDKChannelHandshakeConfigPtr,
    ref.types.uint32,
  ]],
  ChannelHandshakeConfig_get_our_to_self_delay: [ref.types.ushort, [
    LDKChannelHandshakeConfigPtr,
  ]],
  ChannelHandshakeConfig_set_our_to_self_delay: [ref.types.void, [
    LDKChannelHandshakeConfigPtr,
    ref.types.ushort,
  ]],
  ChannelHandshakeConfig_get_our_htlc_minimum_msat: [ref.types.ulonglong, [
    LDKChannelHandshakeConfigPtr,
  ]],
  ChannelHandshakeConfig_set_our_htlc_minimum_msat: [ref.types.void, [
    LDKChannelHandshakeConfigPtr,
    ref.types.ulonglong,
  ]],
  ChannelHandshakeConfig_new: [LDKChannelHandshakeConfig, [
    ref.types.uint32,
    ref.types.ushort,
    ref.types.ulonglong,
  ]],
  ChannelHandshakeConfig_default: [LDKChannelHandshakeConfig, [
  ]],
  ChannelHandshakeLimits_get_min_funding_satoshis: [ref.types.ulonglong, [
    LDKChannelHandshakeLimits,
  ]],
  ChannelHandshakeLimits_set_min_funding_satoshis: [ref.types.void, [
    LDKChannelHandshakeLimitsPtr,
    ref.types.ulonglong,
  ]],
  ChannelHandshakeLimits_get_max_htlc_minimum_msat: [ref.types.ulonglong, [
    LDKChannelHandshakeLimitsPtr,
  ]],
  ChannelHandshakeLimits_set_max_htlc_minimum_msat: [ref.types.void, [
    LDKChannelHandshakeLimitsPtr,
    ref.types.ulonglong,
  ]],
  ChannelHandshakeLimits_get_min_max_htlc_value_in_flight_msat: [ref.types.ulonglong, [
    LDKChannelHandshakeLimitsPtr,
  ]],
  ChannelHandshakeLimits_set_min_max_htlc_value_in_flight_msat: [ref.types.void, [
    LDKChannelHandshakeLimitsPtr,
    ref.types.ulonglong,
  ]],
  ChannelHandshakeLimits_get_max_channel_reserve_satoshis: [ref.types.ulonglong, [
    LDKChannelHandshakeLimitsPtr,
  ]],
  ChannelHandshakeLimits_set_max_channel_reserve_satoshis: [ref.types.void, [
    LDKChannelHandshakeLimitsPtr,
    ref.types.ulonglong,
  ]],
  ChannelHandshakeLimits_get_min_max_accepted_htlcs: [ref.types.ushort, [
    LDKChannelHandshakeLimitsPtr,
  ]],
  ChannelHandshakeLimits_set_min_max_accepted_htlcs: [ref.types.void, [
    LDKChannelHandshakeLimitsPtr,
    ref.types.ushort,
  ]],
  ChannelHandshakeLimits_get_min_dust_limit_satoshis: [ref.types.ulonglong, [
    LDKChannelHandshakeLimitsPtr,
  ]],
  ChannelHandshakeLimits_set_min_dust_limit_satoshis: [ref.types.void, [
    LDKChannelHandshakeLimitsPtr,
    ref.types.ulonglong,
  ]],
  ChannelHandshakeLimits_get_max_dust_limit_satoshis: [ref.types.ulonglong, [
    LDKChannelHandshakeLimitsPtr,
  ]],
  ChannelHandshakeLimits_set_max_dust_limit_satoshis: [ref.types.void, [
    LDKChannelHandshakeLimitsPtr,
    ref.types.ulonglong,
  ]],
  ChannelHandshakeLimits_get_max_minimum_depth: [ref.types.uint32, [
    LDKChannelHandshakeLimitsPtr,
  ]],
  ChannelHandshakeLimits_set_max_minimum_depth: [ref.types.void, [
    LDKChannelHandshakeLimitsPtr,
    ref.types.uint32,
  ]],
  ChannelHandshakeLimits_get_force_announced_channel_preference: [ref.types.byte, [
    LDKChannelHandshakeLimitsPtr,
  ]],
  ChannelHandshakeLimits_set_force_announced_channel_preference: [ref.types.void, [
    LDKChannelHandshakeLimitsPtr,
    ref.types.byte,
  ]],
  ChannelHandshakeLimits_get_their_to_self_delay: [ref.types.ushort, [
    LDKChannelHandshakeLimitsPtr,
  ]],
  ChannelHandshakeLimits_set_their_to_self_delay: [ref.types.void, [
    LDKChannelHandshakeLimitsPtr,
    ref.types.ushort,
  ]],
  ChannelHandshakeLimits_new: [LDKChannelHandshakeLimits, [
    ref.types.ulonglong,
    ref.types.ulonglong,
    ref.types.ulonglong,
    ref.types.ulonglong,
    ref.types.ushort,
    ref.types.ulonglong,
    ref.types.ulonglong,
    ref.types.uint32,
    ref.types.byte,
    ref.types.ushort,
  ]],
  ChannelHandshakeLimits_default: [LDKChannelHandshakeLimits, [
  ]],
  ChannelConfig_get_fee_proportional_millionths: [ref.types.uint32, [
    LDKChannelConfig,
  ]],
  ChannelConfig_set_fee_proportional_millionths: [ref.types.void, [
    LDKChannelConfigPtr,
    ref.types.uint32,
  ]],
  ChannelConfig_get_announced_channel: [ref.types.byte, [
    LDKChannelConfigPtr,
  ]],
  ChannelConfig_set_announced_channel: [ref.types.void, [
    LDKChannelConfigPtr,
    ref.types.byte,
  ]],
  ChannelConfig_get_commit_upfront_shutdown_pubkey: [ref.types.byte, [
    LDKChannelConfigPtr,
  ]],
  ChannelConfig_set_commit_upfront_shutdown_pubkey: [ref.types.void, [
    LDKChannelConfigPtr,
    ref.types.byte,
  ]],
  ChannelConfig_new: [LDKChannelConfig, [
    ref.types.uint32,
    ref.types.byte,
    ref.types.byte,
  ]],
  ChannelConfig_default: [LDKChannelConfig, [
  ]],
  ChannelConfig_write: [LDKCVecTempl_u8, [
    LDKChannelConfigPtr,
  ]],
  ChannelConfig_read: [LDKChannelConfig, [
    LDKu8slice,
  ]],
  UserConfig_get_own_channel_config: [LDKChannelHandshakeConfig, [
    LDKUserConfig,
  ]],
  UserConfig_set_own_channel_config: [ref.types.void, [
    LDKUserConfigPtr,
    LDKChannelHandshakeConfig,
  ]],
  UserConfig_get_peer_channel_config_limits: [LDKChannelHandshakeLimits, [
    LDKUserConfigPtr,
  ]],
  UserConfig_set_peer_channel_config_limits: [ref.types.void, [
    LDKUserConfigPtr,
    LDKChannelHandshakeLimits,
  ]],
  UserConfig_get_channel_options: [LDKChannelConfig, [
    LDKUserConfigPtr,
  ]],
  UserConfig_set_channel_options: [ref.types.void, [
    LDKUserConfigPtr,
    LDKChannelConfig,
  ]],
  UserConfig_new: [LDKUserConfig, [
    LDKChannelHandshakeConfig,
    LDKChannelHandshakeLimits,
    LDKChannelConfig,
  ]],
  UserConfig_default: [LDKUserConfig, [
  ]],
  Access_free: [ref.types.void, [
    LDKAccess,
  ]],
  Watch_free: [ref.types.void, [
    LDKWatch,
  ]],
  Filter_free: [ref.types.void, [
    LDKFilter,
  ]],
  BroadcasterInterface_free: [ref.types.void, [
    LDKBroadcasterInterface,
  ]],
  FeeEstimator_free: [ref.types.void, [
    LDKFeeEstimator,
  ]],
  ChainMonitor_block_connected: [ref.types.void, [
    LDKChainMonitor,
    voidPtr,
    LDKCVecTempl_C2TupleTempl_usize__Transaction,
    ref.types.uint32,
  ]],
  ChainMonitor_block_disconnected: [ref.types.void, [
    LDKChainMonitorPtr,
    voidPtr,
    ref.types.uint32,
  ]],
  ChainMonitor_new: [LDKChainMonitor, [
    LDKFilterPtr,
    LDKBroadcasterInterface,
    LDKLogger,
    LDKFeeEstimator,
  ]],
  ChainMonitor_as_Watch: [LDKWatch, [
    LDKChainMonitorPtr,
  ]],
  ChainMonitor_as_EventsProvider: [LDKEventsProvider, [
    LDKChainMonitorPtr,
  ]],
  ChannelMonitorUpdate_get_update_id: [ref.types.ulonglong, [
    LDKChannelMonitorUpdate,
  ]],
  ChannelMonitorUpdate_set_update_id: [ref.types.void, [
    LDKChannelMonitorUpdatePtr,
    ref.types.ulonglong,
  ]],
  ChannelMonitorUpdate_write: [LDKCVecTempl_u8, [
    LDKChannelMonitorUpdatePtr,
  ]],
  ChannelMonitorUpdate_read: [LDKChannelMonitorUpdate, [
    LDKu8slice,
  ]],
  MonitorUpdateError_free: [ref.types.void, [
    LDKMonitorUpdateError,
  ]],
  HTLCUpdate_write: [LDKCVecTempl_u8, [
    LDKHTLCUpdate,
  ]],
  HTLCUpdate_read: [LDKHTLCUpdate, [
    LDKu8slice,
  ]],
  ChannelMonitor_update_monitor: [LDKCResultTempl_u8__MonitorUpdateError, [
    LDKChannelMonitor,
    LDKChannelMonitorUpdate,
    LDKBroadcasterInterfacePtr,
    LDKLoggerPtr,
  ]],
  ChannelMonitor_get_latest_update_id: [ref.types.ulonglong, [
    LDKChannelMonitorPtr,
  ]],
  ChannelMonitor_get_and_clear_pending_monitor_events: [LDKCVecTempl_MonitorEvent, [
    LDKChannelMonitorPtr,
  ]],
  ChannelMonitor_get_and_clear_pending_events: [LDKCVecTempl_Event, [
    LDKChannelMonitorPtr,
  ]],
  ChannelMonitor_get_latest_holder_commitment_txn: [LDKCVecTempl_Transaction, [
    LDKChannelMonitorPtr,
    LDKLoggerPtr,
  ]],
  ChannelMonitor_block_connected: [LDKCVecTempl_C2TupleTempl_ThirtyTwoBytes__CVecTempl_TxOut, [
    LDKChannelMonitorPtr,
    voidPtr,
    LDKCVecTempl_C2TupleTempl_usize__Transaction,
    ref.types.uint32,
    LDKBroadcasterInterface,
    LDKFeeEstimator,
    LDKLogger,
  ]],
  ChannelMonitor_block_disconnected: [ref.types.void, [
    LDKChannelMonitorPtr,
    voidPtr,
    ref.types.uint32,
    LDKBroadcasterInterface,
    LDKFeeEstimator,
    LDKLogger,
  ]],
  OutPoint_get_txid: [voidPtr, [
    LDKOutPoint,
  ]],
  OutPoint_set_txid: [ref.types.void, [
    LDKOutPointPtr,
    LDKThirtyTwoBytes,
  ]],
  OutPoint_get_index: [ref.types.ushort, [
    LDKOutPointPtr,
  ]],
  OutPoint_set_index: [ref.types.void, [
    LDKOutPointPtr,
    ref.types.ushort,
  ]],
  OutPoint_new: [LDKOutPoint, [
    LDKThirtyTwoBytes,
    ref.types.ushort,
  ]],
  OutPoint_to_channel_id: [LDKThirtyTwoBytes, [
    LDKOutPointPtr,
  ]],
  OutPoint_write: [LDKCVecTempl_u8, [
    LDKOutPointPtr,
  ]],
  OutPoint_read: [LDKOutPoint, [
    LDKu8slice,
  ]],
  KeysInterface_free: [ref.types.void, [
    LDKKeysInterface,
  ]],
  InMemoryChannelKeys_get_funding_key: [voidPtr, [
    LDKInMemoryChannelKeys,
  ]],
  InMemoryChannelKeys_set_funding_key: [ref.types.void, [
    LDKInMemoryChannelKeysPtr,
    LDKSecretKey,
  ]],
  InMemoryChannelKeys_get_revocation_base_key: [voidPtr, [
    LDKInMemoryChannelKeysPtr,
  ]],
  InMemoryChannelKeys_set_revocation_base_key: [ref.types.void, [
    LDKInMemoryChannelKeysPtr,
    LDKSecretKey,
  ]],
  InMemoryChannelKeys_get_payment_key: [voidPtr, [
    LDKInMemoryChannelKeysPtr,
  ]],
  InMemoryChannelKeys_set_payment_key: [ref.types.void, [
    LDKInMemoryChannelKeysPtr,
    LDKSecretKey,
  ]],
  InMemoryChannelKeys_get_delayed_payment_base_key: [voidPtr, [
    LDKInMemoryChannelKeysPtr,
  ]],
  InMemoryChannelKeys_set_delayed_payment_base_key: [ref.types.void, [
    LDKInMemoryChannelKeysPtr,
    LDKSecretKey,
  ]],
  InMemoryChannelKeys_get_htlc_base_key: [voidPtr, [
    LDKInMemoryChannelKeysPtr,
  ]],
  InMemoryChannelKeys_set_htlc_base_key: [ref.types.void, [
    LDKInMemoryChannelKeysPtr,
    LDKSecretKey,
  ]],
  InMemoryChannelKeys_get_commitment_seed: [voidPtr, [
    LDKInMemoryChannelKeysPtr,
  ]],
  InMemoryChannelKeys_set_commitment_seed: [ref.types.void, [
    LDKInMemoryChannelKeysPtr,
    LDKThirtyTwoBytes,
  ]],
  InMemoryChannelKeys_new: [LDKInMemoryChannelKeys, [
    LDKSecretKey,
    LDKSecretKey,
    LDKSecretKey,
    LDKSecretKey,
    LDKSecretKey,
    LDKThirtyTwoBytes,
    ref.types.ulonglong,
    LDKC2TupleTempl_u64__u64,
  ]],
  InMemoryChannelKeys_counterparty_selected_contest_delay: [ref.types.ushort, [
    LDKInMemoryChannelKeysPtr,
  ]],
  InMemoryChannelKeys_holder_selected_contest_delay: [ref.types.ushort, [
    LDKInMemoryChannelKeysPtr,
  ]],
  InMemoryChannelKeys_write: [LDKCVecTempl_u8, [
    LDKInMemoryChannelKeysPtr,
  ]],
  InMemoryChannelKeys_read: [LDKInMemoryChannelKeys, [
    LDKu8slice,
  ]],
  KeysManager_derive_channel_keys: [LDKInMemoryChannelKeys, [
    LDKKeysManager,
    ref.types.ulonglong,
    ref.types.ulonglong,
    ref.types.ulonglong,
  ]],
  KeysManager_as_KeysInterface: [LDKKeysInterface, [
    LDKKeysManagerPtr,
  ]],
  ChannelDetails_get_channel_id: [voidPtr, [
    LDKChannelDetails,
  ]],
  ChannelDetails_set_channel_id: [ref.types.void, [
    LDKChannelDetailsPtr,
    LDKThirtyTwoBytes,
  ]],
  ChannelDetails_get_remote_network_id: [LDKPublicKey, [
    LDKChannelDetailsPtr,
  ]],
  ChannelDetails_set_remote_network_id: [ref.types.void, [
    LDKChannelDetailsPtr,
    LDKPublicKey,
  ]],
  ChannelDetails_get_channel_value_satoshis: [ref.types.ulonglong, [
    LDKChannelDetailsPtr,
  ]],
  ChannelDetails_set_channel_value_satoshis: [ref.types.void, [
    LDKChannelDetailsPtr,
    ref.types.ulonglong,
  ]],
  ChannelDetails_get_user_id: [ref.types.ulonglong, [
    LDKChannelDetailsPtr,
  ]],
  ChannelDetails_set_user_id: [ref.types.void, [
    LDKChannelDetailsPtr,
    ref.types.ulonglong,
  ]],
  ChannelDetails_get_outbound_capacity_msat: [ref.types.ulonglong, [
    LDKChannelDetailsPtr,
  ]],
  ChannelDetails_set_outbound_capacity_msat: [ref.types.void, [
    LDKChannelDetailsPtr,
    ref.types.ulonglong,
  ]],
  ChannelDetails_get_inbound_capacity_msat: [ref.types.ulonglong, [
    LDKChannelDetailsPtr,
  ]],
  ChannelDetails_set_inbound_capacity_msat: [ref.types.void, [
    LDKChannelDetailsPtr,
    ref.types.ulonglong,
  ]],
  ChannelDetails_get_is_live: [ref.types.byte, [
    LDKChannelDetailsPtr,
  ]],
  ChannelDetails_set_is_live: [ref.types.void, [
    LDKChannelDetailsPtr,
    ref.types.byte,
  ]],
  PaymentSendFailure_free: [ref.types.void, [
    LDKPaymentSendFailure,
  ]],
  ChannelManager_create_channel: [LDKCResultTempl_u8__APIError, [
    LDKChannelManager,
    LDKPublicKey,
    ref.types.ulonglong,
    ref.types.ulonglong,
    ref.types.ulonglong,
    LDKUserConfig,
  ]],
  ChannelManager_list_channels: [LDKCVecTempl_ChannelDetails, [
    LDKChannelManagerPtr,
  ]],
  ChannelManager_list_usable_channels: [LDKCVecTempl_ChannelDetails, [
    LDKChannelManagerPtr,
  ]],
  ChannelManager_close_channel: [LDKCResultTempl_u8__APIError, [
    LDKChannelManagerPtr,
    voidPtr,
  ]],
  ChannelManager_force_close_channel: [ref.types.void, [
    LDKChannelManagerPtr,
    voidPtr,
  ]],
  ChannelManager_force_close_all_channels: [ref.types.void, [
    LDKChannelManagerPtr,
  ]],
  ChannelManager_send_payment: [LDKCResultTempl_u8__PaymentSendFailure, [
    LDKChannelManagerPtr,
    LDKRoute,
    LDKThirtyTwoBytes,
    LDKThirtyTwoBytes,
  ]],
  ChannelManager_funding_transaction_generated: [ref.types.void, [
    LDKChannelManagerPtr,
    voidPtr,
    LDKOutPoint,
  ]],
  ChannelManager_broadcast_node_announcement: [ref.types.void, [
    LDKChannelManagerPtr,
    LDKThreeBytes,
    LDKThirtyTwoBytes,
    LDKCVecTempl_NetAddress,
  ]],
  ChannelManager_process_pending_htlc_forwards: [ref.types.void, [
    LDKChannelManagerPtr,
  ]],
  ChannelManager_timer_chan_freshness_every_min: [ref.types.void, [
    LDKChannelManagerPtr,
  ]],
  ChannelManager_fail_htlc_backwards: [ref.types.byte, [
    LDKChannelManagerPtr,
    voidPtr,
    LDKThirtyTwoBytes,
  ]],
  ChannelManager_claim_funds: [ref.types.byte, [
    LDKChannelManagerPtr,
    LDKThirtyTwoBytes,
    LDKThirtyTwoBytes,
    ref.types.ulonglong,
  ]],
  ChannelManager_get_our_node_id: [LDKPublicKey, [
    LDKChannelManagerPtr,
  ]],
  ChannelManager_channel_monitor_updated: [ref.types.void, [
    LDKChannelManagerPtr,
    LDKOutPointPtr,
    ref.types.ulonglong,
  ]],
  ChannelManager_as_MessageSendEventsProvider: [LDKMessageSendEventsProvider, [
    LDKChannelManagerPtr,
  ]],
  ChannelManager_as_EventsProvider: [LDKEventsProvider, [
    LDKChannelManagerPtr,
  ]],
  ChannelManager_block_connected: [ref.types.void, [
    LDKChannelManagerPtr,
    voidPtr,
    LDKCVecTempl_C2TupleTempl_usize__Transaction,
    ref.types.uint32,
  ]],
  ChannelManager_block_disconnected: [ref.types.void, [
    LDKChannelManagerPtr,
    voidPtr,
  ]],
  ChannelManager_as_ChannelMessageHandler: [LDKChannelMessageHandler, [
    LDKChannelManagerPtr,
  ]],
  ChannelManagerReadArgs_get_keys_manager: [LDKKeysInterfacePtr, [
    LDKChannelManagerReadArgs,
  ]],
  ChannelManagerReadArgs_set_keys_manager: [ref.types.void, [
    LDKChannelManagerReadArgsPtr,
    LDKKeysInterface,
  ]],
  ChannelManagerReadArgs_get_fee_estimator: [LDKFeeEstimatorPtr, [
    LDKChannelManagerReadArgsPtr,
  ]],
  ChannelManagerReadArgs_set_fee_estimator: [ref.types.void, [
    LDKChannelManagerReadArgsPtr,
    LDKFeeEstimator,
  ]],
  ChannelManagerReadArgs_get_chain_monitor: [LDKWatchPtr, [
    LDKChannelManagerReadArgsPtr,
  ]],
  ChannelManagerReadArgs_set_chain_monitor: [ref.types.void, [
    LDKChannelManagerReadArgsPtr,
    LDKWatch,
  ]],
  ChannelManagerReadArgs_get_tx_broadcaster: [LDKBroadcasterInterfacePtr, [
    LDKChannelManagerReadArgsPtr,
  ]],
  ChannelManagerReadArgs_set_tx_broadcaster: [ref.types.void, [
    LDKChannelManagerReadArgsPtr,
    LDKBroadcasterInterface,
  ]],
  ChannelManagerReadArgs_get_logger: [LDKLoggerPtr, [
    LDKChannelManagerReadArgsPtr,
  ]],
  ChannelManagerReadArgs_set_logger: [ref.types.void, [
    LDKChannelManagerReadArgsPtr,
    LDKLogger,
  ]],
  ChannelManagerReadArgs_get_default_config: [LDKUserConfig, [
    LDKChannelManagerReadArgsPtr,
  ]],
  ChannelManagerReadArgs_set_default_config: [ref.types.void, [
    LDKChannelManagerReadArgsPtr,
    LDKUserConfig,
  ]],
  ChannelManagerReadArgs_new: [LDKChannelManagerReadArgs, [
    LDKKeysInterface,
    LDKFeeEstimator,
    LDKWatch,
    LDKBroadcasterInterface,
    LDKLogger,
    LDKUserConfig,
    LDKCVecTempl_ChannelMonitor,
  ]],
  ErrorMessage_get_channel_id: [voidPtr, [
    LDKErrorMessage,
  ]],
  ErrorMessage_set_channel_id: [ref.types.void, [
    LDKErrorMessagePtr,
    LDKThirtyTwoBytes,
  ]],
  ErrorMessage_get_data: [LDKStr, [
    LDKErrorMessagePtr,
  ]],
  ErrorMessage_set_data: [ref.types.void, [
    LDKErrorMessagePtr,
    LDKCVecTempl_u8,
  ]],
  ErrorMessage_new: [LDKErrorMessage, [
    LDKThirtyTwoBytes,
    LDKCVecTempl_u8,
  ]],
  Ping_get_ponglen: [ref.types.ushort, [
    LDKPing,
  ]],
  Ping_set_ponglen: [ref.types.void, [
    LDKPingPtr,
    ref.types.ushort,
  ]],
  Ping_get_byteslen: [ref.types.ushort, [
    LDKPingPtr,
  ]],
  Ping_set_byteslen: [ref.types.void, [
    LDKPingPtr,
    ref.types.ushort,
  ]],
  Ping_new: [LDKPing, [
    ref.types.ushort,
    ref.types.ushort,
  ]],
  Pong_get_byteslen: [ref.types.ushort, [
    LDKPong,
  ]],
  Pong_set_byteslen: [ref.types.void, [
    LDKPongPtr,
    ref.types.ushort,
  ]],
  Pong_new: [LDKPong, [
    ref.types.ushort,
  ]],
  OpenChannel_get_chain_hash: [voidPtr, [
    LDKOpenChannel,
  ]],
  OpenChannel_set_chain_hash: [ref.types.void, [
    LDKOpenChannelPtr,
    LDKThirtyTwoBytes,
  ]],
  OpenChannel_get_temporary_channel_id: [voidPtr, [
    LDKOpenChannelPtr,
  ]],
  OpenChannel_set_temporary_channel_id: [ref.types.void, [
    LDKOpenChannelPtr,
    LDKThirtyTwoBytes,
  ]],
  OpenChannel_get_funding_satoshis: [ref.types.ulonglong, [
    LDKOpenChannelPtr,
  ]],
  OpenChannel_set_funding_satoshis: [ref.types.void, [
    LDKOpenChannelPtr,
    ref.types.ulonglong,
  ]],
  OpenChannel_get_push_msat: [ref.types.ulonglong, [
    LDKOpenChannelPtr,
  ]],
  OpenChannel_set_push_msat: [ref.types.void, [
    LDKOpenChannelPtr,
    ref.types.ulonglong,
  ]],
  OpenChannel_get_dust_limit_satoshis: [ref.types.ulonglong, [
    LDKOpenChannelPtr,
  ]],
  OpenChannel_set_dust_limit_satoshis: [ref.types.void, [
    LDKOpenChannelPtr,
    ref.types.ulonglong,
  ]],
  OpenChannel_get_max_htlc_value_in_flight_msat: [ref.types.ulonglong, [
    LDKOpenChannelPtr,
  ]],
  OpenChannel_set_max_htlc_value_in_flight_msat: [ref.types.void, [
    LDKOpenChannelPtr,
    ref.types.ulonglong,
  ]],
  OpenChannel_get_channel_reserve_satoshis: [ref.types.ulonglong, [
    LDKOpenChannelPtr,
  ]],
  OpenChannel_set_channel_reserve_satoshis: [ref.types.void, [
    LDKOpenChannelPtr,
    ref.types.ulonglong,
  ]],
  OpenChannel_get_htlc_minimum_msat: [ref.types.ulonglong, [
    LDKOpenChannelPtr,
  ]],
  OpenChannel_set_htlc_minimum_msat: [ref.types.void, [
    LDKOpenChannelPtr,
    ref.types.ulonglong,
  ]],
  OpenChannel_get_feerate_per_kw: [ref.types.uint32, [
    LDKOpenChannelPtr,
  ]],
  OpenChannel_set_feerate_per_kw: [ref.types.void, [
    LDKOpenChannelPtr,
    ref.types.uint32,
  ]],
  OpenChannel_get_to_self_delay: [ref.types.ushort, [
    LDKOpenChannelPtr,
  ]],
  OpenChannel_set_to_self_delay: [ref.types.void, [
    LDKOpenChannelPtr,
    ref.types.ushort,
  ]],
  OpenChannel_get_max_accepted_htlcs: [ref.types.ushort, [
    LDKOpenChannelPtr,
  ]],
  OpenChannel_set_max_accepted_htlcs: [ref.types.void, [
    LDKOpenChannelPtr,
    ref.types.ushort,
  ]],
  OpenChannel_get_funding_pubkey: [LDKPublicKey, [
    LDKOpenChannelPtr,
  ]],
  OpenChannel_set_funding_pubkey: [ref.types.void, [
    LDKOpenChannelPtr,
    LDKPublicKey,
  ]],
  OpenChannel_get_revocation_basepoint: [LDKPublicKey, [
    LDKOpenChannelPtr,
  ]],
  OpenChannel_set_revocation_basepoint: [ref.types.void, [
    LDKOpenChannelPtr,
    LDKPublicKey,
  ]],
  OpenChannel_get_payment_point: [LDKPublicKey, [
    LDKOpenChannelPtr,
  ]],
  OpenChannel_set_payment_point: [ref.types.void, [
    LDKOpenChannelPtr,
    LDKPublicKey,
  ]],
  OpenChannel_get_delayed_payment_basepoint: [LDKPublicKey, [
    LDKOpenChannelPtr,
  ]],
  OpenChannel_set_delayed_payment_basepoint: [ref.types.void, [
    LDKOpenChannelPtr,
    LDKPublicKey,
  ]],
  OpenChannel_get_htlc_basepoint: [LDKPublicKey, [
    LDKOpenChannelPtr,
  ]],
  OpenChannel_set_htlc_basepoint: [ref.types.void, [
    LDKOpenChannelPtr,
    LDKPublicKey,
  ]],
  OpenChannel_get_first_per_commitment_point: [LDKPublicKey, [
    LDKOpenChannelPtr,
  ]],
  OpenChannel_set_first_per_commitment_point: [ref.types.void, [
    LDKOpenChannelPtr,
    LDKPublicKey,
  ]],
  OpenChannel_get_channel_flags: [ref.types.uchar, [
    LDKOpenChannelPtr,
  ]],
  OpenChannel_set_channel_flags: [ref.types.void, [
    LDKOpenChannelPtr,
    ref.types.uchar,
  ]],
  AcceptChannel_get_temporary_channel_id: [voidPtr, [
    LDKAcceptChannel,
  ]],
  AcceptChannel_set_temporary_channel_id: [ref.types.void, [
    LDKAcceptChannelPtr,
    LDKThirtyTwoBytes,
  ]],
  AcceptChannel_get_dust_limit_satoshis: [ref.types.ulonglong, [
    LDKAcceptChannelPtr,
  ]],
  AcceptChannel_set_dust_limit_satoshis: [ref.types.void, [
    LDKAcceptChannelPtr,
    ref.types.ulonglong,
  ]],
  AcceptChannel_get_max_htlc_value_in_flight_msat: [ref.types.ulonglong, [
    LDKAcceptChannelPtr,
  ]],
  AcceptChannel_set_max_htlc_value_in_flight_msat: [ref.types.void, [
    LDKAcceptChannelPtr,
    ref.types.ulonglong,
  ]],
  AcceptChannel_get_channel_reserve_satoshis: [ref.types.ulonglong, [
    LDKAcceptChannelPtr,
  ]],
  AcceptChannel_set_channel_reserve_satoshis: [ref.types.void, [
    LDKAcceptChannelPtr,
    ref.types.ulonglong,
  ]],
  AcceptChannel_get_htlc_minimum_msat: [ref.types.ulonglong, [
    LDKAcceptChannelPtr,
  ]],
  AcceptChannel_set_htlc_minimum_msat: [ref.types.void, [
    LDKAcceptChannelPtr,
    ref.types.ulonglong,
  ]],
  AcceptChannel_get_minimum_depth: [ref.types.uint32, [
    LDKAcceptChannelPtr,
  ]],
  AcceptChannel_set_minimum_depth: [ref.types.void, [
    LDKAcceptChannelPtr,
    ref.types.uint32,
  ]],
  AcceptChannel_get_to_self_delay: [ref.types.ushort, [
    LDKAcceptChannelPtr,
  ]],
  AcceptChannel_set_to_self_delay: [ref.types.void, [
    LDKAcceptChannelPtr,
    ref.types.ushort,
  ]],
  AcceptChannel_get_max_accepted_htlcs: [ref.types.ushort, [
    LDKAcceptChannelPtr,
  ]],
  AcceptChannel_set_max_accepted_htlcs: [ref.types.void, [
    LDKAcceptChannelPtr,
    ref.types.ushort,
  ]],
  AcceptChannel_get_funding_pubkey: [LDKPublicKey, [
    LDKAcceptChannelPtr,
  ]],
  AcceptChannel_set_funding_pubkey: [ref.types.void, [
    LDKAcceptChannelPtr,
    LDKPublicKey,
  ]],
  AcceptChannel_get_revocation_basepoint: [LDKPublicKey, [
    LDKAcceptChannelPtr,
  ]],
  AcceptChannel_set_revocation_basepoint: [ref.types.void, [
    LDKAcceptChannelPtr,
    LDKPublicKey,
  ]],
  AcceptChannel_get_payment_point: [LDKPublicKey, [
    LDKAcceptChannelPtr,
  ]],
  AcceptChannel_set_payment_point: [ref.types.void, [
    LDKAcceptChannelPtr,
    LDKPublicKey,
  ]],
  AcceptChannel_get_delayed_payment_basepoint: [LDKPublicKey, [
    LDKAcceptChannelPtr,
  ]],
  AcceptChannel_set_delayed_payment_basepoint: [ref.types.void, [
    LDKAcceptChannelPtr,
    LDKPublicKey,
  ]],
  AcceptChannel_get_htlc_basepoint: [LDKPublicKey, [
    LDKAcceptChannelPtr,
  ]],
  AcceptChannel_set_htlc_basepoint: [ref.types.void, [
    LDKAcceptChannelPtr,
    LDKPublicKey,
  ]],
  AcceptChannel_get_first_per_commitment_point: [LDKPublicKey, [
    LDKAcceptChannelPtr,
  ]],
  AcceptChannel_set_first_per_commitment_point: [ref.types.void, [
    LDKAcceptChannelPtr,
    LDKPublicKey,
  ]],
  FundingCreated_get_temporary_channel_id: [voidPtr, [
    LDKFundingCreated,
  ]],
  FundingCreated_set_temporary_channel_id: [ref.types.void, [
    LDKFundingCreatedPtr,
    LDKThirtyTwoBytes,
  ]],
  FundingCreated_get_funding_txid: [voidPtr, [
    LDKFundingCreatedPtr,
  ]],
  FundingCreated_set_funding_txid: [ref.types.void, [
    LDKFundingCreatedPtr,
    LDKThirtyTwoBytes,
  ]],
  FundingCreated_get_funding_output_index: [ref.types.ushort, [
    LDKFundingCreatedPtr,
  ]],
  FundingCreated_set_funding_output_index: [ref.types.void, [
    LDKFundingCreatedPtr,
    ref.types.ushort,
  ]],
  FundingCreated_get_signature: [LDKSignature, [
    LDKFundingCreatedPtr,
  ]],
  FundingCreated_set_signature: [ref.types.void, [
    LDKFundingCreatedPtr,
    LDKSignature,
  ]],
  FundingCreated_new: [LDKFundingCreated, [
    LDKThirtyTwoBytes,
    LDKThirtyTwoBytes,
    ref.types.ushort,
    LDKSignature,
  ]],
  FundingSigned_get_channel_id: [voidPtr, [
    LDKFundingSigned,
  ]],
  FundingSigned_set_channel_id: [ref.types.void, [
    LDKFundingSignedPtr,
    LDKThirtyTwoBytes,
  ]],
  FundingSigned_get_signature: [LDKSignature, [
    LDKFundingSignedPtr,
  ]],
  FundingSigned_set_signature: [ref.types.void, [
    LDKFundingSignedPtr,
    LDKSignature,
  ]],
  FundingSigned_new: [LDKFundingSigned, [
    LDKThirtyTwoBytes,
    LDKSignature,
  ]],
  FundingLocked_get_channel_id: [voidPtr, [
    LDKFundingLocked,
  ]],
  FundingLocked_set_channel_id: [ref.types.void, [
    LDKFundingLockedPtr,
    LDKThirtyTwoBytes,
  ]],
  FundingLocked_get_next_per_commitment_point: [LDKPublicKey, [
    LDKFundingLockedPtr,
  ]],
  FundingLocked_set_next_per_commitment_point: [ref.types.void, [
    LDKFundingLockedPtr,
    LDKPublicKey,
  ]],
  FundingLocked_new: [LDKFundingLocked, [
    LDKThirtyTwoBytes,
    LDKPublicKey,
  ]],
  Shutdown_get_channel_id: [voidPtr, [
    LDKShutdown,
  ]],
  Shutdown_set_channel_id: [ref.types.void, [
    LDKShutdownPtr,
    LDKThirtyTwoBytes,
  ]],
  Shutdown_get_scriptpubkey: [LDKu8slice, [
    LDKShutdownPtr,
  ]],
  Shutdown_set_scriptpubkey: [ref.types.void, [
    LDKShutdownPtr,
    LDKCVecTempl_u8,
  ]],
  Shutdown_new: [LDKShutdown, [
    LDKThirtyTwoBytes,
    LDKCVecTempl_u8,
  ]],
  ClosingSigned_get_channel_id: [voidPtr, [
    LDKClosingSigned,
  ]],
  ClosingSigned_set_channel_id: [ref.types.void, [
    LDKClosingSignedPtr,
    LDKThirtyTwoBytes,
  ]],
  ClosingSigned_get_fee_satoshis: [ref.types.ulonglong, [
    LDKClosingSignedPtr,
  ]],
  ClosingSigned_set_fee_satoshis: [ref.types.void, [
    LDKClosingSignedPtr,
    ref.types.ulonglong,
  ]],
  ClosingSigned_get_signature: [LDKSignature, [
    LDKClosingSignedPtr,
  ]],
  ClosingSigned_set_signature: [ref.types.void, [
    LDKClosingSignedPtr,
    LDKSignature,
  ]],
  ClosingSigned_new: [LDKClosingSigned, [
    LDKThirtyTwoBytes,
    ref.types.ulonglong,
    LDKSignature,
  ]],
  UpdateAddHTLC_get_channel_id: [voidPtr, [
    LDKUpdateAddHTLC,
  ]],
  UpdateAddHTLC_set_channel_id: [ref.types.void, [
    LDKUpdateAddHTLCPtr,
    LDKThirtyTwoBytes,
  ]],
  UpdateAddHTLC_get_htlc_id: [ref.types.ulonglong, [
    LDKUpdateAddHTLCPtr,
  ]],
  UpdateAddHTLC_set_htlc_id: [ref.types.void, [
    LDKUpdateAddHTLCPtr,
    ref.types.ulonglong,
  ]],
  UpdateAddHTLC_get_amount_msat: [ref.types.ulonglong, [
    LDKUpdateAddHTLCPtr,
  ]],
  UpdateAddHTLC_set_amount_msat: [ref.types.void, [
    LDKUpdateAddHTLCPtr,
    ref.types.ulonglong,
  ]],
  UpdateAddHTLC_get_payment_hash: [voidPtr, [
    LDKUpdateAddHTLCPtr,
  ]],
  UpdateAddHTLC_set_payment_hash: [ref.types.void, [
    LDKUpdateAddHTLCPtr,
    LDKThirtyTwoBytes,
  ]],
  UpdateAddHTLC_get_cltv_expiry: [ref.types.uint32, [
    LDKUpdateAddHTLCPtr,
  ]],
  UpdateAddHTLC_set_cltv_expiry: [ref.types.void, [
    LDKUpdateAddHTLCPtr,
    ref.types.uint32,
  ]],
  UpdateFulfillHTLC_get_channel_id: [voidPtr, [
    LDKUpdateFulfillHTLC,
  ]],
  UpdateFulfillHTLC_set_channel_id: [ref.types.void, [
    LDKUpdateFulfillHTLCPtr,
    LDKThirtyTwoBytes,
  ]],
  UpdateFulfillHTLC_get_htlc_id: [ref.types.ulonglong, [
    LDKUpdateFulfillHTLCPtr,
  ]],
  UpdateFulfillHTLC_set_htlc_id: [ref.types.void, [
    LDKUpdateFulfillHTLCPtr,
    ref.types.ulonglong,
  ]],
  UpdateFulfillHTLC_get_payment_preimage: [voidPtr, [
    LDKUpdateFulfillHTLCPtr,
  ]],
  UpdateFulfillHTLC_set_payment_preimage: [ref.types.void, [
    LDKUpdateFulfillHTLCPtr,
    LDKThirtyTwoBytes,
  ]],
  UpdateFulfillHTLC_new: [LDKUpdateFulfillHTLC, [
    LDKThirtyTwoBytes,
    ref.types.ulonglong,
    LDKThirtyTwoBytes,
  ]],
  UpdateFailHTLC_get_channel_id: [voidPtr, [
    LDKUpdateFailHTLC,
  ]],
  UpdateFailHTLC_set_channel_id: [ref.types.void, [
    LDKUpdateFailHTLCPtr,
    LDKThirtyTwoBytes,
  ]],
  UpdateFailHTLC_get_htlc_id: [ref.types.ulonglong, [
    LDKUpdateFailHTLCPtr,
  ]],
  UpdateFailHTLC_set_htlc_id: [ref.types.void, [
    LDKUpdateFailHTLCPtr,
    ref.types.ulonglong,
  ]],
  UpdateFailMalformedHTLC_get_channel_id: [voidPtr, [
    LDKUpdateFailMalformedHTLC,
  ]],
  UpdateFailMalformedHTLC_set_channel_id: [ref.types.void, [
    LDKUpdateFailMalformedHTLCPtr,
    LDKThirtyTwoBytes,
  ]],
  UpdateFailMalformedHTLC_get_htlc_id: [ref.types.ulonglong, [
    LDKUpdateFailMalformedHTLCPtr,
  ]],
  UpdateFailMalformedHTLC_set_htlc_id: [ref.types.void, [
    LDKUpdateFailMalformedHTLCPtr,
    ref.types.ulonglong,
  ]],
  UpdateFailMalformedHTLC_get_failure_code: [ref.types.ushort, [
    LDKUpdateFailMalformedHTLCPtr,
  ]],
  UpdateFailMalformedHTLC_set_failure_code: [ref.types.void, [
    LDKUpdateFailMalformedHTLCPtr,
    ref.types.ushort,
  ]],
  CommitmentSigned_get_channel_id: [voidPtr, [
    LDKCommitmentSigned,
  ]],
  CommitmentSigned_set_channel_id: [ref.types.void, [
    LDKCommitmentSignedPtr,
    LDKThirtyTwoBytes,
  ]],
  CommitmentSigned_get_signature: [LDKSignature, [
    LDKCommitmentSignedPtr,
  ]],
  CommitmentSigned_set_signature: [ref.types.void, [
    LDKCommitmentSignedPtr,
    LDKSignature,
  ]],
  CommitmentSigned_set_htlc_signatures: [ref.types.void, [
    LDKCommitmentSignedPtr,
    LDKCVecTempl_Signature,
  ]],
  CommitmentSigned_new: [LDKCommitmentSigned, [
    LDKThirtyTwoBytes,
    LDKSignature,
    LDKCVecTempl_Signature,
  ]],
  RevokeAndACK_get_channel_id: [voidPtr, [
    LDKRevokeAndACK,
  ]],
  RevokeAndACK_set_channel_id: [ref.types.void, [
    LDKRevokeAndACKPtr,
    LDKThirtyTwoBytes,
  ]],
  RevokeAndACK_get_per_commitment_secret: [voidPtr, [
    LDKRevokeAndACKPtr,
  ]],
  RevokeAndACK_set_per_commitment_secret: [ref.types.void, [
    LDKRevokeAndACKPtr,
    LDKThirtyTwoBytes,
  ]],
  RevokeAndACK_get_next_per_commitment_point: [LDKPublicKey, [
    LDKRevokeAndACKPtr,
  ]],
  RevokeAndACK_set_next_per_commitment_point: [ref.types.void, [
    LDKRevokeAndACKPtr,
    LDKPublicKey,
  ]],
  RevokeAndACK_new: [LDKRevokeAndACK, [
    LDKThirtyTwoBytes,
    LDKThirtyTwoBytes,
    LDKPublicKey,
  ]],
  UpdateFee_get_channel_id: [voidPtr, [
    LDKUpdateFee,
  ]],
  UpdateFee_set_channel_id: [ref.types.void, [
    LDKUpdateFeePtr,
    LDKThirtyTwoBytes,
  ]],
  UpdateFee_get_feerate_per_kw: [ref.types.uint32, [
    LDKUpdateFeePtr,
  ]],
  UpdateFee_set_feerate_per_kw: [ref.types.void, [
    LDKUpdateFeePtr,
    ref.types.uint32,
  ]],
  UpdateFee_new: [LDKUpdateFee, [
    LDKThirtyTwoBytes,
    ref.types.uint32,
  ]],
  DataLossProtect_get_your_last_per_commitment_secret: [voidPtr, [
    LDKDataLossProtect,
  ]],
  DataLossProtect_set_your_last_per_commitment_secret: [ref.types.void, [
    LDKDataLossProtectPtr,
    LDKThirtyTwoBytes,
  ]],
  DataLossProtect_get_my_current_per_commitment_point: [LDKPublicKey, [
    LDKDataLossProtectPtr,
  ]],
  DataLossProtect_set_my_current_per_commitment_point: [ref.types.void, [
    LDKDataLossProtectPtr,
    LDKPublicKey,
  ]],
  DataLossProtect_new: [LDKDataLossProtect, [
    LDKThirtyTwoBytes,
    LDKPublicKey,
  ]],
  ChannelReestablish_get_channel_id: [voidPtr, [
    LDKChannelReestablish,
  ]],
  ChannelReestablish_set_channel_id: [ref.types.void, [
    LDKChannelReestablishPtr,
    LDKThirtyTwoBytes,
  ]],
  ChannelReestablish_get_next_local_commitment_number: [ref.types.ulonglong, [
    LDKChannelReestablishPtr,
  ]],
  ChannelReestablish_set_next_local_commitment_number: [ref.types.void, [
    LDKChannelReestablishPtr,
    ref.types.ulonglong,
  ]],
  ChannelReestablish_get_next_remote_commitment_number: [ref.types.ulonglong, [
    LDKChannelReestablishPtr,
  ]],
  ChannelReestablish_set_next_remote_commitment_number: [ref.types.void, [
    LDKChannelReestablishPtr,
    ref.types.ulonglong,
  ]],
  AnnouncementSignatures_get_channel_id: [voidPtr, [
    LDKAnnouncementSignatures,
  ]],
  AnnouncementSignatures_set_channel_id: [ref.types.void, [
    LDKAnnouncementSignaturesPtr,
    LDKThirtyTwoBytes,
  ]],
  AnnouncementSignatures_get_short_channel_id: [ref.types.ulonglong, [
    LDKAnnouncementSignaturesPtr,
  ]],
  AnnouncementSignatures_set_short_channel_id: [ref.types.void, [
    LDKAnnouncementSignaturesPtr,
    ref.types.ulonglong,
  ]],
  AnnouncementSignatures_get_node_signature: [LDKSignature, [
    LDKAnnouncementSignaturesPtr,
  ]],
  AnnouncementSignatures_set_node_signature: [ref.types.void, [
    LDKAnnouncementSignaturesPtr,
    LDKSignature,
  ]],
  AnnouncementSignatures_get_bitcoin_signature: [LDKSignature, [
    LDKAnnouncementSignaturesPtr,
  ]],
  AnnouncementSignatures_set_bitcoin_signature: [ref.types.void, [
    LDKAnnouncementSignaturesPtr,
    LDKSignature,
  ]],
  AnnouncementSignatures_new: [LDKAnnouncementSignatures, [
    LDKThirtyTwoBytes,
    ref.types.ulonglong,
    LDKSignature,
    LDKSignature,
  ]],
  NetAddress_free: [ref.types.void, [
    LDKNetAddress,
  ]],
  UnsignedNodeAnnouncement_get_timestamp: [ref.types.uint32, [
    LDKUnsignedNodeAnnouncementPtr,
  ]],
  UnsignedNodeAnnouncement_set_timestamp: [ref.types.void, [
    LDKUnsignedNodeAnnouncementPtr,
    ref.types.uint32,
  ]],
  UnsignedNodeAnnouncement_get_node_id: [LDKPublicKey, [
    LDKUnsignedNodeAnnouncementPtr,
  ]],
  UnsignedNodeAnnouncement_set_node_id: [ref.types.void, [
    LDKUnsignedNodeAnnouncementPtr,
    LDKPublicKey,
  ]],
  UnsignedNodeAnnouncement_get_rgb: [voidPtr, [
    LDKUnsignedNodeAnnouncementPtr,
  ]],
  UnsignedNodeAnnouncement_set_rgb: [ref.types.void, [
    LDKUnsignedNodeAnnouncementPtr,
    LDKThreeBytes,
  ]],
  UnsignedNodeAnnouncement_get_alias: [voidPtr, [
    LDKUnsignedNodeAnnouncementPtr,
  ]],
  UnsignedNodeAnnouncement_set_alias: [ref.types.void, [
    LDKUnsignedNodeAnnouncementPtr,
    LDKThirtyTwoBytes,
  ]],
  UnsignedNodeAnnouncement_set_addresses: [ref.types.void, [
    LDKUnsignedNodeAnnouncementPtr,
    LDKCVecTempl_NetAddress,
  ]],
  NodeAnnouncement_get_signature: [LDKSignature, [
    LDKNodeAnnouncement,
  ]],
  NodeAnnouncement_set_signature: [ref.types.void, [
    LDKNodeAnnouncementPtr,
    LDKSignature,
  ]],
  NodeAnnouncement_get_contents: [LDKUnsignedNodeAnnouncement, [
    LDKNodeAnnouncementPtr,
  ]],
  NodeAnnouncement_set_contents: [ref.types.void, [
    LDKNodeAnnouncementPtr,
    LDKUnsignedNodeAnnouncement,
  ]],
  NodeAnnouncement_new: [LDKNodeAnnouncement, [
    LDKSignature,
    LDKUnsignedNodeAnnouncement,
  ]],
  UnsignedChannelAnnouncement_get_chain_hash: [voidPtr, [
    LDKUnsignedChannelAnnouncementPtr,
  ]],
  UnsignedChannelAnnouncement_set_chain_hash: [ref.types.void, [
    LDKUnsignedChannelAnnouncementPtr,
    LDKThirtyTwoBytes,
  ]],
  UnsignedChannelAnnouncement_get_short_channel_id: [ref.types.ulonglong, [
    LDKUnsignedChannelAnnouncementPtr,
  ]],
  UnsignedChannelAnnouncement_set_short_channel_id: [ref.types.void, [
    LDKUnsignedChannelAnnouncementPtr,
    ref.types.ulonglong,
  ]],
  UnsignedChannelAnnouncement_get_node_id_1: [LDKPublicKey, [
    LDKUnsignedChannelAnnouncementPtr,
  ]],
  UnsignedChannelAnnouncement_set_node_id_1: [ref.types.void, [
    LDKUnsignedChannelAnnouncementPtr,
    LDKPublicKey,
  ]],
  UnsignedChannelAnnouncement_get_node_id_2: [LDKPublicKey, [
    LDKUnsignedChannelAnnouncementPtr,
  ]],
  UnsignedChannelAnnouncement_set_node_id_2: [ref.types.void, [
    LDKUnsignedChannelAnnouncementPtr,
    LDKPublicKey,
  ]],
  UnsignedChannelAnnouncement_get_bitcoin_key_1: [LDKPublicKey, [
    LDKUnsignedChannelAnnouncementPtr,
  ]],
  UnsignedChannelAnnouncement_set_bitcoin_key_1: [ref.types.void, [
    LDKUnsignedChannelAnnouncementPtr,
    LDKPublicKey,
  ]],
  UnsignedChannelAnnouncement_get_bitcoin_key_2: [LDKPublicKey, [
    LDKUnsignedChannelAnnouncementPtr,
  ]],
  UnsignedChannelAnnouncement_set_bitcoin_key_2: [ref.types.void, [
    LDKUnsignedChannelAnnouncementPtr,
    LDKPublicKey,
  ]],
  ChannelAnnouncement_get_node_signature_1: [LDKSignature, [
    LDKChannelAnnouncement,
  ]],
  ChannelAnnouncement_set_node_signature_1: [ref.types.void, [
    LDKChannelAnnouncementPtr,
    LDKSignature,
  ]],
  ChannelAnnouncement_get_node_signature_2: [LDKSignature, [
    LDKChannelAnnouncementPtr,
  ]],
  ChannelAnnouncement_set_node_signature_2: [ref.types.void, [
    LDKChannelAnnouncementPtr,
    LDKSignature,
  ]],
  ChannelAnnouncement_get_bitcoin_signature_1: [LDKSignature, [
    LDKChannelAnnouncementPtr,
  ]],
  ChannelAnnouncement_set_bitcoin_signature_1: [ref.types.void, [
    LDKChannelAnnouncementPtr,
    LDKSignature,
  ]],
  ChannelAnnouncement_get_bitcoin_signature_2: [LDKSignature, [
    LDKChannelAnnouncementPtr,
  ]],
  ChannelAnnouncement_set_bitcoin_signature_2: [ref.types.void, [
    LDKChannelAnnouncementPtr,
    LDKSignature,
  ]],
  ChannelAnnouncement_get_contents: [LDKUnsignedChannelAnnouncement, [
    LDKChannelAnnouncementPtr,
  ]],
  ChannelAnnouncement_set_contents: [ref.types.void, [
    LDKChannelAnnouncementPtr,
    LDKUnsignedChannelAnnouncement,
  ]],
  ChannelAnnouncement_new: [LDKChannelAnnouncement, [
    LDKSignature,
    LDKSignature,
    LDKSignature,
    LDKSignature,
    LDKUnsignedChannelAnnouncement,
  ]],
  UnsignedChannelUpdate_get_chain_hash: [voidPtr, [
    LDKUnsignedChannelUpdate,
  ]],
  UnsignedChannelUpdate_set_chain_hash: [ref.types.void, [
    LDKUnsignedChannelUpdatePtr,
    LDKThirtyTwoBytes,
  ]],
  UnsignedChannelUpdate_get_short_channel_id: [ref.types.ulonglong, [
    LDKUnsignedChannelUpdatePtr,
  ]],
  UnsignedChannelUpdate_set_short_channel_id: [ref.types.void, [
    LDKUnsignedChannelUpdatePtr,
    ref.types.ulonglong,
  ]],
  UnsignedChannelUpdate_get_timestamp: [ref.types.uint32, [
    LDKUnsignedChannelUpdatePtr,
  ]],
  UnsignedChannelUpdate_set_timestamp: [ref.types.void, [
    LDKUnsignedChannelUpdatePtr,
    ref.types.uint32,
  ]],
  UnsignedChannelUpdate_get_flags: [ref.types.uchar, [
    LDKUnsignedChannelUpdatePtr,
  ]],
  UnsignedChannelUpdate_set_flags: [ref.types.void, [
    LDKUnsignedChannelUpdatePtr,
    ref.types.uchar,
  ]],
  UnsignedChannelUpdate_get_cltv_expiry_delta: [ref.types.ushort, [
    LDKUnsignedChannelUpdatePtr,
  ]],
  UnsignedChannelUpdate_set_cltv_expiry_delta: [ref.types.void, [
    LDKUnsignedChannelUpdatePtr,
    ref.types.ushort,
  ]],
  UnsignedChannelUpdate_get_htlc_minimum_msat: [ref.types.ulonglong, [
    LDKUnsignedChannelUpdatePtr,
  ]],
  UnsignedChannelUpdate_set_htlc_minimum_msat: [ref.types.void, [
    LDKUnsignedChannelUpdatePtr,
    ref.types.ulonglong,
  ]],
  UnsignedChannelUpdate_get_fee_base_msat: [ref.types.uint32, [
    LDKUnsignedChannelUpdatePtr,
  ]],
  UnsignedChannelUpdate_set_fee_base_msat: [ref.types.void, [
    LDKUnsignedChannelUpdatePtr,
    ref.types.uint32,
  ]],
  UnsignedChannelUpdate_get_fee_proportional_millionths: [ref.types.uint32, [
    LDKUnsignedChannelUpdatePtr,
  ]],
  UnsignedChannelUpdate_set_fee_proportional_millionths: [ref.types.void, [
    LDKUnsignedChannelUpdatePtr,
    ref.types.uint32,
  ]],
  ChannelUpdate_get_signature: [LDKSignature, [
    LDKChannelUpdate,
  ]],
  ChannelUpdate_set_signature: [ref.types.void, [
    LDKChannelUpdatePtr,
    LDKSignature,
  ]],
  ChannelUpdate_get_contents: [LDKUnsignedChannelUpdate, [
    LDKChannelUpdatePtr,
  ]],
  ChannelUpdate_set_contents: [ref.types.void, [
    LDKChannelUpdatePtr,
    LDKUnsignedChannelUpdate,
  ]],
  ChannelUpdate_new: [LDKChannelUpdate, [
    LDKSignature,
    LDKUnsignedChannelUpdate,
  ]],
  QueryChannelRange_get_chain_hash: [voidPtr, [
    LDKQueryChannelRange,
  ]],
  QueryChannelRange_set_chain_hash: [ref.types.void, [
    LDKQueryChannelRangePtr,
    LDKThirtyTwoBytes,
  ]],
  QueryChannelRange_get_first_blocknum: [ref.types.uint32, [
    LDKQueryChannelRangePtr,
  ]],
  QueryChannelRange_set_first_blocknum: [ref.types.void, [
    LDKQueryChannelRangePtr,
    ref.types.uint32,
  ]],
  QueryChannelRange_get_number_of_blocks: [ref.types.uint32, [
    LDKQueryChannelRangePtr,
  ]],
  QueryChannelRange_set_number_of_blocks: [ref.types.void, [
    LDKQueryChannelRangePtr,
    ref.types.uint32,
  ]],
  QueryChannelRange_new: [LDKQueryChannelRange, [
    LDKThirtyTwoBytes,
    ref.types.uint32,
    ref.types.uint32,
  ]],
  ReplyChannelRange_get_chain_hash: [voidPtr, [
    LDKReplyChannelRange,
  ]],
  ReplyChannelRange_set_chain_hash: [ref.types.void, [
    LDKReplyChannelRangePtr,
    LDKThirtyTwoBytes,
  ]],
  ReplyChannelRange_get_first_blocknum: [ref.types.uint32, [
    LDKReplyChannelRangePtr,
  ]],
  ReplyChannelRange_set_first_blocknum: [ref.types.void, [
    LDKReplyChannelRangePtr,
    ref.types.uint32,
  ]],
  ReplyChannelRange_get_number_of_blocks: [ref.types.uint32, [
    LDKReplyChannelRangePtr,
  ]],
  ReplyChannelRange_set_number_of_blocks: [ref.types.void, [
    LDKReplyChannelRangePtr,
    ref.types.uint32,
  ]],
  ReplyChannelRange_get_full_information: [ref.types.byte, [
    LDKReplyChannelRangePtr,
  ]],
  ReplyChannelRange_set_full_information: [ref.types.void, [
    LDKReplyChannelRangePtr,
    ref.types.byte,
  ]],
  ReplyChannelRange_set_short_channel_ids: [ref.types.void, [
    LDKReplyChannelRangePtr,
    LDKCVecTempl_u64,
  ]],
  ReplyChannelRange_new: [LDKReplyChannelRange, [
    LDKThirtyTwoBytes,
    ref.types.uint32,
    ref.types.uint32,
    ref.types.byte,
    LDKCVecTempl_u64,
  ]],
  QueryShortChannelIds_get_chain_hash: [voidPtr, [
    LDKQueryShortChannelIds,
  ]],
  QueryShortChannelIds_set_chain_hash: [ref.types.void, [
    LDKQueryShortChannelIdsPtr,
    LDKThirtyTwoBytes,
  ]],
  QueryShortChannelIds_set_short_channel_ids: [ref.types.void, [
    LDKQueryShortChannelIdsPtr,
    LDKCVecTempl_u64,
  ]],
  QueryShortChannelIds_new: [LDKQueryShortChannelIds, [
    LDKThirtyTwoBytes,
    LDKCVecTempl_u64,
  ]],
  ReplyShortChannelIdsEnd_get_chain_hash: [voidPtr, [
    LDKReplyShortChannelIdsEnd,
  ]],
  ReplyShortChannelIdsEnd_set_chain_hash: [ref.types.void, [
    LDKReplyShortChannelIdsEndPtr,
    LDKThirtyTwoBytes,
  ]],
  ReplyShortChannelIdsEnd_get_full_information: [ref.types.byte, [
    LDKReplyShortChannelIdsEndPtr,
  ]],
  ReplyShortChannelIdsEnd_set_full_information: [ref.types.void, [
    LDKReplyShortChannelIdsEndPtr,
    ref.types.byte,
  ]],
  ReplyShortChannelIdsEnd_new: [LDKReplyShortChannelIdsEnd, [
    LDKThirtyTwoBytes,
    ref.types.byte,
  ]],
  GossipTimestampFilter_get_chain_hash: [voidPtr, [
    LDKGossipTimestampFilter,
  ]],
  GossipTimestampFilter_set_chain_hash: [ref.types.void, [
    LDKGossipTimestampFilterPtr,
    LDKThirtyTwoBytes,
  ]],
  GossipTimestampFilter_get_first_timestamp: [ref.types.uint32, [
    LDKGossipTimestampFilterPtr,
  ]],
  GossipTimestampFilter_set_first_timestamp: [ref.types.void, [
    LDKGossipTimestampFilterPtr,
    ref.types.uint32,
  ]],
  GossipTimestampFilter_get_timestamp_range: [ref.types.uint32, [
    LDKGossipTimestampFilterPtr,
  ]],
  GossipTimestampFilter_set_timestamp_range: [ref.types.void, [
    LDKGossipTimestampFilterPtr,
    ref.types.uint32,
  ]],
  GossipTimestampFilter_new: [LDKGossipTimestampFilter, [
    LDKThirtyTwoBytes,
    ref.types.uint32,
    ref.types.uint32,
  ]],
  LightningError_get_err: [LDKStr, [
    LDKLightningError,
  ]],
  LightningError_set_err: [ref.types.void, [
    LDKLightningErrorPtr,
    LDKCVecTempl_u8,
  ]],
  CommitmentUpdate_set_update_add_htlcs: [ref.types.void, [
    LDKCommitmentUpdate,
    LDKCVecTempl_UpdateAddHTLC,
  ]],
  CommitmentUpdate_set_update_fulfill_htlcs: [ref.types.void, [
    LDKCommitmentUpdatePtr,
    LDKCVecTempl_UpdateFulfillHTLC,
  ]],
  CommitmentUpdate_set_update_fail_htlcs: [ref.types.void, [
    LDKCommitmentUpdatePtr,
    LDKCVecTempl_UpdateFailHTLC,
  ]],
  CommitmentUpdate_set_update_fail_malformed_htlcs: [ref.types.void, [
    LDKCommitmentUpdatePtr,
    LDKCVecTempl_UpdateFailMalformedHTLC,
  ]],
  CommitmentUpdate_get_update_fee: [LDKUpdateFee, [
    LDKCommitmentUpdatePtr,
  ]],
  CommitmentUpdate_set_update_fee: [ref.types.void, [
    LDKCommitmentUpdatePtr,
    LDKUpdateFee,
  ]],
  CommitmentUpdate_get_commitment_signed: [LDKCommitmentSigned, [
    LDKCommitmentUpdatePtr,
  ]],
  CommitmentUpdate_set_commitment_signed: [ref.types.void, [
    LDKCommitmentUpdatePtr,
    LDKCommitmentSigned,
  ]],
  CommitmentUpdate_new: [LDKCommitmentUpdate, [
    LDKCVecTempl_UpdateAddHTLC,
    LDKCVecTempl_UpdateFulfillHTLC,
    LDKCVecTempl_UpdateFailHTLC,
    LDKCVecTempl_UpdateFailMalformedHTLC,
    LDKUpdateFee,
    LDKCommitmentSigned,
  ]],
  ChannelMessageHandler_free: [ref.types.void, [
    LDKChannelMessageHandler,
  ]],
  RoutingMessageHandler_free: [ref.types.void, [
    LDKRoutingMessageHandler,
  ]],
  AcceptChannel_write: [LDKCVecTempl_u8, [
    LDKAcceptChannelPtr,
  ]],
  AcceptChannel_read: [LDKAcceptChannel, [
    LDKu8slice,
  ]],
  AnnouncementSignatures_write: [LDKCVecTempl_u8, [
    LDKAnnouncementSignaturesPtr,
  ]],
  AnnouncementSignatures_read: [LDKAnnouncementSignatures, [
    LDKu8slice,
  ]],
  ChannelReestablish_write: [LDKCVecTempl_u8, [
    LDKChannelReestablishPtr,
  ]],
  ChannelReestablish_read: [LDKChannelReestablish, [
    LDKu8slice,
  ]],
  ClosingSigned_write: [LDKCVecTempl_u8, [
    LDKClosingSignedPtr,
  ]],
  ClosingSigned_read: [LDKClosingSigned, [
    LDKu8slice,
  ]],
  CommitmentSigned_write: [LDKCVecTempl_u8, [
    LDKCommitmentSignedPtr,
  ]],
  CommitmentSigned_read: [LDKCommitmentSigned, [
    LDKu8slice,
  ]],
  FundingCreated_write: [LDKCVecTempl_u8, [
    LDKFundingCreatedPtr,
  ]],
  FundingCreated_read: [LDKFundingCreated, [
    LDKu8slice,
  ]],
  FundingSigned_write: [LDKCVecTempl_u8, [
    LDKFundingSignedPtr,
  ]],
  FundingSigned_read: [LDKFundingSigned, [
    LDKu8slice,
  ]],
  FundingLocked_write: [LDKCVecTempl_u8, [
    LDKFundingLockedPtr,
  ]],
  FundingLocked_read: [LDKFundingLocked, [
    LDKu8slice,
  ]],
  Init_write: [LDKCVecTempl_u8, [
    LDKInit,
  ]],
  Init_read: [LDKInit, [
    LDKu8slice,
  ]],
  OpenChannel_write: [LDKCVecTempl_u8, [
    LDKOpenChannelPtr,
  ]],
  OpenChannel_read: [LDKOpenChannel, [
    LDKu8slice,
  ]],
  RevokeAndACK_write: [LDKCVecTempl_u8, [
    LDKRevokeAndACKPtr,
  ]],
  RevokeAndACK_read: [LDKRevokeAndACK, [
    LDKu8slice,
  ]],
  Shutdown_write: [LDKCVecTempl_u8, [
    LDKShutdownPtr,
  ]],
  Shutdown_read: [LDKShutdown, [
    LDKu8slice,
  ]],
  UpdateFailHTLC_write: [LDKCVecTempl_u8, [
    LDKUpdateFailHTLCPtr,
  ]],
  UpdateFailHTLC_read: [LDKUpdateFailHTLC, [
    LDKu8slice,
  ]],
  UpdateFailMalformedHTLC_write: [LDKCVecTempl_u8, [
    LDKUpdateFailMalformedHTLCPtr,
  ]],
  UpdateFailMalformedHTLC_read: [LDKUpdateFailMalformedHTLC, [
    LDKu8slice,
  ]],
  UpdateFee_write: [LDKCVecTempl_u8, [
    LDKUpdateFeePtr,
  ]],
  UpdateFee_read: [LDKUpdateFee, [
    LDKu8slice,
  ]],
  UpdateFulfillHTLC_write: [LDKCVecTempl_u8, [
    LDKUpdateFulfillHTLCPtr,
  ]],
  UpdateFulfillHTLC_read: [LDKUpdateFulfillHTLC, [
    LDKu8slice,
  ]],
  UpdateAddHTLC_write: [LDKCVecTempl_u8, [
    LDKUpdateAddHTLCPtr,
  ]],
  UpdateAddHTLC_read: [LDKUpdateAddHTLC, [
    LDKu8slice,
  ]],
  Ping_write: [LDKCVecTempl_u8, [
    LDKPingPtr,
  ]],
  Ping_read: [LDKPing, [
    LDKu8slice,
  ]],
  Pong_write: [LDKCVecTempl_u8, [
    LDKPongPtr,
  ]],
  Pong_read: [LDKPong, [
    LDKu8slice,
  ]],
  UnsignedChannelAnnouncement_write: [LDKCVecTempl_u8, [
    LDKUnsignedChannelAnnouncementPtr,
  ]],
  UnsignedChannelAnnouncement_read: [LDKUnsignedChannelAnnouncement, [
    LDKu8slice,
  ]],
  ChannelAnnouncement_write: [LDKCVecTempl_u8, [
    LDKChannelAnnouncementPtr,
  ]],
  ChannelAnnouncement_read: [LDKChannelAnnouncement, [
    LDKu8slice,
  ]],
  UnsignedChannelUpdate_write: [LDKCVecTempl_u8, [
    LDKUnsignedChannelUpdatePtr,
  ]],
  UnsignedChannelUpdate_read: [LDKUnsignedChannelUpdate, [
    LDKu8slice,
  ]],
  ChannelUpdate_write: [LDKCVecTempl_u8, [
    LDKChannelUpdatePtr,
  ]],
  ChannelUpdate_read: [LDKChannelUpdate, [
    LDKu8slice,
  ]],
  ErrorMessage_write: [LDKCVecTempl_u8, [
    LDKErrorMessagePtr,
  ]],
  ErrorMessage_read: [LDKErrorMessage, [
    LDKu8slice,
  ]],
  UnsignedNodeAnnouncement_write: [LDKCVecTempl_u8, [
    LDKUnsignedNodeAnnouncementPtr,
  ]],
  UnsignedNodeAnnouncement_read: [LDKUnsignedNodeAnnouncement, [
    LDKu8slice,
  ]],
  NodeAnnouncement_write: [LDKCVecTempl_u8, [
    LDKNodeAnnouncementPtr,
  ]],
  NodeAnnouncement_read: [LDKNodeAnnouncement, [
    LDKu8slice,
  ]],
  QueryShortChannelIds_read: [LDKQueryShortChannelIds, [
    LDKu8slice,
  ]],
  QueryShortChannelIds_write: [LDKCVecTempl_u8, [
    LDKQueryShortChannelIdsPtr,
  ]],
  ReplyShortChannelIdsEnd_read: [LDKReplyShortChannelIdsEnd, [
    LDKu8slice,
  ]],
  ReplyShortChannelIdsEnd_write: [LDKCVecTempl_u8, [
    LDKReplyShortChannelIdsEndPtr,
  ]],
  QueryChannelRange_read: [LDKQueryChannelRange, [
    LDKu8slice,
  ]],
  QueryChannelRange_write: [LDKCVecTempl_u8, [
    LDKQueryChannelRangePtr,
  ]],
  ReplyChannelRange_read: [LDKReplyChannelRange, [
    LDKu8slice,
  ]],
  ReplyChannelRange_write: [LDKCVecTempl_u8, [
    LDKReplyChannelRangePtr,
  ]],
  GossipTimestampFilter_read: [LDKGossipTimestampFilter, [
    LDKu8slice,
  ]],
  GossipTimestampFilter_write: [LDKCVecTempl_u8, [
    LDKGossipTimestampFilterPtr,
  ]],
  MessageHandler_get_chan_handler: [LDKChannelMessageHandlerPtr, [
    LDKMessageHandler,
  ]],
  MessageHandler_set_chan_handler: [ref.types.void, [
    LDKMessageHandlerPtr,
    LDKChannelMessageHandler,
  ]],
  MessageHandler_get_route_handler: [LDKRoutingMessageHandlerPtr, [
    LDKMessageHandlerPtr,
  ]],
  MessageHandler_set_route_handler: [ref.types.void, [
    LDKMessageHandlerPtr,
    LDKRoutingMessageHandler,
  ]],
  MessageHandler_new: [LDKMessageHandler, [
    LDKChannelMessageHandler,
    LDKRoutingMessageHandler,
  ]],
  SocketDescriptor_free: [ref.types.void, [
    LDKSocketDescriptor,
  ]],
  PeerHandleError_free: [ref.types.void, [
    LDKPeerHandleError,
  ]],
  PeerHandleError_get_no_connection_possible: [ref.types.byte, [
    LDKPeerHandleErrorPtr,
  ]],
  PeerHandleError_set_no_connection_possible: [ref.types.void, [
    LDKPeerHandleErrorPtr,
    ref.types.byte,
  ]],
  PeerHandleError_new: [LDKPeerHandleError, [
    ref.types.byte,
  ]],
  PeerManager_get_peer_node_ids: [LDKCVecTempl_PublicKey, [
    LDKPeerManager,
  ]],
  PeerManager_new_outbound_connection: [LDKCResultTempl_CVecTempl_u8_____PeerHandleError, [
    LDKPeerManagerPtr,
    LDKPublicKey,
    LDKSocketDescriptor,
  ]],
  PeerManager_new_inbound_connection: [LDKCResultTempl_u8__PeerHandleError, [
    LDKPeerManagerPtr,
    LDKSocketDescriptor,
  ]],
  PeerManager_write_buffer_space_avail: [LDKCResultTempl_u8__PeerHandleError, [
    LDKPeerManagerPtr,
    LDKSocketDescriptorPtr,
  ]],
  PeerManager_read_event: [LDKCResultTempl_bool__PeerHandleError, [
    LDKPeerManagerPtr,
    LDKSocketDescriptorPtr,
    LDKu8slice,
  ]],
  PeerManager_process_events: [ref.types.void, [
    LDKPeerManagerPtr,
  ]],
  PeerManager_socket_disconnected: [ref.types.void, [
    LDKPeerManagerPtr,
    LDKSocketDescriptorPtr,
  ]],
  PeerManager_timer_tick_occured: [ref.types.void, [
    LDKPeerManagerPtr,
  ]],
  build_commitment_secret: [LDKThirtyTwoBytes, [
    voidPtr,
    ref.types.ulonglong,
  ]],
  derive_private_key: [LDKCResultTempl_SecretKey__Secp256k1Error, [
    LDKPublicKey,
    voidPtr,
  ]],
  derive_public_key: [LDKCResultTempl_PublicKey__Secp256k1Error, [
    LDKPublicKey,
    LDKPublicKey,
  ]],
  derive_private_revocation_key: [LDKCResultTempl_SecretKey__Secp256k1Error, [
    voidPtr,
    voidPtr,
  ]],
  derive_public_revocation_key: [LDKCResultTempl_PublicKey__Secp256k1Error, [
    LDKPublicKey,
    LDKPublicKey,
  ]],
  TxCreationKeys_get_per_commitment_point: [LDKPublicKey, [
    LDKTxCreationKeys,
  ]],
  TxCreationKeys_set_per_commitment_point: [ref.types.void, [
    LDKTxCreationKeysPtr,
    LDKPublicKey,
  ]],
  TxCreationKeys_get_revocation_key: [LDKPublicKey, [
    LDKTxCreationKeysPtr,
  ]],
  TxCreationKeys_set_revocation_key: [ref.types.void, [
    LDKTxCreationKeysPtr,
    LDKPublicKey,
  ]],
  TxCreationKeys_get_broadcaster_htlc_key: [LDKPublicKey, [
    LDKTxCreationKeysPtr,
  ]],
  TxCreationKeys_set_broadcaster_htlc_key: [ref.types.void, [
    LDKTxCreationKeysPtr,
    LDKPublicKey,
  ]],
  TxCreationKeys_get_countersignatory_htlc_key: [LDKPublicKey, [
    LDKTxCreationKeysPtr,
  ]],
  TxCreationKeys_set_countersignatory_htlc_key: [ref.types.void, [
    LDKTxCreationKeysPtr,
    LDKPublicKey,
  ]],
  TxCreationKeys_get_broadcaster_delayed_payment_key: [LDKPublicKey, [
    LDKTxCreationKeysPtr,
  ]],
  TxCreationKeys_set_broadcaster_delayed_payment_key: [ref.types.void, [
    LDKTxCreationKeysPtr,
    LDKPublicKey,
  ]],
  TxCreationKeys_new: [LDKTxCreationKeys, [
    LDKPublicKey,
    LDKPublicKey,
    LDKPublicKey,
    LDKPublicKey,
    LDKPublicKey,
  ]],
  TxCreationKeys_write: [LDKCVecTempl_u8, [
    LDKTxCreationKeysPtr,
  ]],
  TxCreationKeys_read: [LDKTxCreationKeys, [
    LDKu8slice,
  ]],
  PreCalculatedTxCreationKeys_trust_key_derivation: [LDKTxCreationKeys, [
    LDKPreCalculatedTxCreationKeys,
  ]],
  PreCalculatedTxCreationKeys_per_commitment_point: [LDKPublicKey, [
    LDKPreCalculatedTxCreationKeysPtr,
  ]],
  ChannelPublicKeys_get_funding_pubkey: [LDKPublicKey, [
    LDKChannelPublicKeys,
  ]],
  ChannelPublicKeys_set_funding_pubkey: [ref.types.void, [
    LDKChannelPublicKeysPtr,
    LDKPublicKey,
  ]],
  ChannelPublicKeys_get_revocation_basepoint: [LDKPublicKey, [
    LDKChannelPublicKeysPtr,
  ]],
  ChannelPublicKeys_set_revocation_basepoint: [ref.types.void, [
    LDKChannelPublicKeysPtr,
    LDKPublicKey,
  ]],
  ChannelPublicKeys_get_payment_point: [LDKPublicKey, [
    LDKChannelPublicKeysPtr,
  ]],
  ChannelPublicKeys_set_payment_point: [ref.types.void, [
    LDKChannelPublicKeysPtr,
    LDKPublicKey,
  ]],
  ChannelPublicKeys_get_delayed_payment_basepoint: [LDKPublicKey, [
    LDKChannelPublicKeysPtr,
  ]],
  ChannelPublicKeys_set_delayed_payment_basepoint: [ref.types.void, [
    LDKChannelPublicKeysPtr,
    LDKPublicKey,
  ]],
  ChannelPublicKeys_get_htlc_basepoint: [LDKPublicKey, [
    LDKChannelPublicKeysPtr,
  ]],
  ChannelPublicKeys_set_htlc_basepoint: [ref.types.void, [
    LDKChannelPublicKeysPtr,
    LDKPublicKey,
  ]],
  ChannelPublicKeys_new: [LDKChannelPublicKeys, [
    LDKPublicKey,
    LDKPublicKey,
    LDKPublicKey,
    LDKPublicKey,
    LDKPublicKey,
  ]],
  ChannelPublicKeys_write: [LDKCVecTempl_u8, [
    LDKChannelPublicKeysPtr,
  ]],
  ChannelPublicKeys_read: [LDKChannelPublicKeys, [
    LDKu8slice,
  ]],
  TxCreationKeys_derive_new: [LDKCResultTempl_TxCreationKeys__Secp256k1Error, [
    LDKPublicKey,
    LDKPublicKey,
    LDKPublicKey,
    LDKPublicKey,
    LDKPublicKey,
  ]],
  get_revokeable_redeemscript: [LDKCVecTempl_u8, [
    LDKPublicKey,
    ref.types.ushort,
    LDKPublicKey,
  ]],
  HTLCOutputInCommitment_get_offered: [ref.types.byte, [
    LDKHTLCOutputInCommitment,
  ]],
  HTLCOutputInCommitment_set_offered: [ref.types.void, [
    LDKHTLCOutputInCommitmentPtr,
    ref.types.byte,
  ]],
  HTLCOutputInCommitment_get_amount_msat: [ref.types.ulonglong, [
    LDKHTLCOutputInCommitmentPtr,
  ]],
  HTLCOutputInCommitment_set_amount_msat: [ref.types.void, [
    LDKHTLCOutputInCommitmentPtr,
    ref.types.ulonglong,
  ]],
  HTLCOutputInCommitment_get_cltv_expiry: [ref.types.uint32, [
    LDKHTLCOutputInCommitmentPtr,
  ]],
  HTLCOutputInCommitment_set_cltv_expiry: [ref.types.void, [
    LDKHTLCOutputInCommitmentPtr,
    ref.types.uint32,
  ]],
  HTLCOutputInCommitment_get_payment_hash: [voidPtr, [
    LDKHTLCOutputInCommitmentPtr,
  ]],
  HTLCOutputInCommitment_set_payment_hash: [ref.types.void, [
    LDKHTLCOutputInCommitmentPtr,
    LDKThirtyTwoBytes,
  ]],
  HTLCOutputInCommitment_write: [LDKCVecTempl_u8, [
    LDKHTLCOutputInCommitmentPtr,
  ]],
  HTLCOutputInCommitment_read: [LDKHTLCOutputInCommitment, [
    LDKu8slice,
  ]],
  get_htlc_redeemscript: [LDKCVecTempl_u8, [
    LDKHTLCOutputInCommitmentPtr,
    LDKTxCreationKeysPtr,
  ]],
  make_funding_redeemscript: [LDKCVecTempl_u8, [
    LDKPublicKey,
    LDKPublicKey,
  ]],
  build_htlc_transaction: [LDKTransaction, [
    voidPtr,
    ref.types.uint32,
    ref.types.ushort,
    LDKHTLCOutputInCommitmentPtr,
    LDKPublicKey,
    LDKPublicKey,
  ]],
  HolderCommitmentTransaction_get_unsigned_tx: [LDKTransaction, [
    LDKHolderCommitmentTransaction,
  ]],
  HolderCommitmentTransaction_set_unsigned_tx: [ref.types.void, [
    LDKHolderCommitmentTransactionPtr,
    LDKTransaction,
  ]],
  HolderCommitmentTransaction_get_counterparty_sig: [LDKSignature, [
    LDKHolderCommitmentTransactionPtr,
  ]],
  HolderCommitmentTransaction_set_counterparty_sig: [ref.types.void, [
    LDKHolderCommitmentTransactionPtr,
    LDKSignature,
  ]],
  HolderCommitmentTransaction_get_feerate_per_kw: [ref.types.uint32, [
    LDKHolderCommitmentTransactionPtr,
  ]],
  HolderCommitmentTransaction_set_feerate_per_kw: [ref.types.void, [
    LDKHolderCommitmentTransactionPtr,
    ref.types.uint32,
  ]],
  HolderCommitmentTransaction_set_per_htlc: [ref.types.void, [
    LDKHolderCommitmentTransactionPtr,
    LDKCVecTempl_C2TupleTempl_HTLCOutputInCommitment__Signature,
  ]],
  HolderCommitmentTransaction_new_missing_holder_sig: [LDKHolderCommitmentTransaction, [
    LDKTransaction,
    LDKSignature,
    LDKPublicKey,
    LDKPublicKey,
    LDKTxCreationKeys,
    ref.types.uint32,
    LDKCVecTempl_C2TupleTempl_HTLCOutputInCommitment__Signature,
  ]],
  HolderCommitmentTransaction_trust_key_derivation: [LDKTxCreationKeys, [
    LDKHolderCommitmentTransactionPtr,
  ]],
  HolderCommitmentTransaction_txid: [LDKThirtyTwoBytes, [
    LDKHolderCommitmentTransactionPtr,
  ]],
  HolderCommitmentTransaction_get_holder_sig: [LDKSignature, [
    LDKHolderCommitmentTransactionPtr,
    voidPtr,
    LDKu8slice,
    ref.types.ulonglong,
  ]],
  HolderCommitmentTransaction_get_htlc_sigs: [LDKCResultTempl_CVecTempl_Signature_____u8, [
    LDKHolderCommitmentTransactionPtr,
    voidPtr,
    ref.types.ushort,
  ]],
  HolderCommitmentTransaction_write: [LDKCVecTempl_u8, [
    LDKHolderCommitmentTransactionPtr,
  ]],
  HolderCommitmentTransaction_read: [LDKHolderCommitmentTransaction, [
    LDKu8slice,
  ]],
  RouteHop_get_pubkey: [LDKPublicKey, [
    LDKRouteHop,
  ]],
  RouteHop_set_pubkey: [ref.types.void, [
    LDKRouteHopPtr,
    LDKPublicKey,
  ]],
  RouteHop_get_short_channel_id: [ref.types.ulonglong, [
    LDKRouteHopPtr,
  ]],
  RouteHop_set_short_channel_id: [ref.types.void, [
    LDKRouteHopPtr,
    ref.types.ulonglong,
  ]],
  RouteHop_get_fee_msat: [ref.types.ulonglong, [
    LDKRouteHopPtr,
  ]],
  RouteHop_set_fee_msat: [ref.types.void, [
    LDKRouteHopPtr,
    ref.types.ulonglong,
  ]],
  RouteHop_get_cltv_expiry_delta: [ref.types.uint32, [
    LDKRouteHopPtr,
  ]],
  RouteHop_set_cltv_expiry_delta: [ref.types.void, [
    LDKRouteHopPtr,
    ref.types.uint32,
  ]],
  Route_free: [ref.types.void, [
    LDKRoute,
  ]],
  Route_set_paths: [ref.types.void, [
    LDKRoutePtr,
    LDKCVecTempl_CVecTempl_RouteHop,
  ]],
  Route_new: [LDKRoute, [
    LDKCVecTempl_CVecTempl_RouteHop,
  ]],
  Route_write: [LDKCVecTempl_u8, [
    LDKRoutePtr,
  ]],
  Route_read: [LDKRoute, [
    LDKu8slice,
  ]],
  RouteHint_get_src_node_id: [LDKPublicKey, [
    LDKRouteHint,
  ]],
  RouteHint_set_src_node_id: [ref.types.void, [
    LDKRouteHintPtr,
    LDKPublicKey,
  ]],
  RouteHint_get_short_channel_id: [ref.types.ulonglong, [
    LDKRouteHintPtr,
  ]],
  RouteHint_set_short_channel_id: [ref.types.void, [
    LDKRouteHintPtr,
    ref.types.ulonglong,
  ]],
  RouteHint_get_cltv_expiry_delta: [ref.types.ushort, [
    LDKRouteHintPtr,
  ]],
  RouteHint_set_cltv_expiry_delta: [ref.types.void, [
    LDKRouteHintPtr,
    ref.types.ushort,
  ]],
  RouteHint_get_htlc_minimum_msat: [ref.types.ulonglong, [
    LDKRouteHintPtr,
  ]],
  RouteHint_set_htlc_minimum_msat: [ref.types.void, [
    LDKRouteHintPtr,
    ref.types.ulonglong,
  ]],
  get_route: [LDKCResultTempl_Route__LightningError, [
    LDKPublicKey,
    LDKNetworkGraph,
    LDKPublicKey,
    LDKCVec_ChannelDetailsZPtr,
    LDKCVecTempl_RouteHint,
    ref.types.ulonglong,
    ref.types.uint32,
    LDKLogger,
  ]],
  NetworkGraph_free: [ref.types.void, [
    LDKNetworkGraph,
  ]],
  LockedNetworkGraph_graph: [LDKNetworkGraph, [
    LDKLockedNetworkGraph,
  ]],
  NetGraphMsgHandler_as_RoutingMessageHandler: [LDKRoutingMessageHandler, [
    LDKNetGraphMsgHandler,
  ]],
  DirectionalChannelInfo_get_last_update: [ref.types.uint32, [
    LDKDirectionalChannelInfo,
  ]],
  DirectionalChannelInfo_set_last_update: [ref.types.void, [
    LDKDirectionalChannelInfoPtr,
    ref.types.uint32,
  ]],
  DirectionalChannelInfo_get_enabled: [ref.types.byte, [
    LDKDirectionalChannelInfoPtr,
  ]],
  DirectionalChannelInfo_set_enabled: [ref.types.void, [
    LDKDirectionalChannelInfoPtr,
    ref.types.byte,
  ]],
  DirectionalChannelInfo_get_cltv_expiry_delta: [ref.types.ushort, [
    LDKDirectionalChannelInfoPtr,
  ]],
  DirectionalChannelInfo_set_cltv_expiry_delta: [ref.types.void, [
    LDKDirectionalChannelInfoPtr,
    ref.types.ushort,
  ]],
  DirectionalChannelInfo_get_htlc_minimum_msat: [ref.types.ulonglong, [
    LDKDirectionalChannelInfoPtr,
  ]],
  DirectionalChannelInfo_set_htlc_minimum_msat: [ref.types.void, [
    LDKDirectionalChannelInfoPtr,
    ref.types.ulonglong,
  ]],
  DirectionalChannelInfo_get_last_update_message: [LDKChannelUpdate, [
    LDKDirectionalChannelInfoPtr,
  ]],
  DirectionalChannelInfo_set_last_update_message: [ref.types.void, [
    LDKDirectionalChannelInfoPtr,
    LDKChannelUpdate,
  ]],
  DirectionalChannelInfo_write: [LDKCVecTempl_u8, [
    LDKDirectionalChannelInfoPtr,
  ]],
  DirectionalChannelInfo_read: [LDKDirectionalChannelInfo, [
    LDKu8slice,
  ]],
  ChannelInfo_get_node_one: [LDKPublicKey, [
    LDKChannelInfoPtr,
  ]],
  ChannelInfo_set_node_one: [ref.types.void, [
    LDKChannelInfoPtr,
    LDKPublicKey,
  ]],
  ChannelInfo_get_one_to_two: [LDKDirectionalChannelInfo, [
    LDKChannelInfoPtr,
  ]],
  ChannelInfo_set_one_to_two: [ref.types.void, [
    LDKChannelInfoPtr,
    LDKDirectionalChannelInfo,
  ]],
  ChannelInfo_get_node_two: [LDKPublicKey, [
    LDKChannelInfoPtr,
  ]],
  ChannelInfo_set_node_two: [ref.types.void, [
    LDKChannelInfoPtr,
    LDKPublicKey,
  ]],
  ChannelInfo_get_two_to_one: [LDKDirectionalChannelInfo, [
    LDKChannelInfoPtr,
  ]],
  ChannelInfo_set_two_to_one: [ref.types.void, [
    LDKChannelInfoPtr,
    LDKDirectionalChannelInfo,
  ]],
  ChannelInfo_get_announcement_message: [LDKChannelAnnouncement, [
    LDKChannelInfoPtr,
  ]],
  ChannelInfo_set_announcement_message: [ref.types.void, [
    LDKChannelInfoPtr,
    LDKChannelAnnouncement,
  ]],
  ChannelInfo_write: [LDKCVecTempl_u8, [
    LDKChannelInfoPtr,
  ]],
  ChannelInfo_read: [LDKChannelInfo, [
    LDKu8slice,
  ]],
  RoutingFees_get_base_msat: [ref.types.uint32, [
    LDKRoutingFees,
  ]],
  RoutingFees_set_base_msat: [ref.types.void, [
    LDKRoutingFeesPtr,
    ref.types.uint32,
  ]],
  RoutingFees_get_proportional_millionths: [ref.types.uint32, [
    LDKRoutingFeesPtr,
  ]],
  RoutingFees_set_proportional_millionths: [ref.types.void, [
    LDKRoutingFeesPtr,
    ref.types.uint32,
  ]],
  RoutingFees_new: [LDKRoutingFees, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  RoutingFees_read: [LDKRoutingFees, [
    LDKu8slice,
  ]],
  RoutingFees_write: [LDKCVecTempl_u8, [
    LDKRoutingFeesPtr,
  ]],
  NodeAnnouncementInfo_get_last_update: [ref.types.uint32, [
    LDKNodeAnnouncementInfoPtr,
  ]],
  NodeAnnouncementInfo_set_last_update: [ref.types.void, [
    LDKNodeAnnouncementInfoPtr,
    ref.types.uint32,
  ]],
  NodeAnnouncementInfo_get_rgb: [voidPtr, [
    LDKNodeAnnouncementInfoPtr,
  ]],
  NodeAnnouncementInfo_set_rgb: [ref.types.void, [
    LDKNodeAnnouncementInfoPtr,
    LDKThreeBytes,
  ]],
  NodeAnnouncementInfo_get_alias: [voidPtr, [
    LDKNodeAnnouncementInfoPtr,
  ]],
  NodeAnnouncementInfo_set_alias: [ref.types.void, [
    LDKNodeAnnouncementInfoPtr,
    LDKThirtyTwoBytes,
  ]],
  NodeAnnouncementInfo_set_addresses: [ref.types.void, [
    LDKNodeAnnouncementInfoPtr,
    LDKCVecTempl_NetAddress,
  ]],
  NodeAnnouncementInfo_get_announcement_message: [LDKNodeAnnouncement, [
    LDKNodeAnnouncementInfoPtr,
  ]],
  NodeAnnouncementInfo_set_announcement_message: [ref.types.void, [
    LDKNodeAnnouncementInfoPtr,
    LDKNodeAnnouncement,
  ]],
  NodeAnnouncementInfo_write: [LDKCVecTempl_u8, [
    LDKNodeAnnouncementInfoPtr,
  ]],
  NodeAnnouncementInfo_read: [LDKNodeAnnouncementInfo, [
    LDKu8slice,
  ]],
  NodeInfo_set_channels: [ref.types.void, [
    LDKNodeInfo,
    LDKCVecTempl_u64,
  ]],
  NodeInfo_get_lowest_inbound_channel_fees: [LDKRoutingFees, [
    LDKNodeInfoPtr,
  ]],
  NodeInfo_set_lowest_inbound_channel_fees: [ref.types.void, [
    LDKNodeInfoPtr,
    LDKRoutingFees,
  ]],
  NodeInfo_get_announcement_info: [LDKNodeAnnouncementInfo, [
    LDKNodeInfoPtr,
  ]],
  NodeInfo_set_announcement_info: [ref.types.void, [
    LDKNodeInfoPtr,
    LDKNodeAnnouncementInfo,
  ]],
  NodeInfo_new: [LDKNodeInfo, [
    LDKCVecTempl_u64,
    LDKRoutingFees,
    LDKNodeAnnouncementInfo,
  ]],
  NodeInfo_write: [LDKCVecTempl_u8, [
    LDKNodeInfoPtr,
  ]],
  NodeInfo_read: [LDKNodeInfo, [
    LDKu8slice,
  ]],
  NetworkGraph_write: [LDKCVecTempl_u8, [
    LDKNetworkGraphPtr,
  ]],
  NetworkGraph_read: [LDKNetworkGraph, [
    LDKu8slice,
  ]],
  NetworkGraph_new: [LDKNetworkGraph, [
  ]],
  NetworkGraph_close_channel_from_update: [ref.types.void, [
    LDKNetworkGraphPtr,
    ref.types.ulonglong,
    ref.types.byte,
  ]],
});

