if (self.CavalryLogger) { CavalryLogger.start_js(["n08q8"]); }

__d("ArticleAuthorEngagementBlock",["csx","CSS","DOMQuery","Event","Parent","Style"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="._1kaa";a={registerClickHandler:function(a,c,d){__p&&__p();b("Event").listen(a,"click",function(e){__p&&__p();if(e.target&&b("Parent").bySelector(e.target,h))return;if(c!==void 0&&b("CSS").shown(c)===!1){if(d){e=b("DOMQuery").scry(a,"._3c21");var f=b("DOMQuery").scry(a,"._6m3");if(e.length===0||f.length===0)return;e=e[0];f=f[0];b("Style").set(e,"height","237px");b("Style").set(f,"height","179px")}b("CSS").show(c)}})}};e.exports=a}),null);
__d("XWorkHubController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/hub/{?tab}/{?alert_id}/",{ref:{type:"String"},tab:{type:"String"},selected_key:{type:"String",defaultValue:"app_401904056828201"},alert_id:{type:"String"},mini:{type:"Bool",defaultValue:!1}})}),null);