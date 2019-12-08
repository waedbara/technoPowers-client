if (self.CavalryLogger) { CavalryLogger.start_js(["IKQ2w"]); }

__d("BlueBarFocusListener",["CSS","Deferred","Event","TimeSlice","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g="f_key",h="f_click",i=null,j=function(){i=null};function k(a){b("CSS").removeClass(a,g),b("CSS").removeClass(a,h)}var l=b("TimeSlice").guard(function(a){i&&i.reject(),i=new(b("Deferred"))(),b("promiseDone")(i.getPromise().then(function(c){k(a),b("CSS").addClass(a,c)}),j,j)},"BlueBarFocusListener focusIn",{propagationType:b("TimeSlice").PropagationType.ORPHAN});function m(){i&&i.resolve(g)}function n(a){i&&i.reject(),b("CSS").removeClass(a,g),b("CSS").addClass(a,h)}function o(a){return function(b){a(b.getTarget())}}a={listen:function(a){if(!a)return;b("Event").listen(a,"focusout",o(k));b("Event").listen(a,"focusin",o(l));b("Event").listen(a,"click",o(n));b("Event").listen(a,"keyup",m)}};e.exports=a}),null);
__d("LoggedInAccountSwitcherTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:LoggedInAccountSwitcherLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:LoggedInAccountSwitcherLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:LoggedInAccountSwitcherLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setBadgeHasCount=function(a){this.$1.badge_has_count=a;return this};c.setBadgeShown=function(a){this.$1.badge_shown=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setSurface=function(a){this.$1.surface=a;return this};c.setUsersCount=function(a){this.$1.users_count=a;return this};c.setVC=function(a){this.$1.vc=a;return this};return a}();c={badge_has_count:!0,badge_shown:!0,event:!0,surface:!0,users_count:!0,vc:!0};e.exports=a}),null);
__d("XLoggedInAccountSwitcherBlueBarBadgeController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/logged_in_account_switcher/badge/",{})}),null);
__d("XLoggedInAccountSwitcherBlueBarContentController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/logged_in_account_switcher/content/",{})}),null);
__d("XLoginAccountSelectorRemoveAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/login/device-based/async/remove/",{cuid:{type:"String"},flow:{type:"Enum",enumType:1}})}),null);
__d("LoggedInAccountSwitcher",["csx","cx","Arbiter","AsyncRequest","CSS","DOM","DOMQuery","Event","LoggedInAccountSwitcherTypedLogger","ServiceWorkerLoginAndLogout","XLoggedInAccountSwitcherBlueBarBadgeController","XLoggedInAccountSwitcherBlueBarContentController","XLoginAccountSelectorRemoveAsyncController","setImmediate"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i="logged_in_account_switcher:remove_account",j,k,l,m,n,o;({});var p={shown:!1,has_count:!1};a={initBlueBarSwitcher:function(a,c,d,e,f){k=a,m=c,n=d,o=e,this._initDialog(a,d),this._mousemoveListener=b("Event").listen(k,"mousemove",this._onBlueBarMouseMove.bind(this)),f||b("setImmediate")(this._loadBadge)},_loadBadge:function(){var a=b("XLoggedInAccountSwitcherBlueBarBadgeController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(a).setMethod("POST").setRelativeTo(k).send()},_onBlueBarMouseMove:function(){this._mousemoveListener.remove(),this._loadDialogContentIfNeeded()},_loadDialogContentIfNeeded:function(){if(!l){l=!0;var a=b("XLoggedInAccountSwitcherBlueBarContentController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(a).setMethod("POST").setRelativeTo(k).send()}},onBlueBarSwitcherLoad:function(){b("setImmediate")(function(){n.setInnerContent(m.children[0]),b("DOM").empty(m)})},initTile:function(a){a=b("DOMQuery").find(a,"._62l4");a&&this.initElementContainingForm(a,"switch_account")},initRemoveAccountElement:function(a,c,d,e){var f=this,g=b("Arbiter").subscribe(i,function(a,e){e.cuid===d&&(b("DOM").remove(c),g.unsubscribe())});b("Event").listen(a,"click",function(a){a.stopPropagation();j||(j=!0,f._removeUserFromAccountSwitcher(d,e));return!1})},initElementContainingForm:function(a,c){var d=this;b("Event").listen(a,"click",function(e){e.stopPropagation();e.preventDefault();if(!j){e=b("DOMQuery").find(a,"form");e&&(d._logEvent(c,"bluebar"),j=!0,b("Event").fire(e,"submit"),e.submit(),b("ServiceWorkerLoginAndLogout").logout())}})},_initDialog:function(a,c){var d=this;c.subscribe("hide",function(){b("CSS").removeClass(k,"_1dqw"),d._logEvent("close_bluebar_dialog","bluebar"),d._clearBadge()});c.subscribe("show",function(){b("CSS").addClass(k,"_1dqw"),d._clearBadge(),d._hideNux()});b("Event").listen(a,"click",function(){d._logEvent("open_bluebar_dialog","bluebar"),d._loadDialogContentIfNeeded(),c.show()})},_hideNux:function(){o!=null&&o.hide()},_clearBadge:function(){var a=b("DOMQuery").scry(k,"._1dqx")[0];a!=null&&b("DOM").empty(a);p={shown:!1,has_count:!1}},_logEvent:function(a,c){var d=new(b("LoggedInAccountSwitcherTypedLogger"))();c==="bluebar"&&d.setBadgeShown(p.shown);d.setEvent(a).setSurface(c).log()},_removeUserFromAccountSwitcher:function(a,c){this._logEvent("remove_account",c);c=b("XLoginAccountSelectorRemoveAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(c).setData({cuid:a,flow:"logged_in_account_switcher"}).setMethod("POST").setHandler(function(){j=!1}).send();b("Arbiter").inform(i,{cuid:a})}};e.exports=a}),null);
__d("NotificationComponentsBootloader",["Promise","JSResource"],(function(a,b,c,d,e,f){"use strict";var g=[(c=b("JSResource"))("NotificationJewelList.react").__setRef("NotificationComponentsBootloader"),c("NotificationAsyncWrapper").__setRef("NotificationComponentsBootloader"),c("NotificationSeenState").__setRef("NotificationComponentsBootloader"),c("NotificationStore").__setRef("NotificationComponentsBootloader"),c("NotificationUpdates").__setRef("NotificationComponentsBootloader"),c("NotificationJewelController").__setRef("NotificationComponentsBootloader")];function a(a){var c=a===!0?[b("JSResource")("BizNotificationJewelBodyContainer.react").__setRef("NotificationComponentsBootloader")]:[b("JSResource")("NotificationList.react").__setRef("NotificationComponentsBootloader")];return new(b("Promise"))(function(a){b("JSResource").loadAll(c.concat(g),function(b,c,d){a([b,c,d])})})}e.exports={load:a}}),null);
__d("NotificationJewelPerformanceTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:NotificationJewelPerformanceLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:NotificationJewelPerformanceLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:NotificationJewelPerformanceLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setBadgeCurrentCount=function(a){this.$1.badge_current_count=a;return this};c.setBadgeInitialCount=function(a){this.$1.badge_initial_count=a;return this};c.setClientSessionID=function(a){this.$1.client_session_id=a;return this};c.setClientTimestamp=function(a){this.$1.client_timestamp=a;return this};c.setEagerLoadTriggerAndDelay=function(a){this.$1.eager_load_trigger_and_delay=a;return this};c.setEventName=function(a){this.$1.event_name=a;return this};c.setJewelName=function(a){this.$1.jewel_name=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={badge_current_count:!0,badge_initial_count:!0,client_session_id:!0,client_timestamp:!0,eager_load_trigger_and_delay:!0,event_name:!0,jewel_name:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("JewelLogger",["BanzaiLooper","NotificationJewelPerformanceTypedLogger","NotificationListConfig","QuickPerformanceLogger","gkx","performanceNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("BanzaiLooper").labelBinaryClassificationExample,i=b("NotificationListConfig").sessionID,j=b("gkx")("678513"),k=!1,l=function(b){__p&&__p();babelHelpers.inheritsLoose(a,b);function a(c){var d;d=b.call(this)||this;a.$JewelTypedLoggerWithSession1[c]||(a.$JewelTypedLoggerWithSession1[c]={});d.$JewelTypedLoggerWithSession2=c;return d}var c=a.prototype;c.setEventName=function(a){this.$JewelTypedLoggerWithSession3=a;return b.prototype.setEventName.call(this,a)};c.log=function(){a.$JewelTypedLoggerWithSession1[this.$JewelTypedLoggerWithSession2][this.$JewelTypedLoggerWithSession3]||(a.$JewelTypedLoggerWithSession1[this.$JewelTypedLoggerWithSession2][this.$JewelTypedLoggerWithSession3]=!0,this.setClientSessionID(i),this.setJewelName(this.$JewelTypedLoggerWithSession2),b.prototype.log.call(this))};return a}(b("NotificationJewelPerformanceTypedLogger"));l.$JewelTypedLoggerWithSession1={};function m(a){a.jewelName==="notifications"&&a.eventName==="list_populated"&&q(a.timestamp),new l(a.jewelName).setEventName(a.eventName).setClientTimestamp(a.timestamp).log()}function n(a){var b=a.trigger,c=a.eagerLoadDelayInMs,d=babelHelpers.objectWithoutPropertiesLoose(a,["trigger","eagerLoadDelayInMs"]);b=b+":"+c;new l(a.jewelName).setEventName(d.eventName).setClientTimestamp(d.timestamp).setEagerLoadTriggerAndDelay(b).log()}function o(a){j&&!k&&(b("QuickPerformanceLogger").markerStart(655584,0,a),k=!0)}function p(a){j&&k&&b("QuickPerformanceLogger").annotateMarkerIntArray(655584,"JEWEL_CLICK_COUNT",[a])}function q(a){j&&k&&(b("QuickPerformanceLogger").markerEnd(655584,2,0,a),k=!1)}function r(a){j&&k&&(b("QuickPerformanceLogger").markerEnd(655584,4,0,a),k=!1)}function s(a){j&&k&&(b("QuickPerformanceLogger").markerEnd(655584,3,0,a),k=!1)}a={logDataEagerLoad:function(a){a.eventName==="data_eager_load_trigger"?n(a):m(a)},logJsBootload:function(a){a.eventName==="js_bootload_trigger"?n(a):m(a)},logJewelCancel:function(){r((g||(g=b("performanceNow")))())},logJewelFail:function(){s((g||(g=b("performanceNow")))())},logJewelClick:function(a){a.jewelName==="notifications"&&(o(a.timestamp),p(a.clickCount)),a.clickCount===1&&(new l(a.jewelName).setEventName("first_jewel_click").setClientTimestamp(a.timestamp).setBadgeInitialCount(a.badgeInitialCount).setBadgeCurrentCount(a.badgeCurrentCount).log(),a.jewelName==="notifications"&&h({trace:i,loopName:"notifications_jewel_click",label:"positive"}))},logJewelInitialize:function(a){new l(a.jewelName).setEventName("jewel_initialize").setClientTimestamp(a.timestamp).setBadgeInitialCount(a.badgeInitialCount).log(),a.jewelName==="notifications"&&h({trace:i,loopName:"notifications_jewel_click",label:"tentatively_negative"})},logJewelListComponentEvent:m};e.exports=a}),null);
__d("RangedCallbackManager",["CallbackManagerController","arrayStableSort","createObjectFrom"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c,d){this.$1=[],this.$2=!1,this.$3=!1,this.$4={},this.$5=new(b("CallbackManagerController"))(this.$6.bind(this)),this.$7=a,this.$8=c,this.$9=d}var c=a.prototype;c.executeOrEnqueue=function(a,b,c,d,e){return this.$5.executeOrEnqueue({start:a,limit:b},c,{strict:!!d,skipOnStrictHandler:e})};c.unsubscribe=function(a){this.$5.unsubscribe(a)};c.getUnavailableResources=function(a){__p&&__p();a=this.$5.getRequest(a);var b=[];if(a&&!this.$2){var c=a.request;a=this.$10(a.options);c=c.start+c.limit;for(var a=a.length;a<c;a++)b.push(a)}return b};c.addResources=function(a){var b=this;a.forEach(function(a){b.$4[a]||(b.$4[a]=!0,b.$1.push(a),b.$3=null)});this.resortResources();this.$5.runPossibleCallbacks()};c.addResourcesWithoutSorting=function(a,c){var d=this.$1.slice(0,c);d=d.concat(a);d=d.concat(this.$1.slice(c));this.$1=d;Object.assign(this.$4,b("createObjectFrom")(a,!0));this.$3=null;this.$5.runPossibleCallbacks()};c.removeResources=function(a){var b=this;a.forEach(function(a){if(b.$4[a]){b.$4[a]=!1;a=b.$1.indexOf(a);a!=-1&&b.$1.splice(a,1)}})};c.removeAllResources=function(){this.$1=[],this.$4={}};c.resortResources=function(){var a=this;this.$1=b("arrayStableSort")(this.$1,function(b,c){return a.$8(a.$7(b),a.$7(c))})};c.setReachedEndOfArray=function(){this.$2||(this.$2=!0,this.$3=null,this.$5.runPossibleCallbacks())};c.hasReachedEndOfArray=function(){return this.$2};c.forceRunCallbacks=function(){this.$5.runPossibleCallbacks({force:!0})};c.setError=function(a){this.$3!==a&&(this.$3=a,this.$5.runPossibleCallbacks())};c.getError=function(a,b,c){c=this.$10({strict:c});return a+b>c.length?this.$3:null};c.hasResource=function(a){return this.$4[a]};c.getResourceAtIndex=function(a){return this.$1[a]};c.getAllResources=function(){return this.$1.concat()};c.getCurrentArraySize=function(a){return this.$10(a).length};c.$10=function(a){var b=this.$1;if(a&&a.strict){a=a.skipOnStrictHandler||this.$9;a&&(b=b.filter(a))}return b};c.$6=function(a,b){var c=this.$10(b),d=a.start;a=a.start+a.limit;b=!!(b&&b.force);if(!b&&!this.$2&&!this.$3&&a>c.length)return!1;else{b=c.slice(d,a);d=a>c.length?this.$3:null;return[b,d]}};c.getElementsUntil=function(a){var b=[];for(var c=0;c<this.$1.length;c++){var d=this.$7(this.$1[c]);if(this.$8(d,a)>0)break;b.push(this.$1[c])}return b};return a}();e.exports=a}),null);
__d("NotificationEndpointState",["BusinessUserConf","KeyedCallbackManager","RangedCallbackManager","flatMapArray","objectValues","stableStringify"],(function(a,b,c,d,e,f){__p&&__p();var g={AdsUnifiedNavNotificationsPayloadPagelet:"AdsUnifiedNavNotificationsPayloadPagelet",BusinessManagerNotificationsPayloadPagelet:"BusinessManagerNotificationsPayloadPagelet",WebNotificationsPayloadPagelet:"WebNotificationsPayloadPagelet","/notifications/client/ads_unified_nav/":"AdsUnifiedNavNotificationsPayloadPagelet","/notifications/client/business_manager/":"BusinessManagerNotificationsPayloadPagelet","/ajax/notifications/client/get.php":b("BusinessUserConf").businessUserID?"BusinessManagerNotificationsPayloadPagelet":"WebNotificationsPayloadPagelet"};a=function(){"use strict";__p&&__p();a.getInstance=function(b){var c=b.classification!=null?b.classification:"_",d=b.readness!=null?b.readness:"_";c="(c)"+c+"(s)"+d;d=a.$1[b.endpointControllerName];d==null&&(a.$1[b.endpointControllerName]=d={});d[c]==null&&(d[c]=new a(b));return d[c]};a.getAllInstances=function(c){c!=null?c=[c]:c=Object.keys(a.$1);return b("flatMapArray")(c,function(c){c=a.$1[c];if(c==null)return[];else return b("objectValues")(c)})};function a(a){__p&&__p();var c=a.businessUserID,d=a.classification,e=a.endpointControllerName;a=a.readness;this.notifications=new(b("KeyedCallbackManager"))();this.businessUserID=c!=null?c:b("BusinessUserConf").businessUserID;this.classification=d;this.endpointControllerName=e;this.readness=a;c=function(a){a=this.notifications.getResource(a);return a.creation_time};this.order=new(b("RangedCallbackManager"))(c.bind(this),function(a,b){return b-a});this.graphQLPageInfo=null}var c=a.prototype;c.getConfig=function(){return{businessUserID:this.businessUserID,classification:this.classification,endpointControllerName:this.endpointControllerName,readness:this.readness}};c.getHash=function(){return b("stableStringify")(this.getConfig())};c.getRequestParams=function(a){a=Math.max(0,a-this.order.getAllResources().length);return{businessUserID:this.businessUserID,classification:this.classification!=null?this.classification.toLowerCase():void 0,cursor:this.graphQLPageInfo&&this.graphQLPageInfo.end_cursor,filter:this.readness==null?void 0:this.readness==="SEEN_AND_READ"?"read":"unread",readness:this.readness,length:a}};c.getStreamingTransportPageletName=function(){return g[this.endpointControllerName]||this.endpointControllerName};return a}();a.$1={};e.exports=a}),null);
__d("performanceNowNoFallback",["performance"],(function(a,b,c,d,e,f){var g;e.exports=(g||(g=b("performance"))).now?function(){return(g||(g=b("performance"))).now()}:null}),null);
__d("NotificationEagerLoader",["invariant","Promise","Arbiter","AsyncRequest","BigPipe","JewelLogger","NotificationComponentsBootloader","NotificationDataFetchConfig","NotificationEndpointState","NotificationListConfig","once","performanceAbsoluteNow","performanceNowNoFallback"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("JewelLogger").logDataEagerLoad,j=b("JewelLogger").logJsBootload,k=b("NotificationDataFetchConfig").dataEagerFetchTrigger,l=b("NotificationListConfig").jsBootloadTrigger,m=b("NotificationListConfig").numNotificationsPerPage;m=k!=="none"?m:0;var n={hasData:m>0,targetNumToLoad:m,endpointState:a(),payloadPromise:null};function a(){var a={endpointControllerName:"WebNotificationsPayloadPagelet"};return b("NotificationEndpointState").getInstance(a)}function c(a){if(!b("performanceNowNoFallback"))return b("NotificationComponentsBootloader").load().then(function(){});else{j({jewelName:"notifications",eventName:"js_bootload_trigger",trigger:l,timestamp:b("performanceNowNoFallback")()-a,eagerLoadDelayInMs:0});j({jewelName:"notifications",eventName:"js_bootload_start",timestamp:b("performanceNowNoFallback")()});return b("NotificationComponentsBootloader").load().then(function(){j({jewelName:"notifications",eventName:"js_bootload_end",timestamp:b("performanceNowNoFallback")()})})}}function d(a){__p&&__p();b("performanceNowNoFallback")&&(i({jewelName:"notifications",eventName:"data_eager_load_trigger",trigger:k,timestamp:b("performanceNowNoFallback")()-a,eagerLoadDelayInMs:0}),i({jewelName:"notifications",eventName:"data_eager_load_start",timestamp:b("performanceNowNoFallback")()}));a=n.targetNumToLoad;var c=n.endpointState;a=c.getRequestParams(a);var d;switch(c.endpointControllerName){case"WebNotificationsPayloadPagelet":d="/ajax/notifications/client/get.php";break;case"AdsUnifiedNavNotificationsPayloadPagelet":d="/notifications/client/ads_unified_nav/";break;case"BusinessManagerNotificationsPayloadPagelet":d="/notifications/client/business_manager/";break}d!=null||g(0,5504,c.endpointControllerName);c=new(b("AsyncRequest"))(d).setAllowCrossPageTransition(!0).setData(a);a=c.exec().then(function(a){b("performanceNowNoFallback")&&i({jewelName:"notifications",eventName:"data_eager_load_end",timestamp:b("performanceNowNoFallback")()});return a.getPayload()});n.hasData||g(0,5505);return a}function f(a){__p&&__p();return new(b("Promise"))(function(c,d){__p&&__p();b("Arbiter").subscribeOnce(b("BigPipe").Events.init,b("once")(function(e,f){__p&&__p();e=f.arbiter;if(!e){d("No arbiter from BigPipe init event");return}e.subscribeOnce(b("BigPipe").Events.displayed,b("once")(function(e,f){e=f.ts;f=(h||(h=b("performanceAbsoluteNow")))()-e;a(f).then(function(a){return c(a)})["catch"](function(a){return d(a)})}))}))})}l==="bigpipe_display_done"&&f(c);k==="bigpipe_display_done"&&(n.payloadPromise=f(d));e.exports={eagerlyLoadedData:n}}),null);
__d("NotificationJewelHeaderController",["DOM","Event","NotificationSeenState","NotificationUpdates","NotificationUserActions"],(function(a,b,c,d,e,f){a=function(a,c,d){"use strict";b("Event").listen(a,"click",function(){b("NotificationUserActions").markAllNotificationsAsRead(d)}),b("NotificationUpdates").subscribe("read-state-updated",function(){c&&b("DOM").setContent(c,b("NotificationSeenState").getUnreadCount())})};e.exports=a}),null);
__d("Spotlight",["csx","cx","Arbiter","ArbiterMixin","DOM","JSXDOM","Layer","LayerAutoFocus","LayerButtons","LayerTabIsolation","ModalLayer","Vector","classWithMixins","joinClasses","mixin"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){c=a.call(this,c,d)||this;c.stageMinSize=new(b("Vector"))(0,0);c.stagePadding=new(b("Vector"))(0,0);return c}var d=c.prototype;d._buildWrapper=function(a,c){a=b("joinClasses")("_n8"+(a.wash==="dark"||!a.wash?" _3qx":"")+(a.wash==="xui"?" _4-hy":""),a.rootClassName);return b("JSXDOM").div({className:a},b("JSXDOM").div({className:"_n9"},c))};d._getDefaultBehaviors=function(){return a.prototype._getDefaultBehaviors.call(this).concat([i,b("LayerAutoFocus"),b("LayerButtons"),b("LayerTabIsolation"),b("ModalLayer")])};d.getContentRoot=function(){this._content||(this._content=b("DOM").find(this.getRoot(),"div._n3"));return this._content};d.configure=function(a){a.stageMinSize&&(this.stageMinSize=a.stageMinSize),a.stagePadding&&(this.stagePadding=a.stagePadding)};d.onContentLoaded=function(){this.inform("content-load")};d.updatePermalink=function(a){this.inform("permalinkchange",a)};return c}(b("classWithMixins")(b("Layer"),b("mixin")(b("ArbiterMixin"))));Object.assign(a.prototype,{stageMinSize:null,stagePadding:null});var i=function(){"use strict";__p&&__p();function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe(["show","hide"],function(a,c){a==="show"?b("Arbiter").inform("layer_shown",{type:"Spotlight"}):b("Arbiter").inform("layer_hidden",{type:"Spotlight"})})};c.disable=function(){this._subscription.unsubscribe(),this._subscription=null};return a}();Object.assign(i.prototype,{_subscription:null});e.exports=a}),null);
__d("Spotlight.react",["LayerAutoFocusReact","LayerHideOnBlur","LayerHideOnEscape","LayerRefocusOnHide","React","ReactLayer","Spotlight"],(function(a,b,c,d,e,f){__p&&__p();a=b("React").PropTypes;c=b("ReactLayer").createClass({propTypes:{causalElement:a.instanceOf(HTMLElement),onHide:a.func,rootClassName:a.string,shown:a.bool,wash:a.oneOf(["light","xui","dark"])},getDefaultEnabledBehaviors:function(){return{hideOnBlur:b("LayerHideOnBlur"),hideOnEscape:b("LayerHideOnEscape"),refocusOnHide:b("LayerRefocusOnHide"),autoFocus:b("LayerAutoFocusReact")}},createLayer:function(a){var c=this.enumerateBehaviors(this.props.behaviors);c={addedBehaviors:c,rootClassName:this.props.rootClassName,wash:this.props.wash};c=new(b("Spotlight"))(c,a);c.setCausalElement(this.props.causalElement);c.conditionShow(this.props.shown);this.props.onBeforeHide&&c.subscribe("beforehide",this.props.onBeforeHide);this.props.onHide&&c.subscribe("hide",this.props.onHide);return c},receiveProps:function(a){this.layer&&(this.layer.setCausalElement(a.causalElement),this.layer.conditionShow(a.shown))}});e.exports=c}),null);
__d("FBAMetaMegaMenuLogger",["invariant","Bootloader"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){j("MegaMenu_HelpButton_Toggle",{action:a?"open":"close"})}function c(a,b){b?j("HelpTray_Article_Click",{article_id:a,search_term:b}):j("HelpTray_Article_Click",{article_id:a})}function d(a){j("HelpTray_SearchBar_Change",{search_term:a})}function f(a){j("MegaMenu_NotificationBell_Toggle",{action:a?"open":"close"})}function h(a,b){a!==null&&a.match(/(\d+)\:(\d+)/)||g(0,518);a=a.split(":");var c=a[0];a=a[1];j("MegaMenu_Notification_Click",{recepient_id:c,notification_id:a,notifType:b})}function i(a){j("MegaMenu_NotificationBell_Show",{unseen_notification_count:a.toString()})}function j(a,c){b("Bootloader").loadModules(["FBAMetaLoggerWWW"],function(b){b=b.META_LOGGER;b.logEvent(a,c)},"FBAMetaMegaMenuLogger")}e.exports={logHelpTrayToggle:a,logHelpTrayArticleClick:c,logHelpTrayPerformSearch:d,logMegaMenuNotificationBellToggle:f,logMegaMenuNotificationClick:h,logMegaMenuNotificationBellShown:i}}),null);
__d("JewelCountSideLoader",["invariant","CSS"],(function(a,b,c,d,e,f,g){__p&&__p();var h={},i={},j={};a={queueInstances:function(a,b,c){h[a]={badge:b,root:c}},updateCountAndQueueArgs:function(a,c,d){__p&&__p();var e=i[a];if(e){e.updateCountAndArgs(d,c);return}e=h[a];e||g(0,1889);j[a]={count:c,args:d};b("CSS").conditionClass(e.root,"hasNew",!!c);e.badge.setLegacyContent(c);return},getOverwritesForJewel:function(a){if(j[a.name])return j[a.name];i[a.name]=a;return null}};e.exports=a}),null);
__d("ModalMask",["DOM"],(function(a,b,c,d,e,f){var g=null,h=0;a={show:function(){h++,g||(g=b("DOM").create("div",{id:"modalMaskOverlay"}),b("DOM").appendContent(document.body,g))},hide:function(){h&&(h--,!h&&g&&(b("DOM").remove(g),g=null))},getNode:function(){return g}};e.exports=a}),null);
__d("BlueBarCreateMenuTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:BlueBarCreateMenuLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:BlueBarCreateMenuLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:BlueBarCreateMenuLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setEntrypointStyle=function(a){this.$1.entrypoint_style=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setHasUserCreatedPriorToStartDate=function(a){this.$1.has_user_created_prior_to_start_date=a;return this};c.setMenuElement=function(a){this.$1.menu_element=a;return this};c.setMenuStyle=function(a){this.$1.menu_style=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={entrypoint_style:!0,event:!0,has_user_created_prior_to_start_date:!0,menu_element:!0,menu_style:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("BlueBarCreateMenuLogger",["requireDeferred","BlueBarCreateMenuTypedLogger","CurrentUser"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("requireDeferred")("WebFunnelLogger");a={initModal:function(a,c,d,e){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement("creation_hub_entrypoint").setMenuStyle(c).setEntrypointStyle(d).setHasUserCreatedPriorToStartDate(e).setEvent("click").log();for(var f=0;f<a.length;f++)a[f]&&(function(){var g=a[f],h=g.name;g=g.element;new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(h).setMenuStyle(c).setEntrypointStyle(d).setHasUserCreatedPriorToStartDate(e).setEvent("impression").log();g.addEventListener("click",function(){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(h).setMenuStyle(c).setEntrypointStyle(d).setHasUserCreatedPriorToStartDate(e).setEvent("click").log()})})()},initDropdown:function(a,c,d){__p&&__p();a.onShow=function(){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement("creation_hub_entrypoint").setMenuStyle(c).setEntrypointStyle(d).setEvent("click").log(),a.forEachItem(function(a){if(a._data.ctor.name!=null&&!a._data.ctor.name.includes("MenuStaticItem")){a=a._data.id;new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(a).setMenuStyle(c).setEntrypointStyle(d).setEvent("impression").log();a==="creation_hub_create_group"&&h("[impression][top nav][create menu][group]")}})},a.forEachItem(function(a){if(a._data.ctor.name!=null&&!a._data.ctor.name.includes("MenuStaticItem")){var e=a._data.id;a._onclickHandler=function(){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(e).setMenuStyle(c).setEntrypointStyle(d).setEvent("click").log(),e==="creation_hub_create_group"&&h("[click][top nav][create menu][group]")}}})},logEntrypointImpression:function(a,c){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement("creation_hub_entrypoint").setMenuStyle(a).setEntrypointStyle(c).setEvent("impression").log()}};function h(a){g.onReady(function(c){return new c("GroupsBlueFeedWebFunnelDefinition").setSessionKey(b("CurrentUser").getID()).setAction(a).log()})}e.exports=a}),null);
__d("WebBrowserDimensionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:WebBrowserDimensionsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:WebBrowserDimensionsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:WebBrowserDimensionsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setClientHintWidth=function(a){this.$1.client_hint_width=a;return this};c.setCpuCoresCount=function(a){this.$1.cpu_cores_count=a;return this};c.setDocumentFontSize=function(a){this.$1.document_font_size=a;return this};c.setPixelRatio=function(a){this.$1.pixel_ratio=a;return this};c.setScreenX=function(a){this.$1.screen_x=a;return this};c.setScreenY=function(a){this.$1.screen_y=a;return this};c.setServerPixelRatio=function(a){this.$1.server_pixel_ratio=a;return this};c.setServerViewportX=function(a){this.$1.server_viewport_x=a;return this};c.setServerViewportY=function(a){this.$1.server_viewport_y=a;return this};c.setViewportX=function(a){this.$1.viewport_x=a;return this};c.setViewportY=function(a){this.$1.viewport_y=a;return this};c.setZoomRatio=function(a){this.$1.zoom_ratio=a;return this};return a}();c={client_hint_width:!0,cpu_cores_count:!0,document_font_size:!0,pixel_ratio:!0,screen_x:!0,screen_y:!0,server_pixel_ratio:!0,server_viewport_x:!0,server_viewport_y:!0,viewport_x:!0,viewport_y:!0,zoom_ratio:!0};e.exports=a}),null);
__d("BrowserDimensionsLogger",["SiteData","WebBrowserDimensionsTypedLogger","getViewportDimensions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null;a={init:function(a){__p&&__p();var c=this.getInitialViewportDimensions();c=new(b("WebBrowserDimensionsTypedLogger"))().setPixelRatio(window.devicePixelRatio||1).setServerPixelRatio(b("SiteData").pr).setScreenX(window.screen.width).setScreenY(window.screen.height).setViewportX(c.width).setViewportY(c.height).setServerViewportX(a.viewportWidth).setServerViewportY(a.viewportHeight);window.navigator&&window.navigator.hardwareConcurrency&&c.setCpuCoresCount(window.navigator.hardwareConcurrency);a.clientHintWidth!=null&&c.setClientHintWidth(a.clientHintWidth);if(window.innerWidth>0&&window.outerWidth>0){a=Math.round(window.outerWidth/window.innerWidth*100)/100;c.setZoomRatio(a)}if(window.getComputedStyle&&document.documentElement!=null){a=window.getComputedStyle(document.documentElement);a!=null&&c.setDocumentFontSize(a.fontSize)}c.log()},getInitialViewportDimensions:function(){g===null&&(g=b("getViewportDimensions")());return g}};e.exports=a}),null);
__d("BootloadOnInteraction",["Event","JSResource","emptyFunction"],(function(a,b,c,d,e,f){a={mount:function(a,c,d,e){d===void 0&&(d=b("emptyFunction"));e===void 0&&(e=b("emptyFunction"));var f=[b("Event").listen(a,"mouseover",g),b("Event").listen(a,"focus",g)];function g(){f.forEach(function(a){return a.remove()}),e(),b("JSResource").loadAll(c,d)}}};e.exports=a}),null);
__d("MercuryJewelBootloadModules",["BootloadOnInteraction","JSResource","emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();var g=null,h=[(a=b("JSResource"))("MercuryJewel").__setRef("MercuryJewelBootloadModules"),a("MercuryThreadInformer").__setRef("MercuryJewelBootloadModules"),a("MessengerState.bs").__setRef("MercuryJewelBootloadModules"),a("Toggler").__setRef("MercuryJewelBootloadModules"),a("MessengerGraphQLThreadlistFetcher.bs").__setRef("MercuryJewelBootloadModules"),a("MercuryServerRequests").__setRef("MercuryJewelBootloadModules"),a("MercuryJewelUnreadCount.bs").__setRef("MercuryJewelBootloadModules")];function i(a,b){g=g||new a(b,b.bootload_args)}function j(a,b){i(a,b),b.inform("opened")}c={mount:function(a,c){c===void 0&&(c=b("emptyFunction"));var d=a.getButton();b("BootloadOnInteraction").mount(d,h,function(b){j(b,a)},function(){c()})},load:function(a){b("JSResource").loadAll(h,function(b){j(b,a)})},loadModules:function(a){b("JSResource").loadAll(h,function(b){i(b,a)})}};e.exports=c}),null);
__d("NotificationJewelFunnelLoggingConstants",[],(function(a,b,c,d,e,f){"use strict";e.exports={FUNNEL_LOGGING_NAME:"WWW_NOTIFICATION_FUNNEL",FUNNEL_LOGGING_EVENT:{FETCH_NOTIFICATIONS:"fetch_notifications",OPEN_JEWEL:"open_jewel",CLOSE_JEWEL:"close_jewel",MOUSE_OVER_ON_JEWEL:"mouse_over_on_jewel",SCROLL_TO_FETCH:"scroll_to_fetch",FETCH_NEXT_SET:"fetch_next_set",CLEAR_BADGE_COUNT:"clear_badge_count"}}}),null);
__d("ViewasChromeBar",["csx","cx","Arbiter","AsyncRequest","CSS","DOM","Event","Focus","ModalMask","PageTransitionsRegistrar","Parent"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="ViewasChromeBar/initialized",j=null,k=!1;function l(a){b("Arbiter").subscribe(i,a)}function m(a){b("CSS").addClass(a,"_7g7");a=b("DOM").find(a,"._7g0");b("Focus").set(b("DOM").find(a,".textInput"))}a={initChromeBar:function(a){if(k)return;j=a;k=!0;b("Arbiter").inform(i,null,"state")},update:function(a,c){l(function(){b("DOM").setContent(j,a),c&&new(b("AsyncRequest"))("/ajax/privacy/glasgow/viewas_bar_flyout_open").send()})},registerSpecificModeOnClick:function(a){b("Event").listen(a,"click",function(){var c=b("Parent").bySelector(a,"._7f-");c instanceof HTMLElement&&m(c)})},registerFlyoutModalMask:function(){b("ModalMask").show(),b("PageTransitionsRegistrar").registerHandler(b("ModalMask").hide,10)}};e.exports=a}),null);
__d("ResponsiveSidebar",["AjaxPipeRequest","Arbiter","Bootloader","ChatConfig","ChatSidebarVisibility","CSS","Event","Run","URI","getOrCreateDOMID","qex","setImmediate","throttle"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("ChatConfig").get("sidebar.hide_divebar_off_homepage"),i=b("ChatConfig").get("sidebar.hide_buddylist_off_homepage"),j=b("qex")._("1211266")||!1,k="buddylistOff",l=!0;a={init:function(a){__p&&__p();var c=this;if(this.shouldLoadContent(a))b("setImmediate")(function(){c.loadContentForConfig(a)});else{var d=document.documentElement||"";(h||j)&&!this.isOnHomepage()&&b("CSS").removeClass(d,"sidebarMode");var e=b("Event").listen(window,"resize",b("throttle")(function(){l&&(c.shouldLoadContent(a)&&(l=!1,e.remove(),c.loadContentForConfig(a)))},50));this.loadOnTransition(a);b("Run").onCleanupOrLeave(a.container,function(){l&&(l=!1,e.remove())})}},loadOnTransition:function(a){var c=this;if(h||i||j)var d=b("Arbiter").subscribe("page_transition",function(e,f){e=document.documentElement||"";!c.isOnHomepage(f.uri.getPath())?(i||j)&&b("CSS").addClass(e,k):(i&&(b("CSS").removeClass(e,k),b("Bootloader").loadModules(["Dock"],function(a){a.resizeAllFlyouts()},"ResponsiveSidebar")),b("ChatSidebarVisibility").shouldShowSidebar(null,function(b,e){l&&setTimeout(function(){c.loadContentForConfig(a)}),l=!1,d.unsubscribe()},f.uri))})},isOnHomepage:function(a){return(a||new(g||(g=b("URI")))(window.location.href).getPath())==="/"},shouldLoadContent:function(a){var b=(h||i||j)&&!this.isOnHomepage();return!b&&a.triggerWidth<window.innerWidth},loadContentForConfig:function(a){var c="/ajax/pagelet/generic.php/SidebarPagelet";new(b("AjaxPipeRequest"))(b("getOrCreateDOMID")(a.container),c).send()}};e.exports=a}),null);
__d("XUIBadge",["cx","invariant","CSS","DOM","formatNumber"],(function(a,b,c,d,e,f,g,h){__p&&__p();function i(a){return parseInt(a,10)===a}a=function(){"use strict";__p&&__p();function a(a){this.target=a.target,this.count=a.count,this.maxcount=a.maxcount}var c=a.prototype;c.getCount=function(){return this.count};c.setCount=function(a){i(a)||h(0,186),a>=0||h(0,3502),this.count=a,b("CSS").conditionClass(this.target,"hidden_elem",this.count===0),b("DOM").setContent(this.target,b("formatNumber").withMaxLimit(a,this.maxcount)),a>this.maxcount?b("CSS").addClass(this.target,"_5ugi"):b("CSS").removeClass(this.target,"_5ugi")};c.setLegacyContent=function(a){typeof a==="string"?(b("CSS").conditionClass(this.target,"hidden_elem",a==0),b("DOM").setContent(this.target,a),b("CSS").removeClass(this.target,"_5ugi")):this.setCount(a)};c.increment=function(){this.setCount(this.getCount()+1)};return a}();e.exports=a}),null);
__d("CrossWindowEventEmitter",["CacheStorage","EventEmitter","FBJSON"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this)||this;d.$CrossWindowEventEmitter2=c;d.$CrossWindowEventEmitter1=new(b("CacheStorage"))("localstorage",c+":");d.$CrossWindowEventEmitter1.addValueChangeCallback(function(c,e,f){e=c.split(":")[1];try{c=b("FBJSON").parse(f)}catch(a){c=void 0}if(c&&c.__v){(f=a.prototype.emit).call.apply(f,[babelHelpers.assertThisInitialized(d),e].concat(c.__v))}});return d}var d=c.prototype;d.emit=function(b){var c;for(var d=arguments.length,e=new Array(d>1?d-1:0),f=1;f<d;f++)e[f-1]=arguments[f];this.emitRemote.apply(this,[b].concat(e));(c=a.prototype.emit).call.apply(c,[this,b].concat(e))};d.emitRemote=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$CrossWindowEventEmitter1.set(a,c)};return c}(b("EventEmitter"));e.exports=a}),null);