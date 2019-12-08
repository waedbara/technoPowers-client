if (self.CavalryLogger) { CavalryLogger.start_js(["lrcv7"]); }

__d("RTISubscriptionData",["ChannelConstants","areEqual"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("ChannelConstants").SUBSCRIPTION_STATE;a=function(){__p&&__p();function a(a,b,c,d,e,f,g){this.$1=a,this.$2=b,this.$7=!0,this.$8=!1,this.$9=h.SUBSCRIBE,this.$10=null,this.$11=Date.now(),this.$3=d,this.$4=e?e:null,this.$5=f?f:null,this.$6=g?g:null,this.$12=c}var c=a.prototype;c.matchesContext=function(a){return(g||(g=b("areEqual")))(this.$3,a)};c.getCreatedTime=function(){return this.$11};c.getTopic=function(){return this.$1};c.getViewId=function(){return this.$12};c.getSubscribeCallback=function(){return this.$4};c.setSubscribeCallback=function(a){this.$4=a};c.getUnsubscribeCallback=function(){return this.$6};c.setUnsubscribeCallback=function(a){this.$6=a};c.getUnsubscribeHook=function(){return this.$5};c.setUnsubscribeHook=function(a){this.$5=a};c.getMessageListener=function(){return this.$2};c.setMessageListener=function(a){this.$2=a};c.getArbiterToken=function(){return this.$10};c.setArbiterToken=function(a){this.$10=a};c.isAlive=function(){return this.$9!=h.UNSUBSCRIBE};c.isMutatingContext=function(){return this.$9==h.MUTATE_CONTEXT};c.isDirty=function(){return this.$7};c.setDirty=function(a){this.$7=a};c.getState=function(){return this.$9};c.setState=function(a){this.$9=a};c.getContext=function(){return this.$3};c.isSent=function(){return this.$8};c.setSent=function(a){this.$8=a};c.prepareMutateContext=function(a){this.setState(h.MUTATE_CONTEXT),this.setDirty(!0),this.setSent(!1),this.$3=a};c.prepareUnsubscribe=function(){this.setState(h.UNSUBSCRIBE),this.setDirty(!0),this.setSent(!1),this.$2=null};return a}();e.exports=a}),null);
__d("RTISubscriptionStore",["Arbiter","BanzaiODS","ChannelConstants","ErrorUtils","RTISubscriptionData","SkywalkerUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("ChannelConstants").SUBSCRIPTION_STATE;a=function(){__p&&__p();function a(){this.$1={},this.$2=1}var c=a.prototype;c.subscribe=function(a,c,d,e,f,g){__p&&__p();d=b("SkywalkerUtils").patchContext(d||{});var i=this.$3(a,d);if(i){var j=i.getState()==h.UNSUBSCRIBE&&i.isDirty()&&!i.isSent();i.isAlive()?b("BanzaiODS").bumpEntityKey(2966,"RTISubscriptionStore","duplicate_subscription_alive"):j?b("BanzaiODS").bumpEntityKey(2966,"RTISubscriptionStore","duplicate_subscription_unflushed_unsubscribe"):b("BanzaiODS").bumpEntityKey(2966,"RTISubscriptionStore","duplicate_subscription_unknown");if(i.isAlive()||j){i.setMessageListener(c);i.setSubscribeCallback(e);i.setUnsubscribeHook(f);i.setUnsubscribeCallback(g);if(j){i.setDirty(!1);i.setSent(!0);i.setState(h.SUBSCRIBE);j=b("ChannelConstants").getRTISkywalkerArbiterType(i.getTopic(),i.getViewId());i.setArbiterToken(this.$4(j,i.getTopic(),i))}return i}}j=this.$2;this.$2+=1;i=new(b("RTISubscriptionData"))(a,c,j,d,e,f,g);c=b("ChannelConstants").getRTISkywalkerArbiterType(a,j);i.setArbiterToken(this.$4(c,a,i));a in this.$1||(this.$1[a]=new Set());this.$1[a].add(i);return i};c.unsubscribe=function(a){if(!this.isSubscribed(a))return;a.prepareUnsubscribe();var c=a.getArbiterToken();c&&(b("Arbiter").unsubscribe(c),a.setArbiterToken(null))};c.mutateContext=function(a,b){if(!this.isSubscribed(a))return;a.prepareMutateContext(b)};c.isSubscribed=function(a){return a.getTopic()in this.$1&&this.$1[a.getTopic()].has(a)&&a.isAlive()};c.clearSubscriptions=function(){this.$1={}};c.deleteSubscriptions=function(a){var b=this,c=[];this.forEachSubscription(function(d){a.call(b,d)&&c.push(d)});c.forEach(function(a){if(a.getTopic()in b.$1){var c=b.$1[a.getTopic()];c["delete"](a)}})};c.forEachSubscription=function(a){__p&&__p();for(var b in this.$1){var c=this.$1[b];for(var c=c,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{e=c.next();if(e.done)break;f=e.value}f=f;if(a.call(this,f))return}}};c.$3=function(a,b){__p&&__p();a=this.$1[a];if(!a)return null;for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;if(e.matchesContext(b))return e}return null};c.$4=function(a,c,d){var e=this;return b("Arbiter").subscribe(a,function(a,f){b("BanzaiODS").bumpEntityKey(2966,"RTISubscriptionStore","skywalker_subscription_delivery"),f.obj.forEach(function(a){a={topic:c,payload:a};var f=d.getMessageListener();f&&(g||(g=b("ErrorUtils"))).applyWithGuard(f,e,[a])})})};return a}();e.exports=a}),null);
__d("StreamStateMachine",["StreamStateMachineConstants"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("StreamStateMachineConstants").events,h=b("StreamStateMachineConstants").states,i=babelHelpers["extends"]({},g,{GQLS_STATE_TRANSIT_ON_REFRESH:"onRefresh"});a=function(){__p&&__p();function a(a,b){a===void 0&&(a=!1),b===void 0&&(b=1e4),this.$1=b,this.$2=null,this.$3=null,this.$5=a,this.$4=null}var b=a.prototype;b.start=function(){this.$6(i.GQLS_STATE_TRANSIT_ON_CREATE),this.$5||this.$6(i.GQLS_STATE_TRANSIT_ON_ACTIVE)};b.ping=function(){switch(this.$4){case h.GQLS_STATE_ACTIVE:this.$6(i.GQLS_STATE_TRANSIT_ON_REFRESH);break;case h.GQLS_STATE_PAUSED:this.$6(i.GQLS_STATE_TRANSIT_ON_RESUME);break;case h.GQLS_STATE_CREATED:this.$6(i.GQLS_STATE_TRANSIT_ON_ACTIVE);break;case h.GQLS_STATE_TERMINATED:break}};b.kill=function(){this.$6(i.GQLS_STATE_TRANSIT_ON_TERMINATE)};b.setLifecycleHandler=function(a){this.$3=a};b.getState=function(){return this.$4};b.$6=function(a){__p&&__p();switch(a){case i.GQLS_STATE_TRANSIT_ON_CREATE:this.$7();break;case i.GQLS_STATE_TRANSIT_ON_ACTIVE:this.$8();break;case i.GQLS_STATE_TRANSIT_ON_REFRESH:this.$9();break;case i.GQLS_STATE_TRANSIT_ON_PAUSE:this.$10();break;case i.GQLS_STATE_TRANSIT_ON_RESUME:this.$11();break;case i.GQLS_STATE_TRANSIT_ON_TERMINATE:this.$12();break}};b.$7=function(){this.$4=h.GQLS_STATE_CREATED,this.$3&&this.$3(g.GQLS_STATE_TRANSIT_ON_CREATE)};b.$8=function(){this.$4=h.GQLS_STATE_ACTIVE,this.$3&&this.$3(g.GQLS_STATE_TRANSIT_ON_ACTIVE),this.$13()};b.$9=function(){clearTimeout(this.$2),this.$13()};b.$10=function(){this.$4=h.GQLS_STATE_PAUSED,this.$3&&this.$3(g.GQLS_STATE_TRANSIT_ON_PAUSE)};b.$11=function(){this.$4=h.GQLS_STATE_ACTIVE,this.$3&&this.$3(g.GQLS_STATE_TRANSIT_ON_RESUME),this.$13()};b.$12=function(){clearTimeout(this.$2),this.$4=h.GQLS_STATE_TERMINATED};b.$13=function(){var a=this;this.$5&&(this.$2=setTimeout(function(){a.$6(g.GQLS_STATE_TRANSIT_ON_PAUSE)},this.$1))};return a}();e.exports=a}),null);
__d("RTISubscriptionToken",["StreamStateMachine","gkx"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c,d,e,f){__p&&__p();this.$1=a;this.$2=c;this.$4=d;this.$5=e;this.$3=f;this.$6=null;if(b("gkx")("676931")){a=this.getContext();c=this.hasHeartbeatOption(a);this.$7=new(b("StreamStateMachine"))(c);this.$7.start()}}var c=a.prototype;c.setFriendFanoutToken=function(a){this.$6=a};c.getFriendFanoutToken=function(){return this.$6};c.getSubscriptionData=function(){return this.$1};c.isSubscribed=function(){return this.$3(this.$1)};c.getContext=function(){return this.$1.getContext()};c.mutateContext=function(a){this.$4(this.$1,a)};c.unsubscribe=function(){var a=this.$1.getUnsubscribeHook();a&&a();this.$2(this.$1);this.$6&&this.$6.unsubscribe();b("gkx")("676931")&&(this.$7&&this.$7.kill())};c.fastUnsubscribe=function(){this.unsubscribe(),this.$5()};c.hasHeartbeatOption=function(a){if(a&&a.transformContext){a=JSON.parse(a.transformContext);if(a.serializedQueryParameters){a=JSON.parse(a.serializedQueryParameters);if(a&&a["%options"]&&a["%options"].heartbeat)return!0}}return!1};c.ping=function(){b("gkx")("676931")&&(this.$7&&this.$7.ping())};c.handleLifecycles=function(a){b("gkx")("676931")&&(this.$7&&this.$7.setLifecycleHandler(a))};return a}();e.exports=a}),null);
__d("SkywalkerWebClientTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:SkywalkerWebClientLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:SkywalkerWebClientLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:SkywalkerWebClientLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setClientSessionUuid=function(a){this.$1.client_session_uuid=a;return this};c.setClientTime=function(a){this.$1.client_time=a;return this};c.setEventName=function(a){this.$1.event_name=a;return this};c.setGateway=function(a){this.$1.gateway=a;return this};c.setMessage=function(a){this.$1.message=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setTopic=function(a){this.$1.topic=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={client_session_uuid:!0,client_time:!0,event_name:!0,gateway:!0,message:!0,time:!0,topic:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("SkywalkerLogger",["BanzaiODS","FBLogger","LogHistory","SkywalkerWebClientTypedLogger","nullthrows","uuid"],(function(a,b,c,d,e,f){__p&&__p();var g="skywalker_web_client",h=b("LogHistory").getInstance(g);a=function(){"use strict";__p&&__p();function a(a){a===void 0&&(a={}),this.$1=a,this.$1.client_session_uuid==null&&(this.$1.client_session_uuid=b("uuid")())}var c=a.prototype;c.log=function(a){a=this.$2(a);var c=b("nullthrows")(a.event_name);h.log(c,a);this.$3(a)};c.warn=function(a){a=this.$2(a);var c=b("nullthrows")(a.event_name);h.warn(c,a);b("FBLogger")(g).warn(c);this.$3(a)};c.error=function(a){a=this.$2(a);var c=b("nullthrows")(a.event_name);h.error(c,a);b("FBLogger")(g).mustfix(c);this.$3(a)};c.bump=function(a){b("BanzaiODS").bumpEntityKey(2966,g,a)};c.$2=function(a){a=babelHelpers["extends"]({},this.$1,a);a.client_time==null&&(a.client_time=Date.now());return a};c.$3=function(a){var c=new(b("SkywalkerWebClientTypedLogger"))();c.updateData(a);c.log()};return a}();e.exports=a}),null);
__d("RTISubscriptionManager",["Arbiter","ChannelConstants","CurrentUser","ErrorUtils","RTIFriendFanoutConfig","RTISubscriptionManagerConfig","RTISubscriptionStore","RTISubscriptionToken","Run","SkywalkerLogger","SystemEvents","gkx","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("ChannelConstants").SUBSCRIPTION_STATE;a=function(){__p&&__p();function a(){__p&&__p();var a=this,c,d,e;this.PULL_HINT_DELAY_MILLIS=1e4;this.$1=new(b("RTISubscriptionStore"))();this.$2=new(b("SkywalkerLogger"))({gateway:"chatproxy"});this.$3=!1;this.$4=!1;this.$5=!1;this.$6=!1;this.$7=!1;this.$8=!0;this.$9=0;this.$10=document.readyState==="complete";b("Run").onAfterLoad(function(){a.$10=!0,a.flush()});this.$11=null;(c=b("Arbiter")).subscribe((d=b("ChannelConstants")).ON_ENTER_STATE,function(c,d){if(!a.$11)return;c=/pull/.test(d.state);!a.$3&&c?(a.$4=!0,a.$5||(a.$5=!0,b("setTimeoutAcrossTransitions")(function(){a.$3=a.$4,a.$5=!1,a.$3&&a.flush()},a.PULL_HINT_DELAY_MILLIS))):!c?(a.$4=!1,a.$3=!1):c&&(a.$3=!0,a.flush())});(e=b("SystemEvents")).subscribe(e.ONLINE,function(b,c){c||(a.$3=!1,a.$4=!1)});e.subscribe(e.USER,function(b,c){a.$3=!1,a.$4=!1,a.$1.clearSubscriptions()});c.subscribe(d.RTI_SESSION,function(b,c){!a.$11&&c&&a.deleteSubscriptions(function(a){return a.getState()===h.UNSUBSCRIBE}),a.$11=c,a.$11&&(a.$3=!0,a.flush())});c.subscribe(d.ON_INVALID_HISTORY,function(){a.$3=!0,a.forEachSubscription(function(a){return a.setDirty(!0)}),a.getCurrentSession()});this.getCurrentSession();c.subscribe(d.SKYWALKER,function(c,d){c=d.obj.topic;var e=d.obj.view_id,f={};c!=null?a.$2.log({event_name:"payload_received",topic:c}):a.$2.error({event_name:"payload_parse_error",message:"Missing Skywalker topic field in payload"});d.obj.payloads===void 0?f.obj=[d.obj.payload]:f.obj=d.obj.payloads;d=b("ChannelConstants").getRTISkywalkerArbiterType(c,e);b("Arbiter").inform(d,f)})}var c=a.prototype;c.subscribe=function(a,c,d,e,f,g){__p&&__p();var h=this;e=this.$1.subscribe(a,function(d){if(!b("gkx")("676931")){c(d);return}h.isHeartbeat(d.payload)?h.$2.log({event_name:"heartbeat_received",topic:a}):c(d);i.ping()},d,e,f,g);var i=this.$12(e);f=a.substr(0,a.lastIndexOf("/"));if(b("RTIFriendFanoutConfig").passFriendFanoutSubscribeGK&&b("RTIFriendFanoutConfig").topicPrefixes.indexOf(f)>=0){g=a+"_user_id_"+b("CurrentUser").getID();f=this.$1.subscribe(g,c,d);g=this.$12(f);i.setFriendFanoutToken(g)}e.isDirty()&&this.flush();return i};c.mutateContext=function(a,b){this.$1.isSubscribed(a)&&(this.$1.mutateContext(a,b),this.flush())};c.isHeartbeat=function(a){try{a=JSON.parse(a);if(a.heartbeat)return!0}catch(a){}return!1};c.unsubscribe=function(a){this.$1.unsubscribe(a)};c.unsubscribeAll=function(a){if(!this.isReady()||this.$11==null)return;var b=this.$11;this.$2.bump("unsubscribe_all");var c={reset:"t"};a=a!=null?a:function(a){};b.issueRequest("/sub",c,{},a)};c.activePing=function(){if(!this.isReady()||this.$11==null)return;var a={state:"active"};this.$11.issueRequest("/active_ping",a,{},function(a){})};c.flush=function(){__p&&__p();var a=this;if(!this.isReady()||this.$11==null||this.$6){this.$7=!0;this.$11==null&&this.getCurrentSession();return}var c=this.$11;this.$6=!0;this.$7=!1;var d=this.getMaxConsecutiveFlushFailures();if(this.$9>=d){this.$2.warn({event_name:"reset_state"});this.$9=0;this.$1.clearSubscriptions();this.unsubscribeAll(function(){a.$6=!1});return}var e=[],f={};d=!0;var j=0,k=function(b){__p&&__p();if(j>=a.getMaxFlushBatchSize()){a.$7=!0;return!0}if(b.isDirty()){b.getState()===h.MUTATE_CONTEXT&&(d=!1);var c="subscriptions",g=f[c];g||(g=[],f[c]=g);e.push(b);b.setDirty(!1);b.setSent(!1);c={topic:b.getTopic(),state:b.getState(),context:b.getContext(),viewId:b.getViewId()};j+=1;g.push(c)}else d=!1;return!1};this.forEachSubscription(k);if(d&&f.subscriptions&&f.subscriptions.length>0){k=[];for(var l=0;l<f.subscriptions.length;l++)f.subscriptions[l].state===h.SUBSCRIBE&&k.push(f.subscriptions[l]);f.subscriptions=k;this.$8=!0}l=function(d){__p&&__p();var f=d.data!=null;a.$9=f?0:a.$9+1;a.$8&&f&&(a.$8=!1);for(var j=0;j<e.length;j++){var c=e[j];c.isDirty()||(c.setSent(f),c.setDirty(!f));var k=c.getTopic(),l=f?"success":"failure";l=i(c)+"_"+l;!f&&d.error!=null?a.$2.warn({event_name:l,topic:k,message:d.error}):a.$2.log({event_name:l,topic:k});if(c.getState()===h.SUBSCRIBE){l=c.getSubscribeCallback();l&&(g||(g=b("ErrorUtils"))).applyWithGuard(l,a,[d])}else if(c.getState()===h.MUTATE_CONTEXT)f&&c.setState(h.SUBSCRIBE);else if(c.getState()===h.UNSUBSCRIBE){k=c.getUnsubscribeCallback();k&&(g||(g=b("ErrorUtils"))).applyWithGuard(k,a,[d])}}a.deleteSubscriptions(function(a){return a.getState()===h.UNSUBSCRIBE&&a.isSent()&&!a.isDirty()});a.$6=!1;a.$7&&(a.$2.bump("repeated_flush"),a.$7=!1,a.flush())};if(Object.keys(f).length<=0){this.$6=!1;return}k={};this.$8&&(k.reset="t");for(var m=0;m<e.length;m++){var n=e[m],o=i(n)+"_attempt";n=n.getTopic();this.$2.log({event_name:o,topic:n})}c.issueRequest("/sub",k,f,l)};c.deleteSubscriptions=function(a){this.$1.deleteSubscriptions(a)};c.forEachSubscription=function(a){this.$1.forEachSubscription(a)};c.isFlushInProgress=function(){return this.$6};c.getSubscriptions=function(){var a=[];this.forEachSubscription(function(b){return a.push(b)});return a};c.isSubscribed=function(a){return this.$1.isSubscribed(a)};c.isReady=function(){return this.$11!=null&&this.$3&&this.$10};c.getCurrentSession=function(){b("Arbiter").inform(b("ChannelConstants").GET_RTI_SESSION_REQUEST)};c.getMaxConsecutiveFlushFailures=function(){return b("RTISubscriptionManagerConfig").config&&Object.prototype.hasOwnProperty.call(b("RTISubscriptionManagerConfig").config,"max_consecutive_flush_failures")?Number(b("RTISubscriptionManagerConfig").config.max_consecutive_flush_failures):b("ChannelConstants").DEFAULT_MAX_CONSECUTIVE_FLUSH_FAILURES};c.getMaxFlushBatchSize=function(){return b("RTISubscriptionManagerConfig").config&&Object.prototype.hasOwnProperty.call(b("RTISubscriptionManagerConfig").config,"max_subscription_flush_batch_size")?Number(b("RTISubscriptionManagerConfig").config.max_subscription_flush_batch_size):b("ChannelConstants").DEFAULT_MAX_SUBSCRIPTION_FLUSH_BATCH_SIZE};c.$12=function(a){var c=this;return new(b("RTISubscriptionToken"))(a,function(a){return c.unsubscribe(a)},function(a,b){return c.mutateContext(a,b)},function(){return c.flush()},function(a){return c.isSubscribed(a)})};return a}();function i(a){if(a.getState()===h.SUBSCRIBE)return"subscribe";else if(a.getState()===h.MUTATE_CONTEXT)return"mutate_context";else if(a.getState()===h.UNSUBSCRIBE)return"unsubscribe";return"unknown_state"}var j=new a();b("Run").onUnload(function(){return j.unsubscribeAll()});e.exports=j}),null);
__d("RealtimeEntityPresenceTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:RealtimeEntityPresenceLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:RealtimeEntityPresenceLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:RealtimeEntityPresenceLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAction=function(a){this.$1.action=a;return this};c.setActionReason=function(a){this.$1.action_reason=a;return this};c.setAppID=function(a){this.$1.app_id=a;return this};c.setCapabilities=function(a){this.$1.capabilities=a;return this};c.setClientSubscriptionID=function(a){this.$1.client_subscription_id=a;return this};c.setClientTimeMs=function(a){this.$1.client_time_ms=a;return this};c.setEntityHandler=function(a){this.$1.entity_handler=a;return this};c.setEntityID=function(a){this.$1.entity_id=a;return this};c.setEntityType=function(a){this.$1.entity_type=a;return this};c.setEventSource=function(a){this.$1.event_source=a;return this};c.setExceptionMessage=function(a){this.$1.exception_message=a;return this};c.setExceptionType=function(a){this.$1.exception_type=a;return this};c.setGatewayConnected=function(a){this.$1.gateway_connected=a;return this};c.setSequenceID=function(a){this.$1.sequence_id=a;return this};c.setSessionID=function(a){this.$1.session_id=a;return this};c.setSourceHost=function(a){this.$1.source_host=a;return this};c.setSourceTwTaskHandle=function(a){this.$1.source_tw_task_handle=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setTopic=function(a){this.$1.topic=a;return this};c.setUserAgentString=function(a){this.$1.user_agent_string=a;return this};c.setUserFbid=function(a){this.$1.user_fbid=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={action:!0,action_reason:!0,app_id:!0,capabilities:!0,client_subscription_id:!0,client_time_ms:!0,entity_handler:!0,entity_id:!0,entity_type:!0,event_source:!0,exception_message:!0,exception_type:!0,gateway_connected:!0,sequence_id:!0,session_id:!0,source_host:!0,source_tw_task_handle:!0,time:!0,topic:!0,user_agent_string:!0,user_fbid:!0,weight:!0};e.exports=a}),null);
__d("EntityPresenceLogger",["CurrentUser","EntityPresenceConfig","Random","RealtimeEntityPresenceTypedLogger","UserAgentData","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a,b,c,d,e){this.entityType=a,this.entityID=b,this.subscriptionID=c,this.shouldLog=this.$1(),this.sequenceID=0,this.appID=d,this.eventSource=e}var c=a.prototype;c.logEnter=function(a){this.shouldLog&&this.$2().setAction("enter").setSequenceID(++this.sequenceID).setCapabilities(a).log()};c.logReconnect=function(a){this.shouldLog&&this.$2().setAction("enter").setActionReason("reconnect").setSequenceID(++this.sequenceID).setCapabilities(a).log()};c.logSubscribeCallback=function(a){this.shouldLog&&this.$2().setAction("subscribe_completed").setActionReason(a?"succeeded":"failed").log()};c.logPing=function(){this.shouldLog&&this.$2().setAction("ping").setSequenceID(++this.sequenceID).log()};c.logSkippedPing=function(){this.shouldLog&&this.$2().setAction("skipped_ping").setSequenceID(this.sequenceID).log()};c.logChangeCapabilities=function(a){this.shouldLog&&this.$2().setAction("change_capabilities").setSequenceID(++this.sequenceID).setCapabilities(a).log()};c.logLeave=function(){this.shouldLog&&this.$2().setAction("leave").setSequenceID(++this.sequenceID).log()};c.logUnsubscribeCallback=function(a){this.shouldLog&&this.$2().setAction("unsubscribe_completed").setActionReason(a?"succeeded":"failed").log()};c.getLogInfo=function(){return this.shouldLog?{client_subscription_id:this.subscriptionID,sequence_id:this.sequenceID.toString()}:null};c.getLogInfoMQTT=function(){return this.shouldLog?{clientSubscriptionId:this.subscriptionID,sequenceId:this.sequenceID}:null};c.$1=function(){if(b("gkx")("678741"))return!0;return b("gkx")("678742")?b("Random").random()<(Object.prototype.hasOwnProperty.call(b("EntityPresenceConfig").samplingRateOverride,this.entityType)?b("EntityPresenceConfig").samplingRateOverride[this.entityType]:b("EntityPresenceConfig").sessionLoggingSamplingRate):!1};c.$2=function(){return new(b("RealtimeEntityPresenceTypedLogger"))().setEntityType(this.entityType).setEntityID(this.entityID).setClientSubscriptionID(this.subscriptionID).setClientTimeMs(Date.now()).setEventSource(this.eventSource).setAppID(this.appID).setUserFbid(b("CurrentUser").getID()).setUserAgentString(b("UserAgentData").browserName+"/"+(b("UserAgentData").browserFullVersion||""))};return a}();e.exports=a}),null);
__d("EntityPresenceManager",["Arbiter","ChannelConstants","EntityPresenceConfig","EntityPresenceLogger","FBLogger","FBMqttChannel","RTISubscriptionManager","RTISubscriptionManagerConfig","UserActivity","gkx","uuid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="sandbox",h=443,i="entity_presence",j="capabilities",k="229895473858072",l="/entity_presence",m="219994525426954",n=b("gkx")("885271")&&"WebSocket"in window,o="client",p={users:0,activePing:null,ping:function(){n?b("FBMqttChannel").publish(l,"{}"):b("RTISubscriptionManager").activePing()},start:function(){var a=this;this.users++;if(!b("EntityPresenceConfig").activePingEnabled)return;this.ping();this.activePing===null&&(this.activePing=window.setInterval(function(){b("UserActivity").isOnTab()?(a.ping(),b("Arbiter").inform(b("ChannelConstants").ENTITY_PRESENCE_ACTIVE_PING)):b("Arbiter").inform(b("ChannelConstants").ENTITY_PRESENCE_SKIPPED_PING)},b("EntityPresenceConfig").activePingFrequency))},stop:function(){this.users=Math.max(this.users-1,0),this.users===0&&this.activePing!==null&&(window.clearInterval(this.activePing),this.activePing=null)}},q={ENTER:1,LEAVE:2,CHANGE_CAPABILITIES:3},r={publish:function(a,c,d,e,f){var g={};a!=null&&(g.action=a);c!=null&&(g.entityType=c);d!=null&&(g.entityId=d);e!=null&&(g.capabilities=e);a=r.getOverride();a&&(g.override=a);f!=null&&(g.logInfo=f);b("FBMqttChannel").publish(l,JSON.stringify(g))},getOverride:function(){var a=b("RTISubscriptionManagerConfig").assimilator;if(a&&(a.sandboxIP!=null&&a.sandboxHostname!=null)){var c=a.tierType!=null?a.tierType:g;return{tierType:c,host:{hostName:a.sandboxHostname,port:h,hostIpAddress:a.sandboxIP}}}return null}};a={enter:function(a,c,d,e){__p&&__p();var f=i+"/"+a+"/"+c,g=n?m:k,h=(e=e)!=null?e:new(b("EntityPresenceLogger"))(a,c,b("uuid")(),g,o);h.logEnter(d);e=h.getLogInfo()||{};d!=null&&(e[j]=d.toString());var l;n?r.publish(q.ENTER,a,c,d,h.getLogInfoMQTT()):l=b("RTISubscriptionManager").subscribe(f,function(){b("FBLogger")(i).warn("Unexpected update received for entity presence")},e,function(a){a=a!=null&&a.data!=null;h.logSubscribeCallback(a)},null,function(a){a=a!=null&&a.data!=null;h.logUnsubscribeCallback(a)});p.start();return{leaveCalled:!1,capabilities:d,entityID:c,pingListener:null,skippedPingListener:null,presenceType:a,changeCapabilities:function(a){h.logChangeCapabilities(a);var b=h.getLogInfo()||{};a&&(b[j]=a.toString());this.capabilities=a;n?r.publish(q.CHANGE_CAPABILITIES,this.presenceType,this.entityID,this.capabilities,h.getLogInfoMQTT()):l.mutateContext(b)},leave:function(){__p&&__p();if(this.leaveCalled){b("FBLogger")(i).warn("leave() called twice for same PresenceTokenType");return}h.logLeave();p.stop();b("Arbiter").unsubscribe(this.pingListener);b("Arbiter").unsubscribe(this.skippedPingListener);n?r.publish(q.LEAVE,this.presenceType,this.entityID,this.capabilities,h.getLogInfoMQTT()):l.fastUnsubscribe();this.leaveCalled=!0},_onMqttStateChange:function(a){if(a!=="Connected"||this.leaveCalled)return;h.logReconnect(this.capabilities);r.publish(q.ENTER,this.presenceType,this.entityID,this.capabilities,h.getLogInfoMQTT())},_init:function(){var a=this;n&&b("FBMqttChannel").subscribeChannelEvents({onMQTTStateChanged:function(b){return a._onMqttStateChange(b)}});this.pingListener=b("Arbiter").subscribe(b("ChannelConstants").ENTITY_PRESENCE_ACTIVE_PING,function(a){h.logPing()});this.skippedPingListener=b("Arbiter").subscribe(b("ChannelConstants").ENTITY_PRESENCE_SKIPPED_PING,function(a){h.logSkippedPing()});return this}}._init()}};e.exports=a}),null);
__d("CommercialBreakHostStoryComponentType",[],(function(a,b,c,d,e,f){a=Object.freeze({POP_OVER_MENU:"POP_OVER_MENU",HOST_STORY_HEADER:"HOST_STORY_HEADER"});e.exports=a}),null);
__d("StoryComponentVideoPlayerControllerRegistry",["CommercialBreakHostStoryComponentType","DOMQuery","EventEmitter"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new(b("EventEmitter"))(),h=new Map(),i=new Map(),j=new Map();function k(a){a=a;var b=[];while(a)b.unshift(a),a=a.parentElement;return b}function l(a,b){__p&&__p();if(a===null)return null;var c=k(a);a=null;var d=null;b.forEach(function(b){var e=b[0];b=b[1];e=k(e);for(var f=0;f<c.length;++f)if(c[f]!==e[f]){(d===null||f>d)&&(d=f,a=b);break}});return a}a={registerVideoPlayerController:function(a,c){var d=a.getVideoID(),e=h.get(d);e?e.push(a):(e=[a],h.set(d,e));d=null;c===b("CommercialBreakHostStoryComponentType").POP_OVER_MENU?d=this.findPopoverAsyncMenuForVideoPlayerController(a):c===b("CommercialBreakHostStoryComponentType").HOST_STORY_HEADER&&(d=this.findHostStoryControllerForVideoPlayerController(a));if(!d)return;g.emit(d.getInstanceID()+"/register",a)},registerHostStoryController:function(a,b,c){var d=j.get(b);d?d.push(a):(d=[a],j.set(b,d));this.findVideoControllerForStoryController(a,b,c)},registerPopoverAsyncMenu:function(a,b){var c=b.host_video_id;if(!c)return;a=new m(a,b);b=a.getInstanceID();var d=i.get(c);d||(d=[],i.set(c,d));d.push(a);this._informStoryComponentRegister(a.getTriggerElem(),b,c,a.registerVideoPlayerController.bind(a))},_informStoryComponentRegister:function(a,b,c,d){g.addListener(b+"/register",d);d=this.findVideoPlayerControllerForElement(a,c);if(!d)return;g.emit(b+"/register",d)},findVideoPlayerControllerForElement:function(a,b){b=h.get(b);return!b?null:l(a,b.filter(function(a){return!a.isState("destroyed")&&!a.isState("fallback")}).map(function(a){return[a.getRootNode(),a]}))},findPopoverAsyncMenuForVideoPlayerController:function(a){var b=i.get(a.getVideoID());return!b?null:l(a.getRootNode(),b.map(function(a){return[a.getTriggerElem(),a]}))},findHostStoryControllerForVideoPlayerController:function(a){var c=j.get(a.getVideoID());if(!c)return null;for(var d=0;d<c.length;d++){var e=c[d];if(b("DOMQuery").contains(e.getContainerElement(),a.getRootNode()))return e}return null},findVideoControllerForStoryController:function(a,c,d){__p&&__p();g.addListener(a.getInstanceID()+"/register",d);d=h.get(c);if(!d)return;d=d.filter(function(a){return!a.isState("destroyed")&&!a.isState("fallback")});for(var c=0;c<d.length;c++){var e=d[c];if(b("DOMQuery").contains(a.getContainerElement(),e.getRootNode())){g.emit(a.getInstanceID()+"/register",e);return}}}};var m=function(){__p&&__p();function a(a,b){this._menu=a,this._originalEndpoint=this._menu._endpoint,this._additionalData=b}var b=a.prototype;b.registerVideoPlayerController=function(a){var b=this;a.addListener("commercialBreak/updateOptionMenuURI",function(a){b._updateEndpoint(a)});a.addListener("commercialBreak/recoverOptionMenuURI",function(){return b._updateEndpoint(b._originalEndpoint)})};b._updateEndpoint=function(a){var b=this._menu;b.setMenu(b._loadingMenu);b._setFocus(b._loadingMenu);b._endpoint=a;b._fetched&&(b._fetched=!1,b.fetchMenu())};b.getInstanceID=function(){return this._menu._instanceId.toString()};b.getTriggerElem=function(){return this._menu.getTriggerElem()};b.getOptionsButtonID=function(){return this._additionalData.options_button_id||""};return a}();e.exports=a}),null);