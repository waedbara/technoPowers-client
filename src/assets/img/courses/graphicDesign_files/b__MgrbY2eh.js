if (self.CavalryLogger) { CavalryLogger.start_js(["JF5Wo"]); }

__d("useNoopDebuggingInfoComponent",[],(function(a,b,c,d,e,f){"use strict";var g=function(){};a=function(){return[null,g]};e.exports=a}),null);
__d("PagesEventObserver",["Banzai"],(function(a,b,c,d,e,f){var g="pages_client_logging",h={VITAL_WAIT:b("Banzai").VITAL_WAIT,logData_DEPRECATED:function(a,c){c={delay:c||b("Banzai").VITAL_WAIT};b("Banzai").post(g,a,c)},notify:function(a,c,d,e,f){d=babelHelpers["extends"]({},d,{event_name:a,page_id:c,dedupe:e!==!1});a={delay:f||b("Banzai").VITAL_WAIT};b("Banzai").post(g,d,a)},registerLogOnClick:function(a,b,c){c===void 0&&(c=null),a.addEventListener("click",function(){c&&h.notify(c,b,null,null,null)})}};e.exports=h}),null);
__d("PagesBanzaiEventListener",["Event","PagesEventObserver","Run"],(function(a,b,c,d,e,f){a={registerLogEvent:function(a,c,d){var e=b("Event").listen(a,"click",function(a){b("PagesEventObserver").logData_DEPRECATED(c,d)});b("Run").onLeave(function(){e.remove()})}};e.exports=a}),null);
__d("AbstractDockingElement",["Arbiter","Event","FullScreen","Run","SubscriptionsHandler","onEnclosingPageletDestroy","queryThenMutateDOM","removeFromArray"],(function(a,b,c,d,e,f){__p&&__p();var g=[],h=null;function i(){if(b("FullScreen").isFullScreen())return;b("queryThenMutateDOM")(function(){return g.forEach(function(a){return a.queryDOM()})},function(){return g.forEach(function(a){return a.updateWithCache()})},"AbstractDockingElement")}function j(){h||(h=new(b("SubscriptionsHandler"))(),h.addSubscriptions(b("Event").listen(window,"scroll",i),b("Event").listen(window,"resize",i),b("Run").onLeave(function(){while(g.length)k(g[0])})),h=h);return h}function k(a){__p&&__p();try{a.onPageletDestroyed&&b("Arbiter").unsubscribe(a.onPageletDestroyed)}catch(a){}finally{a.onPageletDestroyed=null}if(!h||g.indexOf(a)===-1)return;b("removeFromArray")(g,a);if(g.length)return;h.release();h=null}e.exports={register:function(c,d,e){var a=j(),f={onPageletDestroyed:a.addSubscriptions(b("onEnclosingPageletDestroy")(c,function(){k(f)})),queryDOM:d,updateWithCache:e};g.push(f)}}}),null);
__d("DirectionalDockingElement",["cx","AbstractDockingElement","Arbiter","CSS","DOM","Scroll","Style","UITinyViewportAction","UserAgent","ViewportBounds","getElementPosition","getStyleProperty","queryThenMutateDOM"],(function(a,b,c,d,e,f,g){__p&&__p();var h=!0,i=!1,j=b("UserAgent").isBrowser("Safari < 10")||b("UserAgent").isBrowser("Mobile Safari < 10");a=function(){"use strict";__p&&__p();function a(a){this.$11=null,this.$5=0,this.$2=null,this.$7=!1,this.$12=a,this.$8=0,this.$11=null,this.$13=0,this.register(),this.$14=b("ViewportBounds").getTop(),b("Style").set(this.$12,"width",this.$12.getBoundingClientRect().width+"px"),this.$9=b("DOM").create("div"),b("CSS").addClass(this.$9,"_lwx"),b("Style").set(this.$9,"position","relative"),b("DOM").replace(this.$12,this.$9),b("DOM").appendContent(this.$9,this.$12),this.update()}var c=a.prototype;c.register=function(){b("AbstractDockingElement").register(this.getRoot(),this.__queryDOM.bind(this),this.__updateWithCache.bind(this))};c.subscribe=function(a,c,d){this.$1||(this.$1=new(b("Arbiter"))());return this.$1.subscribe(a,c,d)};c.destroy=function(){b("DOM").replace(this.$9,this.$12)};c.__queryDOM=function(){__p&&__p();var a=-b("getElementPosition")(this.$9).y;a!==this.$13&&(this.$15=a>this.$13?i:h,this.$13=a);this.$6=this.$12.getBoundingClientRect();a=document;var c=a.body;a=a.documentElement;if(c&&a){var d=a.clientHeight;a=a.scrollHeight;this.$7=b("Scroll").getTop(c)+d>Math.max(d,a)}if(j){this.$11=b("getElementPosition")(this.$9);c=parseInt(b("getStyleProperty")(this.$12,"left"),10);this.$11&&!isNaN(c)&&c!==this.$11.x&&(this.$11=babelHelpers["extends"]({},this.$11,{x:c}))}this.$12.style.position==="fixed"&&(this.$5=b("getElementPosition")(this.$12).y+this.$13)};c.$16=function(a,c,d){if(c===this.$4&&a===this.$3&&d===this.$2)return;var e=a!==this.$3,f={};c!==this.$4&&(f.top=c+"px",this.$4=c);a!==this.$3&&(f.position=a,this.$3=a);j&&(d!==this.$2&&(f.left=typeof d==="number"?d+"px":"auto",this.$2=d));b("Style").apply(this.$12,f);e&&this.$1&&this.$1.inform("changedposition")};c.$17=function(){this.$16("fixed",this.$14,this.$11?this.$11.x:null)};c.$18=function(){this.$16("fixed",this.$8,this.$11?this.$11.x:null)};c.$19=function(){this.$16("absolute",this.$5,null)};c.unfixAndScrollBy=function(a){this.$5=Math.max(0,this.$5-a),this.$19()};c.translateY=function(a){var c=b("getElementPosition")(this.$12).y,d=b("getElementPosition")(this.$9).y;c=c-d;this.$5=a+c;this.$19()};c.__updateWithCache=function(){__p&&__p();var a=Math.round(this.$6.height);a!==this.$10&&(b("Style").set(this.$9,"height",a+"px"),this.$10=a,this.$1&&this.$1.inform("changedheight"));if(this.$7)return;if(this.$13+this.$14<0||b("UITinyViewportAction").isTiny()){this.$5=0;this.$19();b("Arbiter").inform("reflow");return}this.$15===i&&this.$13+this.$8>=this.$5?this.$18():this.$15===h&&this.$13+this.$14<=this.$5?this.$17():this.$19();b("Arbiter").inform("reflow")};c.update=function(){var a=this;b("queryThenMutateDOM")(function(){a.__queryDOM()},function(){a.__updateWithCache()})};c.setOffset=function(a){return this.setOffsetAndTop(a,this.$14)};c.setOffsetAndTop=function(a,c){var d=this;b("queryThenMutateDOM")(function(){d.__queryDOM(),d.$8=Math.round(a),d.$14=c},function(){d.__updateWithCache()});return this};c.setTop=function(a){return this.setOffsetAndTop(this.$8,a)};c.getPlaceholder=function(){return this.$9};c.getRoot=function(){return this.$12};return a}();e.exports=a}),null);
__d("DockingElement",["cx","AbstractDockingElement","Arbiter","CSS","DOM","DOMDimensions","Style","UIGridColumnsConfig","UITinyViewportAction","UserAgent","getElementPosition"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("UserAgent").isBrowser("Safari")||b("UserAgent").isBrowser("Mobile Safari < 11");a=function(){"use strict";__p&&__p();function a(a){this.$12=a,this.$9=b("DOM").create("div"),b("CSS").addClass(this.$9,"_1pfm"),b("Style").set(this.$9,"position","relative"),b("DOM").replace(this.$12,this.$9),b("DOM").appendContent(this.$9,this.$12),this.$8=0,this.$6=!1,this.register(),this.update()}var c=a.prototype;c.register=function(){b("AbstractDockingElement").register(this.getRoot(),this.__queryDOM.bind(this),this.__updateWithCache.bind(this))};c.subscribe=function(a,c,d){this.$1||(this.$1=new(b("Arbiter"))());return this.$1.subscribe(a,c,d)};c.__queryDOM=function(){var a=b("getElementPosition")(this.getPlaceholder()),c=b("DOMDimensions").getElementDimensions(this.$12);c.width>0&&c.height>0?(this.$11=a,this.$5=c):this.$6=!0};c.__updateWithCache=function(){__p&&__p();if(this.$6||this.$11==null||this.$8==null){this.$6=!1;return}var a=this.$8,c=this.getPlaceholder(),d=!b("UIGridColumnsConfig").responsive_rhc_when_narrow&&b("UITinyViewportAction").isTiny();if(!d&&this.$11!=null&&this.$11.y<=a){!this.$7&&this.$12.parentNode&&(b("CSS").addClass(this.$12,"fixed_elem"),this.$7=!0);var e;this.$4!==a&&(e={},e.top=a+"px",this.$4=a);d=this.$5.width;d!==this.$3&&(e=e||{},e.width=d+"px",this.$3=d);if(h){a=this.$11.x;a!==this.$2&&(e=e||{},e.left=a+"px",this.$2=a)}e&&b("Style").apply(this.$12,e);d=this.$5.height;b("Style").set(c,"height",d+"px");(d+1<this.$10||d-1>this.$10)&&(this.$10=d,this.$1&&this.$1.inform("changedheight"))}else this.$7&&(b("Style").set(c,"height",""),b("Style").apply(this.$12,{left:"",top:"",width:""}),b("CSS").removeClass(this.$12,"fixed_elem"),this.$7=!1,this.$2=null,this.$3=null,this.$4=null)};c.update=function(){this.__queryDOM(),this.__updateWithCache()};c.getPlaceholder=function(){return this.$9};c.getRoot=function(){return this.$12};c.setOffset=function(a){this.$8=a;this.update();return this};return a}();e.exports=a}),null);
__d("XUISubNavigationLoader",["csx","cx","AjaxPipeRequest","CSS","DOM","FIGEntityPageLayout","PageHooks","PageTransitions","PageTransitionsRegistrar","Parent","Run","createCancelableFunction"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="._3o_h",j="content_container",k="_4t7n",l="._4t7n",m="_2fvv",n="_2yap",o="._2yap",p="._6ng8",q="_6ng8",r=null,s=[],t=[],u=null;function v(a){for(var c=0;c<s.length;c++){var d=s[c];if(d(a))return!0}b("Run").onLeave(function(){b("PageTransitionsRegistrar").removeHandler(v,6),t.forEach(function(a){return a()}),t=[],s=[]});return!1}var w={setLoading:function(a,c){b("CSS").conditionClass(a,k,c)},setSelected:function(a,c){__p&&__p();c===void 0&&(c=!1);var d=b("Parent").byClass(a,m);b("DOM").scry(d,i).forEach(function(a){b("DOM").remove(a)});b("DOM").scry(d,o).forEach(function(a){b("CSS").removeClass(a,n)});c&&b("DOM").scry(d,p).forEach(function(a){b("CSS").removeClass(a,q)});b("CSS").addClass(a,n);c&&b("CSS").addClass(a,q)},cancelRequest:function(a){r&&(r.abort(),r=null,b("DOM").scry(b("Parent").byClass(a,m),l).forEach(function(a){b("CSS").removeClass(a,k)}))},sendRequest:function(a,c,d,e){e===void 0&&(e=!1),w.cancelRequest(d),w.setSelected(d,e),w.setLoading(d,!0),b("PageHooks").runHooks("onleavehooks"),r=new(b("AjaxPipeRequest"))(j,c).setData(babelHelpers["extends"]({},a.getQueryData(),{path:a.getPath()})).setFirstResponseHandler(function(){w.setLoading(d,!1)}).setFinallyHandler(function(){r=null,b("FIGEntityPageLayout").update(),b("PageTransitions").transitionComplete(!0)}).send()},registerHandler:function(a){s.length||b("PageTransitionsRegistrar").registerHandler(v,6),u&&u.remove(),s.push(a)},onLeave:function(a){!s.length&&!u&&(u=b("Run").onLeave(function(){t.forEach(function(a){return a()}),t=[]}));a=b("createCancelableFunction")(a);t.push(a);return{remove:function(){a.cancel()}}}};e.exports=w}),null);
__d("EntityPageDirectionalDockingElement",["DirectionalDockingElement","EntityPageDockingElementController"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.register=function(){b("EntityPageDockingElementController").register(this.__queryDOM.bind(this),this.__updateWithCache.bind(this))};return c}(b("DirectionalDockingElement"));e.exports=a}),null);
__d("EntityPageDockingElementController",["Event","SubscriptionsHandler","XUISubNavigationLoader","queryThenMutateDOM","throttle"],(function(a,b,c,d,e,f){__p&&__p();var g=[],h=null,i=b("throttle")(function(){b("queryThenMutateDOM")(function(){return g.forEach(function(a){return a.queryDOM()})},function(){return g.forEach(function(a){return a.updateWithCache()})},"EntityPageDockingElementController")});a={register:function(a,c){h||(h=new(b("SubscriptionsHandler"))(),h.addSubscriptions(b("Event").listen(window,"scroll",i),b("Event").listen(window,"resize",i),b("XUISubNavigationLoader").onLeave(function(){g=[],h&&(h.release(),h=null)})));a={queryDOM:a,updateWithCache:c};g.push(a)}};e.exports=a}),null);
__d("getEntityPageDockingElementOffset",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a,b,c){__p&&__p();var d=c.getRootBoundingClientRect(),e=d.height,f=d.top;d=c.getPlaceholderBoundingClientRect();var g=d.top;d=a-e;c=c.getSections();if(c){c=Array.from(c).map(function(a){return g+a.getBoundingClientRect().top-f});c.sort(function(a,b){return a-b});for(var h=0,i=c.length;h<i;h++){var j=c[h]-g;if(e-j<a-b){d=b-j;break}}}return d};e.exports=a}),null);
__d("EntityPageRegion",["DirectionalDockingElement","getElementRect","getEntityPageDockingElementOffset","memoize","uniqueID"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a,c,d){__p&&__p();var e=this;this.$9=function(){return b("getElementRect")(e.$1.getPlaceholder())};this.$10=function(){return b("getElementRect")(e.$1.getRoot())};this.$1=a;this.$2=b("uniqueID")();this.$3=0;this.$4=!1;this.$5=d;this.$6=c;this.$7=0;this.$8=!1;this.getPlaceholderBoundingClientRect=b("memoize")(this.$9);this.getRootBoundingClientRect=b("memoize")(this.$10)}var c=a.prototype;c.calculateOffset=function(a,c){if(this.$5)return this.$5(a,c,this);if(this.getRootBoundingClientRect().height+c<a)return c;else return b("getEntityPageDockingElementOffset")(a,c,this)};c.getID=function(){return this.$2};c.getOffset=function(){return this.$3};c.getTop=function(){return this.$7};c.getSections=function(){var a=this.$6;return!a?null:this.$1.getPlaceholder().querySelectorAll(a)};c.setOffset=function(a){if(a===this.$3)return;this.$3=a;this.$4=!0};c.setTop=function(a){if(a===this.$7)return;this.$7=a;this.$8=!0};c.update=function(){var a=this.$4,c=this.$8,d=this.$1,e=this.$3,f=this.$7;d instanceof b("DirectionalDockingElement")&&c?a?d.setOffsetAndTop(e,f):d.setTop(f):a&&d.setOffset(e);this.$4=!1;this.$8=!1;this.getPlaceholderBoundingClientRect=b("memoize")(this.$9);this.getRootBoundingClientRect=b("memoize")(this.$10)};return a}();e.exports=a}),null);
__d("SimpleObjectsPool",["invariant"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=a,this.$2=[]}var b=a.prototype;b.get=function(){if(this.$2.length)return this.$2.pop();else{var a=this.$1;return new a()}};b.put=function(a){a instanceof this.$1||g(0,4227),this.$2.push(a)};return a}();e.exports=a}),null);
__d("PersistentAnimationFrame",["SimpleObjectsPool","Visibility","cancelAnimationFrame","requestAnimationFrame"],(function(a,b,c,d,e,f){__p&&__p();var g=16,h,i={},j=!0;function k(){h||(h=new(b("SimpleObjectsPool"))(l));return h}var l=function(){"use strict";__p&&__p();function a(){var a=this;this.$1=function(){a.callback(),a.$2(),k().put(a)}}a.request=function(a){return!a?0:k().get().request(a)};a.cancel=function(a){if(a===0)return;a=i[String(a)];a&&a.cancel()};var c=a.prototype;c.request=function(a){j&&m();this.callback=a;this.hidden=b("Visibility").isHidden();this.hidden?this.intID=setTimeout(this.$1,g):this.intID=b("requestAnimationFrame")(this.$1);this.strID=String(this.intID);i[this.strID]=this;return this.intID};c.cancel=function(){this.strID&&(this.hidden?clearTimeout(this.intID):b("cancelAnimationFrame")(this.intID),this.$2(),k().put(this))};c.$2=function(){delete i[this.strID],delete this.intID,delete this.strID,delete this.callback,delete this.hidden};return a}();function m(){var a;j=!1;(a=b("Visibility")).addListener(a.HIDDEN,n);a.addListener(a.VISIBLE,n)}function n(){Object.keys(i).forEach(function(a){a=i[a];var b=a.callback;a.cancel();b()})}e.exports=l}),null);
__d("requestPersistentAnimationFrame",["PersistentAnimationFrame"],(function(a,b,c,d,e,f){"use strict";e.exports=b("PersistentAnimationFrame").request}),null);
__d("ResizeEventHandler",["requestPersistentAnimationFrame"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){var c=this;this.$1=!1;this.$2=!1;this.handleEvent=function(){c.$2===!1&&(c.$2=!0,b("requestPersistentAnimationFrame")(c.$4))};this.$4=function(){c.$2=!1,c.$1===!1&&c.$3()};this.$3=a}var c=a.prototype;c.cancel=function(){this.$1=!0};return a}();e.exports=a}),null);
__d("FIGEntityPageLayout",["Arbiter","DirectionalDockingElement","EntityPageConfig","EntityPageDirectionalDockingElement","EntityPageRegion","Event","MutationObserver","ResizeEventHandler","Run","SubscriptionsHandler","ViewportBounds","XUISubNavigationLoader","getViewportDimensions","queryThenMutateDOM","removeFromArray","throttle"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h=null,i=null,j=null,k=null,l={attributes:!1,characterData:!0,childList:!0,subtree:!0};function m(){__p&&__p();b("queryThenMutateDOM")(function(){__p&&__p();var a=b("getViewportDimensions")().height,c=b("ViewportBounds").getTop();g.sort(function(a,b){return a.getPlaceholderBoundingClientRect().top<b.getPlaceholderBoundingClientRect().top?-1:1});g.forEach(function(b){__p&&__p();var d=b.getRootBoundingClientRect(),e=d.width;d=b.getPlaceholderBoundingClientRect();var f=d.left,h=d.top,i=c;g.forEach(function(a){var c=a.getRootBoundingClientRect(),d=c.height;c=c.width;var g=a.getPlaceholderBoundingClientRect(),j=g.left;g=g.top;b!==a&&g+d<=h&&Math.min(f+e,j+c)>=Math.max(f,j)&&(i+=d+a.getOffset()-a.getTop())});d=b.calculateOffset(a,i);b.setOffset(d);b.setTop(i)})},function(){g.forEach(function(a,b){a.update()})},"EntityPageLayout")}function n(){o();j||(j=new(b("SubscriptionsHandler"))(),j.addSubscriptions(b("Run").onLeave(p)));return j}function o(){i||(i=new(b("SubscriptionsHandler"))(),i.addSubscriptions(b("ViewportBounds").subscribe("change",m),b("Arbiter").subscribe("footerLoaded",m),b("Event").listen(window,"resize",b("throttle")(m)),b("XUISubNavigationLoader").onLeave(function(){i&&(i.release(),i=null),k&&(k.disconnect(),k=null),h&&(h=null)})));return i}function p(){j&&(j.release(),j=null)}function q(a,c,d,e,f){var i=new(b("EntityPageRegion"))(d,c?c.join(","):null,f);g.push(i);m();e.addSubscriptions(d.subscribe("changedheight",m),b("Event").listen(a,"resize",m));b("EntityPageConfig").hasMutationObserver&&(k||(h=new(b("ResizeEventHandler"))(m),k=new(b("MutationObserver"))(h.handleEvent)),k.observe(a,l));return function(){b("removeFromArray")(g,i),g.length===0&&p()}}a={register:function(a,c,d,e){var f=d?new d(a):new(b("DirectionalDockingElement"))(a),g=q(a,c,f,n(),e);return{remove:function(){g(),f.destroy()}}},registerAcrossTransitions:function(a,c,d,e){var f=d?new d(a):new(b("EntityPageDirectionalDockingElement"))(a),g=q(a,c,f,o(),e);return{remove:function(){g(),f.destroy()}}},update:m};e.exports=a}),null);
__d("XUISubNavigation",["cx","CSS","Event","Parent","SubscriptionsHandler","URI","XUISubNavigationLoader"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i="_8ue",j="_2yaa",k=!1;a=function(){"use strict";__p&&__p();function a(a,c,d){__p&&__p();var e=this;d===void 0&&(d=!1);this.$1=a;this.$3=d;b("XUISubNavigationLoader").registerHandler(function(a){return e.$4(a)});this.$2=new(b("SubscriptionsHandler"))();this.$2&&this.$2.addSubscriptions(b("Event").listen(this.$1,"click",function(a){a=b("Parent").byClass(a.target,j);a instanceof HTMLElement&&a.getAttribute("data-endpoint")&&b("XUISubNavigationLoader").setSelected(a,e.$3)}),b("Event").listen(this.$1,"focusin",this.$5.bind(this)),b("Event").listen(this.$1,"focusout",this.$6.bind(this)),b("XUISubNavigationLoader").onLeave(this.destroy.bind(this)));c&&(this.$2&&this.$2.addSubscriptions(b("Event").listen(c,"click",function(a){a.preventDefault(),b("CSS").addClass(e.$1,"_5rll"),b("Event").fire(e.$1,"resize")})))}var c=a.prototype;c.destroy=function(){this.$2&&this.$2.release(),this.$2=null};c.$5=function(a){a=b("Parent").byClass(a.target,j);a&&b("CSS").addClass(a,i)};c.$6=function(a){var c=b("Parent").byClass(a.target,j);c&&!c.contains(a.relatedTarget)&&b("CSS").removeClass(c,i)};c.$4=function(a){__p&&__p();if(k){k=!1;return!1}var c=a.getPath(),d=Array.prototype.find.call(this.$1.getElementsByTagName("a"),function(a){return new(h||(h=b("URI")))(a.href).getPath()===c&&a.hasAttribute("data-endpoint")});if(d){var e=b("Parent").byClass(d,j);if(e instanceof HTMLElement){b("XUISubNavigationLoader").sendRequest(a,new(h||(h=b("URI")))(d.getAttribute("data-endpoint")),e,this.$3);return!0}return!1}return!1};a.skipNextTransition=function(){k=!0};return a}();e.exports=a}),null);
__d("XUIPageNavigationShim",["DOMContainer.react","PagesEventObserver","React","isNode"],(function(a,b,c,d,e,f){__p&&__p();var g=function(){var a=0;return function(){return"XUIPageNavigationShim-"+a++}}();function h(a){__p&&__p();var c;a.children&&(c=a.children.map(function(a){if(typeof a==="object"&&typeof a.ctor==="function")return h(a);else if(b("isNode")(a))return b("React").jsx(b("DOMContainer.react"),{children:a},g());else return a}),c.length===1&&(c=c[0]));var d=a.ctor;a.props.ignoreTabClick?a.props.onTabClick=function(){return!1}:a.props.pageid&&(a.props.onTabClick=function(c,d){b("PagesEventObserver").notify("admin_nav_tab_click",a.props.pageid,{tab:c})});return b("React").jsx(d,babelHelpers["extends"]({},a.props,{children:c}),g())}a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.render=function(){return h(this.props)};return b}(b("React").Component);e.exports=a}),null);
__d("EntityPageLayoutDockingElement",["DockingElement","EntityPageDockingElementController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.register=function(){b("EntityPageDockingElementController").register(this.__queryDOM.bind(this),this.__updateWithCache.bind(this))};return c}(b("DockingElement"));e.exports=a}),null);
__d("EntityPageRenderer",["ReactDOM","ReactRenderer","XUISubNavigationLoader"],(function(a,b,c,d,e,f){a={constructAndRenderComponent:function(a,c,d,e){b("XUISubNavigationLoader").onLeave(function(){b("ReactDOM").unmountComponentAtNode(d)});return b("ReactRenderer").constructAndRenderComponentAcrossTransitions(a,c,d,e)}};e.exports=a}),null);
__d("VideoChannelViewVariablesDynamic",["VideoChannelViewVariables"],(function(a,b,c,d,e,f){"use strict";e.exports=b("VideoChannelViewVariables")}),null);
__d("CurrentPage",["invariant","Run"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=null,i=null;a={init:function(a){var c=a.pageID;a=a.pageName;this.setID(c);this.setName(a);b("Run").onLeave(this._clear)},getID:function(){h!==null||g(0,3482);return h},setID:function(a){h||(h=a)},getName:function(){i!==null||g(0,3482);return i},setName:function(a){i||(i=a)},_clear:function(){h=null,i=null}};e.exports=a}),null);