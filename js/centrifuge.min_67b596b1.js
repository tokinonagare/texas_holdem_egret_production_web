!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.Centrifuge=e()}}(function(){var e;return function t(e,n,i){function s(o,c){if(!n[o]){if(!e[o]){var a="function"==typeof require&&require;if(!c&&a)return a(o,!0);if(r)return r(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var h=n[o]={exports:{}};e[o][0].call(h.exports,function(t){var n=e[o][1][t];return s(n?n:t)},h,h.exports,t,e,n,i)}return n[o].exports}for(var r="function"==typeof require&&require,o=0;o<i.length;o++)s(i[o]);return s}({1:[function(e,t,n){function i(){}var s=t.exports={};s.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.MutationObserver,n="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};var i=[];if(t){var s=document.createElement("div"),r=new MutationObserver(function(){var e=i.slice();i.length=0,e.forEach(function(e){e()})});return r.observe(s,{attributes:!0}),function(e){i.length||s.setAttribute("yes","no"),i.push(e)}}return n?(window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),i.length>0)){var n=i.shift();n()}},!0),function(e){i.push(e),window.postMessage("process-tick","*")}):function(e){setTimeout(e,0)}}(),s.title="browser",s.browser=!0,s.env={},s.argv=[],s.on=i,s.addListener=i,s.once=i,s.off=i,s.removeListener=i,s.removeAllListeners=i,s.emit=i,s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")}},{}],2:[function(t,n,i){(function(s,r){!function(t,s){"object"==typeof i&&"undefined"!=typeof n?n.exports=s():"function"==typeof e&&e.amd?e(s):t.ES6Promise=s()}(this,function(){"use strict";function e(e){return"function"==typeof e||"object"==typeof e&&null!==e}function n(e){return"function"==typeof e}function i(e){Y=e}function o(e){$=e}function c(){return function(){return s.nextTick(l)}}function a(){return"undefined"!=typeof K?function(){K(l)}:f()}function u(){var e=0,t=new Z(l),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function h(){var e=new MessageChannel;return e.port1.onmessage=l,function(){return e.port2.postMessage(0)}}function f(){var e=setTimeout;return function(){return e(l,1)}}function l(){for(var e=0;V>e;e+=2){var t=nt[e],n=nt[e+1];t(n),nt[e]=void 0,nt[e+1]=void 0}V=0}function _(){try{var e=t,n=e("vertx");return K=n.runOnLoop||n.runOnContext,a()}catch(i){return f()}}function g(e,t){var n=arguments,i=this,s=new this.constructor(p);void 0===s[st]&&P(s);var r=i._state;return r?!function(){var e=n[r-1];$(function(){return A(r,s,e,i._result)})}():j(i,s,e,t),s}function d(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(p);return C(n,e),n}function p(){}function b(){return new TypeError("You cannot resolve a promise with itself")}function v(){return new TypeError("A promises callback cannot return that same promise.")}function m(e){try{return e.then}catch(t){return at.error=t,at}}function y(e,t,n,i){try{e.call(t,n,i)}catch(s){return s}}function w(e,t,n){$(function(e){var i=!1,s=y(n,t,function(n){i||(i=!0,t!==n?C(e,n):O(e,n))},function(t){i||(i=!0,E(e,t))},"Settle: "+(e._label||" unknown promise"));!i&&s&&(i=!0,E(e,s))},e)}function S(e,t){t._state===ot?O(e,t._result):t._state===ct?E(e,t._result):j(t,void 0,function(t){return C(e,t)},function(t){return E(e,t)})}function k(e,t,i){t.constructor===e.constructor&&i===g&&t.constructor.resolve===d?S(e,t):i===at?E(e,at.error):void 0===i?O(e,t):n(i)?w(e,t,i):O(e,t)}function C(t,n){t===n?E(t,b()):e(n)?k(t,n,m(n)):O(t,n)}function T(e){e._onerror&&e._onerror(e._result),x(e)}function O(e,t){e._state===rt&&(e._result=t,e._state=ot,0!==e._subscribers.length&&$(x,e))}function E(e,t){e._state===rt&&(e._state=ct,e._result=t,$(T,e))}function j(e,t,n,i){var s=e._subscribers,r=s.length;e._onerror=null,s[r]=t,s[r+ot]=n,s[r+ct]=i,0===r&&e._state&&$(x,e)}function x(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var i=void 0,s=void 0,r=e._result,o=0;o<t.length;o+=3)i=t[o],s=t[o+n],i?A(n,i,s,r):s(r);e._subscribers.length=0}}function R(){this.error=null}function M(e,t){try{return e(t)}catch(n){return ut.error=n,ut}}function A(e,t,i,s){var r=n(i),o=void 0,c=void 0,a=void 0,u=void 0;if(r){if(o=M(i,s),o===ut?(u=!0,c=o.error,o=null):a=!0,t===o)return void E(t,v())}else o=s,a=!0;t._state!==rt||(r&&a?C(t,o):u?E(t,c):e===ot?O(t,o):e===ct&&E(t,o))}function I(e,t){try{t(function(t){C(e,t)},function(t){E(e,t)})}catch(n){E(e,n)}}function J(){return ht++}function P(e){e[st]=ht++,e._state=void 0,e._result=void 0,e._subscribers=[]}function L(e,t){this._instanceConstructor=e,this.promise=new e(p),this.promise[st]||P(this.promise),z(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?O(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&O(this.promise,this._result))):E(this.promise,D())}function D(){return new Error("Array Methods must be provided an Array")}function N(e){return new L(this,e).promise}function q(e){var t=this;return new t(z(e)?function(n,i){for(var s=e.length,r=0;s>r;r++)t.resolve(e[r]).then(n,i)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function U(e){var t=this,n=new t(p);return E(n,e),n}function B(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function F(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function W(e){this[st]=J(),this._result=this._state=void 0,this._subscribers=[],p!==e&&("function"!=typeof e&&B(),this instanceof W?I(this,e):F())}function H(){var e=void 0;if("undefined"!=typeof r)e=r;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=e.Promise;if(n){var i=null;try{i=Object.prototype.toString.call(n.resolve())}catch(t){}if("[object Promise]"===i&&!n.cast)return}e.Promise=W}var X=void 0;X=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var z=X,V=0,K=void 0,Y=void 0,$=function(e,t){nt[V]=e,nt[V+1]=t,V+=2,2===V&&(Y?Y(l):it())},G="undefined"!=typeof window?window:void 0,Q=G||{},Z=Q.MutationObserver||Q.WebKitMutationObserver,et="undefined"==typeof self&&"undefined"!=typeof s&&"[object process]"==={}.toString.call(s),tt="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,nt=new Array(1e3),it=void 0;it=et?c():Z?u():tt?h():void 0===G&&"function"==typeof t?_():f();var st=Math.random().toString(36).substring(16),rt=void 0,ot=1,ct=2,at=new R,ut=new R,ht=0;return L.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===rt&&e>n;n++)this._eachEntry(t[n],n)},L.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,i=n.resolve;if(i===d){var s=m(e);if(s===g&&e._state!==rt)this._settledAt(e._state,t,e._result);else if("function"!=typeof s)this._remaining--,this._result[t]=e;else if(n===W){var r=new n(p);k(r,e,s),this._willSettleAt(r,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(i(e),t)},L.prototype._settledAt=function(e,t,n){var i=this.promise;i._state===rt&&(this._remaining--,e===ct?E(i,n):this._result[t]=n),0===this._remaining&&O(i,this._result)},L.prototype._willSettleAt=function(e,t){var n=this;j(e,void 0,function(e){return n._settledAt(ot,t,e)},function(e){return n._settledAt(ct,t,e)})},W.all=N,W.race=q,W.resolve=d,W.reject=U,W._setScheduler=i,W._setAsap=o,W._asap=$,W.prototype={constructor:W,then:g,"catch":function(e){return this.then(null,e)}},W.polyfill=H,W.Promise=W,W})}).call(this,t("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:1}],3:[function(t,n,i){(function(){"use strict";function t(){}function i(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function s(e){return function(){return this[e].apply(this,arguments)}}var r=t.prototype,o=this,c=o.EventEmitter;r.getListeners=function(e){var t,n,i=this._getEvents();if(e instanceof RegExp){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},r.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},r.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},r.addListener=function(e,t){var n,s=this.getListenersAsObject(e),r="object"==typeof t;for(n in s)s.hasOwnProperty(n)&&-1===i(s[n],t)&&s[n].push(r?t:{listener:t,once:!1});return this},r.on=s("addListener"),r.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},r.once=s("addOnceListener"),r.defineEvent=function(e){return this.getListeners(e),this},r.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},r.removeListener=function(e,t){var n,s,r=this.getListenersAsObject(e);for(s in r)r.hasOwnProperty(s)&&(n=i(r[s],t),-1!==n&&r[s].splice(n,1));return this},r.off=s("removeListener"),r.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},r.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},r.manipulateListeners=function(e,t,n){var i,s,r=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)r.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(s=t[i])&&("function"==typeof s?r.call(this,i,s):o.call(this,i,s));return this},r.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if(e instanceof RegExp)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},r.removeAllListeners=s("removeEvent"),r.emitEvent=function(e,t){var n,i,s,r,o,c=this.getListenersAsObject(e);for(r in c)if(c.hasOwnProperty(r))for(n=c[r].slice(0),s=n.length;s--;)i=n[s],i.once===!0&&this.removeListener(e,i.listener),o=i.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,i.listener);return this},r.trigger=s("emitEvent"),r.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},r.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},r._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},r._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return o.EventEmitter=c,t},"function"==typeof e&&e.amd?e(function(){return t}):"object"==typeof n&&n.exports?n.exports=t:o.EventEmitter=t}).call(this)},{}],4:[function(e,t,n){(function(n){function i(e,t){return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,t.prototype}function s(e,t){try{return e[t]}catch(n){return}}function r(e,t,n){for(var i=t||{},o=2;o<arguments.length;++o){var c=arguments[o];if(void 0!==c&&null!==c)for(var a in c){var u=s(c,a),h=s(i,a);if(u!==t&&void 0!==u)if(e&&"object"==typeof u&&null!==u)if(u instanceof Array)i[a]=r(e,h instanceof Array?h:[],u);else{var f="object"!=typeof h||h instanceof Array?{}:h;i[a]=r(e,f,u)}else i[a]=u}}return i}function o(e,t){return-1!==e.indexOf(t,e.length-t.length)}function c(e,t){return 0===e.lastIndexOf(t,0)}function a(e){return"/"==e.substring(e.length-1)&&(e=e.substring(0,e.length-1)),e}function u(e){return void 0===e||null===e?!1:"string"==typeof e||e instanceof String}function h(e){return void 0===e||null===e?!1:"function"==typeof e}function f(e,t){if(n.console){var i=n.console[e];h(i)&&i.apply(n.console,t)}}function l(e,t,n){var i=.5*Math.random(),s=t*Math.pow(2,e+1);return s>n&&(s=n),Math.floor((1-i)*s)}function _(e){return e.error&&null!==e.error&&""!==e.error}function g(e){this._sockJS=null,this._isSockJS=!1,this._status="disconnected",this._reconnect=!0,this._reconnecting=!1,this._transport=null,this._transportName=null,this._transportClosed=!0,this._messageId=0,this._clientID=null,this._subs={},this._lastMessageID={},this._messages=[],this._isBatching=!1,this._isAuthBatching=!1,this._authChannels={},this._numRefreshFailed=0,this._refreshTimeout=null,this._pingInterval=null,this._pongTimeout=null,this._shouldExecutePongTimeout=!0,this._retries=0,this._callbacks={},this._latency=null,this._latencyStart=null,this._config={accessToken:"",version:"",isNative:!1,sockJS:null,retry:1e3,maxRetry:2e4,timeout:5e3,info:"",resubscribe:!0,ping:!0,pingInterval:3e4,pongWaitTimeout:5e3,debug:!1,insecure:!1,server:null,privateChannelPrefix:"$",onTransportClose:null,transports:["websocket","xdr-streaming","xhr-streaming","eventsource","iframe-eventsource","iframe-htmlfile","xdr-polling","xhr-polling","iframe-xhr-polling","jsonp-polling"],refreshEndpoint:"/centrifuge/refresh/",refreshHeaders:{},refreshParams:{},refreshData:{},refreshTransport:"ajax",refreshAttempts:null,refreshFailed:null,authEndpoint:"/centrifuge/auth/",authHeaders:{},authParams:{},authTransport:"ajax"},e&&this.configure(e)}function d(e,t,n){this._status=m,this._error=null,this._centrifuge=e,this.channel=t,this._setEvents(n),this._isResubscribe=!1,this._recovered=!1,this._ready=!1,this._promise=null,this._initializePromise()}var p=e("es6-promise").Promise,b=e("wolfy87-eventemitter");Object.create||(Object.create=function(){function e(){}return function(t){if(1!=arguments.length)throw new Error("Object.create implementation only accepts one parameter.");return e.prototype=t,new e}}()),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(null==this)throw new TypeError;var t,n,i=Object(this),s=i.length>>>0;if(0===s)return-1;if(t=0,arguments.length>1&&(t=Number(arguments[1]),t!=t?t=0:0!=t&&1/0!=t&&t!=-1/0&&(t=(t>0||-1)*Math.floor(Math.abs(t)))),t>=s)return-1;for(n=t>=0?t:Math.max(s-Math.abs(t),0);s>n;n++)if(n in i&&i[n]===e)return n;return-1}),i(g,b),g._authCallbacks={},g._nextAuthCallbackID=1;var v=g.prototype;v._jsonp=function(e,t,i,s,r){i.length>0&&this._log("Only AJAX request allows to send custom headers, it's not possible with JSONP."),self._debug("sending JSONP request to",e);var o=g._nextAuthCallbackID.toString();g._nextAuthCallbackID++;var c=n.document,a=c.createElement("script");g._authCallbacks[o]=function(e){r(!1,e),delete g[o]};var u="";for(var h in t)u.length>0&&(u+="&"),u+=encodeURIComponent(h)+"="+encodeURIComponent(t[h]);var f="Centrifuge._authCallbacks['"+o+"']";a.src=this._config.authEndpoint+"?callback="+encodeURIComponent(f)+"&data="+encodeURIComponent(JSON.stringify(s))+"&"+u;var l=c.getElementsByTagName("head")[0]||c.documentElement;l.insertBefore(a,l.firstChild)},v._ajax=function(e,t,i,s,r){var o=this;o._debug("sending AJAX request to",e);var c=n.XMLHttpRequest?new n.XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),a="";for(var u in t)a.length>0&&(a+="&"),a+=encodeURIComponent(u)+"="+encodeURIComponent(t[u]);a.length>0&&(a="?"+a),c.open("POST",e+a,!0),c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.setRequestHeader("Content-Type","application/json");for(var h in i)c.setRequestHeader(h,i[h]);return c.onreadystatechange=function(){if(4===c.readyState)if(200===c.status){var e,t=!1;try{e=JSON.parse(c.responseText),t=!0}catch(n){r(!0,"JSON returned was invalid, yet status code was 200. Data was: "+c.responseText)}t&&r(!1,e)}else o._log("Couldn't get auth info from application",c.status),r(!0,c.status)},setTimeout(function(){c.send(JSON.stringify(s))},20),c},v._log=function(){f("info",arguments)},v._debug=function(){this._config.debug===!0&&f("debug",arguments)},v._websocketSupported=function(){return this._config.isNative?!("function"!=typeof __global.egret_native.WebSocket&&"object"!=typeof __global.egret_native.WebSocket):!("function"!=typeof WebSocket&&"object"!=typeof WebSocket)},v._sockjsEndpoint=function(){var e=this._config.url;return e=e.replace("ws://","http://"),e=e.replace("wss://","https://"),e=a(e),this._config.version&&(e+="/"+this._config.version),o(this._config.url,"connection")||(e+="/connection"),this._config.accessToken&&(e+="?access_token="+this._config.accessToken),e},v._rawWebsocketEndpoint=function(){var e=this._config.url;return e=e.replace("http://","ws://"),e=e.replace("https://","wss://"),e=a(e),this._config.version&&(e+="/"+this._config.version),o(this._config.url,"connection/websocket")||(e+="/connection/websocket"),this._config.accessToken&&(e+="?access_token="+this._config.accessToken),egret.log("websocket 连接地址",e),e},v._configure=function(e){if(this._debug("Configuring centrifuge object with",e),e||(e={}),this._config=r(!1,this._config,e),!this._config.url)throw"Missing required configuration parameter 'url' specifying server URL";if(!this._config.user&&""!==this._config.user){if(!this._config.insecure)throw"Missing required configuration parameter 'user' specifying user's unique ID in your application";this._debug("user not found but this is OK for insecure mode - anonymous access will be used"),this._config.user=""}if(!this._config.timestamp){if(!this._config.insecure)throw"Missing required configuration parameter 'timestamp'";this._debug("token not found but this is OK for insecure mode")}if(!this._config.token){if(!this._config.insecure)throw"Missing required configuration parameter 'token' specifying the sign of authorization request";this._debug("timestamp not found but this is OK for insecure mode")}if(this._config.url=a(this._config.url),o(this._config.url,"connection"))if(this._debug("client will connect to SockJS endpoint"),null!==this._config.sockJS)this._debug("SockJS explicitly provided in options"),this._sockJS=this._config.sockJS;else{if("undefined"==typeof SockJS)throw"include SockJS client library before Centrifuge javascript client library or provide SockJS object in options or use raw Websocket connection endpoint";this._debug("use globally defined SockJS"),this._sockJS=SockJS}else o(this._config.url,"connection/websocket")?this._debug("client will connect to raw Websocket endpoint"):(this._debug("client will detect connection endpoint itself"),null!==this._config.sockJS?(this._debug("SockJS explicitly provided in options"),this._sockJS=this._config.sockJS):"undefined"==typeof SockJS?this._debug("SockJS not found"):(this._debug("use globally defined SockJS"),this._sockJS=SockJS))},v._setStatus=function(e){this._status!==e&&(this._debug("Status",this._status,"->",e),this._status=e)},v._isDisconnected=function(){return"disconnected"===this._status},v._isConnecting=function(){return"connecting"===this._status},v._isConnected=function(){return"connected"===this._status},v._nextMessageId=function(){return++this._messageId},v._resetRetry=function(){this._debug("reset retries count to 0"),this._retries=0},v._getRetryInterval=function(){var e=l(this._retries,this._config.retry,this._config.maxRetry);return this._retries+=1,e},v._clearConnectedState=function(e){this._clientID=null;for(var t in this._callbacks){var n=this._callbacks[t],i=n.errback;i&&i(this._createErrorObject("disconnected","retry"))}this._callbacks={};for(var s in this._subs){var r=this._subs[s];e?(r._isSuccess()&&r._triggerUnsubscribe(),r._setSubscribing()):r._setUnsubscribed()}this._config.resubscribe&&this._reconnect||(this._subs={})},v._send=function(e){0!==e.length&&(1==e.length&&(e=e[0]),this._debug("Send",JSON.stringify(e)),this._transport.send(JSON.stringify(e)))},v._setupTransport=function(){var e=this;if(this._isSockJS=!1,null!==this._sockJS){var t={transports:this._config.transports};null!==this._config.server&&(t.server=this._config.server),this._isSockJS=!0,this._transport=new this._sockJS(this._sockjsEndpoint(),null,t)}else{if(!this._websocketSupported())return void this._debug("No native Websocket support and no SockJS configured, can't connect");this._config.isNative?this._transport=new __global.egret_native.WebSocket(this._rawWebsocketEndpoint()):this._transport=new WebSocket(this._rawWebsocketEndpoint())}this._transport.onopen=function(){e._transportClosed=!1,e._reconnecting=!1,e._isSockJS?(e._transportName=e._transport.transport,e._transport.onheartbeat=function(){e._restartPing()}):e._transportName="raw-websocket",e._resetRetry(),u(e._config.user)||e._log("user expected to be string"),u(e._config.info)||e._log("info expected to be string");var t={method:"connect",params:{user:e._config.user,info:e._config.info}};e._config.insecure||(t.params.timestamp=e._config.timestamp,t.params.token=e._config.token,u(e._config.timestamp)||e._log("timestamp expected to be string"),u(e._config.token)||e._log("token expected to be string")),e._addMessage(t),e._latencyStart=new Date},this._transport.onOpen=function(){e._transportClosed=!1,e._reconnecting=!1,e._isSockJS?(e._transportName=e._transport.transport,e._transport.onheartbeat=function(){e._restartPing()}):e._transportName="raw-websocket",e._resetRetry(),u(e._config.user)||e._log("user expected to be string"),u(e._config.info)||e._log("info expected to be string");var t={method:"connect",params:{user:e._config.user,info:e._config.info}};e._config.insecure||(t.params.timestamp=e._config.timestamp,t.params.token=e._config.token,u(e._config.timestamp)||e._log("timestamp expected to be string"),u(e._config.token)||e._log("token expected to be string")),e._addMessage(t),e._latencyStart=new Date},this._transport.onerror=function(t){if(e._debug("transport level error",t),null!==e._config.onTransportClose&&e._config.onTransportClose({reason:t,reconnect:e._reconnect}),e._disconnect(t,e._reconnect),e._reconnect===!0){e._reconnecting=!0;var n=e._getRetryInterval();e._debug("reconnect after "+n+" milliseconds"),setTimeout(function(){e._reconnect===!0&&e._connect.call(e)},n)}},this._transport.onError=function(t){if(e._debug("transport level error",t),null!==e._config.onTransportClose&&e._config.onTransportClose({reason:t,reconnect:e._reconnect}),e._disconnect(t,e._reconnect),e._reconnect===!0){e._reconnecting=!0;var n=e._getRetryInterval();e._debug("reconnect after "+n+" milliseconds"),setTimeout(function(){e._reconnect===!0&&e._connect.call(e)},n)}},this._transport.onclose=function(t){e._debug("onClose event",JSON.stringify(t)),e._transportClosed=!0;var n="connection closed",i=!0;if(t&&t.reason)try{var s=JSON.parse(t.reason);e._debug("reason is an advice object",s),n=s.reason,i=s.reconnect}catch(r){n=t.reason,e._debug("reason is a plain string",n),i="disconnect"!==n}if(null!==e._config.onTransportClose&&e._config.onTransportClose({event:t,reason:n,reconnect:i}),e._disconnect(n,i),e._reconnect===!0){e._reconnecting=!0;var o=e._getRetryInterval();e._debug("reconnect after "+o+" milliseconds"),setTimeout(function(){e._reconnect===!0&&e._connect.call(e)},o)}},this._transport.onClose=function(t){e._debug("onClose event",JSON.stringify(t)),e._transportClosed=!0;var n="connection closed",i=!0;if(t&&t.reason)try{var s=JSON.parse(t.reason);e._debug("reason is an advice object",s),n=s.reason,i=s.reconnect}catch(r){n=t.reason,e._debug("reason is a plain string",n),i="disconnect"!==n}if(null!==e._config.onTransportClose&&e._config.onTransportClose({event:t,reason:n,reconnect:i}),e._disconnect(n,i),e._reconnect===!0){e._reconnecting=!0;var o=e._getRetryInterval();e._debug("reconnect after "+o+" milliseconds"),setTimeout(function(){e._reconnect===!0&&e._connect.call(e)},o)}},this._transport.onmessage=function(t){e._debug("onMessage event",JSON.stringify(t));var n;n=JSON.parse(t.data),e._debug("Received",n),e._receive(n),e._restartPing()},this._transport.onMessage=function(t){e._debug("onMessage event",JSON.stringify(t));var n;n=JSON.parse(t),e._debug("Received",n),e._receive(n),e._restartPing()}},v._connect=function(e){if(this.isConnected())return void this._debug("connect called when already connected");if("connecting"!=this._status){if(this._numRefreshFailed>0)return void this._debug("can't connect when credentials expired, need to refresh");this._debug("start connecting"),this._setStatus("connecting"),this._clientID=null,this._reconnect=!0,e&&this.on("connect",e),this._setupTransport()}},v._disconnect=function(e,t){if(!this.isDisconnected()){this._debug("disconnected:",e,t);var n=t||!1;if(n===!1&&(this._reconnect=!1),this._clearConnectedState(t),!this.isDisconnected()){this._setStatus("disconnected");var i={reason:e,reconnect:n};this._refreshTimeout&&clearTimeout(this._refreshTimeout),this._reconnecting===!1&&this.trigger("disconnect",[i])}this._transportClosed||this._transport.close()}},v._refreshFailed=function(){this.isDisconnected()||this._disconnect("refresh failed",!1),null!==this._config.refreshFailed&&this._config.refreshFailed()},v._refresh=function(){var e=this;if(this._debug("refresh credentials"),0===e._config.refreshAttempts)return this._debug("refresh attempts set to 0, do not send refresh request at all"),void e._refreshFailed();var t=function(t,n){if(t===!0)return e._debug("error getting connect parameters",n),e._numRefreshFailed++,e._refreshTimeout&&clearTimeout(e._refreshTimeout),null!==e._config.refreshAttempts&&e._numRefreshFailed>=e._config.refreshAttempts?void e._refreshFailed():void(e._refreshTimeout=setTimeout(function(){e._refresh.call(e)},3e3+Math.round(1e3*Math.random())));if(e._numRefreshFailed=0,e._config.user=n.user,e._config.timestamp=n.timestamp,n.info&&(e._config.info=n.info),e._config.token=n.token,e.isDisconnected())e._debug("credentials refreshed, connect from scratch"),e._connect();else{e._debug("send refreshed credentials");var i={method:"refresh",params:{user:e._config.user,timestamp:e._config.timestamp,info:e._config.info,token:e._config.token}};e._addMessage(i)}},n=this._config.refreshTransport.toLowerCase();if("ajax"===n)this._ajax(this._config.refreshEndpoint,this._config.refreshParams,this._config.refreshHeaders,this._config.refreshData,t);else{if("jsonp"!==n)throw"Unknown refresh transport "+n;this._jsonp(this._config.refreshEndpoint,this._config.refreshParams,this._config.refreshHeaders,this._config.refreshData,t)}},v._subscribe=function(e){var t=e.channel;if(t in this._subs||(this._subs[t]=e),!this.isConnected())return void e._setNew();e._setSubscribing();var n={method:"subscribe",params:{channel:t}};if(c(t,this._config.privateChannelPrefix))this._isAuthBatching?this._authChannels[t]=!0:(this.startAuthBatching(),this._subscribe(e),this.stopAuthBatching());else{var i=this._recover(t);i===!0&&(n.params.recover=!0,n.params.last=this._getLastID(t)),this._addMessage(n)}},v._unsubscribe=function(e){if(this.isConnected()){var t={method:"unsubscribe",params:{channel:e.channel}};delete this._subs[e.channel],this._addMessage(t)}},v._getSub=function(e){var t=this._subs[e];return t?t:null},v._connectResponse=function(e){if(!this.isConnected())if(_(e))this.trigger("error",[{message:e}]);else{if(null!==this._latencyStart&&(this._latency=(new Date).getTime()-this._latencyStart.getTime(),this._latencyStart=null),!e.body)return;if(e.body.expires){var t=e.body.expired;if(t)return void this._refresh()}this._clientID=e.body.client,this._setStatus("connected"),this._refreshTimeout&&clearTimeout(this._refreshTimeout);var n=this;if(e.body.expires&&(this._refreshTimeout=setTimeout(function(){n._refresh.call(n)},1e3*e.body.ttl)),this._config.resubscribe){this.startBatching(),this.startAuthBatching();for(var i in this._subs){var s=this._subs[i];this._subscribe(s)}this.stopAuthBatching(),this.stopBatching(!0)}var r={client:e.body.client,transport:this._transportName,latency:this._latency};this._restartPing(),this.trigger("connect",[r])}},v._stopPing=function(){null!==this._pongTimeout&&(this._shouldExecutePongTimeout=!1),null!==this._pingInterval&&clearInterval(this._pingInterval)},v._startPing=function(){if(!(this._config.ping!==!0||this._config.pingInterval<=0)&&this.isConnected()){var e=this;this._pingInterval=setInterval(function(){return e.isConnected()?(e.ping(),e._pongTimeout&&(clearTimeout(e._pongTimeout),e._pongTimeout=null,e._shouldExecutePongTimeout=!0),void(e._pongTimeout=setTimeout(function(){e._shouldExecutePongTimeout&&e._disconnect("no ping",!0)},e._config.pongWaitTimeout))):void e._stopPing()},this._config.pingInterval)}},v._restartPing=function(){this._stopPing(),this._startPing()},v._disconnectResponse=function(e){if(_(e))this.trigger("error",[{message:e}]);else{var t=!1;e.body.reconnect&&(t=e.body.reconnect);var n="";e.body.reason&&(n=e.body.reason),this._disconnect(n,t)}},v._subscribeResponse=function(e){var t=e.body;if(null!==t){var n=t.channel,i=this._getSub(n);if(i&&i._isSubscribing())if(_(e))this.trigger("error",[{message:e}]),i._setSubscribeError(this._errorObjectFromMessage(e));else{var s=t.messages;if(s&&s.length>0)for(var r in s.reverse())this._messageResponse({body:s[r]});else t.last&&(this._lastMessageID[n]=t.last);var o=!1;t.recovered&&(o=t.recovered),i._setSubscribeSuccess(o)}}},v._unsubscribeResponse=function(e){var t=e.uid,n=e.body,i=n.channel,s=this._getSub(i);s&&(_(e)?this.trigger("error",[{message:e}]):t||s._setUnsubscribed())},v._publishResponse=function(e){var t=e.uid,n=e.body;if(t in this._callbacks){var i=this._callbacks[t];if(delete this._callbacks[t],_(e)){var s=i.errback;if(!s)return;s(this._errorObjectFromMessage(e)),this.trigger("error",[{message:e}])}else{var r=i.callback;if(!r)return;r(n)}}},v._presenceResponse=function(e){var t=e.uid,n=e.body;if(t in this._callbacks){var i=this._callbacks[t];if(delete this._callbacks[t],_(e)){var s=i.errback;if(!s)return;s(this._errorObjectFromMessage(e)),this.trigger("error",[{message:e}])}else{var r=i.callback;if(!r)return;r(n)}}},v._historyResponse=function(e){var t=e.uid,n=e.body;if(t in this._callbacks){var i=this._callbacks[t];if(delete this._callbacks[t],_(e)){var s=i.errback;if(!s)return;s(this._errorObjectFromMessage(e)),this.trigger("error",[{message:e}])}else{var r=i.callback;if(!r)return;r(n)}}},v._joinResponse=function(e){var t=e.body,n=t.channel,i=this._getSub(n);i&&i.trigger("join",[t])},v._leaveResponse=function(e){var t=e.body,n=t.channel,i=this._getSub(n);i&&i.trigger("leave",[t])},v._messageResponse=function(e){var t=e.body,n=t.channel;this._lastMessageID[n]=t.uid;var i=this._getSub(n);i&&i.trigger("message",[t])},v._refreshResponse=function(e){if(this._refreshTimeout&&clearTimeout(this._refreshTimeout),_(e))this.trigger("error",[{message:e}]);else if(e.body.expires){var t=this,n=e.body.expired;if(n)return void(t._refreshTimeout=setTimeout(function(){t._refresh.call(t)},3e3+Math.round(1e3*Math.random())));this._clientID=e.body.client,t._refreshTimeout=setTimeout(function(){t._refresh.call(t)},1e3*e.body.ttl)}},v._dispatchMessage=function(e){if(void 0===e||null===e)return void this._debug("dispatch: got undefined or null message");var t=e.method;if(!t)return void this._debug("dispatch: got message with empty method");switch(t){case"connect":this._connectResponse(e);break;case"disconnect":this._disconnectResponse(e);break;case"subscribe":this._subscribeResponse(e);break;case"unsubscribe":this._unsubscribeResponse(e);break;case"publish":this._publishResponse(e);break;case"presence":this._presenceResponse(e);break;case"history":this._historyResponse(e);break;case"join":this._joinResponse(e);break;case"leave":this._leaveResponse(e);break;case"ping":break;case"refresh":this._refreshResponse(e);break;case"message":this._messageResponse(e);break;default:this._debug("dispatch: got message with unknown method"+t)}},v._receive=function(e){if(Object.prototype.toString.call(e)===Object.prototype.toString.call([])){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];this._dispatchMessage(n)}}else Object.prototype.toString.call(e)===Object.prototype.toString.call({})&&this._dispatchMessage(e)
},v._flush=function(){var e=this._messages.slice(0);this._messages=[],this._send(e)},v._ping=function(){var e={method:"ping"};this._addMessage(e)},v._recover=function(e){return e in this._lastMessageID},v._getLastID=function(e){var t=this._lastMessageID[e];return t?(this._debug("last uid found and sent for channel",e),t):(this._debug("no last uid found for channel",e),"")},v._createErrorObject=function(e,t){var n={error:e};return t&&(n.advice=t),n},v._errorObjectFromMessage=function(e){var t=e.error,n=e.advice;return this._createErrorObject(t,n)},v._registerCall=function(e,t,n){var i=this;this._callbacks[e]={callback:t,errback:n},setTimeout(function(){delete i._callbacks[e],h(n)&&n(i._createErrorObject("timeout","retry"))},this._config.timeout)},v._addMessage=function(e){var t=""+this._nextMessageId();return e.uid=t,this._isBatching===!0?this._messages.push(e):this._send([e]),t},v.getClientId=function(){return this._clientID},v.isConnected=v._isConnected,v.isDisconnected=v._isDisconnected,v.configure=function(e){this._configure.call(this,e)},v.connect=v._connect,v.disconnect=function(){this._disconnect("client",!1)},v.ping=v._ping,v.startBatching=function(){this._isBatching=!0},v.stopBatching=function(e){e=e||!1,this._isBatching=!1,e===!0&&this.flush()},v.flush=function(){this._flush()},v.startAuthBatching=function(){this._isAuthBatching=!0},v.stopAuthBatching=function(){this._isAuthBatching=!1;var e=this._authChannels;this._authChannels={};var t=[];for(var n in e){var i=this._getSub(n);i&&t.push(n)}if(0!=t.length){var s={client:this.getClientId(),channels:t},r=this,o=function(e,n){if(e!==!0){var i=!1;r._isBatching||(r.startBatching(),i=!0);for(var s in t){var o=t[s],c=n[o];if(c)if(c.status&&200!==c.status)r._subscribeResponse({error:c.status,body:{channel:o}});else{var a={method:"subscribe",params:{channel:o,client:r.getClientId(),info:c.info,sign:c.sign}},u=r._recover(o);u===!0&&(a.params.recover=!0,a.params.last=r._getLastID(o)),r._addMessage(a)}else r._subscribeResponse({error:"channel not found in authorization response",advice:"fix",body:{channel:o}})}i&&r.stopBatching(!0)}else{r._debug("authorization request failed");for(var s in t){var o=t[s];r._subscribeResponse({error:"authorization request failed",advice:"fix",body:{channel:o}})}}},c=this._config.authTransport.toLowerCase();if("ajax"===c)this._ajax(this._config.authEndpoint,this._config.authParams,this._config.authHeaders,s,o);else{if("jsonp"!==c)throw"Unknown auth transport "+c;this._jsonp(this._config.authEndpoint,this._config.authParams,this._config.authHeaders,s,o)}}},v.subscribe=function(e,t){if(arguments.length<1)throw"Illegal arguments number: required 1, got "+arguments.length;if(!u(e))throw"Illegal argument type: channel must be a string";if(!this._config.resubscribe&&!this.isConnected())throw"Can not only subscribe in connected state when resubscribe option is off";var n=this._getSub(e);if(null!==n)return n._setEvents(t),n._isUnsubscribed()&&n.subscribe(),n;var i=new d(this,e,t);return this._subs[e]=i,i.subscribe(),i};var m=0,y=1,w=2,S=3,k=4;i(d,b);var C=d.prototype;C._initializePromise=function(){this._ready=!1;var e=this;this._promise=new p(function(t,n){e._resolve=function(n){e._ready=!0,t(n)},e._reject=function(t){e._ready=!0,n(t)}})},C._setEvents=function(e){if(e)if(h(e))this.on("message",e);else if(Object.prototype.toString.call(e)===Object.prototype.toString.call({})){var t=["message","join","leave","unsubscribe","subscribe","error"];for(var n in t){var i=t[n];i in e&&this.on(i,e[i])}}},C._isNew=function(){return this._status===m},C._isUnsubscribed=function(){return this._status===k},C._isSubscribing=function(){return this._status===y},C._isReady=function(){return this._status===w||this._status===S},C._isSuccess=function(){return this._status===w},C._isError=function(){return this._status===S},C._setNew=function(){this._status=m},C._setSubscribing=function(){this._ready===!0&&(this._initializePromise(),this._isResubscribe=!0),this._status=y},C._setSubscribeSuccess=function(e){if(this._status!=w){this._recovered=e,this._status=w;var t=this._getSubscribeSuccessContext(e);this.trigger("subscribe",[t]),this._resolve(t)}},C._setSubscribeError=function(e){if(this._status!=S){this._status=S,this._error=e;var t=this._getSubscribeErrorContext();this.trigger("error",[t]),this._reject(t)}},C._triggerUnsubscribe=function(){var e={channel:this.channel};this.trigger("unsubscribe",[e])},C._setUnsubscribed=function(){this._status!=k&&(this._status=k,this._triggerUnsubscribe())},C._getSubscribeSuccessContext=function(){return{channel:this.channel,isResubscribe:this._isResubscribe,recovered:this._recovered}},C._getSubscribeErrorContext=function(){var e=this._error;return e.channel=this.channel,e.isResubscribe=this._isResubscribe,e},C.ready=function(e,t){this._ready&&(this._isSuccess()?e(this._getSubscribeSuccessContext()):t(this._getSubscribeErrorContext()))},C.subscribe=function(){return this._status!=w?(this._centrifuge._subscribe(this),this):void 0},C.unsubscribe=function(){this._setUnsubscribed(),this._centrifuge._unsubscribe(this)},C.publish=function(e){var t=this;return new p(function(n,i){return t._isUnsubscribed()?void i(t._centrifuge._createErrorObject("subscription unsubscribed","fix")):void t._promise.then(function(){if(!t._centrifuge.isConnected())return void i(t._centrifuge._createErrorObject("disconnected","retry"));var s={method:"publish",params:{channel:t.channel,data:e}},r=t._centrifuge._addMessage(s);t._centrifuge._registerCall(r,n,i)},function(e){i(e)})})},C.presence=function(){var e=this;return new p(function(t,n){return e._isUnsubscribed()?void n(e._centrifuge._createErrorObject("subscription unsubscribed","fix")):void e._promise.then(function(){if(!e._centrifuge.isConnected())return void n(e._centrifuge._createErrorObject("disconnected","retry"));var i={method:"presence",params:{channel:e.channel}},s=e._centrifuge._addMessage(i);e._centrifuge._registerCall(s,t,n)},function(e){n(e)})})},C.history=function(){var e=this;return new p(function(t,n){return e._isUnsubscribed()?void n(e._centrifuge._createErrorObject("subscription unsubscribed","fix")):void e._promise.then(function(){if(!e._centrifuge.isConnected())return void n(e._centrifuge._createErrorObject("disconnected","retry"));var i={method:"history",params:{channel:e.channel}},s=e._centrifuge._addMessage(i);e._centrifuge._registerCall(s,t,n)},function(e){n(e)})})},t.exports=g}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"es6-promise":2,"wolfy87-eventemitter":3}]},{},[4])(4)});