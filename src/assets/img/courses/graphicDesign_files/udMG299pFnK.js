if (self.CavalryLogger) { CavalryLogger.start_js(["1wF9a"]); }

__d("AdsFluxContextInstrumentation",[],(function(a,b,c,d,e,f){"use strict";var g=null;a={actionStart:function(a){g=a},actionEnd:function(a){},getLastAction:function(){return g}};e.exports=a}),null);
__d("AugmentedLoggerImplementation",["FBLogger","Random"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="augl";function h(){return Math.floor(b("Random").random()*1e16)}function i(a){return a+1}function j(a){return Array.from(a.values())}a=function(){__p&&__p();function a(a,b,c,d){__p&&__p();this.activeSessions=new Map();this.appExperienceSessionInfo={session_id:h(),time:Date.now()};this.contextGetter=b;this.disableServerLogging=!!d.disableServerLogging;this.falcoLoggerGetter=c;this.hasInitialized=!1;this.name=a;this.sequence=0;this.sequenceGenerator=(b=d.sequenceGenerator)!=null?b:i;this.logHook=d.logHook;this.logThrottler=(c=d.logSuppressor)==null?void 0:c.throttler;this.logUnthrottler=(a=d.logSuppressor)==null?void 0:a.unthrottler;this.userInteractionSessionInfo={session_id:h(),time:Date.now()}}var c=a.prototype;c.$1=function(){this.sequence=this.sequenceGenerator(this.sequence);return this.sequence};c.init=function(){if(this.hasInitialized)return;this.hasInitialized=!0;var a=Date.now();this.$2("CoreUserInteraction",{core:{active_sessions:[],app_experience_id:null,event_core_type:"Session",event_name:"CoreUserInteraction",event_type:"CoreUserInteraction",session_id:this.userInteractionSessionInfo.session_id,sequence:this.$1(),user_interaction_id:this.userInteractionSessionInfo.session_id},context:this.contextGetter(),props:{}});this.userInteractionSessionInfo=babelHelpers["extends"]({},this.userInteractionSessionInfo,{time:a});this.$2("CoreAppExperience",{core:{active_sessions:[],app_experience_id:this.appExperienceSessionInfo.session_id,event_core_type:"Session",event_name:"CoreAppExperience",event_type:"CoreAppExperience",session_id:this.appExperienceSessionInfo.session_id,sequence:this.$1(),user_interaction_id:this.userInteractionSessionInfo.session_id},context:this.contextGetter(),props:{}});this.appExperienceSessionInfo=babelHelpers["extends"]({},this.appExperienceSessionInfo,{time:a});this.logUnthrottler&&this.logUnthrottler.init()};c.destroy=function(){if(!this.hasInitialized)return;var a=Date.now();this.$2("CoreAppExperienceEnded",{core:{active_sessions:j(this.activeSessions),app_experience_id:this.appExperienceSessionInfo.session_id,duration:a-this.appExperienceSessionInfo.time,event_core_type:"SessionEnded",event_name:"CoreAppExperienceEnded",event_type:"CoreAppExperienceEnded",session_id:this.appExperienceSessionInfo.session_id,sequence:this.$1(),user_interaction_id:this.userInteractionSessionInfo.session_id},context:this.contextGetter(),props:{}});this.$2("CoreUserInteractionEnded",{core:{active_sessions:j(this.activeSessions),app_experience_id:this.appExperienceSessionInfo.session_id,duration:a-this.userInteractionSessionInfo.time,event_core_type:"SessionEnded",event_name:"CoreUserInteractionEnded",event_type:"CoreUserInteractionEnded",session_id:this.userInteractionSessionInfo.session_id,sequence:this.$1(),user_interaction_id:this.userInteractionSessionInfo.session_id},context:this.contextGetter(),props:{}});this.logUnthrottler&&this.logUnthrottler.destroy();this.sequence=0;this.hasInitialized=!1;this.activeSessions=new Map()};c.$2=function(a,c,d){__p&&__p();d===void 0&&(d=[]);if(!this.hasInitialized){b("FBLogger")(g).info("Logging %s without initializing logger for %s",a,this.name);return}if(this.logThrottler){var e=c.core.event_type+"-"+c.core.event_name,f=this.logThrottler(e);if(f.type==="begin-throttle"){b("FBLogger")(g).info("Throttling %s in %s: %s",e,this.name,f.avgCallsPerSecond);return}else if(f.type==="throttled")return}e=this.falcoLoggerGetter(a);if(!e){b("FBLogger")(g).mustfix("Unable to find falco logger for %s in %s",a,this.name);return}this.disableServerLogging||e.log(function(){return c});if(this.logHook)try{this.logHook({name:this.name,disableServerLogging:this.disableServerLogging},babelHelpers["extends"]({},c,{type_hierarchy:d}))}catch(a){b("FBLogger")(g).mustfix("Exception running logHook for %s for event %s: %s",this.name,c.core.event_name,a.message)}};c.logDiscreteEvent=function(a,b){b===void 0&&(b={});var c=babelHelpers["extends"]({},a.core,{active_sessions:j(this.activeSessions),app_experience_id:this.appExperienceSessionInfo.session_id,sequence:this.$1(),user_interaction_id:this.userInteractionSessionInfo.session_id});this.$2(a.identifier,{core:c,context:babelHelpers["extends"]({},this.contextGetter(),b),props:a.props},a.__getTypeHierarchy())};c.logSessionEvent=function(a,b){b===void 0&&(b={});var c=Date.now(),d=h(),e=babelHelpers["extends"]({},a.core,{active_sessions:j(this.activeSessions),app_experience_id:this.appExperienceSessionInfo.session_id,session_id:d,sequence:this.$1(),user_interaction_id:this.userInteractionSessionInfo.session_id});this.$2(a.identifier,{core:e,context:babelHelpers["extends"]({},this.contextGetter(),b),props:a.props},a.__getTypeHierarchy());e={session_id:d,event_name:a.core.event_name,event_type:a.core.event_type,time:c};this.activeSessions.set(d,e);return e};c.logSessionEndedEvent=function(a,c,d){d===void 0&&(d={});if(!this.activeSessions["delete"](c.session_id)){b("FBLogger")(g).mustfix("Trying to close invalid session id in %s: (%s, %s)",this.name,c.event_type,c.session_id);return}var e=Date.now();e=babelHelpers["extends"]({},a.core,{active_sessions:j(this.activeSessions),app_experience_id:this.appExperienceSessionInfo.session_id,duration:e-c.time,session_id:c.session_id,sequence:this.$1(),user_interaction_id:this.userInteractionSessionInfo.session_id});this.$2(a.identifier,{core:e,context:babelHelpers["extends"]({},this.contextGetter(),d),props:a.props},a.__getTypeHierarchy())};return a}();e.exports=a}),null);
__d("AugmentedLogger",["AugmentedLoggerImplementation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={createLogger:function(a,c,d,e){return new(b("AugmentedLoggerImplementation"))(a,c,d,e)},createDiscreteEvent:function(a){var b=null;return{__setTypeHierarchy:function(a){b=a},create:function(c,d){return{__getTypeHierarchy:function(){return b||[]},core:{event_core_type:"Discrete",event_name:c,event_type:a},identifier:a,props:d}}}},createSessionEvent:function(a){var b=null;return{__setTypeHierarchy:function(a){b=a},create:function(c,d){return{__getTypeHierarchy:function(){return b||[]},core:{event_core_type:"Session",event_name:c,event_type:a},identifier:a,props:d}}}},createSessionEndedEvent:function(a){var b=null;return{__setTypeHierarchy:function(a){b=a},create:function(c,d){return{__getTypeHierarchy:function(){return b||[]},core:{event_core_type:"SessionEnded",event_name:c,event_type:a},identifier:a,props:d}}}}};e.exports=a}),null);
__d("AMCriticalExceptionAugLEvent",["AugmentedLogger"],(function(a,b,c,d,e,f){"use strict";a=b("AugmentedLogger").createDiscreteEvent("AMCriticalException");e.exports=a}),null);
__d("AMExceptionAugLEvent",["AugmentedLogger"],(function(a,b,c,d,e,f){"use strict";a=b("AugmentedLogger").createDiscreteEvent("AMException");e.exports=a}),null);
__d("AMFatalErrorAugLEvent",["AugmentedLogger"],(function(a,b,c,d,e,f){"use strict";a=b("AugmentedLogger").createDiscreteEvent("AMFatalError");e.exports=a}),null);
__d("AdsInterfacesCriticalExceptionEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FLUX_STORE:"FLUX_STORE",FLUX_CONTAINER:"FLUX_CONTAINER",ERROR_BOUNDARY:"ERROR_BOUNDARY",VALIDATOR:"VALIDATOR"})}),null);
__d("AdsInterfacesLogger",["invariant"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="primary",i="secondary",j="ads_interfaces_logger_primary_app",k="ads_interfaces_logger_secondary_app",l=(a={},a[h]={data:[],isRegistered:!1},a[i]={data:[],isRegistered:!1},a),m=new Map(),n=new Set();b=function(){__p&&__p();a.__reset=function(){l[h]={data:[],isRegistered:!1},m.has(j)&&m["delete"](j),l[i]={data:[],isRegistered:!1},m.has(k)&&m["delete"](k),n=new Set()};a.getPath=function(a){return a===h?j:k};a.log=function(b,c){__p&&__p();c===void 0&&(c=i);c===i&&!l[c].isRegistered&&l[h].isRegistered&&(c=h);if(!l[c].isRegistered){l[c].data.push(b);return}c=m.get(this.getPath(c));c||g(0,2975);c instanceof a||g(0,2976);c.__log(b)};a.logOnce=function(b,c){c===void 0&&(c=i);var d=JSON.stringify(b);if(n.has(d))return;a.log(b,c);n.add(d)};a.get=function(a){a===void 0&&(a=i);a===i&&!l[a].isRegistered&&l[h].isRegistered&&(a=h);a=m.get(this.getPath(a));return a};function a(a,b){this.__log=a.log,this.__interfaceID=b}var b=a.prototype;b.getInterfaceID=function(){return this.__interfaceID};b.register=function(a){m.set(this.constructor.getPath(a),this),l[a].isRegistered=!0,l[a].data.length>0&&(l[a].data.forEach(this.__log),l[a].data=[]),a===h&&l[i].data.length>0&&(l[i].data.forEach(this.__log),l[i].data=[])};b.unregister=function(a){m["delete"](this.constructor.getPath(a)),l[a].isRegistered=!1};return a}();b.LOG_TYPE_PRIMARY_APP=h;b.LOG_TYPE_SECONDARY_APP=i;e.exports=b}),null);
__d("AdsInterfacesLoggerUtils",["AdsFluxContextInstrumentation","AdsInterfacesCriticalExceptionEnum","AdsInterfacesLogger","ErrorUtils","ifRequired","requireWeak","AMExceptionAugLEvent","AMCriticalExceptionAugLEvent","AMFatalErrorAugLEvent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=typeof jest!=="undefined";({defaultJSErrorHandler:function(){}});b("requireWeak")("ErrorLogging",function(a){return a});"stackTraceLimit"in Error&&(Error.stackTraceLimit=50);function i(a,c){__p&&__p();a=(g||(g=b("ErrorUtils"))).normalizeError(a);try{JSON.stringify(c)}catch(a){c=null}c=babelHelpers["extends"]({stack_trace:a.stack,action_type_on_error:b("AdsFluxContextInstrumentation").getLastAction()},c,{normalized_error:a});c.error_name=a.name;c.message=a.message;c.meta_message=a.messageWithParams?a.messageWithParams[0]:"-";c.error_line=a.line;c.error_script=a.script;return c}function j(a,c,d){b("AdsInterfacesLogger").log({eventName:c,eventCategory:"errors",data:i(a,d)},b("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP)}var k={logPreloading:function(a,c){b("AdsInterfacesLogger").log({eventName:c,eventCategory:"preloading",data:a},b("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP)},logException:function(a,c){j(a,"ADS_INTERFACES_ERROR_EXCEPTION",c),b("ifRequired")("AdsManagerAugmentedLogger",function(a){a.logDiscreteEvent(b("AMExceptionAugLEvent").create("ads_interfaces_error_exception",{}))})},logCriticalException:function(a,c){j(a,"ADS_INTERFACES_CRITICAL_EXCEPTION",c),h||b("ifRequired")("AdsManagerAugmentedLogger",function(a){var d={};d.error_type=c.error_type;d.action_type_on_error=c.error_type==="VALIDATOR"?b("AdsFluxContextInstrumentation").getLastAction():c.action_type_on_error;d.store_name=c.error_type==="FLUX_STORE"?c.store_name:null;d.module_name=c.error_type==="FLUX_CONTAINER"||c.error_type==="ERROR_BOUNDARY"?c.module_name:null;a.logDiscreteEvent(b("AMCriticalExceptionAugLEvent").create("ads_interfaces_critical_exception",d))})},logFatal:function(a,c){j(a,"ADS_INTERFACES_ERROR_FATAL",c),b("ifRequired")("AdsManagerAugmentedLogger",function(a){return a.logDiscreteEvent(b("AMFatalErrorAugLEvent").create("ads_interfaces_error_fatal",{action_type_on_error:b("AdsFluxContextInstrumentation").getLastAction()}))})},logUserError:function(a,b){j(a,"ADS_INTERFACES_USER_ERROR",b)},constructLogDataForError:i};(g||(g=b("ErrorUtils"))).addListener(function(a,b){b==="FATAL"&&!a.message.toLowerCase().startsWith("script error")&&k.logFatal(a)});e.exports=k}),null);
__d("AdsFluxContainer",["AdsFluxContextInstrumentation","AdsInterfacesLoggerUtils","FluxContainer","getModuleNameFromFluxContainer"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c){__p&&__p();var d=b("FluxContainer").create(a,c),e=function(e){__p&&__p();babelHelpers.inheritsLoose(d,e);function d(){return e.apply(this,arguments)||this}var f=d.prototype;f.componentDidCatch=function(d){if(!d.hasBeenLoggedForAdsInterfaces){var e={action_type_on_error:b("AdsFluxContextInstrumentation").getLastAction(),error_type:"FLUX_CONTAINER",module_name:(c?c.name:null)||b("getModuleNameFromFluxContainer")(a.displayName||a.name)||"AdsFluxContainer(unknown)"};b("AdsInterfacesLoggerUtils").logCriticalException(d,e);d.hasBeenLoggedForAdsInterfaces=!0}throw d};return d}(d);try{Object.defineProperty(e,"name",{value:d.name})}catch(a){}return e}e.exports={create:a,createFunctional:b("FluxContainer").createFunctional}}),null);
__d("MentionResultsPropTypes",["React","SearchableEntry","SelectionState"],(function(a,b,c,d,e,f){a=b("React").PropTypes;c={viewID:a.string.isRequired,selection:a.instanceOf(b("SelectionState")).isRequired,contextComponent:a.object.isRequired,mentionableEntries:a.array.isRequired,highlightedMentionable:a.instanceOf(b("SearchableEntry")),onMentionSelect:a.func.isRequired,onMentionHighlight:a.func.isRequired,onMentionRenderHighlight:a.func.isRequired};e.exports=c}),null);
__d("MentionsLayer.react",["Bootloader","Locale","MentionResultsPropTypes","React","areEqual"],(function(a,b,c,d,e,f){__p&&__p();var g;a=b("React").PropTypes;var h=!1,i=b("Locale").isRTL(),j,k,l,m,n=5;c=b("React").createClass({displayName:"MentionsLayer",propTypes:babelHelpers["extends"]({},b("MentionResultsPropTypes"),{typeaheadView:a.func.isRequired,typeaheadViewProps:a.object,autoflip:a.bool,reverseOrder:a.bool,position:a.oneOf(["above","below"])}),getInitialState:function(){return{bootloaded:h}},getDefaultProps:function(){return{offset:n}},componentDidMount:function(){var a=this;this.state.bootloaded||o(function(){a.isMounted()&&a.setState({bootloaded:!0})})},_onMentionSelect:function(a,b){b.preventDefault(),this.props.onMentionSelect(a,b)},shouldComponentUpdate:function(a,c){return this.state.bootloaded!==c.bootloaded||!(g||(g=b("areEqual")))(this.props.mentionableEntries,a.mentionableEntries)||this.props.highlightedMentionable!==a.highlightedMentionable||this.props.characterOffset!==a.characterOffset},render:function(){__p&&__p();if(!this.state.bootloaded)return null;var a=this.props.mentionableEntries,c=this.props.selection;c=c.isCollapsed()&&c.getHasFocus()&&a&&a.length;var d=null,e=this.props.typeaheadViewProps,f=!1;e&&e.positionAtContext?f=!0:c&&(d=m(this.props.characterOffset,i));e={};this.props.autoflip&&(e.ContextualLayerAutoFlip=k,e.ContextualLayerUpdateOnScroll=l);var g=this.props.typeaheadView;return b("React").jsx(j,{shown:c,context:this.props.contextComponent,contextBounds:d,containerWidthMatchContext:f,offsetY:this.props.offset,offsetX:this.props.offset,position:this.props.position||"below",behaviors:e,shouldSetARIAProperties:!1,children:b("React").jsx("div",{"data-testid":"mentions-contextual-layer",children:b("React").jsx(g,{id:this.props.viewID,viewProps:this.props.typeaheadViewProps,highlightedEntry:this.props.highlightedMentionable,reverseOrder:this.props.reverseOrder,entries:a||[],onSelect:this._onMentionSelect,onHighlight:this.props.onMentionHighlight,onRenderHighlight:this.props.onMentionRenderHighlight})})})}});function o(a){b("Bootloader").loadModules(["ContextualLayer.react","ContextualLayerAutoFlip","ContextualLayerUpdateOnScroll","getMentionableRect"],function(b,c,d,e){j=b,k=c,l=d,m=e,h=!0,a()},"MentionsLayer.react")}e.exports=c}),null);
__d("ScaledImage.react",["cx","Image.react","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this.props,c=a.className,d=a.height,e=a.imageSize,f=a.width;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","height","imageSize","width"]);var g={height:d,width:f},h=e.width/e.height,i=f/d;if(h>i){h=d/e.height;i=e.width*h;h={height:d,left:-Math.floor((i-f)/2),width:i}}else{i=f/e.width;e=e.height*i;h={height:e,top:-Math.floor((e-d)/2),width:f}}return b("React").jsx("div",{className:b("joinClasses")(c,"uiScaledImageContainer"),style:g,children:b("React").jsx(b("Image.react"),babelHelpers["extends"]({style:h},a))})};return c}(b("React").Component);a.propTypes={height:(c=b("prop-types")).number.isRequired,imageSize:c.shape({height:c.number.isRequired,width:c.number.isRequired}).isRequired,width:c.number.isRequired};e.exports=a}),null);
__d("XUIRadioInput.react",["cx","invariant","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){!this.props.children||this.props.children.length===0||h(0,1138);var a=b("joinClasses")(this.props.className,"_55sh"),c=babelHelpers["extends"]({},this.props,{className:null});c=b("React").jsx("input",babelHelpers["extends"]({},c,{type:"radio",children:void 0}));return b("React").jsxs("label",{className:a,"data-testid":this.props.labelDataTestID,children:[c,b("React").jsx("span",{})]})};return c}(b("React").Component);e.exports=a}),null);
__d("deepFreezeValue",["ImmutableValue"],(function(a,b,c,d,e,f){__p&&__p();function a(a){if(a===null||a===void 0)return;switch(typeof a){case"string":return;case"boolean":return;case"number":return;case"function":return;default:b("ImmutableValue").deepFreezeRootNode(a)}}e.exports=a}),null);
__d("SUISpinnerTestSlow.react",["cx","fbt","LoadingMarker.react","React","SUIComponent","SUITheme","joinClasses","prop-types"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=Math.PI;a=.75;var j=1.5;c={arcSpread:a,background:"light",size:"large"};d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$SUISpinner3=function(a){c.$SUISpinner1=a},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.$SUISpinner2()};d.componentDidUpdate=function(){this.$SUISpinner2()};d.$SUISpinner2=function(){__p&&__p();var a=this.$SUISpinner1,c=a&&a.getContext("2d");if(!a||!c)return;var d=b("SUITheme").get(this).SUISpinner,e=d.sizes[this.props.size],f=e.border;e=e.diameter;var g=window.devicePixelRatio||1,h=this.props.background==="dark",k=h?d.darkActiveColor:d.activeColor;h=h?d.darkBackgroundColor:d.backgroundColor;d=e/2*g;e=f*g;f=(d+e)*2;a.height=a.width=f;a.style.width=a.style.height=f/g+"px";c.lineCap="round";c.lineWidth=e;a=f/2;c.beginPath();c.arc(a,a,d,0,2*i);c.strokeStyle=h;c.stroke();c.beginPath();c.arc(a,a,d,j*i,(j+this.props.arcSpread)%2*i);c.strokeStyle=k;c.stroke()};d.render=function(){var a=this.props.animationDuration,c=b("SUITheme").get(this).SUISpinner;c=c.sizes[this.props.size];var d=c.border;c=c.diameter;c=c+d*2;d={};a!==void 0&&(d.style={animationDuration:a+"ms"});return b("React").jsx(b("LoadingMarker.react"),{children:b("React").jsx("span",{"aria-busy":!0,"aria-valuemax":360,"aria-valuemin":0,"aria-valuetext":h._("Loading..."),className:b("joinClasses")("_4cgy",this.props.className,this.props.margin),"data-testid":this.props["data-testid"],role:"progressbar",style:babelHelpers["extends"]({},this.props.style,{height:c,width:c}),children:b("React").jsx("canvas",babelHelpers["extends"]({className:"_1lid",ref:this.$SUISpinner3},d))})})};return c}(b("SUIComponent"));d.propTypes={background:(f=b("prop-types")).oneOf(["dark","light"]).isRequired,className:f.string,margin:f.string,size:f.oneOf(["large","small"]).isRequired,theme:f.instanceOf(b("SUITheme"))};d.defaultProps=c;e.exports=d}),null);
__d("SUIPopoverContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(!1);e.exports=a}),null);
__d("SUIPopoverArrowBehavior",["csx","AbstractContextualDialogArrowBehavior","DOM"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.__getArrow=function(){var a=this.__layer.getContentRoot();return b("DOM").find(a,"._4ii9")};return c}(b("AbstractContextualDialogArrowBehavior"));e.exports=a}),null);
__d("SUIPopoverKeepInViewportBehavior",["csx","AbstractContextualDialogKeepInViewportBehavior","DOM","Style"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.__adjustForScroll=function(a,c){var d=a.getContentRoot();a=a.getContent();b("Style").set(a,"top",-c+"px");this._arrow||(this._arrow=b("DOM").find(d,"._4ii9"));b("Style").set(this._arrow,"top",c+"px")};return c}(b("AbstractContextualDialogKeepInViewportBehavior"));e.exports=a}),null);
__d("SUIPopoverLayer.react",["cx","AlignmentEnum","ContextualLayerAutoFlip","ContextualLayerHideOnScrollOut","ContextualLayerUpdateOnScroll","PositionEnum","React","ReactAbstractContextualDialog","ReactLayer","SUIComponent","SUIPopoverArrowBehavior","SUIPopoverKeepInViewportBehavior","SUITheme","cxMargin","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;var h=12;c=20;var i={ContextualLayerAutoFlip:b("ContextualLayerAutoFlip"),SUIPopoverKeepInViewportBehavior:b("SUIPopoverKeepInViewportBehavior"),ContextualLayerHideOnScrollOut:b("ContextualLayerHideOnScrollOut"),ContextualLayerUpdateOnScroll:b("ContextualLayerUpdateOnScroll")},j=b("ReactLayer").createClass(b("ReactAbstractContextualDialog").createSpec({arrowBehavior:b("SUIPopoverArrowBehavior"),displayName:"SUIPopoverLayerInternal",theme:{arrowDimensions:{offset:h,length:c},wrapperClassName:"_34q2"}}));d={alignment:b("AlignmentEnum").left,position:b("PositionEnum").right};f=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=b("SUITheme").get(this).SUIPopover,c=0,d=0;switch(this.props.position){case"below":c=h;break;case"above":c=-h;break;case"right":d=h;break;case"left":d=-h;break;default:this.props.position}this.props.offsetX!==void 0&&this.props.offsetX!==null&&(d=this.props.offsetX);this.props.offsetY!==void 0&&this.props.offsetY!==null&&(c=this.props.offsetY);var e=this.props.margin||"_3-8k",f=this.props.behaviors!=null?babelHelpers["extends"]({},i,this.props.behaviors):i,g=this.props.position==="right"||this.props.position==="left";return b("React").jsx(j,{alignment:g?"left":this.props.alignment,autoFocus:!1,behaviors:f,contextRef:this.props.contextRef,"data-testid":this.props["data-testid"],focusContextOnHide:!1,keepInViewport:!1,offsetX:d,offsetY:c,position:this.props.position,shown:!0,children:b("React").jsxs("div",{className:"_4ii7"+(this.props.contentWidthUseSparingly!==null&&this.props.contentWidthUseSparingly!==void 0?" _4vie":""),onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave,style:babelHelpers["extends"]({backgroundColor:a.backgroundColor,border:a.border,borderRadius:a.borderRadius,boxShadow:a.boxShadow},a.typeStyle),children:[this.props.title!=null?b("React").jsx("div",{className:e,style:a.title.typeStyle,children:this.props.title}):null,b("React").jsx("div",{className:b("joinClasses")(e,"_4vif"),id:this.props.id,style:{width:this.props.contentWidthUseSparingly},children:this.props.content}),this.props.helpLink!=null?b("React").jsx("div",{className:"_4ii8",children:this.props.helpLink}):null,this.props.footer,b("React").jsx("div",{className:"_4ii9",children:a.showArrow&&b("React").jsx("div",{className:"_4iic",style:{backgroundColor:a.backgroundColor,border:a.border,boxShadow:(g=a.arrowBoxShadow)!=null?g:a.boxShadow}})})]})})};return c}(b("SUIComponent"));f.propTypes={alignment:b("AlignmentEnum").propType,content:a.node.isRequired,contentWidthUseSparingly:a.number,contextRef:a.func.isRequired,footer:a.node,helpLink:a.node,margin:a.string,offsetX:a.number,offsetY:a.number,onMouseEnter:a.func,onMouseLeave:a.func,position:b("PositionEnum").propType,theme:a.instanceOf(b("SUITheme")),title:a.node};f.defaultProps=d;e.exports=f}),null);
__d("SUIPopover.react",["AlignmentEnum","Event","PositionEnum","React","ReactDOM","SUIComponent","SUIPopoverContext","SUIPopoverLayer.react","SUITheme","clearTimeout","setTimeout"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;c={alignment:b("AlignmentEnum").left,delay:0,isShown:!1,linger:300,position:b("PositionEnum").right};d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$SUIPopover3=null,d.$SUIPopover4=null,d.state={isRendered:!1,isHovered:!1},d.$SUIPopover8=function(){d.$SUIPopover10(),d.$SUIPopover11()},d.$SUIPopover9=function(){b("clearTimeout")(d.$SUIPopover6),d.$SUIPopover12()},d.$SUIPopover12=function(){b("clearTimeout")(d.$SUIPopover5),b("clearTimeout")(d.$SUIPopover7),d.$SUIPopover5=b("setTimeout")(d.$SUIPopover13,d.props.linger)},d.$SUIPopover13=function(){d.setState({isHovered:!1,isRendered:!1},d.$SUIPopover14)},d.$SUIPopover10=function(){b("clearTimeout")(d.$SUIPopover5),b("clearTimeout")(d.$SUIPopover7),d.$SUIPopover7=b("setTimeout")(d.$SUIPopover16,d.props.delay)},d.$SUIPopover15=function(){d.setState({isRendered:!0})},d.$SUIPopover16=function(){d.setState({isHovered:!0},d.$SUIPopover14)},d.$SUIPopover14=function(){d.props.onToggle&&d.props.onToggle(d.state.isHovered)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){var a=this.props.hoverContextRef&&b("ReactDOM").findDOMNode(this.props.hoverContextRef());if(!a)return;this.$SUIPopover1=b("Event").listen(a,"mouseenter",this.$SUIPopover8);this.$SUIPopover2=b("Event").listen(a,"mouseleave",this.$SUIPopover9)};d.componentWillUnmount=function(){b("clearTimeout")(this.$SUIPopover5),b("clearTimeout")(this.$SUIPopover7),this.$SUIPopover1&&this.$SUIPopover1.remove(),this.$SUIPopover2&&this.$SUIPopover2.remove(),this.$SUIPopover3&&this.$SUIPopover3.remove(),this.$SUIPopover4&&this.$SUIPopover4.remove()};d.$SUIPopover11=function(){b("clearTimeout")(this.$SUIPopover6);var a=this.props,c=a.delay;a=a.renderDelay;a!=null&&a>=0&&a<c&&(this.$SUIPopover6=b("setTimeout")(this.$SUIPopover15,this.props.renderDelay))};d.render=function(){var a=this,c=this.props,d=c["data-testid"],e=c.contextRef,f=c.hoverContextRef,g=c.isShown,h=c.offsetX,i=babelHelpers.objectWithoutPropertiesLoose(c,["data-testid","contextRef","hoverContextRef","isShown","offsetX"]);c=this.state;var j=c.isRendered,k=c.isHovered;return b("React").jsx(b("SUIPopoverContext").Consumer,{children:function(c){c=k||c===!0||g;return j||c?b("React").jsx(b("SUIPopoverLayer.react"),babelHelpers["extends"]({contextRef:e||f,"data-testid":d,offsetX:j&&!c?-1e4:h,onMouseEnter:a.$SUIPopover10,onMouseLeave:a.$SUIPopover12},i)):null}})};return c}(b("SUIComponent"));d.propTypes={alignment:b("AlignmentEnum").propType,behaviors:a.object,children:a.node,content:a.node.isRequired,contentWidthUseSparingly:a.number,delay:a.number,footer:a.node,helpLink:a.node,isShown:a.bool,linger:a.number,margin:a.string,offsetX:a.number,offsetY:a.number,position:b("PositionEnum").propType,renderDelay:a.number,theme:a.instanceOf(b("SUITheme")),title:a.node};d.defaultProps=c;e.exports=d}),null);
__d("focusNode",[],(function(a,b,c,d,e,f){"use strict";function a(a){try{a.focus()}catch(a){}}e.exports=a}),null);
__d("fbjs/lib/containsNode",["containsNode"],(function(a,b,c,d,e,f){"use strict";e.exports=b("containsNode")}),null);
__d("fbjs/lib/focusNode",["focusNode"],(function(a,b,c,d,e,f){"use strict";e.exports=b("focusNode")}),null);
__d("fbjs/lib/getActiveElement",["getActiveElement"],(function(a,b,c,d,e,f){"use strict";e.exports=b("getActiveElement")}),null);
__d("ReactInputSelection",["ReactDOMSelection","fbjs/lib/containsNode","fbjs/lib/focusNode","fbjs/lib/getActiveElement"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=1;function h(a){return b("fbjs/lib/containsNode")(document.documentElement,a)}var i={hasSelectionCapabilities:function(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&(b==="input"&&a.type==="text"||b==="textarea"||a.contentEditable==="true")},getSelectionInformation:function(){var a=b("fbjs/lib/getActiveElement")();return{focusedElem:a,selectionRange:i.hasSelectionCapabilities(a)?i.getSelection(a):null}},restoreSelection:function(a){__p&&__p();var c=b("fbjs/lib/getActiveElement")(),d=a.focusedElem;a=a.selectionRange;if(c!==d&&h(d)){i.hasSelectionCapabilities(d)&&i.setSelection(d,a);c=[];a=d;while(a=a.parentNode)a.nodeType===g&&c.push({element:a,left:a.scrollLeft,top:a.scrollTop});b("fbjs/lib/focusNode")(d);for(var a=0;a<c.length;a++){d=c[a];d.element.scrollLeft=d.left;d.element.scrollTop=d.top}}},getSelection:function(a){var c;"selectionStart"in a?c={start:a.selectionStart,end:a.selectionEnd}:c=b("ReactDOMSelection").getOffsets(a);return c||{start:0,end:0}},setSelection:function(a,c){var d=c.start,e=c.end;e===void 0&&(e=d);"selectionStart"in a?(a.selectionStart=d,a.selectionEnd=Math.min(e,a.value.length)):b("ReactDOMSelection").setOffsets(a,c)}};e.exports=i}),null);