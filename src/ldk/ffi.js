var FFI = require('ffi'),
    ArrayType = require('ref-array'),
    Struct = require('ref-struct'),
    ref = require('ref');

var voidPtr = ref.refType(ref.types.void);

exports.CONSTANTS = {
  '': {
      false: 0,
      true: 1,
      '0': 'false',
      '1': 'true',
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
  'LDKChannelMonitorUpdateErr': {
      LDKChannelMonitorUpdateErr_TemporaryFailure: 0,
      LDKChannelMonitorUpdateErr_PermanentFailure: 1,
      LDKChannelMonitorUpdateErr_Sentinel: 2,
      '0': 'LDKChannelMonitorUpdateErr_TemporaryFailure',
      '1': 'LDKChannelMonitorUpdateErr_PermanentFailure',
      '2': 'LDKChannelMonitorUpdateErr_Sentinel',
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
  'LDKNetwork': {
      LDKNetwork_Bitcoin: 0,
      LDKNetwork_Testnet: 1,
      LDKNetwork_Regtest: 2,
      LDKNetwork_Sentinel: 3,
      '0': 'LDKNetwork_Bitcoin',
      '1': 'LDKNetwork_Testnet',
      '2': 'LDKNetwork_Regtest',
      '3': 'LDKNetwork_Sentinel',
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
};

var LDKThirtyTwoBytes = exports.LDKThirtyTwoBytes = Struct({
  data: ArrayType(ref.types.uchar, 32),
});
var LDKThirtyTwoBytesPtr = exports.LDKThirtyTwoBytesPtr = ref.refType(LDKThirtyTwoBytes);
var uint32_t = exports.uint32_t = voidPtr;
var uint32_tPtr = exports.uint32_tPtr = ref.refType(uint32_t);
var LDKC2TupleTempl_ThirtyTwoBytes__u32 = exports.LDKC2TupleTempl_ThirtyTwoBytes__u32 = Struct({
  a: LDKThirtyTwoBytesPtr,
  b: uint32_t,
});
var LDKC2TupleTempl_ThirtyTwoBytes__u32Ptr = exports.LDKC2TupleTempl_ThirtyTwoBytes__u32Ptr = ref.refType(LDKC2TupleTempl_ThirtyTwoBytes__u32);
var uint8_t = exports.uint8_t = voidPtr;
var uint8_tPtr = exports.uint8_tPtr = ref.refType(uint8_t);
var LDKCVecTempl_u8 = exports.LDKCVecTempl_u8 = Struct({
  data: uint8_t,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_u8Ptr = exports.LDKCVecTempl_u8Ptr = ref.refType(LDKCVecTempl_u8);
var LDKCVec_u8Z = exports.LDKCVec_u8Z = Struct({
  LDKCVecTempl_u8: LDKCVecTempl_u8,
});
var LDKCVec_u8ZPtr = exports.LDKCVec_u8ZPtr = ref.refType(LDKCVec_u8Z);
var uint64_t = exports.uint64_t = voidPtr;
var uint64_tPtr = exports.uint64_tPtr = ref.refType(uint64_t);
var LDKC2TupleTempl_CVec_u8Z__u64 = exports.LDKC2TupleTempl_CVec_u8Z__u64 = Struct({
  a: LDKCVec_u8ZPtr,
  b: uint64_t,
});
var LDKC2TupleTempl_CVec_u8Z__u64Ptr = exports.LDKC2TupleTempl_CVec_u8Z__u64Ptr = ref.refType(LDKC2TupleTempl_CVec_u8Z__u64);
var LDKC2TupleTempl_u64__u64 = exports.LDKC2TupleTempl_u64__u64 = Struct({
  a: uint64_tPtr,
  b: uint64_tPtr,
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
  a: LDKSignaturePtr,
  b: LDKCVecTempl_SignaturePtr,
});
var LDKC2TupleTempl_Signature__CVecTempl_SignaturePtr = exports.LDKC2TupleTempl_Signature__CVecTempl_SignaturePtr = ref.refType(LDKC2TupleTempl_Signature__CVecTempl_Signature);
var LDKCResultPtr_C2TupleTempl_Signature__CVecTempl_Signature________u8 = exports.LDKCResultPtr_C2TupleTempl_Signature__CVecTempl_Signature________u8 = Struct({
  result: LDKC2TupleTempl_Signature__CVecTempl_SignaturePtr,
  err: uint8_tPtr,
});
var LDKCResultPtr_C2TupleTempl_Signature__CVecTempl_Signature________u8Ptr = exports.LDKCResultPtr_C2TupleTempl_Signature__CVecTempl_Signature________u8Ptr = ref.refType(LDKCResultPtr_C2TupleTempl_Signature__CVecTempl_Signature________u8);
var LDKCResultTempl_C2TupleTempl_Signature__CVecTempl_Signature________u8 = exports.LDKCResultTempl_C2TupleTempl_Signature__CVecTempl_Signature________u8 = Struct({
  contents: LDKCResultPtr_C2TupleTempl_Signature__CVecTempl_Signature________u8,
  result_good: ref.types.uint32,
});
var LDKCResultTempl_C2TupleTempl_Signature__CVecTempl_Signature________u8Ptr = exports.LDKCResultTempl_C2TupleTempl_Signature__CVecTempl_Signature________u8Ptr = ref.refType(LDKCResultTempl_C2TupleTempl_Signature__CVecTempl_Signature________u8);
var LDKCResultPtr_Signature__u8 = exports.LDKCResultPtr_Signature__u8 = Struct({
  result: LDKSignaturePtr,
  err: uint8_tPtr,
});
var LDKCResultPtr_Signature__u8Ptr = exports.LDKCResultPtr_Signature__u8Ptr = ref.refType(LDKCResultPtr_Signature__u8);
var LDKCResultTempl_Signature__u8 = exports.LDKCResultTempl_Signature__u8 = Struct({
  contents: LDKCResultPtr_Signature__u8,
  result_good: ref.types.uint32,
});
var LDKCResultTempl_Signature__u8Ptr = exports.LDKCResultTempl_Signature__u8Ptr = ref.refType(LDKCResultTempl_Signature__u8);
var LDKSecretKey = exports.LDKSecretKey = Struct({
  bytes: ArrayType(ref.types.uchar, 32),
});
var LDKSecretKeyPtr = exports.LDKSecretKeyPtr = ref.refType(LDKSecretKey);
var LDKC2TupleTempl_SecretKey__ThirtyTwoBytes = exports.LDKC2TupleTempl_SecretKey__ThirtyTwoBytes = Struct({
  a: LDKSecretKeyPtr,
  b: LDKThirtyTwoBytesPtr,
});
var LDKC2TupleTempl_SecretKey__ThirtyTwoBytesPtr = exports.LDKC2TupleTempl_SecretKey__ThirtyTwoBytesPtr = ref.refType(LDKC2TupleTempl_SecretKey__ThirtyTwoBytes);
var LDKAPIError = exports.LDKAPIError = voidPtr;
var LDKAPIErrorPtr = exports.LDKAPIErrorPtr = ref.refType(LDKAPIError);
var LDKCResultPtr_u8__APIError = exports.LDKCResultPtr_u8__APIError = Struct({
  result: uint8_tPtr,
  err: LDKAPIError,
});
var LDKCResultPtr_u8__APIErrorPtr = exports.LDKCResultPtr_u8__APIErrorPtr = ref.refType(LDKCResultPtr_u8__APIError);
var LDKCResultTempl_u8__APIError = exports.LDKCResultTempl_u8__APIError = Struct({
  contents: LDKCResultPtr_u8__APIError,
  result_good: ref.types.uint32,
});
var LDKCResultTempl_u8__APIErrorPtr = exports.LDKCResultTempl_u8__APIErrorPtr = ref.refType(LDKCResultTempl_u8__APIError);
var LDKlnPaymentSendFailure = exports.LDKlnPaymentSendFailure = voidPtr;
var LDKlnPaymentSendFailurePtr = exports.LDKlnPaymentSendFailurePtr = ref.refType(LDKlnPaymentSendFailure);
var LDKPaymentSendFailure = exports.LDKPaymentSendFailure = Struct({
  inner: LDKlnPaymentSendFailure,
  _underlying_ref: ref.types.uint32,
});
var LDKPaymentSendFailurePtr = exports.LDKPaymentSendFailurePtr = ref.refType(LDKPaymentSendFailure);
var LDKCResultPtr_u8__PaymentSendFailure = exports.LDKCResultPtr_u8__PaymentSendFailure = Struct({
  result: uint8_tPtr,
  err: LDKPaymentSendFailurePtr,
});
var LDKCResultPtr_u8__PaymentSendFailurePtr = exports.LDKCResultPtr_u8__PaymentSendFailurePtr = ref.refType(LDKCResultPtr_u8__PaymentSendFailure);
var LDKCResultTempl_u8__PaymentSendFailure = exports.LDKCResultTempl_u8__PaymentSendFailure = Struct({
  contents: LDKCResultPtr_u8__PaymentSendFailure,
  result_good: ref.types.uint32,
});
var LDKCResultTempl_u8__PaymentSendFailurePtr = exports.LDKCResultTempl_u8__PaymentSendFailurePtr = ref.refType(LDKCResultTempl_u8__PaymentSendFailure);
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
  result_good: ref.types.uint32,
});
var LDKCResultTempl_u8__ChannelMonitorUpdateErrPtr = exports.LDKCResultTempl_u8__ChannelMonitorUpdateErrPtr = ref.refType(LDKCResultTempl_u8__ChannelMonitorUpdateErr);
var LDKlnMonitorUpdateError = exports.LDKlnMonitorUpdateError = voidPtr;
var LDKlnMonitorUpdateErrorPtr = exports.LDKlnMonitorUpdateErrorPtr = ref.refType(LDKlnMonitorUpdateError);
var LDKMonitorUpdateError = exports.LDKMonitorUpdateError = Struct({
  inner: LDKlnMonitorUpdateError,
  _underlying_ref: ref.types.uint32,
});
var LDKMonitorUpdateErrorPtr = exports.LDKMonitorUpdateErrorPtr = ref.refType(LDKMonitorUpdateError);
var LDKCResultPtr_u8__MonitorUpdateError = exports.LDKCResultPtr_u8__MonitorUpdateError = Struct({
  result: uint8_tPtr,
  err: LDKMonitorUpdateErrorPtr,
});
var LDKCResultPtr_u8__MonitorUpdateErrorPtr = exports.LDKCResultPtr_u8__MonitorUpdateErrorPtr = ref.refType(LDKCResultPtr_u8__MonitorUpdateError);
var LDKCResultTempl_u8__MonitorUpdateError = exports.LDKCResultTempl_u8__MonitorUpdateError = Struct({
  contents: LDKCResultPtr_u8__MonitorUpdateError,
  result_good: ref.types.uint32,
});
var LDKCResultTempl_u8__MonitorUpdateErrorPtr = exports.LDKCResultTempl_u8__MonitorUpdateErrorPtr = ref.refType(LDKCResultTempl_u8__MonitorUpdateError);
var LDKlnOutPoint = exports.LDKlnOutPoint = voidPtr;
var LDKlnOutPointPtr = exports.LDKlnOutPointPtr = ref.refType(LDKlnOutPoint);
var LDKOutPoint = exports.LDKOutPoint = Struct({
  inner: LDKlnOutPoint,
  _underlying_ref: ref.types.uint32,
});
var LDKOutPointPtr = exports.LDKOutPointPtr = ref.refType(LDKOutPoint);
var LDKC2TupleTempl_OutPoint__CVec_u8Z = exports.LDKC2TupleTempl_OutPoint__CVec_u8Z = Struct({
  a: LDKOutPointPtr,
  b: LDKCVec_u8ZPtr,
});
var LDKC2TupleTempl_OutPoint__CVec_u8ZPtr = exports.LDKC2TupleTempl_OutPoint__CVec_u8ZPtr = ref.refType(LDKC2TupleTempl_OutPoint__CVec_u8Z);
var LDKlnChannelAnnouncement = exports.LDKlnChannelAnnouncement = voidPtr;
var LDKlnChannelAnnouncementPtr = exports.LDKlnChannelAnnouncementPtr = ref.refType(LDKlnChannelAnnouncement);
var LDKChannelAnnouncement = exports.LDKChannelAnnouncement = Struct({
  inner: LDKlnChannelAnnouncement,
  _underlying_ref: ref.types.uint32,
});
var LDKChannelAnnouncementPtr = exports.LDKChannelAnnouncementPtr = ref.refType(LDKChannelAnnouncement);
var LDKlnChannelUpdate = exports.LDKlnChannelUpdate = voidPtr;
var LDKlnChannelUpdatePtr = exports.LDKlnChannelUpdatePtr = ref.refType(LDKlnChannelUpdate);
var LDKChannelUpdate = exports.LDKChannelUpdate = Struct({
  inner: LDKlnChannelUpdate,
  _underlying_ref: ref.types.uint32,
});
var LDKChannelUpdatePtr = exports.LDKChannelUpdatePtr = ref.refType(LDKChannelUpdate);
var LDKC3TupleTempl_ChannelAnnouncement__ChannelUpdate__ChannelUpdate = exports.LDKC3TupleTempl_ChannelAnnouncement__ChannelUpdate__ChannelUpdate = Struct({
  a: LDKChannelAnnouncementPtr,
  b: LDKChannelUpdatePtr,
  c: LDKChannelUpdatePtr,
});
var LDKC3TupleTempl_ChannelAnnouncement__ChannelUpdate__ChannelUpdatePtr = exports.LDKC3TupleTempl_ChannelAnnouncement__ChannelUpdate__ChannelUpdatePtr = ref.refType(LDKC3TupleTempl_ChannelAnnouncement__ChannelUpdate__ChannelUpdate);
var LDKlnPeerHandleError = exports.LDKlnPeerHandleError = voidPtr;
var LDKlnPeerHandleErrorPtr = exports.LDKlnPeerHandleErrorPtr = ref.refType(LDKlnPeerHandleError);
var LDKPeerHandleError = exports.LDKPeerHandleError = Struct({
  inner: LDKlnPeerHandleError,
  _underlying_ref: ref.types.uint32,
});
var LDKPeerHandleErrorPtr = exports.LDKPeerHandleErrorPtr = ref.refType(LDKPeerHandleError);
var LDKCResultPtr_u8__PeerHandleError = exports.LDKCResultPtr_u8__PeerHandleError = Struct({
  result: uint8_tPtr,
  err: LDKPeerHandleErrorPtr,
});
var LDKCResultPtr_u8__PeerHandleErrorPtr = exports.LDKCResultPtr_u8__PeerHandleErrorPtr = ref.refType(LDKCResultPtr_u8__PeerHandleError);
var LDKCResultTempl_u8__PeerHandleError = exports.LDKCResultTempl_u8__PeerHandleError = Struct({
  contents: LDKCResultPtr_u8__PeerHandleError,
  result_good: ref.types.uint32,
});
var LDKCResultTempl_u8__PeerHandleErrorPtr = exports.LDKCResultTempl_u8__PeerHandleErrorPtr = ref.refType(LDKCResultTempl_u8__PeerHandleError);
var LDKlnChannelHandshakeConfig = exports.LDKlnChannelHandshakeConfig = voidPtr;
var LDKlnChannelHandshakeConfigPtr = exports.LDKlnChannelHandshakeConfigPtr = ref.refType(LDKlnChannelHandshakeConfig);
var LDKChannelHandshakeConfig = exports.LDKChannelHandshakeConfig = Struct({
  inner: LDKlnChannelHandshakeConfig,
  _underlying_ref: ref.types.uint32,
});
var LDKChannelHandshakeConfigPtr = exports.LDKChannelHandshakeConfigPtr = ref.refType(LDKChannelHandshakeConfig);
var LDKlnChannelHandshakeLimits = exports.LDKlnChannelHandshakeLimits = voidPtr;
var LDKlnChannelHandshakeLimitsPtr = exports.LDKlnChannelHandshakeLimitsPtr = ref.refType(LDKlnChannelHandshakeLimits);
var LDKChannelHandshakeLimits = exports.LDKChannelHandshakeLimits = Struct({
  inner: LDKlnChannelHandshakeLimits,
  _underlying_ref: ref.types.uint32,
});
var LDKChannelHandshakeLimitsPtr = exports.LDKChannelHandshakeLimitsPtr = ref.refType(LDKChannelHandshakeLimits);
var LDKlnChannelConfig = exports.LDKlnChannelConfig = voidPtr;
var LDKlnChannelConfigPtr = exports.LDKlnChannelConfigPtr = ref.refType(LDKlnChannelConfig);
var LDKChannelConfig = exports.LDKChannelConfig = Struct({
  inner: LDKlnChannelConfig,
  _underlying_ref: ref.types.uint32,
});
var LDKChannelConfigPtr = exports.LDKChannelConfigPtr = ref.refType(LDKChannelConfig);
var LDKu8slice = exports.LDKu8slice = Struct({
  data: uint8_tPtr,
  datalen: ref.types.ulong,
});
var LDKu8slicePtr = exports.LDKu8slicePtr = ref.refType(LDKu8slice);
var LDKlnUserConfig = exports.LDKlnUserConfig = voidPtr;
var LDKlnUserConfigPtr = exports.LDKlnUserConfigPtr = ref.refType(LDKlnUserConfig);
var LDKUserConfig = exports.LDKUserConfig = Struct({
  inner: LDKlnUserConfig,
  _underlying_ref: ref.types.uint32,
});
var LDKUserConfigPtr = exports.LDKUserConfigPtr = ref.refType(LDKUserConfig);
var LDKlnChainWatchedUtil = exports.LDKlnChainWatchedUtil = voidPtr;
var LDKlnChainWatchedUtilPtr = exports.LDKlnChainWatchedUtilPtr = ref.refType(LDKlnChainWatchedUtil);
var LDKChainWatchedUtil = exports.LDKChainWatchedUtil = Struct({
  inner: LDKlnChainWatchedUtil,
  _underlying_ref: ref.types.uint32,
});
var LDKChainWatchedUtilPtr = exports.LDKChainWatchedUtilPtr = ref.refType(LDKChainWatchedUtil);
var LDKTransaction = exports.LDKTransaction = Struct({
  data: uint8_tPtr,
  datalen: ref.types.ulong,
});
var LDKTransactionPtr = exports.LDKTransactionPtr = ref.refType(LDKTransaction);
var LDKlnBlockNotifier = exports.LDKlnBlockNotifier = voidPtr;
var LDKlnBlockNotifierPtr = exports.LDKlnBlockNotifierPtr = ref.refType(LDKlnBlockNotifier);
var LDKBlockNotifier = exports.LDKBlockNotifier = Struct({
  inner: LDKlnBlockNotifier,
  _underlying_ref: ref.types.uint32,
});
var LDKBlockNotifierPtr = exports.LDKBlockNotifierPtr = ref.refType(LDKBlockNotifier);
var LDKChainWatchInterface = exports.LDKChainWatchInterface = Struct({
  this_arg: voidPtr,
  install_watch_tx: voidPtr,
  install_watch_outpoint: voidPtr,
  watch_all_txn: voidPtr,
  get_chain_utxo: voidPtr,
  filter_block: voidPtr,
  reentered: voidPtr,
});
var LDKChainWatchInterfacePtr = exports.LDKChainWatchInterfacePtr = ref.refType(LDKChainWatchInterface);
var LDKChainListener = exports.LDKChainListener = Struct({
  this_arg: voidPtr,
  block_connected: voidPtr,
  block_disconnected: voidPtr,
});
var LDKChainListenerPtr = exports.LDKChainListenerPtr = ref.refType(LDKChainListener);
var LDKCSliceTempl_CVec_u8Z = exports.LDKCSliceTempl_CVec_u8Z = Struct({
  data: LDKCVec_u8ZPtr,
  datalen: ref.types.ulong,
});
var LDKCSliceTempl_CVec_u8ZPtr = exports.LDKCSliceTempl_CVec_u8ZPtr = ref.refType(LDKCSliceTempl_CVec_u8Z);
var LDKu32slice = exports.LDKu32slice = Struct({
  data: uint32_tPtr,
  datalen: ref.types.ulong,
});
var LDKu32slicePtr = exports.LDKu32slicePtr = ref.refType(LDKu32slice);
var LDKlnChainWatchInterfaceUtil = exports.LDKlnChainWatchInterfaceUtil = voidPtr;
var LDKlnChainWatchInterfaceUtilPtr = exports.LDKlnChainWatchInterfaceUtilPtr = ref.refType(LDKlnChainWatchInterfaceUtil);
var LDKChainWatchInterfaceUtil = exports.LDKChainWatchInterfaceUtil = Struct({
  inner: LDKlnChainWatchInterfaceUtil,
  _underlying_ref: ref.types.uint32,
});
var LDKChainWatchInterfaceUtilPtr = exports.LDKChainWatchInterfaceUtilPtr = ref.refType(LDKChainWatchInterfaceUtil);
var LDKlnSpendableOutputDescriptor = exports.LDKlnSpendableOutputDescriptor = voidPtr;
var LDKlnSpendableOutputDescriptorPtr = exports.LDKlnSpendableOutputDescriptorPtr = ref.refType(LDKlnSpendableOutputDescriptor);
var LDKSpendableOutputDescriptor = exports.LDKSpendableOutputDescriptor = Struct({
  inner: LDKlnSpendableOutputDescriptor,
  _underlying_ref: ref.types.uint32,
});
var LDKSpendableOutputDescriptorPtr = exports.LDKSpendableOutputDescriptorPtr = ref.refType(LDKSpendableOutputDescriptor);
var LDKlnInMemoryChannelKeys = exports.LDKlnInMemoryChannelKeys = voidPtr;
var LDKlnInMemoryChannelKeysPtr = exports.LDKlnInMemoryChannelKeysPtr = ref.refType(LDKlnInMemoryChannelKeys);
var LDKInMemoryChannelKeys = exports.LDKInMemoryChannelKeys = Struct({
  inner: LDKlnInMemoryChannelKeys,
  _underlying_ref: ref.types.uint32,
});
var LDKInMemoryChannelKeysPtr = exports.LDKInMemoryChannelKeysPtr = ref.refType(LDKInMemoryChannelKeys);
var LDKlnChannelPublicKeys = exports.LDKlnChannelPublicKeys = voidPtr;
var LDKlnChannelPublicKeysPtr = exports.LDKlnChannelPublicKeysPtr = ref.refType(LDKlnChannelPublicKeys);
var LDKChannelPublicKeys = exports.LDKChannelPublicKeys = Struct({
  inner: LDKlnChannelPublicKeys,
  _underlying_ref: ref.types.uint32,
});
var LDKChannelPublicKeysPtr = exports.LDKChannelPublicKeysPtr = ref.refType(LDKChannelPublicKeys);
var LDKChannelKeys = exports.LDKChannelKeys = Struct({
  this_arg: voidPtr,
  commitment_seed: LDKThirtyTwoBytes,
  set_commitment_seed: voidPtr,
  pubkeys: LDKChannelPublicKeys,
  set_pubkeys: voidPtr,
  key_derivation_params: voidPtr,
  sign_remote_commitment: voidPtr,
  sign_local_commitment: voidPtr,
  sign_justice_transaction: voidPtr,
  sign_remote_htlc_transaction: voidPtr,
  sign_closing_transaction: voidPtr,
  sign_channel_announcement: voidPtr,
  set_remote_channel_pubkeys: voidPtr,
});
var LDKChannelKeysPtr = exports.LDKChannelKeysPtr = ref.refType(LDKChannelKeys);
var LDKlnKeysManager = exports.LDKlnKeysManager = voidPtr;
var LDKlnKeysManagerPtr = exports.LDKlnKeysManagerPtr = ref.refType(LDKlnKeysManager);
var LDKKeysManager = exports.LDKKeysManager = Struct({
  inner: LDKlnKeysManager,
  _underlying_ref: ref.types.uint32,
});
var LDKKeysManagerPtr = exports.LDKKeysManagerPtr = ref.refType(LDKKeysManager);
var LDKKeysInterface = exports.LDKKeysInterface = Struct({
  this_arg: voidPtr,
  get_node_secret: voidPtr,
  get_destination_script: voidPtr,
  get_shutdown_pubkey: voidPtr,
  get_channel_keys: voidPtr,
  get_onion_rand: voidPtr,
  get_channel_id: voidPtr,
});
var LDKKeysInterfacePtr = exports.LDKKeysInterfacePtr = ref.refType(LDKKeysInterface);
var LDKlnChannelManager = exports.LDKlnChannelManager = voidPtr;
var LDKlnChannelManagerPtr = exports.LDKlnChannelManagerPtr = ref.refType(LDKlnChannelManager);
var LDKChannelManager = exports.LDKChannelManager = Struct({
  inner: LDKlnChannelManager,
  _underlying_ref: ref.types.uint32,
});
var LDKChannelManagerPtr = exports.LDKChannelManagerPtr = ref.refType(LDKChannelManager);
var LDKlnChannelDetails = exports.LDKlnChannelDetails = voidPtr;
var LDKlnChannelDetailsPtr = exports.LDKlnChannelDetailsPtr = ref.refType(LDKlnChannelDetails);
var LDKChannelDetails = exports.LDKChannelDetails = Struct({
  inner: LDKlnChannelDetails,
  _underlying_ref: ref.types.uint32,
});
var LDKChannelDetailsPtr = exports.LDKChannelDetailsPtr = ref.refType(LDKChannelDetails);
var LDKPublicKey = exports.LDKPublicKey = Struct({
  compressed_form: ArrayType(ref.types.uchar, 33),
});
var LDKPublicKeyPtr = exports.LDKPublicKeyPtr = ref.refType(LDKPublicKey);
var LDKlnInitFeatures = exports.LDKlnInitFeatures = voidPtr;
var LDKlnInitFeaturesPtr = exports.LDKlnInitFeaturesPtr = ref.refType(LDKlnInitFeatures);
var LDKInitFeatures = exports.LDKInitFeatures = Struct({
  inner: LDKlnInitFeatures,
  _underlying_ref: ref.types.uint32,
});
var LDKInitFeaturesPtr = exports.LDKInitFeaturesPtr = ref.refType(LDKInitFeatures);
var LDKFeeEstimator = exports.LDKFeeEstimator = Struct({
  this_arg: voidPtr,
  get_est_sat_per_1000_weight: voidPtr,
});
var LDKFeeEstimatorPtr = exports.LDKFeeEstimatorPtr = ref.refType(LDKFeeEstimator);
var LDKManyChannelMonitor = exports.LDKManyChannelMonitor = Struct({
  this_arg: voidPtr,
  add_monitor: voidPtr,
  update_monitor: voidPtr,
  get_and_clear_pending_htlcs_updated: voidPtr,
});
var LDKManyChannelMonitorPtr = exports.LDKManyChannelMonitorPtr = ref.refType(LDKManyChannelMonitor);
var LDKBroadcasterInterface = exports.LDKBroadcasterInterface = Struct({
  this_arg: voidPtr,
  broadcast_transaction: voidPtr,
});
var LDKBroadcasterInterfacePtr = exports.LDKBroadcasterInterfacePtr = ref.refType(LDKBroadcasterInterface);
var LDKLogger = exports.LDKLogger = Struct({
  this_arg: voidPtr,
  log: voidPtr,
});
var LDKLoggerPtr = exports.LDKLoggerPtr = ref.refType(LDKLogger);
var LDKCVecTempl_ChannelDetails = exports.LDKCVecTempl_ChannelDetails = Struct({
  data: LDKChannelDetailsPtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_ChannelDetailsPtr = exports.LDKCVecTempl_ChannelDetailsPtr = ref.refType(LDKCVecTempl_ChannelDetails);
var LDKlnRoute = exports.LDKlnRoute = voidPtr;
var LDKlnRoutePtr = exports.LDKlnRoutePtr = ref.refType(LDKlnRoute);
var LDKRoute = exports.LDKRoute = Struct({
  inner: LDKlnRoute,
  _underlying_ref: ref.types.uint32,
});
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
var LDKMessageSendEventsProvider = exports.LDKMessageSendEventsProvider = Struct({
  this_arg: voidPtr,
  get_and_clear_pending_msg_events: voidPtr,
});
var LDKMessageSendEventsProviderPtr = exports.LDKMessageSendEventsProviderPtr = ref.refType(LDKMessageSendEventsProvider);
var LDKEventsProvider = exports.LDKEventsProvider = Struct({
  this_arg: voidPtr,
  get_and_clear_pending_events: voidPtr,
});
var LDKEventsProviderPtr = exports.LDKEventsProviderPtr = ref.refType(LDKEventsProvider);
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
});
var LDKChannelMessageHandlerPtr = exports.LDKChannelMessageHandlerPtr = ref.refType(LDKChannelMessageHandler);
var LDKlnChannelMonitorUpdate = exports.LDKlnChannelMonitorUpdate = voidPtr;
var LDKlnChannelMonitorUpdatePtr = exports.LDKlnChannelMonitorUpdatePtr = ref.refType(LDKlnChannelMonitorUpdate);
var LDKChannelMonitorUpdate = exports.LDKChannelMonitorUpdate = Struct({
  inner: LDKlnChannelMonitorUpdate,
  _underlying_ref: ref.types.uint32,
});
var LDKChannelMonitorUpdatePtr = exports.LDKChannelMonitorUpdatePtr = ref.refType(LDKChannelMonitorUpdate);
var LDKlnHTLCUpdate = exports.LDKlnHTLCUpdate = voidPtr;
var LDKlnHTLCUpdatePtr = exports.LDKlnHTLCUpdatePtr = ref.refType(LDKlnHTLCUpdate);
var LDKHTLCUpdate = exports.LDKHTLCUpdate = Struct({
  inner: LDKlnHTLCUpdate,
  _underlying_ref: ref.types.uint32,
});
var LDKHTLCUpdatePtr = exports.LDKHTLCUpdatePtr = ref.refType(LDKHTLCUpdate);
var LDKlnChannelMonitor = exports.LDKlnChannelMonitor = voidPtr;
var LDKlnChannelMonitorPtr = exports.LDKlnChannelMonitorPtr = ref.refType(LDKlnChannelMonitor);
var LDKChannelMonitor = exports.LDKChannelMonitor = Struct({
  inner: LDKlnChannelMonitor,
  _underlying_ref: ref.types.uint32,
});
var LDKChannelMonitorPtr = exports.LDKChannelMonitorPtr = ref.refType(LDKChannelMonitor);
var LDKCVecTempl_HTLCUpdate = exports.LDKCVecTempl_HTLCUpdate = Struct({
  data: LDKHTLCUpdatePtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_HTLCUpdatePtr = exports.LDKCVecTempl_HTLCUpdatePtr = ref.refType(LDKCVecTempl_HTLCUpdate);
var LDKEvent = exports.LDKEvent = voidPtr;
var LDKEventPtr = exports.LDKEventPtr = ref.refType(LDKEvent);
var LDKCVecTempl_Event = exports.LDKCVecTempl_Event = Struct({
  data: LDKEvent,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_EventPtr = exports.LDKCVecTempl_EventPtr = ref.refType(LDKCVecTempl_Event);
var LDKCVecTempl_CVec_u8Z = exports.LDKCVecTempl_CVec_u8Z = Struct({
  data: LDKCVec_u8ZPtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_CVec_u8ZPtr = exports.LDKCVecTempl_CVec_u8ZPtr = ref.refType(LDKCVecTempl_CVec_u8Z);
var LDKlnDecodeError = exports.LDKlnDecodeError = voidPtr;
var LDKlnDecodeErrorPtr = exports.LDKlnDecodeErrorPtr = ref.refType(LDKlnDecodeError);
var LDKDecodeError = exports.LDKDecodeError = Struct({
  inner: LDKlnDecodeError,
  _underlying_ref: ref.types.uint32,
});
var LDKDecodeErrorPtr = exports.LDKDecodeErrorPtr = ref.refType(LDKDecodeError);
var LDKlnInit = exports.LDKlnInit = voidPtr;
var LDKlnInitPtr = exports.LDKlnInitPtr = ref.refType(LDKlnInit);
var LDKInit = exports.LDKInit = Struct({
  inner: LDKlnInit,
  _underlying_ref: ref.types.uint32,
});
var LDKInitPtr = exports.LDKInitPtr = ref.refType(LDKInit);
var LDKlnErrorMessage = exports.LDKlnErrorMessage = voidPtr;
var LDKlnErrorMessagePtr = exports.LDKlnErrorMessagePtr = ref.refType(LDKlnErrorMessage);
var LDKErrorMessage = exports.LDKErrorMessage = Struct({
  inner: LDKlnErrorMessage,
  _underlying_ref: ref.types.uint32,
});
var LDKErrorMessagePtr = exports.LDKErrorMessagePtr = ref.refType(LDKErrorMessage);
var LDKlnPing = exports.LDKlnPing = voidPtr;
var LDKlnPingPtr = exports.LDKlnPingPtr = ref.refType(LDKlnPing);
var LDKPing = exports.LDKPing = Struct({
  inner: LDKlnPing,
  _underlying_ref: ref.types.uint32,
});
var LDKPingPtr = exports.LDKPingPtr = ref.refType(LDKPing);
var LDKlnPong = exports.LDKlnPong = voidPtr;
var LDKlnPongPtr = exports.LDKlnPongPtr = ref.refType(LDKlnPong);
var LDKPong = exports.LDKPong = Struct({
  inner: LDKlnPong,
  _underlying_ref: ref.types.uint32,
});
var LDKPongPtr = exports.LDKPongPtr = ref.refType(LDKPong);
var LDKlnOpenChannel = exports.LDKlnOpenChannel = voidPtr;
var LDKlnOpenChannelPtr = exports.LDKlnOpenChannelPtr = ref.refType(LDKlnOpenChannel);
var LDKOpenChannel = exports.LDKOpenChannel = Struct({
  inner: LDKlnOpenChannel,
  _underlying_ref: ref.types.uint32,
});
var LDKOpenChannelPtr = exports.LDKOpenChannelPtr = ref.refType(LDKOpenChannel);
var LDKlnAcceptChannel = exports.LDKlnAcceptChannel = voidPtr;
var LDKlnAcceptChannelPtr = exports.LDKlnAcceptChannelPtr = ref.refType(LDKlnAcceptChannel);
var LDKAcceptChannel = exports.LDKAcceptChannel = Struct({
  inner: LDKlnAcceptChannel,
  _underlying_ref: ref.types.uint32,
});
var LDKAcceptChannelPtr = exports.LDKAcceptChannelPtr = ref.refType(LDKAcceptChannel);
var LDKlnFundingCreated = exports.LDKlnFundingCreated = voidPtr;
var LDKlnFundingCreatedPtr = exports.LDKlnFundingCreatedPtr = ref.refType(LDKlnFundingCreated);
var LDKFundingCreated = exports.LDKFundingCreated = Struct({
  inner: LDKlnFundingCreated,
  _underlying_ref: ref.types.uint32,
});
var LDKFundingCreatedPtr = exports.LDKFundingCreatedPtr = ref.refType(LDKFundingCreated);
var LDKlnFundingSigned = exports.LDKlnFundingSigned = voidPtr;
var LDKlnFundingSignedPtr = exports.LDKlnFundingSignedPtr = ref.refType(LDKlnFundingSigned);
var LDKFundingSigned = exports.LDKFundingSigned = Struct({
  inner: LDKlnFundingSigned,
  _underlying_ref: ref.types.uint32,
});
var LDKFundingSignedPtr = exports.LDKFundingSignedPtr = ref.refType(LDKFundingSigned);
var LDKlnFundingLocked = exports.LDKlnFundingLocked = voidPtr;
var LDKlnFundingLockedPtr = exports.LDKlnFundingLockedPtr = ref.refType(LDKlnFundingLocked);
var LDKFundingLocked = exports.LDKFundingLocked = Struct({
  inner: LDKlnFundingLocked,
  _underlying_ref: ref.types.uint32,
});
var LDKFundingLockedPtr = exports.LDKFundingLockedPtr = ref.refType(LDKFundingLocked);
var LDKlnShutdown = exports.LDKlnShutdown = voidPtr;
var LDKlnShutdownPtr = exports.LDKlnShutdownPtr = ref.refType(LDKlnShutdown);
var LDKShutdown = exports.LDKShutdown = Struct({
  inner: LDKlnShutdown,
  _underlying_ref: ref.types.uint32,
});
var LDKShutdownPtr = exports.LDKShutdownPtr = ref.refType(LDKShutdown);
var LDKlnClosingSigned = exports.LDKlnClosingSigned = voidPtr;
var LDKlnClosingSignedPtr = exports.LDKlnClosingSignedPtr = ref.refType(LDKlnClosingSigned);
var LDKClosingSigned = exports.LDKClosingSigned = Struct({
  inner: LDKlnClosingSigned,
  _underlying_ref: ref.types.uint32,
});
var LDKClosingSignedPtr = exports.LDKClosingSignedPtr = ref.refType(LDKClosingSigned);
var LDKlnUpdateAddHTLC = exports.LDKlnUpdateAddHTLC = voidPtr;
var LDKlnUpdateAddHTLCPtr = exports.LDKlnUpdateAddHTLCPtr = ref.refType(LDKlnUpdateAddHTLC);
var LDKUpdateAddHTLC = exports.LDKUpdateAddHTLC = Struct({
  inner: LDKlnUpdateAddHTLC,
  _underlying_ref: ref.types.uint32,
});
var LDKUpdateAddHTLCPtr = exports.LDKUpdateAddHTLCPtr = ref.refType(LDKUpdateAddHTLC);
var LDKlnUpdateFulfillHTLC = exports.LDKlnUpdateFulfillHTLC = voidPtr;
var LDKlnUpdateFulfillHTLCPtr = exports.LDKlnUpdateFulfillHTLCPtr = ref.refType(LDKlnUpdateFulfillHTLC);
var LDKUpdateFulfillHTLC = exports.LDKUpdateFulfillHTLC = Struct({
  inner: LDKlnUpdateFulfillHTLC,
  _underlying_ref: ref.types.uint32,
});
var LDKUpdateFulfillHTLCPtr = exports.LDKUpdateFulfillHTLCPtr = ref.refType(LDKUpdateFulfillHTLC);
var LDKlnUpdateFailHTLC = exports.LDKlnUpdateFailHTLC = voidPtr;
var LDKlnUpdateFailHTLCPtr = exports.LDKlnUpdateFailHTLCPtr = ref.refType(LDKlnUpdateFailHTLC);
var LDKUpdateFailHTLC = exports.LDKUpdateFailHTLC = Struct({
  inner: LDKlnUpdateFailHTLC,
  _underlying_ref: ref.types.uint32,
});
var LDKUpdateFailHTLCPtr = exports.LDKUpdateFailHTLCPtr = ref.refType(LDKUpdateFailHTLC);
var LDKlnUpdateFailMalformedHTLC = exports.LDKlnUpdateFailMalformedHTLC = voidPtr;
var LDKlnUpdateFailMalformedHTLCPtr = exports.LDKlnUpdateFailMalformedHTLCPtr = ref.refType(LDKlnUpdateFailMalformedHTLC);
var LDKUpdateFailMalformedHTLC = exports.LDKUpdateFailMalformedHTLC = Struct({
  inner: LDKlnUpdateFailMalformedHTLC,
  _underlying_ref: ref.types.uint32,
});
var LDKUpdateFailMalformedHTLCPtr = exports.LDKUpdateFailMalformedHTLCPtr = ref.refType(LDKUpdateFailMalformedHTLC);
var LDKlnCommitmentSigned = exports.LDKlnCommitmentSigned = voidPtr;
var LDKlnCommitmentSignedPtr = exports.LDKlnCommitmentSignedPtr = ref.refType(LDKlnCommitmentSigned);
var LDKCommitmentSigned = exports.LDKCommitmentSigned = Struct({
  inner: LDKlnCommitmentSigned,
  _underlying_ref: ref.types.uint32,
});
var LDKCommitmentSignedPtr = exports.LDKCommitmentSignedPtr = ref.refType(LDKCommitmentSigned);
var LDKlnRevokeAndACK = exports.LDKlnRevokeAndACK = voidPtr;
var LDKlnRevokeAndACKPtr = exports.LDKlnRevokeAndACKPtr = ref.refType(LDKlnRevokeAndACK);
var LDKRevokeAndACK = exports.LDKRevokeAndACK = Struct({
  inner: LDKlnRevokeAndACK,
  _underlying_ref: ref.types.uint32,
});
var LDKRevokeAndACKPtr = exports.LDKRevokeAndACKPtr = ref.refType(LDKRevokeAndACK);
var LDKlnUpdateFee = exports.LDKlnUpdateFee = voidPtr;
var LDKlnUpdateFeePtr = exports.LDKlnUpdateFeePtr = ref.refType(LDKlnUpdateFee);
var LDKUpdateFee = exports.LDKUpdateFee = Struct({
  inner: LDKlnUpdateFee,
  _underlying_ref: ref.types.uint32,
});
var LDKUpdateFeePtr = exports.LDKUpdateFeePtr = ref.refType(LDKUpdateFee);
var LDKlnChannelReestablish = exports.LDKlnChannelReestablish = voidPtr;
var LDKlnChannelReestablishPtr = exports.LDKlnChannelReestablishPtr = ref.refType(LDKlnChannelReestablish);
var LDKChannelReestablish = exports.LDKChannelReestablish = Struct({
  inner: LDKlnChannelReestablish,
  _underlying_ref: ref.types.uint32,
});
var LDKChannelReestablishPtr = exports.LDKChannelReestablishPtr = ref.refType(LDKChannelReestablish);
var LDKlnAnnouncementSignatures = exports.LDKlnAnnouncementSignatures = voidPtr;
var LDKlnAnnouncementSignaturesPtr = exports.LDKlnAnnouncementSignaturesPtr = ref.refType(LDKlnAnnouncementSignatures);
var LDKAnnouncementSignatures = exports.LDKAnnouncementSignatures = Struct({
  inner: LDKlnAnnouncementSignatures,
  _underlying_ref: ref.types.uint32,
});
var LDKAnnouncementSignaturesPtr = exports.LDKAnnouncementSignaturesPtr = ref.refType(LDKAnnouncementSignatures);
var LDKlnUnsignedNodeAnnouncement = exports.LDKlnUnsignedNodeAnnouncement = voidPtr;
var LDKlnUnsignedNodeAnnouncementPtr = exports.LDKlnUnsignedNodeAnnouncementPtr = ref.refType(LDKlnUnsignedNodeAnnouncement);
var LDKUnsignedNodeAnnouncement = exports.LDKUnsignedNodeAnnouncement = Struct({
  inner: LDKlnUnsignedNodeAnnouncement,
  _underlying_ref: ref.types.uint32,
});
var LDKUnsignedNodeAnnouncementPtr = exports.LDKUnsignedNodeAnnouncementPtr = ref.refType(LDKUnsignedNodeAnnouncement);
var LDKlnNodeAnnouncement = exports.LDKlnNodeAnnouncement = voidPtr;
var LDKlnNodeAnnouncementPtr = exports.LDKlnNodeAnnouncementPtr = ref.refType(LDKlnNodeAnnouncement);
var LDKNodeAnnouncement = exports.LDKNodeAnnouncement = Struct({
  inner: LDKlnNodeAnnouncement,
  _underlying_ref: ref.types.uint32,
});
var LDKNodeAnnouncementPtr = exports.LDKNodeAnnouncementPtr = ref.refType(LDKNodeAnnouncement);
var LDKlnUnsignedChannelAnnouncement = exports.LDKlnUnsignedChannelAnnouncement = voidPtr;
var LDKlnUnsignedChannelAnnouncementPtr = exports.LDKlnUnsignedChannelAnnouncementPtr = ref.refType(LDKlnUnsignedChannelAnnouncement);
var LDKUnsignedChannelAnnouncement = exports.LDKUnsignedChannelAnnouncement = Struct({
  inner: LDKlnUnsignedChannelAnnouncement,
  _underlying_ref: ref.types.uint32,
});
var LDKUnsignedChannelAnnouncementPtr = exports.LDKUnsignedChannelAnnouncementPtr = ref.refType(LDKUnsignedChannelAnnouncement);
var LDKlnLightningError = exports.LDKlnLightningError = voidPtr;
var LDKlnLightningErrorPtr = exports.LDKlnLightningErrorPtr = ref.refType(LDKlnLightningError);
var LDKLightningError = exports.LDKLightningError = Struct({
  inner: LDKlnLightningError,
  _underlying_ref: ref.types.uint32,
});
var LDKLightningErrorPtr = exports.LDKLightningErrorPtr = ref.refType(LDKLightningError);
var LDKStr = exports.LDKStr = Struct({
  chars: uint8_tPtr,
  len: ref.types.ulong,
});
var LDKStrPtr = exports.LDKStrPtr = ref.refType(LDKStr);
var LDKErrorAction = exports.LDKErrorAction = voidPtr;
var LDKErrorActionPtr = exports.LDKErrorActionPtr = ref.refType(LDKErrorAction);
var LDKlnCommitmentUpdate = exports.LDKlnCommitmentUpdate = voidPtr;
var LDKlnCommitmentUpdatePtr = exports.LDKlnCommitmentUpdatePtr = ref.refType(LDKlnCommitmentUpdate);
var LDKCommitmentUpdate = exports.LDKCommitmentUpdate = Struct({
  inner: LDKlnCommitmentUpdate,
  _underlying_ref: ref.types.uint32,
});
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
var LDKlnMessageHandler = exports.LDKlnMessageHandler = voidPtr;
var LDKlnMessageHandlerPtr = exports.LDKlnMessageHandlerPtr = ref.refType(LDKlnMessageHandler);
var LDKMessageHandler = exports.LDKMessageHandler = Struct({
  inner: LDKlnMessageHandler,
  _underlying_ref: ref.types.uint32,
});
var LDKMessageHandlerPtr = exports.LDKMessageHandlerPtr = ref.refType(LDKMessageHandler);
var LDKRoutingMessageHandler = exports.LDKRoutingMessageHandler = Struct({
  this_arg: voidPtr,
  handle_node_announcement: voidPtr,
  handle_channel_announcement: voidPtr,
  handle_channel_update: voidPtr,
  handle_htlc_fail_channel_update: voidPtr,
  get_next_channel_announcements: voidPtr,
  get_next_node_announcements: voidPtr,
  should_request_full_sync: voidPtr,
});
var LDKRoutingMessageHandlerPtr = exports.LDKRoutingMessageHandlerPtr = ref.refType(LDKRoutingMessageHandler);
var LDKlnPeerManager = exports.LDKlnPeerManager = voidPtr;
var LDKlnPeerManagerPtr = exports.LDKlnPeerManagerPtr = ref.refType(LDKlnPeerManager);
var LDKPeerManager = exports.LDKPeerManager = Struct({
  inner: LDKlnPeerManager,
  _underlying_ref: ref.types.uint32,
});
var LDKPeerManagerPtr = exports.LDKPeerManagerPtr = ref.refType(LDKPeerManager);
var LDKCVecTempl_PublicKey = exports.LDKCVecTempl_PublicKey = Struct({
  data: LDKPublicKeyPtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_PublicKeyPtr = exports.LDKCVecTempl_PublicKeyPtr = ref.refType(LDKCVecTempl_PublicKey);
var LDKCResultPtr_CVecTempl_u8_____PeerHandleError = exports.LDKCResultPtr_CVecTempl_u8_____PeerHandleError = Struct({
  result: LDKCVecTempl_u8Ptr,
  err: LDKPeerHandleErrorPtr,
});
var LDKCResultPtr_CVecTempl_u8_____PeerHandleErrorPtr = exports.LDKCResultPtr_CVecTempl_u8_____PeerHandleErrorPtr = ref.refType(LDKCResultPtr_CVecTempl_u8_____PeerHandleError);
var LDKCResultTempl_CVecTempl_u8_____PeerHandleError = exports.LDKCResultTempl_CVecTempl_u8_____PeerHandleError = Struct({
  contents: LDKCResultPtr_CVecTempl_u8_____PeerHandleError,
  result_good: ref.types.uint32,
});
var LDKCResultTempl_CVecTempl_u8_____PeerHandleErrorPtr = exports.LDKCResultTempl_CVecTempl_u8_____PeerHandleErrorPtr = ref.refType(LDKCResultTempl_CVecTempl_u8_____PeerHandleError);
var LDKSocketDescriptor = exports.LDKSocketDescriptor = Struct({
  this_arg: voidPtr,
  send_data: voidPtr,
  disconnect_socket: voidPtr,
  eq: voidPtr,
  hash: voidPtr,
});
var LDKSocketDescriptorPtr = exports.LDKSocketDescriptorPtr = ref.refType(LDKSocketDescriptor);
var bool = exports.bool = voidPtr;
var boolPtr = exports.boolPtr = ref.refType(bool);
var LDKCResultPtr_bool__PeerHandleError = exports.LDKCResultPtr_bool__PeerHandleError = Struct({
  result: bool,
  err: LDKPeerHandleErrorPtr,
});
var LDKCResultPtr_bool__PeerHandleErrorPtr = exports.LDKCResultPtr_bool__PeerHandleErrorPtr = ref.refType(LDKCResultPtr_bool__PeerHandleError);
var LDKCResultTempl_bool__PeerHandleError = exports.LDKCResultTempl_bool__PeerHandleError = Struct({
  contents: LDKCResultPtr_bool__PeerHandleError,
  result_good: ref.types.uint32,
});
var LDKCResultTempl_bool__PeerHandleErrorPtr = exports.LDKCResultTempl_bool__PeerHandleErrorPtr = ref.refType(LDKCResultTempl_bool__PeerHandleError);
var LDKlnTxCreationKeys = exports.LDKlnTxCreationKeys = voidPtr;
var LDKlnTxCreationKeysPtr = exports.LDKlnTxCreationKeysPtr = ref.refType(LDKlnTxCreationKeys);
var LDKTxCreationKeys = exports.LDKTxCreationKeys = Struct({
  inner: LDKlnTxCreationKeys,
  _underlying_ref: ref.types.uint32,
});
var LDKTxCreationKeysPtr = exports.LDKTxCreationKeysPtr = ref.refType(LDKTxCreationKeys);
var LDKlnHTLCOutputInCommitment = exports.LDKlnHTLCOutputInCommitment = voidPtr;
var LDKlnHTLCOutputInCommitmentPtr = exports.LDKlnHTLCOutputInCommitmentPtr = ref.refType(LDKlnHTLCOutputInCommitment);
var LDKHTLCOutputInCommitment = exports.LDKHTLCOutputInCommitment = Struct({
  inner: LDKlnHTLCOutputInCommitment,
  _underlying_ref: ref.types.uint32,
});
var LDKHTLCOutputInCommitmentPtr = exports.LDKHTLCOutputInCommitmentPtr = ref.refType(LDKHTLCOutputInCommitment);
var LDKlnLocalCommitmentTransaction = exports.LDKlnLocalCommitmentTransaction = voidPtr;
var LDKlnLocalCommitmentTransactionPtr = exports.LDKlnLocalCommitmentTransactionPtr = ref.refType(LDKlnLocalCommitmentTransaction);
var LDKLocalCommitmentTransaction = exports.LDKLocalCommitmentTransaction = Struct({
  inner: LDKlnLocalCommitmentTransaction,
  _underlying_ref: ref.types.uint32,
});
var LDKLocalCommitmentTransactionPtr = exports.LDKLocalCommitmentTransactionPtr = ref.refType(LDKLocalCommitmentTransaction);
var LDKlnNodeFeatures = exports.LDKlnNodeFeatures = voidPtr;
var LDKlnNodeFeaturesPtr = exports.LDKlnNodeFeaturesPtr = ref.refType(LDKlnNodeFeatures);
var LDKNodeFeatures = exports.LDKNodeFeatures = Struct({
  inner: LDKlnNodeFeatures,
  _underlying_ref: ref.types.uint32,
});
var LDKNodeFeaturesPtr = exports.LDKNodeFeaturesPtr = ref.refType(LDKNodeFeatures);
var LDKlnChannelFeatures = exports.LDKlnChannelFeatures = voidPtr;
var LDKlnChannelFeaturesPtr = exports.LDKlnChannelFeaturesPtr = ref.refType(LDKlnChannelFeatures);
var LDKChannelFeatures = exports.LDKChannelFeatures = Struct({
  inner: LDKlnChannelFeatures,
  _underlying_ref: ref.types.uint32,
});
var LDKChannelFeaturesPtr = exports.LDKChannelFeaturesPtr = ref.refType(LDKChannelFeatures);
var LDKlnRouteHop = exports.LDKlnRouteHop = voidPtr;
var LDKlnRouteHopPtr = exports.LDKlnRouteHopPtr = ref.refType(LDKlnRouteHop);
var LDKRouteHop = exports.LDKRouteHop = Struct({
  inner: LDKlnRouteHop,
  _underlying_ref: ref.types.uint32,
});
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
var LDKlnRouteHint = exports.LDKlnRouteHint = voidPtr;
var LDKlnRouteHintPtr = exports.LDKlnRouteHintPtr = ref.refType(LDKlnRouteHint);
var LDKRouteHint = exports.LDKRouteHint = Struct({
  inner: LDKlnRouteHint,
  _underlying_ref: ref.types.uint32,
});
var LDKRouteHintPtr = exports.LDKRouteHintPtr = ref.refType(LDKRouteHint);
var LDKlnRoutingFees = exports.LDKlnRoutingFees = voidPtr;
var LDKlnRoutingFeesPtr = exports.LDKlnRoutingFeesPtr = ref.refType(LDKlnRoutingFees);
var LDKRoutingFees = exports.LDKRoutingFees = Struct({
  inner: LDKlnRoutingFees,
  _underlying_ref: ref.types.uint32,
});
var LDKRoutingFeesPtr = exports.LDKRoutingFeesPtr = ref.refType(LDKRoutingFees);
var LDKCResultPtr_Route__LightningError = exports.LDKCResultPtr_Route__LightningError = Struct({
  result: LDKRoutePtr,
  err: LDKLightningErrorPtr,
});
var LDKCResultPtr_Route__LightningErrorPtr = exports.LDKCResultPtr_Route__LightningErrorPtr = ref.refType(LDKCResultPtr_Route__LightningError);
var LDKCResultTempl_Route__LightningError = exports.LDKCResultTempl_Route__LightningError = Struct({
  contents: LDKCResultPtr_Route__LightningError,
  result_good: ref.types.uint32,
});
var LDKCResultTempl_Route__LightningErrorPtr = exports.LDKCResultTempl_Route__LightningErrorPtr = ref.refType(LDKCResultTempl_Route__LightningError);
var LDKlnNetworkGraph = exports.LDKlnNetworkGraph = voidPtr;
var LDKlnNetworkGraphPtr = exports.LDKlnNetworkGraphPtr = ref.refType(LDKlnNetworkGraph);
var LDKNetworkGraph = exports.LDKNetworkGraph = Struct({
  inner: LDKlnNetworkGraph,
  _underlying_ref: ref.types.uint32,
});
var LDKNetworkGraphPtr = exports.LDKNetworkGraphPtr = ref.refType(LDKNetworkGraph);
var LDKCSliceTempl_ChannelDetails = exports.LDKCSliceTempl_ChannelDetails = Struct({
  data: LDKChannelDetailsPtr,
  datalen: ref.types.ulong,
});
var LDKCSliceTempl_ChannelDetailsPtr = exports.LDKCSliceTempl_ChannelDetailsPtr = ref.refType(LDKCSliceTempl_ChannelDetails);
var LDKCChannelDetailsSlice = exports.LDKCChannelDetailsSlice = Struct({
  LDKCSliceTempl_ChannelDetails: LDKCSliceTempl_ChannelDetails,
});
var LDKCChannelDetailsSlicePtr = exports.LDKCChannelDetailsSlicePtr = ref.refType(LDKCChannelDetailsSlice);
var LDKCSliceTempl_RouteHint = exports.LDKCSliceTempl_RouteHint = Struct({
  data: LDKRouteHintPtr,
  datalen: ref.types.ulong,
});
var LDKCSliceTempl_RouteHintPtr = exports.LDKCSliceTempl_RouteHintPtr = ref.refType(LDKCSliceTempl_RouteHint);
var LDKlnNetGraphMsgHandler = exports.LDKlnNetGraphMsgHandler = voidPtr;
var LDKlnNetGraphMsgHandlerPtr = exports.LDKlnNetGraphMsgHandlerPtr = ref.refType(LDKlnNetGraphMsgHandler);
var LDKNetGraphMsgHandler = exports.LDKNetGraphMsgHandler = Struct({
  inner: LDKlnNetGraphMsgHandler,
  _underlying_ref: ref.types.uint32,
});
var LDKNetGraphMsgHandlerPtr = exports.LDKNetGraphMsgHandlerPtr = ref.refType(LDKNetGraphMsgHandler);
var LDKlnDirectionalChannelInfo = exports.LDKlnDirectionalChannelInfo = voidPtr;
var LDKlnDirectionalChannelInfoPtr = exports.LDKlnDirectionalChannelInfoPtr = ref.refType(LDKlnDirectionalChannelInfo);
var LDKDirectionalChannelInfo = exports.LDKDirectionalChannelInfo = Struct({
  inner: LDKlnDirectionalChannelInfo,
  _underlying_ref: ref.types.uint32,
});
var LDKDirectionalChannelInfoPtr = exports.LDKDirectionalChannelInfoPtr = ref.refType(LDKDirectionalChannelInfo);
var LDKlnChannelInfo = exports.LDKlnChannelInfo = voidPtr;
var LDKlnChannelInfoPtr = exports.LDKlnChannelInfoPtr = ref.refType(LDKlnChannelInfo);
var LDKChannelInfo = exports.LDKChannelInfo = Struct({
  inner: LDKlnChannelInfo,
  _underlying_ref: ref.types.uint32,
});
var LDKChannelInfoPtr = exports.LDKChannelInfoPtr = ref.refType(LDKChannelInfo);
var LDKlnNodeAnnouncementInfo = exports.LDKlnNodeAnnouncementInfo = voidPtr;
var LDKlnNodeAnnouncementInfoPtr = exports.LDKlnNodeAnnouncementInfoPtr = ref.refType(LDKlnNodeAnnouncementInfo);
var LDKNodeAnnouncementInfo = exports.LDKNodeAnnouncementInfo = Struct({
  inner: LDKlnNodeAnnouncementInfo,
  _underlying_ref: ref.types.uint32,
});
var LDKNodeAnnouncementInfoPtr = exports.LDKNodeAnnouncementInfoPtr = ref.refType(LDKNodeAnnouncementInfo);
var LDKlnNodeInfo = exports.LDKlnNodeInfo = voidPtr;
var LDKlnNodeInfoPtr = exports.LDKlnNodeInfoPtr = ref.refType(LDKlnNodeInfo);
var LDKNodeInfo = exports.LDKNodeInfo = Struct({
  inner: LDKlnNodeInfo,
  _underlying_ref: ref.types.uint32,
});
var LDKNodeInfoPtr = exports.LDKNodeInfoPtr = ref.refType(LDKNodeInfo);
var LDKCVecTempl_u64 = exports.LDKCVecTempl_u64 = Struct({
  data: uint64_tPtr,
  datalen: ref.types.ulong,
});
var LDKCVecTempl_u64Ptr = exports.LDKCVecTempl_u64Ptr = ref.refType(LDKCVecTempl_u64);

exports.liblightning = new FFI.Library(__dirname+'/../../lib/liblightning', {
  C2Tuple_Txidu32Z_new: [LDKC2TupleTempl_ThirtyTwoBytes__u32, [
    LDKThirtyTwoBytes,
    ref.types.uint32,
  ]],
  C2Tuple_Scriptu64Z_new: [LDKC2TupleTempl_CVec_u8Z__u64, [
    LDKCVecTempl_u8,
    ref.types.ulonglong,
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
  C2Tuple_SecretKey_u832Z_new: [LDKC2TupleTempl_SecretKey__ThirtyTwoBytes, [
    LDKSecretKey,
    LDKThirtyTwoBytes,
  ]],
  CResult_NoneAPIErrorZ_good: [LDKCResultTempl_u8__APIError, [
  ]],
  CResult_NonePaymentSendFailureZ_good: [LDKCResultTempl_u8__PaymentSendFailure, [
  ]],
  CResult_NoneChannelMonitorUpdateErrZ_good: [LDKCResultTempl_u8__ChannelMonitorUpdateErr, [
  ]],
  CResult_NoneMonitorUpdateErrorZ_good: [LDKCResultTempl_u8__MonitorUpdateError, [
  ]],
  C2Tuple_OutPointScriptZ_new: [LDKC2TupleTempl_OutPoint__CVec_u8Z, [
    LDKOutPoint,
    LDKCVecTempl_u8,
  ]],
  C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZ_new: [LDKC3TupleTempl_ChannelAnnouncement__ChannelUpdate__ChannelUpdate, [
    LDKChannelAnnouncement,
    LDKChannelUpdate,
    LDKChannelUpdate,
  ]],
  CResult_NonePeerHandleErrorZ_good: [LDKCResultTempl_u8__PeerHandleError, [
  ]],
  APIError_free: [ref.types.void, [
    LDKAPIError,
  ]],
  Level_max: [ref.types.uint32, [
  ]],
  ChannelHandshakeConfig_free: [ref.types.void, [
    LDKChannelHandshakeConfig,
  ]],
  ChannelHandshakeConfig_get_minimum_depth: [ref.types.uint32, [
    LDKChannelHandshakeConfigPtr,
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
  ChannelHandshakeLimits_free: [ref.types.void, [
    LDKChannelHandshakeLimits,
  ]],
  ChannelHandshakeLimits_get_min_funding_satoshis: [ref.types.ulonglong, [
    LDKChannelHandshakeLimitsPtr,
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
  ChannelHandshakeLimits_get_force_announced_channel_preference: [ref.types.uint32, [
    LDKChannelHandshakeLimitsPtr,
  ]],
  ChannelHandshakeLimits_set_force_announced_channel_preference: [ref.types.void, [
    LDKChannelHandshakeLimitsPtr,
    ref.types.uint32,
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
    ref.types.uint32,
    ref.types.ushort,
  ]],
  ChannelHandshakeLimits_default: [LDKChannelHandshakeLimits, [
  ]],
  ChannelConfig_free: [ref.types.void, [
    LDKChannelConfig,
  ]],
  ChannelConfig_get_fee_proportional_millionths: [ref.types.uint32, [
    LDKChannelConfigPtr,
  ]],
  ChannelConfig_set_fee_proportional_millionths: [ref.types.void, [
    LDKChannelConfigPtr,
    ref.types.uint32,
  ]],
  ChannelConfig_get_announced_channel: [ref.types.uint32, [
    LDKChannelConfigPtr,
  ]],
  ChannelConfig_set_announced_channel: [ref.types.void, [
    LDKChannelConfigPtr,
    ref.types.uint32,
  ]],
  ChannelConfig_get_commit_upfront_shutdown_pubkey: [ref.types.uint32, [
    LDKChannelConfigPtr,
  ]],
  ChannelConfig_set_commit_upfront_shutdown_pubkey: [ref.types.void, [
    LDKChannelConfigPtr,
    ref.types.uint32,
  ]],
  ChannelConfig_new: [LDKChannelConfig, [
    ref.types.uint32,
    ref.types.uint32,
    ref.types.uint32,
  ]],
  ChannelConfig_default: [LDKChannelConfig, [
  ]],
  ChannelConfig_write: [LDKCVecTempl_u8, [
    LDKChannelConfigPtr,
  ]],
  ChannelConfig_read: [LDKChannelConfig, [
    LDKu8slice,
  ]],
  UserConfig_free: [ref.types.void, [
    LDKUserConfig,
  ]],
  UserConfig_get_own_channel_config: [LDKChannelHandshakeConfigPtr, [
    LDKUserConfigPtr,
  ]],
  UserConfig_set_own_channel_config: [ref.types.void, [
    LDKUserConfigPtr,
    LDKChannelHandshakeConfig,
  ]],
  UserConfig_get_peer_channel_config_limits: [LDKChannelHandshakeLimitsPtr, [
    LDKUserConfigPtr,
  ]],
  UserConfig_set_peer_channel_config_limits: [ref.types.void, [
    LDKUserConfigPtr,
    LDKChannelHandshakeLimits,
  ]],
  UserConfig_get_channel_options: [LDKChannelConfigPtr, [
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
  ChainWatchedUtil_free: [ref.types.void, [
    LDKChainWatchedUtil,
  ]],
  ChainWatchedUtil_new: [LDKChainWatchedUtil, [
  ]],
  ChainWatchedUtil_register_tx: [ref.types.uint32, [
    LDKChainWatchedUtilPtr,
    voidPtr,
    LDKu8slice,
  ]],
  ChainWatchedUtil_register_outpoint: [ref.types.uint32, [
    LDKChainWatchedUtilPtr,
    LDKC2TupleTempl_ThirtyTwoBytes__u32,
    LDKu8slice,
  ]],
  ChainWatchedUtil_watch_all: [ref.types.uint32, [
    LDKChainWatchedUtilPtr,
  ]],
  ChainWatchedUtil_does_match_tx: [ref.types.uint32, [
    LDKChainWatchedUtilPtr,
    LDKTransaction,
  ]],
  BlockNotifier_free: [ref.types.void, [
    LDKBlockNotifier,
  ]],
  BlockNotifier_new: [LDKBlockNotifier, [
    LDKChainWatchInterface,
  ]],
  BlockNotifier_register_listener: [ref.types.void, [
    LDKBlockNotifierPtr,
    LDKChainListener,
  ]],
  BlockNotifier_block_connected: [ref.types.void, [
    LDKBlockNotifierPtr,
    LDKu8slice,
    ref.types.uint32,
  ]],
  BlockNotifier_block_connected_checked: [ref.types.uint32, [
    LDKBlockNotifierPtr,
    voidPtr,
    ref.types.uint32,
    LDKCSliceTempl_CVec_u8Z,
    LDKu32slice,
  ]],
  BlockNotifier_block_disconnected: [ref.types.void, [
    LDKBlockNotifierPtr,
    voidPtr,
    ref.types.uint32,
  ]],
  ChainWatchInterfaceUtil_free: [ref.types.void, [
    LDKChainWatchInterfaceUtil,
  ]],
  ChainWatchInterfaceUtil_as_ChainWatchInterface: [LDKChainWatchInterface, [
    LDKChainWatchInterfaceUtilPtr,
  ]],
  ChainWatchInterfaceUtil_new: [LDKChainWatchInterfaceUtil, [
    ref.types.uint32,
  ]],
  ChainWatchInterfaceUtil_does_match_tx: [ref.types.uint32, [
    LDKChainWatchInterfaceUtilPtr,
    LDKTransaction,
  ]],
  OutPoint_free: [ref.types.void, [
    LDKOutPoint,
  ]],
  OutPoint_get_txid: [voidPtr, [
    LDKOutPointPtr,
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
  SpendableOutputDescriptor_free: [ref.types.void, [
    LDKSpendableOutputDescriptor,
  ]],
  SpendableOutputDescriptor_write: [LDKCVecTempl_u8, [
    LDKSpendableOutputDescriptorPtr,
  ]],
  SpendableOutputDescriptor_read: [LDKSpendableOutputDescriptor, [
    LDKu8slice,
  ]],
  InMemoryChannelKeys_free: [ref.types.void, [
    LDKInMemoryChannelKeys,
  ]],
  InMemoryChannelKeys_get_funding_key: [voidPtr, [
    LDKInMemoryChannelKeysPtr,
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
  InMemoryChannelKeys_as_ChannelKeys: [LDKChannelKeys, [
    LDKInMemoryChannelKeysPtr,
  ]],
  InMemoryChannelKeys_write: [LDKCVecTempl_u8, [
    LDKInMemoryChannelKeysPtr,
  ]],
  InMemoryChannelKeys_read: [LDKInMemoryChannelKeys, [
    LDKu8slice,
  ]],
  KeysManager_free: [ref.types.void, [
    LDKKeysManager,
  ]],
  KeysManager_new: [LDKKeysManager, [
    voidPtr,
    ref.types.uint32,
    ref.types.ulonglong,
    ref.types.uint32,
  ]],
  KeysManager_derive_channel_keys: [LDKInMemoryChannelKeys, [
    LDKKeysManagerPtr,
    ref.types.ulonglong,
    ref.types.ulonglong,
    ref.types.ulonglong,
  ]],
  KeysManager_as_KeysInterface: [LDKKeysInterface, [
    LDKKeysManagerPtr,
  ]],
  ChannelManager_free: [ref.types.void, [
    LDKChannelManager,
  ]],
  ChannelDetails_free: [ref.types.void, [
    LDKChannelDetails,
  ]],
  ChannelDetails_get_channel_id: [voidPtr, [
    LDKChannelDetailsPtr,
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
  ChannelDetails_get_counterparty_features: [LDKInitFeaturesPtr, [
    LDKChannelDetailsPtr,
  ]],
  ChannelDetails_set_counterparty_features: [ref.types.void, [
    LDKChannelDetailsPtr,
    LDKInitFeatures,
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
  ChannelDetails_get_is_live: [ref.types.uint32, [
    LDKChannelDetailsPtr,
  ]],
  ChannelDetails_set_is_live: [ref.types.void, [
    LDKChannelDetailsPtr,
    ref.types.uint32,
  ]],
  PaymentSendFailure_free: [ref.types.void, [
    LDKPaymentSendFailure,
  ]],
  ChannelManager_new: [LDKChannelManager, [
    ref.types.uint32,
    LDKFeeEstimator,
    LDKManyChannelMonitor,
    LDKBroadcasterInterface,
    LDKLogger,
    LDKKeysInterface,
    LDKUserConfig,
    ref.types.ulong,
  ]],
  ChannelManager_create_channel: [LDKCResultTempl_u8__APIError, [
    LDKChannelManagerPtr,
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
    LDKRoutePtr,
    LDKThirtyTwoBytes,
    LDKThirtyTwoBytesPtr,
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
  ChannelManager_fail_htlc_backwards: [ref.types.uint32, [
    LDKChannelManagerPtr,
    voidPtr,
    LDKThirtyTwoBytesPtr,
  ]],
  ChannelManager_claim_funds: [ref.types.uint32, [
    LDKChannelManagerPtr,
    LDKThirtyTwoBytes,
    LDKThirtyTwoBytesPtr,
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
  ChannelManager_as_ChainListener: [LDKChainListener, [
    LDKChannelManagerPtr,
  ]],
  ChannelManager_as_ChannelMessageHandler: [LDKChannelMessageHandler, [
    LDKChannelManagerPtr,
  ]],
  ChannelMonitorUpdate_free: [ref.types.void, [
    LDKChannelMonitorUpdate,
  ]],
  ChannelMonitorUpdate_get_update_id: [ref.types.ulonglong, [
    LDKChannelMonitorUpdatePtr,
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
  HTLCUpdate_free: [ref.types.void, [
    LDKHTLCUpdate,
  ]],
  HTLCUpdate_write: [LDKCVecTempl_u8, [
    LDKHTLCUpdatePtr,
  ]],
  HTLCUpdate_read: [LDKHTLCUpdate, [
    LDKu8slice,
  ]],
  ChannelMonitor_free: [ref.types.void, [
    LDKChannelMonitor,
  ]],
  ChannelMonitor_update_monitor: [LDKCResultTempl_u8__MonitorUpdateError, [
    LDKChannelMonitorPtr,
    LDKChannelMonitorUpdate,
    LDKBroadcasterInterfacePtr,
    LDKLoggerPtr,
  ]],
  ChannelMonitor_get_latest_update_id: [ref.types.ulonglong, [
    LDKChannelMonitorPtr,
  ]],
  ChannelMonitor_get_funding_txo: [LDKC2TupleTempl_OutPoint__CVec_u8Z, [
    LDKChannelMonitorPtr,
  ]],
  ChannelMonitor_get_and_clear_pending_htlcs_updated: [LDKCVecTempl_HTLCUpdate, [
    LDKChannelMonitorPtr,
  ]],
  ChannelMonitor_get_and_clear_pending_events: [LDKCVecTempl_Event, [
    LDKChannelMonitorPtr,
  ]],
  ChannelMonitor_get_latest_local_commitment_txn: [LDKCVecTempl_CVec_u8Z, [
    LDKChannelMonitorPtr,
    LDKLoggerPtr,
  ]],
  DecodeError_free: [ref.types.void, [
    LDKDecodeError,
  ]],
  Init_free: [ref.types.void, [
    LDKInit,
  ]],
  ErrorMessage_free: [ref.types.void, [
    LDKErrorMessage,
  ]],
  Ping_free: [ref.types.void, [
    LDKPing,
  ]],
  Pong_free: [ref.types.void, [
    LDKPong,
  ]],
  OpenChannel_free: [ref.types.void, [
    LDKOpenChannel,
  ]],
  AcceptChannel_free: [ref.types.void, [
    LDKAcceptChannel,
  ]],
  FundingCreated_free: [ref.types.void, [
    LDKFundingCreated,
  ]],
  FundingSigned_free: [ref.types.void, [
    LDKFundingSigned,
  ]],
  FundingLocked_free: [ref.types.void, [
    LDKFundingLocked,
  ]],
  FundingLocked_get_channel_id: [voidPtr, [
    LDKFundingLockedPtr,
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
  Shutdown_free: [ref.types.void, [
    LDKShutdown,
  ]],
  ClosingSigned_free: [ref.types.void, [
    LDKClosingSigned,
  ]],
  UpdateAddHTLC_free: [ref.types.void, [
    LDKUpdateAddHTLC,
  ]],
  UpdateFulfillHTLC_free: [ref.types.void, [
    LDKUpdateFulfillHTLC,
  ]],
  UpdateFailHTLC_free: [ref.types.void, [
    LDKUpdateFailHTLC,
  ]],
  UpdateFailMalformedHTLC_free: [ref.types.void, [
    LDKUpdateFailMalformedHTLC,
  ]],
  CommitmentSigned_free: [ref.types.void, [
    LDKCommitmentSigned,
  ]],
  RevokeAndACK_free: [ref.types.void, [
    LDKRevokeAndACK,
  ]],
  UpdateFee_free: [ref.types.void, [
    LDKUpdateFee,
  ]],
  ChannelReestablish_free: [ref.types.void, [
    LDKChannelReestablish,
  ]],
  AnnouncementSignatures_free: [ref.types.void, [
    LDKAnnouncementSignatures,
  ]],
  NetAddress_free: [ref.types.void, [
    LDKNetAddress,
  ]],
  UnsignedNodeAnnouncement_free: [ref.types.void, [
    LDKUnsignedNodeAnnouncement,
  ]],
  UnsignedNodeAnnouncement_get_node_id: [LDKPublicKey, [
    LDKUnsignedNodeAnnouncementPtr,
  ]],
  UnsignedNodeAnnouncement_set_node_id: [ref.types.void, [
    LDKUnsignedNodeAnnouncementPtr,
    LDKPublicKey,
  ]],
  NodeAnnouncement_free: [ref.types.void, [
    LDKNodeAnnouncement,
  ]],
  UnsignedChannelAnnouncement_free: [ref.types.void, [
    LDKUnsignedChannelAnnouncement,
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
  ChannelAnnouncement_free: [ref.types.void, [
    LDKChannelAnnouncement,
  ]],
  ChannelUpdate_free: [ref.types.void, [
    LDKChannelUpdate,
  ]],
  LightningError_free: [ref.types.void, [
    LDKLightningError,
  ]],
  LightningError_get_err: [LDKStr, [
    LDKLightningErrorPtr,
  ]],
  LightningError_set_err: [ref.types.void, [
    LDKLightningErrorPtr,
    LDKStr,
  ]],
  LightningError_get_action: [LDKErrorAction, [
    LDKLightningErrorPtr,
  ]],
  LightningError_set_action: [ref.types.void, [
    LDKLightningErrorPtr,
    LDKErrorAction,
  ]],
  LightningError_new: [LDKLightningError, [
    LDKStr,
    LDKErrorAction,
  ]],
  CommitmentUpdate_free: [ref.types.void, [
    LDKCommitmentUpdate,
  ]],
  CommitmentUpdate_set_update_add_htlcs: [ref.types.void, [
    LDKCommitmentUpdatePtr,
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
  CommitmentUpdate_get_update_fee: [LDKUpdateFeePtr, [
    LDKCommitmentUpdatePtr,
  ]],
  CommitmentUpdate_set_update_fee: [ref.types.void, [
    LDKCommitmentUpdatePtr,
    LDKUpdateFee,
  ]],
  CommitmentUpdate_get_commitment_signed: [LDKCommitmentSignedPtr, [
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
    LDKInitPtr,
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
  MessageHandler_free: [ref.types.void, [
    LDKMessageHandler,
  ]],
  MessageHandler_get_chan_handler: [LDKChannelMessageHandlerPtr, [
    LDKMessageHandlerPtr,
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
  PeerHandleError_free: [ref.types.void, [
    LDKPeerHandleError,
  ]],
  PeerHandleError_get_no_connection_possible: [ref.types.uint32, [
    LDKPeerHandleErrorPtr,
  ]],
  PeerHandleError_set_no_connection_possible: [ref.types.void, [
    LDKPeerHandleErrorPtr,
    ref.types.uint32,
  ]],
  PeerHandleError_new: [LDKPeerHandleError, [
    ref.types.uint32,
  ]],
  PeerManager_free: [ref.types.void, [
    LDKPeerManager,
  ]],
  PeerManager_new: [LDKPeerManager, [
    LDKMessageHandler,
    LDKSecretKey,
    voidPtr,
    LDKLogger,
  ]],
  PeerManager_get_peer_node_ids: [LDKCVecTempl_PublicKey, [
    LDKPeerManagerPtr,
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
  TxCreationKeys_free: [ref.types.void, [
    LDKTxCreationKeys,
  ]],
  TxCreationKeys_get_per_commitment_point: [LDKPublicKey, [
    LDKTxCreationKeysPtr,
  ]],
  TxCreationKeys_set_per_commitment_point: [ref.types.void, [
    LDKTxCreationKeysPtr,
    LDKPublicKey,
  ]],
  TxCreationKeys_write: [LDKCVecTempl_u8, [
    LDKTxCreationKeysPtr,
  ]],
  TxCreationKeys_read: [LDKTxCreationKeys, [
    LDKu8slice,
  ]],
  ChannelPublicKeys_free: [ref.types.void, [
    LDKChannelPublicKeys,
  ]],
  ChannelPublicKeys_get_funding_pubkey: [LDKPublicKey, [
    LDKChannelPublicKeysPtr,
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
  get_revokeable_redeemscript: [LDKCVecTempl_u8, [
    LDKPublicKey,
    ref.types.ushort,
    LDKPublicKey,
  ]],
  HTLCOutputInCommitment_free: [ref.types.void, [
    LDKHTLCOutputInCommitment,
  ]],
  HTLCOutputInCommitment_get_offered: [ref.types.uint32, [
    LDKHTLCOutputInCommitmentPtr,
  ]],
  HTLCOutputInCommitment_set_offered: [ref.types.void, [
    LDKHTLCOutputInCommitmentPtr,
    ref.types.uint32,
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
  build_htlc_transaction: [LDKCVecTempl_u8, [
    voidPtr,
    ref.types.ulonglong,
    ref.types.ushort,
    LDKHTLCOutputInCommitmentPtr,
    LDKPublicKey,
    LDKPublicKey,
  ]],
  LocalCommitmentTransaction_free: [ref.types.void, [
    LDKLocalCommitmentTransaction,
  ]],
  LocalCommitmentTransaction_get_unsigned_tx: [LDKCVecTempl_u8, [
    LDKLocalCommitmentTransactionPtr,
  ]],
  LocalCommitmentTransaction_set_unsigned_tx: [ref.types.void, [
    LDKLocalCommitmentTransactionPtr,
    LDKCVecTempl_u8,
  ]],
  LocalCommitmentTransaction_get_their_sig: [LDKSignature, [
    LDKLocalCommitmentTransactionPtr,
  ]],
  LocalCommitmentTransaction_set_their_sig: [ref.types.void, [
    LDKLocalCommitmentTransactionPtr,
    LDKSignature,
  ]],
  LocalCommitmentTransaction_get_local_keys: [LDKTxCreationKeysPtr, [
    LDKLocalCommitmentTransactionPtr,
  ]],
  LocalCommitmentTransaction_set_local_keys: [ref.types.void, [
    LDKLocalCommitmentTransactionPtr,
    LDKTxCreationKeys,
  ]],
  LocalCommitmentTransaction_get_feerate_per_kw: [ref.types.ulonglong, [
    LDKLocalCommitmentTransactionPtr,
  ]],
  LocalCommitmentTransaction_set_feerate_per_kw: [ref.types.void, [
    LDKLocalCommitmentTransactionPtr,
    ref.types.ulonglong,
  ]],
  LocalCommitmentTransaction_txid: [LDKThirtyTwoBytes, [
    LDKLocalCommitmentTransactionPtr,
  ]],
  LocalCommitmentTransaction_get_local_sig: [LDKSignature, [
    LDKLocalCommitmentTransactionPtr,
    voidPtr,
    LDKu8slice,
    ref.types.ulonglong,
  ]],
  LocalCommitmentTransaction_write: [LDKCVecTempl_u8, [
    LDKLocalCommitmentTransactionPtr,
  ]],
  LocalCommitmentTransaction_read: [LDKLocalCommitmentTransaction, [
    LDKu8slice,
  ]],
  InitFeatures_free: [ref.types.void, [
    LDKInitFeatures,
  ]],
  NodeFeatures_free: [ref.types.void, [
    LDKNodeFeatures,
  ]],
  ChannelFeatures_free: [ref.types.void, [
    LDKChannelFeatures,
  ]],
  RouteHop_free: [ref.types.void, [
    LDKRouteHop,
  ]],
  RouteHop_get_pubkey: [LDKPublicKey, [
    LDKRouteHopPtr,
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
  RouteHint_free: [ref.types.void, [
    LDKRouteHint,
  ]],
  RouteHint_get_src_node_id: [LDKPublicKey, [
    LDKRouteHintPtr,
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
  RouteHint_get_fees: [LDKRoutingFeesPtr, [
    LDKRouteHintPtr,
  ]],
  RouteHint_set_fees: [ref.types.void, [
    LDKRouteHintPtr,
    LDKRoutingFees,
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
  RouteHint_new: [LDKRouteHint, [
    LDKPublicKey,
    ref.types.ulonglong,
    LDKRoutingFees,
    ref.types.ushort,
    ref.types.ulonglong,
  ]],
  get_route: [LDKCResultTempl_Route__LightningError, [
    LDKPublicKey,
    LDKNetworkGraphPtr,
    LDKPublicKey,
    LDKCChannelDetailsSlicePtr,
    LDKCSliceTempl_RouteHint,
    ref.types.ulonglong,
    ref.types.uint32,
    LDKLogger,
  ]],
  NetworkGraph_free: [ref.types.void, [
    LDKNetworkGraph,
  ]],
  NetGraphMsgHandler_free: [ref.types.void, [
    LDKNetGraphMsgHandler,
  ]],
  NetGraphMsgHandler_new: [LDKNetGraphMsgHandler, [
    LDKChainWatchInterface,
    LDKLogger,
  ]],
  NetGraphMsgHandler_from_net_graph: [LDKNetGraphMsgHandler, [
    LDKChainWatchInterface,
    LDKLogger,
    LDKNetworkGraph,
  ]],
  NetGraphMsgHandler_as_RoutingMessageHandler: [LDKRoutingMessageHandler, [
    LDKNetGraphMsgHandlerPtr,
  ]],
  DirectionalChannelInfo_free: [ref.types.void, [
    LDKDirectionalChannelInfo,
  ]],
  DirectionalChannelInfo_get_last_update: [ref.types.uint32, [
    LDKDirectionalChannelInfoPtr,
  ]],
  DirectionalChannelInfo_set_last_update: [ref.types.void, [
    LDKDirectionalChannelInfoPtr,
    ref.types.uint32,
  ]],
  DirectionalChannelInfo_get_enabled: [ref.types.uint32, [
    LDKDirectionalChannelInfoPtr,
  ]],
  DirectionalChannelInfo_set_enabled: [ref.types.void, [
    LDKDirectionalChannelInfoPtr,
    ref.types.uint32,
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
  DirectionalChannelInfo_write: [LDKCVecTempl_u8, [
    LDKDirectionalChannelInfoPtr,
  ]],
  DirectionalChannelInfo_read: [LDKDirectionalChannelInfo, [
    LDKu8slice,
  ]],
  ChannelInfo_free: [ref.types.void, [
    LDKChannelInfo,
  ]],
  ChannelInfo_get_node_one: [LDKPublicKey, [
    LDKChannelInfoPtr,
  ]],
  ChannelInfo_set_node_one: [ref.types.void, [
    LDKChannelInfoPtr,
    LDKPublicKey,
  ]],
  ChannelInfo_get_one_to_two: [LDKDirectionalChannelInfoPtr, [
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
  ChannelInfo_get_two_to_one: [LDKDirectionalChannelInfoPtr, [
    LDKChannelInfoPtr,
  ]],
  ChannelInfo_set_two_to_one: [ref.types.void, [
    LDKChannelInfoPtr,
    LDKDirectionalChannelInfo,
  ]],
  ChannelInfo_write: [LDKCVecTempl_u8, [
    LDKChannelInfoPtr,
  ]],
  ChannelInfo_read: [LDKChannelInfo, [
    LDKu8slice,
  ]],
  RoutingFees_free: [ref.types.void, [
    LDKRoutingFees,
  ]],
  RoutingFees_get_base_msat: [ref.types.uint32, [
    LDKRoutingFeesPtr,
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
  NodeAnnouncementInfo_free: [ref.types.void, [
    LDKNodeAnnouncementInfo,
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
  NodeAnnouncementInfo_write: [LDKCVecTempl_u8, [
    LDKNodeAnnouncementInfoPtr,
  ]],
  NodeAnnouncementInfo_read: [LDKNodeAnnouncementInfo, [
    LDKu8slice,
  ]],
  NodeInfo_free: [ref.types.void, [
    LDKNodeInfo,
  ]],
  NodeInfo_set_channels: [ref.types.void, [
    LDKNodeInfoPtr,
    LDKCVecTempl_u64,
  ]],
  NodeInfo_get_lowest_inbound_channel_fees: [LDKRoutingFeesPtr, [
    LDKNodeInfoPtr,
  ]],
  NodeInfo_set_lowest_inbound_channel_fees: [ref.types.void, [
    LDKNodeInfoPtr,
    LDKRoutingFees,
  ]],
  NodeInfo_get_announcement_info: [LDKNodeAnnouncementInfoPtr, [
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
    ref.types.uint32,
  ]],
});

