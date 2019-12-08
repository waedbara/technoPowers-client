if (self.CavalryLogger) { CavalryLogger.start_js(["dwkDR"]); }

__d("InstreamVideoAdBreak",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this.$1=a.instreamPlacement,this.$2=a.index,this.$3=a.timeOffsetInMs,this.$4=a.adBreakDurationInMs,this.$5=a.isAdBreakAutoInserted,this.$6=a.naturalnessScore,this.$7=a.midSpeechScore}var b=a.prototype;b.getInstreamPlacement=function(){return this.$1};b.getIndex=function(){return this.$2};b.getTimeOffsetInMs=function(){return this.$3};b.getAdBreakDurationInMs=function(){return this.$4};b.getIsAdBreakAutoInserted=function(){return this.$5};b.getNaturalnessScore=function(){return this.$6};b.getMidSpeechScore=function(){return this.$7};return a}();e.exports=a}),null);
__d("AppUserRoleConstants.brands",[],(function(a,b,c,d,e,f){a=Object.freeze({ADMIN:"ADMIN",MANAGER:"MANAGER",EMPLOYEE:"EMPLOYEE",NO_PERMISSION:"NO_PERMISSION"});e.exports=a}),null);
__d("useOnBeforeUnload",["requireCond","cr:1073372"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:1073372")}),null);
__d("useOnBeforeUnloadBlue",["React","Run"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useEffect;function a(a){var c=function(){var b=a();return b==null?void 0:b.warnMessage};g(function(){return b("Run").onBeforeUnload(c,!0).remove})}e.exports=a}),null);
__d("CometRelayEntryPointEnvironmentProvider",["CometRelayEnvironmentFactory"],(function(a,b,c,d,e,f){"use strict";function a(a){a=a==null?void 0:a.actorID;return a==null?b("CometRelayEnvironmentFactory")["default"]:b("CometRelayEnvironmentFactory").getForActorID(String(a))}e.exports={getEnvironment:a}}),null);
__d("BudgetProduct",["React"],(function(a,b,c,d,e,f){"use strict";function a(a,b){return b}e.exports={create:a}}),null);
__d("BaseDialog.react",["CometHideLayerOnEscape.react","React","cometTestID","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("React").useCallback,i=b("React").useRef,j={anchor:{alignItems:"ll8tlv6m",display:"j83agx80",justifyContent:"taijpn5t",pointerEvents:"hzruof5a"},dialog:{display:"j83agx80",flexDirection:"cbu4d94t",overflowX:"ni8dbmo4",overflowY:"stjgntxs",pointerEvents:"oqq733wu",position:"l9j0dhe7",zIndex:"du4w35lb"},root:{alignItems:"gs1a9yip",boxSizing:"rq0escxv",display:"j83agx80",flexDirection:"cbu4d94t",justifyContent:"taijpn5t",minHeight:"h3gjbzrl",paddingTop:"mzuyfyff",paddingEnd:"dflh9lhu",paddingBottom:"b9s9zkiy",paddingStart:"scb9dxdr"}};function a(a){__p&&__p();var c=a.anchorUntilHeight;c=c===void 0?0:c;var d=a.children,e=a.disableClosingWithMask,f=e===void 0?!1:e;e=a.label;var k=a.labelledBy,l=a.onClose,m=a.testid;a=a.xstyle;var n=b("React").createRef(),o=i(!1),p=h(function(a){if(o.current===!1)return;f===!1&&l()},[f,l]),q=h(function(a){o.current=a.target===n.current},[n]),r=h(function(a){o.current=!1},[]),s=h(function(a){o.current=!1,a.stopPropagation()},[]);return b("React").jsx(b("CometHideLayerOnEscape.react"),{contextElement:null,onHide:l,children:b("React").jsx("div",{className:(g||(g=b("stylex")))(j.root),onMouseDown:q,onMouseUp:p,onTouchEnd:p,onTouchMove:r,onTouchStart:q,ref:n,children:b("React").jsx("div",{className:g(j.anchor),style:{minHeight:c},children:b("React").jsx("div",babelHelpers["extends"]({"aria-label":e,"aria-labelledby":k,className:g(j.dialog,a)},b("cometTestID")(m),{onMouseUp:s,onTouchEnd:s,role:"dialog",children:d}))})})})}e.exports=a}),null);
__d("BaseGlimmer.react",["FocusWithinHandler.react","React","ariaGlimmerProps","joinClasses","stylex","useCometLoadingStateTracker","useMergeRefs","useSupportsAnimations","useVisibilityObserver"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("React").useCallback,i=b("React").useState,j=1e3,k=100;function a(a){__p&&__p();var c=a.children,d=a.className,e=a.index;a=a.theme;var f=a===void 0?"light":a,l=b("useSupportsAnimations")();a=i(!0);var m=a[0],n=a[1];a=h(function(a){a=a.hiddenReason;a!=="COMPONENT_UNMOUNTED"&&n(!0)},[]);var o=h(function(){n(!1)},[]);a=b("useVisibilityObserver")({onHidden:a,onVisible:o});o=b("useCometLoadingStateTracker")();var p=o[0];o=o[1];var q=b("useMergeRefs")(a,o);return b("React").jsx(b("FocusWithinHandler.react"),{children:function(a,h){return b("React").jsx("div",babelHelpers["extends"]({},p,{className:b("joinClasses")((g||(g=b("stylex"))).dedupe(l?{"animation-direction-1":"afxn4irw","animation-duration-1":"r8dsh44q","animation-iteration-count-1":"ee40wjg4","animation-name-1":"skuavjfj","animation-timing-function-1":"ku44ohm1","opacity-1":"lszeityy"}:{},m?{"animation-play-state-1":"sb3519qa"}:null,{"background-color-1":"g6srhlxm"},f==="dark"?{"background-color-1":"pgeiv1et"}:null,a&&!h?{"outline-0.1":"lzcic4wl"}:null),d),ref:q,style:l?{animationDelay:j+k*e+"ms"}:void 0},b("ariaGlimmerProps"),{children:c}))}})}e.exports=a}),null);
__d("CometHeadingContextWrapper.react",["CometHeadingContext","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useContext;function a(a){a=a.children;var c=g(b("CometHeadingContext"));return b("React").jsx(b("CometHeadingContext").Provider,{value:c+1,children:a})}e.exports=a}),null);
__d("CometCardedDialog.react",["ix","fbt","BaseDialog.react","CometHeadingContextWrapper.react","CometTrackingNodeProvider.react","React","TetraCircleButton.react","TetraText.react","TetraTextPairing.react","fbicon","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j={backButton:{position:"pmk7jnqg",start:"re5koujm",top:"fcg2cn6m",zIndex:"tkr6xdv7"},card:{backgroundColor:"cwj9ozl2",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",boxShadow:"nwpbqux9"},closeButton:{end:"cypi58rs",position:"pmk7jnqg",top:"fcg2cn6m",zIndex:"tkr6xdv7"},header:{borderBottom:"linmgsc8",boxSizing:"rq0escxv",height:"cb02d2ww"},headerWithBackButton:{paddingStart:"bjjun2dj"},headerWithCloseButton:{paddingEnd:"clqubjjj"},headerWithPadding:{paddingEnd:"clqubjjj",paddingStart:"bjjun2dj"},titleWrapper:{alignItems:"bp9cbjyn",boxSizing:"rq0escxv",display:"j83agx80",height:"datstx6m",paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"}},k={content:{},medium:{maxWidth:"pwh3vvf2",width:"k4urcfbm"},small:{maxWidth:"gc7gaz0o",width:"k4urcfbm"}},l={center:{justifyContent:"taijpn5t"},start:{justifyContent:"jifvfom9"}};function a(a){__p&&__p();var c,d=a.anchorUntilHeight;d=d===void 0?0:d;var e=a.children,f=a.header,m=a.onBack;m=m===void 0?function(){}:m;var n=a.onClose;n=n===void 0?function(){}:n;var o=a.disableClosingWithMask;o=o===void 0?!1:o;var p=a.labelledBy,q=a.size;q=q===void 0?"small":q;var r=a.testid,s=a.title,t=a.titleWithEntities,u=a.subtitle,v=a.titleHorizontalAlignment;v=v===void 0?"center":v;var w=a.withBackButton;w=w===void 0?!1:w;a=a.withCloseButton;a=a===void 0?!1:a;c=(c=s)!=null?c:t;return b("React").jsxs(b("BaseDialog.react"),{anchorUntilHeight:d,disableClosingWithMask:o,label:p!=null?void 0:(t=s)!=null?t:void 0,labelledBy:p,onClose:n,testid:r,xstyle:[j.card,k[q]],children:[f!=null&&b("React").jsx("div",{className:(i||(i=b("stylex")))(j.header,a&&j.headerWithCloseButton,w&&j.headerWithBackButton,(a||w)&&v==="center"&&j.headerWithPadding),children:f}),c!=null&&f==null&&b("React").jsx("div",{className:(i||(i=b("stylex")))(j.header,a&&j.headerWithCloseButton,w&&j.headerWithBackButton,(a||w)&&v==="center"&&j.headerWithPadding),children:b("React").jsx("div",{className:(i||(i=b("stylex")))(j.titleWrapper,l[v]),children:u!=null?b("React").jsx(b("TetraTextPairing.react"),{body:u,bodyLineLimit:2,headline:c,headlineLineLimit:1,level:2,textAlign:"center"}):b("React").jsx(b("TetraText.react"),{numberOfLines:1,type:"headlineEmphasized2",children:c})})}),a?b("React").jsx(b("CometTrackingNodeProvider.react"),{trackingNode:141,children:b("React").jsx("div",{className:(i||(i=b("stylex")))(j.closeButton),children:b("React").jsx(b("TetraCircleButton.react"),{color:"secondary",icon:b("fbicon")._(g("478233"),20),label:h._("Close"),onPress:n,size:36})})}):null,w?b("React").jsx("div",{className:(i||(i=b("stylex")))(j.backButton),children:b("React").jsx(b("TetraCircleButton.react"),{color:"secondary",icon:b("fbicon")._(g("512647"),20),label:h._("Back"),onPress:m,size:36})}):null,b("React").jsx(b("CometHeadingContextWrapper.react"),{children:e})]})}e.exports=a}),null);
__d("CometCardedDialogLoadingState.react",["BaseGlimmer.react","CometCardedDialog.react","React","stylex","useSupportsAnimations"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=b("useSupportsAnimations")();return b("React").jsx("div",{className:c?"r2dqequf k4mk90pw il7rb8sk":"",children:b("React").jsxs(b("CometCardedDialog.react"),babelHelpers["extends"]({},a,{children:[a.title==null&&b("React").jsx("div",{className:"oqcyycmt taijpn5t cb02d2ww j83agx80 linmgsc8 bp9cbjyn",children:b("React").jsx(b("BaseGlimmer.react"),{className:"gjzvkazv i4qgphn6 hc21y3pz c6w6u7b1 mjfe6jtr h1ci2mql",index:0})}),b("React").jsxs("div",{className:"lt9micmv ckl02a0p gl4o1x5y aodizinl",children:[b("React").jsx(b("BaseGlimmer.react"),{className:"p5pk11vy i4qgphn6 hc21y3pz c6w6u7b1 mjfe6jtr h1ci2mql eq70wtua",index:1}),b("React").jsx(b("BaseGlimmer.react"),{className:"p5pk11vy i4qgphn6 hc21y3pz c6w6u7b1 mjfe6jtr h1ci2mql pfqjqu37",index:2})]})]}))})}e.exports=a}),null);
__d("CometSuspendedDialogImpl.react",["CometCardedDialogLoadingState.react","CometPlaceholder.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(a){return b("React").jsx(b("CometCardedDialogLoadingState.react"),{onClose:a,withCloseButton:!0})};function a(a){var c=a.dialog,d=a.dialogProps,e=a.fallback;e=e===void 0?g:e;a=babelHelpers.objectWithoutPropertiesLoose(a,["dialog","dialogProps","fallback"]);var f=a.onClose;e=e(f);return b("React").jsx(b("CometPlaceholder.react"),{fallback:e,children:b("React").jsx(c,babelHelpers["extends"]({},d,a))})}e.exports=a}),null);
__d("useCometEntryPointDialog",["CometDialogContext","CometRelay","CometRelayEntryPointEnvironmentProvider","CometSuspendedDialogImpl.react","React","recoverableViolation","stableStringify","useCometPrerenderer"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("CometRelay").EntryPointContainer,h=b("CometRelay").prepareEntryPoint,i=b("React").useCallback,j=b("React").useContext,k=b("React").useRef;function l(a){var c=a.onClose,d=a.otherProps;a=a.preloadedEntryPoint;d=babelHelpers["extends"]({},d,{onClose:c});return b("React").jsx(g,{entryPointReference:a,props:d})}function a(a,c,d,e){__p&&__p();var f=k(null),g=b("stableStringify")(c),m=i(function(){f.current=null},[]),n=i(function(){var d;if(c==null)return;(f.current==null||f.current.dialogEntryPoint!==a||f.current.preloadParamsHash!==g)&&(f.current={dialogEntryPoint:a,preloadParamsHash:g,preloadedEntryPoint:h(b("CometRelayEntryPointEnvironmentProvider"),a,c)});return(d=f.current)==null?void 0:d.preloadedEntryPoint},[a,g]);d=b("useCometPrerenderer")(d,!1,a.root,n,m);d[0];var o=d[1],p=d[2];d=d[3];var q=k(null),r=j(b("CometDialogContext")),s=i(function(a,c){var d=n();if(d==null){b("recoverableViolation")("Unable to present comet EntryPoint dialog, preloadParams not set","comet_ui");return}m();var f=l;r(b("CometSuspendedDialogImpl.react"),{dialog:f,dialogProps:{otherProps:a,preloadedEntryPoint:d},fallback:e},c)},[r,e,n,m]);return[s,q,o,p,d]}e.exports=a}),null);
__d("CometEntryPointDialogTrigger.react",["React","useCometEntryPointDialog"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useCallback;function a(a){__p&&__p();var c=a.children,d=a.dialogEntryPoint,e=a.fallback,f=a.onHide,h=a.preloadParams,i=a.preloadTrigger,j=a.otherProps;a=a.onShow;var k=a===void 0?function(){}:a;a=b("useCometEntryPointDialog")(d,h,i,e);var l=a[0];a[1];d=a[2];h=a[3];i=a[4];e=g(function(){l(j,f),k()},[l,j,f,k]);return c(e,d,h,i)}e.exports=a}),null);
__d("useCometLazyDialog",["CometDialogContext","CometSuspendedDialogImpl.react","React","lazyLoadComponent"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useCallback,h=b("React").useContext,i=b("React").useRef;function a(a,c){var d=i(null),e=h(b("CometDialogContext")),f=g(function(d,f){var g=b("lazyLoadComponent")(a);e(b("CometSuspendedDialogImpl.react"),{dialog:g,dialogProps:d,fallback:c},f)},[e,a,c]),j=g(function(){a.preload()},[a]);return[f,d,j]}e.exports=a}),null);
__d("CometLazyDialogTrigger.react",["React","useCometLazyDialog"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useCallback;function a(a){__p&&__p();var c=a.children,d=a.dialogProps,e=a.dialogResource,f=a.fallback,h=a.onHide;a=a.onShow;var i=a===void 0?function(){}:a;a=b("useCometLazyDialog")(e,f);var j=a[0];e=a[1];f=a[2];a=g(function(){j(d,h),i()},[j,d,h,i]);return c(a,e,f)}e.exports=a}),null);
__d("ProfileBrowserLink",["URI"],(function(a,b,c,d,e,f){var g,h="/ajax/browser/dialog/",i="/browse/",j=function(a,c,d){return new(g||(g=b("URI")))(a+c).setQueryData(d)};a={constructPageURI:function(a,b){return j(i,a,b)},constructDialogURI:function(a,b){return j(h,a,b)}};e.exports=a}),null);
__d("ProfileBrowserTypes",[],(function(a,b,c,d,e,f){a=Object.freeze({EXTERNALTASK_SUBSCRIBERS:"task_subscribers",FRIEND_CHECKINS:"friendcheckins",FRIENDED_FANS_OF:"friended_fans_of",GROUP_FRIEND_MEMBERS:"group_friend_members",GROUP_JOIN_REQUESTERS_FRIENDS_IN_GROUP:"group_join_requesters_friends_in_group",GROUP_MEMBERS:"group_members",GROUP_MESSAGE_VIEWERS:"group_message_viewers",LIKES:"likes",LIVE_VIDEO_VIEWERS:"live_video_viewers",MUTUAL_FRIENDS:"mutual_friends",OPTION_VOTERS:"option_voters",PAGE_FEATURED_ADMINS:"featured_admins",WORK_ADMIN_GROUP_ADMINS:"work_admin_group_admins",WORK_ADMIN_GROUP_MEMBERS:"work_admin_group_members"});e.exports=a}),null);
__d("StickerInterfaces",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MESSAGES:"messages",NEO:"neo",COMMENTS:"comments",STICKERED:"stickered",COMPOSER:"composer",POSTS:"posts",FRAMES:"frames",SMS:"sms",MONTAGE:"montage"})}),null);
__d("UFIStickerButton.react",["cx","fbt","Arbiter","Bootloader","FocusRelocator.react","Link.react","React","StickerInterfaces","getObjectValues","setImmediate"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"UFIStickerButton",_clickGuard:!1,_updateListener:null,_openFlyoutListener:null,_linkRef:null,propTypes:{customStickerOwnerID:a.string,onStickerFlyoutShow:a.func,onStickerSelected:a.func.isRequired,showTooltip:a.bool,stickerInterface:a.oneOf(b("getObjectValues")(b("StickerInterfaces"))),tabIndex:a.number},getDefaultProps:function(){return{customStickerOwnerID:"",showTooltip:!0,stickerInterface:"comments"}},getInitialState:function(){return{renderFlyout:null,flyoutShown:!1}},componentDidMount:function(){var a=this;this._updateListener=b("Arbiter").subscribe("page_transition",function(){return a._hideFlyout()});this._openFlyoutListener=b("Arbiter").subscribe("GamingStickers/openFlyout",function(b,c){return a._showFlyout(c)})},componentWillUnmount:function(){this._updateListener&&this._updateListener.unsubscribe(),this._openFlyoutListener&&this._openFlyoutListener.unsubscribe()},render:function(){var a=h._("Post a sticker");return b("React").jsx(b("FocusRelocator.react"),{from:this._linkRef,to:this.refs.icon,children:b("React").jsxs(b("Link.react"),{"aria-label":a,className:"_r1a UFICommentStickerButton","data-hover":"tooltip","data-tooltip-alignh":"center","data-tooltip-content":this.props.showTooltip?a:null,linkRef:this._setRef,onClick:this._onLinkClicked,onMouseDown:this._prepareForClick,role:"button",tabIndex:this.props.tabIndex,children:[b("React").jsx("div",{ref:"icon",className:"UFICommentStickerIcon"+(this.state.flyoutShown?" UFICommentStickerIconActive":"")}),this.props.children,this.state.renderFlyout?this.state.renderFlyout():null]})})},_hideFlyout:function(){this.setState({flyoutShown:!1})},_showFlyout:function(a){var c=this;b("Bootloader").loadModules(["ContextualLayerAutoFlip","LayerTabIsolation","StickersFlyout.react","XUIContextualDialog.react","StickersActions"],function(d,e,f,g,h){c.setState({flyoutShown:!0,renderFlyout:function(){return b("React").jsx(g,{alignment:"right",behaviors:{ContextualLayerAutoFlip:d,LayerTabIsolation:e},className:"_5e-r",contextRef:function(){return c._linkRef},onBlur:c._hideFlyout,onToggle:function(a){!a&&c.state.flyoutShown&&c._hideFlyout()},position:"above",shown:c.state.flyoutShown,hasActionableContext:!0,width:278,children:b("React").jsx("div",{children:b("React").jsx(f,{customStickerOwnerID:c.props.customStickerOwnerID,onEscKeyDown:c._hideFlyout,onStickerSelect:c._onStickerSelected,stickerInterface:c.props.stickerInterface,shown:c.state.flyoutShown})})})}}),c.props.onStickerFlyoutShow&&c.props.onStickerFlyoutShow(),a&&b("setImmediate")(function(){return h.selectTrayPack(a)})},"UFIStickerButton.react")},_prepareForClick:function(){this._clickGuard=this.state.flyoutShown},_onLinkClicked:function(a){a.preventDefault();if(this.state.renderFlyout!==null){this._clickGuard||(this.props.onStickerFlyoutShow&&this.props.onStickerFlyoutShow(),this.setState({flyoutShown:!0}));return}this._showFlyout(null)},_onStickerSelected:function(a,b,c){this.props.onStickerSelected(a,b,c),this._hideFlyout()},_setRef:function(a){this._linkRef=a}});e.exports=c}),null);
__d("FeedObjectCapstone",["csx","DOM","Parent","ge"],(function(a,b,c,d,e,f,g){__p&&__p();var h={getCapstone:function(a){var c=b("DOM").scry(a,"._x1g");c.length||(c=b("DOM").scry(a.parentNode,"._x1g"));return c?c[0]:null},addCapstoneByStoryID:function(a,c){a=b("Parent").bySelector(b("ge")(a),"._5jmm");this.addCapstone(a,c)},addCapstone:function(a,c){var d=b("DOM").find(a,"._5v3q");d&&(a=d);this.removeCapstone(a);c&&b("DOM").prependContent(a,c);return c},removeCapstone:function(a){a=h.getCapstone(a);a&&b("DOM").remove(a)}};e.exports=h}),null);
__d("EntstreamFeedObjectFollowup",["csx","cx","Arbiter","CSS","DOM","EntstreamFeedObject","Event","FeedObjectCapstone","ge"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i="EntstreamFeedObjectFollowup/removed",j={getFollowup:function(a){var c=b("DOM").scry(a,"._5lum");c.length||(c=b("DOM").scry(a.parentNode,"._5lum"));return c?c[0]:null},initCloseButton:function(a){var c=b("DOM").scry(a,"._5xsl");if(c.length==0)return;var d=b("Event").listen(c[0],"click",function(){d.remove(),b("DOM").remove(a),b("Arbiter").inform(i,a)});a.listener=d},stopListenCloseButton:function(a){a.listener&&a.listener.remove()},addFollowup:function(a,c,d){__p&&__p();var e=b("CSS").matchesSelector(a,"._5pat"),f=b("DOM").create("div",{className:"_5lum"});e?b("CSS").addClass(f,"_5pau"):b("CSS").addClass(f,"_1f84");if(d)if(typeof d==="string")b("CSS").addClass(f,d);else if(d instanceof Array)for(var e=0;e<d.length;e++)b("CSS").addClass(f,d[e]);d=b("DOM").scry(a,"._5v3q")[0];d&&(a=d);e=j.getFollowup(a);e&&this.removeFollowup(e);b("FeedObjectCapstone").removeCapstone(a);c?(b("DOM").appendContent(f,c),this.initCloseButton(f),b("CSS").matchesSelector(f,"._4-u3")?b("DOM").prependContent(a,f):b("DOM").insertBefore(a,f)):b("DOM").prependContent(a,f);return f},removeFollowup:function(a){a=j.getFollowup(a);this.stopListenCloseButton(a);b("DOM").remove(a);b("Arbiter").inform(i,a)},appendToFollowup:function(a,c){a=b("EntstreamFeedObject").getRoot(b("ge")(a));a=j.getFollowup(a);b("DOM").appendContent(a,c)},addInstreamAdsFollowup:function(a){a=b("DOM").scry(a,"._211q");var c=b("DOM").create("div",{className:"_5lum"});b("DOM").prependContent(a[0],c);return c}};e.exports=j}),null);
__d("WoodhengePromotionStrings",["fbt"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a={SUPPORT_NOW_CTA_TITLE:g._("Become a Supporter"),SUPPORT_NOW_CTA_DESCRIPTION:function(a){return g._("Support {Page Name} and enjoy special benefits.",[g._param("Page Name",a)])},SUPPORT_NOW_CTA_BUTTON_TEXT:g._("Support Now"),START_FREE_TRIAL_CTA_TITLE:g._("Join the Community"),START_FREE_TRIAL_CTA_DESCRIPTION:function(a){return g._("Start a subscription to support {Page Name} .",[g._param("Page Name",a)])},START_FREE_TRIAL_CTA_BUTTON_TEXT:g._("Get 1 Month Free"),COMPOSER_NUX_TEXT:g._("Add a call-to-action button to spread awareness of your fan subscriptions."),SUPPORTER_GOAL_MODAL_HEADER:g._("Set a Goal"),SUPPORTER_GOAL_MODAL_DESCRIPTION_PART_1:g._("Set a goal and offer your community an incentive to help you reach it."),SUPPORTER_GOAL_MODAL_DESCRIPTION_PART_2:g._("This goal will be displayed when you add a subscription button to a post. The goal doesn't have a time limit, it can be edited anytime, and it will automatically disappear when it's met."),SUPPORTER_GOAL_HEADER:g._("Goal"),SUPPORTER_GOAL_SHOW_CURRENT_TOTAL_NUMBER_CHECKBOX_TEXT:g._("Show the current total number"),SUPPORTER_GOAL_SHOW_CURRENT_TOTAL_NUMBER_CHECKBOX_TOOLTIP:g._("The total number of whatever you're trying to increase will be displayed. For example, if you're trying to get new supporters, the total number of supporters you currently have will be displayed."),SUPPORTER_GOAL_TITLE_HEADER:g._("Goal Title"),SUPPORTER_GOAL_TITLE_GHOST_TEXT:function(a){return a?g._("Write a title for your goal..."):g._("Let's Grow the Supporter Community!")},SUPPORTER_GOAL_INCENTIVE_HEADER:g._("Incentive Description"),SUPPORTER_GOAL_INCENTIVE_GHOST_TEXT:function(a){return a?g._("Write a message to thank your followers once the goal is met..."):g._("If we reach this goal, I'll give supporters a behind-the-scenes look at how I create my content!")},SUPPORTER_GOAL_INCENTIVE_TOOLTIP:g._("Offering a reward will encourage your community to help you achieve your goal. Be sure to offer something that you can reliably deliver."),SUPPORTER_GOAL_DROPDOWN_MENU_WITHOUT_TOTAL_NUMBER:function(a){return g._("{Number of supporters selected} New Supporters",[g._param("Number of supporters selected",a)])},SUPPORTER_GOAL_DROPDOWN_MENU_WITH_TOTAL_NUMBER:function(a){return g._("{Number of supporters selected} Supporters",[g._param("Number of supporters selected",a)])},SUPPORTER_GOAL_DROPDOWN_MENU_PLACEHOLDER_TEXT:g._("No goal selected"),ADD_SUPPORTER_GOAL_BUTTON_TEXT:g._("Add a Goal"),ADD_SUPPORTER_GOAL_BUTTON_TOOLTIP:g._("Create a goal to get new supporters. This goal will be shown on your post next to the subscription button."),PROGRESS_BAR_DESCRIPTION_WITH_TOTAL_NUMBER:function(a,b){return g._("{current progress number} of {target progress number} Supporters",[g._param("current progress number",a),g._param("target progress number",b)])},PROGRESS_BAR_DESCRIPTION_WITHOUT_TOTAL_NUMBER:function(a,b){return g._("{current progress number} of {target progress number} New Supporters",[g._param("current progress number",a),g._param("target progress number",b)])},SUPPORTER_GOAL_NULLSTATE_TEXT:g._("Your goal will appear here."),SUPPORTER_GOAL_PROMPT_MESSAGE:g._("Post about your goal")};e.exports=a}),null);
__d("isEmail",[],(function(a,b,c,d,e,f){var g=/^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;function a(a){return g.test(a)}e.exports=a}),null);
__d("useDebouncedValue",["React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useEffect,h=b("React").useState;function a(a,b){var c=h(a),d=c[0],e=c[1];g(function(){var c=setTimeout(function(){return e(a)},b);return function(){return clearTimeout(c)}},[a,b]);return d}e.exports=a}),null);
__d("CommentPrivacyValue",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({DEFAULT_PRIVACY:0,OWNER_OR_COMMENTER:1,FRIENDS_ONLY:2,FRIENDS_AND_POST_OWNER:3,SIDE_CONVERSATION:4,SIDE_CONVERSATION_AND_POST_OWNER:5,GRAPHQL_MULTIPLE_VALUE_HACK_DO_NOT_USE:-1})}),null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("object-assign-4.1.1",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={};var g={exports:a};function h(){__p&&__p();var a=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function d(a){if(a===null||a===void 0)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(a)}function e(){__p&&__p();try{if(!Object.assign)return!1;var a=new String("abc");a[5]="de";if(Object.getOwnPropertyNames(a)[0]==="5")return!1;var b={};for(var a=0;a<10;a++)b["_"+String.fromCharCode(a)]=a;a=Object.getOwnPropertyNames(b).map(function(a){return b[a]});if(a.join("")!=="0123456789")return!1;var c={};"abcdefghijklmnopqrst".split("").forEach(function(a){c[a]=a});return Object.keys(Object.assign({},c)).join("")!=="abcdefghijklmnopqrst"?!1:!0}catch(a){return!1}}g.exports=e()?Object.assign:function(e,f){__p&&__p();var g,h=d(e),i;for(var j=1;j<arguments.length;j++){g=Object(arguments[j]);for(var k in g)b.call(g,k)&&(h[k]=g[k]);if(a){i=a(g);for(var l=0;l<i.length;l++)c.call(g,i[l])&&(h[i[l]]=g[i[l]])}}return h}}var i=!1,j=function(){i||(i=!0,h());return g.exports};b=function(a){switch(a){case void 0:return j()}};e.exports=b}),null);
__d("XLivingRoomUFIController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/async/watchparty/{living_room_id}/",{living_room_id:{type:"FBID",required:!0}})}),null);