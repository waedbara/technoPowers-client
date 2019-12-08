if (self.CavalryLogger) { CavalryLogger.start_js(["C6b9P"]); }

__d("AYMTMultiTipLogger",["cx","AsyncRequest","Event","React","ReactDOM","XAYMTMultiTipAsyncClickController","XUISpinner.react","$"],(function(a,b,c,d,e,f,g){a={init:function(a,c,d,e,f){b("Event").listen(a,"click",this.simplyHideAndLog.bind(this,c,d,e,f))},simplyHideAndLog:function(a,c,d,e){d!==null&&b("ReactDOM").render(b("React").jsx(b("XUISpinner.react"),{className:"_5kvq",size:"large"}),b("$")(d));d=b("XAYMTMultiTipAsyncClickController").getURIBuilder().setString("aymt_data",JSON.stringify(a)).setString("target",c);e!==null&&d.setString("extra_data",e);new(b("AsyncRequest"))(d.getURI()).send()}};e.exports=a}),null);
__d("BoostedPagelikeConstants",[],(function(a,b,c,d,e,f){a={APPLICATION_ID:"317954918290638",ADMINPANEL:"admin_panel",CONTEXTUALDIALOG:"contextual_dialog",PAGESMANAGER:"pages_manager",SPRINGBOARDFLYOUT:"springboard_flyout",PAGETABLHS:"page_tab_lhs",DELETE:"inactive",PAUSE:"paused",ACTIVE:"active",EXPAND:"boosted_pagelike/expand",MUTATE:"boosted_pagelike/mutate",ACCOUNT_CHANGE:"boosted_pagelike/account_change",BUDGET_CHANGE:"boosted_pagelike/budget_change",STATUS_CHANGE:"boosted_pagelike/status_change",DURATION_CHANGE:"boosted_pagelike/duration_change",DATE_PICKER_VISIBILITY:"boosted_pagelike/date_picker_visibility",CURRENCY_CHANGE:"boosted_pagelike/currency_change",TARGETING_INIT:"boosted_pagelike/targeting_init",TARGETING_CHANGE:"boosted_pagelike/targeting_change",PANEL_STATUS_CHANGE_FINISH:"boosted_pagelike/panel_status_change_finish",MENU_CF_REDIRECT:"boosted_pagelike/menu_cf_redirect",SHOW_TEXT_POLICY_WARNING:"boosted_pagelike/show_text_policy_warning",HIDE_TEXT_POLICY_WARNING:"boosted_pagelike/hide_text_policy_warning",GEO_TARGET_LEVELS:{CITY:"city",REGION:"region",COUNTRY:"country"},MAX_COUNTRY_COUNT:25,COUNTRY_COUNT_WARNING:10,KEYWORD_SUGGESTIONS_DISPLAY_LIMIT:5,KEYWORD_CATEGORY_RAW:0,KEYWORD_CATEGORY_WIKI:1,DIALOG_PADDING_TO_BOTTOM:180,BW_DIALOG_MAX_HEIGHT:531,DIALOG_MAX_HEIGHT:519,PAYLOAD_SOURCE_CLIENT:"client",PAYLOAD_SOURCE_SERVER:"server"};e.exports=a}),null);
__d("BoostedWebsiteAboutSectionPromoteButton",["Arbiter","ArbiterMixin","BoostedPagelikeConstants","UIPagelet","mixin"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){var c;c=a.call(this)||this;c.$BoostedWebsiteAboutSectionPromoteButton1=b;c.$BoostedWebsiteAboutSectionPromoteButton2();return c}var d=c.prototype;d.$BoostedWebsiteAboutSectionPromoteButton2=function(){var a=this;g&&b("Arbiter").unsubscribe(g);g=b("Arbiter").subscribe(b("BoostedPagelikeConstants").PANEL_STATUS_CHANGE_FINISH,function(c,d){if(d.product==="boosted_website"){c="PageStructuredContentPagelet_"+a.$BoostedWebsiteAboutSectionPromoteButton1;b("UIPagelet").loadFromEndpoint("PageStructuredContentPagelet",c,{page:a.$BoostedWebsiteAboutSectionPromoteButton1,column:"side"})}})};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a}),null);
__d("PageAdminGYPSJTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:PageAdminGYPSJLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:PageAdminGYPSJLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:PageAdminGYPSJLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setCallsite=function(a){this.$1.callsite=a;return this};c.setCandidateExperiment=function(a){this.$1.candidate_experiment=a;return this};c.setCandidateSource=function(a){this.$1.candidate_source=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setGroupID=function(a){this.$1.group_id=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setPosition=function(a){this.$1.position=a;return this};c.setRankingExperiment=function(a){this.$1.ranking_experiment=a;return this};c.setRankingScore=function(a){this.$1.ranking_score=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={callsite:!0,candidate_experiment:!0,candidate_source:!0,event:!0,group_id:!0,page_id:!0,position:!0,ranking_experiment:!0,ranking_score:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("MegaphoneHelper",["Animation","Arbiter","AsyncRequest","CSS","Dialog","DOM","Event","ge"],(function(a,b,c,d,e,f){__p&&__p();var g={hideStory:function(a,c,d,e,f){a={mp_id:a,location:c,context:e,event:f?"action":"dismissal"};new(b("AsyncRequest"))().setURI("/ajax/megaphone/megaphone_hide.php").setMethod("POST").setData(a).setHandler(function(a){f&&f(a)}).send();c=b("ge")(d);c&&new(b("Animation"))(c).to("height",0).duration(500).hide().go()},createModalStory:function(a,c,d,e){var f;(!a.buttons||!a.buttons.length)&&(a.buttons=b("Dialog").CLOSE,f=g.hideStory(c,d,e,null));c=new(b("Dialog"))(a);f&&c.setHandler(f);c.show()},buttonOnClick:function(a,c,d,e,f,h,i,j){var k=function(){f?new(b("AsyncRequest"))().setURI(e).send():i||(document.location.href=e)};h?(g.hideStory(a,c,j||"",d,k),i&&e&&window.open(e)):k()},renderFullWidth:function(a,c,d){d=b("ge")(a);b("DOM").prependContent(d,c);b("Arbiter").inform("Megaphone/show",a,"persistent")},hideMegaphoneWithoutRequest:function(a,c){b("Event").listen(a,"click",function(){b("CSS").hide(c)})}};e.exports=g}),null);
__d("legacy:megaphone",["MegaphoneHelper"],(function(a,b,c,d,e,f){a.MegaphoneHelper=b("MegaphoneHelper")}),3);
__d("XPageLHSUnitsReorderingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/lhs/reorder/",{page_id:{type:"Int",required:!0},visible_units:{type:"IntVector",required:!0},__asyncDialog:{type:"Int"}})}),null);
__d("PagesSideUnitsOrderCreator",["csx","AsyncRequest","DOM","XPageLHSUnitsReorderingController"],(function(a,b,c,d,e,f,g){__p&&__p();a={registerMenuItem:function(a,c,d){__p&&__p();a.subscribe("itemclick",function(a,e){__p&&__p();if(e&&e.item&&e.item.getValue()===c){a="._57dz div[data-id]";e=b("DOM").scry(document.body,a);a=[];for(var f=0,g=e.length;f<g;f++)a.push(e[f].getAttribute("data-id"));if(e){f=b("XPageLHSUnitsReorderingController").getURIBuilder().setInt("page_id",d).setIntVector("visible_units",a).getURI();new(b("AsyncRequest"))(f).send()}}})}};e.exports=a}),null);
__d("XPageAdminGYPSJInteractionLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/page/admin/gypsj/interaction_logging/",{page_id:{type:"String",required:!0},user_id:{type:"String",required:!0}})}),null);
__d("PageAdminGYPSJLogger",["AsyncRequest","Event","PageAdminGYPSJTypedLogger","XPageAdminGYPSJInteractionLoggingController","tidyEvent"],(function(a,b,c,d,e,f){"use strict";a={logClickEvent:function(a,c){b("tidyEvent")(b("Event").listen(a,"click",function(a){new(b("PageAdminGYPSJTypedLogger"))().updateData(c).log();a=b("XPageAdminGYPSJInteractionLoggingController").getURIBuilder().setString("page_id",c.page_id).setString("user_id",c.user_id).getURI();new(b("AsyncRequest"))(a).send()}))}};e.exports=a}),null);
__d("XPageStoryComposerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/page_story/composer/",{page_id:{type:"FBID"}})}),null);
__d("PageStoryComposer",["ActorURI","AsyncRequest","XPageStoryComposerController"],(function(a,b,c,d,e,f){"use strict";a={composePageStory:function(a,c){a.addEventListener("click",function(){var a=b("XPageStoryComposerController").getURIBuilder().getURI();a=b("ActorURI").create(a,c);new(b("AsyncRequest"))(a).setMethod("POST").setData({page_id:c}).send()})}};e.exports=a}),null);
__d("PageGoalConstants",["keyMirror"],(function(a,b,c,d,e,f){a={goalName:b("keyMirror")({awareness:null,engagement:null,sales:null}),channelName:b("keyMirror")({card:null,dialog:null})};e.exports=a}),null);
__d("XPageGoalsDialogChannelController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/page_goals_dialog/",{pageid:{type:"Int",required:!0},force_nullstate:{type:"Bool",defaultValue:!1},sessionid:{type:"String"},referrer:{type:"String"},__asyncDialog:{type:"Int"}})}),null);
__d("PageGoalChannel",["csx","cx","AsyncDialog","AsyncRequest","CSS","Event","PageGoalConstants","XPageGoalsDialogChannelController","tidyEvent"],(function(a,b,c,d,e,f,g,h){__p&&__p();a={xoutAllTipsShowNullState:function(a,c,d){__p&&__p();if(a==b("PageGoalConstants").channelName.card){c=document.getElementById(c);c.children.length===1&&b("CSS").show(c.children[0])}else if(a==b("PageGoalConstants").channelName.dialog){c=document.getElementsByClassName("_gvo");a=document.getElementsByClassName("_2a2p");if(c.length===0&&a.length===0){c=document.getElementsByClassName("_33gf")[0];c.remove();a=b("XPageGoalsDialogChannelController").getURIBuilder().setInt("pageid",d).setBool("force_nullstate",!0).setString("referrer","tips_dialog_channel").getURI();b("AsyncDialog").send(new(b("AsyncRequest"))(a))}}},onClickTipMarkTipRead:function(a,c){var d=b("Event").listen(a,"click",function(a){b("CSS").matchesSelector(c,"._1h50")?(b("CSS").addClass(c,"_1h5g"),b("CSS").removeClass(c,"_1h50")):d.remove()})},markTipRead:function(a){a=document.getElementById(a);if(a&&a.children.length===1){a=a.children[0];b("CSS").matchesSelector(a,"._1h50")&&(b("CSS").addClass(a,"_1h5g"),b("CSS").removeClass(a,"_1h50"))}},hideDialogOnClick:function(a){b("tidyEvent")(b("Event").listen(a,"click",function(){var a=document.getElementsByClassName("_33gf")[0];a&&a.remove()}))}};e.exports=a}),null);
__d("TimelineSecondaryColumnUnitList",["csx","cx","CSS","DOM","Event","Run","mixInEventEmitter"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=30;a=function(){"use strict";__p&&__p();function a(a,c){var d=b("Event").listen(c,"click",function(){this.$1=b("DOM").scry(a,"._16f_"),this.$2(),b("DOM").remove(c),this.emit("expanded")}.bind(this));b("Run").onLeave(d.remove.bind(d))}var c=a.prototype;c.$2=function(){if(!this.$1.length)return;b("CSS").removeClass(this.$1.shift(),"_16f_");window.setTimeout(this.$2.bind(this),i)};return a}();b("mixInEventEmitter")(a,{expanded:!0});e.exports=a}),null);