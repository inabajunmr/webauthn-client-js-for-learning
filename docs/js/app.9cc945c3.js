(function(e){function t(t){for(var a,l,n=t[0],o=t[1],c=t[2],p=0,u=[];p<n.length;p++)l=n[p],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&u.push(i[l][0]),i[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,n=1;n<s.length;n++){var o=s[n];0!==i[o]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=s[0]))}return e}var a={},i={app:0},r=[];function l(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=e,l.c=a,l.d=function(e,t,s){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(s,a,function(t){return e[t]}.bind(null,a));return s},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/webauthn-viewer/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var d=o;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0fe7":function(e,t,s){"use strict";(function(e){s("99af"),s("fb6a"),s("b0c0"),s("d3b7"),s("25f0");t["a"]={data:function(){return{errorType:"",errorMessage:"",reqRpName:"Acme",reqRpid:window.location.hostname,reqRpIcon:"",reqUserId:this.generateRandomUserId(),reqUserName:"john.p.smith@example.com",reqUserIcon:"",reqUserDisplayName:"John P. Smith",reqPubKeyCredParams:[{type:"public-key",alg:-7}],reqauthenticatorSelectionAuthenticationAttachment:"",reqauthenticatorSelectionRequireResidentKey:null,reqauthenticatorSelectionResidentKey:"",reqauthenticatorSelectionUserVerification:"preferred",reqAttestation:"direct",reqTimeout:6e4,reqChallenge:this.generateChallenge(),reqExcludeCredentials:[],reqExtensions:'{ "credProps": true }',createResponse:{}}},computed:{buildCreateRequest:function(){var t={publicKey:{}};t.publicKey.rp={},t.publicKey.rp.name=this.reqRpName,t.publicKey.rp.id=this.reqRpid,t.publicKey.rp.icon=this.reqRpIcon,t.publicKey.user={},t.publicKey.user.id=e.from(this.reqUserId,"hex"),t.publicKey.user.name=this.reqUserName,t.publicKey.user.icon=this.reqUserIcon,t.publicKey.user.displayName=this.reqUserDisplayName,t.publicKey.pubKeyCredParams=this.reqPubKeyCredParams,t.publicKey.authenticatorSelection={},this.reqauthenticatorSelectionAuthenticationAttachment&&(t.publicKey.authenticatorSelection.authenticatorAttachment=this.reqauthenticatorSelectionAuthenticationAttachment),this.reqauthenticatorSelectionRequireResidentKey&&(t.publicKey.authenticatorSelection.requireResidentKey=this.reqauthenticatorSelectionRequireResidentKey),this.reqauthenticatorSelectionResidentKey&&(t.publicKey.authenticatorSelection.residentKey=this.reqauthenticatorSelectionResidentKey),this.reqauthenticatorSelectionUserVerification&&(t.publicKey.authenticatorSelection.userVerification=this.reqauthenticatorSelectionUserVerification),this.reqauthenticatorSelectionUserVerification&&(t.publicKey.authenticatorSelection.userVerification=this.reqauthenticatorSelectionUserVerification),t.publicKey.attestation=this.reqAttestation,t.publicKey.timeout=this.reqTimeout,t.publicKey.challenge=e.from(this.reqChallenge,"hex"),t.publicKey.excludeCredentials=[];for(var s=0;s<this.reqExcludeCredentials.length;s++){var a=!1,i=this.reqExcludeCredentials[s],r={};i.id&&(r.id=e.from(i.id,"hex"),a=!0),i.type&&(r.type=i.type,a=!0),a&&t.publicKey.excludeCredentials.push(r)}return 0!=this.reqExtensions.length&&(t.publicKey.extensions=JSON.parse(this.reqExtensions)),t},createResponseView:function(){var t={};if(t.getClientExtensionResults=this.createResponse.getClientExtensionResults,t.id=this.createResponse.id,t.type=this.createResponse.type,this.createResponse.response){t.getTransports=this.createResponse.response.getTransports;var a=new TextDecoder("utf-8");t.clientDataJSON=a.decode(this.createResponse.response.clientDataJSON);var i=s("8ddc"),r=s("26de"),l=i.decodeAllSync(new e(this.createResponse.response.attestationObject))[0];t.fmt=l.fmt,t.attStmt=l.attStmt;var n=l.authData,o=n.slice(0,32);n=n.slice(32),t.authData={},t.rpidHash=o.toString("hex");var c=n.slice(0,1);n=n.slice(1);var d=c[0];t.up=!!(1&d),t.uv=!!(4&d),t.be=!!(8&d),t.bs=!!(16&d),t.at=!!(64&d),t.ed=!!(128&d);var p=n.slice(0,4);if(n=n.slice(4),t.signCount=p.readUInt32BE(0),t.at){var u=n.slice(0,16).toString("hex");n=n.slice(16);var v="".concat(u.slice(0,8),"-").concat(u.slice(8,12),"-").concat(u.slice(12,16),"-").concat(u.slice(16,20),"-").concat(u.slice(20));t.aaguid=v;var m=n.slice(0,2);n=n.slice(2);var h=m.readUInt16BE(0),g=n.slice(0,h);n=n.slice(h),t.credentialId=g.toString("hex");var f=r.decodeOnlyFirst(n).byteLength,y=n.slice(0,f);n=n.slice(f),t.credentialPublicKey=y.toString("hex")}if(t.ed){var b=r.decodeOnlyFirst(n).byteLength;t.extensionsDataLength=b;var C=n.slice(0,b);n=n.slice(b),t.extensions=i.decodeAllSync(C)[0]}if(n.byteLength)throw new Error("Failed to decode authData! Leftover bytes been detected!")}return t}},methods:{create:function(){var e=this;this.errorType="",this.errorMessage="",this.createResponse={},console.log("Create Request",this.buildCreateRequest),navigator.credentials.create(this.buildCreateRequest).then((function(t){console.log("Create Response",t),e.createResponse=t,e.createResponse.getClientExtensionResults=t.getClientExtensionResults(),e.createResponse.response&&e.createResponse.response.getTransports?e.createResponse.response.getTransports=t.response.getTransports():e.createResponse.response.getTransports="getTransports() is undefined"})).catch((function(t){console.log("Create Error",t),e.errorType=t.name,e.errorMessage=t.message}))},generateRandomUserId:function(){return this.reqUserId=s("1c46").randomBytes(32).toString("hex"),this.reqUserId},generateChallenge:function(){return this.reqChallenge=s("1c46").randomBytes(32).toString("hex"),this.reqChallenge},addExcludeCredentials:function(){this.reqExcludeCredentials.push({transports:[]})},addPubKeyCredParam:function(){this.reqPubKeyCredParams.push({type:"public-key"})}}}}).call(this,s("b639").Buffer)},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},4549:function(e,t,s){"use strict";(function(e){s("a15b"),s("d81d"),s("fb6a"),s("ace4"),s("b0c0"),s("d3b7"),s("25f0"),s("5cc6"),s("9a8c"),s("a975"),s("735e"),s("c1ac"),s("d139"),s("3a7b"),s("d5d6"),s("82f8"),s("e91f"),s("60bd"),s("5f96"),s("3280"),s("3fcc"),s("ca91"),s("25a1"),s("cd26"),s("3c5d"),s("2954"),s("649e"),s("219c"),s("170b"),s("b39a"),s("72f7");t["a"]={data:function(){return{errorType:"",errorMessage:"",isConditionalUIEnabled:!1,reqRpid:window.location.hostname,reqAllowCredentials:[],reqTimeout:6e4,reqChallenge:this.generateChallenge(),reqUserVerification:"preferred",getResponse:{},abortController:new AbortController}},computed:{challengeForView:function(){return this.reqChallenge.toString("hex")},getResponseView:function(){var t={};if(t.id=this.getResponse.id,t.type=this.getResponse.type,this.getResponse.response){var a=new TextDecoder("utf-8");t.clientDataJSON=a.decode(this.getResponse.response.clientDataJSON);var i=s("26de"),r=e.from(this.getResponse.response.authenticatorData,"base64"),l=r.slice(0,32);r=r.slice(32),t.authData={},t.rpIdHash=l.toString("hex");var n=r.slice(0,1);r=r.slice(1);var o=n[0];if(t.up=!!(1&o),t.uv=!!(4&o),t.be=!!(8&o),t.bs=!!(16&o),t.at=!!(64&o),t.ed=!!(128&o),t.signCount=r[0]<<24|r[1]<<16|r[2]<<8|r[3],r=r.slice(4),t.ed){var c=i.decodeOnlyFirst(r).byteLength,d=r.slice(0,c);r=r.slice(c),t.coseExtensionsDataBuffer=d.toString("hex")}if(t.userHandle=Array.prototype.map.call(new Uint8Array(this.getResponse.response.userHandle),(function(e){return("00"+e.toString(16)).slice(-2)})).join(""),t.signature=Array.prototype.map.call(new Uint8Array(this.getResponse.response.signature),(function(e){return("00"+e.toString(16)).slice(-2)})).join(""),r.byteLength)throw new Error("Failed to decode authData! Leftover bytes been detected!")}return t}},watch:{isConditionalUIEnabled:function(e,t){var s=this;if(console.log(t+""+e),e){this.errorType="",this.errorMessage="",this.getResponse={};var a=this.buildGetRequest();a.mediation="conditional",a.signal=this.abortController.signal,console.log("Get Request for ConditionalUI",a),navigator.credentials.get(a).then((function(e){console.log("Get Response",e),s.getResponse=e})).catch((function(e){console.log("Get Error",e),s.errorType=e.name,s.errorMessage=e.message}))}else console.log("abort"),this.abortController.abort(),this.abortController=new AbortController}},methods:{buildGetRequest:function(){console.log("WOW");var t={publicKey:{}};this.reqRpid&&(t.publicKey.rpid=this.reqRpid),t.publicKey.allowCredentials=[];for(var s=0;s<this.reqAllowCredentials.length;s++){var a=!1,i=this.reqAllowCredentials[s],r={};i.id&&(r.id=e.from(i.id,"hex"),a=!0),i.type&&(r.type=i.type,a=!0),i.transports&&(r.transports=i.transports,a=!0),a&&t.publicKey.allowCredentials.push(r)}return this.reqUserVerification&&(t.publicKey.userVerification=this.reqUserVerification),t.publicKey.timeout=this.reqTimeout,t.publicKey.challenge=e.from(this.reqChallenge,"hex"),t},get:function(){var e=this;this.errorType="",this.errorMessage="",this.getResponse={},console.log("Get Request",this.buildGetRequest()),navigator.credentials.get(this.buildGetRequest()).then((function(t){console.log("Get Response",t),e.getResponse=t})).catch((function(t){console.log("Get Error",t),e.errorType=t.name,e.errorMessage=t.message}))},generateChallenge:function(){return this.reqChallenge=s("1c46").randomBytes(32).toString("hex"),this.reqChallenge},addAllowCredentials:function(){this.reqAllowCredentials.push({type:"public-key",transports:[]})}}}}).call(this,s("b639").Buffer)},5:function(e,t){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Main",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-tabs",[s("b-tab-item",{attrs:{label:"navigator.credentias.create()"}},[s("Create")],1),s("b-tab-item",{attrs:{label:"navigator.credentias.get()"}},[s("Get")],1)],1)],1)},n=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container is-size-7"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-third"},[s("h3",{staticClass:"title"},[e._v("Request")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label is-small"},[e._v("rp.name")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.reqRpName,expression:"reqRpName"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"rp.name"},domProps:{value:e.reqRpName},on:{input:function(t){t.target.composing||(e.reqRpName=t.target.value)}}})])])]),s("div",{staticClass:"column"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label is-small"},[e._v("rp.id")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.reqRpid,expression:"reqRpid"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"rp.id"},domProps:{value:e.reqRpid},on:{input:function(t){t.target.composing||(e.reqRpid=t.target.value)}}})])])])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label is-small"},[e._v("rp.icon")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.reqRpIcon,expression:"reqRpIcon"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"https://example/rp.png"},domProps:{value:e.reqRpIcon},on:{input:function(t){t.target.composing||(e.reqRpIcon=t.target.value)}}})])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label is-small"},[e._v("user.id(hex)")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.reqUserId,expression:"reqUserId"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"user.id"},domProps:{value:e.reqUserId},on:{input:function(t){t.target.composing||(e.reqUserId=t.target.value)}}})])]),s("div",{staticClass:"column"},[s("input",{staticClass:"button is-primary is-small",attrs:{type:"button",value:"Generate"},on:{click:function(t){return e.generateRandomUserId()}}})])])]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label is-small"},[e._v("user.name")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.reqUserName,expression:"reqUserName"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"user.name"},domProps:{value:e.reqUserName},on:{input:function(t){t.target.composing||(e.reqUserName=t.target.value)}}})])])]),s("div",{staticClass:"field"},[s("div",{staticClass:"column"},[s("label",{staticClass:"label is-small"},[e._v("user.displayName")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.reqUserDisplayName,expression:"reqUserDisplayName"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"user.displayName"},domProps:{value:e.reqUserDisplayName},on:{input:function(t){t.target.composing||(e.reqUserDisplayName=t.target.value)}}})])])])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label is-small"},[e._v("user.icon")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.reqUserIcon,expression:"reqUserIcon"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"https://example/rp.png"},domProps:{value:e.reqUserIcon},on:{input:function(t){t.target.composing||(e.reqUserIcon=t.target.value)}}})])]),s("label",{staticClass:"label is-small"},[e._v("pubKeyCredParams[]")]),e._l(e.reqPubKeyCredParams,(function(t){return s("div",{key:t.alg,staticClass:"field box"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("label",{staticClass:"label is-small"},[e._v(".type")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"pubKeyCredParam.type"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"public-key"},domProps:{value:t.type},on:{input:function(s){s.target.composing||e.$set(t,"type",s.target.value)}}})])]),s("div",{staticClass:"column"},[s("label",{staticClass:"label is-small"},[e._v(".alg")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.alg,expression:"pubKeyCredParam.alg"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"-7"},domProps:{value:t.alg},on:{input:function(s){s.target.composing||e.$set(t,"alg",s.target.value)}}})])])])])})),s("div",{staticClass:"field"},[s("input",{staticClass:"button is-primary is-small",attrs:{type:"button",value:"Add pubKeyCredParam"},on:{click:function(t){return e.addPubKeyCredParam()}}})]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label is-small"},[e._v("attestation")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.reqAttestation,expression:"reqAttestation"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"none or direct or indirect"},domProps:{value:e.reqAttestation},on:{input:function(t){t.target.composing||(e.reqAttestation=t.target.value)}}})])])]),s("div",{staticClass:"column"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label is-small"},[e._v("timeout")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.reqTimeout,expression:"reqTimeout"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"60000"},domProps:{value:e.reqTimeout},on:{input:function(t){t.target.composing||(e.reqTimeout=t.target.value)}}})])])])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label is-small"},[e._v("authenticatorSelection.authenticationAttachment")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.reqauthenticatorSelectionAuthenticationAttachment,expression:"reqauthenticatorSelectionAuthenticationAttachment"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"platform or cross-platform"},domProps:{value:e.reqauthenticatorSelectionAuthenticationAttachment},on:{input:function(t){t.target.composing||(e.reqauthenticatorSelectionAuthenticationAttachment=t.target.value)}}})])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label is-small"},[e._v("authenticatorSelection.requireResidentKey")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.reqauthenticatorSelectionRequireResidentKey,expression:"reqauthenticatorSelectionRequireResidentKey"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"true"},domProps:{value:e.reqauthenticatorSelectionRequireResidentKey},on:{input:function(t){t.target.composing||(e.reqauthenticatorSelectionRequireResidentKey=t.target.value)}}})])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label is-small"},[e._v("authenticatorSelection.residentKey")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.reqauthenticatorSelectionResidentKey,expression:"reqauthenticatorSelectionResidentKey"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"required or preferred or discouraged"},domProps:{value:e.reqauthenticatorSelectionResidentKey},on:{input:function(t){t.target.composing||(e.reqauthenticatorSelectionResidentKey=t.target.value)}}})])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label is-small"},[e._v("authenticatorSelection.userVerification")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.reqauthenticatorSelectionUserVerification,expression:"reqauthenticatorSelectionUserVerification"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"preferred"},domProps:{value:e.reqauthenticatorSelectionUserVerification},on:{input:function(t){t.target.composing||(e.reqauthenticatorSelectionUserVerification=t.target.value)}}})])]),s("label",{staticClass:"label is-small"},[e._v("excludeCredentials[]")]),e._l(e.reqExcludeCredentials,(function(t){return s("div",{key:t.id,staticClass:"field box"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("label",{staticClass:"label is-small"},[e._v(".type")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"excludeCredential.type"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"public-key"},domProps:{value:t.type},on:{input:function(s){s.target.composing||e.$set(t,"type",s.target.value)}}})])]),s("div",{staticClass:"column"},[s("label",{staticClass:"label is-small"},[e._v(".transports")]),s("div",{staticClass:"control",staticStyle:{"font-size":"0.75rem"}},[s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.transports,expression:"excludeCredential.transports"}],attrs:{type:"checkbox",value:"usb"},domProps:{checked:Array.isArray(t.transports)?e._i(t.transports,"usb")>-1:t.transports},on:{change:function(s){var a=t.transports,i=s.target,r=!!i.checked;if(Array.isArray(a)){var l="usb",n=e._i(a,l);i.checked?n<0&&e.$set(t,"transports",a.concat([l])):n>-1&&e.$set(t,"transports",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(t,"transports",r)}}}),e._v(" usb ")]),s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.transports,expression:"excludeCredential.transports"}],attrs:{type:"checkbox",value:"ble"},domProps:{checked:Array.isArray(t.transports)?e._i(t.transports,"ble")>-1:t.transports},on:{change:function(s){var a=t.transports,i=s.target,r=!!i.checked;if(Array.isArray(a)){var l="ble",n=e._i(a,l);i.checked?n<0&&e.$set(t,"transports",a.concat([l])):n>-1&&e.$set(t,"transports",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(t,"transports",r)}}}),e._v(" ble ")]),s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.transports,expression:"excludeCredential.transports"}],attrs:{type:"checkbox",value:"nfc"},domProps:{checked:Array.isArray(t.transports)?e._i(t.transports,"nfc")>-1:t.transports},on:{change:function(s){var a=t.transports,i=s.target,r=!!i.checked;if(Array.isArray(a)){var l="nfc",n=e._i(a,l);i.checked?n<0&&e.$set(t,"transports",a.concat([l])):n>-1&&e.$set(t,"transports",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(t,"transports",r)}}}),e._v(" nfc ")]),s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.transports,expression:"excludeCredential.transports"}],attrs:{type:"checkbox",value:"internal"},domProps:{checked:Array.isArray(t.transports)?e._i(t.transports,"internal")>-1:t.transports},on:{change:function(s){var a=t.transports,i=s.target,r=!!i.checked;if(Array.isArray(a)){var l="internal",n=e._i(a,l);i.checked?n<0&&e.$set(t,"transports",a.concat([l])):n>-1&&e.$set(t,"transports",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(t,"transports",r)}}}),e._v(" internal ")])])])]),s("label",{staticClass:"label is-small"},[e._v(".id(hex)")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"excludeCredential.id"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"id"},domProps:{value:t.id},on:{input:function(s){s.target.composing||e.$set(t,"id",s.target.value)}}})])])})),s("div",{staticClass:"field"},[s("input",{staticClass:"button is-primary is-small",attrs:{type:"button",value:"Add excludeCredentials"},on:{click:function(t){return e.addExcludeCredentials()}}})]),s("div",{staticClass:"field"},[s("label",{staticClass:"label is-small"},[e._v("challenge(hex)")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:this.reqChallenge,expression:"this.reqChallenge"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"challenge"},domProps:{value:this.reqChallenge},on:{input:function(t){t.target.composing||e.$set(this,"reqChallenge",t.target.value)}}})])]),s("div",{staticClass:"column"},[s("input",{staticClass:"button is-primary is-small",attrs:{type:"button",value:"Generate"},on:{click:function(t){return e.generateChallenge()}}})])])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label is-small"},[e._v("extensions")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.reqExtensions,expression:"reqExtensions"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"extensions"},domProps:{value:e.reqExtensions},on:{input:function(t){t.target.composing||(e.reqExtensions=t.target.value)}}})])])])]),s("input",{staticClass:"button is-primary is-large",attrs:{type:"button",value:"navigator.credentials.create()"},on:{click:function(t){return e.create()}}})],2),s("div",{staticClass:"column"},[s("h3",{staticClass:"title"},[e._v("Response")]),s("table",{staticClass:"table is-responsive",staticStyle:{"table-layout":"fixed",width:"100%"}},[s("tbody",[s("tr",[s("th",[e._v("Error")]),s("td",{staticClass:"has-text-danger",staticStyle:{"word-wrap":"break-word"}},[e._v(" "+e._s(e.errorType)+" ")])]),s("tr",[s("th",[e._v("Error message")]),s("td",{staticClass:"has-text-danger",staticStyle:{"word-wrap":"break-word"}},[e._v(" "+e._s(e.errorMessage)+" ")])]),e._m(0),s("tr",[s("th",{staticStyle:{"padding-left":"20px"}},[e._v(".clientDataJSON")]),s("td",{staticStyle:{"word-wrap":"break-word"}},[e._v(" "+e._s(e.createResponseView.clientDataJSON)+" ")])]),e._m(1),e._m(2),s("tr",[s("th",{staticStyle:{"padding-left":"60px"}},[e._v(".rpidHash")]),s("td",{staticStyle:{"word-wrap":"break-word"}},[e._v(" "+e._s(e.createResponseView.rpidHash)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"60px"}},[e._v(".flag.up")]),s("td",[e._v(" "+e._s(e.createResponseView.up)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"60px"}},[e._v(".flag.uv")]),s("td",[e._v(" "+e._s(e.createResponseView.uv)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"60px"}},[e._v(".flag.be")]),s("td",[e._v(" "+e._s(e.createResponseView.be)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"60px"}},[e._v(".flag.bs")]),s("td",[e._v(" "+e._s(e.createResponseView.bs)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"60px"}},[e._v(".flag.at")]),s("td",[e._v(" "+e._s(e.createResponseView.at)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"60px"}},[e._v(".flag.ed")]),s("td",[e._v(" "+e._s(e.createResponseView.ed)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"60px"}},[e._v(".signCount")]),s("td",[e._v(" "+e._s(e.createResponseView.signCount)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"60px"}},[e._v(".aaguid")]),s("td",[e._v(" "+e._s(e.createResponseView.aaguid)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"60px"}},[e._v(".credentialId")]),s("td",{staticStyle:{"word-wrap":"break-word"}},[e._v(" "+e._s(e.createResponseView.credentialId)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"60px"}},[e._v(".credentialPublicKey")]),s("td",{staticStyle:{"word-wrap":"break-word"}},[e._v(" "+e._s(e.createResponseView.credentialPublicKey)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"60px"}},[e._v(".extension")]),s("td",{staticStyle:{"word-wrap":"break-word"}},[e._v(" "+e._s(e.createResponseView.extensions)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"60px"}},[e._v(".extension(length)")]),s("td",{staticStyle:{"word-wrap":"break-word"}},[e._v(" "+e._s(e.createResponseView.extensionsDataLength)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"40px"}},[e._v(".fmt")]),s("td",[e._v(e._s(e.createResponseView.fmt))])]),s("tr",[s("th",{staticStyle:{"padding-left":"40px"}},[e._v(".attStmt")]),s("td",[e._v(" "+e._s(e.createResponseView.attStmt)+" ")])]),s("tr",[s("th",[e._v("getTransports")]),s("td",{staticStyle:{"word-wrap":"break-word"}},[e._v(" "+e._s(e.createResponseView.getTransports)+" ")])]),s("tr",[s("th",[e._v(".id")]),s("td",{staticStyle:{"word-wrap":"break-word"}},[e._v(" "+e._s(e.createResponseView.id)+" ")])]),s("tr",[s("th",[e._v(".type")]),s("td",{staticStyle:{"word-wrap":"break-word"}},[e._v(" "+e._s(e.createResponseView.type)+" ")])]),s("tr",[s("th",[e._v("getClientExtensionResults")]),s("td",{staticStyle:{"word-wrap":"break-word"}},[e._v(" "+e._s(e.createResponseView.getClientExtensionResults)+" ")])])])])])])])},c=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",[s("th",[e._v(".response")]),s("td")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",[s("th",{staticStyle:{"padding-left":"20px"}},[e._v(".attestationObject")]),s("td")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",[s("th",{staticStyle:{"padding-left":"40px"}},[e._v(".authData")]),s("td")])}],d=s("0fe7"),p=d["a"],u=s("2877"),v=Object(u["a"])(p,o,c,!1,null,"1c4ad41d",null),m=v.exports,h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container is-size-7"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-third"},[s("h3",{staticClass:"title"},[e._v("Request")]),s("div",{staticClass:"field"},[s("label",{staticClass:"label is-small"},[e._v("rpid")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.reqRpid,expression:"reqRpid"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"rp.id"},domProps:{value:e.reqRpid},on:{input:function(t){t.target.composing||(e.reqRpid=t.target.value)}}})])]),s("label",{staticClass:"label is-small"},[e._v("allowCredenials[]")]),e._l(e.reqAllowCredentials,(function(t){return s("div",{key:t.alg,staticClass:"field box"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("label",{staticClass:"label is-small"},[e._v(".type")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"allowCredential.type"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"public-key"},domProps:{value:t.type},on:{input:function(s){s.target.composing||e.$set(t,"type",s.target.value)}}})])]),s("div",{staticClass:"column"},[s("label",{staticClass:"label is-small"},[e._v(".transports")]),s("div",{staticClass:"control",staticStyle:{"font-size":"0.75rem"}},[s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.transports,expression:"allowCredential.transports"}],attrs:{type:"checkbox",value:"usb"},domProps:{checked:Array.isArray(t.transports)?e._i(t.transports,"usb")>-1:t.transports},on:{change:function(s){var a=t.transports,i=s.target,r=!!i.checked;if(Array.isArray(a)){var l="usb",n=e._i(a,l);i.checked?n<0&&e.$set(t,"transports",a.concat([l])):n>-1&&e.$set(t,"transports",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(t,"transports",r)}}}),e._v(" usb ")]),s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.transports,expression:"allowCredential.transports"}],attrs:{type:"checkbox",value:"ble"},domProps:{checked:Array.isArray(t.transports)?e._i(t.transports,"ble")>-1:t.transports},on:{change:function(s){var a=t.transports,i=s.target,r=!!i.checked;if(Array.isArray(a)){var l="ble",n=e._i(a,l);i.checked?n<0&&e.$set(t,"transports",a.concat([l])):n>-1&&e.$set(t,"transports",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(t,"transports",r)}}}),e._v(" ble ")]),s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.transports,expression:"allowCredential.transports"}],attrs:{type:"checkbox",value:"nfc"},domProps:{checked:Array.isArray(t.transports)?e._i(t.transports,"nfc")>-1:t.transports},on:{change:function(s){var a=t.transports,i=s.target,r=!!i.checked;if(Array.isArray(a)){var l="nfc",n=e._i(a,l);i.checked?n<0&&e.$set(t,"transports",a.concat([l])):n>-1&&e.$set(t,"transports",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(t,"transports",r)}}}),e._v(" nfc ")]),s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.transports,expression:"allowCredential.transports"}],attrs:{type:"checkbox",value:"internal"},domProps:{checked:Array.isArray(t.transports)?e._i(t.transports,"internal")>-1:t.transports},on:{change:function(s){var a=t.transports,i=s.target,r=!!i.checked;if(Array.isArray(a)){var l="internal",n=e._i(a,l);i.checked?n<0&&e.$set(t,"transports",a.concat([l])):n>-1&&e.$set(t,"transports",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(t,"transports",r)}}}),e._v(" internal ")])])])]),s("label",{staticClass:"label is-small"},[e._v(".id(hex)")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"allowCredential.id"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"id"},domProps:{value:t.id},on:{input:function(s){s.target.composing||e.$set(t,"id",s.target.value)}}})])])})),s("div",{staticClass:"field"},[s("input",{staticClass:"button is-primary is-small",attrs:{type:"button",value:"Add allowCredentials"},on:{click:function(t){return e.addAllowCredentials()}}})]),s("div",{staticClass:"field"},[s("label",{staticClass:"label is-small"},[e._v("timeout")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.reqTimeout,expression:"reqTimeout"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"60000"},domProps:{value:e.reqTimeout},on:{input:function(t){t.target.composing||(e.reqTimeout=t.target.value)}}})])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label is-small"},[e._v("userVerification")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.reqUserVerification,expression:"reqUserVerification"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"preferred"},domProps:{value:e.reqUserVerification},on:{input:function(t){t.target.composing||(e.reqUserVerification=t.target.value)}}})])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label is-small"},[e._v("challenge(hex)")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.challengeForView,expression:"challengeForView"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"challenge"},domProps:{value:e.challengeForView},on:{input:function(t){t.target.composing||(e.challengeForView=t.target.value)}}})])]),s("div",{staticClass:"column"},[s("input",{staticClass:"button is-primary is-small",attrs:{type:"button",value:"Generate"},on:{click:function(t){return e.generateChallenge()}}})])])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label is-small"},[e._v("Autofill")]),s("div",{staticClass:"columns"},[e._m(0),s("div",{staticClass:"column"},[s("b-field",[s("b-switch",{on:{click:function(t){return e.conditionalUI()}},model:{value:e.isConditionalUIEnabled,callback:function(t){e.isConditionalUIEnabled=t},expression:"isConditionalUIEnabled"}},[e._v(" Conditional UI ")])],1)],1)])]),s("input",{staticClass:"button is-primary is-large",attrs:{type:"button",value:"navigator.credentials.get()"},on:{click:function(t){return e.get()}}})],2),s("div",{staticClass:"column"},[s("h3",{staticClass:"title"},[e._v("Response")]),s("table",{staticClass:"table is-responsive",staticStyle:{"table-layout":"fixed",width:"100%"}},[s("tbody",[s("tr",[s("th",[e._v("Error")]),s("td",{staticClass:"has-text-danger",staticStyle:{"word-wrap":"break-word"}},[e._v(" "+e._s(e.errorType)+" ")])]),s("tr",[s("th",[e._v("Error message")]),s("td",{staticClass:"has-text-danger",staticStyle:{"word-wrap":"break-word"}},[e._v(" "+e._s(e.errorMessage)+" ")])]),s("tr",[s("th",[e._v(".id")]),s("td",{staticStyle:{"word-wrap":"break-word"}},[e._v(" "+e._s(e.getResponseView.id)+" ")])]),e._m(1),s("tr",[s("th",{staticStyle:{"padding-left":"20px"}},[e._v(".clientDataJSON")]),s("td",{staticStyle:{"word-wrap":"break-word"}},[e._v(" "+e._s(e.getResponseView.clientDataJSON)+" ")])]),e._m(2),s("tr",[s("th",{staticStyle:{"padding-left":"40px"}},[e._v(".rpidHash")]),s("td",{staticStyle:{"word-wrap":"break-word"}},[e._v(" "+e._s(e.getResponseView.rpIdHash)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"40px"}},[e._v(".flag.up")]),s("td",[e._v(" "+e._s(e.getResponseView.up)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"40px"}},[e._v(".flag.uv")]),s("td",[e._v(" "+e._s(e.getResponseView.uv)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"40px"}},[e._v(".flag.be")]),s("td",[e._v(" "+e._s(e.getResponseView.be)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"40px"}},[e._v(".flag.bs")]),s("td",[e._v(" "+e._s(e.getResponseView.bs)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"40px"}},[e._v(".flag.at")]),s("td",[e._v(" "+e._s(e.getResponseView.at)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"40px"}},[e._v(".flag.ed")]),s("td",[e._v(" "+e._s(e.getResponseView.ed)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"40px"}},[e._v(".signCount")]),s("td",[e._v(" "+e._s(e.getResponseView.signCount)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"20px"}},[e._v(".userHandle")]),s("td",{staticStyle:{"word-wrap":"break-word"}},[e._v(" "+e._s(e.getResponseView.userHandle)+" ")])]),s("tr",[s("th",{staticStyle:{"padding-left":"20px"}},[e._v(".signature")]),s("td",{staticStyle:{"word-wrap":"break-word"}},[e._v(" "+e._s(e.getResponseView.signature)+" ")])])])])])])])},g=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"column"},[s("div",{staticClass:"control"},[s("input",{staticClass:"input is-small",attrs:{autocomplete:"username webauthn",type:"text"}})])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",[s("th",[e._v(".response")]),s("td")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",[s("th",{staticStyle:{"padding-left":"20px"}},[e._v(".authData")]),s("td")])}],f=s("4549"),y=f["a"],b=Object(u["a"])(y,h,g,!1,null,"4da98ce5",null),C=b.exports,_={name:"app",components:{Create:m,Get:C}},x=_,w=Object(u["a"])(x,l,n,!1,null,"6228ec47",null),q=w.exports,R={name:"app",components:{Main:q}},S=R,k=Object(u["a"])(S,i,r,!1,null,null,null),A=k.exports,N=s("289d");s("5abe");a["a"].config.productionTip=!1,a["a"].use(N["a"]),new a["a"]({render:function(e){return e(A)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){}});
//# sourceMappingURL=app.9cc945c3.js.map