if (self.CavalryLogger) { CavalryLogger.start_js(["yDsgG"]); }

__d("ChatOpenTab",["csx","Bootloader","ContextualThing","CurrentUser","Event","MercuryIDs","Parent","WorkGalahadSettings","requireWeak"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=null;b("requireWeak")("FantaTabsReactApp",function(a){return h=a});b("requireWeak")("FantaTabsSlimApp",function(a){return h=a});function i(a,c,d,e){b("Event").listen(a,"click",function(f){(b("WorkGalahadSettings").isGalahadEnabled||l.canOpenTab())&&(e(c,d),a.removeAttribute("ajaxify"),a.removeAttribute("rel"),f.preventDefault())})}function j(a,c,d,e){b("Event").listen(a,"click",function(a){l.canOpenTab()&&e(c,d)})}function k(a){a=b("ContextualThing").getContext(a);return a&&b("Parent").bySelector(a,"._3qw")!==null}var l={canOpenTab:function(){return h&&!h.isHidden()},listenOpenEmptyTabDEPRECATED:function(a,b){i(a,null,b,this._loadAndOpenEmptyFantaTab)},listenOpenThreadDEPRECATED:function(a,b,c){var d=this;i(a,b,c,function(a,b){return d.loadAndOpenFantaTab(a,b,c)})},listenOpenUserTabDEPRECATED:function(a,b,c){var d=this;k(a)||i(a,b,c,function(a){return d.loadAndOpenFantaTab(a,"user",c)})},listenOpenUserTabPersistentEventDEPRECATED:function(a,b,c){var d=this;k(a)||j(a,b,c,function(a){return d.loadAndOpenFantaTab(a,"user",c)})},listenOpenPageTabDEPRECATED:function(a,b,c,d){var e=this;k(a)||i(a,b,d,function(a){return e.loadAndOpenFantaTab(a,"page",d)})},listenOpenPageTabPersistentEventDEPRECATED:function(a,b,c,d){var e=this;k(a)||j(a,b,d,function(a){return e.loadAndOpenFantaTab(a,"page",d)})},loadAndOpenFantaTab:function(a,c,d){b("Bootloader").loadModules(["ChatOpenTabEventLogger","FantaTabActions"],function(e,f){if(c==="user"||c==="page"){var g=b("MercuryIDs").getThreadIDFromUserID(a);f.openTab(g,[d]);e.logUserClickOpen(d,a)}else f.openTab(a,[d]),e.logClickOpen(d,a)},"ChatOpenTab")},_loadAndOpenEmptyFantaTab:function(){b("Bootloader").loadModules(["ChatOpenTabEventLogger","FantaTabActions","MessengerState.bs"],function(a,c,d){d=d.createNewLocalThreadGenerateID(b("CurrentUser").getID());c.openNewMessageTab(d,"jewel_new_message");a.logClickOpen("EmptyTab")},"ChatOpenTab")}};e.exports=l}),null);
__d("HovercardLink",["URI"],(function(a,b,c,d,e,f){__p&&__p();var g,h={getBaseURI:function(){return new(g||(g=b("URI")))("/ajax/hovercard/hovercard.php")},constructEndpoint:function(a,b){return h.constructEndpointWithGroupAndLocation(a,b,null)},constructEndpointWithLocation:function(a,b){return h.constructEndpointWithGroupAndLocation(a,null,b)},constructEndpointWithGroupAndLocation:function(a,b,c,d){return h.constructEndpointWithGroupLocationAndExtraParams(a,b,c,d)},constructEndpointWithGroupLocationAndExtraParams:function(a,c,d,e,f){__p&&__p();f===void 0&&(f=null);var i=new(g||(g=b("URI")))(h.getBaseURI()).setQueryData({id:a.id}),j={};if(f!==null)for(var k in f)j[k]=f[k];(a.weakreference||e)&&c&&(j.group_id=c);d&&(j.hc_location=d);c&&(j.directed_target_id=c);i.addQueryData({extragetparams:JSON.stringify(j)});return i}};e.exports=h}),null);
__d("RoundImage.react",["cx","Image.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("joinClasses")(this.props.className,c.baseClassName);return b("React").jsx(b("Image.react"),babelHelpers["extends"]({},this.props,{className:a}))};return c}(b("React").Component);a.baseClassName="_2qgu";e.exports=a}),null);
__d("Dock",["csx","ArbiterMixin","BlueBar","ChatQuietLinks","CSS","DataStore","DOM","Event","Parent","Scroll","Style","Toggler","Vector","emptyFunction","gkx","isKeyActivation","shield"],(function(a,b,c,d,e,f,g){__p&&__p();function c(){}Object.assign(c,b("ArbiterMixin"),{MIN_HEIGHT:140,INITIAL_FLYOUT_HEIGHT_OFFSET:10,init:function(a){__p&&__p();this.init=b("emptyFunction");this.rootEl=a;this.calculateViewportDimensions();b("ChatQuietLinks").removeEmptyHrefs(this.rootEl);b("Event").listen(a,"click",this._onClick.bind(this));var c=a.querySelector(".fbNubButton");c&&b("Event").listen(c,"keypress",this._onKeyPress.bind(this));b("Event").listen(window,"resize",this._onWindowResize.bind(this));b("Toggler").subscribe(["show","hide"],function(c,d){d=d.getActive();if(!b("DOM").contains(a,d))return;if(b("CSS").hasClass(d,"fbNub"))this.notifyNub(d,c),c==="show"&&this._resizeNubFlyout(d);else{d=b("Parent").byClass(d,"fbNubFlyout");d&&b("CSS").conditionClass(d,"menuOpened",c==="show")}}.bind(this));this.inform("init",{},"persistent")},calculateViewportDimensions:function(){return this.viewportDimensions=b("Vector").getViewportDimensions()},getFlyoutHeightOffset:function(){if(this.flyoutHeightOffset)return this.flyoutHeightOffset;this.flyoutHeightOffset=this.INITIAL_FLYOUT_HEIGHT_OFFSET+b("Vector").getElementDimensions(this.rootEl).y;var a=b("BlueBar").getBar();if(a){var c=b("Style").isFixed(a)?"viewport":"document";this.flyoutHeightOffset+=b("Vector").getElementPosition(a,c).y+b("Vector").getElementDimensions(a).y}return this.flyoutHeightOffset},toggle:function(a){var c=this._findFlyout(a);if(!c)return;this.subscribe("init",function(){b("Toggler").toggle(a)})},show:function(a){this.subscribe("init",function(){b("Toggler").show(a)})},showNub:function(a){b("CSS").show(a)},hide:function(a){this.subscribe("init",function(){var c=b("Toggler").getInstance(a);b("DOM").contains(a,c.getActive())&&c.hide()})},hideNub:function(a){b("CSS").hide(a),this.hide(a)},setUseMaxHeight:function(a,c){b("CSS").conditionClass(a,"maxHeight",c!==!1),this._resizeNubFlyout(a)},_resizeNubFlyout:function(a){__p&&__p();var c=this._findFlyout(a);if(!c||b("CSS").hasClass(a,"placeholder")||!(b("CSS").hasClass(a,"openToggler")||b("CSS").hasClass(a,"opened")))return;var d=b("DOM").find(c,"div.fbNubFlyoutOuter"),e=b("DOM").find(d,"div.fbNubFlyoutInner"),f=b("DOM").find(e,"div.fbNubFlyoutBody"),g=b("CSS").hasClass(a,"canBeCompactTab"),h=b("Scroll").getTop(f),i=f.offsetHeight;b("Style").set(f,"height","auto");var j=b("Vector").getElementDimensions(c),k=b("Vector").getElementDimensions(f),l=this.getMaxFlyoutHeight(a);b("Style").set(c,"max-height",l+"px");b("Style").set(d,"max-height",l+"px");j=b("Vector").getElementDimensions(c);d=b("Vector").getElementDimensions(e);l=d.y-k.y;e=j.y-l;d=parseInt(f.style.height||f.clientHeight,10);d=e!==d;j.y>l&&d&&!g&&b("Style").set(f,"height",e+"px");b("CSS").removeClass(c,"swapDirection");var m=b("Vector").getElementPosition(c).x;b("CSS").conditionClass(c,"swapDirection",function(){if(m<0)return!0;return!j||!this.viewportDimensions?!1:m+j.x>this.viewportDimensions.x}.bind(this)());d&&h+i>=k.y?b("Scroll").setTop(f,f.scrollHeight):b("Scroll").setTop(f,h);this.notifyNub(a,"resize")},getMaxFlyoutHeight:function(a){a=this._findFlyout(a);var c=b("Vector").getElementPosition(a,"viewport");a=b("Vector").getElementDimensions(a);if(!this.viewportDimensions||!c)return 0;c=Math.max(this.MIN_HEIGHT,this.viewportDimensions.y-this.getFlyoutHeightOffset())-(this.viewportDimensions.y-c.y-a.y);return Math.max(c,0)},resizeAllFlyouts:function(){var a=this._getAllNubs(),b=a.length;while(b--)this._resizeNubFlyout(a[b])},_getAllNubs:function(){if(!this.rootEl)return[];var a=b("DOM").scry(this.rootEl,"div._50-v.openToggler:not(._s0f)");return a.concat(b("DOM").scry(this.rootEl,"div._50-v.opened:not(._s0f)"))},_onKeyPress:function(a){var c=a.getTarget();c=b("Parent").byClass(c,"fbNub");b("isKeyActivation")(a)&&c&&this.toggle(c)},_onClick:function(a){__p&&__p();a=a.getTarget();var c=b("Parent").byClass(a,"fbNub");if(c){if(b("Parent").byClass(a,"fbNubFlyoutTitlebar")){var d=b("Parent").byTag(a,"a");a=a.nodeName=="INPUT"&&a.getAttribute("type")=="submit";if(!d&&!a){this.hide(c);return!1}}this.notifyNub(c,"click")}},_onWindowResize:function(a){this.calculateViewportDimensions(),this.resizeAllFlyouts()},_findFlyout:function(a){return b("CSS").hasClass(a,"fbNubFlyout")?a:b("DOM").scry(a,"div.fbNubFlyout")[0]||null},registerNubController:function(a,c){b("DataStore").set(a,"dock:nub:controller",c),c.subscribe("nub/button/content-changed",b("shield")(this.inform,this,"resize",a)),c.subscribe("nub/flyout/content-changed",b("shield")(this._resizeNubFlyout,this,a))},unregisterNubController:function(a){b("DataStore").remove(a,"dock:nub:controller")},notifyNub:function(a,c,d){a=b("DataStore").get(a,"dock:nub:controller");a&&a.inform(c,d)}});e.exports=a.Dock||c}),null);
__d("MessengerMQTTGating",[],(function(a,b,c,d,e,f){"use strict";var g={_forcedOff:!1,isEnabled:function(){return!g._forcedOff},turnOff:function(){g._forcedOff=!0}};e.exports=g}),null);
__d("ContextualLayerUpdateOnScroll",["Event"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscriptions=[this._layer.subscribe("show",this._attachScrollListener.bind(this)),this._layer.subscribe("hide",this._removeScrollListener.bind(this))]};c.disable=function(){while(this._subscriptions.length)this._subscriptions.pop().unsubscribe()};c._attachScrollListener=function(){var a=this,c=this._layer.getContextScrollParent(),d=this._layer.getInsertScrollParent();if(this._listener!=null||c===d)return;this._listener=b("Event").listen(c,"scroll",function(){a._layer.updatePosition()})};c._removeScrollListener=function(){this._listener&&this._listener.remove(),this._listener=null};return a}();Object.assign(a.prototype,{_subscriptions:[]});e.exports=a}),null);
__d("ContextualDialogXUITheme",["cx"],(function(a,b,c,d,e,f,g){a={wrapperClassName:"_53ii",arrowDimensions:{offset:12,length:16}};e.exports=a}),null);
__d("areJSONRepresentationsEqual",[],(function(a,b,c,d,e,f){function a(a,b){return JSON.stringify(a)==JSON.stringify(b)}e.exports=a}),null);
__d("objectKeys",[],(function(a,b,c,d,e,f){function a(a){return Object.keys(a)}e.exports=a}),null);
__d("objectValues",[],(function(a,b,c,d,e,f){"use strict";function a(a){return Object.values(a)}e.exports=a}),null);
__d("ImmutableValue",["invariant","isNode"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="_DONT_EVER_TYPE_THIS_SECRET_KEY";a=function(){__p&&__p();function a(b){b===a[h]||g(0,5608)}a.mergeAllPropertiesInto=function(a,b){var c=b.length;for(var d=0;d<c;d++)Object.assign(a,b[d])};a.deepFreezeRootNode=function(c){if(b("isNode")(c))return;Object.freeze(c);for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&a.recurseDeepFreeze(c[d]);Object.seal(c)};a.recurseDeepFreeze=function(c){if(b("isNode")(c)||!a.shouldRecurseFreeze(c))return;Object.freeze(c);for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&a.recurseDeepFreeze(c[d]);Object.seal(c)};a.shouldRecurseFreeze=function(b){return typeof b==="object"&&!(b instanceof a)&&b!==null};return a}();a._DONT_EVER_TYPE_THIS_SECRET_KEY=Math.random();e.exports=a}),null);
__d("ImmutableObject",["invariant","ImmutableValue","mergeHelpers"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("mergeHelpers").checkMergeObjectArgs,i=b("mergeHelpers").isTerminal,j="_DONT_EVER_TYPE_THIS_SECRET_KEY";function k(a){a instanceof b("ImmutableValue")||g(0,3884)}var l=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){var a;a=c.call(this,b("ImmutableValue")[j])||this;b("ImmutableValue").mergeAllPropertiesInto(babelHelpers.assertThisInitialized(a),arguments);return a}a.create=function(){var b=Object.create(a.prototype);a.apply(b,arguments);return b};a.set=function(b,c){k(b);typeof c==="object"&&c!==void 0&&!Array.isArray(c)||g(0,3885);return new a(b,c)};a.setProperty=function(b,c,d){var e={};e[c]=d;return a.set(b,e)};a.deleteProperty=function(b,c){var d={};for(var e in b)e!==c&&Object.prototype.hasOwnProperty.call(b,e)&&(d[e]=b[e]);return new a(d)};a.setDeep=function(a,b){k(a);return m(a,b)};a.values=function(a){return Object.keys(a).map(function(b){return a[b]})};return a}(b("ImmutableValue"));function m(a,c){__p&&__p();h(a,c);var d={},e=Object.keys(a);for(var f=0;f<e.length;f++){var g=e[f];!Object.prototype.hasOwnProperty.call(c,g)?d[g]=a[g]:i(a[g])||i(c[g])?d[g]=c[g]:d[g]=m(a[g],c[g])}g=Object.keys(c);for(f=0;f<g.length;f++){e=g[f];if(Object.prototype.hasOwnProperty.call(a,e))continue;d[e]=c[e]}return a instanceof b("ImmutableValue")?new l(d):c instanceof b("ImmutableValue")?new l(d):d}e.exports=l}),null);
__d("formatNumber",["fbt","intlNumUtils"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a,c){return b("intlNumUtils").formatNumber(a,c)}function h(a,c){c=g._({"*":"{number}+"},[g._param("number",b("intlNumUtils").formatNumberWithThousandDelimiters(a,c),[0,a])]);return c.toString()}function i(a,c){c=g._({"*":"\u003C{number}"},[g._param("number",b("intlNumUtils").formatNumberWithThousandDelimiters(a,c),[0,a])]);return c.toString()}function c(a,c,d){return a>c?h(c,d):b("intlNumUtils").formatNumberWithThousandDelimiters(a,d)}function d(a,c,d){return a<c?i(c,d):b("intlNumUtils").formatNumberWithThousandDelimiters(a,d)}a.withThousandDelimiters=b("intlNumUtils").formatNumberWithThousandDelimiters;a.withMaxLimit=c;a.withMinLimit=d;e.exports=a}),null);
__d("ScrollBoundaryContain",["Event","Scroll","UserAgent"],(function(a,b,c,d,e,f){__p&&__p();var g=function(a,c){c.deliberateSync=!0;if(c.axis!==void 0&&c.axis===c.HORIZONTAL_AXIS||c.wheelDeltaX&&!c.wheelDeltaY||c.deltaX&&!c.deltaY)return;var d=c.wheelDelta||-c.deltaY||-c.detail,e=a.scrollHeight,f=a.clientHeight;if(e>f){c.stopPropagation();a=b("Scroll").getTop(a);(d>0&&a===0||d<0&&a>=e-f-1)&&c.preventDefault()}},h=void 0,i=function(){if(h)return h;h=b("UserAgent").isBrowser("Firefox")?"WheelEvent"in window?"wheel":"DOMMouseScroll":"mousewheel";return h},j=function(a){__p&&__p();var c=g.bind(null,a),d=i(),e,f=b("Event").listen(a,"mouseenter",function(){e==null&&(e=b("Event").listen(a,d,c))}),h=b("Event").listen(a,"mouseleave",function(){e&&(e.remove(),e=null)}),j=!1;return{remove:function(){if(j)return;e&&(e.remove(),e=null);f.remove();h.remove();j=!0}}},k=function(a){a.deliberateSync=!0,this.scrollHeight>this.clientHeight&&a.stopPropagation()},l=function(a){var c=b("Event").listen(a,i(),k,null,{passive:!0}),d=!1;return{remove:function(){if(d)return;c.remove();d=!0}}};a={applyToElem:function(a){if("overscrollBehavior"in a.style){a.style.overscrollBehavior="contain";return l(a)}else{a.style.msScrollChaining!==void 0&&(a.style.msScrollChaining="none");return j(a)}}};e.exports=a}),null);
__d("DocumentTitle",["Arbiter"],(function(a,b,c,d,e,f){__p&&__p();var g=1500,h=null,i=!1,j=0,k=[],l=null,m=document.title;function n(){k.length>0?!i?(o(k[j].title),j=++j%k.length):p():(clearInterval(h),h=null,p())}function o(a){document.title=a,i=!0}function p(){q.set(l||m,!0),i=!1}var q=function(){"use strict";__p&&__p();function a(a){this.$1=a}a.get=function(){return m};a.set=function(a,c){var d=a.toString();document.title=d;!c?(m=d,l=null,b("Arbiter").inform("update_title",a)):l=d};a.blink=function(b){b={title:b.toString()};k.push(b);h===null&&(h=setInterval(n,g));return new a(b)};var c=a.prototype;c.stop=function(){var a=k.indexOf(this.$1);a>=0&&(k.splice(a,1),j>a?j--:j==a&&j==k.length&&(j=0))};a.badge=function(c){var d=a.get();d=c?"("+c+") "+d:d;a.set(d,!0);b("Arbiter").inform("update_title_badge",c,"state")};return a}();e.exports=q}),null);
__d("getByPath",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b,c){a=a;for(var d=0;d<b.length;d++){var e=b[d];if(a&&typeof a!=="string"&&typeof a!=="number"&&e in a)a=a[e];else return c}return a}e.exports=a}),null);