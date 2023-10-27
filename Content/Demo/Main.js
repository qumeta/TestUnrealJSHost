/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!*************************************************************!*\
  !*** ./node_modules/@qumeta/fast-text-encoding/text.min.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

(function(scope) {'use strict';
function F(e,r){var f;return e instanceof Buffer?f=e:f=Buffer.from(e.buffer,e.byteOffset,e.byteLength),f.toString(r)}var B=function(e){return Buffer.from(e)};function v(e){for(var r=0,f=Math.min(256*256,e.length+1),n=new Uint16Array(f),i=[],o=0;;){var t=r<e.length;if(!t||o>=f-1){var p=n.subarray(0,o),s=p;if(i.push(String.fromCharCode.apply(null,s)),!t)return i.join("");e=e.subarray(r),r=0,o=0}var a=e[r++];if((a&128)===0)n[o++]=a;else if((a&224)===192){var d=e[r++]&63;n[o++]=(a&31)<<6|d}else if((a&240)===224){var d=e[r++]&63,h=e[r++]&63;n[o++]=(a&31)<<12|d<<6|h}else if((a&248)===240){var d=e[r++]&63,h=e[r++]&63,y=e[r++]&63,c=(a&7)<<18|d<<12|h<<6|y;c>65535&&(c-=65536,n[o++]=c>>>10&1023|55296,c=56320|c&1023),n[o++]=c}}}function w(e){for(var r=0,f=e.length,n=0,i=Math.max(32,f+(f>>>1)+7),o=new Uint8Array(i>>>3<<3);r<f;){var t=e.charCodeAt(r++);if(t>=55296&&t<=56319){if(r<f){var p=e.charCodeAt(r);(p&64512)===56320&&(++r,t=((t&1023)<<10)+(p&1023)+65536)}if(t>=55296&&t<=56319)continue}if(n+4>o.length){i+=8,i*=1+r/e.length*2,i=i>>>3<<3;var s=new Uint8Array(i);s.set(o),o=s}if((t&4294967168)===0){o[n++]=t;continue}else if((t&4294965248)===0)o[n++]=t>>>6&31|192;else if((t&4294901760)===0)o[n++]=t>>>12&15|224,o[n++]=t>>>6&63|128;else if((t&4292870144)===0)o[n++]=t>>>18&7|240,o[n++]=t>>>12&63|128,o[n++]=t>>>6&63|128;else continue;o[n++]=t&63|128}return o.slice?o.slice(0,n):o.subarray(0,n)}var T="Failed to ",m=function(e,r,f){if(e)throw new Error("".concat(T).concat(r,": the '").concat(f,"' option is unsupported."))};var x=typeof Buffer=="function"&&Buffer.from;var R=x?B:w;function l(){this.encoding="utf-8"}l.prototype.encode=function(e,r){return m(r&&r.stream,"encode","stream"),R(e)};function U(e){var r;try{var f=new Blob([e],{type:"text/plain;charset=UTF-8"});r=URL.createObjectURL(f);var n=new XMLHttpRequest;return n.open("GET",r,!1),n.send(),n.responseText}finally{r&&URL.revokeObjectURL(r)}}var A=!x&&typeof Blob=="function"&&typeof URL=="function"&&typeof URL.createObjectURL=="function",E=["utf-8","utf8","unicode-1-1-utf-8"],g=v;x?g=F:A&&(g=function(e){try{return U(e)}catch(r){return v(e)}});var O="construct 'TextDecoder'",S="".concat(T," ").concat(O,": the ");function u(e,r){e=e||"utf-8";var f;if(x?f=Buffer.isEncoding(e):f=E.indexOf(e.toLowerCase())!==-1,!f)throw new RangeError("".concat(S," encoding label provided ('").concat(e,"') is invalid."));this.encoding=e,this.fatal=!1,this.ignoreBOM=!1}u.prototype.decode=function(e,r){if(m(r&&r.stream,"decode","stream"),e==null)return"";var f;return e instanceof Uint8Array?f=e:e.buffer instanceof ArrayBuffer?f=new Uint8Array(e.buffer):f=new Uint8Array(e),g(f,this.encoding)};scope.TextEncoder=scope.TextEncoder||l;scope.TextDecoder=scope.TextDecoder||u;scope.FastTextEncoder=l;scope.FastTextDecoder=u;
}(typeof window !== 'undefined' ? window : (typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : this)));


/***/ }),
/* 2 */
/*!**************************************************************!*\
  !*** ./node_modules/viem/_esm/clients/createPublicClient.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPublicClient: () => (/* binding */ createPublicClient)
/* harmony export */ });
/* harmony import */ var _createClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createClient.js */ 3);
/* harmony import */ var _decorators_public_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators/public.js */ 6);


function createPublicClient(parameters) {
    const { key = 'public', name = 'Public Client' } = parameters;
    const client = (0,_createClient_js__WEBPACK_IMPORTED_MODULE_0__.createClient)({
        ...parameters,
        key,
        name,
        type: 'publicClient',
    });
    return client.extend(_decorators_public_js__WEBPACK_IMPORTED_MODULE_1__.publicActions);
}
//# sourceMappingURL=createPublicClient.js.map

/***/ }),
/* 3 */
/*!********************************************************!*\
  !*** ./node_modules/viem/_esm/clients/createClient.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createClient: () => (/* binding */ createClient)
/* harmony export */ });
/* harmony import */ var _utils_accounts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/accounts.js */ 4);
/* harmony import */ var _utils_uid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/uid.js */ 5);


function createClient(parameters) {
    const { batch, cacheTime = parameters.pollingInterval ?? 4000, key = 'base', name = 'Base Client', pollingInterval = 4000, type = 'base', } = parameters;
    const chain = parameters.chain;
    const account = parameters.account
        ? (0,_utils_accounts_js__WEBPACK_IMPORTED_MODULE_0__.parseAccount)(parameters.account)
        : undefined;
    const { config, request, value } = parameters.transport({
        chain,
        pollingInterval,
    });
    const transport = { ...config, ...value };
    const client = {
        account,
        batch,
        cacheTime,
        chain,
        key,
        name,
        pollingInterval,
        request,
        transport,
        type,
        uid: (0,_utils_uid_js__WEBPACK_IMPORTED_MODULE_1__.uid)(),
    };
    function extend(base) {
        return (extendFn) => {
            const extended = extendFn(base);
            for (const key in client)
                delete extended[key];
            const combined = { ...base, ...extended };
            return Object.assign(combined, { extend: extend(combined) });
        };
    }
    return Object.assign(client, { extend: extend(client) });
}
//# sourceMappingURL=createClient.js.map

/***/ }),
/* 4 */
/*!***************************************************************!*\
  !*** ./node_modules/viem/_esm/accounts/utils/parseAccount.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseAccount: () => (/* binding */ parseAccount)
/* harmony export */ });
function parseAccount(account) {
    if (typeof account === 'string')
        return { address: account, type: 'json-rpc' };
    return account;
}
//# sourceMappingURL=parseAccount.js.map

/***/ }),
/* 5 */
/*!*********************************************!*\
  !*** ./node_modules/viem/_esm/utils/uid.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uid: () => (/* binding */ uid)
/* harmony export */ });
const size = 256;
let index = size;
let buffer;
function uid(length = 11) {
    if (!buffer || index + length > size * 2) {
        buffer = '';
        index = 0;
        for (let i = 0; i < size; i++) {
            buffer += ((256 + Math.random() * 256) | 0).toString(16).substring(1);
        }
    }
    return buffer.substring(index, index++ + length);
}
//# sourceMappingURL=uid.js.map

/***/ }),
/* 6 */
/*!*************************************************************!*\
  !*** ./node_modules/viem/_esm/clients/decorators/public.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   publicActions: () => (/* binding */ publicActions)
/* harmony export */ });
/* harmony import */ var _actions_ens_getEnsAddress_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../actions/ens/getEnsAddress.js */ 104);
/* harmony import */ var _actions_ens_getEnsAvatar_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../actions/ens/getEnsAvatar.js */ 112);
/* harmony import */ var _actions_ens_getEnsName_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../actions/ens/getEnsName.js */ 117);
/* harmony import */ var _actions_ens_getEnsResolver_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../actions/ens/getEnsResolver.js */ 118);
/* harmony import */ var _actions_ens_getEnsText_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../actions/ens/getEnsText.js */ 113);
/* harmony import */ var _actions_public_call_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/public/call.js */ 7);
/* harmony import */ var _actions_public_createBlockFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/public/createBlockFilter.js */ 70);
/* harmony import */ var _actions_public_createContractEventFilter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/public/createContractEventFilter.js */ 72);
/* harmony import */ var _actions_public_createEventFilter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/public/createEventFilter.js */ 75);
/* harmony import */ var _actions_public_createPendingTransactionFilter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/public/createPendingTransactionFilter.js */ 76);
/* harmony import */ var _actions_public_estimateContractGas_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/public/estimateContractGas.js */ 77);
/* harmony import */ var _actions_public_estimateFeesPerGas_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../actions/public/estimateFeesPerGas.js */ 87);
/* harmony import */ var _actions_public_estimateGas_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/public/estimateGas.js */ 78);
/* harmony import */ var _actions_public_estimateMaxPriorityFeePerGas_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../actions/public/estimateMaxPriorityFeePerGas.js */ 89);
/* harmony import */ var _actions_public_getBalance_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/public/getBalance.js */ 94);
/* harmony import */ var _actions_public_getBlock_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/public/getBlock.js */ 81);
/* harmony import */ var _actions_public_getBlockNumber_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/public/getBlockNumber.js */ 95);
/* harmony import */ var _actions_public_getBlockTransactionCount_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/public/getBlockTransactionCount.js */ 97);
/* harmony import */ var _actions_public_getBytecode_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions/public/getBytecode.js */ 98);
/* harmony import */ var _actions_public_getChainId_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../actions/public/getChainId.js */ 99);
/* harmony import */ var _actions_public_getContractEvents_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../actions/public/getContractEvents.js */ 100);
/* harmony import */ var _actions_public_getFeeHistory_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../actions/public/getFeeHistory.js */ 119);
/* harmony import */ var _actions_public_getFilterChanges_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../actions/public/getFilterChanges.js */ 121);
/* harmony import */ var _actions_public_getFilterLogs_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../actions/public/getFilterLogs.js */ 122);
/* harmony import */ var _actions_public_getGasPrice_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../actions/public/getGasPrice.js */ 90);
/* harmony import */ var _actions_public_getLogs_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../actions/public/getLogs.js */ 101);
/* harmony import */ var _actions_public_getProof_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../actions/public/getProof.js */ 123);
/* harmony import */ var _actions_public_getStorageAt_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../actions/public/getStorageAt.js */ 125);
/* harmony import */ var _actions_public_getTransaction_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../actions/public/getTransaction.js */ 126);
/* harmony import */ var _actions_public_getTransactionConfirmations_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../actions/public/getTransactionConfirmations.js */ 127);
/* harmony import */ var _actions_public_getTransactionCount_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../actions/public/getTransactionCount.js */ 85);
/* harmony import */ var _actions_public_getTransactionReceipt_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../actions/public/getTransactionReceipt.js */ 128);
/* harmony import */ var _actions_public_multicall_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../actions/public/multicall.js */ 130);
/* harmony import */ var _actions_public_readContract_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../actions/public/readContract.js */ 107);
/* harmony import */ var _actions_public_simulateContract_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../actions/public/simulateContract.js */ 132);
/* harmony import */ var _actions_public_uninstallFilter_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../actions/public/uninstallFilter.js */ 144);
/* harmony import */ var _actions_public_verifyMessage_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../actions/public/verifyMessage.js */ 133);
/* harmony import */ var _actions_public_verifyTypedData_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../actions/public/verifyTypedData.js */ 140);
/* harmony import */ var _actions_public_waitForTransactionReceipt_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../actions/public/waitForTransactionReceipt.js */ 145);
/* harmony import */ var _actions_public_watchBlockNumber_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../actions/public/watchBlockNumber.js */ 147);
/* harmony import */ var _actions_public_watchBlocks_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../actions/public/watchBlocks.js */ 151);
/* harmony import */ var _actions_public_watchContractEvent_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../actions/public/watchContractEvent.js */ 152);
/* harmony import */ var _actions_public_watchEvent_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../actions/public/watchEvent.js */ 153);
/* harmony import */ var _actions_public_watchPendingTransactions_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../actions/public/watchPendingTransactions.js */ 154);
/* harmony import */ var _actions_wallet_prepareTransactionRequest_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../actions/wallet/prepareTransactionRequest.js */ 80);
/* harmony import */ var _actions_wallet_sendRawTransaction_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../actions/wallet/sendRawTransaction.js */ 131);














































function publicActions(client) {
    return {
        call: (args) => (0,_actions_public_call_js__WEBPACK_IMPORTED_MODULE_0__.call)(client, args),
        createBlockFilter: () => (0,_actions_public_createBlockFilter_js__WEBPACK_IMPORTED_MODULE_1__.createBlockFilter)(client),
        createContractEventFilter: (args) => (0,_actions_public_createContractEventFilter_js__WEBPACK_IMPORTED_MODULE_2__.createContractEventFilter)(client, args),
        createEventFilter: (args) => (0,_actions_public_createEventFilter_js__WEBPACK_IMPORTED_MODULE_3__.createEventFilter)(client, args),
        createPendingTransactionFilter: () => (0,_actions_public_createPendingTransactionFilter_js__WEBPACK_IMPORTED_MODULE_4__.createPendingTransactionFilter)(client),
        estimateContractGas: (args) => (0,_actions_public_estimateContractGas_js__WEBPACK_IMPORTED_MODULE_5__.estimateContractGas)(client, args),
        estimateGas: (args) => (0,_actions_public_estimateGas_js__WEBPACK_IMPORTED_MODULE_6__.estimateGas)(client, args),
        getBalance: (args) => (0,_actions_public_getBalance_js__WEBPACK_IMPORTED_MODULE_7__.getBalance)(client, args),
        getBlock: (args) => (0,_actions_public_getBlock_js__WEBPACK_IMPORTED_MODULE_8__.getBlock)(client, args),
        getBlockNumber: (args) => (0,_actions_public_getBlockNumber_js__WEBPACK_IMPORTED_MODULE_9__.getBlockNumber)(client, args),
        getBlockTransactionCount: (args) => (0,_actions_public_getBlockTransactionCount_js__WEBPACK_IMPORTED_MODULE_10__.getBlockTransactionCount)(client, args),
        getBytecode: (args) => (0,_actions_public_getBytecode_js__WEBPACK_IMPORTED_MODULE_11__.getBytecode)(client, args),
        getChainId: () => (0,_actions_public_getChainId_js__WEBPACK_IMPORTED_MODULE_12__.getChainId)(client),
        getContractEvents: (args) => (0,_actions_public_getContractEvents_js__WEBPACK_IMPORTED_MODULE_13__.getContractEvents)(client, args),
        getEnsAddress: (args) => (0,_actions_ens_getEnsAddress_js__WEBPACK_IMPORTED_MODULE_14__.getEnsAddress)(client, args),
        getEnsAvatar: (args) => (0,_actions_ens_getEnsAvatar_js__WEBPACK_IMPORTED_MODULE_15__.getEnsAvatar)(client, args),
        getEnsName: (args) => (0,_actions_ens_getEnsName_js__WEBPACK_IMPORTED_MODULE_16__.getEnsName)(client, args),
        getEnsResolver: (args) => (0,_actions_ens_getEnsResolver_js__WEBPACK_IMPORTED_MODULE_17__.getEnsResolver)(client, args),
        getEnsText: (args) => (0,_actions_ens_getEnsText_js__WEBPACK_IMPORTED_MODULE_18__.getEnsText)(client, args),
        getFeeHistory: (args) => (0,_actions_public_getFeeHistory_js__WEBPACK_IMPORTED_MODULE_19__.getFeeHistory)(client, args),
        estimateFeesPerGas: (args) => (0,_actions_public_estimateFeesPerGas_js__WEBPACK_IMPORTED_MODULE_20__.estimateFeesPerGas)(client, args),
        getFilterChanges: (args) => (0,_actions_public_getFilterChanges_js__WEBPACK_IMPORTED_MODULE_21__.getFilterChanges)(client, args),
        getFilterLogs: (args) => (0,_actions_public_getFilterLogs_js__WEBPACK_IMPORTED_MODULE_22__.getFilterLogs)(client, args),
        getGasPrice: () => (0,_actions_public_getGasPrice_js__WEBPACK_IMPORTED_MODULE_23__.getGasPrice)(client),
        getLogs: (args) => (0,_actions_public_getLogs_js__WEBPACK_IMPORTED_MODULE_24__.getLogs)(client, args),
        getProof: (args) => (0,_actions_public_getProof_js__WEBPACK_IMPORTED_MODULE_25__.getProof)(client, args),
        estimateMaxPriorityFeePerGas: (args) => (0,_actions_public_estimateMaxPriorityFeePerGas_js__WEBPACK_IMPORTED_MODULE_26__.estimateMaxPriorityFeePerGas)(client, args),
        getStorageAt: (args) => (0,_actions_public_getStorageAt_js__WEBPACK_IMPORTED_MODULE_27__.getStorageAt)(client, args),
        getTransaction: (args) => (0,_actions_public_getTransaction_js__WEBPACK_IMPORTED_MODULE_28__.getTransaction)(client, args),
        getTransactionConfirmations: (args) => (0,_actions_public_getTransactionConfirmations_js__WEBPACK_IMPORTED_MODULE_29__.getTransactionConfirmations)(client, args),
        getTransactionCount: (args) => (0,_actions_public_getTransactionCount_js__WEBPACK_IMPORTED_MODULE_30__.getTransactionCount)(client, args),
        getTransactionReceipt: (args) => (0,_actions_public_getTransactionReceipt_js__WEBPACK_IMPORTED_MODULE_31__.getTransactionReceipt)(client, args),
        multicall: (args) => (0,_actions_public_multicall_js__WEBPACK_IMPORTED_MODULE_32__.multicall)(client, args),
        prepareTransactionRequest: (args) => (0,_actions_wallet_prepareTransactionRequest_js__WEBPACK_IMPORTED_MODULE_33__.prepareTransactionRequest)(client, args),
        readContract: (args) => (0,_actions_public_readContract_js__WEBPACK_IMPORTED_MODULE_34__.readContract)(client, args),
        sendRawTransaction: (args) => (0,_actions_wallet_sendRawTransaction_js__WEBPACK_IMPORTED_MODULE_35__.sendRawTransaction)(client, args),
        simulateContract: (args) => (0,_actions_public_simulateContract_js__WEBPACK_IMPORTED_MODULE_36__.simulateContract)(client, args),
        verifyMessage: (args) => (0,_actions_public_verifyMessage_js__WEBPACK_IMPORTED_MODULE_37__.verifyMessage)(client, args),
        verifyTypedData: (args) => (0,_actions_public_verifyTypedData_js__WEBPACK_IMPORTED_MODULE_38__.verifyTypedData)(client, args),
        uninstallFilter: (args) => (0,_actions_public_uninstallFilter_js__WEBPACK_IMPORTED_MODULE_39__.uninstallFilter)(client, args),
        waitForTransactionReceipt: (args) => (0,_actions_public_waitForTransactionReceipt_js__WEBPACK_IMPORTED_MODULE_40__.waitForTransactionReceipt)(client, args),
        watchBlocks: (args) => (0,_actions_public_watchBlocks_js__WEBPACK_IMPORTED_MODULE_41__.watchBlocks)(client, args),
        watchBlockNumber: (args) => (0,_actions_public_watchBlockNumber_js__WEBPACK_IMPORTED_MODULE_42__.watchBlockNumber)(client, args),
        watchContractEvent: (args) => (0,_actions_public_watchContractEvent_js__WEBPACK_IMPORTED_MODULE_43__.watchContractEvent)(client, args),
        watchEvent: (args) => (0,_actions_public_watchEvent_js__WEBPACK_IMPORTED_MODULE_44__.watchEvent)(client, args),
        watchPendingTransactions: (args) => (0,_actions_public_watchPendingTransactions_js__WEBPACK_IMPORTED_MODULE_45__.watchPendingTransactions)(client, args),
    };
}
//# sourceMappingURL=public.js.map

/***/ }),
/* 7 */
/*!*******************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/call.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   call: () => (/* binding */ call),
/* harmony export */   getRevertErrorData: () => (/* binding */ getRevertErrorData)
/* harmony export */ });
/* harmony import */ var _accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../accounts/utils/parseAccount.js */ 4);
/* harmony import */ var _constants_abis_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants/abis.js */ 68);
/* harmony import */ var _constants_contract_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/contract.js */ 64);
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../errors/base.js */ 14);
/* harmony import */ var _errors_chain_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../errors/chain.js */ 55);
/* harmony import */ var _errors_contract_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../errors/contract.js */ 59);
/* harmony import */ var _utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/abi/decodeFunctionResult.js */ 69);
/* harmony import */ var _utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/abi/encodeFunctionData.js */ 67);
/* harmony import */ var _utils_chain_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/chain.js */ 65);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/encoding/toHex.js */ 32);
/* harmony import */ var _utils_errors_getCallError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/errors/getCallError.js */ 56);
/* harmony import */ var _utils_formatters_extract_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/formatters/extract.js */ 54);
/* harmony import */ var _utils_formatters_transactionRequest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/formatters/transactionRequest.js */ 52);
/* harmony import */ var _utils_promise_createBatchScheduler_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/promise/createBatchScheduler.js */ 66);
/* harmony import */ var _utils_transaction_assertRequest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/transaction/assertRequest.js */ 45);















/**
 * Executes a new message call immediately without submitting a transaction to the network.
 *
 * - Docs: https://viem.sh/docs/actions/public/call.html
 * - JSON-RPC Methods: [`eth_call`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_call)
 *
 * @param client - Client to use
 * @param parameters - {@link CallParameters}
 * @returns The call data. {@link CallReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { call } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const data = await call(client, {
 *   account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 *   data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 *   to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 * })
 */
async function call(client, args) {
    const { account: account_ = client.account, batch = Boolean(client.batch?.multicall), blockNumber, blockTag = 'latest', accessList, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, ...rest } = args;
    const account = account_ ? (0,_accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_0__.parseAccount)(account_) : undefined;
    try {
        (0,_utils_transaction_assertRequest_js__WEBPACK_IMPORTED_MODULE_1__.assertRequest)(args);
        const blockNumberHex = blockNumber ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__.numberToHex)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const format = client.chain?.formatters?.transactionRequest?.format ||
            _utils_formatters_transactionRequest_js__WEBPACK_IMPORTED_MODULE_3__.formatTransactionRequest;
        const request = format({
            // Pick out extra data that might exist on the chain's transaction request type.
            ...(0,_utils_formatters_extract_js__WEBPACK_IMPORTED_MODULE_4__.extract)(rest, { format }),
            from: account?.address,
            accessList,
            data,
            gas,
            gasPrice,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to,
            value,
        });
        if (batch && shouldPerformMulticall({ request })) {
            try {
                return await scheduleMulticall(client, {
                    ...request,
                    blockNumber,
                    blockTag,
                });
            }
            catch (err) {
                if (!(err instanceof _errors_chain_js__WEBPACK_IMPORTED_MODULE_5__.ClientChainNotConfiguredError) &&
                    !(err instanceof _errors_chain_js__WEBPACK_IMPORTED_MODULE_5__.ChainDoesNotSupportContract))
                    throw err;
            }
        }
        const response = await client.request({
            method: 'eth_call',
            params: block
                ? [request, block]
                : [request],
        });
        if (response === '0x')
            return { data: undefined };
        return { data: response };
    }
    catch (err) {
        const data = getRevertErrorData(err);
        const { offchainLookup, offchainLookupSignature } = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../utils/ccip.js */ 8));
        if (data?.slice(0, 10) === offchainLookupSignature && to) {
            return { data: await offchainLookup(client, { data, to }) };
        }
        throw (0,_utils_errors_getCallError_js__WEBPACK_IMPORTED_MODULE_6__.getCallError)(err, {
            ...args,
            account,
            chain: client.chain,
        });
    }
}
// We only want to perform a scheduled multicall if:
// - The request has calldata,
// - The request has a target address,
// - The target address is not already the aggregate3 signature,
// - The request has no other properties (`nonce`, `gas`, etc cannot be sent with a multicall).
function shouldPerformMulticall({ request }) {
    const { data, to, ...request_ } = request;
    if (!data)
        return false;
    if (data.startsWith(_constants_contract_js__WEBPACK_IMPORTED_MODULE_7__.aggregate3Signature))
        return false;
    if (!to)
        return false;
    if (Object.values(request_).filter((x) => typeof x !== 'undefined').length > 0)
        return false;
    return true;
}
async function scheduleMulticall(client, args) {
    const { batchSize = 1024, wait = 0 } = typeof client.batch?.multicall === 'object' ? client.batch.multicall : {};
    const { blockNumber, blockTag = 'latest', data, multicallAddress: multicallAddress_, to, } = args;
    let multicallAddress = multicallAddress_;
    if (!multicallAddress) {
        if (!client.chain)
            throw new _errors_chain_js__WEBPACK_IMPORTED_MODULE_5__.ClientChainNotConfiguredError();
        multicallAddress = (0,_utils_chain_js__WEBPACK_IMPORTED_MODULE_8__.getChainContractAddress)({
            blockNumber,
            chain: client.chain,
            contract: 'multicall3',
        });
    }
    const blockNumberHex = blockNumber ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__.numberToHex)(blockNumber) : undefined;
    const block = blockNumberHex || blockTag;
    const { schedule } = (0,_utils_promise_createBatchScheduler_js__WEBPACK_IMPORTED_MODULE_9__.createBatchScheduler)({
        id: `${client.uid}.${block}`,
        wait,
        shouldSplitBatch(args) {
            const size = args.reduce((size, { data }) => size + (data.length - 2), 0);
            return size > batchSize * 2;
        },
        fn: async (requests) => {
            const calls = requests.map((request) => ({
                allowFailure: true,
                callData: request.data,
                target: request.to,
            }));
            const calldata = (0,_utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_10__.encodeFunctionData)({
                abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_11__.multicall3Abi,
                args: [calls],
                functionName: 'aggregate3',
            });
            const data = await client.request({
                method: 'eth_call',
                params: [
                    {
                        data: calldata,
                        to: multicallAddress,
                    },
                    block,
                ],
            });
            return (0,_utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_12__.decodeFunctionResult)({
                abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_11__.multicall3Abi,
                args: [calls],
                functionName: 'aggregate3',
                data: data || '0x',
            });
        },
    });
    const [{ returnData, success }] = await schedule({ data, to });
    if (!success)
        throw new _errors_contract_js__WEBPACK_IMPORTED_MODULE_13__.RawContractError({ data: returnData });
    if (returnData === '0x')
        return { data: undefined };
    return { data: returnData };
}
function getRevertErrorData(err) {
    if (!(err instanceof _errors_base_js__WEBPACK_IMPORTED_MODULE_14__.BaseError))
        return undefined;
    const error = err.walk();
    return typeof error.data === 'object' ? error.data.data : error.data;
}
//# sourceMappingURL=call.js.map

/***/ }),
/* 8 */
/*!**********************************************!*\
  !*** ./node_modules/viem/_esm/utils/ccip.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ccipFetch: () => (/* binding */ ccipFetch),
/* harmony export */   offchainLookup: () => (/* binding */ offchainLookup),
/* harmony export */   offchainLookupAbiItem: () => (/* binding */ offchainLookupAbiItem),
/* harmony export */   offchainLookupSignature: () => (/* binding */ offchainLookupSignature)
/* harmony export */ });
/* harmony import */ var _actions_public_call_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/public/call.js */ 7);
/* harmony import */ var _errors_ccip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors/ccip.js */ 42);
/* harmony import */ var _errors_request_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../errors/request.js */ 44);
/* harmony import */ var _abi_decodeErrorResult_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abi/decodeErrorResult.js */ 9);
/* harmony import */ var _abi_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./abi/encodeAbiParameters.js */ 36);
/* harmony import */ var _address_isAddressEqual_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address/isAddressEqual.js */ 41);
/* harmony import */ var _data_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/concat.js */ 37);
/* harmony import */ var _data_isHex_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/isHex.js */ 11);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ 43);










const offchainLookupSignature = '0x556f1830';
const offchainLookupAbiItem = {
    name: 'OffchainLookup',
    type: 'error',
    inputs: [
        {
            name: 'sender',
            type: 'address',
        },
        {
            name: 'urls',
            type: 'string[]',
        },
        {
            name: 'callData',
            type: 'bytes',
        },
        {
            name: 'callbackFunction',
            type: 'bytes4',
        },
        {
            name: 'extraData',
            type: 'bytes',
        },
    ],
};
async function offchainLookup(client, { blockNumber, blockTag, data, to, }) {
    const { args } = (0,_abi_decodeErrorResult_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrorResult)({
        data,
        abi: [offchainLookupAbiItem],
    });
    const [sender, urls, callData, callbackSelector, extraData] = args;
    try {
        if (!(0,_address_isAddressEqual_js__WEBPACK_IMPORTED_MODULE_1__.isAddressEqual)(to, sender))
            throw new _errors_ccip_js__WEBPACK_IMPORTED_MODULE_2__.OffchainLookupSenderMismatchError({ sender, to });
        const result = await ccipFetch({ data: callData, sender, urls });
        const { data: data_ } = await (0,_actions_public_call_js__WEBPACK_IMPORTED_MODULE_3__.call)(client, {
            blockNumber,
            blockTag,
            data: (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_4__.concat)([
                callbackSelector,
                (0,_abi_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_5__.encodeAbiParameters)([{ type: 'bytes' }, { type: 'bytes' }], [result, extraData]),
            ]),
            to,
        });
        return data_;
    }
    catch (err) {
        throw new _errors_ccip_js__WEBPACK_IMPORTED_MODULE_2__.OffchainLookupError({
            callbackSelector,
            cause: err,
            data,
            extraData,
            sender,
            urls,
        });
    }
}
async function ccipFetch({ data, sender, urls, }) {
    let error = new Error('An unknown error occurred.');
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        const method = url.includes('{sender}') || url.includes('{data}') ? 'GET' : 'POST';
        const body = method === 'POST' ? { data, sender } : undefined;
        try {
            const response = await fetch(url.replace('{sender}', sender).replace('{data}', data), {
                body: JSON.stringify(body),
                method,
            });
            let result;
            if (response.headers.get('Content-Type')?.startsWith('application/json')) {
                result = (await response.json()).data;
            }
            else {
                result = (await response.text());
            }
            if (!response.ok) {
                error = new _errors_request_js__WEBPACK_IMPORTED_MODULE_6__.HttpRequestError({
                    body,
                    details: (0,_stringify_js__WEBPACK_IMPORTED_MODULE_7__.stringify)(result.error) || response.statusText,
                    headers: response.headers,
                    status: response.status,
                    url,
                });
                continue;
            }
            if (!(0,_data_isHex_js__WEBPACK_IMPORTED_MODULE_8__.isHex)(result)) {
                error = new _errors_ccip_js__WEBPACK_IMPORTED_MODULE_2__.OffchainLookupResponseMalformedError({
                    result,
                    url,
                });
                continue;
            }
            return result;
        }
        catch (err) {
            error = new _errors_request_js__WEBPACK_IMPORTED_MODULE_6__.HttpRequestError({
                body,
                details: err.message,
                url,
            });
        }
    }
    throw error;
}
//# sourceMappingURL=ccip.js.map

/***/ }),
/* 9 */
/*!***************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/abi/decodeErrorResult.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodeErrorResult: () => (/* binding */ decodeErrorResult)
/* harmony export */ });
/* harmony import */ var _constants_solidity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/solidity.js */ 19);
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors/abi.js */ 17);
/* harmony import */ var _data_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/slice.js */ 10);
/* harmony import */ var _hash_getFunctionSelector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hash/getFunctionSelector.js */ 20);
/* harmony import */ var _decodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decodeAbiParameters.js */ 35);
/* harmony import */ var _formatAbiItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatAbiItem.js */ 18);






function decodeErrorResult({ abi, data, }) {
    const signature = (0,_data_slice_js__WEBPACK_IMPORTED_MODULE_0__.slice)(data, 0, 4);
    if (signature === '0x')
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__.AbiDecodingZeroDataError();
    const abi_ = [...(abi || []), _constants_solidity_js__WEBPACK_IMPORTED_MODULE_2__.solidityError, _constants_solidity_js__WEBPACK_IMPORTED_MODULE_2__.solidityPanic];
    const abiItem = abi_.find((x) => x.type === 'error' && signature === (0,_hash_getFunctionSelector_js__WEBPACK_IMPORTED_MODULE_3__.getFunctionSelector)((0,_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_4__.formatAbiItem)(x)));
    if (!abiItem)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__.AbiErrorSignatureNotFoundError(signature, {
            docsPath: '/docs/contract/decodeErrorResult',
        });
    return {
        abiItem,
        args: ('inputs' in abiItem && abiItem.inputs && abiItem.inputs.length > 0
            ? (0,_decodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_5__.decodeAbiParameters)(abiItem.inputs, (0,_data_slice_js__WEBPACK_IMPORTED_MODULE_0__.slice)(data, 4))
            : undefined),
        errorName: abiItem.name,
    };
}
//# sourceMappingURL=decodeErrorResult.js.map

/***/ }),
/* 10 */
/*!****************************************************!*\
  !*** ./node_modules/viem/_esm/utils/data/slice.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slice: () => (/* binding */ slice),
/* harmony export */   sliceBytes: () => (/* binding */ sliceBytes),
/* harmony export */   sliceHex: () => (/* binding */ sliceHex)
/* harmony export */ });
/* harmony import */ var _errors_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors/data.js */ 13);
/* harmony import */ var _isHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isHex.js */ 11);
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./size.js */ 12);



/**
 * @description Returns a section of the hex or byte array given a start/end bytes offset.
 *
 * @param value The hex or byte array to slice.
 * @param start The start offset (in bytes).
 * @param end The end offset (in bytes).
 */
function slice(value, start, end, { strict } = {}) {
    if ((0,_isHex_js__WEBPACK_IMPORTED_MODULE_0__.isHex)(value, { strict: false }))
        return sliceHex(value, start, end, {
            strict,
        });
    return sliceBytes(value, start, end, {
        strict,
    });
}
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > (0,_size_js__WEBPACK_IMPORTED_MODULE_1__.size)(value) - 1)
        throw new _errors_data_js__WEBPACK_IMPORTED_MODULE_2__.SliceOffsetOutOfBoundsError({
            offset: start,
            position: 'start',
            size: (0,_size_js__WEBPACK_IMPORTED_MODULE_1__.size)(value),
        });
}
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' &&
        typeof end === 'number' &&
        (0,_size_js__WEBPACK_IMPORTED_MODULE_1__.size)(value) !== end - start) {
        throw new _errors_data_js__WEBPACK_IMPORTED_MODULE_2__.SliceOffsetOutOfBoundsError({
            offset: end,
            position: 'end',
            size: (0,_size_js__WEBPACK_IMPORTED_MODULE_1__.size)(value),
        });
    }
}
/**
 * @description Returns a section of the byte array given a start/end bytes offset.
 *
 * @param value The byte array to slice.
 * @param start The start offset (in bytes).
 * @param end The end offset (in bytes).
 */
function sliceBytes(value_, start, end, { strict } = {}) {
    assertStartOffset(value_, start);
    const value = value_.slice(start, end);
    if (strict)
        assertEndOffset(value, start, end);
    return value;
}
/**
 * @description Returns a section of the hex value given a start/end bytes offset.
 *
 * @param value The hex value to slice.
 * @param start The start offset (in bytes).
 * @param end The end offset (in bytes).
 */
function sliceHex(value_, start, end, { strict } = {}) {
    assertStartOffset(value_, start);
    const value = `0x${value_
        .replace('0x', '')
        .slice((start ?? 0) * 2, (end ?? value_.length) * 2)}`;
    if (strict)
        assertEndOffset(value, start, end);
    return value;
}
//# sourceMappingURL=slice.js.map

/***/ }),
/* 11 */
/*!****************************************************!*\
  !*** ./node_modules/viem/_esm/utils/data/isHex.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isHex: () => (/* binding */ isHex)
/* harmony export */ });
function isHex(value, { strict = true } = {}) {
    if (!value)
        return false;
    if (typeof value !== 'string')
        return false;
    return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith('0x');
}
//# sourceMappingURL=isHex.js.map

/***/ }),
/* 12 */
/*!***************************************************!*\
  !*** ./node_modules/viem/_esm/utils/data/size.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   size: () => (/* binding */ size)
/* harmony export */ });
/* harmony import */ var _isHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isHex.js */ 11);

/**
 * @description Retrieves the size of the value (in bytes).
 *
 * @param value The value (hex or byte array) to retrieve the size of.
 * @returns The size of the value (in bytes).
 */
function size(value) {
    if ((0,_isHex_js__WEBPACK_IMPORTED_MODULE_0__.isHex)(value, { strict: false }))
        return Math.ceil((value.length - 2) / 2);
    return value.length;
}
//# sourceMappingURL=size.js.map

/***/ }),
/* 13 */
/*!***********************************************!*\
  !*** ./node_modules/viem/_esm/errors/data.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SizeExceedsPaddingSizeError: () => (/* binding */ SizeExceedsPaddingSizeError),
/* harmony export */   SliceOffsetOutOfBoundsError: () => (/* binding */ SliceOffsetOutOfBoundsError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 14);

class SliceOffsetOutOfBoundsError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ offset, position, size, }) {
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset "${offset}" is out-of-bounds (size: ${size}).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SliceOffsetOutOfBoundsError'
        });
    }
}
class SizeExceedsPaddingSizeError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ size, targetSize, type, }) {
        super(`${type.charAt(0).toUpperCase()}${type
            .slice(1)
            .toLowerCase()} size (${size}) exceeds padding size (${targetSize}).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SizeExceedsPaddingSizeError'
        });
    }
}
//# sourceMappingURL=data.js.map

/***/ }),
/* 14 */
/*!***********************************************!*\
  !*** ./node_modules/viem/_esm/errors/base.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseError: () => (/* binding */ BaseError)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ 15);

class BaseError extends Error {
    constructor(shortMessage, args = {}) {
        super();
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ViemError'
        });
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getVersion)()
        });
        const details = args.cause instanceof BaseError
            ? args.cause.details
            : args.cause?.message
                ? args.cause.message
                : args.details;
        const docsPath = args.cause instanceof BaseError
            ? args.cause.docsPath || args.docsPath
            : args.docsPath;
        this.message = [
            shortMessage || 'An error occurred.',
            '',
            ...(args.metaMessages ? [...args.metaMessages, ''] : []),
            ...(docsPath
                ? [
                    `Docs: https://viem.sh${docsPath}.html${args.docsSlug ? `#${args.docsSlug}` : ''}`,
                ]
                : []),
            ...(details ? [`Details: ${details}`] : []),
            `Version: ${this.version}`,
        ].join('\n');
        if (args.cause)
            this.cause = args.cause;
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.shortMessage = shortMessage;
    }
    walk(fn) {
        return walk(this, fn);
    }
}
function walk(err, fn) {
    if (fn?.(err))
        return err;
    if (err && typeof err === 'object' && 'cause' in err)
        return walk(err.cause, fn);
    return fn ? null : err;
}
//# sourceMappingURL=base.js.map

/***/ }),
/* 15 */
/*!************************************************!*\
  !*** ./node_modules/viem/_esm/errors/utils.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContractAddress: () => (/* binding */ getContractAddress),
/* harmony export */   getUrl: () => (/* binding */ getUrl),
/* harmony export */   getVersion: () => (/* binding */ getVersion)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.js */ 16);

const getContractAddress = (address) => address;
const getUrl = (url) => url;
const getVersion = () => `viem@${_version_js__WEBPACK_IMPORTED_MODULE_0__.version}`;
//# sourceMappingURL=utils.js.map

/***/ }),
/* 16 */
/*!**************************************************!*\
  !*** ./node_modules/viem/_esm/errors/version.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   version: () => (/* binding */ version)
/* harmony export */ });
const version = '1.16.5';
//# sourceMappingURL=version.js.map

/***/ }),
/* 17 */
/*!**********************************************!*\
  !*** ./node_modules/viem/_esm/errors/abi.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbiConstructorNotFoundError: () => (/* binding */ AbiConstructorNotFoundError),
/* harmony export */   AbiConstructorParamsNotFoundError: () => (/* binding */ AbiConstructorParamsNotFoundError),
/* harmony export */   AbiDecodingDataSizeInvalidError: () => (/* binding */ AbiDecodingDataSizeInvalidError),
/* harmony export */   AbiDecodingDataSizeTooSmallError: () => (/* binding */ AbiDecodingDataSizeTooSmallError),
/* harmony export */   AbiDecodingZeroDataError: () => (/* binding */ AbiDecodingZeroDataError),
/* harmony export */   AbiEncodingArrayLengthMismatchError: () => (/* binding */ AbiEncodingArrayLengthMismatchError),
/* harmony export */   AbiEncodingBytesSizeMismatchError: () => (/* binding */ AbiEncodingBytesSizeMismatchError),
/* harmony export */   AbiEncodingLengthMismatchError: () => (/* binding */ AbiEncodingLengthMismatchError),
/* harmony export */   AbiErrorInputsNotFoundError: () => (/* binding */ AbiErrorInputsNotFoundError),
/* harmony export */   AbiErrorNotFoundError: () => (/* binding */ AbiErrorNotFoundError),
/* harmony export */   AbiErrorSignatureNotFoundError: () => (/* binding */ AbiErrorSignatureNotFoundError),
/* harmony export */   AbiEventNotFoundError: () => (/* binding */ AbiEventNotFoundError),
/* harmony export */   AbiEventSignatureEmptyTopicsError: () => (/* binding */ AbiEventSignatureEmptyTopicsError),
/* harmony export */   AbiEventSignatureNotFoundError: () => (/* binding */ AbiEventSignatureNotFoundError),
/* harmony export */   AbiFunctionNotFoundError: () => (/* binding */ AbiFunctionNotFoundError),
/* harmony export */   AbiFunctionOutputsNotFoundError: () => (/* binding */ AbiFunctionOutputsNotFoundError),
/* harmony export */   AbiFunctionSignatureNotFoundError: () => (/* binding */ AbiFunctionSignatureNotFoundError),
/* harmony export */   BytesSizeMismatchError: () => (/* binding */ BytesSizeMismatchError),
/* harmony export */   DecodeLogDataMismatch: () => (/* binding */ DecodeLogDataMismatch),
/* harmony export */   DecodeLogTopicsMismatch: () => (/* binding */ DecodeLogTopicsMismatch),
/* harmony export */   InvalidAbiDecodingTypeError: () => (/* binding */ InvalidAbiDecodingTypeError),
/* harmony export */   InvalidAbiEncodingTypeError: () => (/* binding */ InvalidAbiEncodingTypeError),
/* harmony export */   InvalidArrayError: () => (/* binding */ InvalidArrayError),
/* harmony export */   InvalidDefinitionTypeError: () => (/* binding */ InvalidDefinitionTypeError),
/* harmony export */   UnsupportedPackedAbiType: () => (/* binding */ UnsupportedPackedAbiType)
/* harmony export */ });
/* harmony import */ var _utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/abi/formatAbiItem.js */ 18);
/* harmony import */ var _utils_data_size_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/data/size.js */ 12);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 14);



class AbiConstructorNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ docsPath }) {
        super([
            'A constructor was not found on the ABI.',
            'Make sure you are using the correct ABI and that the constructor exists on it.',
        ].join('\n'), {
            docsPath,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiConstructorNotFoundError'
        });
    }
}
class AbiConstructorParamsNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ docsPath }) {
        super([
            'Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.',
            'Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.',
        ].join('\n'), {
            docsPath,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiConstructorParamsNotFoundError'
        });
    }
}
class AbiDecodingDataSizeInvalidError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ data, size }) {
        super([
            `Data size of ${size} bytes is invalid.`,
            'Size must be in increments of 32 bytes (size % 32 === 0).',
        ].join('\n'), { metaMessages: [`Data: ${data} (${size} bytes)`] });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiDecodingDataSizeInvalidError'
        });
    }
}
class AbiDecodingDataSizeTooSmallError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ data, params, size, }) {
        super([`Data size of ${size} bytes is too small for given parameters.`].join('\n'), {
            metaMessages: [
                `Params: (${(0,_utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_1__.formatAbiParams)(params, { includeName: true })})`,
                `Data:   ${data} (${size} bytes)`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiDecodingDataSizeTooSmallError'
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
        this.params = params;
        this.size = size;
    }
}
class AbiDecodingZeroDataError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor() {
        super('Cannot decode zero data ("0x") with ABI parameters.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiDecodingZeroDataError'
        });
    }
}
class AbiEncodingArrayLengthMismatchError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ expectedLength, givenLength, type, }) {
        super([
            `ABI encoding array length mismatch for type ${type}.`,
            `Expected length: ${expectedLength}`,
            `Given length: ${givenLength}`,
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiEncodingArrayLengthMismatchError'
        });
    }
}
class AbiEncodingBytesSizeMismatchError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ expectedSize, value }) {
        super(`Size of bytes "${value}" (bytes${(0,_utils_data_size_js__WEBPACK_IMPORTED_MODULE_2__.size)(value)}) does not match expected size (bytes${expectedSize}).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiEncodingBytesSizeMismatchError'
        });
    }
}
class AbiEncodingLengthMismatchError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ expectedLength, givenLength, }) {
        super([
            'ABI encoding params/values length mismatch.',
            `Expected length (params): ${expectedLength}`,
            `Given length (values): ${givenLength}`,
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiEncodingLengthMismatchError'
        });
    }
}
class AbiErrorInputsNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(errorName, { docsPath }) {
        super([
            `Arguments (\`args\`) were provided to "${errorName}", but "${errorName}" on the ABI does not contain any parameters (\`inputs\`).`,
            'Cannot encode error result without knowing what the parameter types are.',
            'Make sure you are using the correct ABI and that the inputs exist on it.',
        ].join('\n'), {
            docsPath,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiErrorInputsNotFoundError'
        });
    }
}
class AbiErrorNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(errorName, { docsPath } = {}) {
        super([
            `Error ${errorName ? `"${errorName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the error exists on it.',
        ].join('\n'), {
            docsPath,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiErrorNotFoundError'
        });
    }
}
class AbiErrorSignatureNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(signature, { docsPath }) {
        super([
            `Encoded error signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the error exists on it.',
            `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`,
        ].join('\n'), {
            docsPath,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiErrorSignatureNotFoundError'
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.signature = signature;
    }
}
class AbiEventSignatureEmptyTopicsError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ docsPath }) {
        super('Cannot extract event signature from empty topics.', {
            docsPath,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiEventSignatureEmptyTopicsError'
        });
    }
}
class AbiEventSignatureNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(signature, { docsPath }) {
        super([
            `Encoded event signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the event exists on it.',
            `You can look up the signature here: https://openchain.xyz/signatures?query=${signature}.`,
        ].join('\n'), {
            docsPath,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiEventSignatureNotFoundError'
        });
    }
}
class AbiEventNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(eventName, { docsPath } = {}) {
        super([
            `Event ${eventName ? `"${eventName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the event exists on it.',
        ].join('\n'), {
            docsPath,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiEventNotFoundError'
        });
    }
}
class AbiFunctionNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(functionName, { docsPath } = {}) {
        super([
            `Function ${functionName ? `"${functionName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the function exists on it.',
        ].join('\n'), {
            docsPath,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiFunctionNotFoundError'
        });
    }
}
class AbiFunctionOutputsNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(functionName, { docsPath }) {
        super([
            `Function "${functionName}" does not contain any \`outputs\` on ABI.`,
            'Cannot decode function result without knowing what the parameter types are.',
            'Make sure you are using the correct ABI and that the function exists on it.',
        ].join('\n'), {
            docsPath,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiFunctionOutputsNotFoundError'
        });
    }
}
class AbiFunctionSignatureNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(signature, { docsPath }) {
        super([
            `Encoded function signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the function exists on it.',
            `You can look up the signature here: https://openchain.xyz/signatures?query=${signature}.`,
        ].join('\n'), {
            docsPath,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiFunctionSignatureNotFoundError'
        });
    }
}
class BytesSizeMismatchError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ expectedSize, givenSize, }) {
        super(`Expected bytes${expectedSize}, got bytes${givenSize}.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BytesSizeMismatchError'
        });
    }
}
class DecodeLogDataMismatch extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ abiItem, data, params, size, }) {
        super([
            `Data size of ${size} bytes is too small for non-indexed event parameters.`,
        ].join('\n'), {
            metaMessages: [
                `Params: (${(0,_utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_1__.formatAbiParams)(params, { includeName: true })})`,
                `Data:   ${data} (${size} bytes)`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'DecodeLogDataMismatch'
        });
        Object.defineProperty(this, "abiItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abiItem = abiItem;
        this.data = data;
        this.params = params;
        this.size = size;
    }
}
class DecodeLogTopicsMismatch extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ abiItem, param, }) {
        super([
            `Expected a topic for indexed event parameter${param.name ? ` "${param.name}"` : ''} on event "${(0,_utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_1__.formatAbiItem)(abiItem, { includeName: true })}".`,
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'DecodeLogTopicsMismatch'
        });
        Object.defineProperty(this, "abiItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abiItem = abiItem;
    }
}
class InvalidAbiEncodingTypeError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(type, { docsPath }) {
        super([
            `Type "${type}" is not a valid encoding type.`,
            'Please provide a valid ABI type.',
        ].join('\n'), { docsPath });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiEncodingType'
        });
    }
}
class InvalidAbiDecodingTypeError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(type, { docsPath }) {
        super([
            `Type "${type}" is not a valid decoding type.`,
            'Please provide a valid ABI type.',
        ].join('\n'), { docsPath });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiDecodingType'
        });
    }
}
class InvalidArrayError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(value) {
        super([`Value "${value}" is not a valid array.`].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidArrayError'
        });
    }
}
class InvalidDefinitionTypeError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(type) {
        super([
            `"${type}" is not a valid definition type.`,
            'Valid types: "function", "event", "error"',
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidDefinitionTypeError'
        });
    }
}
class UnsupportedPackedAbiType extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(type) {
        super(`Type "${type}" is not supported for packed encoding.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnsupportedPackedAbiType'
        });
    }
}
//# sourceMappingURL=abi.js.map

/***/ }),
/* 18 */
/*!***********************************************************!*\
  !*** ./node_modules/viem/_esm/utils/abi/formatAbiItem.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatAbiItem: () => (/* binding */ formatAbiItem),
/* harmony export */   formatAbiParams: () => (/* binding */ formatAbiParams)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors/abi.js */ 17);

function formatAbiItem(abiItem, { includeName = false } = {}) {
    if (abiItem.type !== 'function' &&
        abiItem.type !== 'event' &&
        abiItem.type !== 'error')
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__.InvalidDefinitionTypeError(abiItem.type);
    return `${abiItem.name}(${formatAbiParams(abiItem.inputs, { includeName })})`;
}
function formatAbiParams(params, { includeName = false } = {}) {
    if (!params)
        return '';
    return params
        .map((param) => formatAbiParam(param, { includeName }))
        .join(includeName ? ', ' : ',');
}
function formatAbiParam(param, { includeName }) {
    if (param.type.startsWith('tuple')) {
        return `(${formatAbiParams(param.components, { includeName })})${param.type.slice('tuple'.length)}`;
    }
    return param.type + (includeName && param.name ? ` ${param.name}` : '');
}
//# sourceMappingURL=formatAbiItem.js.map

/***/ }),
/* 19 */
/*!******************************************************!*\
  !*** ./node_modules/viem/_esm/constants/solidity.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   panicReasons: () => (/* binding */ panicReasons),
/* harmony export */   solidityError: () => (/* binding */ solidityError),
/* harmony export */   solidityPanic: () => (/* binding */ solidityPanic)
/* harmony export */ });
// https://docs.soliditylang.org/en/v0.8.16/control-structures.html#panic-via-assert-and-error-via-require
const panicReasons = {
    1: 'An `assert` condition failed.',
    17: 'Arithmic operation resulted in underflow or overflow.',
    18: 'Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).',
    33: 'Attempted to convert to an invalid type.',
    34: 'Attempted to access a storage byte array that is incorrectly encoded.',
    49: 'Performed `.pop()` on an empty array',
    50: 'Array index is out of bounds.',
    65: 'Allocated too much memory or created an array which is too large.',
    81: 'Attempted to call a zero-initialized variable of internal function type.',
};
const solidityError = {
    inputs: [
        {
            name: 'message',
            type: 'string',
        },
    ],
    name: 'Error',
    type: 'error',
};
const solidityPanic = {
    inputs: [
        {
            name: 'reason',
            type: 'uint256',
        },
    ],
    name: 'Panic',
    type: 'error',
};
//# sourceMappingURL=solidity.js.map

/***/ }),
/* 20 */
/*!******************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/hash/getFunctionSelector.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFunctionSelector: () => (/* binding */ getFunctionSelector)
/* harmony export */ });
/* harmony import */ var _data_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/slice.js */ 10);
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../encoding/toBytes.js */ 27);
/* harmony import */ var _getFunctionSignature_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getFunctionSignature.js */ 33);
/* harmony import */ var _keccak256_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keccak256.js */ 21);




const hash = (value) => (0,_keccak256_js__WEBPACK_IMPORTED_MODULE_0__.keccak256)((0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_1__.toBytes)(value));
const getFunctionSelector = (fn) => (0,_data_slice_js__WEBPACK_IMPORTED_MODULE_2__.slice)(hash((0,_getFunctionSignature_js__WEBPACK_IMPORTED_MODULE_3__.getFunctionSignature)(fn)), 0, 4);
//# sourceMappingURL=getFunctionSelector.js.map

/***/ }),
/* 21 */
/*!********************************************************!*\
  !*** ./node_modules/viem/_esm/utils/hash/keccak256.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   keccak256: () => (/* binding */ keccak256)
/* harmony export */ });
/* harmony import */ var _noble_hashes_sha3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @noble/hashes/sha3 */ 22);
/* harmony import */ var _data_isHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/isHex.js */ 11);
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoding/toBytes.js */ 27);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../encoding/toHex.js */ 32);




function keccak256(value, to_) {
    const to = to_ || 'hex';
    const bytes = (0,_noble_hashes_sha3__WEBPACK_IMPORTED_MODULE_0__.keccak_256)((0,_data_isHex_js__WEBPACK_IMPORTED_MODULE_1__.isHex)(value, { strict: false }) ? (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_2__.toBytes)(value) : value);
    if (to === 'bytes')
        return bytes;
    return (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__.toHex)(bytes);
}
//# sourceMappingURL=keccak256.js.map

/***/ }),
/* 22 */
/*!************************************************!*\
  !*** ./node_modules/@noble/hashes/esm/sha3.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Keccak: () => (/* binding */ Keccak),
/* harmony export */   keccakP: () => (/* binding */ keccakP),
/* harmony export */   keccak_224: () => (/* binding */ keccak_224),
/* harmony export */   keccak_256: () => (/* binding */ keccak_256),
/* harmony export */   keccak_384: () => (/* binding */ keccak_384),
/* harmony export */   keccak_512: () => (/* binding */ keccak_512),
/* harmony export */   sha3_224: () => (/* binding */ sha3_224),
/* harmony export */   sha3_256: () => (/* binding */ sha3_256),
/* harmony export */   sha3_384: () => (/* binding */ sha3_384),
/* harmony export */   sha3_512: () => (/* binding */ sha3_512),
/* harmony export */   shake128: () => (/* binding */ shake128),
/* harmony export */   shake256: () => (/* binding */ shake256)
/* harmony export */ });
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_assert.js */ 26);
/* harmony import */ var _u64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_u64.js */ 23);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ 24);



// SHA3 (keccak) is based on a new design: basically, the internal state is bigger than output size.
// It's called a sponge function.
// Various per round constants calculations
const [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [[], [], []];
const _0n = /* @__PURE__ */ BigInt(0);
const _1n = /* @__PURE__ */ BigInt(1);
const _2n = /* @__PURE__ */ BigInt(2);
const _7n = /* @__PURE__ */ BigInt(7);
const _256n = /* @__PURE__ */ BigInt(256);
const _0x71n = /* @__PURE__ */ BigInt(0x71);
for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
    // Pi
    [x, y] = [y, (2 * x + 3 * y) % 5];
    SHA3_PI.push(2 * (5 * y + x));
    // Rotational
    SHA3_ROTL.push((((round + 1) * (round + 2)) / 2) % 64);
    // Iota
    let t = _0n;
    for (let j = 0; j < 7; j++) {
        R = ((R << _1n) ^ ((R >> _7n) * _0x71n)) % _256n;
        if (R & _2n)
            t ^= _1n << ((_1n << /* @__PURE__ */ BigInt(j)) - _1n);
    }
    _SHA3_IOTA.push(t);
}
const [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ (0,_u64_js__WEBPACK_IMPORTED_MODULE_0__.split)(_SHA3_IOTA, true);
// Left rotation (without 0, 32, 64)
const rotlH = (h, l, s) => (s > 32 ? (0,_u64_js__WEBPACK_IMPORTED_MODULE_0__.rotlBH)(h, l, s) : (0,_u64_js__WEBPACK_IMPORTED_MODULE_0__.rotlSH)(h, l, s));
const rotlL = (h, l, s) => (s > 32 ? (0,_u64_js__WEBPACK_IMPORTED_MODULE_0__.rotlBL)(h, l, s) : (0,_u64_js__WEBPACK_IMPORTED_MODULE_0__.rotlSL)(h, l, s));
// Same as keccakf1600, but allows to skip some rounds
function keccakP(s, rounds = 24) {
    const B = new Uint32Array(5 * 2);
    // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
    for (let round = 24 - rounds; round < 24; round++) {
        // Theta θ
        for (let x = 0; x < 10; x++)
            B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for (let x = 0; x < 10; x += 2) {
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for (let y = 0; y < 50; y += 10) {
                s[x + y] ^= Th;
                s[x + y + 1] ^= Tl;
            }
        }
        // Rho (ρ) and Pi (π)
        let curH = s[2];
        let curL = s[3];
        for (let t = 0; t < 24; t++) {
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
        }
        // Chi (χ)
        for (let y = 0; y < 50; y += 10) {
            for (let x = 0; x < 10; x++)
                B[x] = s[y + x];
            for (let x = 0; x < 10; x++)
                s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        }
        // Iota (ι)
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
    }
    B.fill(0);
}
class Keccak extends _utils_js__WEBPACK_IMPORTED_MODULE_1__.Hash {
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
        super();
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        // Can be passed from user as dkLen
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_2__.number)(outputLen);
        // 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
        if (0 >= this.blockLen || this.blockLen >= 200)
            throw new Error('Sha3 supports only keccak-f1600 function');
        this.state = new Uint8Array(200);
        this.state32 = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.u32)(this.state);
    }
    keccak() {
        keccakP(this.state32, this.rounds);
        this.posOut = 0;
        this.pos = 0;
    }
    update(data) {
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_2__.exists)(this);
        const { blockLen, state } = this;
        data = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toBytes)(data);
        const len = data.length;
        for (let pos = 0; pos < len;) {
            const take = Math.min(blockLen - this.pos, len - pos);
            for (let i = 0; i < take; i++)
                state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen)
                this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished)
            return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        // Do the padding
        state[pos] ^= suffix;
        if ((suffix & 0x80) !== 0 && pos === blockLen - 1)
            this.keccak();
        state[blockLen - 1] ^= 0x80;
        this.keccak();
    }
    writeInto(out) {
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_2__.exists)(this, false);
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_2__.bytes)(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for (let pos = 0, len = out.length; pos < len;) {
            if (this.posOut >= blockLen)
                this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
        }
        return out;
    }
    xofInto(out) {
        // Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
        if (!this.enableXOF)
            throw new Error('XOF is not possible for this instance');
        return this.writeInto(out);
    }
    xof(bytes) {
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_2__.number)(bytes);
        return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_2__.output)(out, this);
        if (this.finished)
            throw new Error('digest() was already called');
        this.writeInto(out);
        this.destroy();
        return out;
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
        this.destroyed = true;
        this.state.fill(0);
    }
    _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        // Suffix can change in cSHAKE
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
    }
}
const gen = (suffix, blockLen, outputLen) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.wrapConstructor)(() => new Keccak(blockLen, suffix, outputLen));
const sha3_224 = /* @__PURE__ */ gen(0x06, 144, 224 / 8);
/**
 * SHA3-256 hash function
 * @param message - that would be hashed
 */
const sha3_256 = /* @__PURE__ */ gen(0x06, 136, 256 / 8);
const sha3_384 = /* @__PURE__ */ gen(0x06, 104, 384 / 8);
const sha3_512 = /* @__PURE__ */ gen(0x06, 72, 512 / 8);
const keccak_224 = /* @__PURE__ */ gen(0x01, 144, 224 / 8);
/**
 * keccak-256 hash function. Different from SHA3-256.
 * @param message - that would be hashed
 */
const keccak_256 = /* @__PURE__ */ gen(0x01, 136, 256 / 8);
const keccak_384 = /* @__PURE__ */ gen(0x01, 104, 384 / 8);
const keccak_512 = /* @__PURE__ */ gen(0x01, 72, 512 / 8);
const genShake = (suffix, blockLen, outputLen) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.wrapXOFConstructorWithOpts)((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true));
const shake128 = /* @__PURE__ */ genShake(0x1f, 168, 128 / 8);
const shake256 = /* @__PURE__ */ genShake(0x1f, 136, 256 / 8);
//# sourceMappingURL=sha3.js.map

/***/ }),
/* 23 */
/*!************************************************!*\
  !*** ./node_modules/@noble/hashes/esm/_u64.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   add3H: () => (/* binding */ add3H),
/* harmony export */   add3L: () => (/* binding */ add3L),
/* harmony export */   add4H: () => (/* binding */ add4H),
/* harmony export */   add4L: () => (/* binding */ add4L),
/* harmony export */   add5H: () => (/* binding */ add5H),
/* harmony export */   add5L: () => (/* binding */ add5L),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fromBig: () => (/* binding */ fromBig),
/* harmony export */   rotlBH: () => (/* binding */ rotlBH),
/* harmony export */   rotlBL: () => (/* binding */ rotlBL),
/* harmony export */   rotlSH: () => (/* binding */ rotlSH),
/* harmony export */   rotlSL: () => (/* binding */ rotlSL),
/* harmony export */   rotr32H: () => (/* binding */ rotr32H),
/* harmony export */   rotr32L: () => (/* binding */ rotr32L),
/* harmony export */   rotrBH: () => (/* binding */ rotrBH),
/* harmony export */   rotrBL: () => (/* binding */ rotrBL),
/* harmony export */   rotrSH: () => (/* binding */ rotrSH),
/* harmony export */   rotrSL: () => (/* binding */ rotrSL),
/* harmony export */   shrSH: () => (/* binding */ shrSH),
/* harmony export */   shrSL: () => (/* binding */ shrSL),
/* harmony export */   split: () => (/* binding */ split),
/* harmony export */   toBig: () => (/* binding */ toBig)
/* harmony export */ });
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
// We are not using BigUint64Array, because they are extremely slow as per 2022
function fromBig(n, le = false) {
    if (le)
        return { h: Number(n & U32_MASK64), l: Number((n >> _32n) & U32_MASK64) };
    return { h: Number((n >> _32n) & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for (let i = 0; i < lst.length; i++) {
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [h, l];
    }
    return [Ah, Al];
}
const toBig = (h, l) => (BigInt(h >>> 0) << _32n) | BigInt(l >>> 0);
// for Shift in [0, 32)
const shrSH = (h, _l, s) => h >>> s;
const shrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s) => (h >>> s) | (l << (32 - s));
const rotrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s) => (h << (64 - s)) | (l >>> (s - 32));
const rotrBL = (h, l, s) => (h >>> (s - 32)) | (l << (64 - s));
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l) => l;
const rotr32L = (h, _l) => h;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s) => (h << s) | (l >>> (32 - s));
const rotlSL = (h, l, s) => (l << s) | (h >>> (32 - s));
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s) => (l << (s - 32)) | (h >>> (64 - s));
const rotlBL = (h, l, s) => (h << (s - 32)) | (l >>> (64 - s));
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return { h: (Ah + Bh + ((l / 2 ** 32) | 0)) | 0, l: l | 0 };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch) => (Ah + Bh + Ch + ((low / 2 ** 32) | 0)) | 0;
const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh) => (Ah + Bh + Ch + Dh + ((low / 2 ** 32) | 0)) | 0;
const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh) => (Ah + Bh + Ch + Dh + Eh + ((low / 2 ** 32) | 0)) | 0;
// prettier-ignore

// prettier-ignore
const u64 = {
    fromBig, split, toBig,
    shrSH, shrSL,
    rotrSH, rotrSL, rotrBH, rotrBL,
    rotr32H, rotr32L,
    rotlSH, rotlSL, rotlBH, rotlBL,
    add, add3L, add3H, add4L, add4H, add5H, add5L,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (u64);
//# sourceMappingURL=_u64.js.map

/***/ }),
/* 24 */
/*!*************************************************!*\
  !*** ./node_modules/@noble/hashes/esm/utils.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hash: () => (/* binding */ Hash),
/* harmony export */   asyncLoop: () => (/* binding */ asyncLoop),
/* harmony export */   bytesToHex: () => (/* binding */ bytesToHex),
/* harmony export */   checkOpts: () => (/* binding */ checkOpts),
/* harmony export */   concatBytes: () => (/* binding */ concatBytes),
/* harmony export */   createView: () => (/* binding */ createView),
/* harmony export */   hexToBytes: () => (/* binding */ hexToBytes),
/* harmony export */   isLE: () => (/* binding */ isLE),
/* harmony export */   nextTick: () => (/* binding */ nextTick),
/* harmony export */   randomBytes: () => (/* binding */ randomBytes),
/* harmony export */   rotr: () => (/* binding */ rotr),
/* harmony export */   toBytes: () => (/* binding */ toBytes),
/* harmony export */   u32: () => (/* binding */ u32),
/* harmony export */   u8: () => (/* binding */ u8),
/* harmony export */   utf8ToBytes: () => (/* binding */ utf8ToBytes),
/* harmony export */   wrapConstructor: () => (/* binding */ wrapConstructor),
/* harmony export */   wrapConstructorWithOpts: () => (/* binding */ wrapConstructorWithOpts),
/* harmony export */   wrapXOFConstructorWithOpts: () => (/* binding */ wrapXOFConstructorWithOpts)
/* harmony export */ });
/* harmony import */ var _noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @noble/hashes/crypto */ 25);
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated, we can just drop the import.

const u8a = (a) => a instanceof Uint8Array;
// Cast array to different type
const u8 = (arr) => new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
const u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
// Cast array to view
const createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
// The rotate right (circular right shift) operation for uint32
const rotr = (word, shift) => (word << (32 - shift)) | (word >>> shift);
// big-endian hardware is rare. Just in case someone still decides to run hashes:
// early-throw an error because we don't support BE yet.
const isLE = new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44;
if (!isLE)
    throw new Error('Non little-endian hardware is not supported');
const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */
function bytesToHex(bytes) {
    if (!u8a(bytes))
        throw new Error('Uint8Array expected');
    // pre-caching improves the speed 6x
    let hex = '';
    for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
    }
    return hex;
}
/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */
function hexToBytes(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    const len = hex.length;
    if (len % 2)
        throw new Error('padded hex string expected, got unpadded hex of length ' + len);
    const array = new Uint8Array(len / 2);
    for (let i = 0; i < array.length; i++) {
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0)
            throw new Error('Invalid byte sequence');
        array[i] = byte;
    }
    return array;
}
// There is no setImmediate in browser and setTimeout is slow.
// call of async fn will return Promise, which will be fullfiled only on
// next scheduler queue processing step and this is exactly what we need.
const nextTick = async () => { };
// Returns control to thread each 'tick' ms to avoid blocking
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for (let i = 0; i < iters; i++) {
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick)
            continue;
        await nextTick();
        ts += diff;
    }
}
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */
function utf8ToBytes(str) {
    if (typeof str !== 'string')
        throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */
function toBytes(data) {
    if (typeof data === 'string')
        data = utf8ToBytes(data);
    if (!u8a(data))
        throw new Error(`expected Uint8Array, got ${typeof data}`);
    return data;
}
/**
 * Copies several Uint8Arrays into one.
 */
function concatBytes(...arrays) {
    const r = new Uint8Array(arrays.reduce((sum, a) => sum + a.length, 0));
    let pad = 0; // walk through each item, ensure they have proper type
    arrays.forEach((a) => {
        if (!u8a(a))
            throw new Error('Uint8Array expected');
        r.set(a, pad);
        pad += a.length;
    });
    return r;
}
// For runtime check if class implements interface
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
const toStr = {}.toString;
function checkOpts(defaults, opts) {
    if (opts !== undefined && toStr.call(opts) !== '[object Object]')
        throw new Error('Options should be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
function wrapConstructor(hashCons) {
    const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
}
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
}
function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
}
/**
 * Secure PRNG. Uses `crypto.getRandomValues`, which defers to OS.
 */
function randomBytes(bytesLength = 32) {
    if (_noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_0__.crypto && typeof _noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_0__.crypto.getRandomValues === 'function') {
        return _noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_0__.crypto.getRandomValues(new Uint8Array(bytesLength));
    }
    throw new Error('crypto.getRandomValues must be defined');
}
//# sourceMappingURL=utils.js.map

/***/ }),
/* 25 */
/*!**************************************************!*\
  !*** ./node_modules/@noble/hashes/esm/crypto.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   crypto: () => (/* binding */ crypto)
/* harmony export */ });
const crypto = typeof globalThis === 'object' && 'crypto' in globalThis ? globalThis.crypto : undefined;
//# sourceMappingURL=crypto.js.map

/***/ }),
/* 26 */
/*!***************************************************!*\
  !*** ./node_modules/@noble/hashes/esm/_assert.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bool: () => (/* binding */ bool),
/* harmony export */   bytes: () => (/* binding */ bytes),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   exists: () => (/* binding */ exists),
/* harmony export */   hash: () => (/* binding */ hash),
/* harmony export */   number: () => (/* binding */ number),
/* harmony export */   output: () => (/* binding */ output)
/* harmony export */ });
function number(n) {
    if (!Number.isSafeInteger(n) || n < 0)
        throw new Error(`Wrong positive integer: ${n}`);
}
function bool(b) {
    if (typeof b !== 'boolean')
        throw new Error(`Expected boolean, not ${b}`);
}
function bytes(b, ...lengths) {
    if (!(b instanceof Uint8Array))
        throw new Error('Expected Uint8Array');
    if (lengths.length > 0 && !lengths.includes(b.length))
        throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
function hash(hash) {
    if (typeof hash !== 'function' || typeof hash.create !== 'function')
        throw new Error('Hash should be wrapped by utils.wrapConstructor');
    number(hash.outputLen);
    number(hash.blockLen);
}
function exists(instance, checkFinished = true) {
    if (instance.destroyed)
        throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished)
        throw new Error('Hash#digest() has already been called');
}
function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error(`digestInto() expects output buffer of length at least ${min}`);
    }
}

const assert = { number, bool, bytes, hash, exists, output };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assert);
//# sourceMappingURL=_assert.js.map

/***/ }),
/* 27 */
/*!**********************************************************!*\
  !*** ./node_modules/viem/_esm/utils/encoding/toBytes.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boolToBytes: () => (/* binding */ boolToBytes),
/* harmony export */   hexToBytes: () => (/* binding */ hexToBytes),
/* harmony export */   numberToBytes: () => (/* binding */ numberToBytes),
/* harmony export */   stringToBytes: () => (/* binding */ stringToBytes),
/* harmony export */   toBytes: () => (/* binding */ toBytes)
/* harmony export */ });
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../errors/base.js */ 14);
/* harmony import */ var _data_isHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/isHex.js */ 11);
/* harmony import */ var _data_pad_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/pad.js */ 31);
/* harmony import */ var _fromHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromHex.js */ 28);
/* harmony import */ var _toHex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toHex.js */ 32);





const encoder = /*#__PURE__*/ new TextEncoder();
/**
 * Encodes a UTF-8 string, hex value, bigint, number or boolean to a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes.html
 * - Example: https://viem.sh/docs/utilities/toBytes.html#usage
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { toBytes } from 'viem'
 * const data = toBytes('Hello world')
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 *
 * @example
 * import { toBytes } from 'viem'
 * const data = toBytes(420)
 * // Uint8Array([1, 164])
 *
 * @example
 * import { toBytes } from 'viem'
 * const data = toBytes(420, { size: 4 })
 * // Uint8Array([0, 0, 1, 164])
 */
function toBytes(value, opts = {}) {
    if (typeof value === 'number' || typeof value === 'bigint')
        return numberToBytes(value, opts);
    if (typeof value === 'boolean')
        return boolToBytes(value, opts);
    if ((0,_data_isHex_js__WEBPACK_IMPORTED_MODULE_0__.isHex)(value))
        return hexToBytes(value, opts);
    return stringToBytes(value, opts);
}
/**
 * Encodes a boolean into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes.html#booltobytes
 *
 * @param value Boolean value to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { boolToBytes } from 'viem'
 * const data = boolToBytes(true)
 * // Uint8Array([1])
 *
 * @example
 * import { boolToBytes } from 'viem'
 * const data = boolToBytes(true, { size: 32 })
 * // Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
 */
function boolToBytes(value, opts = {}) {
    const bytes = new Uint8Array(1);
    bytes[0] = Number(value);
    if (typeof opts.size === 'number') {
        (0,_fromHex_js__WEBPACK_IMPORTED_MODULE_1__.assertSize)(bytes, { size: opts.size });
        return (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_2__.pad)(bytes, { size: opts.size });
    }
    return bytes;
}
// We use very optimized technique to convert hex string to byte array
const charCodeMap = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102,
};
function charCodeToBase16(char) {
    if (char >= charCodeMap.zero && char <= charCodeMap.nine)
        return char - charCodeMap.zero;
    else if (char >= charCodeMap.A && char <= charCodeMap.F)
        return char - (charCodeMap.A - 10);
    else if (char >= charCodeMap.a && char <= charCodeMap.f)
        return char - (charCodeMap.a - 10);
    return undefined;
}
/**
 * Encodes a hex string into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes.html#hextobytes
 *
 * @param hex Hex string to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { hexToBytes } from 'viem'
 * const data = hexToBytes('0x48656c6c6f20776f726c6421')
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 *
 * @example
 * import { hexToBytes } from 'viem'
 * const data = hexToBytes('0x48656c6c6f20776f726c6421', { size: 32 })
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
 */
function hexToBytes(hex_, opts = {}) {
    let hex = hex_;
    if (opts.size) {
        (0,_fromHex_js__WEBPACK_IMPORTED_MODULE_1__.assertSize)(hex, { size: opts.size });
        hex = (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_2__.pad)(hex, { dir: 'right', size: opts.size });
    }
    let hexString = hex.slice(2);
    if (hexString.length % 2)
        hexString = `0${hexString}`;
    const length = hexString.length / 2;
    const bytes = new Uint8Array(length);
    for (let index = 0, j = 0; index < length; index++) {
        const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
        const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
        if (nibbleLeft === undefined || nibbleRight === undefined) {
            throw new _errors_base_js__WEBPACK_IMPORTED_MODULE_3__.BaseError(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
        }
        bytes[index] = nibbleLeft * 16 + nibbleRight;
    }
    return bytes;
}
/**
 * Encodes a number into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes.html#numbertobytes
 *
 * @param value Number to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { numberToBytes } from 'viem'
 * const data = numberToBytes(420)
 * // Uint8Array([1, 164])
 *
 * @example
 * import { numberToBytes } from 'viem'
 * const data = numberToBytes(420, { size: 4 })
 * // Uint8Array([0, 0, 1, 164])
 */
function numberToBytes(value, opts) {
    const hex = (0,_toHex_js__WEBPACK_IMPORTED_MODULE_4__.numberToHex)(value, opts);
    return hexToBytes(hex);
}
/**
 * Encodes a UTF-8 string into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes.html#stringtobytes
 *
 * @param value String to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { stringToBytes } from 'viem'
 * const data = stringToBytes('Hello world!')
 * // Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 33])
 *
 * @example
 * import { stringToBytes } from 'viem'
 * const data = stringToBytes('Hello world!', { size: 32 })
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
 */
function stringToBytes(value, opts = {}) {
    const bytes = encoder.encode(value);
    if (typeof opts.size === 'number') {
        (0,_fromHex_js__WEBPACK_IMPORTED_MODULE_1__.assertSize)(bytes, { size: opts.size });
        return (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_2__.pad)(bytes, { dir: 'right', size: opts.size });
    }
    return bytes;
}
//# sourceMappingURL=toBytes.js.map

/***/ }),
/* 28 */
/*!**********************************************************!*\
  !*** ./node_modules/viem/_esm/utils/encoding/fromHex.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertSize: () => (/* binding */ assertSize),
/* harmony export */   fromHex: () => (/* binding */ fromHex),
/* harmony export */   hexToBigInt: () => (/* binding */ hexToBigInt),
/* harmony export */   hexToBool: () => (/* binding */ hexToBool),
/* harmony export */   hexToNumber: () => (/* binding */ hexToNumber),
/* harmony export */   hexToString: () => (/* binding */ hexToString)
/* harmony export */ });
/* harmony import */ var _errors_encoding_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors/encoding.js */ 29);
/* harmony import */ var _data_size_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/size.js */ 12);
/* harmony import */ var _data_trim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/trim.js */ 30);
/* harmony import */ var _toBytes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toBytes.js */ 27);




function assertSize(hexOrBytes, { size }) {
    if ((0,_data_size_js__WEBPACK_IMPORTED_MODULE_0__.size)(hexOrBytes) > size)
        throw new _errors_encoding_js__WEBPACK_IMPORTED_MODULE_1__.SizeOverflowError({
            givenSize: (0,_data_size_js__WEBPACK_IMPORTED_MODULE_0__.size)(hexOrBytes),
            maxSize: size,
        });
}
/**
 * Decodes a hex string into a string, number, bigint, boolean, or byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex.html
 * - Example: https://viem.sh/docs/utilities/fromHex.html#usage
 *
 * @param hex Hex string to decode.
 * @param toOrOpts Type to convert to or options.
 * @returns Decoded value.
 *
 * @example
 * import { fromHex } from 'viem'
 * const data = fromHex('0x1a4', 'number')
 * // 420
 *
 * @example
 * import { fromHex } from 'viem'
 * const data = fromHex('0x48656c6c6f20576f726c6421', 'string')
 * // 'Hello world'
 *
 * @example
 * import { fromHex } from 'viem'
 * const data = fromHex('0x48656c6c6f20576f726c64210000000000000000000000000000000000000000', {
 *   size: 32,
 *   to: 'string'
 * })
 * // 'Hello world'
 */
function fromHex(hex, toOrOpts) {
    const opts = typeof toOrOpts === 'string' ? { to: toOrOpts } : toOrOpts;
    const to = opts.to;
    if (to === 'number')
        return hexToNumber(hex, opts);
    if (to === 'bigint')
        return hexToBigInt(hex, opts);
    if (to === 'string')
        return hexToString(hex, opts);
    if (to === 'boolean')
        return hexToBool(hex, opts);
    return (0,_toBytes_js__WEBPACK_IMPORTED_MODULE_2__.hexToBytes)(hex, opts);
}
/**
 * Decodes a hex value into a bigint.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex.html#hextobigint
 *
 * @param hex Hex value to decode.
 * @param opts Options.
 * @returns BigInt value.
 *
 * @example
 * import { hexToBigInt } from 'viem'
 * const data = hexToBigInt('0x1a4', { signed: true })
 * // 420n
 *
 * @example
 * import { hexToBigInt } from 'viem'
 * const data = hexToBigInt('0x00000000000000000000000000000000000000000000000000000000000001a4', { size: 32 })
 * // 420n
 */
function hexToBigInt(hex, opts = {}) {
    const { signed } = opts;
    if (opts.size)
        assertSize(hex, { size: opts.size });
    const value = BigInt(hex);
    if (!signed)
        return value;
    const size = (hex.length - 2) / 2;
    const max = (1n << (BigInt(size) * 8n - 1n)) - 1n;
    if (value <= max)
        return value;
    return value - BigInt(`0x${'f'.padStart(size * 2, 'f')}`) - 1n;
}
/**
 * Decodes a hex value into a boolean.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex.html#hextobool
 *
 * @param hex Hex value to decode.
 * @param opts Options.
 * @returns Boolean value.
 *
 * @example
 * import { hexToBool } from 'viem'
 * const data = hexToBool('0x01')
 * // true
 *
 * @example
 * import { hexToBool } from 'viem'
 * const data = hexToBool('0x0000000000000000000000000000000000000000000000000000000000000001', { size: 32 })
 * // true
 */
function hexToBool(hex_, opts = {}) {
    let hex = hex_;
    if (opts.size) {
        assertSize(hex, { size: opts.size });
        hex = (0,_data_trim_js__WEBPACK_IMPORTED_MODULE_3__.trim)(hex);
    }
    if ((0,_data_trim_js__WEBPACK_IMPORTED_MODULE_3__.trim)(hex) === '0x00')
        return false;
    if ((0,_data_trim_js__WEBPACK_IMPORTED_MODULE_3__.trim)(hex) === '0x01')
        return true;
    throw new _errors_encoding_js__WEBPACK_IMPORTED_MODULE_1__.InvalidHexBooleanError(hex);
}
/**
 * Decodes a hex string into a number.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex.html#hextonumber
 *
 * @param hex Hex value to decode.
 * @param opts Options.
 * @returns Number value.
 *
 * @example
 * import { hexToNumber } from 'viem'
 * const data = hexToNumber('0x1a4')
 * // 420
 *
 * @example
 * import { hexToNumber } from 'viem'
 * const data = hexToBigInt('0x00000000000000000000000000000000000000000000000000000000000001a4', { size: 32 })
 * // 420
 */
function hexToNumber(hex, opts = {}) {
    return Number(hexToBigInt(hex, opts));
}
/**
 * Decodes a hex value into a UTF-8 string.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex.html#hextostring
 *
 * @param hex Hex value to decode.
 * @param opts Options.
 * @returns String value.
 *
 * @example
 * import { hexToString } from 'viem'
 * const data = hexToString('0x48656c6c6f20576f726c6421')
 * // 'Hello world!'
 *
 * @example
 * import { hexToString } from 'viem'
 * const data = hexToString('0x48656c6c6f20576f726c64210000000000000000000000000000000000000000', {
 *  size: 32,
 * })
 * // 'Hello world'
 */
function hexToString(hex, opts = {}) {
    let bytes = (0,_toBytes_js__WEBPACK_IMPORTED_MODULE_2__.hexToBytes)(hex);
    if (opts.size) {
        assertSize(bytes, { size: opts.size });
        bytes = (0,_data_trim_js__WEBPACK_IMPORTED_MODULE_3__.trim)(bytes, { dir: 'right' });
    }
    return new TextDecoder().decode(bytes);
}
//# sourceMappingURL=fromHex.js.map

/***/ }),
/* 29 */
/*!***************************************************!*\
  !*** ./node_modules/viem/_esm/errors/encoding.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataLengthTooLongError: () => (/* binding */ DataLengthTooLongError),
/* harmony export */   DataLengthTooShortError: () => (/* binding */ DataLengthTooShortError),
/* harmony export */   IntegerOutOfRangeError: () => (/* binding */ IntegerOutOfRangeError),
/* harmony export */   InvalidBytesBooleanError: () => (/* binding */ InvalidBytesBooleanError),
/* harmony export */   InvalidHexBooleanError: () => (/* binding */ InvalidHexBooleanError),
/* harmony export */   InvalidHexValueError: () => (/* binding */ InvalidHexValueError),
/* harmony export */   OffsetOutOfBoundsError: () => (/* binding */ OffsetOutOfBoundsError),
/* harmony export */   SizeOverflowError: () => (/* binding */ SizeOverflowError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 14);

/** @deprecated */
class DataLengthTooLongError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ consumed, length }) {
        super(`Consumed bytes (${consumed}) is shorter than data length (${length - 1}).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'DataLengthTooLongError'
        });
    }
}
/** @deprecated */
class DataLengthTooShortError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ length, dataLength }) {
        super(`Data length (${dataLength - 1}) is shorter than consumed bytes length (${length - 1}).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'DataLengthTooShortError'
        });
    }
}
class IntegerOutOfRangeError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ max, min, signed, size, value, }) {
        super(`Number "${value}" is not in safe ${size ? `${size * 8}-bit ${signed ? 'signed' : 'unsigned'} ` : ''}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'IntegerOutOfRangeError'
        });
    }
}
class InvalidBytesBooleanError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(bytes) {
        super(`Bytes value "${bytes}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidBytesBooleanError'
        });
    }
}
class InvalidHexBooleanError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(hex) {
        super(`Hex value "${hex}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidHexBooleanError'
        });
    }
}
class InvalidHexValueError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(value) {
        super(`Hex value "${value}" is an odd length (${value.length}). It must be an even length.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidHexValueError'
        });
    }
}
/** @deprecated */
class OffsetOutOfBoundsError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ nextOffset, offset }) {
        super(`Next offset (${nextOffset}) is greater than previous offset + consumed bytes (${offset})`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'OffsetOutOfBoundsError'
        });
    }
}
class SizeOverflowError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ givenSize, maxSize }) {
        super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SizeOverflowError'
        });
    }
}
//# sourceMappingURL=encoding.js.map

/***/ }),
/* 30 */
/*!***************************************************!*\
  !*** ./node_modules/viem/_esm/utils/data/trim.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   trim: () => (/* binding */ trim)
/* harmony export */ });
function trim(hexOrBytes, { dir = 'left' } = {}) {
    let data = typeof hexOrBytes === 'string' ? hexOrBytes.replace('0x', '') : hexOrBytes;
    let sliceLength = 0;
    for (let i = 0; i < data.length - 1; i++) {
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0')
            sliceLength++;
        else
            break;
    }
    data =
        dir === 'left'
            ? data.slice(sliceLength)
            : data.slice(0, data.length - sliceLength);
    if (typeof hexOrBytes === 'string') {
        if (data.length === 1 && dir === 'right')
            data = `${data}0`;
        return `0x${data.length % 2 === 1 ? `0${data}` : data}`;
    }
    return data;
}
//# sourceMappingURL=trim.js.map

/***/ }),
/* 31 */
/*!**************************************************!*\
  !*** ./node_modules/viem/_esm/utils/data/pad.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pad: () => (/* binding */ pad),
/* harmony export */   padBytes: () => (/* binding */ padBytes),
/* harmony export */   padHex: () => (/* binding */ padHex)
/* harmony export */ });
/* harmony import */ var _errors_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors/data.js */ 13);

function pad(hexOrBytes, { dir, size = 32 } = {}) {
    if (typeof hexOrBytes === 'string')
        return padHex(hexOrBytes, { dir, size });
    return padBytes(hexOrBytes, { dir, size });
}
function padHex(hex_, { dir, size = 32 } = {}) {
    if (size === null)
        return hex_;
    const hex = hex_.replace('0x', '');
    if (hex.length > size * 2)
        throw new _errors_data_js__WEBPACK_IMPORTED_MODULE_0__.SizeExceedsPaddingSizeError({
            size: Math.ceil(hex.length / 2),
            targetSize: size,
            type: 'hex',
        });
    return `0x${hex[dir === 'right' ? 'padEnd' : 'padStart'](size * 2, '0')}`;
}
function padBytes(bytes, { dir, size = 32 } = {}) {
    if (size === null)
        return bytes;
    if (bytes.length > size)
        throw new _errors_data_js__WEBPACK_IMPORTED_MODULE_0__.SizeExceedsPaddingSizeError({
            size: bytes.length,
            targetSize: size,
            type: 'bytes',
        });
    const paddedBytes = new Uint8Array(size);
    for (let i = 0; i < size; i++) {
        const padEnd = dir === 'right';
        paddedBytes[padEnd ? i : size - i - 1] =
            bytes[padEnd ? i : bytes.length - i - 1];
    }
    return paddedBytes;
}
//# sourceMappingURL=pad.js.map

/***/ }),
/* 32 */
/*!********************************************************!*\
  !*** ./node_modules/viem/_esm/utils/encoding/toHex.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boolToHex: () => (/* binding */ boolToHex),
/* harmony export */   bytesToHex: () => (/* binding */ bytesToHex),
/* harmony export */   numberToHex: () => (/* binding */ numberToHex),
/* harmony export */   stringToHex: () => (/* binding */ stringToHex),
/* harmony export */   toHex: () => (/* binding */ toHex)
/* harmony export */ });
/* harmony import */ var _errors_encoding_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors/encoding.js */ 29);
/* harmony import */ var _data_pad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/pad.js */ 31);
/* harmony import */ var _fromHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromHex.js */ 28);



const hexes = /*#__PURE__*/ Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, '0'));
/**
 * Encodes a string, number, bigint, or ByteArray into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex.html
 * - Example: https://viem.sh/docs/utilities/toHex.html#usage
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { toHex } from 'viem'
 * const data = toHex('Hello world')
 * // '0x48656c6c6f20776f726c6421'
 *
 * @example
 * import { toHex } from 'viem'
 * const data = toHex(420)
 * // '0x1a4'
 *
 * @example
 * import { toHex } from 'viem'
 * const data = toHex('Hello world', { size: 32 })
 * // '0x48656c6c6f20776f726c64210000000000000000000000000000000000000000'
 */
function toHex(value, opts = {}) {
    if (typeof value === 'number' || typeof value === 'bigint')
        return numberToHex(value, opts);
    if (typeof value === 'string') {
        return stringToHex(value, opts);
    }
    if (typeof value === 'boolean')
        return boolToHex(value, opts);
    return bytesToHex(value, opts);
}
/**
 * Encodes a boolean into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex.html#booltohex
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { boolToHex } from 'viem'
 * const data = boolToHex(true)
 * // '0x1'
 *
 * @example
 * import { boolToHex } from 'viem'
 * const data = boolToHex(false)
 * // '0x0'
 *
 * @example
 * import { boolToHex } from 'viem'
 * const data = boolToHex(true, { size: 32 })
 * // '0x0000000000000000000000000000000000000000000000000000000000000001'
 */
function boolToHex(value, opts = {}) {
    const hex = `0x${Number(value)}`;
    if (typeof opts.size === 'number') {
        (0,_fromHex_js__WEBPACK_IMPORTED_MODULE_0__.assertSize)(hex, { size: opts.size });
        return (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_1__.pad)(hex, { size: opts.size });
    }
    return hex;
}
/**
 * Encodes a bytes array into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex.html#bytestohex
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { bytesToHex } from 'viem'
 * const data = bytesToHex(Uint8Array.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 * // '0x48656c6c6f20576f726c6421'
 *
 * @example
 * import { bytesToHex } from 'viem'
 * const data = bytesToHex(Uint8Array.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]), { size: 32 })
 * // '0x48656c6c6f20576f726c64210000000000000000000000000000000000000000'
 */
function bytesToHex(value, opts = {}) {
    let string = '';
    for (let i = 0; i < value.length; i++) {
        string += hexes[value[i]];
    }
    const hex = `0x${string}`;
    if (typeof opts.size === 'number') {
        (0,_fromHex_js__WEBPACK_IMPORTED_MODULE_0__.assertSize)(hex, { size: opts.size });
        return (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_1__.pad)(hex, { dir: 'right', size: opts.size });
    }
    return hex;
}
/**
 * Encodes a number or bigint into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex.html#numbertohex
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { numberToHex } from 'viem'
 * const data = numberToHex(420)
 * // '0x1a4'
 *
 * @example
 * import { numberToHex } from 'viem'
 * const data = numberToHex(420, { size: 32 })
 * // '0x00000000000000000000000000000000000000000000000000000000000001a4'
 */
function numberToHex(value_, opts = {}) {
    const { signed, size } = opts;
    const value = BigInt(value_);
    let maxValue;
    if (size) {
        if (signed)
            maxValue = (1n << (BigInt(size) * 8n - 1n)) - 1n;
        else
            maxValue = 2n ** (BigInt(size) * 8n) - 1n;
    }
    else if (typeof value_ === 'number') {
        maxValue = BigInt(Number.MAX_SAFE_INTEGER);
    }
    const minValue = typeof maxValue === 'bigint' && signed ? -maxValue - 1n : 0;
    if ((maxValue && value > maxValue) || value < minValue) {
        const suffix = typeof value_ === 'bigint' ? 'n' : '';
        throw new _errors_encoding_js__WEBPACK_IMPORTED_MODULE_2__.IntegerOutOfRangeError({
            max: maxValue ? `${maxValue}${suffix}` : undefined,
            min: `${minValue}${suffix}`,
            signed,
            size,
            value: `${value_}${suffix}`,
        });
    }
    const hex = `0x${(signed && value < 0
        ? (1n << BigInt(size * 8)) + BigInt(value)
        : value).toString(16)}`;
    if (size)
        return (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_1__.pad)(hex, { size });
    return hex;
}
const encoder = /*#__PURE__*/ new TextEncoder();
/**
 * Encodes a UTF-8 string into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex.html#stringtohex
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { stringToHex } from 'viem'
 * const data = stringToHex('Hello World!')
 * // '0x48656c6c6f20576f726c6421'
 *
 * @example
 * import { stringToHex } from 'viem'
 * const data = stringToHex('Hello World!', { size: 32 })
 * // '0x48656c6c6f20576f726c64210000000000000000000000000000000000000000'
 */
function stringToHex(value_, opts = {}) {
    const value = encoder.encode(value_);
    return bytesToHex(value, opts);
}
//# sourceMappingURL=toHex.js.map

/***/ }),
/* 33 */
/*!*******************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/hash/getFunctionSignature.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFunctionSignature: () => (/* binding */ getFunctionSignature)
/* harmony export */ });
/* harmony import */ var _abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abi/formatAbiItem.js */ 18);
/* harmony import */ var _contract_extractFunctionParts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contract/extractFunctionParts.js */ 34);


const getFunctionSignature = (fn) => {
    if (typeof fn === 'string') {
        const name = (0,_contract_extractFunctionParts_js__WEBPACK_IMPORTED_MODULE_0__.extractFunctionName)(fn);
        const params = (0,_contract_extractFunctionParts_js__WEBPACK_IMPORTED_MODULE_0__.extractFunctionParams)(fn) || [];
        return `${name}(${params.map(({ type }) => type).join(',')})`;
    }
    return (0,_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_1__.formatAbiItem)(fn);
};
//# sourceMappingURL=getFunctionSignature.js.map

/***/ }),
/* 34 */
/*!***********************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/contract/extractFunctionParts.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractFunctionName: () => (/* binding */ extractFunctionName),
/* harmony export */   extractFunctionParams: () => (/* binding */ extractFunctionParams),
/* harmony export */   extractFunctionParts: () => (/* binding */ extractFunctionParts),
/* harmony export */   extractFunctionType: () => (/* binding */ extractFunctionType)
/* harmony export */ });
const paramsRegex = /((function|event)\s)?(.*)(\((.*)\))/;
function extractFunctionParts(def) {
    const parts = def.match(paramsRegex);
    const type = parts?.[2] || undefined;
    const name = parts?.[3];
    const params = parts?.[5] || undefined;
    return { type, name, params };
}
function extractFunctionName(def) {
    return extractFunctionParts(def).name;
}
function extractFunctionParams(def) {
    const params = extractFunctionParts(def).params;
    const splitParams = params?.split(',').map((x) => x.trim().split(' '));
    return splitParams?.map((param) => ({
        type: param[0],
        name: param[1] === 'indexed' ? param[2] : param[1],
        ...(param[1] === 'indexed' ? { indexed: true } : {}),
    }));
}
function extractFunctionType(def) {
    return extractFunctionParts(def).type;
}
//# sourceMappingURL=extractFunctionParts.js.map

/***/ }),
/* 35 */
/*!*****************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/abi/decodeAbiParameters.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodeAbiParameters: () => (/* binding */ decodeAbiParameters)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors/abi.js */ 17);
/* harmony import */ var _address_getAddress_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../address/getAddress.js */ 40);
/* harmony import */ var _data_size_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/size.js */ 12);
/* harmony import */ var _data_slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/slice.js */ 10);
/* harmony import */ var _data_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/trim.js */ 30);
/* harmony import */ var _encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../encoding/fromHex.js */ 28);
/* harmony import */ var _encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./encodeAbiParameters.js */ 36);







function decodeAbiParameters(params, data) {
    if (data === '0x' && params.length > 0)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__.AbiDecodingZeroDataError();
    if ((0,_data_size_js__WEBPACK_IMPORTED_MODULE_1__.size)(data) && (0,_data_size_js__WEBPACK_IMPORTED_MODULE_1__.size)(data) < 32)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__.AbiDecodingDataSizeTooSmallError({
            data,
            params: params,
            size: (0,_data_size_js__WEBPACK_IMPORTED_MODULE_1__.size)(data),
        });
    return decodeParams({
        data,
        params: params,
    });
}
function decodeParams({ data, params, }) {
    const decodedValues = [];
    let position = 0;
    for (let i = 0; i < params.length; i++) {
        if (position >= (0,_data_size_js__WEBPACK_IMPORTED_MODULE_1__.size)(data))
            throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__.AbiDecodingDataSizeTooSmallError({
                data,
                params,
                size: (0,_data_size_js__WEBPACK_IMPORTED_MODULE_1__.size)(data),
            });
        const param = params[i];
        const { consumed, value } = decodeParam({ data, param, position });
        decodedValues.push(value);
        // Step across the data by the amount of data consumed by this parameter.
        position += consumed;
    }
    return decodedValues;
}
function decodeParam({ data, param, position, }) {
    const arrayComponents = (0,_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_2__.getArrayComponents)(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return decodeArray(data, {
            length,
            param: { ...param, type: type },
            position,
        });
    }
    if (param.type === 'tuple') {
        return decodeTuple(data, { param: param, position });
    }
    if (param.type === 'string') {
        return decodeString(data, { position });
    }
    if (param.type.startsWith('bytes')) {
        return decodeBytes(data, { param, position });
    }
    const value = (0,_data_slice_js__WEBPACK_IMPORTED_MODULE_3__.slice)(data, position, position + 32, { strict: true });
    if (param.type.startsWith('uint') || param.type.startsWith('int')) {
        return decodeNumber(value, { param });
    }
    if (param.type === 'address') {
        return decodeAddress(value);
    }
    if (param.type === 'bool') {
        return decodeBool(value);
    }
    throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__.InvalidAbiDecodingTypeError(param.type, {
        docsPath: '/docs/contract/decodeAbiParameters',
    });
}
function decodeAddress(value) {
    return { consumed: 32, value: (0,_address_getAddress_js__WEBPACK_IMPORTED_MODULE_4__.checksumAddress)((0,_data_slice_js__WEBPACK_IMPORTED_MODULE_3__.slice)(value, -20)) };
}
function decodeArray(data, { param, length, position, }) {
    // If the length of the array is not known in advance (dynamic array),
    // we will need to decode the offset of the array data.
    if (!length) {
        // Get the offset of the array data.
        const offset = (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_5__.hexToNumber)((0,_data_slice_js__WEBPACK_IMPORTED_MODULE_3__.slice)(data, position, position + 32, { strict: true }));
        // Get the length of the array from the offset.
        const length = (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_5__.hexToNumber)((0,_data_slice_js__WEBPACK_IMPORTED_MODULE_3__.slice)(data, offset, offset + 32, { strict: true }));
        let consumed = 0;
        const value = [];
        for (let i = 0; i < length; ++i) {
            const decodedChild = decodeParam({
                data: (0,_data_slice_js__WEBPACK_IMPORTED_MODULE_3__.slice)(data, offset + 32),
                param,
                position: consumed,
            });
            consumed += decodedChild.consumed;
            value.push(decodedChild.value);
        }
        return { value, consumed: 32 };
    }
    // If the length of the array is known in advance,
    // and the length of an element deeply nested in the array is not known,
    // we need to decode the offset of the array data.
    if (hasDynamicChild(param)) {
        // Get the child type of the array.
        const arrayComponents = (0,_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_2__.getArrayComponents)(param.type);
        // If the child type is not known, the array is dynamic.
        const dynamicChild = !arrayComponents?.[0];
        let consumed = 0;
        const value = [];
        for (let i = 0; i < length; ++i) {
            const offset = (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_5__.hexToNumber)((0,_data_slice_js__WEBPACK_IMPORTED_MODULE_3__.slice)(data, position, position + 32, { strict: true }));
            const decodedChild = decodeParam({
                data: (0,_data_slice_js__WEBPACK_IMPORTED_MODULE_3__.slice)(data, offset),
                param,
                position: dynamicChild ? consumed : i * 32,
            });
            consumed += decodedChild.consumed;
            value.push(decodedChild.value);
        }
        return { value, consumed: 32 };
    }
    // If the length of the array is known in advance,
    // and the length of each element in the array is known,
    // the array data is encoded contiguously after the array.
    let consumed = 0;
    const value = [];
    for (let i = 0; i < length; ++i) {
        const decodedChild = decodeParam({
            data,
            param,
            position: position + consumed,
        });
        consumed += decodedChild.consumed;
        value.push(decodedChild.value);
    }
    return { value, consumed };
}
function decodeBool(value) {
    return { consumed: 32, value: (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_5__.hexToBool)(value) };
}
function decodeBytes(data, { param, position }) {
    const [_, size] = param.type.split('bytes');
    if (!size) {
        // If we don't have a size, we're dealing with a dynamic-size array
        // so we need to read the offset of the data part first.
        const offset = (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_5__.hexToNumber)((0,_data_slice_js__WEBPACK_IMPORTED_MODULE_3__.slice)(data, position, position + 32, { strict: true }));
        const length = (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_5__.hexToNumber)((0,_data_slice_js__WEBPACK_IMPORTED_MODULE_3__.slice)(data, offset, offset + 32, { strict: true }));
        // If there is no length, we have zero data.
        if (length === 0)
            return { consumed: 32, value: '0x' };
        const value = (0,_data_slice_js__WEBPACK_IMPORTED_MODULE_3__.slice)(data, offset + 32, offset + 32 + length, {
            strict: true,
        });
        return { consumed: 32, value };
    }
    const value = (0,_data_slice_js__WEBPACK_IMPORTED_MODULE_3__.slice)(data, position, position + parseInt(size), {
        strict: true,
    });
    return { consumed: 32, value };
}
function decodeNumber(value, { param }) {
    const signed = param.type.startsWith('int');
    const size = parseInt(param.type.split('int')[1] || '256');
    return {
        consumed: 32,
        value: size > 48
            ? (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_5__.hexToBigInt)(value, { signed })
            : (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_5__.hexToNumber)(value, { signed }),
    };
}
function decodeString(data, { position }) {
    const offset = (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_5__.hexToNumber)((0,_data_slice_js__WEBPACK_IMPORTED_MODULE_3__.slice)(data, position, position + 32, { strict: true }));
    const length = (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_5__.hexToNumber)((0,_data_slice_js__WEBPACK_IMPORTED_MODULE_3__.slice)(data, offset, offset + 32, { strict: true }));
    // If there is no length, we have zero data (empty string).
    if (length === 0)
        return { consumed: 32, value: '' };
    const value = (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_5__.hexToString)((0,_data_trim_js__WEBPACK_IMPORTED_MODULE_6__.trim)((0,_data_slice_js__WEBPACK_IMPORTED_MODULE_3__.slice)(data, offset + 32, offset + 32 + length, { strict: true })));
    return { consumed: 32, value };
}
function decodeTuple(data, { param, position }) {
    // Tuples can have unnamed components (i.e. they are arrays), so we must
    // determine whether the tuple is named or unnamed. In the case of a named
    // tuple, the value will be an object where each property is the name of the
    // component. In the case of an unnamed tuple, the value will be an array.
    const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name }) => !name);
    // Initialize the value to an object or an array, depending on whether the
    // tuple is named or unnamed.
    const value = hasUnnamedChild ? [] : {};
    let consumed = 0;
    // If the tuple has a dynamic child, we must first decode the offset to the
    // tuple data.
    if (hasDynamicChild(param)) {
        const offset = (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_5__.hexToNumber)((0,_data_slice_js__WEBPACK_IMPORTED_MODULE_3__.slice)(data, position, position + 32, { strict: true }));
        // Decode each component of the tuple, starting at the offset.
        for (let i = 0; i < param.components.length; ++i) {
            const component = param.components[i];
            const decodedChild = decodeParam({
                data: (0,_data_slice_js__WEBPACK_IMPORTED_MODULE_3__.slice)(data, offset),
                param: component,
                position: consumed,
            });
            consumed += decodedChild.consumed;
            value[hasUnnamedChild ? i : component?.name] = decodedChild.value;
        }
        return { consumed: 32, value };
    }
    // If the tuple has static children, we can just decode each component
    // in sequence.
    for (let i = 0; i < param.components.length; ++i) {
        const component = param.components[i];
        const decodedChild = decodeParam({
            data,
            param: component,
            position: position + consumed,
        });
        consumed += decodedChild.consumed;
        value[hasUnnamedChild ? i : component?.name] = decodedChild.value;
    }
    return { consumed, value };
}
function hasDynamicChild(param) {
    const { type } = param;
    if (type === 'string')
        return true;
    if (type === 'bytes')
        return true;
    if (type.endsWith('[]'))
        return true;
    if (type === 'tuple')
        return param.components?.some(hasDynamicChild);
    const arrayComponents = (0,_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_2__.getArrayComponents)(param.type);
    if (arrayComponents &&
        hasDynamicChild({ ...param, type: arrayComponents[1] }))
        return true;
    return false;
}
//# sourceMappingURL=decodeAbiParameters.js.map

/***/ }),
/* 36 */
/*!*****************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/abi/encodeAbiParameters.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodeAbiParameters: () => (/* binding */ encodeAbiParameters),
/* harmony export */   getArrayComponents: () => (/* binding */ getArrayComponents)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors/abi.js */ 17);
/* harmony import */ var _errors_address_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../errors/address.js */ 39);
/* harmony import */ var _address_isAddress_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../address/isAddress.js */ 38);
/* harmony import */ var _data_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/concat.js */ 37);
/* harmony import */ var _data_pad_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/pad.js */ 31);
/* harmony import */ var _data_size_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/size.js */ 12);
/* harmony import */ var _data_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/slice.js */ 10);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoding/toHex.js */ 32);








/**
 * @description Encodes a list of primitive values into an ABI-encoded hex value.
 */
function encodeAbiParameters(params, values) {
    if (params.length !== values.length)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__.AbiEncodingLengthMismatchError({
            expectedLength: params.length,
            givenLength: values.length,
        });
    // Prepare the parameters to determine dynamic types to encode.
    const preparedParams = prepareParams({
        params: params,
        values,
    });
    const data = encodeParams(preparedParams);
    if (data.length === 0)
        return '0x';
    return data;
}
function prepareParams({ params, values, }) {
    const preparedParams = [];
    for (let i = 0; i < params.length; i++) {
        preparedParams.push(prepareParam({ param: params[i], value: values[i] }));
    }
    return preparedParams;
}
function prepareParam({ param, value, }) {
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return encodeArray(value, { length, param: { ...param, type } });
    }
    if (param.type === 'tuple') {
        return encodeTuple(value, {
            param: param,
        });
    }
    if (param.type === 'address') {
        return encodeAddress(value);
    }
    if (param.type === 'bool') {
        return encodeBool(value);
    }
    if (param.type.startsWith('uint') || param.type.startsWith('int')) {
        const signed = param.type.startsWith('int');
        return encodeNumber(value, { signed });
    }
    if (param.type.startsWith('bytes')) {
        return encodeBytes(value, { param });
    }
    if (param.type === 'string') {
        return encodeString(value);
    }
    throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__.InvalidAbiEncodingTypeError(param.type, {
        docsPath: '/docs/contract/encodeAbiParameters',
    });
}
function encodeParams(preparedParams) {
    // 1. Compute the size of the static part of the parameters.
    let staticSize = 0;
    for (let i = 0; i < preparedParams.length; i++) {
        const { dynamic, encoded } = preparedParams[i];
        if (dynamic)
            staticSize += 32;
        else
            staticSize += (0,_data_size_js__WEBPACK_IMPORTED_MODULE_1__.size)(encoded);
    }
    // 2. Split the parameters into static and dynamic parts.
    const staticParams = [];
    const dynamicParams = [];
    let dynamicSize = 0;
    for (let i = 0; i < preparedParams.length; i++) {
        const { dynamic, encoded } = preparedParams[i];
        if (dynamic) {
            staticParams.push((0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__.numberToHex)(staticSize + dynamicSize, { size: 32 }));
            dynamicParams.push(encoded);
            dynamicSize += (0,_data_size_js__WEBPACK_IMPORTED_MODULE_1__.size)(encoded);
        }
        else {
            staticParams.push(encoded);
        }
    }
    // 3. Concatenate static and dynamic parts.
    return (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_3__.concat)([...staticParams, ...dynamicParams]);
}
function encodeAddress(value) {
    if (!(0,_address_isAddress_js__WEBPACK_IMPORTED_MODULE_4__.isAddress)(value))
        throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_5__.InvalidAddressError({ address: value });
    return { dynamic: false, encoded: (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__.padHex)(value.toLowerCase()) };
}
function encodeArray(value, { length, param, }) {
    const dynamic = length === null;
    if (!Array.isArray(value))
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__.InvalidArrayError(value);
    if (!dynamic && value.length !== length)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__.AbiEncodingArrayLengthMismatchError({
            expectedLength: length,
            givenLength: value.length,
            type: `${param.type}[${length}]`,
        });
    let dynamicChild = false;
    const preparedParams = [];
    for (let i = 0; i < value.length; i++) {
        const preparedParam = prepareParam({ param, value: value[i] });
        if (preparedParam.dynamic)
            dynamicChild = true;
        preparedParams.push(preparedParam);
    }
    if (dynamic || dynamicChild) {
        const data = encodeParams(preparedParams);
        if (dynamic) {
            const length = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__.numberToHex)(preparedParams.length, { size: 32 });
            return {
                dynamic: true,
                encoded: preparedParams.length > 0 ? (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_3__.concat)([length, data]) : length,
            };
        }
        if (dynamicChild)
            return { dynamic: true, encoded: data };
    }
    return {
        dynamic: false,
        encoded: (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_3__.concat)(preparedParams.map(({ encoded }) => encoded)),
    };
}
function encodeBytes(value, { param }) {
    const [, paramSize] = param.type.split('bytes');
    const bytesSize = (0,_data_size_js__WEBPACK_IMPORTED_MODULE_1__.size)(value);
    if (!paramSize) {
        let value_ = value;
        // If the size is not divisible by 32 bytes, pad the end
        // with empty bytes to the ceiling 32 bytes.
        if (bytesSize % 32 !== 0)
            value_ = (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__.padHex)(value_, {
                dir: 'right',
                size: Math.ceil((value.length - 2) / 2 / 32) * 32,
            });
        return {
            dynamic: true,
            encoded: (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_3__.concat)([(0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__.padHex)((0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__.numberToHex)(bytesSize, { size: 32 })), value_]),
        };
    }
    if (bytesSize !== parseInt(paramSize))
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__.AbiEncodingBytesSizeMismatchError({
            expectedSize: parseInt(paramSize),
            value,
        });
    return { dynamic: false, encoded: (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__.padHex)(value, { dir: 'right' }) };
}
function encodeBool(value) {
    return { dynamic: false, encoded: (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__.padHex)((0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__.boolToHex)(value)) };
}
function encodeNumber(value, { signed }) {
    return {
        dynamic: false,
        encoded: (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__.numberToHex)(value, {
            size: 32,
            signed,
        }),
    };
}
function encodeString(value) {
    const hexValue = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__.stringToHex)(value);
    const partsLength = Math.ceil((0,_data_size_js__WEBPACK_IMPORTED_MODULE_1__.size)(hexValue) / 32);
    const parts = [];
    for (let i = 0; i < partsLength; i++) {
        parts.push((0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__.padHex)((0,_data_slice_js__WEBPACK_IMPORTED_MODULE_7__.slice)(hexValue, i * 32, (i + 1) * 32), {
            dir: 'right',
        }));
    }
    return {
        dynamic: true,
        encoded: (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_3__.concat)([
            (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_6__.padHex)((0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__.numberToHex)((0,_data_size_js__WEBPACK_IMPORTED_MODULE_1__.size)(hexValue), { size: 32 })),
            ...parts,
        ]),
    };
}
function encodeTuple(value, { param }) {
    let dynamic = false;
    const preparedParams = [];
    for (let i = 0; i < param.components.length; i++) {
        const param_ = param.components[i];
        const index = Array.isArray(value) ? i : param_.name;
        const preparedParam = prepareParam({
            param: param_,
            value: value[index],
        });
        preparedParams.push(preparedParam);
        if (preparedParam.dynamic)
            dynamic = true;
    }
    return {
        dynamic,
        encoded: dynamic
            ? encodeParams(preparedParams)
            : (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_3__.concat)(preparedParams.map(({ encoded }) => encoded)),
    };
}
function getArrayComponents(type) {
    const matches = type.match(/^(.*)\[(\d+)?\]$/);
    return matches
        ? // Return `null` if the array is dynamic.
            [matches[2] ? Number(matches[2]) : null, matches[1]]
        : undefined;
}
//# sourceMappingURL=encodeAbiParameters.js.map

/***/ }),
/* 37 */
/*!*****************************************************!*\
  !*** ./node_modules/viem/_esm/utils/data/concat.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   concat: () => (/* binding */ concat),
/* harmony export */   concatBytes: () => (/* binding */ concatBytes),
/* harmony export */   concatHex: () => (/* binding */ concatHex)
/* harmony export */ });
function concat(values) {
    if (typeof values[0] === 'string')
        return concatHex(values);
    return concatBytes(values);
}
function concatBytes(values) {
    let length = 0;
    for (const arr of values) {
        length += arr.length;
    }
    const result = new Uint8Array(length);
    let offset = 0;
    for (const arr of values) {
        result.set(arr, offset);
        offset += arr.length;
    }
    return result;
}
function concatHex(values) {
    return `0x${values.reduce((acc, x) => acc + x.replace('0x', ''), '')}`;
}
//# sourceMappingURL=concat.js.map

/***/ }),
/* 38 */
/*!***********************************************************!*\
  !*** ./node_modules/viem/_esm/utils/address/isAddress.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAddress: () => (/* binding */ isAddress)
/* harmony export */ });
const addressRegex = /^0x[a-fA-F0-9]{40}$/;
function isAddress(address) {
    return addressRegex.test(address);
}
//# sourceMappingURL=isAddress.js.map

/***/ }),
/* 39 */
/*!**************************************************!*\
  !*** ./node_modules/viem/_esm/errors/address.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvalidAddressError: () => (/* binding */ InvalidAddressError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 14);

class InvalidAddressError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ address }) {
        super(`Address "${address}" is invalid.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAddressError'
        });
    }
}
//# sourceMappingURL=address.js.map

/***/ }),
/* 40 */
/*!************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/address/getAddress.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checksumAddress: () => (/* binding */ checksumAddress),
/* harmony export */   getAddress: () => (/* binding */ getAddress)
/* harmony export */ });
/* harmony import */ var _errors_address_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../errors/address.js */ 39);
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../encoding/toBytes.js */ 27);
/* harmony import */ var _hash_keccak256_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hash/keccak256.js */ 21);
/* harmony import */ var _isAddress_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isAddress.js */ 38);




function checksumAddress(address_, chainId) {
    const hexAddress = chainId
        ? `${chainId}${address_.toLowerCase()}`
        : address_.substring(2).toLowerCase();
    const hash = (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_0__.keccak256)((0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_1__.stringToBytes)(hexAddress), 'bytes');
    const address = (chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress).split('');
    for (let i = 0; i < 40; i += 2) {
        if (hash[i >> 1] >> 4 >= 8 && address[i]) {
            address[i] = address[i].toUpperCase();
        }
        if ((hash[i >> 1] & 0x0f) >= 8 && address[i + 1]) {
            address[i + 1] = address[i + 1].toUpperCase();
        }
    }
    return `0x${address.join('')}`;
}
function getAddress(address, chainId) {
    if (!(0,_isAddress_js__WEBPACK_IMPORTED_MODULE_2__.isAddress)(address))
        throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_3__.InvalidAddressError({ address });
    return checksumAddress(address, chainId);
}
//# sourceMappingURL=getAddress.js.map

/***/ }),
/* 41 */
/*!****************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/address/isAddressEqual.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAddressEqual: () => (/* binding */ isAddressEqual)
/* harmony export */ });
/* harmony import */ var _errors_address_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors/address.js */ 39);
/* harmony import */ var _isAddress_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isAddress.js */ 38);


function isAddressEqual(a, b) {
    if (!(0,_isAddress_js__WEBPACK_IMPORTED_MODULE_0__.isAddress)(a))
        throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_1__.InvalidAddressError({ address: a });
    if (!(0,_isAddress_js__WEBPACK_IMPORTED_MODULE_0__.isAddress)(b))
        throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_1__.InvalidAddressError({ address: b });
    return a.toLowerCase() === b.toLowerCase();
}
//# sourceMappingURL=isAddressEqual.js.map

/***/ }),
/* 42 */
/*!***********************************************!*\
  !*** ./node_modules/viem/_esm/errors/ccip.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OffchainLookupError: () => (/* binding */ OffchainLookupError),
/* harmony export */   OffchainLookupResponseMalformedError: () => (/* binding */ OffchainLookupResponseMalformedError),
/* harmony export */   OffchainLookupSenderMismatchError: () => (/* binding */ OffchainLookupSenderMismatchError)
/* harmony export */ });
/* harmony import */ var _utils_stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/stringify.js */ 43);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 14);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ 15);



class OffchainLookupError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ callbackSelector, cause, data, extraData, sender, urls, }) {
        super(cause.shortMessage ||
            'An error occurred while fetching for an offchain result.', {
            cause,
            metaMessages: [
                ...(cause.metaMessages || []),
                cause.metaMessages?.length ? '' : [],
                'Offchain Gateway Call:',
                urls && [
                    '  Gateway URL(s):',
                    ...urls.map((url) => `    ${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getUrl)(url)}`),
                ],
                `  Sender: ${sender}`,
                `  Data: ${data}`,
                `  Callback selector: ${callbackSelector}`,
                `  Extra data: ${extraData}`,
            ].flat(),
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'OffchainLookupError'
        });
    }
}
class OffchainLookupResponseMalformedError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ result, url }) {
        super('Offchain gateway response is malformed. Response data must be a hex value.', {
            metaMessages: [
                `Gateway URL: ${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getUrl)(url)}`,
                `Response: ${(0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_2__.stringify)(result)}`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'OffchainLookupResponseMalformedError'
        });
    }
}
class OffchainLookupSenderMismatchError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ sender, to }) {
        super('Reverted sender address does not match target contract address (`to`).', {
            metaMessages: [
                `Contract address: ${to}`,
                `OffchainLookup sender address: ${sender}`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'OffchainLookupSenderMismatchError'
        });
    }
}
//# sourceMappingURL=ccip.js.map

/***/ }),
/* 43 */
/*!***************************************************!*\
  !*** ./node_modules/viem/_esm/utils/stringify.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stringify: () => (/* binding */ stringify)
/* harmony export */ });
const stringify = (value, replacer, space) => JSON.stringify(value, (key, value_) => {
    const value = typeof value_ === 'bigint' ? value_.toString() : value_;
    return typeof replacer === 'function' ? replacer(key, value) : value;
}, space);
//# sourceMappingURL=stringify.js.map

/***/ }),
/* 44 */
/*!**************************************************!*\
  !*** ./node_modules/viem/_esm/errors/request.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpRequestError: () => (/* binding */ HttpRequestError),
/* harmony export */   RpcRequestError: () => (/* binding */ RpcRequestError),
/* harmony export */   TimeoutError: () => (/* binding */ TimeoutError),
/* harmony export */   WebSocketRequestError: () => (/* binding */ WebSocketRequestError)
/* harmony export */ });
/* harmony import */ var _utils_stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/stringify.js */ 43);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 14);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ 15);



class HttpRequestError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ body, details, headers, status, url, }) {
        super('HTTP request failed.', {
            details,
            metaMessages: [
                status && `Status: ${status}`,
                `URL: ${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getUrl)(url)}`,
                body && `Request body: ${(0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_2__.stringify)(body)}`,
            ].filter(Boolean),
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'HttpRequestError'
        });
        Object.defineProperty(this, "body", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "headers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "status", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.body = body;
        this.headers = headers;
        this.status = status;
        this.url = url;
    }
}
class WebSocketRequestError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ body, details, url, }) {
        super('WebSocket request failed.', {
            details,
            metaMessages: [`URL: ${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getUrl)(url)}`, `Request body: ${(0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_2__.stringify)(body)}`],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WebSocketRequestError'
        });
    }
}
class RpcRequestError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ body, error, url, }) {
        super('RPC Request failed.', {
            cause: error,
            details: error.message,
            metaMessages: [`URL: ${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getUrl)(url)}`, `Request body: ${(0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_2__.stringify)(body)}`],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'RpcRequestError'
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.code = error.code;
    }
}
class TimeoutError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ body, url, }) {
        super('The request took too long to respond.', {
            details: 'The request timed out.',
            metaMessages: [`URL: ${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getUrl)(url)}`, `Request body: ${(0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_2__.stringify)(body)}`],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TimeoutError'
        });
    }
}
//# sourceMappingURL=request.js.map

/***/ }),
/* 45 */
/*!*******************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/transaction/assertRequest.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertRequest: () => (/* binding */ assertRequest)
/* harmony export */ });
/* harmony import */ var _accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../accounts/utils/parseAccount.js */ 4);
/* harmony import */ var _errors_address_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors/address.js */ 39);
/* harmony import */ var _errors_node_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../errors/node.js */ 51);
/* harmony import */ var _errors_transaction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../errors/transaction.js */ 46);
/* harmony import */ var _address_isAddress_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../address/isAddress.js */ 38);





function assertRequest(args) {
    const { account: account_, gasPrice, maxFeePerGas, maxPriorityFeePerGas, to, } = args;
    const account = account_ ? (0,_accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_0__.parseAccount)(account_) : undefined;
    if (account && !(0,_address_isAddress_js__WEBPACK_IMPORTED_MODULE_1__.isAddress)(account.address))
        throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_2__.InvalidAddressError({ address: account.address });
    if (to && !(0,_address_isAddress_js__WEBPACK_IMPORTED_MODULE_1__.isAddress)(to))
        throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_2__.InvalidAddressError({ address: to });
    if (typeof gasPrice !== 'undefined' &&
        (typeof maxFeePerGas !== 'undefined' ||
            typeof maxPriorityFeePerGas !== 'undefined'))
        throw new _errors_transaction_js__WEBPACK_IMPORTED_MODULE_3__.FeeConflictError();
    if (maxFeePerGas && maxFeePerGas > 2n ** 256n - 1n)
        throw new _errors_node_js__WEBPACK_IMPORTED_MODULE_4__.FeeCapTooHighError({ maxFeePerGas });
    if (maxPriorityFeePerGas &&
        maxFeePerGas &&
        maxPriorityFeePerGas > maxFeePerGas)
        throw new _errors_node_js__WEBPACK_IMPORTED_MODULE_4__.TipAboveFeeCapError({ maxFeePerGas, maxPriorityFeePerGas });
}
//# sourceMappingURL=assertRequest.js.map

/***/ }),
/* 46 */
/*!******************************************************!*\
  !*** ./node_modules/viem/_esm/errors/transaction.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeeConflictError: () => (/* binding */ FeeConflictError),
/* harmony export */   InvalidLegacyVError: () => (/* binding */ InvalidLegacyVError),
/* harmony export */   InvalidSerializableTransactionError: () => (/* binding */ InvalidSerializableTransactionError),
/* harmony export */   InvalidSerializedTransactionError: () => (/* binding */ InvalidSerializedTransactionError),
/* harmony export */   InvalidSerializedTransactionTypeError: () => (/* binding */ InvalidSerializedTransactionTypeError),
/* harmony export */   InvalidStorageKeySizeError: () => (/* binding */ InvalidStorageKeySizeError),
/* harmony export */   TransactionExecutionError: () => (/* binding */ TransactionExecutionError),
/* harmony export */   TransactionNotFoundError: () => (/* binding */ TransactionNotFoundError),
/* harmony export */   TransactionReceiptNotFoundError: () => (/* binding */ TransactionReceiptNotFoundError),
/* harmony export */   WaitForTransactionReceiptTimeoutError: () => (/* binding */ WaitForTransactionReceiptTimeoutError),
/* harmony export */   prettyPrint: () => (/* binding */ prettyPrint)
/* harmony export */ });
/* harmony import */ var _utils_unit_formatEther_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unit/formatEther.js */ 47);
/* harmony import */ var _utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/unit/formatGwei.js */ 50);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 14);



function prettyPrint(args) {
    const entries = Object.entries(args)
        .map(([key, value]) => {
        if (value === undefined || value === false)
            return null;
        return [key, value];
    })
        .filter(Boolean);
    const maxLength = entries.reduce((acc, [key]) => Math.max(acc, key.length), 0);
    return entries
        .map(([key, value]) => `  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`)
        .join('\n');
}
class FeeConflictError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor() {
        super([
            'Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.',
            'Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.',
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'FeeConflictError'
        });
    }
}
class InvalidLegacyVError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ v }) {
        super(`Invalid \`v\` value "${v}". Expected 27 or 28.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidLegacyVError'
        });
    }
}
class InvalidSerializableTransactionError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ transaction }) {
        super('Cannot infer a transaction type from provided transaction.', {
            metaMessages: [
                'Provided Transaction:',
                '{',
                prettyPrint(transaction),
                '}',
                '',
                'To infer the type, either provide:',
                '- a `type` to the Transaction, or',
                '- an EIP-1559 Transaction with `maxFeePerGas`, or',
                '- an EIP-2930 Transaction with `gasPrice` & `accessList`, or',
                '- a Legacy Transaction with `gasPrice`',
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidSerializableTransactionError'
        });
    }
}
class InvalidSerializedTransactionTypeError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ serializedType }) {
        super(`Serialized transaction type "${serializedType}" is invalid.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidSerializedTransactionType'
        });
        Object.defineProperty(this, "serializedType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.serializedType = serializedType;
    }
}
class InvalidSerializedTransactionError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ attributes, serializedTransaction, type, }) {
        const missing = Object.entries(attributes)
            .map(([key, value]) => (typeof value === 'undefined' ? key : undefined))
            .filter(Boolean);
        super(`Invalid serialized transaction of type "${type}" was provided.`, {
            metaMessages: [
                `Serialized Transaction: "${serializedTransaction}"`,
                missing.length > 0 ? `Missing Attributes: ${missing.join(', ')}` : '',
            ].filter(Boolean),
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidSerializedTransactionError'
        });
        Object.defineProperty(this, "serializedTransaction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.serializedTransaction = serializedTransaction;
        this.type = type;
    }
}
class InvalidStorageKeySizeError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ storageKey }) {
        super(`Size for storage key "${storageKey}" is invalid. Expected 32 bytes. Got ${Math.floor((storageKey.length - 2) / 2)} bytes.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidStorageKeySizeError'
        });
    }
}
class TransactionExecutionError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(cause, { account, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, }) {
        const prettyArgs = prettyPrint({
            chain: chain && `${chain?.name} (id: ${chain?.id})`,
            from: account?.address,
            to,
            value: typeof value !== 'undefined' &&
                `${(0,_utils_unit_formatEther_js__WEBPACK_IMPORTED_MODULE_1__.formatEther)(value)} ${chain?.nativeCurrency.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_2__.formatGwei)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' &&
                `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_2__.formatGwei)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' &&
                `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_2__.formatGwei)(maxPriorityFeePerGas)} gwei`,
            nonce,
        });
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...(cause.metaMessages ? [...cause.metaMessages, ' '] : []),
                'Request Arguments:',
                prettyArgs,
            ].filter(Boolean),
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TransactionExecutionError'
        });
        this.cause = cause;
    }
}
class TransactionNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ blockHash, blockNumber, blockTag, hash, index, }) {
        let identifier = 'Transaction';
        if (blockTag && index !== undefined)
            identifier = `Transaction at block time "${blockTag}" at index "${index}"`;
        if (blockHash && index !== undefined)
            identifier = `Transaction at block hash "${blockHash}" at index "${index}"`;
        if (blockNumber && index !== undefined)
            identifier = `Transaction at block number "${blockNumber}" at index "${index}"`;
        if (hash)
            identifier = `Transaction with hash "${hash}"`;
        super(`${identifier} could not be found.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TransactionNotFoundError'
        });
    }
}
class TransactionReceiptNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ hash }) {
        super(`Transaction receipt with hash "${hash}" could not be found. The Transaction may not be processed on a block yet.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TransactionReceiptNotFoundError'
        });
    }
}
class WaitForTransactionReceiptTimeoutError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ hash }) {
        super(`Timed out while waiting for transaction with hash "${hash}" to be confirmed.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WaitForTransactionReceiptTimeoutError'
        });
    }
}
//# sourceMappingURL=transaction.js.map

/***/ }),
/* 47 */
/*!**********************************************************!*\
  !*** ./node_modules/viem/_esm/utils/unit/formatEther.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatEther: () => (/* binding */ formatEther)
/* harmony export */ });
/* harmony import */ var _constants_unit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/unit.js */ 49);
/* harmony import */ var _formatUnits_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatUnits.js */ 48);


function formatEther(wei, unit = 'wei') {
    return (0,_formatUnits_js__WEBPACK_IMPORTED_MODULE_0__.formatUnits)(wei, _constants_unit_js__WEBPACK_IMPORTED_MODULE_1__.etherUnits[unit]);
}
//# sourceMappingURL=formatEther.js.map

/***/ }),
/* 48 */
/*!**********************************************************!*\
  !*** ./node_modules/viem/_esm/utils/unit/formatUnits.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatUnits: () => (/* binding */ formatUnits)
/* harmony export */ });
function formatUnits(value, decimals) {
    let display = value.toString();
    const negative = display.startsWith('-');
    if (negative)
        display = display.slice(1);
    display = display.padStart(decimals, '0');
    let [integer, fraction] = [
        display.slice(0, display.length - decimals),
        display.slice(display.length - decimals),
    ];
    fraction = fraction.replace(/(0+)$/, '');
    return `${negative ? '-' : ''}${integer || '0'}${fraction ? `.${fraction}` : ''}`;
}
//# sourceMappingURL=formatUnits.js.map

/***/ }),
/* 49 */
/*!**************************************************!*\
  !*** ./node_modules/viem/_esm/constants/unit.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   etherUnits: () => (/* binding */ etherUnits),
/* harmony export */   gweiUnits: () => (/* binding */ gweiUnits),
/* harmony export */   weiUnits: () => (/* binding */ weiUnits)
/* harmony export */ });
const etherUnits = {
    gwei: 9,
    wei: 18,
};
const gweiUnits = {
    ether: -9,
    wei: 9,
};
const weiUnits = {
    ether: -18,
    gwei: -9,
};
//# sourceMappingURL=unit.js.map

/***/ }),
/* 50 */
/*!*********************************************************!*\
  !*** ./node_modules/viem/_esm/utils/unit/formatGwei.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatGwei: () => (/* binding */ formatGwei)
/* harmony export */ });
/* harmony import */ var _constants_unit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/unit.js */ 49);
/* harmony import */ var _formatUnits_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatUnits.js */ 48);


function formatGwei(wei, unit = 'wei') {
    return (0,_formatUnits_js__WEBPACK_IMPORTED_MODULE_0__.formatUnits)(wei, _constants_unit_js__WEBPACK_IMPORTED_MODULE_1__.gweiUnits[unit]);
}
//# sourceMappingURL=formatGwei.js.map

/***/ }),
/* 51 */
/*!***********************************************!*\
  !*** ./node_modules/viem/_esm/errors/node.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExecutionRevertedError: () => (/* binding */ ExecutionRevertedError),
/* harmony export */   FeeCapTooHighError: () => (/* binding */ FeeCapTooHighError),
/* harmony export */   FeeCapTooLowError: () => (/* binding */ FeeCapTooLowError),
/* harmony export */   InsufficientFundsError: () => (/* binding */ InsufficientFundsError),
/* harmony export */   IntrinsicGasTooHighError: () => (/* binding */ IntrinsicGasTooHighError),
/* harmony export */   IntrinsicGasTooLowError: () => (/* binding */ IntrinsicGasTooLowError),
/* harmony export */   NonceMaxValueError: () => (/* binding */ NonceMaxValueError),
/* harmony export */   NonceTooHighError: () => (/* binding */ NonceTooHighError),
/* harmony export */   NonceTooLowError: () => (/* binding */ NonceTooLowError),
/* harmony export */   TipAboveFeeCapError: () => (/* binding */ TipAboveFeeCapError),
/* harmony export */   TransactionTypeNotSupportedError: () => (/* binding */ TransactionTypeNotSupportedError),
/* harmony export */   UnknownNodeError: () => (/* binding */ UnknownNodeError)
/* harmony export */ });
/* harmony import */ var _utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unit/formatGwei.js */ 50);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 14);


class ExecutionRevertedError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ cause, message, } = {}) {
        const reason = message
            ?.replace('execution reverted: ', '')
            ?.replace('execution reverted', '');
        super(`Execution reverted ${reason ? `with reason: ${reason}` : 'for an unknown reason'}.`, {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ExecutionRevertedError'
        });
    }
}
Object.defineProperty(ExecutionRevertedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 3
});
Object.defineProperty(ExecutionRevertedError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /execution reverted/
});

class FeeCapTooHighError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ cause, maxFeePerGas, } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_1__.formatGwei)(maxFeePerGas)} gwei` : ''}) cannot be higher than the maximum allowed value (2^256-1).`, {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'FeeCapTooHigh'
        });
    }
}
Object.defineProperty(FeeCapTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});

class FeeCapTooLowError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ cause, maxFeePerGas, } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_1__.formatGwei)(maxFeePerGas)}` : ''} gwei) cannot be lower than the block base fee.`, {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'FeeCapTooLow'
        });
    }
}
Object.defineProperty(FeeCapTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});

class NonceTooHighError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ cause, nonce } = {}) {
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}is higher than the next one expected.`, { cause });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'NonceTooHighError'
        });
    }
}
Object.defineProperty(NonceTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce too high/
});

class NonceTooLowError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ cause, nonce } = {}) {
        super([
            `Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}is lower than the current nonce of the account.`,
            'Try increasing the nonce or find the latest nonce with `getTransactionCount`.',
        ].join('\n'), { cause });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'NonceTooLowError'
        });
    }
}
Object.defineProperty(NonceTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce too low|transaction already imported|already known/
});

class NonceMaxValueError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ cause, nonce } = {}) {
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}exceeds the maximum allowed nonce.`, { cause });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'NonceMaxValueError'
        });
    }
}
Object.defineProperty(NonceMaxValueError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce has max value/
});

class InsufficientFundsError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ cause } = {}) {
        super([
            'The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.',
        ].join('\n'), {
            cause,
            metaMessages: [
                'This error could arise when the account does not have enough funds to:',
                ' - pay for the total gas fee,',
                ' - pay for the value to send.',
                ' ',
                'The cost of the transaction is calculated as `gas * gas fee + value`, where:',
                ' - `gas` is the amount of gas needed for transaction to execute,',
                ' - `gas fee` is the gas fee,',
                ' - `value` is the amount of ether to send to the recipient.',
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InsufficientFundsError'
        });
    }
}
Object.defineProperty(InsufficientFundsError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /insufficient funds/
});

class IntrinsicGasTooHighError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ cause, gas } = {}) {
        super(`The amount of gas ${gas ? `(${gas}) ` : ''}provided for the transaction exceeds the limit allowed for the block.`, {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'IntrinsicGasTooHighError'
        });
    }
}
Object.defineProperty(IntrinsicGasTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /intrinsic gas too high|gas limit reached/
});

class IntrinsicGasTooLowError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ cause, gas } = {}) {
        super(`The amount of gas ${gas ? `(${gas}) ` : ''}provided for the transaction is too low.`, {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'IntrinsicGasTooLowError'
        });
    }
}
Object.defineProperty(IntrinsicGasTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /intrinsic gas too low/
});

class TransactionTypeNotSupportedError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ cause }) {
        super('The transaction type is not supported for this chain.', {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TransactionTypeNotSupportedError'
        });
    }
}
Object.defineProperty(TransactionTypeNotSupportedError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /transaction type not valid/
});

class TipAboveFeeCapError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ cause, maxPriorityFeePerGas, maxFeePerGas, } = {}) {
        super([
            `The provided tip (\`maxPriorityFeePerGas\`${maxPriorityFeePerGas
                ? ` = ${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_1__.formatGwei)(maxPriorityFeePerGas)} gwei`
                : ''}) cannot be higher than the fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_1__.formatGwei)(maxFeePerGas)} gwei` : ''}).`,
        ].join('\n'), {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TipAboveFeeCapError'
        });
    }
}
Object.defineProperty(TipAboveFeeCapError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});

class UnknownNodeError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ cause }) {
        super(`An error occurred while executing: ${cause?.shortMessage}`, {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownNodeError'
        });
    }
}
//# sourceMappingURL=node.js.map

/***/ }),
/* 52 */
/*!***********************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/formatters/transactionRequest.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defineTransactionRequest: () => (/* binding */ defineTransactionRequest),
/* harmony export */   formatTransactionRequest: () => (/* binding */ formatTransactionRequest),
/* harmony export */   rpcTransactionType: () => (/* binding */ rpcTransactionType)
/* harmony export */ });
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoding/toHex.js */ 32);
/* harmony import */ var _formatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatter.js */ 53);


const rpcTransactionType = {
    legacy: '0x0',
    eip2930: '0x1',
    eip1559: '0x2',
};
function formatTransactionRequest(transactionRequest) {
    return {
        ...transactionRequest,
        gas: typeof transactionRequest.gas !== 'undefined'
            ? (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.numberToHex)(transactionRequest.gas)
            : undefined,
        gasPrice: typeof transactionRequest.gasPrice !== 'undefined'
            ? (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.numberToHex)(transactionRequest.gasPrice)
            : undefined,
        maxFeePerGas: typeof transactionRequest.maxFeePerGas !== 'undefined'
            ? (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.numberToHex)(transactionRequest.maxFeePerGas)
            : undefined,
        maxPriorityFeePerGas: typeof transactionRequest.maxPriorityFeePerGas !== 'undefined'
            ? (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.numberToHex)(transactionRequest.maxPriorityFeePerGas)
            : undefined,
        nonce: typeof transactionRequest.nonce !== 'undefined'
            ? (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.numberToHex)(transactionRequest.nonce)
            : undefined,
        type: typeof transactionRequest.type !== 'undefined'
            ? rpcTransactionType[transactionRequest.type]
            : undefined,
        value: typeof transactionRequest.value !== 'undefined'
            ? (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.numberToHex)(transactionRequest.value)
            : undefined,
    };
}
const defineTransactionRequest = /*#__PURE__*/ (0,_formatter_js__WEBPACK_IMPORTED_MODULE_1__.defineFormatter)('transactionRequest', formatTransactionRequest);
//# sourceMappingURL=transactionRequest.js.map

/***/ }),
/* 53 */
/*!**************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/formatters/formatter.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defineFormatter: () => (/* binding */ defineFormatter)
/* harmony export */ });
function defineFormatter(type, format) {
    return ({ exclude, format: overrides, }) => {
        return {
            exclude,
            format: (args) => {
                const formatted = format(args);
                if (exclude) {
                    for (const key of exclude) {
                        delete formatted[key];
                    }
                }
                return {
                    ...formatted,
                    ...overrides(args),
                };
            },
            type,
        };
    };
}
//# sourceMappingURL=formatter.js.map

/***/ }),
/* 54 */
/*!************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/formatters/extract.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extract: () => (/* binding */ extract)
/* harmony export */ });
/**
 * @description Picks out the keys from `value` that exist in the formatter.
 */
function extract(value, { format }) {
    if (!format)
        return {};
    const keys = Object.keys(format({}));
    return keys.reduce((data, key) => {
        // biome-ignore lint/suspicious/noPrototypeBuiltins:
        if (value?.hasOwnProperty(key)) {
            data[key] = value[key];
        }
        return data;
    }, {});
}
//# sourceMappingURL=extract.js.map

/***/ }),
/* 55 */
/*!************************************************!*\
  !*** ./node_modules/viem/_esm/errors/chain.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChainDoesNotSupportContract: () => (/* binding */ ChainDoesNotSupportContract),
/* harmony export */   ChainMismatchError: () => (/* binding */ ChainMismatchError),
/* harmony export */   ChainNotFoundError: () => (/* binding */ ChainNotFoundError),
/* harmony export */   ClientChainNotConfiguredError: () => (/* binding */ ClientChainNotConfiguredError),
/* harmony export */   InvalidChainIdError: () => (/* binding */ InvalidChainIdError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 14);

class ChainDoesNotSupportContract extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ blockNumber, chain, contract, }) {
        super(`Chain "${chain.name}" does not support contract "${contract.name}".`, {
            metaMessages: [
                'This could be due to any of the following:',
                ...(blockNumber &&
                    contract.blockCreated &&
                    contract.blockCreated > blockNumber
                    ? [
                        `- The contract "${contract.name}" was not deployed until block ${contract.blockCreated} (current block ${blockNumber}).`,
                    ]
                    : [
                        `- The chain does not have the contract "${contract.name}" configured.`,
                    ]),
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ChainDoesNotSupportContract'
        });
    }
}
class ChainMismatchError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ chain, currentChainId, }) {
        super(`The current chain of the wallet (id: ${currentChainId}) does not match the target chain for the transaction (id: ${chain.id} – ${chain.name}).`, {
            metaMessages: [
                `Current Chain ID:  ${currentChainId}`,
                `Expected Chain ID: ${chain.id} – ${chain.name}`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ChainMismatchError'
        });
    }
}
class ChainNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor() {
        super([
            'No chain was provided to the request.',
            'Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.',
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ChainNotFoundError'
        });
    }
}
class ClientChainNotConfiguredError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor() {
        super('No chain was provided to the Client.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ClientChainNotConfiguredError'
        });
    }
}
class InvalidChainIdError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ chainId }) {
        super(`Chain ID "${chainId}" is invalid.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidChainIdError'
        });
    }
}
//# sourceMappingURL=chain.js.map

/***/ }),
/* 56 */
/*!*************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/errors/getCallError.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCallError: () => (/* binding */ getCallError)
/* harmony export */ });
/* harmony import */ var _errors_contract_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors/contract.js */ 59);
/* harmony import */ var _errors_node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors/node.js */ 51);
/* harmony import */ var _getNodeError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeError.js */ 57);



function getCallError(err, { docsPath, ...args }) {
    const cause = (() => {
        const cause = (0,_getNodeError_js__WEBPACK_IMPORTED_MODULE_0__.getNodeError)(err, args);
        if (cause instanceof _errors_node_js__WEBPACK_IMPORTED_MODULE_1__.UnknownNodeError)
            return err;
        return cause;
    })();
    return new _errors_contract_js__WEBPACK_IMPORTED_MODULE_2__.CallExecutionError(cause, {
        docsPath,
        ...args,
    });
}
//# sourceMappingURL=getCallError.js.map

/***/ }),
/* 57 */
/*!*************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/errors/getNodeError.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   containsNodeError: () => (/* binding */ containsNodeError),
/* harmony export */   getNodeError: () => (/* binding */ getNodeError)
/* harmony export */ });
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../errors/base.js */ 14);
/* harmony import */ var _errors_node_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors/node.js */ 51);
/* harmony import */ var _errors_request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors/request.js */ 44);
/* harmony import */ var _errors_rpc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors/rpc.js */ 58);




function containsNodeError(err) {
    return (err instanceof _errors_rpc_js__WEBPACK_IMPORTED_MODULE_0__.TransactionRejectedRpcError ||
        err instanceof _errors_rpc_js__WEBPACK_IMPORTED_MODULE_0__.InvalidInputRpcError ||
        (err instanceof _errors_request_js__WEBPACK_IMPORTED_MODULE_1__.RpcRequestError && err.code === _errors_node_js__WEBPACK_IMPORTED_MODULE_2__.ExecutionRevertedError.code));
}
function getNodeError(err, args) {
    const message = (err.details || '').toLowerCase();
    const executionRevertedError = err.walk((e) => e.code === _errors_node_js__WEBPACK_IMPORTED_MODULE_2__.ExecutionRevertedError.code);
    if (executionRevertedError instanceof _errors_base_js__WEBPACK_IMPORTED_MODULE_3__.BaseError) {
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_2__.ExecutionRevertedError({
            cause: err,
            message: executionRevertedError.details,
        });
    }
    else if (_errors_node_js__WEBPACK_IMPORTED_MODULE_2__.ExecutionRevertedError.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_2__.ExecutionRevertedError({
            cause: err,
            message: err.details,
        });
    else if (_errors_node_js__WEBPACK_IMPORTED_MODULE_2__.FeeCapTooHighError.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_2__.FeeCapTooHighError({
            cause: err,
            maxFeePerGas: args?.maxFeePerGas,
        });
    else if (_errors_node_js__WEBPACK_IMPORTED_MODULE_2__.FeeCapTooLowError.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_2__.FeeCapTooLowError({
            cause: err,
            maxFeePerGas: args?.maxFeePerGas,
        });
    else if (_errors_node_js__WEBPACK_IMPORTED_MODULE_2__.NonceTooHighError.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_2__.NonceTooHighError({ cause: err, nonce: args?.nonce });
    else if (_errors_node_js__WEBPACK_IMPORTED_MODULE_2__.NonceTooLowError.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_2__.NonceTooLowError({ cause: err, nonce: args?.nonce });
    else if (_errors_node_js__WEBPACK_IMPORTED_MODULE_2__.NonceMaxValueError.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_2__.NonceMaxValueError({ cause: err, nonce: args?.nonce });
    else if (_errors_node_js__WEBPACK_IMPORTED_MODULE_2__.InsufficientFundsError.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_2__.InsufficientFundsError({ cause: err });
    else if (_errors_node_js__WEBPACK_IMPORTED_MODULE_2__.IntrinsicGasTooHighError.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_2__.IntrinsicGasTooHighError({ cause: err, gas: args?.gas });
    else if (_errors_node_js__WEBPACK_IMPORTED_MODULE_2__.IntrinsicGasTooLowError.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_2__.IntrinsicGasTooLowError({ cause: err, gas: args?.gas });
    else if (_errors_node_js__WEBPACK_IMPORTED_MODULE_2__.TransactionTypeNotSupportedError.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_2__.TransactionTypeNotSupportedError({ cause: err });
    else if (_errors_node_js__WEBPACK_IMPORTED_MODULE_2__.TipAboveFeeCapError.nodeMessage.test(message))
        return new _errors_node_js__WEBPACK_IMPORTED_MODULE_2__.TipAboveFeeCapError({
            cause: err,
            maxFeePerGas: args?.maxFeePerGas,
            maxPriorityFeePerGas: args?.maxPriorityFeePerGas,
        });
    return new _errors_node_js__WEBPACK_IMPORTED_MODULE_2__.UnknownNodeError({
        cause: err,
    });
}
//# sourceMappingURL=getNodeError.js.map

/***/ }),
/* 58 */
/*!**********************************************!*\
  !*** ./node_modules/viem/_esm/errors/rpc.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChainDisconnectedError: () => (/* binding */ ChainDisconnectedError),
/* harmony export */   InternalRpcError: () => (/* binding */ InternalRpcError),
/* harmony export */   InvalidInputRpcError: () => (/* binding */ InvalidInputRpcError),
/* harmony export */   InvalidParamsRpcError: () => (/* binding */ InvalidParamsRpcError),
/* harmony export */   InvalidRequestRpcError: () => (/* binding */ InvalidRequestRpcError),
/* harmony export */   JsonRpcVersionUnsupportedError: () => (/* binding */ JsonRpcVersionUnsupportedError),
/* harmony export */   LimitExceededRpcError: () => (/* binding */ LimitExceededRpcError),
/* harmony export */   MethodNotFoundRpcError: () => (/* binding */ MethodNotFoundRpcError),
/* harmony export */   MethodNotSupportedRpcError: () => (/* binding */ MethodNotSupportedRpcError),
/* harmony export */   ParseRpcError: () => (/* binding */ ParseRpcError),
/* harmony export */   ProviderDisconnectedError: () => (/* binding */ ProviderDisconnectedError),
/* harmony export */   ProviderRpcError: () => (/* binding */ ProviderRpcError),
/* harmony export */   ResourceNotFoundRpcError: () => (/* binding */ ResourceNotFoundRpcError),
/* harmony export */   ResourceUnavailableRpcError: () => (/* binding */ ResourceUnavailableRpcError),
/* harmony export */   RpcError: () => (/* binding */ RpcError),
/* harmony export */   SwitchChainError: () => (/* binding */ SwitchChainError),
/* harmony export */   TransactionRejectedRpcError: () => (/* binding */ TransactionRejectedRpcError),
/* harmony export */   UnauthorizedProviderError: () => (/* binding */ UnauthorizedProviderError),
/* harmony export */   UnknownRpcError: () => (/* binding */ UnknownRpcError),
/* harmony export */   UnsupportedProviderMethodError: () => (/* binding */ UnsupportedProviderMethodError),
/* harmony export */   UserRejectedRequestError: () => (/* binding */ UserRejectedRequestError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 14);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request.js */ 44);


const unknownErrorCode = -1;
class RpcError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(cause, { code, docsPath, metaMessages, shortMessage }) {
        super(shortMessage, {
            cause,
            docsPath,
            metaMessages: metaMessages || cause?.metaMessages,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'RpcError'
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = cause.name;
        this.code = (cause instanceof _request_js__WEBPACK_IMPORTED_MODULE_1__.RpcRequestError ? cause.code : code ?? unknownErrorCode);
    }
}
class ProviderRpcError extends RpcError {
    constructor(cause, options) {
        super(cause, options);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ProviderRpcError'
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = options.data;
    }
}
class ParseRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: ParseRpcError.code,
            shortMessage: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ParseRpcError'
        });
    }
}
Object.defineProperty(ParseRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32700
});

class InvalidRequestRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: InvalidRequestRpcError.code,
            shortMessage: 'JSON is not a valid request object.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidRequestRpcError'
        });
    }
}
Object.defineProperty(InvalidRequestRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32600
});

class MethodNotFoundRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: MethodNotFoundRpcError.code,
            shortMessage: 'The method does not exist / is not available.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'MethodNotFoundRpcError'
        });
    }
}
Object.defineProperty(MethodNotFoundRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32601
});

class InvalidParamsRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: InvalidParamsRpcError.code,
            shortMessage: [
                'Invalid parameters were provided to the RPC method.',
                'Double check you have provided the correct parameters.',
            ].join('\n'),
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParamsRpcError'
        });
    }
}
Object.defineProperty(InvalidParamsRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32602
});

class InternalRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: InternalRpcError.code,
            shortMessage: 'An internal error was received.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InternalRpcError'
        });
    }
}
Object.defineProperty(InternalRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32603
});

class InvalidInputRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: InvalidInputRpcError.code,
            shortMessage: [
                'Missing or invalid parameters.',
                'Double check you have provided the correct parameters.',
            ].join('\n'),
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidInputRpcError'
        });
    }
}
Object.defineProperty(InvalidInputRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32000
});

class ResourceNotFoundRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: ResourceNotFoundRpcError.code,
            shortMessage: 'Requested resource not found.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ResourceNotFoundRpcError'
        });
    }
}
Object.defineProperty(ResourceNotFoundRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32001
});

class ResourceUnavailableRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: ResourceUnavailableRpcError.code,
            shortMessage: 'Requested resource not available.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ResourceUnavailableRpcError'
        });
    }
}
Object.defineProperty(ResourceUnavailableRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32002
});

class TransactionRejectedRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: TransactionRejectedRpcError.code,
            shortMessage: 'Transaction creation failed.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TransactionRejectedRpcError'
        });
    }
}
Object.defineProperty(TransactionRejectedRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32003
});

class MethodNotSupportedRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: MethodNotSupportedRpcError.code,
            shortMessage: 'Method is not implemented.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'MethodNotSupportedRpcError'
        });
    }
}
Object.defineProperty(MethodNotSupportedRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32004
});

class LimitExceededRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: LimitExceededRpcError.code,
            shortMessage: 'Request exceeds defined limit.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'LimitExceededRpcError'
        });
    }
}
Object.defineProperty(LimitExceededRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32005
});

class JsonRpcVersionUnsupportedError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: JsonRpcVersionUnsupportedError.code,
            shortMessage: 'Version of JSON-RPC protocol is not supported.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'JsonRpcVersionUnsupportedError'
        });
    }
}
Object.defineProperty(JsonRpcVersionUnsupportedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32006
});

class UserRejectedRequestError extends ProviderRpcError {
    constructor(cause) {
        super(cause, {
            code: UserRejectedRequestError.code,
            shortMessage: 'User rejected the request.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UserRejectedRequestError'
        });
    }
}
Object.defineProperty(UserRejectedRequestError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4001
});

class UnauthorizedProviderError extends ProviderRpcError {
    constructor(cause) {
        super(cause, {
            code: UnauthorizedProviderError.code,
            shortMessage: 'The requested method and/or account has not been authorized by the user.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnauthorizedProviderError'
        });
    }
}
Object.defineProperty(UnauthorizedProviderError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4100
});

class UnsupportedProviderMethodError extends ProviderRpcError {
    constructor(cause) {
        super(cause, {
            code: UnsupportedProviderMethodError.code,
            shortMessage: 'The Provider does not support the requested method.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnsupportedProviderMethodError'
        });
    }
}
Object.defineProperty(UnsupportedProviderMethodError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4200
});

class ProviderDisconnectedError extends ProviderRpcError {
    constructor(cause) {
        super(cause, {
            code: ProviderDisconnectedError.code,
            shortMessage: 'The Provider is disconnected from all chains.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ProviderDisconnectedError'
        });
    }
}
Object.defineProperty(ProviderDisconnectedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4900
});

class ChainDisconnectedError extends ProviderRpcError {
    constructor(cause) {
        super(cause, {
            code: ChainDisconnectedError.code,
            shortMessage: 'The Provider is not connected to the requested chain.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ChainDisconnectedError'
        });
    }
}
Object.defineProperty(ChainDisconnectedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4901
});

class SwitchChainError extends ProviderRpcError {
    constructor(cause) {
        super(cause, {
            code: SwitchChainError.code,
            shortMessage: 'An error occurred when attempting to switch chain.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SwitchChainError'
        });
    }
}
Object.defineProperty(SwitchChainError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4902
});

class UnknownRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            shortMessage: 'An unknown RPC error occurred.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownRpcError'
        });
    }
}
//# sourceMappingURL=rpc.js.map

/***/ }),
/* 59 */
/*!***************************************************!*\
  !*** ./node_modules/viem/_esm/errors/contract.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CallExecutionError: () => (/* binding */ CallExecutionError),
/* harmony export */   ContractFunctionExecutionError: () => (/* binding */ ContractFunctionExecutionError),
/* harmony export */   ContractFunctionRevertedError: () => (/* binding */ ContractFunctionRevertedError),
/* harmony export */   ContractFunctionZeroDataError: () => (/* binding */ ContractFunctionZeroDataError),
/* harmony export */   RawContractError: () => (/* binding */ RawContractError)
/* harmony export */ });
/* harmony import */ var _accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accounts/utils/parseAccount.js */ 4);
/* harmony import */ var _constants_solidity_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants/solidity.js */ 19);
/* harmony import */ var _utils_abi_decodeErrorResult_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/abi/decodeErrorResult.js */ 9);
/* harmony import */ var _utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/abi/formatAbiItem.js */ 18);
/* harmony import */ var _utils_abi_formatAbiItemWithArgs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/abi/formatAbiItemWithArgs.js */ 63);
/* harmony import */ var _utils_abi_getAbiItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/abi/getAbiItem.js */ 60);
/* harmony import */ var _utils_unit_formatEther_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/unit/formatEther.js */ 47);
/* harmony import */ var _utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/unit/formatGwei.js */ 50);
/* harmony import */ var _abi_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./abi.js */ 17);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 14);
/* harmony import */ var _transaction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transaction.js */ 46);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils.js */ 15);












class CallExecutionError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(cause, { account: account_, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, }) {
        const account = account_ ? (0,_accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_1__.parseAccount)(account_) : undefined;
        const prettyArgs = (0,_transaction_js__WEBPACK_IMPORTED_MODULE_2__.prettyPrint)({
            from: account?.address,
            to,
            value: typeof value !== 'undefined' &&
                `${(0,_utils_unit_formatEther_js__WEBPACK_IMPORTED_MODULE_3__.formatEther)(value)} ${chain?.nativeCurrency.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_4__.formatGwei)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' &&
                `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_4__.formatGwei)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' &&
                `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_4__.formatGwei)(maxPriorityFeePerGas)} gwei`,
            nonce,
        });
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...(cause.metaMessages ? [...cause.metaMessages, ' '] : []),
                'Raw Call Arguments:',
                prettyArgs,
            ].filter(Boolean),
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'CallExecutionError'
        });
        this.cause = cause;
    }
}
class ContractFunctionExecutionError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(cause, { abi, args, contractAddress, docsPath, functionName, sender, }) {
        const abiItem = (0,_utils_abi_getAbiItem_js__WEBPACK_IMPORTED_MODULE_5__.getAbiItem)({ abi, args, name: functionName });
        const formattedArgs = abiItem
            ? (0,_utils_abi_formatAbiItemWithArgs_js__WEBPACK_IMPORTED_MODULE_6__.formatAbiItemWithArgs)({
                abiItem,
                args,
                includeFunctionName: false,
                includeName: false,
            })
            : undefined;
        const functionWithParams = abiItem
            ? (0,_utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_7__.formatAbiItem)(abiItem, { includeName: true })
            : undefined;
        const prettyArgs = (0,_transaction_js__WEBPACK_IMPORTED_MODULE_2__.prettyPrint)({
            address: contractAddress && (0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.getContractAddress)(contractAddress),
            function: functionWithParams,
            args: formattedArgs &&
                formattedArgs !== '()' &&
                `${[...Array(functionName?.length ?? 0).keys()]
                    .map(() => ' ')
                    .join('')}${formattedArgs}`,
            sender,
        });
        super(cause.shortMessage ||
            `An unknown error occurred while executing the contract function "${functionName}".`, {
            cause,
            docsPath,
            metaMessages: [
                ...(cause.metaMessages ? [...cause.metaMessages, ' '] : []),
                'Contract Call:',
                prettyArgs,
            ].filter(Boolean),
        });
        Object.defineProperty(this, "abi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "args", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "contractAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "formattedArgs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "functionName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sender", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ContractFunctionExecutionError'
        });
        this.abi = abi;
        this.args = args;
        this.cause = cause;
        this.contractAddress = contractAddress;
        this.functionName = functionName;
        this.sender = sender;
    }
}
class ContractFunctionRevertedError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ abi, data, functionName, message, }) {
        let cause;
        let decodedData = undefined;
        let metaMessages;
        let reason;
        if (data && data !== '0x') {
            try {
                decodedData = (0,_utils_abi_decodeErrorResult_js__WEBPACK_IMPORTED_MODULE_9__.decodeErrorResult)({ abi, data });
                const { abiItem, errorName, args: errorArgs } = decodedData;
                if (errorName === 'Error') {
                    reason = errorArgs[0];
                }
                else if (errorName === 'Panic') {
                    const [firstArg] = errorArgs;
                    reason = _constants_solidity_js__WEBPACK_IMPORTED_MODULE_10__.panicReasons[firstArg];
                }
                else {
                    const errorWithParams = abiItem
                        ? (0,_utils_abi_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_7__.formatAbiItem)(abiItem, { includeName: true })
                        : undefined;
                    const formattedArgs = abiItem && errorArgs
                        ? (0,_utils_abi_formatAbiItemWithArgs_js__WEBPACK_IMPORTED_MODULE_6__.formatAbiItemWithArgs)({
                            abiItem,
                            args: errorArgs,
                            includeFunctionName: false,
                            includeName: false,
                        })
                        : undefined;
                    metaMessages = [
                        errorWithParams ? `Error: ${errorWithParams}` : '',
                        formattedArgs && formattedArgs !== '()'
                            ? `       ${[...Array(errorName?.length ?? 0).keys()]
                                .map(() => ' ')
                                .join('')}${formattedArgs}`
                            : '',
                    ];
                }
            }
            catch (err) {
                cause = err;
            }
        }
        else if (message)
            reason = message;
        let signature;
        if (cause instanceof _abi_js__WEBPACK_IMPORTED_MODULE_11__.AbiErrorSignatureNotFoundError) {
            signature = cause.signature;
            metaMessages = [
                `Unable to decode signature "${signature}" as it was not found on the provided ABI.`,
                'Make sure you are using the correct ABI and that the error exists on it.',
                `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`,
            ];
        }
        super((reason && reason !== 'execution reverted') || signature
            ? [
                `The contract function "${functionName}" reverted with the following ${signature ? 'signature' : 'reason'}:`,
                reason || signature,
            ].join('\n')
            : `The contract function "${functionName}" reverted.`, {
            cause,
            metaMessages,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ContractFunctionRevertedError'
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "reason", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = decodedData;
        this.reason = reason;
        this.signature = signature;
    }
}
class ContractFunctionZeroDataError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ functionName }) {
        super(`The contract function "${functionName}" returned no data ("0x").`, {
            metaMessages: [
                'This could be due to any of the following:',
                `  - The contract does not have the function "${functionName}",`,
                '  - The parameters passed to the contract function may be invalid, or',
                '  - The address is not a contract.',
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ContractFunctionZeroDataError'
        });
    }
}
class RawContractError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ data, message, }) {
        super(message || '');
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 3
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'RawContractError'
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
    }
}
//# sourceMappingURL=contract.js.map

/***/ }),
/* 60 */
/*!********************************************************!*\
  !*** ./node_modules/viem/_esm/utils/abi/getAbiItem.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAbiItem: () => (/* binding */ getAbiItem),
/* harmony export */   isArgOfType: () => (/* binding */ isArgOfType)
/* harmony export */ });
/* harmony import */ var _utils_data_isHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/data/isHex.js */ 11);
/* harmony import */ var _utils_hash_getEventSelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/hash/getEventSelector.js */ 61);
/* harmony import */ var _utils_hash_getFunctionSelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/hash/getFunctionSelector.js */ 20);
/* harmony import */ var _address_isAddress_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../address/isAddress.js */ 38);




function getAbiItem({ abi, args = [], name, }) {
    const isSelector = (0,_utils_data_isHex_js__WEBPACK_IMPORTED_MODULE_0__.isHex)(name, { strict: false });
    const abiItems = abi.filter((abiItem) => {
        if (isSelector) {
            if (abiItem.type === 'function')
                return (0,_utils_hash_getFunctionSelector_js__WEBPACK_IMPORTED_MODULE_1__.getFunctionSelector)(abiItem) === name;
            if (abiItem.type === 'event')
                return (0,_utils_hash_getEventSelector_js__WEBPACK_IMPORTED_MODULE_2__.getEventSelector)(abiItem) === name;
            return false;
        }
        return 'name' in abiItem && abiItem.name === name;
    });
    if (abiItems.length === 0)
        return undefined;
    if (abiItems.length === 1)
        return abiItems[0];
    for (const abiItem of abiItems) {
        if (!('inputs' in abiItem))
            continue;
        if (!args || args.length === 0) {
            if (!abiItem.inputs || abiItem.inputs.length === 0)
                return abiItem;
            continue;
        }
        if (!abiItem.inputs)
            continue;
        if (abiItem.inputs.length === 0)
            continue;
        if (abiItem.inputs.length !== args.length)
            continue;
        const matched = args.every((arg, index) => {
            const abiParameter = 'inputs' in abiItem && abiItem.inputs[index];
            if (!abiParameter)
                return false;
            return isArgOfType(arg, abiParameter);
        });
        if (matched)
            return abiItem;
    }
    return abiItems[0];
}
function isArgOfType(arg, abiParameter) {
    const argType = typeof arg;
    const abiParameterType = abiParameter.type;
    switch (abiParameterType) {
        case 'address':
            return (0,_address_isAddress_js__WEBPACK_IMPORTED_MODULE_3__.isAddress)(arg);
        case 'bool':
            return argType === 'boolean';
        case 'function':
            return argType === 'string';
        case 'string':
            return argType === 'string';
        default: {
            if (abiParameterType === 'tuple' && 'components' in abiParameter)
                return Object.values(abiParameter.components).every((component, index) => {
                    return isArgOfType(Object.values(arg)[index], component);
                });
            // `(u)int<M>`: (un)signed integer type of `M` bits, `0 < M <= 256`, `M % 8 == 0`
            // https://regexr.com/6v8hp
            if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType))
                return argType === 'number' || argType === 'bigint';
            // `bytes<M>`: binary type of `M` bytes, `0 < M <= 32`
            // https://regexr.com/6va55
            if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType))
                return argType === 'string' || arg instanceof Uint8Array;
            // fixed-length (`<type>[M]`) and dynamic (`<type>[]`) arrays
            // https://regexr.com/6va6i
            if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) {
                return (Array.isArray(arg) &&
                    arg.every((x) => isArgOfType(x, {
                        ...abiParameter,
                        // Pop off `[]` or `[M]` from end of type
                        type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, ''),
                    })));
            }
            return false;
        }
    }
}
//# sourceMappingURL=getAbiItem.js.map

/***/ }),
/* 61 */
/*!***************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/hash/getEventSelector.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEventSelector: () => (/* binding */ getEventSelector)
/* harmony export */ });
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../encoding/toBytes.js */ 27);
/* harmony import */ var _getEventSignature_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getEventSignature.js */ 62);
/* harmony import */ var _keccak256_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keccak256.js */ 21);



const hash = (value) => (0,_keccak256_js__WEBPACK_IMPORTED_MODULE_0__.keccak256)((0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_1__.toBytes)(value));
const getEventSelector = (fn) => hash((0,_getEventSignature_js__WEBPACK_IMPORTED_MODULE_2__.getEventSignature)(fn));
//# sourceMappingURL=getEventSelector.js.map

/***/ }),
/* 62 */
/*!****************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/hash/getEventSignature.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEventSignature: () => (/* binding */ getEventSignature)
/* harmony export */ });
/* harmony import */ var _getFunctionSignature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFunctionSignature.js */ 33);

const getEventSignature = (fn) => {
    return (0,_getFunctionSignature_js__WEBPACK_IMPORTED_MODULE_0__.getFunctionSignature)(fn);
};
//# sourceMappingURL=getEventSignature.js.map

/***/ }),
/* 63 */
/*!*******************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/abi/formatAbiItemWithArgs.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatAbiItemWithArgs: () => (/* binding */ formatAbiItemWithArgs)
/* harmony export */ });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stringify.js */ 43);

function formatAbiItemWithArgs({ abiItem, args, includeFunctionName = true, includeName = false, }) {
    if (!('name' in abiItem))
        return;
    if (!('inputs' in abiItem))
        return;
    if (!abiItem.inputs)
        return;
    return `${includeFunctionName ? abiItem.name : ''}(${abiItem.inputs
        .map((input, i) => `${includeName && input.name ? `${input.name}: ` : ''}${typeof args[i] === 'object' ? (0,_stringify_js__WEBPACK_IMPORTED_MODULE_0__.stringify)(args[i]) : args[i]}`)
        .join(', ')})`;
}
//# sourceMappingURL=formatAbiItemWithArgs.js.map

/***/ }),
/* 64 */
/*!******************************************************!*\
  !*** ./node_modules/viem/_esm/constants/contract.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aggregate3Signature: () => (/* binding */ aggregate3Signature)
/* harmony export */ });
const aggregate3Signature = '0x82ad56cb';
//# sourceMappingURL=contract.js.map

/***/ }),
/* 65 */
/*!***********************************************!*\
  !*** ./node_modules/viem/_esm/utils/chain.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertCurrentChain: () => (/* binding */ assertCurrentChain),
/* harmony export */   defineChain: () => (/* binding */ defineChain),
/* harmony export */   getChainContractAddress: () => (/* binding */ getChainContractAddress)
/* harmony export */ });
/* harmony import */ var _errors_chain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors/chain.js */ 55);

function assertCurrentChain({ chain, currentChainId, }) {
    if (!chain)
        throw new _errors_chain_js__WEBPACK_IMPORTED_MODULE_0__.ChainNotFoundError();
    if (currentChainId !== chain.id)
        throw new _errors_chain_js__WEBPACK_IMPORTED_MODULE_0__.ChainMismatchError({ chain, currentChainId });
}
function defineChain(chain, config = {}) {
    const { fees = chain.fees, formatters = chain.formatters, serializers = chain.serializers, } = config;
    return {
        ...chain,
        fees,
        formatters,
        serializers,
    };
}
function getChainContractAddress({ blockNumber, chain, contract: name, }) {
    const contract = chain?.contracts?.[name];
    if (!contract)
        throw new _errors_chain_js__WEBPACK_IMPORTED_MODULE_0__.ChainDoesNotSupportContract({
            chain,
            contract: { name },
        });
    if (blockNumber &&
        contract.blockCreated &&
        contract.blockCreated > blockNumber)
        throw new _errors_chain_js__WEBPACK_IMPORTED_MODULE_0__.ChainDoesNotSupportContract({
            blockNumber,
            chain,
            contract: {
                name,
                blockCreated: contract.blockCreated,
            },
        });
    return contract.address;
}
//# sourceMappingURL=chain.js.map

/***/ }),
/* 66 */
/*!**********************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/promise/createBatchScheduler.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBatchScheduler: () => (/* binding */ createBatchScheduler)
/* harmony export */ });
const schedulerCache = /*#__PURE__*/ new Map();
function createBatchScheduler({ fn, id, shouldSplitBatch, wait = 0, }) {
    const exec = async () => {
        const scheduler = getScheduler();
        flush();
        const args = scheduler.map(({ args }) => args);
        if (args.length === 0)
            return;
        fn(args)
            .then((data) => {
            scheduler.forEach(({ pendingPromise }, i) => pendingPromise.resolve?.([data[i], data]));
        })
            .catch((err) => {
            scheduler.forEach(({ pendingPromise }) => pendingPromise.reject?.(err));
        });
    };
    const flush = () => schedulerCache.delete(id);
    const getBatchedArgs = () => getScheduler().map(({ args }) => args);
    const getScheduler = () => schedulerCache.get(id) || [];
    const setScheduler = (item) => schedulerCache.set(id, [...getScheduler(), item]);
    return {
        flush,
        async schedule(args) {
            const pendingPromise = {};
            const promise = new Promise((resolve, reject) => {
                pendingPromise.resolve = resolve;
                pendingPromise.reject = reject;
            });
            const split = shouldSplitBatch?.([...getBatchedArgs(), args]);
            if (split)
                exec();
            const hasActiveScheduler = getScheduler().length > 0;
            if (hasActiveScheduler) {
                setScheduler({ args, pendingPromise });
                return promise;
            }
            setScheduler({ args, pendingPromise });
            setTimeout(exec, wait);
            return promise;
        },
    };
}
//# sourceMappingURL=createBatchScheduler.js.map

/***/ }),
/* 67 */
/*!****************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/abi/encodeFunctionData.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodeFunctionData: () => (/* binding */ encodeFunctionData)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors/abi.js */ 17);
/* harmony import */ var _data_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/concat.js */ 37);
/* harmony import */ var _hash_getFunctionSelector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hash/getFunctionSelector.js */ 20);
/* harmony import */ var _encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./encodeAbiParameters.js */ 36);
/* harmony import */ var _formatAbiItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatAbiItem.js */ 18);
/* harmony import */ var _getAbiItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAbiItem.js */ 60);






function encodeFunctionData({ abi, args, functionName, }) {
    let abiItem = abi[0];
    if (functionName) {
        abiItem = (0,_getAbiItem_js__WEBPACK_IMPORTED_MODULE_0__.getAbiItem)({
            abi,
            args,
            name: functionName,
        });
        if (!abiItem)
            throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__.AbiFunctionNotFoundError(functionName, {
                docsPath: '/docs/contract/encodeFunctionData',
            });
    }
    if (abiItem.type !== 'function')
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__.AbiFunctionNotFoundError(undefined, {
            docsPath: '/docs/contract/encodeFunctionData',
        });
    const definition = (0,_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_2__.formatAbiItem)(abiItem);
    const signature = (0,_hash_getFunctionSelector_js__WEBPACK_IMPORTED_MODULE_3__.getFunctionSelector)(definition);
    const data = 'inputs' in abiItem && abiItem.inputs
        ? (0,_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_4__.encodeAbiParameters)(abiItem.inputs, (args ?? []))
        : undefined;
    return (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_5__.concatHex)([signature, data ?? '0x']);
}
//# sourceMappingURL=encodeFunctionData.js.map

/***/ }),
/* 68 */
/*!**************************************************!*\
  !*** ./node_modules/viem/_esm/constants/abis.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addressResolverAbi: () => (/* binding */ addressResolverAbi),
/* harmony export */   multicall3Abi: () => (/* binding */ multicall3Abi),
/* harmony export */   smartAccountAbi: () => (/* binding */ smartAccountAbi),
/* harmony export */   textResolverAbi: () => (/* binding */ textResolverAbi),
/* harmony export */   universalResolverResolveAbi: () => (/* binding */ universalResolverResolveAbi),
/* harmony export */   universalResolverReverseAbi: () => (/* binding */ universalResolverReverseAbi),
/* harmony export */   universalSignatureValidatorAbi: () => (/* binding */ universalSignatureValidatorAbi)
/* harmony export */ });
/* [Multicall3](https://github.com/mds1/multicall) */
const multicall3Abi = [
    {
        inputs: [
            {
                components: [
                    {
                        name: 'target',
                        type: 'address',
                    },
                    {
                        name: 'allowFailure',
                        type: 'bool',
                    },
                    {
                        name: 'callData',
                        type: 'bytes',
                    },
                ],
                name: 'calls',
                type: 'tuple[]',
            },
        ],
        name: 'aggregate3',
        outputs: [
            {
                components: [
                    {
                        name: 'success',
                        type: 'bool',
                    },
                    {
                        name: 'returnData',
                        type: 'bytes',
                    },
                ],
                name: 'returnData',
                type: 'tuple[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
const universalResolverErrors = [
    {
        inputs: [],
        name: 'ResolverNotFound',
        type: 'error',
    },
    {
        inputs: [],
        name: 'ResolverWildcardNotSupported',
        type: 'error',
    },
];
const universalResolverResolveAbi = [
    ...universalResolverErrors,
    {
        name: 'resolve',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            { name: 'name', type: 'bytes' },
            { name: 'data', type: 'bytes' },
        ],
        outputs: [
            { name: '', type: 'bytes' },
            { name: 'address', type: 'address' },
        ],
    },
];
const universalResolverReverseAbi = [
    ...universalResolverErrors,
    {
        name: 'reverse',
        type: 'function',
        stateMutability: 'view',
        inputs: [{ type: 'bytes', name: 'reverseName' }],
        outputs: [
            { type: 'string', name: 'resolvedName' },
            { type: 'address', name: 'resolvedAddress' },
            { type: 'address', name: 'reverseResolver' },
            { type: 'address', name: 'resolver' },
        ],
    },
];
const textResolverAbi = [
    {
        name: 'text',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            { name: 'name', type: 'bytes32' },
            { name: 'key', type: 'string' },
        ],
        outputs: [{ name: '', type: 'string' }],
    },
];
const addressResolverAbi = [
    {
        name: 'addr',
        type: 'function',
        stateMutability: 'view',
        inputs: [{ name: 'name', type: 'bytes32' }],
        outputs: [{ name: '', type: 'address' }],
    },
    {
        name: 'addr',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            { name: 'name', type: 'bytes32' },
            { name: 'coinType', type: 'uint256' },
        ],
        outputs: [{ name: '', type: 'bytes' }],
    },
];
// ERC-1271
// isValidSignature(bytes32 hash, bytes signature) → bytes4 magicValue
const smartAccountAbi = [
    {
        name: 'isValidSignature',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            { name: 'hash', type: 'bytes32' },
            { name: 'signature', type: 'bytes' },
        ],
        outputs: [{ name: '', type: 'bytes4' }],
    },
];
// ERC-6492 - universal deployless signature validator contract
// constructor(address _signer, bytes32 _hash, bytes _signature) → bytes4 returnValue
// returnValue is either 0x1 (valid) or 0x0 (invalid)
const universalSignatureValidatorAbi = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '_signer',
                type: 'address',
            },
            {
                internalType: 'bytes32',
                name: '_hash',
                type: 'bytes32',
            },
            {
                internalType: 'bytes',
                name: '_signature',
                type: 'bytes',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
];
//# sourceMappingURL=abis.js.map

/***/ }),
/* 69 */
/*!******************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/abi/decodeFunctionResult.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodeFunctionResult: () => (/* binding */ decodeFunctionResult)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors/abi.js */ 17);
/* harmony import */ var _decodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decodeAbiParameters.js */ 35);
/* harmony import */ var _getAbiItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAbiItem.js */ 60);



const docsPath = '/docs/contract/decodeFunctionResult';
function decodeFunctionResult({ abi, args, functionName, data, }) {
    let abiItem = abi[0];
    if (functionName) {
        abiItem = (0,_getAbiItem_js__WEBPACK_IMPORTED_MODULE_0__.getAbiItem)({
            abi,
            args,
            name: functionName,
        });
        if (!abiItem)
            throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__.AbiFunctionNotFoundError(functionName, { docsPath });
    }
    if (abiItem.type !== 'function')
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__.AbiFunctionNotFoundError(undefined, { docsPath });
    if (!abiItem.outputs)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__.AbiFunctionOutputsNotFoundError(abiItem.name, { docsPath });
    const values = (0,_decodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_2__.decodeAbiParameters)(abiItem.outputs, data);
    if (values && values.length > 1)
        return values;
    if (values && values.length === 1)
        return values[0];
    return undefined;
}
//# sourceMappingURL=decodeFunctionResult.js.map

/***/ }),
/* 70 */
/*!********************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/createBlockFilter.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBlockFilter: () => (/* binding */ createBlockFilter)
/* harmony export */ });
/* harmony import */ var _utils_filters_createFilterRequestScope_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/filters/createFilterRequestScope.js */ 71);

/**
 * Creates a [`Filter`](https://viem.sh/docs/glossary/types.html#filter) to listen for new block hashes that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges.html).
 *
 * - Docs: https://viem.sh/docs/actions/public/createBlockFilter.html
 * - JSON-RPC Methods: [`eth_newBlockFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newBlockFilter)
 *
 * @param client - Client to use
 * @returns [`Filter`](https://viem.sh/docs/glossary/types.html#filter). {@link CreateBlockFilterReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createBlockFilter } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createBlockFilter(client)
 * // { id: "0x345a6572337856574a76364e457a4366", type: 'block' }
 */
async function createBlockFilter(client) {
    const getRequest = (0,_utils_filters_createFilterRequestScope_js__WEBPACK_IMPORTED_MODULE_0__.createFilterRequestScope)(client, {
        method: 'eth_newBlockFilter',
    });
    const id = await client.request({
        method: 'eth_newBlockFilter',
    });
    return { id, request: getRequest(id), type: 'block' };
}
//# sourceMappingURL=createBlockFilter.js.map

/***/ }),
/* 71 */
/*!**************************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/filters/createFilterRequestScope.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFilterRequestScope: () => (/* binding */ createFilterRequestScope)
/* harmony export */ });
/**
 * Scopes `request` to the filter ID. If the client is a fallback, it will
 * listen for responses and scope the child transport `request` function
 * to the successful filter ID.
 */
function createFilterRequestScope(client, { method }) {
    const requestMap = {};
    if (client.transport.type === 'fallback')
        client.transport.onResponse?.(({ method: method_, response: id, status, transport, }) => {
            if (status === 'success' && method === method_)
                requestMap[id] = transport.request;
        });
    return ((id) => requestMap[id] || client.request);
}
//# sourceMappingURL=createFilterRequestScope.js.map

/***/ }),
/* 72 */
/*!****************************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/createContractEventFilter.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContractEventFilter: () => (/* binding */ createContractEventFilter)
/* harmony export */ });
/* harmony import */ var _utils_abi_encodeEventTopics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/abi/encodeEventTopics.js */ 73);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/encoding/toHex.js */ 32);
/* harmony import */ var _utils_filters_createFilterRequestScope_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/filters/createFilterRequestScope.js */ 71);



/**
 * Creates a Filter to retrieve event logs that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges.html) or [`getFilterLogs`](https://viem.sh/docs/actions/public/getFilterLogs.html).
 *
 * - Docs: https://viem.sh/docs/contract/createContractEventFilter.html
 *
 * @param client - Client to use
 * @param parameters - {@link CreateContractEventFilterParameters}
 * @returns [`Filter`](https://viem.sh/docs/glossary/types.html#filter). {@link CreateContractEventFilterReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbi } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createContractEventFilter } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createContractEventFilter(client, {
 *   abi: parseAbi(['event Transfer(address indexed, address indexed, uint256)']),
 * })
 */
async function createContractEventFilter(client, { address, abi, args, eventName, fromBlock, strict, toBlock, }) {
    const getRequest = (0,_utils_filters_createFilterRequestScope_js__WEBPACK_IMPORTED_MODULE_0__.createFilterRequestScope)(client, {
        method: 'eth_newFilter',
    });
    const topics = eventName
        ? (0,_utils_abi_encodeEventTopics_js__WEBPACK_IMPORTED_MODULE_1__.encodeEventTopics)({
            abi,
            args,
            eventName,
        })
        : undefined;
    const id = await client.request({
        method: 'eth_newFilter',
        params: [
            {
                address,
                fromBlock: typeof fromBlock === 'bigint' ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__.numberToHex)(fromBlock) : fromBlock,
                toBlock: typeof toBlock === 'bigint' ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__.numberToHex)(toBlock) : toBlock,
                topics,
            },
        ],
    });
    return {
        abi,
        args,
        eventName,
        id,
        request: getRequest(id),
        strict,
        type: 'event',
    };
}
//# sourceMappingURL=createContractEventFilter.js.map

/***/ }),
/* 73 */
/*!***************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/abi/encodeEventTopics.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodeEventTopics: () => (/* binding */ encodeEventTopics)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors/abi.js */ 17);
/* harmony import */ var _errors_log_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../errors/log.js */ 74);
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../encoding/toBytes.js */ 27);
/* harmony import */ var _hash_getEventSelector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hash/getEventSelector.js */ 61);
/* harmony import */ var _hash_keccak256_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hash/keccak256.js */ 21);
/* harmony import */ var _encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./encodeAbiParameters.js */ 36);
/* harmony import */ var _formatAbiItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatAbiItem.js */ 18);
/* harmony import */ var _getAbiItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAbiItem.js */ 60);








function encodeEventTopics({ abi, eventName, args }) {
    let abiItem = abi[0];
    if (eventName) {
        abiItem = (0,_getAbiItem_js__WEBPACK_IMPORTED_MODULE_0__.getAbiItem)({
            abi,
            args,
            name: eventName,
        });
        if (!abiItem)
            throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__.AbiEventNotFoundError(eventName, {
                docsPath: '/docs/contract/encodeEventTopics',
            });
    }
    if (abiItem.type !== 'event')
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_1__.AbiEventNotFoundError(undefined, {
            docsPath: '/docs/contract/encodeEventTopics',
        });
    const definition = (0,_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_2__.formatAbiItem)(abiItem);
    const signature = (0,_hash_getEventSelector_js__WEBPACK_IMPORTED_MODULE_3__.getEventSelector)(definition);
    let topics = [];
    if (args && 'inputs' in abiItem) {
        const indexedInputs = abiItem.inputs?.filter((param) => 'indexed' in param && param.indexed);
        const args_ = Array.isArray(args)
            ? args
            : Object.values(args).length > 0
                ? indexedInputs?.map((x) => args[x.name]) ?? []
                : [];
        if (args_.length > 0) {
            topics =
                indexedInputs?.map((param, i) => Array.isArray(args_[i])
                    ? args_[i].map((_, j) => encodeArg({ param, value: args_[i][j] }))
                    : args_[i]
                        ? encodeArg({ param, value: args_[i] })
                        : null) ?? [];
        }
    }
    return [signature, ...topics];
}
function encodeArg({ param, value, }) {
    if (param.type === 'string' || param.type === 'bytes')
        return (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_4__.keccak256)((0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_5__.toBytes)(value));
    if (param.type === 'tuple' || param.type.match(/^(.*)\[(\d+)?\]$/))
        throw new _errors_log_js__WEBPACK_IMPORTED_MODULE_6__.FilterTypeNotSupportedError(param.type);
    return (0,_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_7__.encodeAbiParameters)([param], [value]);
}
//# sourceMappingURL=encodeEventTopics.js.map

/***/ }),
/* 74 */
/*!**********************************************!*\
  !*** ./node_modules/viem/_esm/errors/log.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterTypeNotSupportedError: () => (/* binding */ FilterTypeNotSupportedError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 14);

class FilterTypeNotSupportedError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(type) {
        super(`Filter type "${type}" is not supported.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'FilterTypeNotSupportedError'
        });
    }
}
//# sourceMappingURL=log.js.map

/***/ }),
/* 75 */
/*!********************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/createEventFilter.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEventFilter: () => (/* binding */ createEventFilter)
/* harmony export */ });
/* harmony import */ var _utils_abi_encodeEventTopics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/abi/encodeEventTopics.js */ 73);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/encoding/toHex.js */ 32);
/* harmony import */ var _utils_filters_createFilterRequestScope_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/filters/createFilterRequestScope.js */ 71);



/**
 * Creates a [`Filter`](https://viem.sh/docs/glossary/types.html#filter) to listen for new events that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges.html).
 *
 * - Docs: https://viem.sh/docs/actions/public/createEventFilter.html
 * - JSON-RPC Methods: [`eth_newFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter)
 *
 * @param client - Client to use
 * @param parameters - {@link CreateEventFilterParameters}
 * @returns [`Filter`](https://viem.sh/docs/glossary/types.html#filter). {@link CreateEventFilterReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createEventFilter } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createEventFilter(client, {
 *   address: '0xfba3912ca04dd458c843e2ee08967fc04f3579c2',
 * })
 */
async function createEventFilter(client, { address, args, event, events: events_, fromBlock, strict, toBlock, } = {}) {
    const events = events_ ?? (event ? [event] : undefined);
    const getRequest = (0,_utils_filters_createFilterRequestScope_js__WEBPACK_IMPORTED_MODULE_0__.createFilterRequestScope)(client, {
        method: 'eth_newFilter',
    });
    let topics = [];
    if (events) {
        topics = [
            events.flatMap((event) => (0,_utils_abi_encodeEventTopics_js__WEBPACK_IMPORTED_MODULE_1__.encodeEventTopics)({
                abi: [event],
                eventName: event.name,
                args,
            })),
        ];
        if (event)
            topics = topics[0];
    }
    const id = await client.request({
        method: 'eth_newFilter',
        params: [
            {
                address,
                fromBlock: typeof fromBlock === 'bigint' ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__.numberToHex)(fromBlock) : fromBlock,
                toBlock: typeof toBlock === 'bigint' ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__.numberToHex)(toBlock) : toBlock,
                ...(topics.length ? { topics } : {}),
            },
        ],
    });
    return {
        abi: events,
        args,
        eventName: event ? event.name : undefined,
        fromBlock,
        id,
        request: getRequest(id),
        strict,
        toBlock,
        type: 'event',
    };
}
//# sourceMappingURL=createEventFilter.js.map

/***/ }),
/* 76 */
/*!*********************************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/createPendingTransactionFilter.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPendingTransactionFilter: () => (/* binding */ createPendingTransactionFilter)
/* harmony export */ });
/* harmony import */ var _utils_filters_createFilterRequestScope_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/filters/createFilterRequestScope.js */ 71);

/**
 * Creates a Filter to listen for new pending transaction hashes that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges.html).
 *
 * - Docs: https://viem.sh/docs/actions/public/createPendingTransactionFilter.html
 * - JSON-RPC Methods: [`eth_newPendingTransactionFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newpendingtransactionfilter)
 *
 * @param client - Client to use
 * @returns [`Filter`](https://viem.sh/docs/glossary/types.html#filter). {@link CreateBlockFilterReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createPendingTransactionFilter } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createPendingTransactionFilter(client)
 * // { id: "0x345a6572337856574a76364e457a4366", type: 'transaction' }
 */
async function createPendingTransactionFilter(client) {
    const getRequest = (0,_utils_filters_createFilterRequestScope_js__WEBPACK_IMPORTED_MODULE_0__.createFilterRequestScope)(client, {
        method: 'eth_newPendingTransactionFilter',
    });
    const id = await client.request({
        method: 'eth_newPendingTransactionFilter',
    });
    return { id, request: getRequest(id), type: 'transaction' };
}
//# sourceMappingURL=createPendingTransactionFilter.js.map

/***/ }),
/* 77 */
/*!**********************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/estimateContractGas.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   estimateContractGas: () => (/* binding */ estimateContractGas)
/* harmony export */ });
/* harmony import */ var _accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../accounts/utils/parseAccount.js */ 4);
/* harmony import */ var _utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/abi/encodeFunctionData.js */ 67);
/* harmony import */ var _utils_errors_getContractError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/errors/getContractError.js */ 93);
/* harmony import */ var _estimateGas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estimateGas.js */ 78);




/**
 * Estimates the gas required to successfully execute a contract write function call.
 *
 * - Docs: https://viem.sh/docs/contract/estimateContractGas.html
 *
 * Internally, uses a [Public Client](https://viem.sh/docs/clients/public.html) to call the [`estimateGas` action](https://viem.sh/docs/actions/public/estimateGas.html) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData.html).
 *
 * @param client - Client to use
 * @param parameters - {@link EstimateContractGasParameters}
 * @returns The gas estimate (in wei). {@link EstimateContractGasReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbi } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { estimateContractGas } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const gas = await estimateContractGas(client, {
 *   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *   abi: parseAbi(['function mint() public']),
 *   functionName: 'mint',
 *   account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 * })
 */
async function estimateContractGas(client, { abi, address, args, functionName, ...request }) {
    const data = (0,_utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_0__.encodeFunctionData)({
        abi,
        args,
        functionName,
    });
    try {
        const gas = await (0,_estimateGas_js__WEBPACK_IMPORTED_MODULE_1__.estimateGas)(client, {
            data,
            to: address,
            ...request,
        });
        return gas;
    }
    catch (err) {
        const account = request.account ? (0,_accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_2__.parseAccount)(request.account) : undefined;
        throw (0,_utils_errors_getContractError_js__WEBPACK_IMPORTED_MODULE_3__.getContractError)(err, {
            abi: abi,
            address,
            args,
            docsPath: '/docs/contract/estimateContractGas',
            functionName,
            sender: account?.address,
        });
    }
}
//# sourceMappingURL=estimateContractGas.js.map

/***/ }),
/* 78 */
/*!**************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/estimateGas.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   estimateGas: () => (/* binding */ estimateGas)
/* harmony export */ });
/* harmony import */ var _accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../accounts/utils/parseAccount.js */ 4);
/* harmony import */ var _errors_account_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors/account.js */ 79);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/encoding/toHex.js */ 32);
/* harmony import */ var _utils_errors_getEstimateGasError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/errors/getEstimateGasError.js */ 91);
/* harmony import */ var _utils_formatters_extract_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/formatters/extract.js */ 54);
/* harmony import */ var _utils_formatters_transactionRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/formatters/transactionRequest.js */ 52);
/* harmony import */ var _utils_transaction_assertRequest_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/transaction/assertRequest.js */ 45);
/* harmony import */ var _wallet_prepareTransactionRequest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wallet/prepareTransactionRequest.js */ 80);








/**
 * Estimates the gas necessary to complete a transaction without submitting it to the network.
 *
 * - Docs: https://viem.sh/docs/actions/public/estimateGas.html
 * - JSON-RPC Methods: [`eth_estimateGas`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_estimategas)
 *
 * @param client - Client to use
 * @param parameters - {@link EstimateGasParameters}
 * @returns The gas estimate (in wei). {@link EstimateGasReturnType}
 *
 * @example
 * import { createPublicClient, http, parseEther } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { estimateGas } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const gasEstimate = await estimateGas(client, {
 *   account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 *   to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 *   value: parseEther('1'),
 * })
 */
async function estimateGas(client, args) {
    const account_ = args.account ?? client.account;
    if (!account_)
        throw new _errors_account_js__WEBPACK_IMPORTED_MODULE_0__.AccountNotFoundError({
            docsPath: '/docs/actions/public/estimateGas',
        });
    const account = (0,_accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_1__.parseAccount)(account_);
    try {
        const { accessList, blockNumber, blockTag, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, ...rest } = account.type === 'local'
            ? (await (0,_wallet_prepareTransactionRequest_js__WEBPACK_IMPORTED_MODULE_2__.prepareTransactionRequest)(client, args))
            : args;
        const blockNumberHex = blockNumber ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__.numberToHex)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        (0,_utils_transaction_assertRequest_js__WEBPACK_IMPORTED_MODULE_4__.assertRequest)(args);
        const format = client.chain?.formatters?.transactionRequest?.format ||
            _utils_formatters_transactionRequest_js__WEBPACK_IMPORTED_MODULE_5__.formatTransactionRequest;
        const request = format({
            // Pick out extra data that might exist on the chain's transaction request type.
            ...(0,_utils_formatters_extract_js__WEBPACK_IMPORTED_MODULE_6__.extract)(rest, { format }),
            from: account.address,
            accessList,
            data,
            gas,
            gasPrice,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to,
            value,
        });
        const balance = await client.request({
            method: 'eth_estimateGas',
            params: block ? [request, block] : [request],
        });
        return BigInt(balance);
    }
    catch (err) {
        throw (0,_utils_errors_getEstimateGasError_js__WEBPACK_IMPORTED_MODULE_7__.getEstimateGasError)(err, {
            ...args,
            account,
            chain: client.chain,
        });
    }
}
//# sourceMappingURL=estimateGas.js.map

/***/ }),
/* 79 */
/*!**************************************************!*\
  !*** ./node_modules/viem/_esm/errors/account.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountNotFoundError: () => (/* binding */ AccountNotFoundError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 14);

class AccountNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ docsPath } = {}) {
        super([
            'Could not find an Account to execute with this Action.',
            'Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.',
        ].join('\n'), {
            docsPath,
            docsSlug: 'account',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AccountNotFoundError'
        });
    }
}
//# sourceMappingURL=account.js.map

/***/ }),
/* 80 */
/*!****************************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prepareTransactionRequest: () => (/* binding */ prepareTransactionRequest)
/* harmony export */ });
/* harmony import */ var _accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../accounts/utils/parseAccount.js */ 4);
/* harmony import */ var _actions_public_estimateFeesPerGas_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/public/estimateFeesPerGas.js */ 87);
/* harmony import */ var _actions_public_estimateGas_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/public/estimateGas.js */ 78);
/* harmony import */ var _actions_public_getBlock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/public/getBlock.js */ 81);
/* harmony import */ var _actions_public_getTransactionCount_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/public/getTransactionCount.js */ 85);
/* harmony import */ var _errors_account_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors/account.js */ 79);
/* harmony import */ var _errors_fee_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../errors/fee.js */ 88);
/* harmony import */ var _utils_transaction_assertRequest_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/transaction/assertRequest.js */ 45);
/* harmony import */ var _utils_transaction_getTransactionType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/transaction/getTransactionType.js */ 86);









/**
 * Prepares a transaction request for signing.
 *
 * - Docs: https://viem.sh/docs/actions/wallet/prepareTransactionRequest.html
 *
 * @param args - {@link PrepareTransactionRequestParameters}
 * @returns The transaction request. {@link PrepareTransactionRequestReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { prepareTransactionRequest } from 'viem/actions'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 * const request = await prepareTransactionRequest(client, {
 *   account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 *   to: '0x0000000000000000000000000000000000000000',
 *   value: 1n,
 * })
 *
 * @example
 * // Account Hoisting
 * import { createWalletClient, http } from 'viem'
 * import { privateKeyToAccount } from 'viem/accounts'
 * import { mainnet } from 'viem/chains'
 * import { prepareTransactionRequest } from 'viem/actions'
 *
 * const client = createWalletClient({
 *   account: privateKeyToAccount('0x…'),
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 * const request = await prepareTransactionRequest(client, {
 *   to: '0x0000000000000000000000000000000000000000',
 *   value: 1n,
 * })
 */
async function prepareTransactionRequest(client, args) {
    const { account: account_ = client.account, chain, gas, nonce, type } = args;
    if (!account_)
        throw new _errors_account_js__WEBPACK_IMPORTED_MODULE_0__.AccountNotFoundError();
    const account = (0,_accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_1__.parseAccount)(account_);
    const block = await (0,_actions_public_getBlock_js__WEBPACK_IMPORTED_MODULE_2__.getBlock)(client, { blockTag: 'latest' });
    const request = { ...args, from: account.address };
    if (typeof nonce === 'undefined')
        request.nonce = await (0,_actions_public_getTransactionCount_js__WEBPACK_IMPORTED_MODULE_3__.getTransactionCount)(client, {
            address: account.address,
            blockTag: 'pending',
        });
    if (typeof type === 'undefined') {
        try {
            request.type = (0,_utils_transaction_getTransactionType_js__WEBPACK_IMPORTED_MODULE_4__.getTransactionType)(request);
        }
        catch {
            // infer type from block
            request.type =
                typeof block.baseFeePerGas === 'bigint' ? 'eip1559' : 'legacy';
        }
    }
    if (request.type === 'eip1559') {
        // EIP-1559 fees
        const { maxFeePerGas, maxPriorityFeePerGas } = await (0,_actions_public_estimateFeesPerGas_js__WEBPACK_IMPORTED_MODULE_5__.internal_estimateFeesPerGas)(client, {
            block,
            chain,
            request: request,
        });
        if (typeof args.maxPriorityFeePerGas === 'undefined' &&
            args.maxFeePerGas &&
            args.maxFeePerGas < maxPriorityFeePerGas)
            throw new _errors_fee_js__WEBPACK_IMPORTED_MODULE_6__.MaxFeePerGasTooLowError({
                maxPriorityFeePerGas,
            });
        request.maxPriorityFeePerGas = maxPriorityFeePerGas;
        request.maxFeePerGas = maxFeePerGas;
    }
    else {
        // Legacy fees
        if (typeof args.maxFeePerGas !== 'undefined' ||
            typeof args.maxPriorityFeePerGas !== 'undefined')
            throw new _errors_fee_js__WEBPACK_IMPORTED_MODULE_6__.Eip1559FeesNotSupportedError();
        const { gasPrice: gasPrice_ } = await (0,_actions_public_estimateFeesPerGas_js__WEBPACK_IMPORTED_MODULE_5__.internal_estimateFeesPerGas)(client, {
            block,
            chain,
            request: request,
            type: 'legacy',
        });
        request.gasPrice = gasPrice_;
    }
    if (typeof gas === 'undefined')
        request.gas = await (0,_actions_public_estimateGas_js__WEBPACK_IMPORTED_MODULE_7__.estimateGas)(client, {
            ...request,
            account: { address: account.address, type: 'json-rpc' },
        });
    (0,_utils_transaction_assertRequest_js__WEBPACK_IMPORTED_MODULE_8__.assertRequest)(request);
    return request;
}
//# sourceMappingURL=prepareTransactionRequest.js.map

/***/ }),
/* 81 */
/*!***********************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/getBlock.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBlock: () => (/* binding */ getBlock)
/* harmony export */ });
/* harmony import */ var _errors_block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors/block.js */ 82);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/encoding/toHex.js */ 32);
/* harmony import */ var _utils_formatters_block_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/formatters/block.js */ 83);



/**
 * Returns information about a block at a block number, hash, or tag.
 *
 * - Docs: https://viem.sh/docs/actions/public/getBlock.html
 * - Examples: https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/blocks/fetching-blocks
 * - JSON-RPC Methods:
 *   - Calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbynumber) for `blockNumber` & `blockTag`.
 *   - Calls [`eth_getBlockByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbyhash) for `blockHash`.
 *
 * @param client - Client to use
 * @param parameters - {@link GetBlockParameters}
 * @returns Information about the block. {@link GetBlockReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getBlock } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const block = await getBlock(client)
 */
async function getBlock(client, { blockHash, blockNumber, blockTag: blockTag_, includeTransactions: includeTransactions_, } = {}) {
    const blockTag = blockTag_ ?? 'latest';
    const includeTransactions = includeTransactions_ ?? false;
    const blockNumberHex = blockNumber !== undefined ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.numberToHex)(blockNumber) : undefined;
    let block = null;
    if (blockHash) {
        block = await client.request({
            method: 'eth_getBlockByHash',
            params: [blockHash, includeTransactions],
        });
    }
    else {
        block = await client.request({
            method: 'eth_getBlockByNumber',
            params: [blockNumberHex || blockTag, includeTransactions],
        });
    }
    if (!block)
        throw new _errors_block_js__WEBPACK_IMPORTED_MODULE_1__.BlockNotFoundError({ blockHash, blockNumber });
    const format = client.chain?.formatters?.block?.format || _utils_formatters_block_js__WEBPACK_IMPORTED_MODULE_2__.formatBlock;
    return format(block);
}
//# sourceMappingURL=getBlock.js.map

/***/ }),
/* 82 */
/*!************************************************!*\
  !*** ./node_modules/viem/_esm/errors/block.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockNotFoundError: () => (/* binding */ BlockNotFoundError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 14);

class BlockNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ blockHash, blockNumber, }) {
        let identifier = 'Block';
        if (blockHash)
            identifier = `Block at hash "${blockHash}"`;
        if (blockNumber)
            identifier = `Block at number "${blockNumber}"`;
        super(`${identifier} could not be found.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BlockNotFoundError'
        });
    }
}
//# sourceMappingURL=block.js.map

/***/ }),
/* 83 */
/*!**********************************************************!*\
  !*** ./node_modules/viem/_esm/utils/formatters/block.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defineBlock: () => (/* binding */ defineBlock),
/* harmony export */   formatBlock: () => (/* binding */ formatBlock)
/* harmony export */ });
/* harmony import */ var _formatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatter.js */ 53);
/* harmony import */ var _transaction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction.js */ 84);


function formatBlock(block) {
    const transactions = block.transactions?.map((transaction) => {
        if (typeof transaction === 'string')
            return transaction;
        return (0,_transaction_js__WEBPACK_IMPORTED_MODULE_0__.formatTransaction)(transaction);
    });
    return {
        ...block,
        baseFeePerGas: block.baseFeePerGas ? BigInt(block.baseFeePerGas) : null,
        difficulty: block.difficulty ? BigInt(block.difficulty) : undefined,
        gasLimit: block.gasLimit ? BigInt(block.gasLimit) : undefined,
        gasUsed: block.gasUsed ? BigInt(block.gasUsed) : undefined,
        hash: block.hash ? block.hash : null,
        logsBloom: block.logsBloom ? block.logsBloom : null,
        nonce: block.nonce ? block.nonce : null,
        number: block.number ? BigInt(block.number) : null,
        size: block.size ? BigInt(block.size) : undefined,
        timestamp: block.timestamp ? BigInt(block.timestamp) : undefined,
        transactions,
        totalDifficulty: block.totalDifficulty
            ? BigInt(block.totalDifficulty)
            : null,
    };
}
const defineBlock = /*#__PURE__*/ (0,_formatter_js__WEBPACK_IMPORTED_MODULE_1__.defineFormatter)('block', formatBlock);
//# sourceMappingURL=block.js.map

/***/ }),
/* 84 */
/*!****************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/formatters/transaction.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defineTransaction: () => (/* binding */ defineTransaction),
/* harmony export */   formatTransaction: () => (/* binding */ formatTransaction),
/* harmony export */   transactionType: () => (/* binding */ transactionType)
/* harmony export */ });
/* harmony import */ var _encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoding/fromHex.js */ 28);
/* harmony import */ var _formatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatter.js */ 53);


const transactionType = {
    '0x0': 'legacy',
    '0x1': 'eip2930',
    '0x2': 'eip1559',
};
function formatTransaction(transaction) {
    const transaction_ = {
        ...transaction,
        blockHash: transaction.blockHash ? transaction.blockHash : null,
        blockNumber: transaction.blockNumber
            ? BigInt(transaction.blockNumber)
            : null,
        chainId: transaction.chainId ? (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_0__.hexToNumber)(transaction.chainId) : undefined,
        gas: transaction.gas ? BigInt(transaction.gas) : undefined,
        gasPrice: transaction.gasPrice ? BigInt(transaction.gasPrice) : undefined,
        maxFeePerGas: transaction.maxFeePerGas
            ? BigInt(transaction.maxFeePerGas)
            : undefined,
        maxPriorityFeePerGas: transaction.maxPriorityFeePerGas
            ? BigInt(transaction.maxPriorityFeePerGas)
            : undefined,
        nonce: transaction.nonce ? (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_0__.hexToNumber)(transaction.nonce) : undefined,
        to: transaction.to ? transaction.to : null,
        transactionIndex: transaction.transactionIndex
            ? Number(transaction.transactionIndex)
            : null,
        type: transaction.type ? transactionType[transaction.type] : undefined,
        typeHex: transaction.type ? transaction.type : undefined,
        value: transaction.value ? BigInt(transaction.value) : undefined,
        v: transaction.v ? BigInt(transaction.v) : undefined,
    };
    if (transaction_.type === 'legacy') {
        delete transaction_.accessList;
        delete transaction_.maxFeePerGas;
        delete transaction_.maxPriorityFeePerGas;
    }
    if (transaction_.type === 'eip2930') {
        delete transaction_.maxFeePerGas;
        delete transaction_.maxPriorityFeePerGas;
    }
    return transaction_;
}
const defineTransaction = /*#__PURE__*/ (0,_formatter_js__WEBPACK_IMPORTED_MODULE_1__.defineFormatter)('transaction', formatTransaction);
//# sourceMappingURL=transaction.js.map

/***/ }),
/* 85 */
/*!**********************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/getTransactionCount.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTransactionCount: () => (/* binding */ getTransactionCount)
/* harmony export */ });
/* harmony import */ var _utils_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/encoding/fromHex.js */ 28);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/encoding/toHex.js */ 32);


/**
 * Returns the number of [Transactions](https://viem.sh/docs/glossary/terms.html#transaction) an Account has broadcast / sent.
 *
 * - Docs: https://viem.sh/docs/actions/public/getTransactionCount.html
 * - JSON-RPC Methods: [`eth_getTransactionCount`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactioncount)
 *
 * @param client - Client to use
 * @param parameters - {@link GetTransactionCountParameters}
 * @returns The number of transactions an account has sent. {@link GetTransactionCountReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getTransactionCount } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const transactionCount = await getTransactionCount(client, {
 *   address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 * })
 */
async function getTransactionCount(client, { address, blockTag = 'latest', blockNumber }) {
    const count = await client.request({
        method: 'eth_getTransactionCount',
        params: [address, blockNumber ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.numberToHex)(blockNumber) : blockTag],
    });
    return (0,_utils_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_1__.hexToNumber)(count);
}
//# sourceMappingURL=getTransactionCount.js.map

/***/ }),
/* 86 */
/*!************************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/transaction/getTransactionType.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTransactionType: () => (/* binding */ getTransactionType)
/* harmony export */ });
/* harmony import */ var _errors_transaction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors/transaction.js */ 46);

function getTransactionType(transaction) {
    if (transaction.type)
        return transaction.type;
    if (typeof transaction.maxFeePerGas !== 'undefined' ||
        typeof transaction.maxPriorityFeePerGas !== 'undefined')
        return 'eip1559';
    if (typeof transaction.gasPrice !== 'undefined') {
        if (typeof transaction.accessList !== 'undefined')
            return 'eip2930';
        return 'legacy';
    }
    throw new _errors_transaction_js__WEBPACK_IMPORTED_MODULE_0__.InvalidSerializableTransactionError({ transaction });
}
//# sourceMappingURL=getTransactionType.js.map

/***/ }),
/* 87 */
/*!*********************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/estimateFeesPerGas.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   estimateFeesPerGas: () => (/* binding */ estimateFeesPerGas),
/* harmony export */   internal_estimateFeesPerGas: () => (/* binding */ internal_estimateFeesPerGas)
/* harmony export */ });
/* harmony import */ var _errors_fee_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors/fee.js */ 88);
/* harmony import */ var _estimateMaxPriorityFeePerGas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estimateMaxPriorityFeePerGas.js */ 89);
/* harmony import */ var _getBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBlock.js */ 81);
/* harmony import */ var _getGasPrice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getGasPrice.js */ 90);




/**
 * Returns an estimate for the fees per gas (in wei) for a
 * transaction to be likely included in the next block.
 * Defaults to [`chain.fees.estimateFeesPerGas`](/docs/clients/chains.html#fees-estimatefeespergas) if set.
 *
 * - Docs: https://viem.sh/docs/actions/public/estimateFeesPerGas.html
 *
 * @param client - Client to use
 * @param parameters - {@link EstimateFeesPerGasParameters}
 * @returns An estimate (in wei) for the fees per gas. {@link EstimateFeesPerGasReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { estimateFeesPerGas } from 'viem/actions'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const maxPriorityFeePerGas = await estimateFeesPerGas(client)
 * // { maxFeePerGas: ..., maxPriorityFeePerGas: ... }
 */
async function estimateFeesPerGas(client, args) {
    return internal_estimateFeesPerGas(client, args);
}
async function internal_estimateFeesPerGas(client, args) {
    const { block: block_, chain = client.chain, request, type = 'eip1559', } = args || {};
    const baseFeeMultiplier = await (async () => {
        if (typeof chain?.fees?.baseFeeMultiplier === 'function')
            return chain.fees.baseFeeMultiplier({
                block: block_,
                client,
                request,
            });
        return chain?.fees?.baseFeeMultiplier ?? 1.2;
    })();
    if (baseFeeMultiplier < 1)
        throw new _errors_fee_js__WEBPACK_IMPORTED_MODULE_0__.BaseFeeScalarError();
    const decimals = baseFeeMultiplier.toString().split('.')[1]?.length ?? 0;
    const denominator = 10 ** decimals;
    const multiply = (base) => (base * BigInt(Math.ceil(baseFeeMultiplier * denominator))) /
        BigInt(denominator);
    const block = block_ ? block_ : await (0,_getBlock_js__WEBPACK_IMPORTED_MODULE_1__.getBlock)(client);
    if (typeof chain?.fees?.estimateFeesPerGas === 'function')
        return chain.fees.estimateFeesPerGas({
            block: block_,
            client,
            multiply,
            request,
            type,
        });
    if (type === 'eip1559') {
        if (typeof block.baseFeePerGas !== 'bigint')
            throw new _errors_fee_js__WEBPACK_IMPORTED_MODULE_0__.Eip1559FeesNotSupportedError();
        const maxPriorityFeePerGas = request?.maxPriorityFeePerGas
            ? request.maxPriorityFeePerGas
            : await (0,_estimateMaxPriorityFeePerGas_js__WEBPACK_IMPORTED_MODULE_2__.internal_estimateMaxPriorityFeePerGas)(client, {
                block,
                chain,
                request,
            });
        const baseFeePerGas = multiply(block.baseFeePerGas);
        const maxFeePerGas = request?.maxFeePerGas ?? baseFeePerGas + maxPriorityFeePerGas;
        return {
            maxFeePerGas,
            maxPriorityFeePerGas,
        };
    }
    const gasPrice = request?.gasPrice ?? multiply(await (0,_getGasPrice_js__WEBPACK_IMPORTED_MODULE_3__.getGasPrice)(client));
    return {
        gasPrice,
    };
}
//# sourceMappingURL=estimateFeesPerGas.js.map

/***/ }),
/* 88 */
/*!**********************************************!*\
  !*** ./node_modules/viem/_esm/errors/fee.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseFeeScalarError: () => (/* binding */ BaseFeeScalarError),
/* harmony export */   Eip1559FeesNotSupportedError: () => (/* binding */ Eip1559FeesNotSupportedError),
/* harmony export */   MaxFeePerGasTooLowError: () => (/* binding */ MaxFeePerGasTooLowError)
/* harmony export */ });
/* harmony import */ var _utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unit/formatGwei.js */ 50);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 14);


class BaseFeeScalarError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor() {
        super('`baseFeeMultiplier` must be greater than 1.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BaseFeeScalarError'
        });
    }
}
class Eip1559FeesNotSupportedError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor() {
        super('Chain does not support EIP-1559 fees.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Eip1559FeesNotSupportedError'
        });
    }
}
class MaxFeePerGasTooLowError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ maxPriorityFeePerGas }) {
        super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_1__.formatGwei)(maxPriorityFeePerGas)} gwei).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'MaxFeePerGasTooLowError'
        });
    }
}
//# sourceMappingURL=fee.js.map

/***/ }),
/* 89 */
/*!*******************************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/estimateMaxPriorityFeePerGas.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   estimateMaxPriorityFeePerGas: () => (/* binding */ estimateMaxPriorityFeePerGas),
/* harmony export */   internal_estimateMaxPriorityFeePerGas: () => (/* binding */ internal_estimateMaxPriorityFeePerGas)
/* harmony export */ });
/* harmony import */ var _errors_fee_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../errors/fee.js */ 88);
/* harmony import */ var _utils_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/encoding/fromHex.js */ 28);
/* harmony import */ var _getBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBlock.js */ 81);
/* harmony import */ var _getGasPrice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getGasPrice.js */ 90);




/**
 * Returns an estimate for the max priority fee per gas (in wei) for a
 * transaction to be likely included in the next block.
 * Defaults to [`chain.fees.defaultPriorityFee`](/docs/clients/chains.html#fees-defaultpriorityfee) if set.
 *
 * - Docs: https://viem.sh/docs/actions/public/estimateMaxPriorityFeePerGas.html
 *
 * @param client - Client to use
 * @returns An estimate (in wei) for the max priority fee per gas. {@link EstimateMaxPriorityFeePerGasReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { estimateMaxPriorityFeePerGas } from 'viem/actions'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const maxPriorityFeePerGas = await estimateMaxPriorityFeePerGas(client)
 * // 10000000n
 */
async function estimateMaxPriorityFeePerGas(client, args) {
    return internal_estimateMaxPriorityFeePerGas(client, args);
}
async function internal_estimateMaxPriorityFeePerGas(client, args) {
    const { block: block_, chain = client.chain, request } = args || {};
    if (typeof chain?.fees?.defaultPriorityFee === 'function') {
        const block = block_ || (await (0,_getBlock_js__WEBPACK_IMPORTED_MODULE_0__.getBlock)(client));
        return chain.fees.defaultPriorityFee({
            block,
            client,
            request,
        });
    }
    else if (typeof chain?.fees?.defaultPriorityFee !== 'undefined')
        return chain?.fees?.defaultPriorityFee;
    try {
        const maxPriorityFeePerGasHex = await client.request({
            method: 'eth_maxPriorityFeePerGas',
        });
        return (0,_utils_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_1__.hexToBigInt)(maxPriorityFeePerGasHex);
    }
    catch {
        // If the RPC Provider does not support `eth_maxPriorityFeePerGas`
        // fall back to calculating it manually via `gasPrice - baseFeePerGas`.
        // See: https://github.com/ethereum/pm/issues/328#:~:text=eth_maxPriorityFeePerGas%20after%20London%20will%20effectively%20return%20eth_gasPrice%20%2D%20baseFee
        const [block, gasPrice] = await Promise.all([
            block_ ? Promise.resolve(block_) : (0,_getBlock_js__WEBPACK_IMPORTED_MODULE_0__.getBlock)(client),
            (0,_getGasPrice_js__WEBPACK_IMPORTED_MODULE_2__.getGasPrice)(client),
        ]);
        if (typeof block.baseFeePerGas !== 'bigint')
            throw new _errors_fee_js__WEBPACK_IMPORTED_MODULE_3__.Eip1559FeesNotSupportedError();
        const maxPriorityFeePerGas = gasPrice - block.baseFeePerGas;
        if (maxPriorityFeePerGas < 0n)
            return 0n;
        return maxPriorityFeePerGas;
    }
}
//# sourceMappingURL=estimateMaxPriorityFeePerGas.js.map

/***/ }),
/* 90 */
/*!**************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/getGasPrice.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGasPrice: () => (/* binding */ getGasPrice)
/* harmony export */ });
/**
 * Returns the current price of gas (in wei).
 *
 * - Docs: https://viem.sh/docs/actions/public/getGasPrice.html
 * - JSON-RPC Methods: [`eth_gasPrice`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gasprice)
 *
 * @param client - Client to use
 * @returns The gas price (in wei). {@link GetGasPriceReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getGasPrice } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const gasPrice = await getGasPrice(client)
 */
async function getGasPrice(client) {
    const gasPrice = await client.request({
        method: 'eth_gasPrice',
    });
    return BigInt(gasPrice);
}
//# sourceMappingURL=getGasPrice.js.map

/***/ }),
/* 91 */
/*!********************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/errors/getEstimateGasError.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEstimateGasError: () => (/* binding */ getEstimateGasError)
/* harmony export */ });
/* harmony import */ var _errors_estimateGas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors/estimateGas.js */ 92);
/* harmony import */ var _errors_node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors/node.js */ 51);
/* harmony import */ var _getNodeError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeError.js */ 57);



function getEstimateGasError(err, { docsPath, ...args }) {
    const cause = (() => {
        const cause = (0,_getNodeError_js__WEBPACK_IMPORTED_MODULE_0__.getNodeError)(err, args);
        if (cause instanceof _errors_node_js__WEBPACK_IMPORTED_MODULE_1__.UnknownNodeError)
            return err;
        return cause;
    })();
    return new _errors_estimateGas_js__WEBPACK_IMPORTED_MODULE_2__.EstimateGasExecutionError(cause, {
        docsPath,
        ...args,
    });
}
//# sourceMappingURL=getEstimateGasError.js.map

/***/ }),
/* 92 */
/*!******************************************************!*\
  !*** ./node_modules/viem/_esm/errors/estimateGas.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EstimateGasExecutionError: () => (/* binding */ EstimateGasExecutionError)
/* harmony export */ });
/* harmony import */ var _utils_unit_formatEther_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/unit/formatEther.js */ 47);
/* harmony import */ var _utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/unit/formatGwei.js */ 50);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 14);
/* harmony import */ var _transaction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction.js */ 46);




class EstimateGasExecutionError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor(cause, { account, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, }) {
        const prettyArgs = (0,_transaction_js__WEBPACK_IMPORTED_MODULE_1__.prettyPrint)({
            from: account?.address,
            to,
            value: typeof value !== 'undefined' &&
                `${(0,_utils_unit_formatEther_js__WEBPACK_IMPORTED_MODULE_2__.formatEther)(value)} ${chain?.nativeCurrency.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_3__.formatGwei)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' &&
                `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_3__.formatGwei)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' &&
                `${(0,_utils_unit_formatGwei_js__WEBPACK_IMPORTED_MODULE_3__.formatGwei)(maxPriorityFeePerGas)} gwei`,
            nonce,
        });
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...(cause.metaMessages ? [...cause.metaMessages, ' '] : []),
                'Estimate Gas Arguments:',
                prettyArgs,
            ].filter(Boolean),
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'EstimateGasExecutionError'
        });
        this.cause = cause;
    }
}
//# sourceMappingURL=estimateGas.js.map

/***/ }),
/* 93 */
/*!*****************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/errors/getContractError.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContractError: () => (/* binding */ getContractError)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors/abi.js */ 17);
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors/base.js */ 14);
/* harmony import */ var _errors_contract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors/contract.js */ 59);
/* harmony import */ var _errors_rpc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../errors/rpc.js */ 58);




const EXECUTION_REVERTED_ERROR_CODE = 3;
function getContractError(err, { abi, address, args, docsPath, functionName, sender, }) {
    const { code, data, message, shortMessage } = (err instanceof _errors_contract_js__WEBPACK_IMPORTED_MODULE_0__.RawContractError
        ? err
        : err instanceof _errors_base_js__WEBPACK_IMPORTED_MODULE_1__.BaseError
            ? err.walk((err) => 'data' in err) || err.walk()
            : {});
    const cause = (() => {
        if (err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_2__.AbiDecodingZeroDataError)
            return new _errors_contract_js__WEBPACK_IMPORTED_MODULE_0__.ContractFunctionZeroDataError({ functionName });
        if ([EXECUTION_REVERTED_ERROR_CODE, _errors_rpc_js__WEBPACK_IMPORTED_MODULE_3__.InternalRpcError.code].includes(code) &&
            (data || message || shortMessage)) {
            return new _errors_contract_js__WEBPACK_IMPORTED_MODULE_0__.ContractFunctionRevertedError({
                abi,
                data: typeof data === 'object' ? data.data : data,
                functionName,
                message: shortMessage ?? message,
            });
        }
        return err;
    })();
    return new _errors_contract_js__WEBPACK_IMPORTED_MODULE_0__.ContractFunctionExecutionError(cause, {
        abi,
        args,
        contractAddress: address,
        docsPath,
        functionName,
        sender,
    });
}
//# sourceMappingURL=getContractError.js.map

/***/ }),
/* 94 */
/*!*************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/getBalance.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBalance: () => (/* binding */ getBalance)
/* harmony export */ });
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/encoding/toHex.js */ 32);

/**
 * Returns the balance of an address in wei.
 *
 * - Docs: https://viem.sh/docs/actions/public/getBalance.html
 * - JSON-RPC Methods: [`eth_getBalance`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getbalance)
 *
 * You can convert the balance to ether units with [`formatEther`](https://viem.sh/docs/utilities/formatEther.html).
 *
 * ```ts
 * const balance = await getBalance(client, {
 *   address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 *   blockTag: 'safe'
 * })
 * const balanceAsEther = formatEther(balance)
 * // "6.942"
 * ```
 *
 * @param client - Client to use
 * @param parameters - {@link GetBalanceParameters}
 * @returns The balance of the address in wei. {@link GetBalanceReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getBalance } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const balance = await getBalance(client, {
 *   address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 * })
 * // 10000000000000000000000n (wei)
 */
async function getBalance(client, { address, blockNumber, blockTag = 'latest' }) {
    const blockNumberHex = blockNumber ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.numberToHex)(blockNumber) : undefined;
    const balance = await client.request({
        method: 'eth_getBalance',
        params: [address, blockNumberHex || blockTag],
    });
    return BigInt(balance);
}
//# sourceMappingURL=getBalance.js.map

/***/ }),
/* 95 */
/*!*****************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/getBlockNumber.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBlockNumber: () => (/* binding */ getBlockNumber),
/* harmony export */   getBlockNumberCache: () => (/* binding */ getBlockNumberCache)
/* harmony export */ });
/* harmony import */ var _utils_promise_withCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/promise/withCache.js */ 96);

const cacheKey = (id) => `blockNumber.${id}`;
function getBlockNumberCache(id) {
    return (0,_utils_promise_withCache_js__WEBPACK_IMPORTED_MODULE_0__.getCache)(cacheKey(id));
}
/**
 * Returns the number of the most recent block seen.
 *
 * - Docs: https://viem.sh/docs/actions/public/getBlockNumber.html
 * - Examples: https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/blocks/fetching-blocks
 * - JSON-RPC Methods: [`eth_blockNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blocknumber)
 *
 * @param client - Client to use
 * @param parameters - {@link GetBlockNumberParameters}
 * @returns The number of the block. {@link GetBlockNumberReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getBlockNumber } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const blockNumber = await getBlockNumber(client)
 * // 69420n
 */
async function getBlockNumber(client, { cacheTime = client.cacheTime, maxAge } = {}) {
    const blockNumberHex = await (0,_utils_promise_withCache_js__WEBPACK_IMPORTED_MODULE_0__.withCache)(() => client.request({
        method: 'eth_blockNumber',
    }), { cacheKey: cacheKey(client.uid), cacheTime: maxAge ?? cacheTime });
    return BigInt(blockNumberHex);
}
//# sourceMappingURL=getBlockNumber.js.map

/***/ }),
/* 96 */
/*!***********************************************************!*\
  !*** ./node_modules/viem/_esm/utils/promise/withCache.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCache: () => (/* binding */ getCache),
/* harmony export */   promiseCache: () => (/* binding */ promiseCache),
/* harmony export */   responseCache: () => (/* binding */ responseCache),
/* harmony export */   withCache: () => (/* binding */ withCache)
/* harmony export */ });
const promiseCache = /*#__PURE__*/ new Map();
const responseCache = /*#__PURE__*/ new Map();
function getCache(cacheKey) {
    const buildCache = (cacheKey, cache) => ({
        clear: () => cache.delete(cacheKey),
        get: () => cache.get(cacheKey),
        set: (data) => cache.set(cacheKey, data),
    });
    const promise = buildCache(cacheKey, promiseCache);
    const response = buildCache(cacheKey, responseCache);
    return {
        clear: () => {
            promise.clear();
            response.clear();
        },
        promise,
        response,
    };
}
/**
 * @description Returns the result of a given promise, and caches the result for
 * subsequent invocations against a provided cache key.
 */
async function withCache(fn, { cacheKey, cacheTime = Infinity }) {
    const cache = getCache(cacheKey);
    // If a response exists in the cache, and it's not expired, return it
    // and do not invoke the promise.
    // If the max age is 0, the cache is disabled.
    const response = cache.response.get();
    if (response && cacheTime > 0) {
        const age = new Date().getTime() - response.created.getTime();
        if (age < cacheTime)
            return response.data;
    }
    let promise = cache.promise.get();
    if (!promise) {
        promise = fn();
        // Store the promise in the cache so that subsequent invocations
        // will wait for the same promise to resolve (deduping).
        cache.promise.set(promise);
    }
    try {
        const data = await promise;
        // Store the response in the cache so that subsequent invocations
        // will return the same response.
        cache.response.set({ created: new Date(), data });
        return data;
    }
    finally {
        // Clear the promise cache so that subsequent invocations will
        // invoke the promise again.
        cache.promise.clear();
    }
}
//# sourceMappingURL=withCache.js.map

/***/ }),
/* 97 */
/*!***************************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/getBlockTransactionCount.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBlockTransactionCount: () => (/* binding */ getBlockTransactionCount)
/* harmony export */ });
/* harmony import */ var _utils_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/encoding/fromHex.js */ 28);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/encoding/toHex.js */ 32);


/**
 * Returns the number of Transactions at a block number, hash, or tag.
 *
 * - Docs: https://viem.sh/docs/actions/public/getBlockTransactionCount.html
 * - JSON-RPC Methods:
 *   - Calls [`eth_getBlockTransactionCountByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbynumber) for `blockNumber` & `blockTag`.
 *   - Calls [`eth_getBlockTransactionCountByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbyhash) for `blockHash`.
 *
 * @param client - Client to use
 * @param parameters - {@link GetBlockTransactionCountParameters}
 * @returns The block transaction count. {@link GetBlockTransactionCountReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getBlockTransactionCount } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const count = await getBlockTransactionCount(client)
 */
async function getBlockTransactionCount(client, { blockHash, blockNumber, blockTag = 'latest', } = {}) {
    const blockNumberHex = blockNumber !== undefined ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.numberToHex)(blockNumber) : undefined;
    let count;
    if (blockHash) {
        count = await client.request({
            method: 'eth_getBlockTransactionCountByHash',
            params: [blockHash],
        });
    }
    else {
        count = await client.request({
            method: 'eth_getBlockTransactionCountByNumber',
            params: [blockNumberHex || blockTag],
        });
    }
    return (0,_utils_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_1__.hexToNumber)(count);
}
//# sourceMappingURL=getBlockTransactionCount.js.map

/***/ }),
/* 98 */
/*!**************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/getBytecode.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBytecode: () => (/* binding */ getBytecode)
/* harmony export */ });
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/encoding/toHex.js */ 32);

/**
 * Retrieves the bytecode at an address.
 *
 * - Docs: https://viem.sh/docs/contract/getBytecode.html
 * - JSON-RPC Methods: [`eth_getCode`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getcode)
 *
 * @param client - Client to use
 * @param parameters - {@link GetBytecodeParameters}
 * @returns The contract's bytecode. {@link GetBytecodeReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getBytecode } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const code = await getBytecode(client, {
 *   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 * })
 */
async function getBytecode(client, { address, blockNumber, blockTag = 'latest' }) {
    const blockNumberHex = blockNumber !== undefined ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.numberToHex)(blockNumber) : undefined;
    const hex = await client.request({
        method: 'eth_getCode',
        params: [address, blockNumberHex || blockTag],
    });
    if (hex === '0x')
        return undefined;
    return hex;
}
//# sourceMappingURL=getBytecode.js.map

/***/ }),
/* 99 */
/*!*************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/getChainId.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getChainId: () => (/* binding */ getChainId)
/* harmony export */ });
/* harmony import */ var _utils_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/encoding/fromHex.js */ 28);

/**
 * Returns the chain ID associated with the current network.
 *
 * - Docs: https://viem.sh/docs/actions/public/getChainId.html
 * - JSON-RPC Methods: [`eth_chainId`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_chainid)
 *
 * @param client - Client to use
 * @returns The current chain ID. {@link GetChainIdReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getChainId } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const chainId = await getChainId(client)
 * // 1
 */
async function getChainId(client) {
    const chainIdHex = await client.request({
        method: 'eth_chainId',
    });
    return (0,_utils_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_0__.hexToNumber)(chainIdHex);
}
//# sourceMappingURL=getChainId.js.map

/***/ }),
/* 100 */
/*!********************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/getContractEvents.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContractEvents: () => (/* binding */ getContractEvents)
/* harmony export */ });
/* harmony import */ var _utils_abi_getAbiItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/abi/getAbiItem.js */ 60);
/* harmony import */ var _getLogs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLogs.js */ 101);


/**
 * Returns a list of event logs emitted by a contract.
 *
 * - Docs: https://viem.sh/docs/actions/public/getContractEvents.html
 * - JSON-RPC Methods: [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs)
 *
 * @param client - Client to use
 * @param parameters - {@link GetContractEventsParameters}
 * @returns A list of event logs. {@link GetContractEventsReturnType}
 *
 * @example
 * import { createClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getContractEvents } from 'viem/public'
 * import { wagmiAbi } from './abi'
 *
 * const client = createClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const logs = await getContractEvents(client, {
 *  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *  abi: wagmiAbi,
 *  eventName: 'Transfer'
 * })
 */
async function getContractEvents(client, { abi, address, args, blockHash, eventName, fromBlock, toBlock, strict, }) {
    const event = eventName
        ? (0,_utils_abi_getAbiItem_js__WEBPACK_IMPORTED_MODULE_0__.getAbiItem)({ abi, name: eventName })
        : undefined;
    const events = !event
        ? abi.filter((x) => x.type === 'event')
        : undefined;
    return (0,_getLogs_js__WEBPACK_IMPORTED_MODULE_1__.getLogs)(client, {
        address,
        args,
        blockHash,
        event,
        events,
        fromBlock,
        toBlock,
        strict,
    });
}
//# sourceMappingURL=getContractEvents.js.map

/***/ }),
/* 101 */
/*!**********************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/getLogs.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLogs: () => (/* binding */ getLogs)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../errors/abi.js */ 17);
/* harmony import */ var _utils_abi_decodeEventLog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/abi/decodeEventLog.js */ 102);
/* harmony import */ var _utils_abi_encodeEventTopics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/abi/encodeEventTopics.js */ 73);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/encoding/toHex.js */ 32);
/* harmony import */ var _utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/formatters/log.js */ 103);





/**
 * Returns a list of event logs matching the provided parameters.
 *
 * - Docs: https://viem.sh/docs/actions/public/getLogs.html
 * - Examples: https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/filters-and-logs/event-logs
 * - JSON-RPC Methods: [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs)
 *
 * @param client - Client to use
 * @param parameters - {@link GetLogsParameters}
 * @returns A list of event logs. {@link GetLogsReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbiItem } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getLogs } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const logs = await getLogs(client)
 */
async function getLogs(client, { address, blockHash, fromBlock, toBlock, event, events: events_, args, strict: strict_, } = {}) {
    const strict = strict_ ?? false;
    const events = events_ ?? (event ? [event] : undefined);
    let topics = [];
    if (events) {
        topics = [
            events.flatMap((event) => (0,_utils_abi_encodeEventTopics_js__WEBPACK_IMPORTED_MODULE_0__.encodeEventTopics)({
                abi: [event],
                eventName: event.name,
                args,
            })),
        ];
        if (event)
            topics = topics[0];
    }
    let logs;
    if (blockHash) {
        logs = await client.request({
            method: 'eth_getLogs',
            params: [{ address, topics, blockHash }],
        });
    }
    else {
        logs = await client.request({
            method: 'eth_getLogs',
            params: [
                {
                    address,
                    topics,
                    fromBlock: typeof fromBlock === 'bigint' ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__.numberToHex)(fromBlock) : fromBlock,
                    toBlock: typeof toBlock === 'bigint' ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__.numberToHex)(toBlock) : toBlock,
                },
            ],
        });
    }
    return logs
        .map((log) => {
        try {
            const { eventName, args } = events
                ? (0,_utils_abi_decodeEventLog_js__WEBPACK_IMPORTED_MODULE_2__.decodeEventLog)({
                    abi: events,
                    data: log.data,
                    topics: log.topics,
                    strict,
                })
                : { eventName: undefined, args: undefined };
            return (0,_utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_3__.formatLog)(log, { args, eventName: eventName });
        }
        catch (err) {
            let eventName;
            let isUnnamed;
            if (err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_4__.DecodeLogDataMismatch ||
                err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_4__.DecodeLogTopicsMismatch) {
                // If strict mode is on, and log data/topics do not match event definition, skip.
                if (strict)
                    return;
                eventName = err.abiItem.name;
                isUnnamed = err.abiItem.inputs?.some((x) => !('name' in x && x.name));
            }
            // Set args to empty if there is an error decoding (e.g. indexed/non-indexed params mismatch).
            return (0,_utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_3__.formatLog)(log, { args: isUnnamed ? [] : {}, eventName });
        }
    })
        .filter(Boolean);
}
//# sourceMappingURL=getLogs.js.map

/***/ }),
/* 102 */
/*!************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/abi/decodeEventLog.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodeEventLog: () => (/* binding */ decodeEventLog)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors/abi.js */ 17);
/* harmony import */ var _hash_getEventSelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hash/getEventSelector.js */ 61);
/* harmony import */ var _decodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decodeAbiParameters.js */ 35);
/* harmony import */ var _formatAbiItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatAbiItem.js */ 18);




const docsPath = '/docs/contract/decodeEventLog';
function decodeEventLog({ abi, data, strict: strict_, topics, }) {
    const strict = strict_ ?? true;
    const [signature, ...argTopics] = topics;
    if (!signature)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__.AbiEventSignatureEmptyTopicsError({
            docsPath,
        });
    const abiItem = abi.find((x) => x.type === 'event' &&
        signature === (0,_hash_getEventSelector_js__WEBPACK_IMPORTED_MODULE_1__.getEventSelector)((0,_formatAbiItem_js__WEBPACK_IMPORTED_MODULE_2__.formatAbiItem)(x)));
    if (!(abiItem && 'name' in abiItem) || abiItem.type !== 'event')
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__.AbiEventSignatureNotFoundError(signature, {
            docsPath,
        });
    const { name, inputs } = abiItem;
    const isUnnamed = inputs?.some((x) => !('name' in x && x.name));
    let args = isUnnamed ? [] : {};
    // Decode topics (indexed args).
    const indexedInputs = inputs.filter((x) => 'indexed' in x && x.indexed);
    for (let i = 0; i < indexedInputs.length; i++) {
        const param = indexedInputs[i];
        const topic = argTopics[i];
        if (!topic)
            throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__.DecodeLogTopicsMismatch({
                abiItem,
                param: param,
            });
        args[param.name || i] = decodeTopic({ param, value: topic });
    }
    // Decode data (non-indexed args).
    const nonIndexedInputs = inputs.filter((x) => !('indexed' in x && x.indexed));
    if (nonIndexedInputs.length > 0) {
        if (data && data !== '0x') {
            try {
                const decodedData = (0,_decodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_3__.decodeAbiParameters)(nonIndexedInputs, data);
                if (decodedData) {
                    if (isUnnamed)
                        args = [...args, ...decodedData];
                    else {
                        for (let i = 0; i < nonIndexedInputs.length; i++) {
                            args[nonIndexedInputs[i].name] = decodedData[i];
                        }
                    }
                }
            }
            catch (err) {
                if (strict) {
                    if (err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__.AbiDecodingDataSizeTooSmallError)
                        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__.DecodeLogDataMismatch({
                            abiItem,
                            data: err.data,
                            params: err.params,
                            size: err.size,
                        });
                    throw err;
                }
            }
        }
        else if (strict) {
            throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__.DecodeLogDataMismatch({
                abiItem,
                data: '0x',
                params: nonIndexedInputs,
                size: 0,
            });
        }
    }
    return {
        eventName: name,
        args: Object.values(args).length > 0 ? args : undefined,
    };
}
function decodeTopic({ param, value }) {
    if (param.type === 'string' ||
        param.type === 'bytes' ||
        param.type === 'tuple' ||
        param.type.match(/^(.*)\[(\d+)?\]$/))
        return value;
    const decodedArg = (0,_decodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_3__.decodeAbiParameters)([param], value) || [];
    return decodedArg[0];
}
//# sourceMappingURL=decodeEventLog.js.map

/***/ }),
/* 103 */
/*!********************************************************!*\
  !*** ./node_modules/viem/_esm/utils/formatters/log.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLog: () => (/* binding */ formatLog)
/* harmony export */ });
function formatLog(log, { args, eventName } = {}) {
    return {
        ...log,
        blockHash: log.blockHash ? log.blockHash : null,
        blockNumber: log.blockNumber ? BigInt(log.blockNumber) : null,
        logIndex: log.logIndex ? Number(log.logIndex) : null,
        transactionHash: log.transactionHash ? log.transactionHash : null,
        transactionIndex: log.transactionIndex
            ? Number(log.transactionIndex)
            : null,
        ...(eventName ? { args, eventName } : {}),
    };
}
//# sourceMappingURL=log.js.map

/***/ }),
/* 104 */
/*!*************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/ens/getEnsAddress.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEnsAddress: () => (/* binding */ getEnsAddress)
/* harmony export */ });
/* harmony import */ var _constants_abis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/abis.js */ 68);
/* harmony import */ var _utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/abi/decodeFunctionResult.js */ 69);
/* harmony import */ var _utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/abi/encodeFunctionData.js */ 67);
/* harmony import */ var _utils_chain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/chain.js */ 65);
/* harmony import */ var _utils_data_trim_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/data/trim.js */ 30);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/encoding/toHex.js */ 32);
/* harmony import */ var _utils_ens_errors_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/ens/errors.js */ 111);
/* harmony import */ var _utils_ens_namehash_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/ens/namehash.js */ 105);
/* harmony import */ var _utils_ens_packetToBytes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/ens/packetToBytes.js */ 108);
/* harmony import */ var _public_readContract_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/readContract.js */ 107);










/**
 * Gets address for ENS name.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsAddress.html
 * - Examples: https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/ens
 *
 * Calls `resolve(bytes, bytes)` on ENS Universal Resolver Contract.
 *
 * Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize.html) function for this.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsAddressParameters}
 * @returns Address for ENS name or `null` if not found. {@link GetEnsAddressReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsAddress, normalize } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const ensAddress = await getEnsAddress(client, {
 *   name: normalize('wagmi-dev.eth'),
 * })
 * // '0xd2135CfB216b74109775236E36d4b433F1DF507B'
 */
async function getEnsAddress(client, { blockNumber, blockTag, coinType, name, universalResolverAddress: universalResolverAddress_, }) {
    let universalResolverAddress = universalResolverAddress_;
    if (!universalResolverAddress) {
        if (!client.chain)
            throw new Error('client chain not configured. universalResolverAddress is required.');
        universalResolverAddress = (0,_utils_chain_js__WEBPACK_IMPORTED_MODULE_0__.getChainContractAddress)({
            blockNumber,
            chain: client.chain,
            contract: 'ensUniversalResolver',
        });
    }
    try {
        const functionData = (0,_utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_1__.encodeFunctionData)({
            abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_2__.addressResolverAbi,
            functionName: 'addr',
            ...(coinType != null
                ? { args: [(0,_utils_ens_namehash_js__WEBPACK_IMPORTED_MODULE_3__.namehash)(name), BigInt(coinType)] }
                : { args: [(0,_utils_ens_namehash_js__WEBPACK_IMPORTED_MODULE_3__.namehash)(name)] }),
        });
        const res = await (0,_public_readContract_js__WEBPACK_IMPORTED_MODULE_4__.readContract)(client, {
            address: universalResolverAddress,
            abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_2__.universalResolverResolveAbi,
            functionName: 'resolve',
            args: [(0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_5__.toHex)((0,_utils_ens_packetToBytes_js__WEBPACK_IMPORTED_MODULE_6__.packetToBytes)(name)), functionData],
            blockNumber,
            blockTag,
        });
        if (res[0] === '0x')
            return null;
        const address = (0,_utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_7__.decodeFunctionResult)({
            abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_2__.addressResolverAbi,
            args: coinType != null ? [(0,_utils_ens_namehash_js__WEBPACK_IMPORTED_MODULE_3__.namehash)(name), BigInt(coinType)] : undefined,
            functionName: 'addr',
            data: res[0],
        });
        if (address === '0x')
            return null;
        if ((0,_utils_data_trim_js__WEBPACK_IMPORTED_MODULE_8__.trim)(address) === '0x00')
            return null;
        return address;
    }
    catch (err) {
        if ((0,_utils_ens_errors_js__WEBPACK_IMPORTED_MODULE_9__.isNullUniversalResolverError)(err, 'resolve'))
            return null;
        throw err;
    }
}
//# sourceMappingURL=getEnsAddress.js.map

/***/ }),
/* 105 */
/*!******************************************************!*\
  !*** ./node_modules/viem/_esm/utils/ens/namehash.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   namehash: () => (/* binding */ namehash)
/* harmony export */ });
/* harmony import */ var _data_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/concat.js */ 37);
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoding/toBytes.js */ 27);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoding/toHex.js */ 32);
/* harmony import */ var _hash_keccak256_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hash/keccak256.js */ 21);
/* harmony import */ var _encodedLabelToLabelhash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encodedLabelToLabelhash.js */ 106);





/**
 * @description Hashes ENS name
 *
 * - Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `namehash`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize.html) function for this.
 *
 * @example
 * namehash('wagmi-dev.eth')
 * '0xf246651c1b9a6b141d19c2604e9a58f567973833990f830d882534a747801359'
 *
 * @link https://eips.ethereum.org/EIPS/eip-137
 */
function namehash(name) {
    let result = new Uint8Array(32).fill(0);
    if (!name)
        return (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.bytesToHex)(result);
    const labels = name.split('.');
    // Iterate in reverse order building up hash
    for (let i = labels.length - 1; i >= 0; i -= 1) {
        const hashFromEncodedLabel = (0,_encodedLabelToLabelhash_js__WEBPACK_IMPORTED_MODULE_1__.encodedLabelToLabelhash)(labels[i]);
        const hashed = hashFromEncodedLabel
            ? (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_2__.toBytes)(hashFromEncodedLabel)
            : (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_3__.keccak256)((0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_2__.stringToBytes)(labels[i]), 'bytes');
        result = (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_3__.keccak256)((0,_data_concat_js__WEBPACK_IMPORTED_MODULE_4__.concat)([result, hashed]), 'bytes');
    }
    return (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.bytesToHex)(result);
}
//# sourceMappingURL=namehash.js.map

/***/ }),
/* 106 */
/*!*********************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/ens/encodedLabelToLabelhash.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodedLabelToLabelhash: () => (/* binding */ encodedLabelToLabelhash)
/* harmony export */ });
/* harmony import */ var _data_isHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/isHex.js */ 11);

function encodedLabelToLabelhash(label) {
    if (label.length !== 66)
        return null;
    if (label.indexOf('[') !== 0)
        return null;
    if (label.indexOf(']') !== 65)
        return null;
    const hash = `0x${label.slice(1, 65)}`;
    if (!(0,_data_isHex_js__WEBPACK_IMPORTED_MODULE_0__.isHex)(hash))
        return null;
    return hash;
}
//# sourceMappingURL=encodedLabelToLabelhash.js.map

/***/ }),
/* 107 */
/*!***************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/readContract.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   readContract: () => (/* binding */ readContract)
/* harmony export */ });
/* harmony import */ var _utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/abi/decodeFunctionResult.js */ 69);
/* harmony import */ var _utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/abi/encodeFunctionData.js */ 67);
/* harmony import */ var _utils_errors_getContractError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/errors/getContractError.js */ 93);
/* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./call.js */ 7);




/**
 * Calls a read-only function on a contract, and returns the response.
 *
 * - Docs: https://viem.sh/docs/contract/readContract.html
 * - Examples: https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/contracts/reading-contracts
 *
 * A "read-only" function (constant function) on a Solidity contract is denoted by a `view` or `pure` keyword. They can only read the state of the contract, and cannot make any changes to it. Since read-only methods do not change the state of the contract, they do not require any gas to be executed, and can be called by any user without the need to pay for gas.
 *
 * Internally, uses a [Public Client](https://viem.sh/docs/clients/public.html) to call the [`call` action](https://viem.sh/docs/actions/public/call.html) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData.html).
 *
 * @param client - Client to use
 * @param parameters - {@link ReadContractParameters}
 * @returns The response from the contract. Type is inferred. {@link ReadContractReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbi } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { readContract } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const result = await readContract(client, {
 *   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *   abi: parseAbi(['function balanceOf(address) view returns (uint256)']),
 *   functionName: 'balanceOf',
 *   args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
 * })
 * // 424122n
 */
async function readContract(client, { abi, address, args, functionName, ...callRequest }) {
    const calldata = (0,_utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_0__.encodeFunctionData)({
        abi,
        args,
        functionName,
    });
    try {
        const { data } = await (0,_call_js__WEBPACK_IMPORTED_MODULE_1__.call)(client, {
            data: calldata,
            to: address,
            ...callRequest,
        });
        return (0,_utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_2__.decodeFunctionResult)({
            abi,
            args,
            functionName,
            data: data || '0x',
        });
    }
    catch (err) {
        throw (0,_utils_errors_getContractError_js__WEBPACK_IMPORTED_MODULE_3__.getContractError)(err, {
            abi: abi,
            address,
            args,
            docsPath: '/docs/contract/readContract',
            functionName,
        });
    }
}
//# sourceMappingURL=readContract.js.map

/***/ }),
/* 108 */
/*!***********************************************************!*\
  !*** ./node_modules/viem/_esm/utils/ens/packetToBytes.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   packetToBytes: () => (/* binding */ packetToBytes)
/* harmony export */ });
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoding/toBytes.js */ 27);
/* harmony import */ var _encodeLabelhash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encodeLabelhash.js */ 109);
/* harmony import */ var _labelhash_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./labelhash.js */ 110);



/*
 * @description Encodes a DNS packet into a ByteArray containing a UDP payload.
 */
function packetToBytes(packet) {
    // strip leading and trailing `.`
    const value = packet.replace(/^\.|\.$/gm, '');
    if (value.length === 0)
        return new Uint8Array(1);
    const bytes = new Uint8Array((0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__.stringToBytes)(value).byteLength + 2);
    let offset = 0;
    const list = value.split('.');
    for (let i = 0; i < list.length; i++) {
        let encoded = (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__.stringToBytes)(list[i]);
        // if the length is > 255, make the encoded label value a labelhash
        // this is compatible with the universal resolver
        if (encoded.byteLength > 255)
            encoded = (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__.stringToBytes)((0,_encodeLabelhash_js__WEBPACK_IMPORTED_MODULE_1__.encodeLabelhash)((0,_labelhash_js__WEBPACK_IMPORTED_MODULE_2__.labelhash)(list[i])));
        bytes[offset] = encoded.length;
        bytes.set(encoded, offset + 1);
        offset += encoded.length + 1;
    }
    if (bytes.byteLength !== offset + 1)
        return bytes.slice(0, offset + 1);
    return bytes;
}
//# sourceMappingURL=packetToBytes.js.map

/***/ }),
/* 109 */
/*!*************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/ens/encodeLabelhash.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodeLabelhash: () => (/* binding */ encodeLabelhash)
/* harmony export */ });
function encodeLabelhash(hash) {
    return `[${hash.slice(2)}]`;
}
//# sourceMappingURL=encodeLabelhash.js.map

/***/ }),
/* 110 */
/*!*******************************************************!*\
  !*** ./node_modules/viem/_esm/utils/ens/labelhash.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   labelhash: () => (/* binding */ labelhash)
/* harmony export */ });
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../encoding/toBytes.js */ 27);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoding/toHex.js */ 32);
/* harmony import */ var _hash_keccak256_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hash/keccak256.js */ 21);
/* harmony import */ var _encodedLabelToLabelhash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encodedLabelToLabelhash.js */ 106);




/**
 * @description Hashes ENS label
 *
 * - Since ENS labels prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS labels](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `labelhash`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize.html) function for this.
 *
 * @example
 * labelhash('eth')
 * '0x4f5b812789fc606be1b3b16908db13fc7a9adf7ca72641f84d75b47069d3d7f0'
 */
function labelhash(label) {
    const result = new Uint8Array(32).fill(0);
    if (!label)
        return (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.bytesToHex)(result);
    return (0,_encodedLabelToLabelhash_js__WEBPACK_IMPORTED_MODULE_1__.encodedLabelToLabelhash)(label) || (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_2__.keccak256)((0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_3__.stringToBytes)(label));
}
//# sourceMappingURL=labelhash.js.map

/***/ }),
/* 111 */
/*!****************************************************!*\
  !*** ./node_modules/viem/_esm/utils/ens/errors.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNullUniversalResolverError: () => (/* binding */ isNullUniversalResolverError)
/* harmony export */ });
/* harmony import */ var _constants_solidity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/solidity.js */ 19);
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors/base.js */ 14);
/* harmony import */ var _errors_contract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors/contract.js */ 59);



/*
 * @description Checks if error is a valid null result UniversalResolver error
 */
function isNullUniversalResolverError(err, callType) {
    if (!(err instanceof _errors_base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError))
        return false;
    const cause = err.walk((e) => e instanceof _errors_contract_js__WEBPACK_IMPORTED_MODULE_1__.ContractFunctionRevertedError);
    if (!(cause instanceof _errors_contract_js__WEBPACK_IMPORTED_MODULE_1__.ContractFunctionRevertedError))
        return false;
    if (cause.data?.errorName === 'ResolverNotFound')
        return true;
    if (cause.data?.errorName === 'ResolverWildcardNotSupported')
        return true;
    // Backwards compatibility for older UniversalResolver contracts
    if (cause.reason?.includes('Wildcard on non-extended resolvers is not supported'))
        return true;
    // No primary name set for address.
    if (callType === 'reverse' && cause.reason === _constants_solidity_js__WEBPACK_IMPORTED_MODULE_2__.panicReasons[50])
        return true;
    return false;
}
//# sourceMappingURL=errors.js.map

/***/ }),
/* 112 */
/*!************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/ens/getEnsAvatar.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEnsAvatar: () => (/* binding */ getEnsAvatar)
/* harmony export */ });
/* harmony import */ var _utils_ens_avatar_parseAvatarRecord_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ens/avatar/parseAvatarRecord.js */ 114);
/* harmony import */ var _getEnsText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getEnsText.js */ 113);


/**
 * Gets the avatar of an ENS name.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsAvatar.html
 * - Examples: https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/ens
 *
 * Calls [`getEnsText`](https://viem.sh/docs/ens/actions/getEnsText.html) with `key` set to `'avatar'`.
 *
 * Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize.html) function for this.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsAvatarParameters}
 * @returns Avatar URI or `null` if not found. {@link GetEnsAvatarReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsAvatar, normalize } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const ensAvatar = await getEnsAvatar(client, {
 *   name: normalize('wagmi-dev.eth'),
 * })
 * // 'https://ipfs.io/ipfs/Qma8mnp6xV3J2cRNf3mTth5C8nV11CAnceVinc3y8jSbio'
 */
async function getEnsAvatar(client, { blockNumber, blockTag, gatewayUrls, name, universalResolverAddress, }) {
    const record = await (0,_getEnsText_js__WEBPACK_IMPORTED_MODULE_0__.getEnsText)(client, {
        blockNumber,
        blockTag,
        key: 'avatar',
        name,
        universalResolverAddress,
    });
    if (!record)
        return null;
    try {
        return await (0,_utils_ens_avatar_parseAvatarRecord_js__WEBPACK_IMPORTED_MODULE_1__.parseAvatarRecord)(client, { record, gatewayUrls });
    }
    catch {
        return null;
    }
}
//# sourceMappingURL=getEnsAvatar.js.map

/***/ }),
/* 113 */
/*!**********************************************************!*\
  !*** ./node_modules/viem/_esm/actions/ens/getEnsText.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEnsText: () => (/* binding */ getEnsText)
/* harmony export */ });
/* harmony import */ var _constants_abis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/abis.js */ 68);
/* harmony import */ var _utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/abi/decodeFunctionResult.js */ 69);
/* harmony import */ var _utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/abi/encodeFunctionData.js */ 67);
/* harmony import */ var _utils_chain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/chain.js */ 65);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/encoding/toHex.js */ 32);
/* harmony import */ var _utils_ens_errors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/ens/errors.js */ 111);
/* harmony import */ var _utils_ens_namehash_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/ens/namehash.js */ 105);
/* harmony import */ var _utils_ens_packetToBytes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ens/packetToBytes.js */ 108);
/* harmony import */ var _public_readContract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/readContract.js */ 107);









/**
 * Gets a text record for specified ENS name.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsResolver.html
 * - Examples: https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/ens
 *
 * Calls `resolve(bytes, bytes)` on ENS Universal Resolver Contract.
 *
 * Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize.html) function for this.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsTextParameters}
 * @returns Address for ENS resolver. {@link GetEnsTextReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsText, normalize } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const twitterRecord = await getEnsText(client, {
 *   name: normalize('wagmi-dev.eth'),
 *   key: 'com.twitter',
 * })
 * // 'wagmi_sh'
 */
async function getEnsText(client, { blockNumber, blockTag, name, key, universalResolverAddress: universalResolverAddress_, }) {
    let universalResolverAddress = universalResolverAddress_;
    if (!universalResolverAddress) {
        if (!client.chain)
            throw new Error('client chain not configured. universalResolverAddress is required.');
        universalResolverAddress = (0,_utils_chain_js__WEBPACK_IMPORTED_MODULE_0__.getChainContractAddress)({
            blockNumber,
            chain: client.chain,
            contract: 'ensUniversalResolver',
        });
    }
    try {
        const res = await (0,_public_readContract_js__WEBPACK_IMPORTED_MODULE_1__.readContract)(client, {
            address: universalResolverAddress,
            abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_2__.universalResolverResolveAbi,
            functionName: 'resolve',
            args: [
                (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__.toHex)((0,_utils_ens_packetToBytes_js__WEBPACK_IMPORTED_MODULE_4__.packetToBytes)(name)),
                (0,_utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_5__.encodeFunctionData)({
                    abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_2__.textResolverAbi,
                    functionName: 'text',
                    args: [(0,_utils_ens_namehash_js__WEBPACK_IMPORTED_MODULE_6__.namehash)(name), key],
                }),
            ],
            blockNumber,
            blockTag,
        });
        if (res[0] === '0x')
            return null;
        const record = (0,_utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_7__.decodeFunctionResult)({
            abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_2__.textResolverAbi,
            functionName: 'text',
            data: res[0],
        });
        return record === '' ? null : record;
    }
    catch (err) {
        if ((0,_utils_ens_errors_js__WEBPACK_IMPORTED_MODULE_8__.isNullUniversalResolverError)(err, 'resolve'))
            return null;
        throw err;
    }
}
//# sourceMappingURL=getEnsText.js.map

/***/ }),
/* 114 */
/*!**********************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/ens/avatar/parseAvatarRecord.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseAvatarRecord: () => (/* binding */ parseAvatarRecord)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ 115);

async function parseAvatarRecord(client, { gatewayUrls, record, }) {
    if (/eip155:/i.test(record))
        return parseNftAvatarUri(client, { gatewayUrls, record });
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.parseAvatarUri)({ uri: record, gatewayUrls });
}
async function parseNftAvatarUri(client, { gatewayUrls, record, }) {
    // parse NFT URI into properties
    const nft = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.parseNftUri)(record);
    // fetch tokenURI from the NFT contract
    const nftUri = await (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getNftTokenUri)(client, { nft });
    // resolve the URI from the fetched tokenURI
    const { uri: resolvedNftUri, isOnChain, isEncoded, } = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.resolveAvatarUri)({ uri: nftUri, gatewayUrls });
    // if the resolved URI is on chain, return the data
    if (isOnChain &&
        (resolvedNftUri.includes('data:application/json;base64,') ||
            resolvedNftUri.startsWith('{'))) {
        const encodedJson = isEncoded
            ? // if it is encoded, decode it
                atob(resolvedNftUri.replace('data:application/json;base64,', ''))
            : // if it isn't encoded assume it is a JSON string, but it could be anything (it will error if it is)
                resolvedNftUri;
        const decoded = JSON.parse(encodedJson);
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.parseAvatarUri)({ uri: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getJsonImage)(decoded), gatewayUrls });
    }
    let uriTokenId = nft.tokenID;
    if (nft.namespace === 'erc1155')
        uriTokenId = uriTokenId.replace('0x', '').padStart(64, '0');
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getMetadataAvatarUri)({
        gatewayUrls,
        uri: resolvedNftUri.replace(/(?:0x)?{id}/, uriTokenId),
    });
}
//# sourceMappingURL=parseAvatarRecord.js.map

/***/ }),
/* 115 */
/*!**********************************************************!*\
  !*** ./node_modules/viem/_esm/utils/ens/avatar/utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGateway: () => (/* binding */ getGateway),
/* harmony export */   getJsonImage: () => (/* binding */ getJsonImage),
/* harmony export */   getMetadataAvatarUri: () => (/* binding */ getMetadataAvatarUri),
/* harmony export */   getNftTokenUri: () => (/* binding */ getNftTokenUri),
/* harmony export */   isImageUri: () => (/* binding */ isImageUri),
/* harmony export */   parseAvatarUri: () => (/* binding */ parseAvatarUri),
/* harmony export */   parseNftUri: () => (/* binding */ parseNftUri),
/* harmony export */   resolveAvatarUri: () => (/* binding */ resolveAvatarUri)
/* harmony export */ });
/* harmony import */ var _actions_public_readContract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../actions/public/readContract.js */ 107);
/* harmony import */ var _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../errors/ens.js */ 116);


const networkRegex = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/;
const ipfsHashRegex = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/;
const base64Regex = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/;
const dataURIRegex = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function isImageUri(uri) {
    try {
        const res = await fetch(uri, { method: 'HEAD' });
        // retrieve content type header to check if content is image
        if (res.status === 200) {
            const contentType = res.headers.get('content-type');
            return contentType?.startsWith('image/');
        }
        return false;
    }
    catch (error) {
        // if error is not cors related then fail
        if (typeof error === 'object' && typeof error.response !== 'undefined') {
            return false;
        }
        // fail in NodeJS, since the error is not cors but any other network issue
        // biome-ignore lint/suspicious/noPrototypeBuiltins:
        if (!globalThis.hasOwnProperty('Image'))
            return false;
        // in case of cors, use image api to validate if given url is an actual image
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                resolve(true);
            };
            img.onerror = () => {
                resolve(false);
            };
            img.src = uri;
        });
    }
}
function getGateway(custom, defaultGateway) {
    if (!custom)
        return defaultGateway;
    if (custom.endsWith('/'))
        return custom.slice(0, -1);
    return custom;
}
function resolveAvatarUri({ uri, gatewayUrls, }) {
    const isEncoded = base64Regex.test(uri);
    if (isEncoded)
        return { uri, isOnChain: true, isEncoded };
    const ipfsGateway = getGateway(gatewayUrls?.ipfs, 'https://ipfs.io');
    const arweaveGateway = getGateway(gatewayUrls?.arweave, 'https://arweave.net');
    const networkRegexMatch = uri.match(networkRegex);
    const { protocol, subpath, target, subtarget = '', } = networkRegexMatch?.groups || {};
    const isIPNS = protocol === 'ipns:/' || subpath === 'ipns/';
    const isIPFS = protocol === 'ipfs:/' || subpath === 'ipfs/' || ipfsHashRegex.test(uri);
    if (uri.startsWith('http') && !isIPNS && !isIPFS) {
        let replacedUri = uri;
        if (gatewayUrls?.arweave)
            replacedUri = uri.replace(/https:\/\/arweave.net/g, gatewayUrls?.arweave);
        return { uri: replacedUri, isOnChain: false, isEncoded: false };
    }
    if ((isIPNS || isIPFS) && target) {
        return {
            uri: `${ipfsGateway}/${isIPNS ? 'ipns' : 'ipfs'}/${target}${subtarget}`,
            isOnChain: false,
            isEncoded: false,
        };
    }
    else if (protocol === 'ar:/' && target) {
        return {
            uri: `${arweaveGateway}/${target}${subtarget || ''}`,
            isOnChain: false,
            isEncoded: false,
        };
    }
    let parsedUri = uri.replace(dataURIRegex, '');
    if (parsedUri.startsWith('<svg')) {
        // if svg, base64 encode
        parsedUri = `data:image/svg+xml;base64,${btoa(parsedUri)}`;
    }
    if (parsedUri.startsWith('data:') || parsedUri.startsWith('{')) {
        return {
            uri: parsedUri,
            isOnChain: true,
            isEncoded: false,
        };
    }
    throw new _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__.EnsAvatarUriResolutionError({ uri });
}
function getJsonImage(data) {
    // validation check for json data, must include one of theses properties
    if (typeof data !== 'object' ||
        (!('image' in data) && !('image_url' in data) && !('image_data' in data))) {
        throw new _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__.EnsAvatarInvalidMetadataError({ data });
    }
    return data.image || data.image_url || data.image_data;
}
async function getMetadataAvatarUri({ gatewayUrls, uri, }) {
    try {
        const res = await fetch(uri).then((res) => res.json());
        const image = await parseAvatarUri({
            gatewayUrls,
            uri: getJsonImage(res),
        });
        return image;
    }
    catch {
        throw new _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__.EnsAvatarUriResolutionError({ uri });
    }
}
async function parseAvatarUri({ gatewayUrls, uri, }) {
    const { uri: resolvedURI, isOnChain } = resolveAvatarUri({ uri, gatewayUrls });
    if (isOnChain)
        return resolvedURI;
    // check if resolvedURI is an image, if it is return the url
    const isImage = await isImageUri(resolvedURI);
    if (isImage)
        return resolvedURI;
    throw new _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__.EnsAvatarUriResolutionError({ uri });
}
function parseNftUri(uri_) {
    let uri = uri_;
    // parse valid nft spec (CAIP-22/CAIP-29)
    // @see: https://github.com/ChainAgnostic/CAIPs/tree/master/CAIPs
    if (uri.startsWith('did:nft:')) {
        // convert DID to CAIP
        uri = uri.replace('did:nft:', '').replace(/_/g, '/');
    }
    const [reference, asset_namespace, tokenID] = uri.split('/');
    const [eip_namespace, chainID] = reference.split(':');
    const [erc_namespace, contractAddress] = asset_namespace.split(':');
    if (!eip_namespace || eip_namespace.toLowerCase() !== 'eip155')
        throw new _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__.EnsAvatarInvalidNftUriError({ reason: 'Only EIP-155 supported' });
    if (!chainID)
        throw new _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__.EnsAvatarInvalidNftUriError({ reason: 'Chain ID not found' });
    if (!contractAddress)
        throw new _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__.EnsAvatarInvalidNftUriError({
            reason: 'Contract address not found',
        });
    if (!tokenID)
        throw new _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__.EnsAvatarInvalidNftUriError({ reason: 'Token ID not found' });
    if (!erc_namespace)
        throw new _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__.EnsAvatarInvalidNftUriError({ reason: 'ERC namespace not found' });
    return {
        chainID: parseInt(chainID),
        namespace: erc_namespace.toLowerCase(),
        contractAddress: contractAddress,
        tokenID,
    };
}
async function getNftTokenUri(client, { nft }) {
    if (nft.namespace === 'erc721') {
        return (0,_actions_public_readContract_js__WEBPACK_IMPORTED_MODULE_1__.readContract)(client, {
            address: nft.contractAddress,
            abi: [
                {
                    name: 'tokenURI',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [{ name: 'tokenId', type: 'uint256' }],
                    outputs: [{ name: '', type: 'string' }],
                },
            ],
            functionName: 'tokenURI',
            args: [BigInt(nft.tokenID)],
        });
    }
    if (nft.namespace === 'erc1155') {
        return (0,_actions_public_readContract_js__WEBPACK_IMPORTED_MODULE_1__.readContract)(client, {
            address: nft.contractAddress,
            abi: [
                {
                    name: 'uri',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [{ name: '_id', type: 'uint256' }],
                    outputs: [{ name: '', type: 'string' }],
                },
            ],
            functionName: 'uri',
            args: [BigInt(nft.tokenID)],
        });
    }
    throw new _errors_ens_js__WEBPACK_IMPORTED_MODULE_0__.EnsAvatarUnsupportedNamespaceError({ namespace: nft.namespace });
}
//# sourceMappingURL=utils.js.map

/***/ }),
/* 116 */
/*!**********************************************!*\
  !*** ./node_modules/viem/_esm/errors/ens.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnsAvatarInvalidMetadataError: () => (/* binding */ EnsAvatarInvalidMetadataError),
/* harmony export */   EnsAvatarInvalidNftUriError: () => (/* binding */ EnsAvatarInvalidNftUriError),
/* harmony export */   EnsAvatarUnsupportedNamespaceError: () => (/* binding */ EnsAvatarUnsupportedNamespaceError),
/* harmony export */   EnsAvatarUriResolutionError: () => (/* binding */ EnsAvatarUriResolutionError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 14);

class EnsAvatarInvalidMetadataError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ data }) {
        super('Unable to extract image from metadata. The metadata may be malformed or invalid.', {
            metaMessages: [
                '- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.',
                '',
                `Provided data: ${JSON.stringify(data)}`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'EnsAvatarInvalidMetadataError'
        });
    }
}
class EnsAvatarInvalidNftUriError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ reason }) {
        super(`ENS NFT avatar URI is invalid. ${reason}`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'EnsAvatarInvalidNftUriError'
        });
    }
}
class EnsAvatarUriResolutionError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ uri }) {
        super(`Unable to resolve ENS avatar URI "${uri}". The URI may be malformed, invalid, or does not respond with a valid image.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'EnsAvatarUriResolutionError'
        });
    }
}
class EnsAvatarUnsupportedNamespaceError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor({ namespace }) {
        super(`ENS NFT avatar namespace "${namespace}" is not supported. Must be "erc721" or "erc1155".`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'EnsAvatarUnsupportedNamespaceError'
        });
    }
}
//# sourceMappingURL=ens.js.map

/***/ }),
/* 117 */
/*!**********************************************************!*\
  !*** ./node_modules/viem/_esm/actions/ens/getEnsName.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEnsName: () => (/* binding */ getEnsName)
/* harmony export */ });
/* harmony import */ var _constants_abis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/abis.js */ 68);
/* harmony import */ var _utils_chain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/chain.js */ 65);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/encoding/toHex.js */ 32);
/* harmony import */ var _utils_ens_errors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/ens/errors.js */ 111);
/* harmony import */ var _utils_ens_packetToBytes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ens/packetToBytes.js */ 108);
/* harmony import */ var _public_readContract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/readContract.js */ 107);






/**
 * Gets primary name for specified address.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsName.html
 * - Examples: https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/ens
 *
 * Calls `reverse(bytes)` on ENS Universal Resolver Contract to "reverse resolve" the address to the primary ENS name.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsNameParameters}
 * @returns Name or `null` if not found. {@link GetEnsNameReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsName } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const ensName = await getEnsName(client, {
 *   address: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
 * })
 * // 'wagmi-dev.eth'
 */
async function getEnsName(client, { address, blockNumber, blockTag, universalResolverAddress: universalResolverAddress_, }) {
    let universalResolverAddress = universalResolverAddress_;
    if (!universalResolverAddress) {
        if (!client.chain)
            throw new Error('client chain not configured. universalResolverAddress is required.');
        universalResolverAddress = (0,_utils_chain_js__WEBPACK_IMPORTED_MODULE_0__.getChainContractAddress)({
            blockNumber,
            chain: client.chain,
            contract: 'ensUniversalResolver',
        });
    }
    const reverseNode = `${address.toLowerCase().substring(2)}.addr.reverse`;
    try {
        const res = await (0,_public_readContract_js__WEBPACK_IMPORTED_MODULE_1__.readContract)(client, {
            address: universalResolverAddress,
            abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_2__.universalResolverReverseAbi,
            functionName: 'reverse',
            args: [(0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_3__.toHex)((0,_utils_ens_packetToBytes_js__WEBPACK_IMPORTED_MODULE_4__.packetToBytes)(reverseNode))],
            blockNumber,
            blockTag,
        });
        return res[0];
    }
    catch (err) {
        if ((0,_utils_ens_errors_js__WEBPACK_IMPORTED_MODULE_5__.isNullUniversalResolverError)(err, 'reverse'))
            return null;
        throw err;
    }
}
//# sourceMappingURL=getEnsName.js.map

/***/ }),
/* 118 */
/*!**************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/ens/getEnsResolver.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEnsResolver: () => (/* binding */ getEnsResolver)
/* harmony export */ });
/* harmony import */ var _utils_chain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/chain.js */ 65);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/encoding/toHex.js */ 32);
/* harmony import */ var _utils_ens_packetToBytes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/ens/packetToBytes.js */ 108);
/* harmony import */ var _public_readContract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/readContract.js */ 107);




/**
 * Gets resolver for ENS name.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsResolver.html
 * - Examples: https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/ens
 *
 * Calls `findResolver(bytes)` on ENS Universal Resolver Contract to retrieve the resolver of an ENS name.
 *
 * Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize.html) function for this.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsResolverParameters}
 * @returns Address for ENS resolver. {@link GetEnsResolverReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsResolver, normalize } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const resolverAddress = await getEnsResolver(client, {
 *   name: normalize('wagmi-dev.eth'),
 * })
 * // '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41'
 */
async function getEnsResolver(client, { blockNumber, blockTag, name, universalResolverAddress: universalResolverAddress_, }) {
    let universalResolverAddress = universalResolverAddress_;
    if (!universalResolverAddress) {
        if (!client.chain)
            throw new Error('client chain not configured. universalResolverAddress is required.');
        universalResolverAddress = (0,_utils_chain_js__WEBPACK_IMPORTED_MODULE_0__.getChainContractAddress)({
            blockNumber,
            chain: client.chain,
            contract: 'ensUniversalResolver',
        });
    }
    const [resolverAddress] = await (0,_public_readContract_js__WEBPACK_IMPORTED_MODULE_1__.readContract)(client, {
        address: universalResolverAddress,
        abi: [
            {
                inputs: [{ type: 'bytes' }],
                name: 'findResolver',
                outputs: [{ type: 'address' }, { type: 'bytes32' }],
                stateMutability: 'view',
                type: 'function',
            },
        ],
        functionName: 'findResolver',
        args: [(0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_2__.toHex)((0,_utils_ens_packetToBytes_js__WEBPACK_IMPORTED_MODULE_3__.packetToBytes)(name))],
        blockNumber,
        blockTag,
    });
    return resolverAddress;
}
//# sourceMappingURL=getEnsResolver.js.map

/***/ }),
/* 119 */
/*!****************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/getFeeHistory.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFeeHistory: () => (/* binding */ getFeeHistory)
/* harmony export */ });
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/encoding/toHex.js */ 32);
/* harmony import */ var _utils_formatters_feeHistory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/formatters/feeHistory.js */ 120);


/**
 * Returns a collection of historical gas information.
 *
 * - Docs: https://viem.sh/docs/actions/public/getFeeHistory.html
 * - JSON-RPC Methods: [`eth_feeHistory`](https://docs.alchemy.com/reference/eth-feehistory)
 *
 * @param client - Client to use
 * @param parameters - {@link GetFeeHistoryParameters}
 * @returns The gas estimate (in wei). {@link GetFeeHistoryReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getFeeHistory } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const feeHistory = await getFeeHistory(client, {
 *   blockCount: 4,
 *   rewardPercentiles: [25, 75],
 * })
 */
async function getFeeHistory(client, { blockCount, blockNumber, blockTag = 'latest', rewardPercentiles, }) {
    const blockNumberHex = blockNumber ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.numberToHex)(blockNumber) : undefined;
    const feeHistory = await client.request({
        method: 'eth_feeHistory',
        params: [
            (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.numberToHex)(blockCount),
            blockNumberHex || blockTag,
            rewardPercentiles,
        ],
    });
    return (0,_utils_formatters_feeHistory_js__WEBPACK_IMPORTED_MODULE_1__.formatFeeHistory)(feeHistory);
}
//# sourceMappingURL=getFeeHistory.js.map

/***/ }),
/* 120 */
/*!***************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/formatters/feeHistory.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatFeeHistory: () => (/* binding */ formatFeeHistory)
/* harmony export */ });
function formatFeeHistory(feeHistory) {
    return {
        baseFeePerGas: feeHistory.baseFeePerGas.map((value) => BigInt(value)),
        gasUsedRatio: feeHistory.gasUsedRatio,
        oldestBlock: BigInt(feeHistory.oldestBlock),
        reward: feeHistory.reward?.map((reward) => reward.map((value) => BigInt(value))),
    };
}
//# sourceMappingURL=feeHistory.js.map

/***/ }),
/* 121 */
/*!*******************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/getFilterChanges.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFilterChanges: () => (/* binding */ getFilterChanges)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors/abi.js */ 17);
/* harmony import */ var _utils_abi_decodeEventLog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/abi/decodeEventLog.js */ 102);
/* harmony import */ var _utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/formatters/log.js */ 103);



/**
 * Returns a list of logs or hashes based on a [Filter](/docs/glossary/terms#filter) since the last time it was called.
 *
 * - Docs: https://viem.sh/docs/actions/public/getFilterChanges.html
 * - JSON-RPC Methods: [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges)
 *
 * A Filter can be created from the following actions:
 *
 * - [`createBlockFilter`](https://viem.sh/docs/actions/public/createBlockFilter.html)
 * - [`createContractEventFilter`](https://viem.sh/docs/contract/createContractEventFilter.html)
 * - [`createEventFilter`](https://viem.sh/docs/actions/public/createEventFilter.html)
 * - [`createPendingTransactionFilter`](https://viem.sh/docs/actions/public/createPendingTransactionFilter.html)
 *
 * Depending on the type of filter, the return value will be different:
 *
 * - If the filter was created with `createContractEventFilter` or `createEventFilter`, it returns a list of logs.
 * - If the filter was created with `createPendingTransactionFilter`, it returns a list of transaction hashes.
 * - If the filter was created with `createBlockFilter`, it returns a list of block hashes.
 *
 * @param client - Client to use
 * @param parameters - {@link GetFilterChangesParameters}
 * @returns Logs or hashes. {@link GetFilterChangesReturnType}
 *
 * @example
 * // Blocks
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createBlockFilter, getFilterChanges } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createBlockFilter(client)
 * const hashes = await getFilterChanges(client, { filter })
 *
 * @example
 * // Contract Events
 * import { createPublicClient, http, parseAbi } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createContractEventFilter, getFilterChanges } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createContractEventFilter(client, {
 *   address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
 *   abi: parseAbi(['event Transfer(address indexed, address indexed, uint256)']),
 *   eventName: 'Transfer',
 * })
 * const logs = await getFilterChanges(client, { filter })
 *
 * @example
 * // Raw Events
 * import { createPublicClient, http, parseAbiItem } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createEventFilter, getFilterChanges } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createEventFilter(client, {
 *   address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
 *   event: parseAbiItem('event Transfer(address indexed, address indexed, uint256)'),
 * })
 * const logs = await getFilterChanges(client, { filter })
 *
 * @example
 * // Transactions
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createPendingTransactionFilter, getFilterChanges } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createPendingTransactionFilter(client)
 * const hashes = await getFilterChanges(client, { filter })
 */
async function getFilterChanges(_client, { filter, }) {
    const strict = 'strict' in filter && filter.strict;
    const logs = await filter.request({
        method: 'eth_getFilterChanges',
        params: [filter.id],
    });
    return logs
        .map((log) => {
        if (typeof log === 'string')
            return log;
        try {
            const { eventName, args } = 'abi' in filter && filter.abi
                ? (0,_utils_abi_decodeEventLog_js__WEBPACK_IMPORTED_MODULE_0__.decodeEventLog)({
                    abi: filter.abi,
                    data: log.data,
                    topics: log.topics,
                    strict,
                })
                : { eventName: undefined, args: undefined };
            return (0,_utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_1__.formatLog)(log, { args, eventName });
        }
        catch (err) {
            let eventName;
            let isUnnamed;
            if (err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_2__.DecodeLogDataMismatch ||
                err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_2__.DecodeLogTopicsMismatch) {
                // If strict mode is on, and log data/topics do not match event definition, skip.
                if ('strict' in filter && filter.strict)
                    return;
                eventName = err.abiItem.name;
                isUnnamed = err.abiItem.inputs?.some((x) => !('name' in x && x.name));
            }
            // Set args undefined if there is an error decoding (e.g. indexed/non-indexed params mismatch).
            return (0,_utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_1__.formatLog)(log, { args: isUnnamed ? [] : {}, eventName });
        }
    })
        .filter(Boolean);
}
//# sourceMappingURL=getFilterChanges.js.map

/***/ }),
/* 122 */
/*!****************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/getFilterLogs.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFilterLogs: () => (/* binding */ getFilterLogs)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors/abi.js */ 17);
/* harmony import */ var _utils_abi_decodeEventLog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/abi/decodeEventLog.js */ 102);
/* harmony import */ var _utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/formatters/log.js */ 103);



/**
 * Returns a list of event logs since the filter was created.
 *
 * - Docs: https://viem.sh/docs/actions/public/getFilterLogs.html
 * - JSON-RPC Methods: [`eth_getFilterLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterlogs)
 *
 * `getFilterLogs` is only compatible with **event filters**.
 *
 * @param client - Client to use
 * @param parameters - {@link GetFilterLogsParameters}
 * @returns A list of event logs. {@link GetFilterLogsReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbiItem } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createEventFilter, getFilterLogs } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createEventFilter(client, {
 *   address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
 *   event: parseAbiItem('event Transfer(address indexed, address indexed, uint256)'),
 * })
 * const logs = await getFilterLogs(client, { filter })
 */
async function getFilterLogs(_client, { filter, }) {
    const strict = filter.strict ?? false;
    const logs = await filter.request({
        method: 'eth_getFilterLogs',
        params: [filter.id],
    });
    return logs
        .map((log) => {
        try {
            const { eventName, args } = 'abi' in filter && filter.abi
                ? (0,_utils_abi_decodeEventLog_js__WEBPACK_IMPORTED_MODULE_0__.decodeEventLog)({
                    abi: filter.abi,
                    data: log.data,
                    topics: log.topics,
                    strict,
                })
                : { eventName: undefined, args: undefined };
            return (0,_utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_1__.formatLog)(log, { args, eventName });
        }
        catch (err) {
            let eventName;
            let isUnnamed;
            if (err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_2__.DecodeLogDataMismatch ||
                err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_2__.DecodeLogTopicsMismatch) {
                // If strict mode is on, and log data/topics do not match event definition, skip.
                if ('strict' in filter && filter.strict)
                    return;
                eventName = err.abiItem.name;
                isUnnamed = err.abiItem.inputs?.some((x) => !('name' in x && x.name));
            }
            // Set args to empty if there is an error decoding (e.g. indexed/non-indexed params mismatch).
            return (0,_utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_1__.formatLog)(log, { args: isUnnamed ? [] : {}, eventName });
        }
    })
        .filter(Boolean);
}
//# sourceMappingURL=getFilterLogs.js.map

/***/ }),
/* 123 */
/*!***********************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/getProof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProof: () => (/* binding */ getProof)
/* harmony export */ });
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/encoding/toHex.js */ 32);
/* harmony import */ var _utils_formatters_proof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/formatters/proof.js */ 124);


/**
 * Returns the account and storage values of the specified account including the Merkle-proof.
 *
 * - Docs: https://viem.sh/docs/actions/public/getProof.html
 * - JSON-RPC Methods:
 *   - Calls [`eth_getProof`](https://eips.ethereum.org/EIPS/eip-1186)
 *
 * @param client - Client to use
 * @param parameters - {@link GetProofParameters}
 * @returns Proof data. {@link GetProofReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getProof } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const block = await getProof(client, {
 *  address: '0x...',
 *  storageKeys: ['0x...'],
 * })
 */
async function getProof(client, { address, blockNumber, blockTag: blockTag_, storageKeys, }) {
    const blockTag = blockTag_ ?? 'latest';
    const blockNumberHex = blockNumber !== undefined ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.numberToHex)(blockNumber) : undefined;
    const proof = await client.request({
        method: 'eth_getProof',
        params: [address, storageKeys, blockNumberHex || blockTag],
    });
    return (0,_utils_formatters_proof_js__WEBPACK_IMPORTED_MODULE_1__.formatProof)(proof);
}
//# sourceMappingURL=getProof.js.map

/***/ }),
/* 124 */
/*!**********************************************************!*\
  !*** ./node_modules/viem/_esm/utils/formatters/proof.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatProof: () => (/* binding */ formatProof)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ 28);

function formatStorageProof(storageProof) {
    return storageProof.map((proof) => ({
        ...proof,
        value: BigInt(proof.value),
    }));
}
function formatProof(proof) {
    return {
        ...proof,
        balance: proof.balance ? BigInt(proof.balance) : undefined,
        nonce: proof.nonce ? (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.hexToNumber)(proof.nonce) : undefined,
        storageProof: proof.storageProof
            ? formatStorageProof(proof.storageProof)
            : undefined,
    };
}
//# sourceMappingURL=proof.js.map

/***/ }),
/* 125 */
/*!***************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/getStorageAt.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStorageAt: () => (/* binding */ getStorageAt)
/* harmony export */ });
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/encoding/toHex.js */ 32);

/**
 * Returns the value from a storage slot at a given address.
 *
 * - Docs: https://viem.sh/docs/contract/getStorageAt.html
 * - JSON-RPC Methods: [`eth_getStorageAt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getstorageat)
 *
 * @param client - Client to use
 * @param parameters - {@link GetStorageAtParameters}
 * @returns The value of the storage slot. {@link GetStorageAtReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getStorageAt } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const code = await getStorageAt(client, {
 *   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *   slot: toHex(0),
 * })
 */
async function getStorageAt(client, { address, blockNumber, blockTag = 'latest', slot }) {
    const blockNumberHex = blockNumber !== undefined ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.numberToHex)(blockNumber) : undefined;
    const data = await client.request({
        method: 'eth_getStorageAt',
        params: [address, slot, blockNumberHex || blockTag],
    });
    return data;
}
//# sourceMappingURL=getStorageAt.js.map

/***/ }),
/* 126 */
/*!*****************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/getTransaction.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTransaction: () => (/* binding */ getTransaction)
/* harmony export */ });
/* harmony import */ var _errors_transaction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors/transaction.js */ 46);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/encoding/toHex.js */ 32);
/* harmony import */ var _utils_formatters_transaction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/formatters/transaction.js */ 84);



/**
 * Returns information about a [Transaction](https://viem.sh/docs/glossary/terms.html#transaction) given a hash or block identifier.
 *
 * - Docs: https://viem.sh/docs/actions/public/getTransaction.html
 * - Example: https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/transactions/fetching-transactions
 * - JSON-RPC Methods: [`eth_getTransactionByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionByHash)
 *
 * @param client - Client to use
 * @param parameters - {@link GetTransactionParameters}
 * @returns The transaction information. {@link GetTransactionReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getTransaction } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const transaction = await getTransaction(client, {
 *   hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
 * })
 */
async function getTransaction(client, { blockHash, blockNumber, blockTag: blockTag_, hash, index, }) {
    const blockTag = blockTag_ || 'latest';
    const blockNumberHex = blockNumber !== undefined ? (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.numberToHex)(blockNumber) : undefined;
    let transaction = null;
    if (hash) {
        transaction = await client.request({
            method: 'eth_getTransactionByHash',
            params: [hash],
        });
    }
    else if (blockHash) {
        transaction = await client.request({
            method: 'eth_getTransactionByBlockHashAndIndex',
            params: [blockHash, (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.numberToHex)(index)],
        });
    }
    else if (blockNumberHex || blockTag) {
        transaction = await client.request({
            method: 'eth_getTransactionByBlockNumberAndIndex',
            params: [blockNumberHex || blockTag, (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_0__.numberToHex)(index)],
        });
    }
    if (!transaction)
        throw new _errors_transaction_js__WEBPACK_IMPORTED_MODULE_1__.TransactionNotFoundError({
            blockHash,
            blockNumber,
            blockTag,
            hash,
            index,
        });
    const format = client.chain?.formatters?.transaction?.format || _utils_formatters_transaction_js__WEBPACK_IMPORTED_MODULE_2__.formatTransaction;
    return format(transaction);
}
//# sourceMappingURL=getTransaction.js.map

/***/ }),
/* 127 */
/*!******************************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/getTransactionConfirmations.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTransactionConfirmations: () => (/* binding */ getTransactionConfirmations)
/* harmony export */ });
/* harmony import */ var _getBlockNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBlockNumber.js */ 95);
/* harmony import */ var _getTransaction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getTransaction.js */ 126);


/**
 * Returns the number of blocks passed (confirmations) since the transaction was processed on a block.
 *
 * - Docs: https://viem.sh/docs/actions/public/getTransactionConfirmations.html
 * - Example: https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/transactions/fetching-transactions
 * - JSON-RPC Methods: [`eth_getTransactionConfirmations`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionConfirmations)
 *
 * @param client - Client to use
 * @param parameters - {@link GetTransactionConfirmationsParameters}
 * @returns The number of blocks passed since the transaction was processed. If confirmations is 0, then the Transaction has not been confirmed & processed yet. {@link GetTransactionConfirmationsReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getTransactionConfirmations } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const confirmations = await getTransactionConfirmations(client, {
 *   hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
 * })
 */
async function getTransactionConfirmations(client, { hash, transactionReceipt }) {
    const [blockNumber, transaction] = await Promise.all([
        (0,_getBlockNumber_js__WEBPACK_IMPORTED_MODULE_0__.getBlockNumber)(client),
        hash ? (0,_getTransaction_js__WEBPACK_IMPORTED_MODULE_1__.getTransaction)(client, { hash }) : undefined,
    ]);
    const transactionBlockNumber = transactionReceipt?.blockNumber || transaction?.blockNumber;
    if (!transactionBlockNumber)
        return 0n;
    return blockNumber - transactionBlockNumber + 1n;
}
//# sourceMappingURL=getTransactionConfirmations.js.map

/***/ }),
/* 128 */
/*!************************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/getTransactionReceipt.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTransactionReceipt: () => (/* binding */ getTransactionReceipt)
/* harmony export */ });
/* harmony import */ var _errors_transaction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors/transaction.js */ 46);
/* harmony import */ var _utils_formatters_transactionReceipt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/formatters/transactionReceipt.js */ 129);


/**
 * Returns the [Transaction Receipt](https://viem.sh/docs/glossary/terms.html#transaction-receipt) given a [Transaction](https://viem.sh/docs/glossary/terms.html#transaction) hash.
 *
 * - Docs: https://viem.sh/docs/actions/public/getTransactionReceipt.html
 * - Example: https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/transactions/fetching-transactions
 * - JSON-RPC Methods: [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionreceipt)
 *
 * @param client - Client to use
 * @param parameters - {@link GetTransactionReceiptParameters}
 * @returns The transaction receipt. {@link GetTransactionReceiptReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getTransactionReceipt } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const transactionReceipt = await getTransactionReceipt(client, {
 *   hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
 * })
 */
async function getTransactionReceipt(client, { hash }) {
    const receipt = await client.request({
        method: 'eth_getTransactionReceipt',
        params: [hash],
    });
    if (!receipt)
        throw new _errors_transaction_js__WEBPACK_IMPORTED_MODULE_0__.TransactionReceiptNotFoundError({ hash });
    const format = client.chain?.formatters?.transactionReceipt?.format ||
        _utils_formatters_transactionReceipt_js__WEBPACK_IMPORTED_MODULE_1__.formatTransactionReceipt;
    return format(receipt);
}
//# sourceMappingURL=getTransactionReceipt.js.map

/***/ }),
/* 129 */
/*!***********************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/formatters/transactionReceipt.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defineTransactionReceipt: () => (/* binding */ defineTransactionReceipt),
/* harmony export */   formatTransactionReceipt: () => (/* binding */ formatTransactionReceipt)
/* harmony export */ });
/* harmony import */ var _encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../encoding/fromHex.js */ 28);
/* harmony import */ var _formatter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatter.js */ 53);
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log.js */ 103);
/* harmony import */ var _transaction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transaction.js */ 84);




const statuses = {
    '0x0': 'reverted',
    '0x1': 'success',
};
function formatTransactionReceipt(transactionReceipt) {
    return {
        ...transactionReceipt,
        blockNumber: transactionReceipt.blockNumber
            ? BigInt(transactionReceipt.blockNumber)
            : null,
        contractAddress: transactionReceipt.contractAddress
            ? transactionReceipt.contractAddress
            : null,
        cumulativeGasUsed: transactionReceipt.cumulativeGasUsed
            ? BigInt(transactionReceipt.cumulativeGasUsed)
            : null,
        effectiveGasPrice: transactionReceipt.effectiveGasPrice
            ? BigInt(transactionReceipt.effectiveGasPrice)
            : null,
        gasUsed: transactionReceipt.gasUsed
            ? BigInt(transactionReceipt.gasUsed)
            : null,
        logs: transactionReceipt.logs
            ? transactionReceipt.logs.map((log) => (0,_log_js__WEBPACK_IMPORTED_MODULE_0__.formatLog)(log))
            : null,
        to: transactionReceipt.to ? transactionReceipt.to : null,
        transactionIndex: transactionReceipt.transactionIndex
            ? (0,_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_1__.hexToNumber)(transactionReceipt.transactionIndex)
            : null,
        status: transactionReceipt.status
            ? statuses[transactionReceipt.status]
            : null,
        type: transactionReceipt.type
            ? _transaction_js__WEBPACK_IMPORTED_MODULE_2__.transactionType[transactionReceipt.type] || transactionReceipt.type
            : null,
    };
}
const defineTransactionReceipt = /*#__PURE__*/ (0,_formatter_js__WEBPACK_IMPORTED_MODULE_3__.defineFormatter)('transactionReceipt', formatTransactionReceipt);
//# sourceMappingURL=transactionReceipt.js.map

/***/ }),
/* 130 */
/*!************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/multicall.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   multicall: () => (/* binding */ multicall)
/* harmony export */ });
/* harmony import */ var _constants_abis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/abis.js */ 68);
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../errors/abi.js */ 17);
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../errors/base.js */ 14);
/* harmony import */ var _errors_contract_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../errors/contract.js */ 59);
/* harmony import */ var _utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/abi/decodeFunctionResult.js */ 69);
/* harmony import */ var _utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/abi/encodeFunctionData.js */ 67);
/* harmony import */ var _utils_chain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/chain.js */ 65);
/* harmony import */ var _utils_errors_getContractError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/errors/getContractError.js */ 93);
/* harmony import */ var _readContract_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./readContract.js */ 107);









/**
 * Similar to [`readContract`](https://viem.sh/docs/contract/readContract.html), but batches up multiple functions on a contract in a single RPC call via the [`multicall3` contract](https://github.com/mds1/multicall).
 *
 * - Docs: https://viem.sh/docs/contract/multicall.html
 *
 * @param client - Client to use
 * @param parameters - {@link MulticallParameters}
 * @returns An array of results with accompanying status. {@link MulticallReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbi } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { multicall } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const abi = parseAbi([
 *   'function balanceOf(address) view returns (uint256)',
 *   'function totalSupply() view returns (uint256)',
 * ])
 * const results = await multicall(client, {
 *   contracts: [
 *     {
 *       address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *       abi,
 *       functionName: 'balanceOf',
 *       args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
 *     },
 *     {
 *       address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *       abi,
 *       functionName: 'totalSupply',
 *     },
 *   ],
 * })
 * // [{ result: 424122n, status: 'success' }, { result: 1000000n, status: 'success' }]
 */
async function multicall(client, args) {
    const { allowFailure = true, batchSize: batchSize_, blockNumber, blockTag, contracts, multicallAddress: multicallAddress_, } = args;
    const batchSize = batchSize_ ??
        ((typeof client.batch?.multicall === 'object' &&
            client.batch.multicall.batchSize) ||
            1024);
    let multicallAddress = multicallAddress_;
    if (!multicallAddress) {
        if (!client.chain)
            throw new Error('client chain not configured. multicallAddress is required.');
        multicallAddress = (0,_utils_chain_js__WEBPACK_IMPORTED_MODULE_0__.getChainContractAddress)({
            blockNumber,
            chain: client.chain,
            contract: 'multicall3',
        });
    }
    const chunkedCalls = [[]];
    let currentChunk = 0;
    let currentChunkSize = 0;
    for (let i = 0; i < contracts.length; i++) {
        const { abi, address, args, functionName } = contracts[i];
        try {
            const callData = (0,_utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_1__.encodeFunctionData)({
                abi,
                args,
                functionName,
            });
            currentChunkSize += (callData.length - 2) / 2;
            // Check to see if we need to create a new chunk.
            if (
            // Check if batching is enabled.
            batchSize > 0 &&
                // Check if the current size of the batch exceeds the size limit.
                currentChunkSize > batchSize &&
                // Check if the current chunk is not already empty.
                chunkedCalls[currentChunk].length > 0) {
                currentChunk++;
                currentChunkSize = (callData.length - 2) / 2;
                chunkedCalls[currentChunk] = [];
            }
            chunkedCalls[currentChunk] = [
                ...chunkedCalls[currentChunk],
                {
                    allowFailure: true,
                    callData,
                    target: address,
                },
            ];
        }
        catch (err) {
            const error = (0,_utils_errors_getContractError_js__WEBPACK_IMPORTED_MODULE_2__.getContractError)(err, {
                abi,
                address,
                args,
                docsPath: '/docs/contract/multicall',
                functionName,
            });
            if (!allowFailure)
                throw error;
            chunkedCalls[currentChunk] = [
                ...chunkedCalls[currentChunk],
                {
                    allowFailure: true,
                    callData: '0x',
                    target: address,
                },
            ];
        }
    }
    const aggregate3Results = await Promise.allSettled(chunkedCalls.map((calls) => (0,_readContract_js__WEBPACK_IMPORTED_MODULE_3__.readContract)(client, {
        abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_4__.multicall3Abi,
        address: multicallAddress,
        args: [calls],
        blockNumber,
        blockTag,
        functionName: 'aggregate3',
    })));
    const results = [];
    for (let i = 0; i < aggregate3Results.length; i++) {
        const result = aggregate3Results[i];
        // If an error occurred in a `readContract` invocation (ie. network error),
        // then append the failure reason to each contract result.
        if (result.status === 'rejected') {
            if (!allowFailure)
                throw result.reason;
            for (let j = 0; j < chunkedCalls[i].length; j++) {
                results.push({
                    status: 'failure',
                    error: result.reason,
                    result: undefined,
                });
            }
            continue;
        }
        // If the `readContract` call was successful, then decode the results.
        const aggregate3Result = result.value;
        for (let j = 0; j < aggregate3Result.length; j++) {
            // Extract the response from `readContract`
            const { returnData, success } = aggregate3Result[j];
            // Extract the request call data from the original call.
            const { callData } = chunkedCalls[i][j];
            // Extract the contract config for this call from the `contracts` argument
            // for decoding.
            const { abi, address, functionName, args } = contracts[results.length];
            try {
                if (callData === '0x')
                    throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_5__.AbiDecodingZeroDataError();
                if (!success)
                    throw new _errors_contract_js__WEBPACK_IMPORTED_MODULE_6__.RawContractError({ data: returnData });
                const result = (0,_utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_7__.decodeFunctionResult)({
                    abi,
                    args,
                    data: returnData,
                    functionName,
                });
                results.push(allowFailure ? { result, status: 'success' } : result);
            }
            catch (err) {
                const error = (0,_utils_errors_getContractError_js__WEBPACK_IMPORTED_MODULE_2__.getContractError)(err, {
                    abi,
                    address,
                    args,
                    docsPath: '/docs/contract/multicall',
                    functionName,
                });
                if (!allowFailure)
                    throw error;
                results.push({ error, result: undefined, status: 'failure' });
            }
        }
    }
    if (results.length !== contracts.length)
        throw new _errors_base_js__WEBPACK_IMPORTED_MODULE_8__.BaseError('multicall results mismatch');
    return results;
}
//# sourceMappingURL=multicall.js.map

/***/ }),
/* 131 */
/*!*********************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/wallet/sendRawTransaction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendRawTransaction: () => (/* binding */ sendRawTransaction)
/* harmony export */ });
/**
 * Sends a **signed** transaction to the network
 *
 * - Docs: https://viem.sh/docs/actions/wallet/sendRawTransaction.html
 * - JSON-RPC Method: [`eth_sendRawTransaction`](https://ethereum.github.io/execution-apis/api-documentation/)
 *
 * @param client - Client to use
 * @param parameters - {@link SendRawTransactionParameters}
 * @returns The transaction hash. {@link SendRawTransactionReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { sendRawTransaction } from 'viem/wallet'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 *
 * const hash = await sendRawTransaction(client, {
 *   serializedTransaction: '0x02f850018203118080825208808080c080a04012522854168b27e5dc3d5839bab5e6b39e1a0ffd343901ce1622e3d64b48f1a04e00902ae0502c4728cbf12156290df99c3ed7de85b1dbfe20b5c36931733a33'
 * })
 */
async function sendRawTransaction(client, { serializedTransaction }) {
    return client.request({
        method: 'eth_sendRawTransaction',
        params: [serializedTransaction],
    });
}
//# sourceMappingURL=sendRawTransaction.js.map

/***/ }),
/* 132 */
/*!*******************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/simulateContract.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   simulateContract: () => (/* binding */ simulateContract)
/* harmony export */ });
/* harmony import */ var _accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../accounts/utils/parseAccount.js */ 4);
/* harmony import */ var _utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/abi/decodeFunctionResult.js */ 69);
/* harmony import */ var _utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/abi/encodeFunctionData.js */ 67);
/* harmony import */ var _utils_errors_getContractError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/errors/getContractError.js */ 93);
/* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./call.js */ 7);





/**
 * Simulates/validates a contract interaction. This is useful for retrieving **return data** and **revert reasons** of contract write functions.
 *
 * - Docs: https://viem.sh/docs/contract/simulateContract.html
 * - Examples: https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/contracts/writing-to-contracts
 *
 * This function does not require gas to execute and _**does not**_ change the state of the blockchain. It is almost identical to [`readContract`](https://viem.sh/docs/contract/readContract.html), but also supports contract write functions.
 *
 * Internally, uses a [Public Client](https://viem.sh/docs/clients/public.html) to call the [`call` action](https://viem.sh/docs/actions/public/call.html) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData.html).
 *
 * @param client - Client to use
 * @param parameters - {@link SimulateContractParameters}
 * @returns The simulation result and write request. {@link SimulateContractReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { simulateContract } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const result = await simulateContract(client, {
 *   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *   abi: parseAbi(['function mint(uint32) view returns (uint32)']),
 *   functionName: 'mint',
 *   args: ['69420'],
 *   account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 * })
 */
async function simulateContract(client, { abi, address, args, dataSuffix, functionName, ...callRequest }) {
    const account = callRequest.account
        ? (0,_accounts_utils_parseAccount_js__WEBPACK_IMPORTED_MODULE_0__.parseAccount)(callRequest.account)
        : undefined;
    const calldata = (0,_utils_abi_encodeFunctionData_js__WEBPACK_IMPORTED_MODULE_1__.encodeFunctionData)({
        abi,
        args,
        functionName,
    });
    try {
        const { data } = await (0,_call_js__WEBPACK_IMPORTED_MODULE_2__.call)(client, {
            batch: false,
            data: `${calldata}${dataSuffix ? dataSuffix.replace('0x', '') : ''}`,
            to: address,
            ...callRequest,
        });
        const result = (0,_utils_abi_decodeFunctionResult_js__WEBPACK_IMPORTED_MODULE_3__.decodeFunctionResult)({
            abi,
            args,
            functionName,
            data: data || '0x',
        });
        return {
            result,
            request: {
                abi,
                address,
                args,
                dataSuffix,
                functionName,
                ...callRequest,
            },
        };
    }
    catch (err) {
        throw (0,_utils_errors_getContractError_js__WEBPACK_IMPORTED_MODULE_4__.getContractError)(err, {
            abi: abi,
            address,
            args,
            docsPath: '/docs/contract/simulateContract',
            functionName,
            sender: account?.address,
        });
    }
}
//# sourceMappingURL=simulateContract.js.map

/***/ }),
/* 133 */
/*!****************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/verifyMessage.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   verifyMessage: () => (/* binding */ verifyMessage)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ 134);
/* harmony import */ var _verifyHash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifyHash.js */ 135);


/**
 * Verify that a message was signed by the provided address.
 *
 * Compatible with Smart Contract Accounts & Externally Owned Accounts via [ERC-6492](https://eips.ethereum.org/EIPS/eip-6492).
 *
 * - Docs {@link https://viem.sh/docs/actions/public/verifyMessage.html}
 *
 * @param client - Client to use.
 * @param parameters - {@link VerifyMessageParameters}
 * @returns Whether or not the signature is valid. {@link VerifyMessageReturnType}
 */
async function verifyMessage(client, { address, message, signature, ...callRequest }) {
    const hash = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.hashMessage)(message);
    return (0,_verifyHash_js__WEBPACK_IMPORTED_MODULE_1__.verifyHash)(client, {
        address,
        hash,
        signature,
        ...callRequest,
    });
}
//# sourceMappingURL=verifyMessage.js.map

/***/ }),
/* 134 */
/*!***************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/signature/hashMessage.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hashMessage: () => (/* binding */ hashMessage)
/* harmony export */ });
/* harmony import */ var _data_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/concat.js */ 37);
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoding/toBytes.js */ 27);
/* harmony import */ var _hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hash/keccak256.js */ 21);



function hashMessage(message, to_) {
    const messageBytes = (() => {
        if (typeof message === 'string')
            return (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__.stringToBytes)(message);
        if (message.raw instanceof Uint8Array)
            return message.raw;
        return (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__.toBytes)(message.raw);
    })();
    const prefixBytes = (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_0__.stringToBytes)(`\x19Ethereum Signed Message:\n${messageBytes.length}`);
    return (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__.keccak256)((0,_data_concat_js__WEBPACK_IMPORTED_MODULE_2__.concat)([prefixBytes, messageBytes]), to_);
}
//# sourceMappingURL=hashMessage.js.map

/***/ }),
/* 135 */
/*!*************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/verifyHash.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   verifyHash: () => (/* binding */ verifyHash)
/* harmony export */ });
/* harmony import */ var _constants_abis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/abis.js */ 68);
/* harmony import */ var _constants_contracts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/contracts.js */ 137);
/* harmony import */ var _errors_contract_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../errors/contract.js */ 59);
/* harmony import */ var _utils_data_isBytesEqual_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/data/isBytesEqual.js */ 138);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ 11);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ 32);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/index.js */ 136);
/* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./call.js */ 7);






/**
 * Verifies a message hash on chain using ERC-6492.
 *
 * @param client - Client to use.
 * @param parameters - {@link VerifyHashParameters}
 * @returns Whether or not the signature is valid. {@link VerifyHashReturnType}
 */
async function verifyHash(client, { address, hash, signature, ...callRequest }) {
    const signatureHex = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.isHex)(signature) ? signature : (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.toHex)(signature);
    try {
        const { data } = await (0,_call_js__WEBPACK_IMPORTED_MODULE_2__.call)(client, {
            data: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__.encodeDeployData)({
                abi: _constants_abis_js__WEBPACK_IMPORTED_MODULE_4__.universalSignatureValidatorAbi,
                args: [address, hash, signatureHex],
                bytecode: _constants_contracts_js__WEBPACK_IMPORTED_MODULE_5__.universalSignatureValidatorByteCode,
            }),
            ...callRequest,
        });
        return (0,_utils_data_isBytesEqual_js__WEBPACK_IMPORTED_MODULE_6__.isBytesEqual)(data ?? '0x0', '0x1');
    }
    catch (error) {
        if (error instanceof _errors_contract_js__WEBPACK_IMPORTED_MODULE_7__.CallExecutionError) {
            // if the execution fails, the signature was not valid and an internal method inside of the validator reverted
            // this can happen for many reasons, for example if signer can not be recovered from the signature
            // or if the signature has no valid format
            return false;
        }
        throw error;
    }
}
//# sourceMappingURL=verifyHash.js.map

/***/ }),
/* 136 */
/*!**************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/abi/encodeDeployData.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodeDeployData: () => (/* binding */ encodeDeployData)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors/abi.js */ 17);
/* harmony import */ var _data_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/concat.js */ 37);
/* harmony import */ var _encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encodeAbiParameters.js */ 36);



const docsPath = '/docs/contract/encodeDeployData';
function encodeDeployData({ abi, args, bytecode, }) {
    if (!args || args.length === 0)
        return bytecode;
    const description = abi.find((x) => 'type' in x && x.type === 'constructor');
    if (!description)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__.AbiConstructorNotFoundError({ docsPath });
    if (!('inputs' in description))
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__.AbiConstructorParamsNotFoundError({ docsPath });
    if (!description.inputs || description.inputs.length === 0)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__.AbiConstructorParamsNotFoundError({ docsPath });
    const data = (0,_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_1__.encodeAbiParameters)(description.inputs, args);
    return (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_2__.concatHex)([bytecode, data]);
}
//# sourceMappingURL=encodeDeployData.js.map

/***/ }),
/* 137 */
/*!*******************************************************!*\
  !*** ./node_modules/viem/_esm/constants/contracts.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   universalSignatureValidatorByteCode: () => (/* binding */ universalSignatureValidatorByteCode)
/* harmony export */ });
const universalSignatureValidatorByteCode = '0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572';
//# sourceMappingURL=contracts.js.map

/***/ }),
/* 138 */
/*!***********************************************************!*\
  !*** ./node_modules/viem/_esm/utils/data/isBytesEqual.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBytesEqual: () => (/* binding */ isBytesEqual)
/* harmony export */ });
/* harmony import */ var _noble_curves_abstract_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @noble/curves/abstract/utils */ 139);
/* harmony import */ var _encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../encoding/toBytes.js */ 27);
/* harmony import */ var _isHex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isHex.js */ 11);



function isBytesEqual(a_, b_) {
    const a = (0,_isHex_js__WEBPACK_IMPORTED_MODULE_0__.isHex)(a_) ? (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_1__.toBytes)(a_) : a_;
    const b = (0,_isHex_js__WEBPACK_IMPORTED_MODULE_0__.isHex)(b_) ? (0,_encoding_toBytes_js__WEBPACK_IMPORTED_MODULE_1__.toBytes)(b_) : b_;
    return (0,_noble_curves_abstract_utils__WEBPACK_IMPORTED_MODULE_2__.equalBytes)(a, b);
}
//# sourceMappingURL=isBytesEqual.js.map

/***/ }),
/* 139 */
/*!**********************************************************!*\
  !*** ./node_modules/@noble/curves/esm/abstract/utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bitGet: () => (/* binding */ bitGet),
/* harmony export */   bitLen: () => (/* binding */ bitLen),
/* harmony export */   bitMask: () => (/* binding */ bitMask),
/* harmony export */   bitSet: () => (/* binding */ bitSet),
/* harmony export */   bytesToHex: () => (/* binding */ bytesToHex),
/* harmony export */   bytesToNumberBE: () => (/* binding */ bytesToNumberBE),
/* harmony export */   bytesToNumberLE: () => (/* binding */ bytesToNumberLE),
/* harmony export */   concatBytes: () => (/* binding */ concatBytes),
/* harmony export */   createHmacDrbg: () => (/* binding */ createHmacDrbg),
/* harmony export */   ensureBytes: () => (/* binding */ ensureBytes),
/* harmony export */   equalBytes: () => (/* binding */ equalBytes),
/* harmony export */   hexToBytes: () => (/* binding */ hexToBytes),
/* harmony export */   hexToNumber: () => (/* binding */ hexToNumber),
/* harmony export */   numberToBytesBE: () => (/* binding */ numberToBytesBE),
/* harmony export */   numberToBytesLE: () => (/* binding */ numberToBytesLE),
/* harmony export */   numberToHexUnpadded: () => (/* binding */ numberToHexUnpadded),
/* harmony export */   numberToVarBytesBE: () => (/* binding */ numberToVarBytesBE),
/* harmony export */   utf8ToBytes: () => (/* binding */ utf8ToBytes),
/* harmony export */   validateObject: () => (/* binding */ validateObject)
/* harmony export */ });
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// 100 lines of code in the file are duplicated from noble-hashes (utils).
// This is OK: `abstract` directory does not use noble-hashes.
// User may opt-in into using different hashing library. This way, noble-hashes
// won't be included into their bundle.
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
const u8a = (a) => a instanceof Uint8Array;
const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */
function bytesToHex(bytes) {
    if (!u8a(bytes))
        throw new Error('Uint8Array expected');
    // pre-caching improves the speed 6x
    let hex = '';
    for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
    }
    return hex;
}
function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? `0${hex}` : hex;
}
function hexToNumber(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    // Big Endian
    return BigInt(hex === '' ? '0' : `0x${hex}`);
}
/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */
function hexToBytes(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    const len = hex.length;
    if (len % 2)
        throw new Error('padded hex string expected, got unpadded hex of length ' + len);
    const array = new Uint8Array(len / 2);
    for (let i = 0; i < array.length; i++) {
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0)
            throw new Error('Invalid byte sequence');
        array[i] = byte;
    }
    return array;
}
// BE: Big Endian, LE: Little Endian
function bytesToNumberBE(bytes) {
    return hexToNumber(bytesToHex(bytes));
}
function bytesToNumberLE(bytes) {
    if (!u8a(bytes))
        throw new Error('Uint8Array expected');
    return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
}
function numberToBytesBE(n, len) {
    return hexToBytes(n.toString(16).padStart(len * 2, '0'));
}
function numberToBytesLE(n, len) {
    return numberToBytesBE(n, len).reverse();
}
// Unpadded, rarely used
function numberToVarBytesBE(n) {
    return hexToBytes(numberToHexUnpadded(n));
}
/**
 * Takes hex string or Uint8Array, converts to Uint8Array.
 * Validates output length.
 * Will throw error for other types.
 * @param title descriptive title for an error e.g. 'private key'
 * @param hex hex string or Uint8Array
 * @param expectedLength optional, will compare to result array's length
 * @returns
 */
function ensureBytes(title, hex, expectedLength) {
    let res;
    if (typeof hex === 'string') {
        try {
            res = hexToBytes(hex);
        }
        catch (e) {
            throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e}`);
        }
    }
    else if (u8a(hex)) {
        // Uint8Array.from() instead of hash.slice() because node.js Buffer
        // is instance of Uint8Array, and its slice() creates **mutable** copy
        res = Uint8Array.from(hex);
    }
    else {
        throw new Error(`${title} must be hex string or Uint8Array`);
    }
    const len = res.length;
    if (typeof expectedLength === 'number' && len !== expectedLength)
        throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
    return res;
}
/**
 * Copies several Uint8Arrays into one.
 */
function concatBytes(...arrays) {
    const r = new Uint8Array(arrays.reduce((sum, a) => sum + a.length, 0));
    let pad = 0; // walk through each item, ensure they have proper type
    arrays.forEach((a) => {
        if (!u8a(a))
            throw new Error('Uint8Array expected');
        r.set(a, pad);
        pad += a.length;
    });
    return r;
}
function equalBytes(b1, b2) {
    // We don't care about timing attacks here
    if (b1.length !== b2.length)
        return false;
    for (let i = 0; i < b1.length; i++)
        if (b1[i] !== b2[i])
            return false;
    return true;
}
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */
function utf8ToBytes(str) {
    if (typeof str !== 'string')
        throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
// Bit operations
/**
 * Calculates amount of bits in a bigint.
 * Same as `n.toString(2).length`
 */
function bitLen(n) {
    let len;
    for (len = 0; n > _0n; n >>= _1n, len += 1)
        ;
    return len;
}
/**
 * Gets single bit at position.
 * NOTE: first bit position is 0 (same as arrays)
 * Same as `!!+Array.from(n.toString(2)).reverse()[pos]`
 */
function bitGet(n, pos) {
    return (n >> BigInt(pos)) & _1n;
}
/**
 * Sets single bit at position.
 */
const bitSet = (n, pos, value) => {
    return n | ((value ? _1n : _0n) << BigInt(pos));
};
/**
 * Calculate mask for N bits. Not using ** operator with bigints because of old engines.
 * Same as BigInt(`0b${Array(i).fill('1').join('')}`)
 */
const bitMask = (n) => (_2n << BigInt(n - 1)) - _1n;
// DRBG
const u8n = (data) => new Uint8Array(data); // creates Uint8Array
const u8fr = (arr) => Uint8Array.from(arr); // another shortcut
/**
 * Minimal HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
 * @returns function that will call DRBG until 2nd arg returns something meaningful
 * @example
 *   const drbg = createHmacDRBG<Key>(32, 32, hmac);
 *   drbg(seed, bytesToKey); // bytesToKey must return Key or undefined
 */
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
    if (typeof hashLen !== 'number' || hashLen < 2)
        throw new Error('hashLen must be a number');
    if (typeof qByteLen !== 'number' || qByteLen < 2)
        throw new Error('qByteLen must be a number');
    if (typeof hmacFn !== 'function')
        throw new Error('hmacFn must be a function');
    // Step B, Step C: set hashLen to 8*ceil(hlen/8)
    let v = u8n(hashLen); // Minimal non-full-spec HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
    let k = u8n(hashLen); // Steps B and C of RFC6979 3.2: set hashLen, in our case always same
    let i = 0; // Iterations counter, will throw when over 1000
    const reset = () => {
        v.fill(1);
        k.fill(0);
        i = 0;
    };
    const h = (...b) => hmacFn(k, v, ...b); // hmac(k)(v, ...values)
    const reseed = (seed = u8n()) => {
        // HMAC-DRBG reseed() function. Steps D-G
        k = h(u8fr([0x00]), seed); // k = hmac(k || v || 0x00 || seed)
        v = h(); // v = hmac(k || v)
        if (seed.length === 0)
            return;
        k = h(u8fr([0x01]), seed); // k = hmac(k || v || 0x01 || seed)
        v = h(); // v = hmac(k || v)
    };
    const gen = () => {
        // HMAC-DRBG generate() function
        if (i++ >= 1000)
            throw new Error('drbg: tried 1000 values');
        let len = 0;
        const out = [];
        while (len < qByteLen) {
            v = h();
            const sl = v.slice();
            out.push(sl);
            len += v.length;
        }
        return concatBytes(...out);
    };
    const genUntil = (seed, pred) => {
        reset();
        reseed(seed); // Steps D-G
        let res = undefined; // Step H: grind until k is in [1..n-1]
        while (!(res = pred(gen())))
            reseed();
        reset();
        return res;
    };
    return genUntil;
}
// Validating curves and fields
const validatorFns = {
    bigint: (val) => typeof val === 'bigint',
    function: (val) => typeof val === 'function',
    boolean: (val) => typeof val === 'boolean',
    string: (val) => typeof val === 'string',
    stringOrUint8Array: (val) => typeof val === 'string' || val instanceof Uint8Array,
    isSafeInteger: (val) => Number.isSafeInteger(val),
    array: (val) => Array.isArray(val),
    field: (val, object) => object.Fp.isValid(val),
    hash: (val) => typeof val === 'function' && Number.isSafeInteger(val.outputLen),
};
// type Record<K extends string | number | symbol, T> = { [P in K]: T; }
function validateObject(object, validators, optValidators = {}) {
    const checkField = (fieldName, type, isOptional) => {
        const checkVal = validatorFns[type];
        if (typeof checkVal !== 'function')
            throw new Error(`Invalid validator "${type}", expected function`);
        const val = object[fieldName];
        if (isOptional && val === undefined)
            return;
        if (!checkVal(val, object)) {
            throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type}`);
        }
    };
    for (const [fieldName, type] of Object.entries(validators))
        checkField(fieldName, type, false);
    for (const [fieldName, type] of Object.entries(optValidators))
        checkField(fieldName, type, true);
    return object;
}
// validate type tests
// const o: { a: number; b: number; c: number } = { a: 1, b: 5, c: 6 };
// const z0 = validateObject(o, { a: 'isSafeInteger' }, { c: 'bigint' }); // Ok!
// // Should fail type-check
// const z1 = validateObject(o, { a: 'tmp' }, { c: 'zz' });
// const z2 = validateObject(o, { a: 'isSafeInteger' }, { c: 'zz' });
// const z3 = validateObject(o, { test: 'boolean', z: 'bug' });
// const z4 = validateObject(o, { a: 'boolean', z: 'bug' });
//# sourceMappingURL=utils.js.map

/***/ }),
/* 140 */
/*!******************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/verifyTypedData.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   verifyTypedData: () => (/* binding */ verifyTypedData)
/* harmony export */ });
/* harmony import */ var _utils_signature_hashTypedData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/signature/hashTypedData.js */ 141);
/* harmony import */ var _verifyHash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifyHash.js */ 135);


/**
 * Verify that typed data was signed by the provided address.
 *
 * - Docs {@link https://viem.sh/docs/actions/public/verifyTypedData.html}
 *
 * @param client - Client to use.
 * @param parameters - {@link VerifyTypedDataParameters}
 * @returns Whether or not the signature is valid. {@link VerifyTypedDataReturnType}
 */
async function verifyTypedData(client, { address, signature, message, primaryType, types, domain, ...callRequest }) {
    const hash = (0,_utils_signature_hashTypedData_js__WEBPACK_IMPORTED_MODULE_0__.hashTypedData)({ message, primaryType, types, domain });
    return (0,_verifyHash_js__WEBPACK_IMPORTED_MODULE_1__.verifyHash)(client, {
        address,
        hash,
        signature,
        ...callRequest,
    });
}
//# sourceMappingURL=verifyTypedData.js.map

/***/ }),
/* 141 */
/*!*****************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/signature/hashTypedData.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hashDomain: () => (/* binding */ hashDomain),
/* harmony export */   hashTypedData: () => (/* binding */ hashTypedData)
/* harmony export */ });
/* harmony import */ var _abi_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abi/encodeAbiParameters.js */ 36);
/* harmony import */ var _data_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/concat.js */ 37);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../encoding/toHex.js */ 32);
/* harmony import */ var _hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hash/keccak256.js */ 21);
/* harmony import */ var _typedData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typedData.js */ 142);
// Implementation forked and adapted from https://github.com/MetaMask/eth-sig-util/blob/main/src/sign-typed-data.ts





function hashTypedData({ domain: domain_, message, primaryType, types: types_, }) {
    const domain = typeof domain_ === 'undefined' ? {} : domain_;
    const types = {
        EIP712Domain: (0,_typedData_js__WEBPACK_IMPORTED_MODULE_0__.getTypesForEIP712Domain)({ domain }),
        ...types_,
    };
    // Need to do a runtime validation check on addresses, byte ranges, integer ranges, etc
    // as we can't statically check this with TypeScript.
    (0,_typedData_js__WEBPACK_IMPORTED_MODULE_0__.validateTypedData)({
        domain,
        message,
        primaryType,
        types,
    });
    const parts = ['0x1901'];
    if (domain)
        parts.push(hashDomain({
            domain,
            types: types,
        }));
    if (primaryType !== 'EIP712Domain') {
        parts.push(hashStruct({
            data: message,
            primaryType: primaryType,
            types: types,
        }));
    }
    return (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__.keccak256)((0,_data_concat_js__WEBPACK_IMPORTED_MODULE_2__.concat)(parts));
}
function hashDomain({ domain, types, }) {
    return hashStruct({
        data: domain,
        primaryType: 'EIP712Domain',
        types,
    });
}
function hashStruct({ data, primaryType, types, }) {
    const encoded = encodeData({
        data,
        primaryType,
        types,
    });
    return (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__.keccak256)(encoded);
}
function encodeData({ data, primaryType, types, }) {
    const encodedTypes = [{ type: 'bytes32' }];
    const encodedValues = [hashType({ primaryType, types })];
    for (const field of types[primaryType]) {
        const [type, value] = encodeField({
            types,
            name: field.name,
            type: field.type,
            value: data[field.name],
        });
        encodedTypes.push(type);
        encodedValues.push(value);
    }
    return (0,_abi_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_3__.encodeAbiParameters)(encodedTypes, encodedValues);
}
function hashType({ primaryType, types, }) {
    const encodedHashType = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_4__.toHex)(encodeType({ primaryType, types }));
    return (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__.keccak256)(encodedHashType);
}
function encodeType({ primaryType, types, }) {
    let result = '';
    const unsortedDeps = findTypeDependencies({ primaryType, types });
    unsortedDeps.delete(primaryType);
    const deps = [primaryType, ...Array.from(unsortedDeps).sort()];
    for (const type of deps) {
        result += `${type}(${types[type]
            .map(({ name, type: t }) => `${t} ${name}`)
            .join(',')})`;
    }
    return result;
}
function findTypeDependencies({ primaryType: primaryType_, types, }, results = new Set()) {
    const match = primaryType_.match(/^\w*/u);
    const primaryType = match?.[0];
    if (results.has(primaryType) || types[primaryType] === undefined) {
        return results;
    }
    results.add(primaryType);
    for (const field of types[primaryType]) {
        findTypeDependencies({ primaryType: field.type, types }, results);
    }
    return results;
}
function encodeField({ types, name, type, value, }) {
    if (types[type] !== undefined) {
        return [
            { type: 'bytes32' },
            (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__.keccak256)(encodeData({ data: value, primaryType: type, types })),
        ];
    }
    if (type === 'bytes') {
        const prepend = value.length % 2 ? '0' : '';
        value = `0x${prepend + value.slice(2)}`;
        return [{ type: 'bytes32' }, (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__.keccak256)(value)];
    }
    if (type === 'string')
        return [{ type: 'bytes32' }, (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__.keccak256)((0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_4__.toHex)(value))];
    if (type.lastIndexOf(']') === type.length - 1) {
        const parsedType = type.slice(0, type.lastIndexOf('['));
        const typeValuePairs = value.map((item) => encodeField({
            name,
            type: parsedType,
            types,
            value: item,
        }));
        return [
            { type: 'bytes32' },
            (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__.keccak256)((0,_abi_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_3__.encodeAbiParameters)(typeValuePairs.map(([t]) => t), typeValuePairs.map(([, v]) => v))),
        ];
    }
    return [{ type }, value];
}
//# sourceMappingURL=hashTypedData.js.map

/***/ }),
/* 142 */
/*!***************************************************!*\
  !*** ./node_modules/viem/_esm/utils/typedData.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   domainSeparator: () => (/* binding */ domainSeparator),
/* harmony export */   getTypesForEIP712Domain: () => (/* binding */ getTypesForEIP712Domain),
/* harmony export */   validateTypedData: () => (/* binding */ validateTypedData)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../errors/abi.js */ 17);
/* harmony import */ var _errors_address_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors/address.js */ 39);
/* harmony import */ var _address_isAddress_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address/isAddress.js */ 38);
/* harmony import */ var _data_size_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/size.js */ 12);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encoding/toHex.js */ 32);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ 143);
/* harmony import */ var _signature_hashTypedData_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signature/hashTypedData.js */ 141);







function validateTypedData({ domain, message, primaryType, types: types_, }) {
    const types = types_;
    const validateData = (struct, value_) => {
        for (const param of struct) {
            const { name, type: type_ } = param;
            const type = type_;
            const value = value_[name];
            const integerMatch = type.match(_regex_js__WEBPACK_IMPORTED_MODULE_0__.integerRegex);
            if (integerMatch &&
                (typeof value === 'number' || typeof value === 'bigint')) {
                const [_type, base, size_] = integerMatch;
                // If number cannot be cast to a sized hex value, it is out of range
                // and will throw.
                (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__.numberToHex)(value, {
                    signed: base === 'int',
                    size: parseInt(size_) / 8,
                });
            }
            if (type === 'address' && typeof value === 'string' && !(0,_address_isAddress_js__WEBPACK_IMPORTED_MODULE_2__.isAddress)(value))
                throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_3__.InvalidAddressError({ address: value });
            const bytesMatch = type.match(_regex_js__WEBPACK_IMPORTED_MODULE_0__.bytesRegex);
            if (bytesMatch) {
                const [_type, size_] = bytesMatch;
                if (size_ && (0,_data_size_js__WEBPACK_IMPORTED_MODULE_4__.size)(value) !== parseInt(size_))
                    throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_5__.BytesSizeMismatchError({
                        expectedSize: parseInt(size_),
                        givenSize: (0,_data_size_js__WEBPACK_IMPORTED_MODULE_4__.size)(value),
                    });
            }
            const struct = types[type];
            if (struct)
                validateData(struct, value);
        }
    };
    // Validate domain types.
    if (types.EIP712Domain && domain)
        validateData(types.EIP712Domain, domain);
    if (primaryType !== 'EIP712Domain') {
        // Validate message types.
        const type = types[primaryType];
        validateData(type, message);
    }
}
function getTypesForEIP712Domain({ domain, }) {
    return [
        typeof domain?.name === 'string' && { name: 'name', type: 'string' },
        domain?.version && { name: 'version', type: 'string' },
        typeof domain?.chainId === 'number' && {
            name: 'chainId',
            type: 'uint256',
        },
        domain?.verifyingContract && {
            name: 'verifyingContract',
            type: 'address',
        },
        domain?.salt && { name: 'salt', type: 'bytes32' },
    ].filter(Boolean);
}
function domainSeparator({ domain }) {
    return (0,_signature_hashTypedData_js__WEBPACK_IMPORTED_MODULE_6__.hashDomain)({
        domain,
        types: {
            EIP712Domain: getTypesForEIP712Domain({ domain }),
        },
    });
}
//# sourceMappingURL=typedData.js.map

/***/ }),
/* 143 */
/*!***********************************************!*\
  !*** ./node_modules/viem/_esm/utils/regex.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayRegex: () => (/* binding */ arrayRegex),
/* harmony export */   bytesRegex: () => (/* binding */ bytesRegex),
/* harmony export */   integerRegex: () => (/* binding */ integerRegex)
/* harmony export */ });
const arrayRegex = /^(.*)\[([0-9]*)\]$/;
// `bytes<M>`: binary type of `M` bytes, `0 < M <= 32`
// https://regexr.com/6va55
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
// `(u)int<M>`: (un)signed integer type of `M` bits, `0 < M <= 256`, `M % 8 == 0`
// https://regexr.com/6v8hp
const integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
//# sourceMappingURL=regex.js.map

/***/ }),
/* 144 */
/*!******************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/uninstallFilter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uninstallFilter: () => (/* binding */ uninstallFilter)
/* harmony export */ });
/**
 * Destroys a [`Filter`](https://viem.sh/docs/glossary/types.html#filter).
 *
 * - Docs: https://viem.sh/docs/actions/public/uninstallFilter.html
 * - JSON-RPC Methods: [`eth_uninstallFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_uninstallFilter)
 *
 * Destroys a Filter that was created from one of the following Actions:
 * - [`createBlockFilter`](https://viem.sh/docs/actions/public/createBlockFilter.html)
 * - [`createEventFilter`](https://viem.sh/docs/actions/public/createEventFilter.html)
 * - [`createPendingTransactionFilter`](https://viem.sh/docs/actions/public/createPendingTransactionFilter.html)
 *
 * @param client - Client to use
 * @param parameters - {@link UninstallFilterParameters}
 * @returns A boolean indicating if the Filter was successfully uninstalled. {@link UninstallFilterReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createPendingTransactionFilter, uninstallFilter } from 'viem/public'
 *
 * const filter = await createPendingTransactionFilter(client)
 * const uninstalled = await uninstallFilter(client, { filter })
 * // true
 */
async function uninstallFilter(_client, { filter }) {
    return filter.request({
        method: 'eth_uninstallFilter',
        params: [filter.id],
    });
}
//# sourceMappingURL=uninstallFilter.js.map

/***/ }),
/* 145 */
/*!****************************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/waitForTransactionReceipt.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   waitForTransactionReceipt: () => (/* binding */ waitForTransactionReceipt)
/* harmony export */ });
/* harmony import */ var _errors_transaction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors/transaction.js */ 46);
/* harmony import */ var _utils_observe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/observe.js */ 146);
/* harmony import */ var _utils_promise_withRetry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/promise/withRetry.js */ 150);
/* harmony import */ var _utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/stringify.js */ 43);
/* harmony import */ var _getBlock_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getBlock.js */ 81);
/* harmony import */ var _getTransaction_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getTransaction.js */ 126);
/* harmony import */ var _getTransactionReceipt_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getTransactionReceipt.js */ 128);
/* harmony import */ var _watchBlockNumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./watchBlockNumber.js */ 147);








/**
 * Waits for the [Transaction](https://viem.sh/docs/glossary/terms.html#transaction) to be included on a [Block](https://viem.sh/docs/glossary/terms.html#block) (one confirmation), and then returns the [Transaction Receipt](https://viem.sh/docs/glossary/terms.html#transaction-receipt). If the Transaction reverts, then the action will throw an error.
 *
 * - Docs: https://viem.sh/docs/actions/public/waitForTransactionReceipt.html
 * - Example: https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/transactions/sending-transactions
 * - JSON-RPC Methods:
 *   - Polls [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionReceipt) on each block until it has been processed.
 *   - If a Transaction has been replaced:
 *     - Calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbynumber) and extracts the transactions
 *     - Checks if one of the Transactions is a replacement
 *     - If so, calls [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionReceipt).
 *
 * The `waitForTransactionReceipt` action additionally supports Replacement detection (e.g. sped up Transactions).
 *
 * Transactions can be replaced when a user modifies their transaction in their wallet (to speed up or cancel). Transactions are replaced when they are sent from the same nonce.
 *
 * There are 3 types of Transaction Replacement reasons:
 *
 * - `repriced`: The gas price has been modified (e.g. different `maxFeePerGas`)
 * - `cancelled`: The Transaction has been cancelled (e.g. `value === 0n`)
 * - `replaced`: The Transaction has been replaced (e.g. different `value` or `data`)
 *
 * @param client - Client to use
 * @param parameters - {@link WaitForTransactionReceiptParameters}
 * @returns The transaction receipt. {@link WaitForTransactionReceiptReturnType}
 *
 * @example
 * import { createPublicClient, waitForTransactionReceipt, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const transactionReceipt = await waitForTransactionReceipt(client, {
 *   hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
 * })
 */
async function waitForTransactionReceipt(client, { confirmations = 1, hash, onReplaced, pollingInterval = client.pollingInterval, timeout, }) {
    const observerId = (0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__.stringify)(['waitForTransactionReceipt', client.uid, hash]);
    let transaction;
    let replacedTransaction;
    let receipt;
    let retrying = false;
    return new Promise((resolve, reject) => {
        if (timeout)
            setTimeout(() => reject(new _errors_transaction_js__WEBPACK_IMPORTED_MODULE_1__.WaitForTransactionReceiptTimeoutError({ hash })), timeout);
        const _unobserve = (0,_utils_observe_js__WEBPACK_IMPORTED_MODULE_2__.observe)(observerId, { onReplaced, resolve, reject }, (emit) => {
            const _unwatch = (0,_watchBlockNumber_js__WEBPACK_IMPORTED_MODULE_3__.watchBlockNumber)(client, {
                emitMissed: true,
                emitOnBegin: true,
                poll: true,
                pollingInterval,
                async onBlockNumber(blockNumber_) {
                    if (retrying)
                        return;
                    let blockNumber = blockNumber_;
                    const done = (fn) => {
                        _unwatch();
                        fn();
                        _unobserve();
                    };
                    try {
                        // If we already have a valid receipt, let's check if we have enough
                        // confirmations. If we do, then we can resolve.
                        if (receipt) {
                            if (confirmations > 1 &&
                                (!receipt.blockNumber ||
                                    blockNumber - receipt.blockNumber + 1n < confirmations))
                                return;
                            done(() => emit.resolve(receipt));
                            return;
                        }
                        // Get the transaction to check if it's been replaced.
                        // We need to retry as some RPC Providers may be slow to sync
                        // up mined transactions.
                        if (!transaction) {
                            retrying = true;
                            await (0,_utils_promise_withRetry_js__WEBPACK_IMPORTED_MODULE_4__.withRetry)(async () => {
                                transaction = await (0,_getTransaction_js__WEBPACK_IMPORTED_MODULE_5__.getTransaction)(client, { hash });
                                if (transaction.blockNumber)
                                    blockNumber = transaction.blockNumber;
                            }, {
                                // exponential backoff
                                delay: ({ count }) => ~~(1 << count) * 200,
                                retryCount: 6,
                            });
                            retrying = false;
                        }
                        // Get the receipt to check if it's been processed.
                        receipt = await (0,_getTransactionReceipt_js__WEBPACK_IMPORTED_MODULE_6__.getTransactionReceipt)(client, { hash });
                        // Check if we have enough confirmations. If not, continue polling.
                        if (confirmations > 1 &&
                            (!receipt.blockNumber ||
                                blockNumber - receipt.blockNumber + 1n < confirmations))
                            return;
                        done(() => emit.resolve(receipt));
                    }
                    catch (err) {
                        // If the receipt is not found, the transaction will be pending.
                        // We need to check if it has potentially been replaced.
                        if (transaction &&
                            (err instanceof _errors_transaction_js__WEBPACK_IMPORTED_MODULE_1__.TransactionNotFoundError ||
                                err instanceof _errors_transaction_js__WEBPACK_IMPORTED_MODULE_1__.TransactionReceiptNotFoundError)) {
                            try {
                                replacedTransaction = transaction;
                                // Let's retrieve the transactions from the current block.
                                const block = await (0,_getBlock_js__WEBPACK_IMPORTED_MODULE_7__.getBlock)(client, {
                                    blockNumber,
                                    includeTransactions: true,
                                });
                                const replacementTransaction = block.transactions.find(({ from, nonce }) => from === replacedTransaction.from &&
                                    nonce === replacedTransaction.nonce);
                                // If we couldn't find a replacement transaction, continue polling.
                                if (!replacementTransaction)
                                    return;
                                // If we found a replacement transaction, return it's receipt.
                                receipt = await (0,_getTransactionReceipt_js__WEBPACK_IMPORTED_MODULE_6__.getTransactionReceipt)(client, {
                                    hash: replacementTransaction.hash,
                                });
                                // Check if we have enough confirmations. If not, continue polling.
                                if (confirmations > 1 &&
                                    (!receipt.blockNumber ||
                                        blockNumber - receipt.blockNumber + 1n < confirmations))
                                    return;
                                let reason = 'replaced';
                                if (replacementTransaction.to === replacedTransaction.to &&
                                    replacementTransaction.value === replacedTransaction.value) {
                                    reason = 'repriced';
                                }
                                else if (replacementTransaction.from === replacementTransaction.to &&
                                    replacementTransaction.value === 0n) {
                                    reason = 'cancelled';
                                }
                                done(() => {
                                    emit.onReplaced?.({
                                        reason,
                                        replacedTransaction: replacedTransaction,
                                        transaction: replacementTransaction,
                                        transactionReceipt: receipt,
                                    });
                                    emit.resolve(receipt);
                                });
                            }
                            catch (err_) {
                                done(() => emit.reject(err_));
                            }
                        }
                        else {
                            done(() => emit.reject(err));
                        }
                    }
                },
            });
        });
    });
}
//# sourceMappingURL=waitForTransactionReceipt.js.map

/***/ }),
/* 146 */
/*!*************************************************!*\
  !*** ./node_modules/viem/_esm/utils/observe.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanupCache: () => (/* binding */ cleanupCache),
/* harmony export */   listenersCache: () => (/* binding */ listenersCache),
/* harmony export */   observe: () => (/* binding */ observe)
/* harmony export */ });
const listenersCache = /*#__PURE__*/ new Map();
const cleanupCache = /*#__PURE__*/ new Map();
let callbackCount = 0;
/**
 * @description Sets up an observer for a given function. If another function
 * is set up under the same observer id, the function will only be called once
 * for both instances of the observer.
 */
function observe(observerId, callbacks, fn) {
    const callbackId = ++callbackCount;
    const getListeners = () => listenersCache.get(observerId) || [];
    const unsubscribe = () => {
        const listeners = getListeners();
        listenersCache.set(observerId, listeners.filter((cb) => cb.id !== callbackId));
    };
    const unwatch = () => {
        const cleanup = cleanupCache.get(observerId);
        if (getListeners().length === 1 && cleanup)
            cleanup();
        unsubscribe();
    };
    const listeners = getListeners();
    listenersCache.set(observerId, [
        ...listeners,
        { id: callbackId, fns: callbacks },
    ]);
    if (listeners && listeners.length > 0)
        return unwatch;
    const emit = {};
    for (const key in callbacks) {
        emit[key] = ((...args) => {
            const listeners = getListeners();
            if (listeners.length === 0)
                return;
            listeners.forEach((listener) => listener.fns[key]?.(...args));
        });
    }
    const cleanup = fn(emit);
    if (typeof cleanup === 'function')
        cleanupCache.set(observerId, cleanup);
    return unwatch;
}
//# sourceMappingURL=observe.js.map

/***/ }),
/* 147 */
/*!*******************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/watchBlockNumber.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   watchBlockNumber: () => (/* binding */ watchBlockNumber)
/* harmony export */ });
/* harmony import */ var _utils_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/encoding/fromHex.js */ 28);
/* harmony import */ var _utils_observe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/observe.js */ 146);
/* harmony import */ var _utils_poll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/poll.js */ 148);
/* harmony import */ var _utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/stringify.js */ 43);
/* harmony import */ var _getBlockNumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBlockNumber.js */ 95);





/**
 * Watches and returns incoming block numbers.
 *
 * - Docs: https://viem.sh/docs/actions/public/watchBlockNumber.html
 * - Examples: https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/blocks/watching-blocks
 * - JSON-RPC Methods:
 *   - When `poll: true`, calls [`eth_blockNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blocknumber) on a polling interval.
 *   - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newHeads"` event.
 *
 * @param client - Client to use
 * @param parameters - {@link WatchBlockNumberParameters}
 * @returns A function that can be invoked to stop watching for new block numbers. {@link WatchBlockNumberReturnType}
 *
 * @example
 * import { createPublicClient, watchBlockNumber, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const unwatch = watchBlockNumber(client, {
 *   onBlockNumber: (blockNumber) => console.log(blockNumber),
 * })
 */
function watchBlockNumber(client, { emitOnBegin = false, emitMissed = false, onBlockNumber, onError, poll: poll_, pollingInterval = client.pollingInterval, }) {
    const enablePolling = typeof poll_ !== 'undefined' ? poll_ : client.transport.type !== 'webSocket';
    let prevBlockNumber;
    const pollBlockNumber = () => {
        const observerId = (0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__.stringify)([
            'watchBlockNumber',
            client.uid,
            emitOnBegin,
            emitMissed,
            pollingInterval,
        ]);
        return (0,_utils_observe_js__WEBPACK_IMPORTED_MODULE_1__.observe)(observerId, { onBlockNumber, onError }, (emit) => (0,_utils_poll_js__WEBPACK_IMPORTED_MODULE_2__.poll)(async () => {
            try {
                const blockNumber = await (0,_getBlockNumber_js__WEBPACK_IMPORTED_MODULE_3__.getBlockNumber)(client, { cacheTime: 0 });
                if (prevBlockNumber) {
                    // If the current block number is the same as the previous,
                    // we can skip.
                    if (blockNumber === prevBlockNumber)
                        return;
                    // If we have missed out on some previous blocks, and the
                    // `emitMissed` flag is truthy, let's emit those blocks.
                    if (blockNumber - prevBlockNumber > 1 && emitMissed) {
                        for (let i = prevBlockNumber + 1n; i < blockNumber; i++) {
                            emit.onBlockNumber(i, prevBlockNumber);
                            prevBlockNumber = i;
                        }
                    }
                }
                // If the next block number is greater than the previous,
                // it is not in the past, and we can emit the new block number.
                if (!prevBlockNumber || blockNumber > prevBlockNumber) {
                    emit.onBlockNumber(blockNumber, prevBlockNumber);
                    prevBlockNumber = blockNumber;
                }
            }
            catch (err) {
                emit.onError?.(err);
            }
        }, {
            emitOnBegin,
            interval: pollingInterval,
        }));
    };
    const subscribeBlockNumber = () => {
        let active = true;
        let unsubscribe = () => (active = false);
        (async () => {
            try {
                const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
                    params: ['newHeads'],
                    onData(data) {
                        if (!active)
                            return;
                        const blockNumber = (0,_utils_encoding_fromHex_js__WEBPACK_IMPORTED_MODULE_4__.hexToBigInt)(data.result?.number);
                        onBlockNumber(blockNumber, prevBlockNumber);
                        prevBlockNumber = blockNumber;
                    },
                    onError(error) {
                        onError?.(error);
                    },
                });
                unsubscribe = unsubscribe_;
                if (!active)
                    unsubscribe();
            }
            catch (err) {
                onError?.(err);
            }
        })();
        return unsubscribe;
    };
    return enablePolling ? pollBlockNumber() : subscribeBlockNumber();
}
//# sourceMappingURL=watchBlockNumber.js.map

/***/ }),
/* 148 */
/*!**********************************************!*\
  !*** ./node_modules/viem/_esm/utils/poll.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   poll: () => (/* binding */ poll)
/* harmony export */ });
/* harmony import */ var _wait_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wait.js */ 149);

/**
 * @description Polls a function at a specified interval.
 */
function poll(fn, { emitOnBegin, initialWaitTime, interval }) {
    let active = true;
    const unwatch = () => (active = false);
    const watch = async () => {
        let data = undefined;
        if (emitOnBegin)
            data = await fn({ unpoll: unwatch });
        const initialWait = (await initialWaitTime?.(data)) ?? interval;
        await (0,_wait_js__WEBPACK_IMPORTED_MODULE_0__.wait)(initialWait);
        const poll = async () => {
            if (!active)
                return;
            await fn({ unpoll: unwatch });
            await (0,_wait_js__WEBPACK_IMPORTED_MODULE_0__.wait)(interval);
            poll();
        };
        poll();
    };
    watch();
    return unwatch;
}
//# sourceMappingURL=poll.js.map

/***/ }),
/* 149 */
/*!**********************************************!*\
  !*** ./node_modules/viem/_esm/utils/wait.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wait: () => (/* binding */ wait)
/* harmony export */ });
async function wait(time) {
    return new Promise((res) => setTimeout(res, time));
}
//# sourceMappingURL=wait.js.map

/***/ }),
/* 150 */
/*!***********************************************************!*\
  !*** ./node_modules/viem/_esm/utils/promise/withRetry.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withRetry: () => (/* binding */ withRetry)
/* harmony export */ });
/* harmony import */ var _wait_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wait.js */ 149);

function withRetry(fn, { delay: delay_ = 100, retryCount = 2, shouldRetry = () => true, } = {}) {
    return new Promise((resolve, reject) => {
        const attemptRetry = async ({ count = 0 } = {}) => {
            const retry = async ({ error }) => {
                const delay = typeof delay_ === 'function' ? delay_({ count, error }) : delay_;
                if (delay)
                    await (0,_wait_js__WEBPACK_IMPORTED_MODULE_0__.wait)(delay);
                attemptRetry({ count: count + 1 });
            };
            try {
                const data = await fn();
                resolve(data);
            }
            catch (err) {
                if (count < retryCount &&
                    (await shouldRetry({ count, error: err })))
                    return retry({ error: err });
                reject(err);
            }
        };
        attemptRetry();
    });
}
//# sourceMappingURL=withRetry.js.map

/***/ }),
/* 151 */
/*!**************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/watchBlocks.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   watchBlocks: () => (/* binding */ watchBlocks)
/* harmony export */ });
/* harmony import */ var _utils_formatters_block_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/formatters/block.js */ 83);
/* harmony import */ var _utils_observe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/observe.js */ 146);
/* harmony import */ var _utils_poll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/poll.js */ 148);
/* harmony import */ var _utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/stringify.js */ 43);
/* harmony import */ var _getBlock_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBlock.js */ 81);





/**
 * Watches and returns information for incoming blocks.
 *
 * - Docs: https://viem.sh/docs/actions/public/watchBlocks.html
 * - Examples: https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/blocks/watching-blocks
 * - JSON-RPC Methods:
 *   - When `poll: true`, calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getBlockByNumber) on a polling interval.
 *   - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newHeads"` event.
 *
 * @param client - Client to use
 * @param parameters - {@link WatchBlocksParameters}
 * @returns A function that can be invoked to stop watching for new block numbers. {@link WatchBlocksReturnType}
 *
 * @example
 * import { createPublicClient, watchBlocks, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const unwatch = watchBlocks(client, {
 *   onBlock: (block) => console.log(block),
 * })
 */
function watchBlocks(client, { blockTag = 'latest', emitMissed = false, emitOnBegin = false, onBlock, onError, includeTransactions: includeTransactions_, poll: poll_, pollingInterval = client.pollingInterval, }) {
    const enablePolling = typeof poll_ !== 'undefined' ? poll_ : client.transport.type !== 'webSocket';
    const includeTransactions = includeTransactions_ ?? false;
    let prevBlock;
    const pollBlocks = () => {
        const observerId = (0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__.stringify)([
            'watchBlocks',
            client.uid,
            emitMissed,
            emitOnBegin,
            includeTransactions,
            pollingInterval,
        ]);
        return (0,_utils_observe_js__WEBPACK_IMPORTED_MODULE_1__.observe)(observerId, { onBlock, onError }, (emit) => (0,_utils_poll_js__WEBPACK_IMPORTED_MODULE_2__.poll)(async () => {
            try {
                const block = await (0,_getBlock_js__WEBPACK_IMPORTED_MODULE_3__.getBlock)(client, {
                    blockTag,
                    includeTransactions,
                });
                if (block.number && prevBlock?.number) {
                    // If the current block number is the same as the previous,
                    // we can skip.
                    if (block.number === prevBlock.number)
                        return;
                    // If we have missed out on some previous blocks, and the
                    // `emitMissed` flag is truthy, let's emit those blocks.
                    if (block.number - prevBlock.number > 1 && emitMissed) {
                        for (let i = prevBlock?.number + 1n; i < block.number; i++) {
                            const block = await (0,_getBlock_js__WEBPACK_IMPORTED_MODULE_3__.getBlock)(client, {
                                blockNumber: i,
                                includeTransactions,
                            });
                            emit.onBlock(block, prevBlock);
                            prevBlock = block;
                        }
                    }
                }
                if (
                // If no previous block exists, emit.
                !prevBlock?.number ||
                    // If the block tag is "pending" with no block number, emit.
                    (blockTag === 'pending' && !block?.number) ||
                    // If the next block number is greater than the previous block number, emit.
                    // We don't want to emit blocks in the past.
                    (block.number && block.number > prevBlock.number)) {
                    emit.onBlock(block, prevBlock);
                    prevBlock = block;
                }
            }
            catch (err) {
                emit.onError?.(err);
            }
        }, {
            emitOnBegin,
            interval: pollingInterval,
        }));
    };
    const subscribeBlocks = () => {
        let active = true;
        let unsubscribe = () => (active = false);
        (async () => {
            try {
                const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
                    params: ['newHeads'],
                    onData(data) {
                        if (!active)
                            return;
                        const format = client.chain?.formatters?.block?.format || _utils_formatters_block_js__WEBPACK_IMPORTED_MODULE_4__.formatBlock;
                        const block = format(data.result);
                        onBlock(block, prevBlock);
                        prevBlock = block;
                    },
                    onError(error) {
                        onError?.(error);
                    },
                });
                unsubscribe = unsubscribe_;
                if (!active)
                    unsubscribe();
            }
            catch (err) {
                onError?.(err);
            }
        })();
        return unsubscribe;
    };
    return enablePolling ? pollBlocks() : subscribeBlocks();
}
//# sourceMappingURL=watchBlocks.js.map

/***/ }),
/* 152 */
/*!*********************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/watchContractEvent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   watchContractEvent: () => (/* binding */ watchContractEvent)
/* harmony export */ });
/* harmony import */ var _utils_observe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/observe.js */ 146);
/* harmony import */ var _utils_poll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/poll.js */ 148);
/* harmony import */ var _utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/stringify.js */ 43);
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../errors/abi.js */ 17);
/* harmony import */ var _errors_rpc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../errors/rpc.js */ 58);
/* harmony import */ var _utils_abi_decodeEventLog_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/abi/decodeEventLog.js */ 102);
/* harmony import */ var _utils_abi_encodeEventTopics_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/abi/encodeEventTopics.js */ 73);
/* harmony import */ var _utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/formatters/log.js */ 103);
/* harmony import */ var _createContractEventFilter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createContractEventFilter.js */ 72);
/* harmony import */ var _getBlockNumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getBlockNumber.js */ 95);
/* harmony import */ var _getContractEvents_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getContractEvents.js */ 100);
/* harmony import */ var _getFilterChanges_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getFilterChanges.js */ 121);
/* harmony import */ var _uninstallFilter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./uninstallFilter.js */ 144);













/**
 * Watches and returns emitted contract event logs.
 *
 * - Docs: https://viem.sh/docs/contract/watchContractEvent.html
 *
 * This Action will batch up all the event logs found within the [`pollingInterval`](https://viem.sh/docs/contract/watchContractEvent.html#pollinginterval-optional), and invoke them via [`onLogs`](https://viem.sh/docs/contract/watchContractEvent.html#onLogs).
 *
 * `watchContractEvent` will attempt to create an [Event Filter](https://viem.sh/docs/contract/createContractEventFilter.html) and listen to changes to the Filter per polling interval, however, if the RPC Provider does not support Filters (e.g. `eth_newFilter`), then `watchContractEvent` will fall back to using [`getLogs`](https://viem.sh/docs/actions/public/getLogs) instead.
 *
 * @param client - Client to use
 * @param parameters - {@link WatchContractEventParameters}
 * @returns A function that can be invoked to stop watching for new event logs. {@link WatchContractEventReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbi } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { watchContractEvent } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const unwatch = watchContractEvent(client, {
 *   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *   abi: parseAbi(['event Transfer(address indexed from, address indexed to, uint256 value)']),
 *   eventName: 'Transfer',
 *   args: { from: '0xc961145a54C96E3aE9bAA048c4F4D6b04C13916b' },
 *   onLogs: (logs) => console.log(logs),
 * })
 */
function watchContractEvent(client, { abi, address, args, batch = true, eventName, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_, }) {
    const enablePolling = typeof poll_ !== 'undefined' ? poll_ : client.transport.type !== 'webSocket';
    const pollContractEvent = () => {
        const observerId = (0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__.stringify)([
            'watchContractEvent',
            address,
            args,
            batch,
            client.uid,
            eventName,
            pollingInterval,
        ]);
        const strict = strict_ ?? false;
        return (0,_utils_observe_js__WEBPACK_IMPORTED_MODULE_1__.observe)(observerId, { onLogs, onError }, (emit) => {
            let previousBlockNumber;
            let filter;
            let initialized = false;
            const unwatch = (0,_utils_poll_js__WEBPACK_IMPORTED_MODULE_2__.poll)(async () => {
                if (!initialized) {
                    try {
                        filter = (await (0,_createContractEventFilter_js__WEBPACK_IMPORTED_MODULE_3__.createContractEventFilter)(client, {
                            abi,
                            address,
                            args,
                            eventName,
                            strict,
                        }));
                    }
                    catch { }
                    initialized = true;
                    return;
                }
                try {
                    let logs;
                    if (filter) {
                        logs = await (0,_getFilterChanges_js__WEBPACK_IMPORTED_MODULE_4__.getFilterChanges)(client, { filter });
                    }
                    else {
                        // If the filter doesn't exist, we will fall back to use `getLogs`.
                        // The fall back exists because some RPC Providers do not support filters.
                        // Fetch the block number to use for `getLogs`.
                        const blockNumber = await (0,_getBlockNumber_js__WEBPACK_IMPORTED_MODULE_5__.getBlockNumber)(client);
                        // If the block number has changed, we will need to fetch the logs.
                        // If the block number doesn't exist, we are yet to reach the first poll interval,
                        // so do not emit any logs.
                        if (previousBlockNumber && previousBlockNumber !== blockNumber) {
                            logs = await (0,_getContractEvents_js__WEBPACK_IMPORTED_MODULE_6__.getContractEvents)(client, {
                                abi,
                                address,
                                args,
                                fromBlock: previousBlockNumber + 1n,
                                toBlock: blockNumber,
                                strict,
                            });
                        }
                        else {
                            logs = [];
                        }
                        previousBlockNumber = blockNumber;
                    }
                    if (logs.length === 0)
                        return;
                    if (batch)
                        emit.onLogs(logs);
                    else
                        logs.forEach((log) => emit.onLogs([log]));
                }
                catch (err) {
                    // If a filter has been set and gets uninstalled, providers will throw an InvalidInput error.
                    // Reinitalize the filter when this occurs
                    if (filter && err instanceof _errors_rpc_js__WEBPACK_IMPORTED_MODULE_7__.InvalidInputRpcError)
                        initialized = false;
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval,
            });
            return async () => {
                if (filter)
                    await (0,_uninstallFilter_js__WEBPACK_IMPORTED_MODULE_8__.uninstallFilter)(client, { filter });
                unwatch();
            };
        });
    };
    const subscribeContractEvent = () => {
        let active = true;
        let unsubscribe = () => (active = false);
        (async () => {
            try {
                const topics = eventName
                    ? (0,_utils_abi_encodeEventTopics_js__WEBPACK_IMPORTED_MODULE_9__.encodeEventTopics)({
                        abi: abi,
                        eventName: eventName,
                        args,
                    })
                    : [];
                const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
                    params: ['logs', { address, topics }],
                    onData(data) {
                        if (!active)
                            return;
                        const log = data.result;
                        try {
                            const { eventName, args } = (0,_utils_abi_decodeEventLog_js__WEBPACK_IMPORTED_MODULE_10__.decodeEventLog)({
                                abi: abi,
                                data: log.data,
                                topics: log.topics,
                                strict: strict_,
                            });
                            const formatted = (0,_utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_11__.formatLog)(log, {
                                args,
                                eventName: eventName,
                            });
                            onLogs([formatted]);
                        }
                        catch (err) {
                            let eventName;
                            let isUnnamed;
                            if (err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_12__.DecodeLogDataMismatch ||
                                err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_12__.DecodeLogTopicsMismatch) {
                                // If strict mode is on, and log data/topics do not match event definition, skip.
                                if (strict_)
                                    return;
                                eventName = err.abiItem.name;
                                isUnnamed = err.abiItem.inputs?.some((x) => !('name' in x && x.name));
                            }
                            // Set args to empty if there is an error decoding (e.g. indexed/non-indexed params mismatch).
                            const formatted = (0,_utils_formatters_log_js__WEBPACK_IMPORTED_MODULE_11__.formatLog)(log, {
                                args: isUnnamed ? [] : {},
                                eventName,
                            });
                            onLogs([formatted]);
                        }
                    },
                    onError(error) {
                        onError?.(error);
                    },
                });
                unsubscribe = unsubscribe_;
                if (!active)
                    unsubscribe();
            }
            catch (err) {
                onError?.(err);
            }
        })();
        return unsubscribe;
    };
    return enablePolling ? pollContractEvent() : subscribeContractEvent();
}
//# sourceMappingURL=watchContractEvent.js.map

/***/ }),
/* 153 */
/*!*************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/watchEvent.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   watchEvent: () => (/* binding */ watchEvent)
/* harmony export */ });
/* harmony import */ var _utils_observe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/observe.js */ 146);
/* harmony import */ var _utils_poll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/poll.js */ 148);
/* harmony import */ var _utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/stringify.js */ 43);
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../errors/abi.js */ 17);
/* harmony import */ var _errors_rpc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../errors/rpc.js */ 58);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/index.js */ 73);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/index.js */ 102);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/index.js */ 103);
/* harmony import */ var _createEventFilter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createEventFilter.js */ 75);
/* harmony import */ var _getBlockNumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getBlockNumber.js */ 95);
/* harmony import */ var _getFilterChanges_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getFilterChanges.js */ 121);
/* harmony import */ var _getLogs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getLogs.js */ 101);
/* harmony import */ var _uninstallFilter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./uninstallFilter.js */ 144);











/**
 * Watches and returns emitted [Event Logs](https://viem.sh/docs/glossary/terms.html#event-log).
 *
 * - Docs: https://viem.sh/docs/actions/public/watchEvent.html
 * - JSON-RPC Methods:
 *   - **RPC Provider supports `eth_newFilter`:**
 *     - Calls [`eth_newFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter) to create a filter (called on initialize).
 *     - On a polling interval, it will call [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges).
 *   - **RPC Provider does not support `eth_newFilter`:**
 *     - Calls [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs) for each block between the polling interval.
 *
 * This Action will batch up all the Event Logs found within the [`pollingInterval`](https://viem.sh/docs/actions/public/watchEvent.html#pollinginterval-optional), and invoke them via [`onLogs`](https://viem.sh/docs/actions/public/watchEvent.html#onLogs).
 *
 * `watchEvent` will attempt to create an [Event Filter](https://viem.sh/docs/actions/public/createEventFilter.html) and listen to changes to the Filter per polling interval, however, if the RPC Provider does not support Filters (e.g. `eth_newFilter`), then `watchEvent` will fall back to using [`getLogs`](https://viem.sh/docs/actions/public/getLogs.html) instead.
 *
 * @param client - Client to use
 * @param parameters - {@link WatchEventParameters}
 * @returns A function that can be invoked to stop watching for new Event Logs. {@link WatchEventReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { watchEvent } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const unwatch = watchEvent(client, {
 *   onLogs: (logs) => console.log(logs),
 * })
 */
function watchEvent(client, { address, args, batch = true, event, events, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_, }) {
    const enablePolling = typeof poll_ !== 'undefined' ? poll_ : client.transport.type !== 'webSocket';
    const strict = strict_ ?? false;
    const pollEvent = () => {
        const observerId = (0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__.stringify)([
            'watchEvent',
            address,
            args,
            batch,
            client.uid,
            event,
            pollingInterval,
        ]);
        return (0,_utils_observe_js__WEBPACK_IMPORTED_MODULE_1__.observe)(observerId, { onLogs, onError }, (emit) => {
            let previousBlockNumber;
            let filter;
            let initialized = false;
            const unwatch = (0,_utils_poll_js__WEBPACK_IMPORTED_MODULE_2__.poll)(async () => {
                if (!initialized) {
                    try {
                        filter = (await (0,_createEventFilter_js__WEBPACK_IMPORTED_MODULE_3__.createEventFilter)(client, {
                            address,
                            args,
                            event: event,
                            events,
                            strict,
                        }));
                    }
                    catch { }
                    initialized = true;
                    return;
                }
                try {
                    let logs;
                    if (filter) {
                        logs = await (0,_getFilterChanges_js__WEBPACK_IMPORTED_MODULE_4__.getFilterChanges)(client, { filter });
                    }
                    else {
                        // If the filter doesn't exist, we will fall back to use `getLogs`.
                        // The fall back exists because some RPC Providers do not support filters.
                        // Fetch the block number to use for `getLogs`.
                        const blockNumber = await (0,_getBlockNumber_js__WEBPACK_IMPORTED_MODULE_5__.getBlockNumber)(client);
                        // If the block number has changed, we will need to fetch the logs.
                        // If the block number doesn't exist, we are yet to reach the first poll interval,
                        // so do not emit any logs.
                        if (previousBlockNumber && previousBlockNumber !== blockNumber) {
                            logs = await (0,_getLogs_js__WEBPACK_IMPORTED_MODULE_6__.getLogs)(client, {
                                address,
                                args,
                                event: event,
                                events,
                                fromBlock: previousBlockNumber + 1n,
                                toBlock: blockNumber,
                            });
                        }
                        else {
                            logs = [];
                        }
                        previousBlockNumber = blockNumber;
                    }
                    if (logs.length === 0)
                        return;
                    if (batch)
                        emit.onLogs(logs);
                    else
                        logs.forEach((log) => emit.onLogs([log]));
                }
                catch (err) {
                    // If a filter has been set and gets uninstalled, providers will throw an InvalidInput error.
                    // Reinitalize the filter when this occurs
                    if (filter && err instanceof _errors_rpc_js__WEBPACK_IMPORTED_MODULE_7__.InvalidInputRpcError)
                        initialized = false;
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval,
            });
            return async () => {
                if (filter)
                    await (0,_uninstallFilter_js__WEBPACK_IMPORTED_MODULE_8__.uninstallFilter)(client, { filter });
                unwatch();
            };
        });
    };
    const subscribeEvent = () => {
        let active = true;
        let unsubscribe = () => (active = false);
        (async () => {
            try {
                const events_ = events ?? (event ? [event] : undefined);
                let topics = [];
                if (events_) {
                    topics = [
                        events_.flatMap((event) => (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_9__.encodeEventTopics)({
                            abi: [event],
                            eventName: event.name,
                            args,
                        })),
                    ];
                    if (event)
                        topics = topics[0];
                }
                const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
                    params: ['logs', { address, topics }],
                    onData(data) {
                        if (!active)
                            return;
                        const log = data.result;
                        try {
                            const { eventName, args } = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_10__.decodeEventLog)({
                                abi: events_,
                                data: log.data,
                                topics: log.topics,
                                strict,
                            });
                            const formatted = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_11__.formatLog)(log, {
                                args,
                                eventName: eventName,
                            });
                            onLogs([formatted]);
                        }
                        catch (err) {
                            let eventName;
                            let isUnnamed;
                            if (err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_12__.DecodeLogDataMismatch ||
                                err instanceof _errors_abi_js__WEBPACK_IMPORTED_MODULE_12__.DecodeLogTopicsMismatch) {
                                // If strict mode is on, and log data/topics do not match event definition, skip.
                                if (strict_)
                                    return;
                                eventName = err.abiItem.name;
                                isUnnamed = err.abiItem.inputs?.some((x) => !('name' in x && x.name));
                            }
                            // Set args to empty if there is an error decoding (e.g. indexed/non-indexed params mismatch).
                            const formatted = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_11__.formatLog)(log, {
                                args: isUnnamed ? [] : {},
                                eventName,
                            });
                            onLogs([formatted]);
                        }
                    },
                    onError(error) {
                        onError?.(error);
                    },
                });
                unsubscribe = unsubscribe_;
                if (!active)
                    unsubscribe();
            }
            catch (err) {
                onError?.(err);
            }
        })();
        return unsubscribe;
    };
    return enablePolling ? pollEvent() : subscribeEvent();
}
//# sourceMappingURL=watchEvent.js.map

/***/ }),
/* 154 */
/*!***************************************************************************!*\
  !*** ./node_modules/viem/_esm/actions/public/watchPendingTransactions.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   watchPendingTransactions: () => (/* binding */ watchPendingTransactions)
/* harmony export */ });
/* harmony import */ var _utils_observe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/observe.js */ 146);
/* harmony import */ var _utils_poll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/poll.js */ 148);
/* harmony import */ var _utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/stringify.js */ 43);
/* harmony import */ var _createPendingTransactionFilter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPendingTransactionFilter.js */ 76);
/* harmony import */ var _getFilterChanges_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getFilterChanges.js */ 121);
/* harmony import */ var _uninstallFilter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uninstallFilter.js */ 144);






/**
 * Watches and returns pending transaction hashes.
 *
 * - Docs: https://viem.sh/docs/actions/public/watchPendingTransactions.html
 * - JSON-RPC Methods:
 *   - When `poll: true`
 *     - Calls [`eth_newPendingTransactionFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newpendingtransactionfilter) to initialize the filter.
 *     - Calls [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getFilterChanges) on a polling interval.
 *   - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newPendingTransactions"` event.
 *
 * This Action will batch up all the pending transactions found within the [`pollingInterval`](https://viem.sh/docs/actions/public/watchPendingTransactions.html#pollinginterval-optional), and invoke them via [`onTransactions`](https://viem.sh/docs/actions/public/watchPendingTransactions.html#ontransactions).
 *
 * @param client - Client to use
 * @param parameters - {@link WatchPendingTransactionsParameters}
 * @returns A function that can be invoked to stop watching for new pending transaction hashes. {@link WatchPendingTransactionsReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { watchPendingTransactions } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const unwatch = await watchPendingTransactions(client, {
 *   onTransactions: (hashes) => console.log(hashes),
 * })
 */
function watchPendingTransactions(client, { batch = true, onError, onTransactions, poll: poll_, pollingInterval = client.pollingInterval, }) {
    const enablePolling = typeof poll_ !== 'undefined' ? poll_ : client.transport.type !== 'webSocket';
    const pollPendingTransactions = () => {
        const observerId = (0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_0__.stringify)([
            'watchPendingTransactions',
            client.uid,
            batch,
            pollingInterval,
        ]);
        return (0,_utils_observe_js__WEBPACK_IMPORTED_MODULE_1__.observe)(observerId, { onTransactions, onError }, (emit) => {
            let filter;
            const unwatch = (0,_utils_poll_js__WEBPACK_IMPORTED_MODULE_2__.poll)(async () => {
                try {
                    if (!filter) {
                        try {
                            filter = await (0,_createPendingTransactionFilter_js__WEBPACK_IMPORTED_MODULE_3__.createPendingTransactionFilter)(client);
                            return;
                        }
                        catch (err) {
                            unwatch();
                            throw err;
                        }
                    }
                    const hashes = await (0,_getFilterChanges_js__WEBPACK_IMPORTED_MODULE_4__.getFilterChanges)(client, { filter });
                    if (hashes.length === 0)
                        return;
                    if (batch)
                        emit.onTransactions(hashes);
                    else
                        hashes.forEach((hash) => emit.onTransactions([hash]));
                }
                catch (err) {
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval,
            });
            return async () => {
                if (filter)
                    await (0,_uninstallFilter_js__WEBPACK_IMPORTED_MODULE_5__.uninstallFilter)(client, { filter });
                unwatch();
            };
        });
    };
    const subscribePendingTransactions = () => {
        let active = true;
        let unsubscribe = () => (active = false);
        (async () => {
            try {
                const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
                    params: ['newPendingTransactions'],
                    onData(data) {
                        if (!active)
                            return;
                        const transaction = data.result;
                        onTransactions([transaction]);
                    },
                    onError(error) {
                        onError?.(error);
                    },
                });
                unsubscribe = unsubscribe_;
                if (!active)
                    unsubscribe();
            }
            catch (err) {
                onError?.(err);
            }
        })();
        return unsubscribe;
    };
    return enablePolling
        ? pollPendingTransactions()
        : subscribePendingTransactions();
}
//# sourceMappingURL=watchPendingTransactions.js.map

/***/ }),
/* 155 */
/*!**************************************************************!*\
  !*** ./node_modules/viem/_esm/chains/definitions/mainnet.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainnet: () => (/* binding */ mainnet)
/* harmony export */ });
/* harmony import */ var _utils_chain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/chain.js */ 65);

const mainnet = /*#__PURE__*/ (0,_utils_chain_js__WEBPACK_IMPORTED_MODULE_0__.defineChain)({
    id: 1,
    network: 'homestead',
    name: 'Ethereum',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        alchemy: {
            http: ['https://eth-mainnet.g.alchemy.com/v2'],
            webSocket: ['wss://eth-mainnet.g.alchemy.com/v2'],
        },
        infura: {
            http: ['https://mainnet.infura.io/v3'],
            webSocket: ['wss://mainnet.infura.io/ws/v3'],
        },
        default: {
            http: ['https://cloudflare-eth.com'],
        },
        public: {
            http: ['https://cloudflare-eth.com'],
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'Etherscan',
            url: 'https://etherscan.io',
        },
        default: {
            name: 'Etherscan',
            url: 'https://etherscan.io',
        },
    },
    contracts: {
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        },
        ensUniversalResolver: {
            address: '0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62',
            blockCreated: 16966585,
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14353601,
        },
    },
});
//# sourceMappingURL=mainnet.js.map

/***/ }),
/* 156 */
/*!***********************************************************!*\
  !*** ./node_modules/viem/_esm/clients/transports/http.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   http: () => (/* binding */ http)
/* harmony export */ });
/* harmony import */ var _errors_request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../errors/request.js */ 44);
/* harmony import */ var _errors_transport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors/transport.js */ 157);
/* harmony import */ var _utils_promise_createBatchScheduler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/promise/createBatchScheduler.js */ 66);
/* harmony import */ var _utils_rpc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/rpc.js */ 160);
/* harmony import */ var _createTransport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTransport.js */ 158);





/**
 * @description Creates a HTTP transport that connects to a JSON-RPC API.
 */
function http(
/** URL of the JSON-RPC API. Defaults to the chain's public RPC URL. */
url, config = {}) {
    const { batch, fetchOptions, key = 'http', name = 'HTTP JSON-RPC', retryDelay, } = config;
    return ({ chain, retryCount: retryCount_, timeout: timeout_ }) => {
        const { batchSize = 1000, wait = 0 } = typeof batch === 'object' ? batch : {};
        const retryCount = config.retryCount ?? retryCount_;
        const timeout = timeout_ ?? config.timeout ?? 10000;
        const url_ = url || chain?.rpcUrls.default.http[0];
        if (!url_)
            throw new _errors_transport_js__WEBPACK_IMPORTED_MODULE_0__.UrlRequiredError();
        return (0,_createTransport_js__WEBPACK_IMPORTED_MODULE_1__.createTransport)({
            key,
            name,
            async request({ method, params }) {
                const body = { method, params };
                const { schedule } = (0,_utils_promise_createBatchScheduler_js__WEBPACK_IMPORTED_MODULE_2__.createBatchScheduler)({
                    id: `${url}`,
                    wait,
                    shouldSplitBatch(requests) {
                        return requests.length > batchSize;
                    },
                    fn: (body) => _utils_rpc_js__WEBPACK_IMPORTED_MODULE_3__.rpc.http(url_, {
                        body,
                        fetchOptions,
                        timeout,
                    }),
                });
                const fn = async (body) => batch
                    ? schedule(body)
                    : [await _utils_rpc_js__WEBPACK_IMPORTED_MODULE_3__.rpc.http(url_, { body, fetchOptions, timeout })];
                const [{ error, result }] = await fn(body);
                if (error)
                    throw new _errors_request_js__WEBPACK_IMPORTED_MODULE_4__.RpcRequestError({
                        body,
                        error,
                        url: url_,
                    });
                return result;
            },
            retryCount,
            retryDelay,
            timeout,
            type: 'http',
        }, {
            fetchOptions,
            url,
        });
    };
}
//# sourceMappingURL=http.js.map

/***/ }),
/* 157 */
/*!****************************************************!*\
  !*** ./node_modules/viem/_esm/errors/transport.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UrlRequiredError: () => (/* binding */ UrlRequiredError)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ 14);

class UrlRequiredError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {
    constructor() {
        super('No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.', {
            docsPath: '/docs/clients/intro',
        });
    }
}
//# sourceMappingURL=transport.js.map

/***/ }),
/* 158 */
/*!**********************************************************************!*\
  !*** ./node_modules/viem/_esm/clients/transports/createTransport.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTransport: () => (/* binding */ createTransport)
/* harmony export */ });
/* harmony import */ var _utils_buildRequest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/buildRequest.js */ 159);

/**
 * @description Creates an transport intended to be used with a client.
 */
function createTransport({ key, name, request, retryCount = 3, retryDelay = 150, timeout, type, }, value) {
    return {
        config: { key, name, request, retryCount, retryDelay, timeout, type },
        request: (0,_utils_buildRequest_js__WEBPACK_IMPORTED_MODULE_0__.buildRequest)(request, { retryCount, retryDelay }),
        value,
    };
}
//# sourceMappingURL=createTransport.js.map

/***/ }),
/* 159 */
/*!******************************************************!*\
  !*** ./node_modules/viem/_esm/utils/buildRequest.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildRequest: () => (/* binding */ buildRequest),
/* harmony export */   isDeterministicError: () => (/* binding */ isDeterministicError)
/* harmony export */ });
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors/base.js */ 14);
/* harmony import */ var _errors_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors/request.js */ 44);
/* harmony import */ var _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors/rpc.js */ 58);
/* harmony import */ var _promise_withRetry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promise/withRetry.js */ 150);




const isDeterministicError = (error) => {
    if ('code' in error)
        return (error.code !== -1 &&
            error.code !== -32004 &&
            error.code !== -32005 &&
            error.code !== -32042 &&
            error.code !== -32603);
    if (error instanceof _errors_request_js__WEBPACK_IMPORTED_MODULE_0__.HttpRequestError && error.status)
        return (error.status !== 403 &&
            error.status !== 408 &&
            error.status !== 413 &&
            error.status !== 429 &&
            error.status !== 500 &&
            error.status !== 502 &&
            error.status !== 503 &&
            error.status !== 504);
    return false;
};
function buildRequest(request, { retryDelay = 150, retryCount = 3, } = {}) {
    return (async (args) => (0,_promise_withRetry_js__WEBPACK_IMPORTED_MODULE_1__.withRetry)(async () => {
        try {
            return await request(args);
        }
        catch (err_) {
            const err = err_;
            switch (err.code) {
                // -32700
                case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.ParseRpcError.code:
                    throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.ParseRpcError(err);
                // -32600
                case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.InvalidRequestRpcError.code:
                    throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.InvalidRequestRpcError(err);
                // -32601
                case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.MethodNotFoundRpcError.code:
                    throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.MethodNotFoundRpcError(err);
                // -32602
                case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.InvalidParamsRpcError.code:
                    throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.InvalidParamsRpcError(err);
                // -32603
                case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.InternalRpcError.code:
                    throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.InternalRpcError(err);
                // -32000
                case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.InvalidInputRpcError.code:
                    throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.InvalidInputRpcError(err);
                // -32001
                case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.ResourceNotFoundRpcError.code:
                    throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.ResourceNotFoundRpcError(err);
                // -32002
                case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.ResourceUnavailableRpcError.code:
                    throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.ResourceUnavailableRpcError(err);
                // -32003
                case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.TransactionRejectedRpcError.code:
                    throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.TransactionRejectedRpcError(err);
                // -32004
                case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.MethodNotSupportedRpcError.code:
                    throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.MethodNotSupportedRpcError(err);
                // -32005
                case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.LimitExceededRpcError.code:
                    throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.LimitExceededRpcError(err);
                // -32006
                case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.JsonRpcVersionUnsupportedError.code:
                    throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.JsonRpcVersionUnsupportedError(err);
                // 4001
                case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.UserRejectedRequestError.code:
                    throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.UserRejectedRequestError(err);
                // 4100
                case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.UnauthorizedProviderError.code:
                    throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.UnauthorizedProviderError(err);
                // 4200
                case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.UnsupportedProviderMethodError.code:
                    throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.UnsupportedProviderMethodError(err);
                // 4900
                case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.ProviderDisconnectedError.code:
                    throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.ProviderDisconnectedError(err);
                // 4901
                case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.ChainDisconnectedError.code:
                    throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.ChainDisconnectedError(err);
                // 4902
                case _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.SwitchChainError.code:
                    throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.SwitchChainError(err);
                // CAIP-25: User Rejected Error
                // https://docs.walletconnect.com/2.0/specs/clients/sign/error-codes#rejected-caip-25
                case 5000:
                    throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.UserRejectedRequestError(err);
                default:
                    if (err_ instanceof _errors_base_js__WEBPACK_IMPORTED_MODULE_3__.BaseError)
                        throw err_;
                    throw new _errors_rpc_js__WEBPACK_IMPORTED_MODULE_2__.UnknownRpcError(err);
            }
        }
    }, {
        delay: ({ count, error }) => {
            // If we find a Retry-After header, let's retry after the given time.
            if (error && error instanceof _errors_request_js__WEBPACK_IMPORTED_MODULE_0__.HttpRequestError) {
                const retryAfter = error?.headers?.get('Retry-After');
                if (retryAfter?.match(/\d/))
                    return parseInt(retryAfter) * 1000;
            }
            // Otherwise, let's retry with an exponential backoff.
            return ~~(1 << count) * retryDelay;
        },
        retryCount,
        shouldRetry: ({ error }) => !isDeterministicError(error),
    }));
}
//# sourceMappingURL=buildRequest.js.map

/***/ }),
/* 160 */
/*!*********************************************!*\
  !*** ./node_modules/viem/_esm/utils/rpc.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSocket: () => (/* binding */ getSocket),
/* harmony export */   rpc: () => (/* binding */ rpc),
/* harmony export */   socketsCache: () => (/* binding */ socketsCache)
/* harmony export */ });
/* harmony import */ var isows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isows */ 162);
/* harmony import */ var _errors_request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors/request.js */ 44);
/* harmony import */ var _promise_createBatchScheduler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./promise/createBatchScheduler.js */ 66);
/* harmony import */ var _promise_withTimeout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promise/withTimeout.js */ 161);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ 43);





let id = 0;
async function http(url, { body, fetchOptions = {}, timeout = 10000 }) {
    const { headers, method, signal: signal_ } = fetchOptions;
    try {
        const response = await (0,_promise_withTimeout_js__WEBPACK_IMPORTED_MODULE_0__.withTimeout)(async ({ signal }) => {
            const response = await fetch(url, {
                ...fetchOptions,
                body: Array.isArray(body)
                    ? (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.stringify)(body.map((body) => ({
                        jsonrpc: '2.0',
                        id: body.id ?? id++,
                        ...body,
                    })))
                    : (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.stringify)({ jsonrpc: '2.0', id: body.id ?? id++, ...body }),
                headers: {
                    ...headers,
                    'Content-Type': 'application/json',
                },
                method: method || 'POST',
                signal: signal_ || (timeout > 0 ? signal : undefined),
            });
            return response;
        }, {
            errorInstance: new _errors_request_js__WEBPACK_IMPORTED_MODULE_2__.TimeoutError({ body, url }),
            timeout,
            signal: true,
        });
        let data;
        if (response.headers.get('Content-Type')?.startsWith('application/json')) {
            data = await response.json();
        }
        else {
            data = await response.text();
        }
        if (!response.ok) {
            throw new _errors_request_js__WEBPACK_IMPORTED_MODULE_2__.HttpRequestError({
                body,
                details: (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.stringify)(data.error) || response.statusText,
                headers: response.headers,
                status: response.status,
                url,
            });
        }
        return data;
    }
    catch (err) {
        if (err instanceof _errors_request_js__WEBPACK_IMPORTED_MODULE_2__.HttpRequestError)
            throw err;
        if (err instanceof _errors_request_js__WEBPACK_IMPORTED_MODULE_2__.TimeoutError)
            throw err;
        throw new _errors_request_js__WEBPACK_IMPORTED_MODULE_2__.HttpRequestError({
            body,
            details: err.message,
            url,
        });
    }
}
const socketsCache = /*#__PURE__*/ new Map();
async function getSocket(url) {
    let socket = socketsCache.get(url);
    // If the socket already exists, return it.
    if (socket)
        return socket;
    const { schedule } = (0,_promise_createBatchScheduler_js__WEBPACK_IMPORTED_MODULE_3__.createBatchScheduler)({
        id: url,
        fn: async () => {
            const webSocket = new isows__WEBPACK_IMPORTED_MODULE_4__.WebSocket(url);
            // Set up a cache for incoming "synchronous" requests.
            const requests = new Map();
            // Set up a cache for subscriptions (eth_subscribe).
            const subscriptions = new Map();
            const onMessage = ({ data }) => {
                const message = JSON.parse(data);
                const isSubscription = message.method === 'eth_subscription';
                const id = isSubscription ? message.params.subscription : message.id;
                const cache = isSubscription ? subscriptions : requests;
                const callback = cache.get(id);
                if (callback)
                    callback({ data });
                if (!isSubscription)
                    cache.delete(id);
            };
            const onClose = () => {
                socketsCache.delete(url);
                webSocket.removeEventListener('close', onClose);
                webSocket.removeEventListener('message', onMessage);
            };
            // Setup event listeners for RPC & subscription responses.
            webSocket.addEventListener('close', onClose);
            webSocket.addEventListener('message', onMessage);
            // Wait for the socket to open.
            if (webSocket.readyState === isows__WEBPACK_IMPORTED_MODULE_4__.WebSocket.CONNECTING) {
                await new Promise((resolve, reject) => {
                    if (!webSocket)
                        return;
                    webSocket.onopen = resolve;
                    webSocket.onerror = reject;
                });
            }
            // Create a new socket instance.
            socket = Object.assign(webSocket, {
                requests,
                subscriptions,
            });
            socketsCache.set(url, socket);
            return [socket];
        },
    });
    const [_, [socket_]] = await schedule();
    return socket_;
}
function webSocket(socket, { body, onResponse }) {
    if (socket.readyState === socket.CLOSED ||
        socket.readyState === socket.CLOSING)
        throw new _errors_request_js__WEBPACK_IMPORTED_MODULE_2__.WebSocketRequestError({
            body,
            url: socket.url,
            details: 'Socket is closed.',
        });
    const id_ = id++;
    const callback = ({ data }) => {
        const message = JSON.parse(data);
        if (typeof message.id === 'number' && id_ !== message.id)
            return;
        onResponse?.(message);
        // If we are subscribing to a topic, we want to set up a listener for incoming
        // messages.
        if (body.method === 'eth_subscribe' && typeof message.result === 'string') {
            socket.subscriptions.set(message.result, callback);
        }
        // If we are unsubscribing from a topic, we want to remove the listener.
        if (body.method === 'eth_unsubscribe') {
            socket.subscriptions.delete(body.params?.[0]);
        }
    };
    socket.requests.set(id_, callback);
    socket.send(JSON.stringify({ jsonrpc: '2.0', ...body, id: id_ }));
    return socket;
}
async function webSocketAsync(socket, { body, timeout = 10000 }) {
    return (0,_promise_withTimeout_js__WEBPACK_IMPORTED_MODULE_0__.withTimeout)(() => new Promise((onResponse) => rpc.webSocket(socket, {
        body,
        onResponse,
    })), {
        errorInstance: new _errors_request_js__WEBPACK_IMPORTED_MODULE_2__.TimeoutError({ body, url: socket.url }),
        timeout,
    });
}
///////////////////////////////////////////////////
const rpc = {
    http,
    webSocket,
    webSocketAsync,
};
//# sourceMappingURL=rpc.js.map

/***/ }),
/* 161 */
/*!*************************************************************!*\
  !*** ./node_modules/viem/_esm/utils/promise/withTimeout.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withTimeout: () => (/* binding */ withTimeout)
/* harmony export */ });
function withTimeout(fn, { errorInstance = new Error('timed out'), timeout, signal, }) {
    return new Promise((resolve, reject) => {
        ;
        (async () => {
            let timeoutId;
            try {
                const controller = new AbortController();
                if (timeout > 0) {
                    timeoutId = setTimeout(() => {
                        if (signal) {
                            controller.abort();
                        }
                        else {
                            reject(errorInstance);
                        }
                    }, timeout);
                }
                resolve(await fn({ signal: controller?.signal }));
            }
            catch (err) {
                if (err.name === 'AbortError')
                    reject(errorInstance);
                reject(err);
            }
            finally {
                clearTimeout(timeoutId);
            }
        })();
    });
}
//# sourceMappingURL=withTimeout.js.map

/***/ }),
/* 162 */
/*!*******************************************!*\
  !*** ./node_modules/isows/_esm/native.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebSocket: () => (/* binding */ WebSocket)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ 163);

const WebSocket = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getNativeWebSocket)();
//# sourceMappingURL=native.js.map

/***/ }),
/* 163 */
/*!******************************************!*\
  !*** ./node_modules/isows/_esm/utils.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNativeWebSocket: () => (/* binding */ getNativeWebSocket)
/* harmony export */ });
function getNativeWebSocket() {
    if (typeof WebSocket !== "undefined")
        return WebSocket;
    if (typeof global.WebSocket !== "undefined")
        return global.WebSocket;
    if (typeof window.WebSocket !== "undefined")
        return window.WebSocket;
    if (typeof self.WebSocket !== "undefined")
        return self.WebSocket;
    throw new Error("`WebSocket` is not supported in this environment");
}
//# sourceMappingURL=utils.js.map

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _qumeta_fast_text_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @qumeta/fast-text-encoding */ 1);
/* harmony import */ var _qumeta_fast_text_encoding__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_qumeta_fast_text_encoding__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var viem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! viem */ 2);
/* harmony import */ var viem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! viem */ 156);
/* harmony import */ var viem_chains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! viem/chains */ 155);
// Main
//console.log(typeof process);
var isMMSdk = typeof hostPlatform !== 'undefined'; // Win32, Linux, MacOS, iOS, Android, Web, WebAssembly
var isNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
var env = isMMSdk ? 'MMSdk' : (isNode ? '(Node.JS)' : '(Browser)');
console.log("Hello." + env);
if (isMMSdk) {
    console.log(hostPlatform);
    //SetExitCode(10);
}
//console.log(import.meta.url);
//import "./lib/encoding";

console.log("fast-text-encoding loaded");
//var cachedTextDecoder = new globalThis.FastTextDecoder('utf-8', { ignoreBOM: true, fatal: true });
//cachedTextDecoder.decode();
/*
//============== WebAssembly in Browser
import init, { initSync, demo_test, greet } from "MMSdkWebAssembly";
import { Tools } from "@babylonjs/core/Misc/tools";

// async
(async () => {
  const buffer = (await Tools.LoadFileAsync("http://127.0.0.1:5500/6e2a352797a966d33f80.wasm")) as ArrayBuffer;
  
  initSync(buffer);
  
  var test = demo_test("test:");
  console.log("test=", test);

  //greet("From TS");
})();

// sync
init().then(() => {
  var test = demo_test("test:");
  console.log("test=", test);

  greet("From TS");
});

//============== WebAssembly in Browser
*/
/*
// WebAssembly in NodeJS
import  { demo_test, greet } from "MMSdkWebAssembly";
//var test = demo_test("test:");
//console.log("test=", test);
console.log(demo_test);
*/
/*
import { MpcSigner } from 'mpcsinger';  // must set ("noImplicitAny": false)
import { SmartAccount } from 'mpcsmartaccount';

const userTokenFn = async () => {
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBQdWJLZXkiOiJhYmNkIiwiaWF0IjoxNjk0NDk5Njg5LCJleHAiOjE3MjYwMzU2ODl9.OsI4nFQoSoegZJbzTQnWBaB1shMjaPinhWZlnntGub4';
};

const sendSmsCodeFn = async (arg:any) => {
  console.log("sendSmsCodeFn");
};

const InitFn = async () => {
  // console.log('1111');

  let signer = new MpcSigner({
    private_key: 'df1a627fd5ec89eaed03fd1ab246c414b8e8d57538d330e8a281137c75b88d36',
    userTokenFn
  });
  console.log('signer初始化成功');

  signer = await signer.init({ sendSmsCodeFn });

  if (signer) {
    let smartAccount = new SmartAccount({
      masterKeySigner: signer,
      appId: '317b980b836356e4be695c3789896ed1',
      chainOptions: [
        {
          chainId: 9527,
          rpcUrl: 'https://robin.rangersprotocol.com/api/jsonrpc'
        }
      ]
    });
    smartAccount = await smartAccount.init({ chainId: 9527 });

    if (smartAccount) {
      console.log('smartAccount初始化成功');
      //   console.log(window?.Module.asm.G);
    }
    //   const ddd = await strValidator();

    const address1 = await smartAccount.getAddress();
    console.log('address1:', address1); //0x77990137A0032b8f31d4C3AE696f60d6AFa0ba99
  }
};
*/
//*


var client = (0,viem__WEBPACK_IMPORTED_MODULE_1__.createPublicClient)({
    chain: viem_chains__WEBPACK_IMPORTED_MODULE_2__.mainnet,
    transport: (0,viem__WEBPACK_IMPORTED_MODULE_3__.http)(),
});
client.getBlockNumber().then(function (blockNumber) {
    console.log(blockNumber);
});
//*/
/*
//import { SmartAccount } from "@unipasswallet/smart-account";
import { MpcSigner } from 'mpcsinger';  // must set ("noImplicitAny": false)
import { SmartAccount } from 'mpcsmartaccount';

var privateKey = Buffer.from("b2f6edcdab35d6ddf52e7bec402cc63cf3a96ea7ce17f4677b0ed4ca27954163", 'hex');

async function getTokenFun() {
  console.log("getTokenFun");
  return "token";
}

var signer = new MpcSigner({
  private_key: privateKey,
  userTokenFn: getTokenFun
});
*/
/* ok
setInterval(()=>{
    console.log(Date.now());
}, 1000);
*/
/* ok
import BigNumber from "bignumber.js";
let x = new BigNumber(123.4567);
console.log(x);
*/
/* ng
import crypto from 'crypto';

// fix crypto.getRandomValues
const nc = require("node:crypto");
globalThis.crypto = nc.webcrypto;
console.log(typeof nc.webcrypto.getRandomValues); // function
console.log(typeof crypto.getRandomValues); // function
*/
/* web(ok) node(ng) crypto.getRandomValues
import { secp256k1 } from '@noble/curves/secp256k1'; // ESM and Common.js
const priv = secp256k1.utils.randomPrivateKey();
const pub = secp256k1.getPublicKey(priv);
const msg = new Uint8Array(32).fill(1); // message hash (not message) in ecdsa
const sig = secp256k1.sign(msg, priv); // `{prehash: true}` option is available
const isValid = secp256k1.verify(sig, msg, pub) === true;
console.log(isValid);

// hex strings are also supported besides Uint8Arrays:
const privHex = '46c930bc7bb4db7f55da20798697421b98c4175a52c630294d75a84b9c126236';
const pub2 = secp256k1.getPublicKey(privHex);
console.log(pub2);
*/
/* ok
import { secp256k1 } from "ethereum-cryptography/secp256k1";
(async () => {
    // You pass either a hex string, or Uint8Array
    const privateKey = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";
    const messageHash = "a33321f98e4ff1c283c76998f14f57447545d339b3db534c6d886decb4209f28";
    const publicKey = secp256k1.getPublicKey(privateKey);
    const signature = secp256k1.sign(messageHash, privateKey);
    const isSigned = secp256k1.verify(signature, messageHash, publicKey);

    console.log(isSigned);
  })();
*/
/* ok
import Wallet from 'ethereumjs-wallet'
let wallet = Wallet.fromPrivateKey(Buffer.from("b2f6edcdab35d6ddf52e7bec402cc63cf3a96ea7ce17f4677b0ed4ca27954163", 'hex'));
console.log(wallet.getAddressString());
*/
/* ng
const cryptoA = require('crypto')
const privateKeyBuf = cryptoA.randomBytes(32)

const Secp256k1 = require('@lionello/secp256k1-js')

// Generating private key

const privateKey = Secp256k1.uint256(privateKeyBuf, 16)

// Generating public key
const publicKey = Secp256k1.generatePublicKeyFromPrivateKeyData(privateKey)
const pubX = Secp256k1.uint256(publicKey.x, 16)
const pubY = Secp256k1.uint256(publicKey.y, 16)

// Signing a digest
const digest = Secp256k1.uint256("483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8", 16)
const sigT = Secp256k1.ecsign(privateKey, digest)
const sigR = Secp256k1.uint256(sigT.r,16)
const sigS = Secp256k1.uint256(sigT.s,16)

// Verifying signature
const isValidSig = Secp256k1.ecverify(pubX, pubY, sigR, sigS, digest)
console.log(isValidSig, 'Signature must be valid')
*/

})();

/******/ })()
;