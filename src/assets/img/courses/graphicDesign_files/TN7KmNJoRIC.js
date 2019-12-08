if (self.CavalryLogger) { CavalryLogger.start_js(["Dh+P+"]); }

__d("UFI2TypingIndicator_feedback.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"UFI2TypingIndicator_feedback",type:"Feedback",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"is_eligible_for_real_time_updates",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"feedback_typers",storageKey:null,args:null,concreteType:"FeedbackTypersConnection",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"other_count",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"subscription_target_id",args:null,storageKey:null}]};e.exports=a}),null);
__d("CometImageIcon.react",["BaseImage.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function a(a){var c=a.auxiliary,d=a.size;d=d===void 0?24:d;var e=a.src,f=a.style;f=f===void 0?"circle":f;a=a.testid;return b("React").jsxs("div",{className:"l9j0dhe7",children:[b("React").jsx(b("BaseImage.react"),{className:(g||(g=b("stylex"))).dedupe(f==="circle"?{"border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv"}:{},{"display-1":"a8c37x1j"},f==="roundedRect"?{"border-top-start-radius-1":"ue3kfks5","border-top-end-radius-1":"pw54ja7n","border-bottom-end-radius-1":"uo3d90p7","border-bottom-start-radius-1":"l82x9zwi"}:null),height:d,src:e,testid:a,width:d}),f!=="square"?b("React").jsx("div",{className:(g||(g=b("stylex"))).dedupe(f==="circle"?{"border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv"}:{},{"box-shadow-1":"oaz4zybt","position-1":"pmk7jnqg","start-1":"j9ispegn","top-1":"kr520xx4"},f==="roundedRect"?{"border-top-start-radius-1":"ue3kfks5","border-top-end-radius-1":"pw54ja7n","border-bottom-end-radius-1":"uo3d90p7","border-bottom-start-radius-1":"l82x9zwi"}:null),style:{height:d,width:d}}):null,c!=null?b("React").jsx("div",{className:"pmk7jnqg n7fi1qx3 i09qtzwb",children:c}):null]})}e.exports=a}),null);
__d("UFICreatorInfo.react",["fbt","HelpLink.react","Image.react","React","URI","cxMargin"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a,c=this.getCreatorLink();switch(this.props.labelType){case"commented":a=g._("Commented on by {creator}",[g._param("creator",c)]);break;case"edited_comment":a=g._("Edited by {creator}",[g._param("creator",c)]);break;case"sent_message":a=g._("Sent by {creator}",[g._param("creator",c)]);break;case"page_admin_note":a=g._("Noted by {creator}",[g._param("creator",c)]);break;default:return b("React").jsx("span",{})}return b("React").jsxs("span",{children:[a,b("React").jsx(b("HelpLink.react"),{tooltip:this.getHelpText()})]})};d.getCreatorLink=function(){switch(this.props.creatorType){case"application":case"gray_account":case"indirect_admin":return b("React").jsx("a",{className:"uiLinkSubtle","data-hover":"tooltip","data-tooltip-content":this.getTooltipText(),children:this.props.creatorName});case"business_admin":return b("React").jsx("a",{className:"uiLinkSubtle",href:this.props.profileURI,children:this.props.creatorName});case"direct_admin":return this.getProfileLinkWithHovercard();case"former_admin":return b("React").jsxs("span",{className:"uiLinkSubtle",children:[b("React").jsx(b("Image.react"),{src:"/images/privacy/cant-see.png",width:9,height:9,className:"_3-8_"}),this.getProfileLinkWithHovercard()]});default:return b("React").jsx("span",{className:"uiLinkSubtle",children:this.props.creatorName})}};d.getTooltipText=function(){switch(this.props.creatorType){case"application":return this.getApplicationText();case"gray_account":return this.getGrayAccountText();case"indirect_admin":return this.getIndirectAdminText()}return null};d.getProfileLinkWithHovercard=function(){if(!this.props.profileURI)return b("React").jsx("span",{children:this.props.creatorName});var a=new(h||(h=b("URI")))("/ajax/hovercard/user.php").setQueryData({id:this.props.creatorID}).addQueryData({type:"page_admin",extragetparams:JSON.stringify({directed_target_id:this.props.pageID})});return b("React").jsx("a",{className:"uiLinkSubtle","data-hovercard":a,href:this.props.profileURI,children:this.props.creatorName})};d.getApplicationText=function(){switch(this.props.labelType){case"commented":return g._("This was commented on by someone using {application}.",[g._param("application",this.props.creatorName)]);case"edited_comment":return g._("This was edited by someone using {application}.",[g._param("application",this.props.creatorName)]);case"sent_message":return g._("This was sent by someone using {application}.",[g._param("application",this.props.creatorName)]);case"page_admin_note":return g._("This was noted by someone using {application}.",[g._param("application",this.props.creatorName)])}return null};d.getIndirectAdminText=function(){switch(this.props.labelType){case"commented":return g._("This was commented on by someone from {page}.",[g._param("page",this.props.creatorName)]);case"edited_comment":return g._("This was edited by someone from {page}.",[g._param("page",this.props.creatorName)]);case"sent_message":return g._("This was sent by someone from {page}.",[g._param("page",this.props.creatorName)]);case"page_admin_note":return g._("This was noted by someone from {page}.",[g._param("page",this.props.creatorName)])}return null};d.getGrayAccountText=function(){switch(this.props.labelType){case"commented":return g._("This was commented on by someone who doesn't have a personal Facebook account.");case"edited_comment":return g._("This was edited by someone who doesn't have a personal Facebook account.");case"sent_message":return g._("This was sent by someone who doesn't have a personal Facebook account.");case"page_admin_note":return g._("This was noted by someone who doesn't have a personal Facebook account.")}return null};d.getHelpText=function(){switch(this.props.labelType){case"commented":return g._("Only people who manage this Page can see who posted a comment.");case"edited_comment":return g._("Only people who manage this Page can see who edited a comment");case"sent_message":return g._("Only people who manage this Page can see who sent a message.");case"page_admin_note":return g._("Only people who manage this Page can see who created a note")}return null};return c}(b("React").Component);c.propTypes={creatorID:a.string.isRequired,creatorType:a.string.isRequired,creatorName:a.string.isRequired,labelType:a.string.isRequired,pageID:a.string.isRequired,profileURI:a.string};e.exports=c}),null);
__d("FBStoriesLoggingConstants",[],(function(a,b,c,d,e,f){"use strict";a={EVENT_STORY:"event",FOLLOWEE_STORY:"followee",FRIEND_STORY:"friend",GROUP_STORY:"group",MISSING_STORY_DATA:"missingStoryData",PAGE_STORY:"page",SELF_STORY:"self",STORY_PROMOTION:"promotion",ACTION_OPEN_MEDIA:"open_media",ACTION_DELETE_MEDIA:"delete_media_attempted",ACTION_SEND_REPLY_ATTEMPT:"attempt_to_send_reply",ACTION_SEND_REPLY_SUCCESS:"mark_reply_sent",ACTION_SEND_REPLY_FAILURE:"reply_sent_failure",ACTION_SEND_STICKER_ATTEMPT:"attempt_to_send_sticker",ACTION_SEND_STICKER_SUCCESS:"mark_sticker_sent",ACTION_SEND_STICKER_FAILURE:"sticker_sent_failure",ACTION_SEND_GIF_ATTEMPT:"attempt_to_send_gif",ACTION_SEND_GIF_SUCCESS:"mark_gif_sent",ACTION_SEND_GIF_FAILURE:"gif_sent_failure",ACTION_SEND_REACTION_ATTEMPT:"attempt_to_send_reaction",ACTION_SEND_REACTION_SUCCESS:"mark_reaction_sent",ACTION_SEND_REACTION_FAILURE:"reaction_sent_failure",ACTION_SEND_REACTION_STICKER_INTERACTED:"reaction_sticker_interacted",ACTION_OPEN_SEEN_SUMMARY:"open_seen_summary",ACTION_OPEN_STORY:"open_story",ACTION_CLOSE_STORY:"close_story",ACTION_TRAY_LOAD:"story_tray_load",ACTION_SEND_STORY_FAILED:"send_story_failed",ACTION_SEND_STORY_SUCCEEDED:"send_story_succeed",ACTION_REPLY_ATTEMPT_COMPLETED:"reply_attempt_completed",ACTION_STORY_NAVIGATION:"story_navigation",INTERACTION_TAP_RESHARED_STORY:"reshared_story_tap",INTERACTION_TAP_RESHARED_TOOLTIP:"reshared_story_view_story_tap",GESTURES:{CLOSE_STORY:{CLICK_RIGHT:"click_right",CLICK_LEFT:"click_left",AUTO_JUMP:"auto_jump",AUTO_EXIT:"auto_exit",CLICK_EXIT:"click_exit",SWIPE_RIGHT:"swipe_right",SWIPE_LEFT:"swipe_left",SWIPE_EXIT:"swipe_exit",SWIPE_DOWN_EXIT:"swipe_down_exit",CLOSE_BUTTON_EXIT:"close_button_exit",BACK_BUTTON_EXIT:"back_button_exit"}},SOURCE_CLOSE_FROM_MODAL:"closeFromClickingOnModal",SOURCE_CLOSE_FROM_MODAL_CLOSE_BUTTON:"closeFromClickingOnModalCloseButton",SOURCE_CLOSE_FROM_LAST_STORY_FINISHING:"closeFromLastStoryFinishing",SOURCES:{ARCHIVE:"archive",POST_HEADER:"post_header_actor_photo",STORY_TRAY:"story_tray",IN_FEED:"in_feed",UNKNOWN:"unknown"}};e.exports=a}),null);
__d("XFBStoriesSingleStoryAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/stories/view/async/",{card_id:{type:"FBID"},story_id:{type:"FBID"},auto_open_viewersheet:{type:"Bool",defaultValue:!1},story_action_source:{type:"String"}})}),null);
__d("FBStoriesRing",["csx","cx","Arbiter","CSS","DOM","FBStoriesLoggingConstants","XFBStoriesSingleStoryAsyncController"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this.$1=a.element;this.$2=a.profileId;this.$3=a.storyId;this.$4=!1;a=b("DOM").scry(this.$1,"._6_ut");a.length>0&&(this.$4=!0);this.$5()}var c=a.prototype;c.$5=function(){__p&&__p();var a=this;b("Arbiter").subscribe("has_story_bucket_been_seen",function(c,d){if(a.$2===d){c=b("DOM").scry(a.$1,"._6_ut");c.length>0&&(b("CSS").removeClass(c[0],"_6_ut"),a.$4=!1)}});b("Arbiter").subscribe("update_next_thread_to_view",function(c,d){c=d.bucketOwnerId;d=d.threadId;if(a.$2===c&&a.$4){c=b("XFBStoriesSingleStoryAsyncController").getURIBuilder().setFBID("story_id",a.$3).setFBID("card_id",d).setBool("auto_open_viewersheet",!1).setString("story_action_source",b("FBStoriesLoggingConstants").SOURCES.POST_HEADER).getURI();a.$1.setAttribute("ajaxify",c)}})};return a}();e.exports=a}),null);
__d("getFullScreenElement",[],(function(a,b,c,d,e,f){function a(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}e.exports=a}),null);
__d("KeyframesAsyncSession",["Promise","requireDeferred","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("requireDeferred")("FBKeyframesLoggedSession");a=function(){__p&&__p();function a(c){var d=this;this.$3=function(){var c=a.timestamp();b("promiseDone")(d.$1,function(a){return a.error(c)})};this.$1=g.load().then(function(a){return new a(c)});this.$2=this.$1.then(function(a){return a.getPerformanceLogIfEnabled()})}a.timestamp=function(){return{value:Date.now()}};var c=a.prototype;c.scheduleDecode=function(c,d){__p&&__p();var e=c.then(function(){return a.timestamp()}),f=c.then(function(){return d}).then(function(){return a.timestamp()}),g=d.then(function(a){return a&&a.pluginsLoader!=null&&a.pluginsLoader.getPluginTable instanceof Function?a.pluginsLoader.getPluginTable():[]});c=b("Promise").all([this.$1,e]).then(function(a){var c=a[0];a=a[1];c=c.startDecode(a);return b("Promise").all([c,f,g])});b("promiseDone")(c,function(a){var b=a[0],c=a[1];a=a[2];return b(c,a)},this.$3)};c.maybeGetPerformanceLog=function(){return this.$2};return a}();e.exports=a}),null);
__d("KeyframesDecodedAssetRequest",["Promise","requireDeferred","XHRRequest","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("requireDeferred")("KeyframesAssetDecoder"),h=b("requireDeferred")("KeyframesRenderer");function i(a){return!a||typeof a!=="string"?b("Promise").reject("Request: invalid uri "+a):new(b("Promise"))(function(c,d){new(b("XHRRequest"))(a).setMethod("GET").setResponseType("arraybuffer").setErrorHandler(function(a){return d(a)}).setAbortHandler(function(a){return d(a)}).setResponseHandler(function(a){return c(a)}).send()})}a=function(){__p&&__p();function a(a,c){__p&&__p();var d=this;this.$1=!1;a=b("Promise").all([typeof a==="string"?i(a):a,g.load()]);this.$2=a.then(function(a){var b=a[0];a=a[1];return a.fromDocumentBytes(b)});c.scheduleDecode(a,this.$2);b("promiseDone")(this.$2,function(){return d.$1=!0},function(){return d.$1=!0})}var c=a.prototype;c.isDone=function(){return this.$1};c.getAsset=function(){return this.$2};c.getRenderer=function(a){return b("Promise").all([this.$2,h.load(),a.maybeGetPerformanceLog()]).then(function(a){var b=a[0],c=a[1];a=a[2];return new c(b,a)})};return a}();e.exports=a}),null);
__d("Keyframes",["Promise","Bootloader","KeyframesAsyncSession","KeyframesDecodedAssetRequest","NetworkStatus","XHRRequest","emptyFunction"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={},h={};function i(a,c){__p&&__p();if(!a||typeof a!=="string")return b("Promise").reject("Request: invalid uri "+a);var d=g[a];if(d)return d;d=new(b("Promise"))(function(c,d){var e=function(a){b("NetworkStatus").reportError(),d(a)};new(b("XHRRequest"))(a).setMethod("GET").setResponseType("arraybuffer").setErrorHandler(function(a){return e(a)}).setAbortHandler(function(a){return e(a)}).setResponseHandler(function(a){return c(a)}).send()});c===!0&&(g[a]=d);return d}a={requestRenderer:function(a,c){c=new(b("KeyframesAsyncSession"))(c);h[a]||(h[a]=new(b("KeyframesDecodedAssetRequest"))(a,c));return h[a].getRenderer(c)},preload:function(a){h[a]||i(a,!0),b("Bootloader").preloadModules(["KeyframesRenderer","FBKeyframesLoggedSession","KeyframesAssetDecoder"])},load:function(a,c){if(!h[a]){c=new(b("KeyframesAsyncSession"))(c);h[a]=new(b("KeyframesDecodedAssetRequest"))(a,c)}return b("Promise").all([h[a].getAsset()]).then(b("emptyFunction"))},requestRendererFromBytes:function(a,c){c=new(b("KeyframesAsyncSession"))(c);return new(b("KeyframesDecodedAssetRequest"))(a,c).getRenderer(c)},loadFromBytes:function(a,c){c=new(b("KeyframesAsyncSession"))(c);return new(b("KeyframesDecodedAssetRequest"))(a,c).getAsset()},hasLoaded:function(a){return!!(h[a]&&h[a].isDone())},clearCache:function(){h={},g={}}};e.exports=a}),null);
__d("Keyframes.react",["FBLogger","Keyframes","React","createCancelableFunction","promiseDone","testID"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){var c=a.width;a=a.height;c={width:c||0,height:a||0};return b("React").jsx("div",{style:c})}function h(a){var c=a.width;a=a.height;return b("React").jsx(g,{width:c,height:a})}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={error:!1,renderer:null},c.$6=function(a){c.setState({renderer:a,error:!1}),c.props.onLoad&&c.props.onLoad(a)},c.$7=function(a){c.setState({renderer:null,error:!0})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.seekToProgress=function(a){this.state.renderer&&this.state.renderer.seekToProgress(a)};d.componentDidMount=function(){this.$4(this.props.source)};d.componentWillUnmount=function(){this.state.renderer&&this.state.renderer.pause(),this.$2&&this.$2.cancel(),this.$3&&this.$3.cancel()};d.componentDidUpdate=function(a,b){if(this.props.source!==a.source||this.props.projectName!==a.projectName||this.props.assetName!=null&&a.assetName!=null&&this.props.assetName!==a.assetName||a.assetID!=null&&this.props.assetID!=null&&this.props.assetID!==a.assetID)this.$4(this.props.source);else{var c=this.state.renderer;c!==b.renderer?this.$5(b.renderer,c):c&&((a.width!==this.props.width||a.height!==this.props.height)&&(c.resetDimensions(),this.props.width&&c.setWidth(this.props.width),this.props.height&&c.setHeight(this.props.height)),a.muted!==this.props.muted&&(this.props.muted?c.mute():c.unMute()),a.startAt!==this.props.startAt&&a.endAt!==this.props.endAt&&c.setStartAndEndAt(this.props.startAt,this.props.endAt),a.startAt!==this.props.startAt&&c.setStartAt(this.props.startAt),a.endAt!==this.props.endAt&&c.setEndAt(this.props.endAt),a.repeatCount!==this.props.repeatCount&&c.repeatCount(this.props.repeatCount),a.onError!==this.props.onError&&c.onError(this.props.onError),a.onRepeatEnd!==this.props.onRepeatEnd&&c.onRepeatEnd(this.props.onRepeatEnd),a.onProgress!==this.props.onProgress&&c.onProgress(this.props.onProgress),a.initialProgress!==this.props.initialProgress&&c.seekToProgress(this.props.initialProgress),a.playing!==this.props.playing&&(this.props.playing?c.play():(c.pause(),this.props.resetOnPause&&c.repeatCount(this.props.repeatCount).seekToProgress(this.props.initialProgress))),c.redrawIfNeeded())}};d.$5=function(a,b){if(!this.$1)return;b&&(b.onError(this.props.onError).onRepeatEnd(this.props.onRepeatEnd).onProgress(this.props.onProgress).setStartAt(this.props.startAt).setEndAt(this.props.endAt).repeatCount(this.props.repeatCount),this.props.width&&b.setWidth(this.props.width),this.props.height&&b.setHeight(this.props.height),this.props.initialProgress&&b.seekToProgress(this.props.initialProgress),this.props.muted?b.mute():b.unMute(),this.props.playing?b.play():b.pause(),b.redrawIfNeeded());a&&b?this.$1.replaceChild(b.getElement(),a.getElement()):(a&&this.$1.removeChild(a.getElement()),b&&this.$1.appendChild(b.getElement()))};d.$8=function(a){return a instanceof ArrayBuffer?b("Keyframes").requestRendererFromBytes(a,this.$9()):b("Keyframes").requestRenderer(a,this.$9())};d.$4=function(a){this.$2&&this.$2.cancel(),this.$3&&this.$3.cancel(),!a?this.$7():(this.$2=b("createCancelableFunction")(this.$6),this.$3=b("createCancelableFunction")(this.$7),b("promiseDone")(this.$8(a),this.$2,this.$3))};d.$9=function(){return this.props.assetID?{projectName:this.props.projectName,assetID:this.props.assetID}:{projectName:this.props.projectName,assetName:this.props.assetName||"__FIXME__missing_react_asset_name"}};d.render=function(){var a=this,c=this.props,d=c.className,e=c.height,f=c.style;c=c.width;c=this.state.renderer?null:this.state.error?this.props.errorPlaceholder||b("React").jsx(h,{width:c,height:e}):this.props.placeholder||b("React").jsx(g,{width:c,height:e});e=this.props.mutator&&this.state.renderer&&b("React").cloneElement(this.props.mutator,{__renderer:this.state.renderer});return b("React").jsxs("div",babelHelpers["extends"]({className:d},b("testID")(this.props.testid),{ref:function(b){return a.$1=b},style:babelHelpers["extends"]({display:"inline-block",lineHeight:0,fontSize:0},f),children:[c,e]}))};return c}(b("React").Component);a.defaultProps={initialProgress:0,resetOnPause:!1,playing:!0,repeatCount:Infinity,startAt:0,endAt:1};e.exports=a}),null);
__d("UFIReactionsAnimatedKeyframesIcon.react",["Keyframes.react","React","UFIReactionsKeyframesAssets","UFIReactionTypes"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.supportsReaction=function(a){return!!b("UFIReactionsKeyframesAssets").reactions[a]};var d=c.prototype;d.render=function(){var a=this.props,c=a.animate,d=a.className,e=a.maxSize;a=a.reactionID;var f=b("UFIReactionsKeyframesAssets").initialProgress[a]||0,g=b("UFIReactionsKeyframesAssets").reactions[a];return g?b("React").jsx(b("Keyframes.react"),{projectName:"feedback_reactions",assetName:b("UFIReactionTypes").reactions[a].name,className:d,source:g,width:e,height:e,playing:c,initialProgress:f,resetOnPause:!0}):b("React").jsx("div",{style:{width:e,height:e}})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("UFI2TypingIndicator.react",["cx","fbt","requireDeferred","MercuryTypingAnimation_DEPRECATED.react","React","RelayModern","UFI2RealtimeContainer.react","debounceAcrossTransitions","useVisibilityObserver","UFI2TypingIndicator_feedback.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=(c=b("React")).useCallback,k=c.useEffect,l=c.useMemo,m=c.useState;d=b("RelayModern").createFragmentContainer;b("RelayModern").graphql;var n=b("requireDeferred")("UFI2TypingSubscription"),o=15*1e3;function p(a){a=a.feedback_typers;return(a==null?void 0:a.other_count)?h._("Someone is typing a comment..."):null}function a(a){__p&&__p();var c=a.feedback,d=a.relay;a=m({isTyping:!1,isVisible:!1,label:null});var e=a[0],f=e.label,g=e.isVisible,h=e.isTyping,i=a[1],q=l(function(){return p(c)},[c]);k(function(){i(function(a){return babelHelpers["extends"]({},a,{isTyping:Boolean(q),label:q!=null?q:a.label})})},[q]);var r=l(function(){return b("debounceAcrossTransitions")(function(){return i(function(a){return babelHelpers["extends"]({},a,{isTyping:!1})})},o)},[]);k(function(){h===!0&&r();return function(){return r.reset()}},[r,h]);e=j(function(){__p&&__p();var a=c.id,b=c.subscription_target_id;if(a==null||b==null)return null;var e=!1,f=function(){},g={dispose:function(){e=!0,f()}};n.onReady(function(c){if(!e){c=c.subscribe(d.environment,a,{onNext:function(){r()}},b);f=c.dispose}});return g},[r,c,d.environment]);a=j(function(){i(function(a){return babelHelpers["extends"]({},a,{isVisible:!1})})},[]);var s=j(function(){i(function(a){return babelHelpers["extends"]({},a,{isVisible:!0})})},[]);a=b("useVisibilityObserver")({onHidden:a,onVisible:s});return c.is_eligible_for_real_time_updates!==!0?null:b("React").jsx(b("UFI2RealtimeContainer.react"),{subscribe:e,children:b("React").jsx("div",{className:"_3bem",ref:a,children:b("React").jsxs("div",{className:(g?"_1kyy":"")+" _3bep"+(h===!0?" __f9":""),children:[b("React").jsx(b("MercuryTypingAnimation_DEPRECATED.react"),{className:"__fa"}),b("React").jsx("div",{className:"__fb",children:f})]})})})}e.exports=d(a,{feedback:i!==void 0?i:i=b("UFI2TypingIndicator_feedback.graphql")})}),null);
__d("nodeIsInConnection",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b,c){__p&&__p();a=a.getLinkedRecords("edges");if(a==null){c&&c("Connection contains no edges field.");return!1}var d=!1;b=b.getDataID();if(b==null){c&&c("Search node has no ID.");return!1}for(var e=a,f=Array.isArray(e),g=0,e=f?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(f){if(g>=e.length)break;h=e[g++]}else{g=e.next();if(g.done)break;h=g.value}h=h;var i=h&&h.getLinkedRecord("node");if(i==null){c&&c("Edge at index "+a.indexOf(h)+" has no node.");continue}if(i.getDataID()===b){d=!0;break}}return d}e.exports=a}),null);
__d("VideoPlayerReasonTransitionHelper",["VideoPlayerReasonTransitionExperiment"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this.$1=a}var c=a.prototype;c.getReason=function(){return!b("VideoPlayerReasonTransitionExperiment").provideReason?null:this.$1};return a}();e.exports=a}),null);
__d("VideoPlayerVolumeSettings",["WebStorage"],(function(a,b,c,d,e,f){__p&&__p();var g;a=function(){"use strict";__p&&__p();function a(){this.$1=1,this.$2=1}var c=a.prototype;c.getVolume=function(){var a=(g||(g=b("WebStorage"))).getLocalStorage();if(a){a=a.getItem("videoPlayerControllerVolume");return a===null||isNaN(+a)?1:+a}return this.$1};c.getSessionVolume=function(){return this.$1};c.setSessionVolume=function(a){this.$1=a};c.saveVolume=function(a){var c=(g||(g=b("WebStorage"))).getLocalStorage();c&&c.setItem("videoPlayerControllerVolume",a);this.$1=a};c.getLastVolumeBeforeMute=function(){var a=(g||(g=b("WebStorage"))).getLocalStorage();if(a){a=a.getItem("videoPlayerControllerLastVolumeBeforeMute");return a===null||isNaN(+a)?1:+a}return this.$2};c.saveLastVolumeBeforeMute=function(a){var c=(g||(g=b("WebStorage"))).getLocalStorage();c&&c.setItem("videoPlayerControllerLastVolumeBeforeMute",a);this.$2=a};return a}();c=new a();e.exports=c}),null);
__d("getVendorPrefixedEventName",["fbjs/lib/ExecutionEnvironment"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;c["ms"+a]="MS"+b;c["O"+a]="o"+b.toLowerCase();return c}var g={animationend:a("Animation","AnimationEnd"),animationiteration:a("Animation","AnimationIteration"),animationstart:a("Animation","AnimationStart"),transitionend:a("Transition","TransitionEnd")},h={},i={};b("fbjs/lib/ExecutionEnvironment").canUseDOM&&(i=document.createElement("div").style,"AnimationEvent"in window||(delete g.animationend.animation,delete g.animationiteration.animation,delete g.animationstart.animation),"TransitionEvent"in window||delete g.transitionend.transition);function c(a){if(h[a])return h[a];else if(!g[a])return a;var b=g[a];for(var c in b)if(Object.prototype.hasOwnProperty.call(b,c)&&c in i)return h[a]=b[c];return""}e.exports=c}),null);
__d("ReactTransitionEvents",["fbjs/lib/ExecutionEnvironment","getVendorPrefixedEventName"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[];function a(){var a=b("getVendorPrefixedEventName")("animationend"),c=b("getVendorPrefixedEventName")("transitionend");a&&g.push(a);c&&g.push(c)}b("fbjs/lib/ExecutionEnvironment").canUseDOM&&a();function h(a,b,c){a.addEventListener(b,c,!1)}function i(a,b,c){a.removeEventListener(b,c,!1)}c={addEndEventListener:function(a,b){if(g.length===0){window.setTimeout(b,0);return}g.forEach(function(c){h(a,c,b)})},removeEndEventListener:function(a,b){if(g.length===0)return;g.forEach(function(c){i(a,c,b)})}};e.exports=c}),null);