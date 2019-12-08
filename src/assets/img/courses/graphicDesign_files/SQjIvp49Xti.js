if (self.CavalryLogger) { CavalryLogger.start_js(["TGCjJ"]); }

__d("CenteredContainer.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=(this.props.vertical?"_3bwv":"")+(this.props.horizontal?" _3bww":""),c=b("React").Children.map(this.props.children,function(a){return b("React").jsx("div",{className:"_3bwx",children:a})}),d=b("joinClasses")(this.props.className,this.props.fullHeight?"_5bpf":"");return b("React").jsx("div",babelHelpers["extends"]({},this.props,{className:d,children:b("React").jsx("div",{className:a,children:b("React").jsx("div",{className:"_3bwy",children:c})})}))};return c}(b("React").Component);c.propTypes={fullHeight:a.bool,vertical:a.bool,horizontal:a.bool};c.defaultProps={fullHeight:!1,vertical:!1,horizontal:!0};e.exports=c}),null);
__d("TooltipMixinClass.react",["DOM","React","ReactDOM","TooltipData"],(function(a,b,c,d,e,f){__p&&__p();function g(a){a=a.tooltip;return a!=null&&b("React").isValidElement(a)}a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),h=0;h<e;h++)f[h]=arguments[h];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={tooltipContainer:g(d.props)?b("DOM").create("div"):null},c)||babelHelpers.assertThisInitialized(d)}c.getDerivedStateFromProps=function(a,c){a=g(a);c=c.tooltipContainer;if(c&&!a)return{tooltipContainer:null};else if(!c&&a)return{tooltipContainer:b("DOM").create("div")};return null};var d=c.prototype;d.componentDidMount=function(){this.$1()};d.componentDidUpdate=function(a,b){b.tooltipContainer&&!this.state.tooltipContainer&&this.$2(b.tooltipContainer),this.$1()};d.$1=function(){var a=this.state.tooltipContainer,c=this.props.tooltip;if(c!=null&&b("React").isValidElement(c)&&a!=null){var d=function(){return c};b("ReactDOM").render(b("React").jsx(d,{}),a)}else a=this.props.tooltip;a!=null?b("TooltipData").set(b("ReactDOM").findDOMNode(this),a,this.props.position,this.props.alignH):b("TooltipData").remove(b("ReactDOM").findDOMNode(this))};d.componentWillUnmount=function(){this.state.tooltipContainer&&this.$2(this.state.tooltipContainer),b("TooltipData").remove(b("ReactDOM").findDOMNode(this))};d.$2=function(a){b("ReactDOM").unmountComponentAtNode(a)};return c}(b("React").Component);e.exports=a}),null);
__d("TooltipLink.react",["React","TooltipMixinClass.react"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx("a",babelHelpers["extends"]({},this.props,{children:this.props.children}))};return c}(b("TooltipMixinClass.react"));e.exports=a}),null);
__d("FBLoadShimmer.react",["cx","LoadingMarker.react","React","UserAgent","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c=a.className,d=a.height,e=a.style,f=a.width;a=a.disableAnimation;var g=b("UserAgent").isBrowser("Safari")&&b("UserAgent").isPlatform("Mac OS X");a="_1tt"+(a?" _300z":"")+(g?" _72_f":"");g=b("React").jsx("div",{className:b("joinClasses")(c,a),style:babelHelpers["extends"]({height:d!=null?d+"px":void 0,width:f!=null?f+"px":void 0},e)});return b("React").jsx(b("LoadingMarker.react"),{children:g})}e.exports=a}),null);
__d("ClickableArea.react",["Focus","React","ReactDOM"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){if(this.props.buttonRef){var a=this.props.buttonRef();b("Focus").relocate(b("ReactDOM").findDOMNode(a),b("ReactDOM").findDOMNode(this))}};d.render=function(){var a=this.props,c=a.children,d=a.onClick;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","onClick"]);return b("React").cloneElement(b("React").Children.only(c),babelHelpers["extends"]({},a,{onClick:d}))};return c}(b("React").Component);e.exports=a}),null);
__d("CircularProgressBar.react",["cx","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"CircularProgressBar",propTypes:{animate:a.bool,percentComplete:a.number.isRequired,text:a.string},render:function(){var a=this.props,c=a.animate,d=a.text;a=a.percentComplete;var e=360*a/100,f=Math.max(e,180)-180;e=Math.min(e,180);var g=a<100?"1":"0";return b("React").jsxs("div",{"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":a,className:"_1_bj",role:"progressbar",style:{opacity:g},children:[!!d&&b("React").jsx("div",{className:"_22sa",children:d}),b("React").jsx("div",{className:"_1_bk",children:b("React").jsxs("div",{className:c?"_22sb":"",children:[b("React").jsx("div",{className:"_1_bl",style:{opacity:g}}),b("React").jsx("div",{className:"_1_bp _1_bq",children:b("React").jsx("div",{className:"_1_br",style:{transform:"translateX(-100%) rotate("+f+"deg)",opacity:g}})}),b("React").jsx("div",{className:"_1_bs _1_bq",children:b("React").jsx("div",{className:"_1_br",style:{transform:"translateX(-100%) rotate("+e+"deg)",opacity:g}})})]})})]})}});e.exports=c}),null);
__d("HelpLink.react",["fbt","React","TooltipLink.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("TooltipLink.react"),babelHelpers["extends"]({"aria-label":this.props.label},this.props,{className:b("joinClasses")(this.props.className,"uiHelpLink mls"),children:void 0}))};return c}(b("React").Component);a.defaultProps={href:"#",label:g._("Help")};e.exports=a}),null);
__d("InlineBlock.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;var h={baseline:null,bottom:"_6d",middle:"_6b",top:"_6e"};c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this.props,c=a.alignv,d=a.height,e=a.fullWidth;a=babelHelpers.objectWithoutPropertiesLoose(a,["alignv","height","fullWidth"]);c=h[c];e="_6a"+(e?" _5u5j":"");var f=b("joinClasses")(e,c);if(d!=null){c=b("React").jsx("div",{className:b("joinClasses")("_6a",c),style:{height:d+"px"}});return b("React").jsxs("div",babelHelpers["extends"]({},a,{className:b("joinClasses")(this.props.className,e),height:null,children:[c,b("React").jsx("div",{className:f,children:this.props.children})]}))}else return b("React").jsx("div",babelHelpers["extends"]({},a,{className:b("joinClasses")(this.props.className,f),children:this.props.children}))};return c}(b("React").Component);c.propTypes={alignv:a.oneOf(["baseline","bottom","middle","top"]),height:a.number,fullWidth:a.bool};c.defaultProps={alignv:"baseline",fullWidth:!1};e.exports=c}),null);
__d("PopoverMenu.react",["cx","CSS","InlineBlock.react","Popover","PopoverMenu","React","ReactDOM","SubscriptionsHandler","areEqual","clearImmediate","joinClasses","setImmediate"],(function(a,b,c,d,e,f,g){__p&&__p();var h;a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$3=null,c.$7=function(){c.$3&&(c.$3.release(),c.$3=null),c.$8(),c.$2.setMenu(c.$5(c.props.menu)),c.$6()},b)||babelHelpers.assertThisInitialized(c)}c.getFirstChild=function(a){a=a.children;return Array.isArray(a)?a[0]:a};c.getButtonSize=function(a){a=c.getFirstChild(a);return a?a.type.getButtonSize(a.props):0};var d=c.prototype;d.componentDidMount=function(){var a=b("ReactDOM").findDOMNode(this.refs.root),c=a==null?void 0:a.firstChild;c!=null&&(b("CSS").addClass(c,"_p"),this.$1=new(b("Popover"))(a,c,this.props.layerBehaviors,{alignh:this.props.alignh,position:this.props.position,disabled:this.props.disabled,arrowDimensions:{offset:0,length:0},disableArrowKeyActivation:this.props.disableArrowKeyActivation,enableActivationOnEnter:this.props.enableActivationOnEnter,"data-testid":this.props["data-testid"],shouldDisableHideOnScroll:this.props.shouldDisableHideOnScroll}),this.$2=new(b("PopoverMenu"))(this.$1,c,this.$5(this.props.menu),this.props.behaviors));this.$6()};d.componentDidUpdate=function(a){(h||(h=b("areEqual")))(a.menu,this.props.menu)||(b("clearImmediate")(this.$4),this.$4=b("setImmediate")(this.$7)),this.props.alignh!==a.alignh&&this.$2.getPopover().getLayer().setAlignment(this.props.alignh),this.props.disabled!==a.disabled&&(this.props.disabled?this.$2.disable():this.$2.enable())};d.$6=function(){this.props.onReturnWithoutFocusedItem&&this.$3&&this.$2&&this.$3.addSubscriptions(this.$2.subscribe("returnWithoutFocusedItem",this.props.onReturnWithoutFocusedItem))};d.render=function(){__p&&__p();var a=b("React").Children.map(this.props.children,function(a,c){if(c===0)return b("React").cloneElement(a,{className:b("joinClasses")(a.props.className,"_p")});else return a}),c=Object.assign({},this.props);delete c.onShow;delete c.onHide;delete c.alignh;delete c.position;delete c.layerBehaviors;delete c.behaviors;delete c.menu;delete c.disabled;delete c.disableArrowKeyActivation;delete c.enableActivationOnEnter;return b("React").jsx(b("InlineBlock.react"),babelHelpers["extends"]({},c,{className:b("joinClasses")(this.props.className,"uiPopover"),ref:"root",disabled:null,children:a}))};d.componentWillUnmount=function(){b("clearImmediate")(this.$4),this.hidePopover(),this.$3&&(this.$3.release(),this.$3=null),this.$2&&this.$2.destroy()};d.$5=function(a){__p&&__p();var c=a.props;a=new a.type(c);this.$3=new(b("SubscriptionsHandler"))();c.onItemClick&&this.$3.addSubscriptions(a.subscribe("itemclick",c.onItemClick));c.onItemFocus&&this.$3.addSubscriptions(a.subscribe("focus",c.onItemFocus));c.onItemBlur&&this.$3.addSubscriptions(a.subscribe("blur",c.onItemBlur));c.onChange&&this.$3.addSubscriptions(a.subscribe("change",c.onChange));this.props.onShow&&this.$3.addSubscriptions(this.$1.subscribe("show",this.props.onShow));this.props.onHide&&this.$3.addSubscriptions(this.$1.subscribe("hide",this.props.onHide));return a};d.getMenu=function(){return this.$2.getMenu()};d.isShown=function(){return!!(this.$1&&this.$1.isShown())};d.showPopover=function(a){this.$1.showLayer();if(a){var b=this.$2.getMenu();b.blur();b.focusAnItem(a)}};d.hidePopover=function(){var a=this.$1;a&&a.isShown()&&a.hideLayer()};d.getFocusedItem=function(){var a=this.$2.getMenu();return a.getFocusedItem()};d.$8=function(){var a=this.getMenu();a&&a.forEachItem(function(a){a=a.getRoot().firstElementChild;a&&b("ReactDOM").unmountComponentAtNode(a)})};return c}(b("React").Component);c.propTypes={alignh:a.oneOf(["left","center","right"]),alignv:a.oneOf(["baseline","bottom","middle","top"]),position:a.oneOf(["above","below","left","right"]),layerBehaviors:a.array,menu:a.object.isRequired,disabled:a.bool,disableArrowKeyActivation:a.bool,enableActivationOnEnter:a.bool,onReturnWithoutFocusedItem:a.func,shouldDisableHideOnScroll:a.bool};c.defaultProps={alignv:"middle",shouldDisableHideOnScroll:!1};e.exports=c}),null);
__d("MenuItemNoAction",["MenuItem"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.hasAction=function(){return!1};return b}(b("MenuItem"));e.exports=a}),null);
__d("MenuSelectableItem",["cx","CSS","DOM","MenuItem"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){b=a.call(this,b)||this;b._ARIARole="menuitemcheckbox";b._selected=!!b._data.selected;return b}var d=c.prototype;d.getIcon=function(){return this._data.icon};d.setIcon=function(a){b("DOM").replace(this._data.icon,a),this._data.icon=a};d.isSelected=function(){return this._selected};d.select=function(){if(this.isDisabled())return!1;b("CSS").addClass(this._root,"_54nd");this._anchor.setAttribute("aria-checked","true");this._selected=!0};d.deselect=function(){b("CSS").removeClass(this._root,"_54nd"),this._anchor.setAttribute("aria-checked","false"),this._selected=!1};d.render=function(){var c=a.prototype.render.call(this);this._data.selected&&(b("CSS").addClass(c,"_54nd"),this._anchor.setAttribute("aria-checked","true"));return c};return c}(b("MenuItem"));Object.assign(a.prototype,{_selected:!1});e.exports=a}),null);
__d("MenuTheme",["cx"],(function(a,b,c,d,e,f,g){e.exports={className:"_569t"}}),null);
__d("SelectableMenuUtils",[],(function(a,b,c,d,e,f){a={doesItemSupportSelect:function(a){return g(a)},isSelected:function(a){return g(a)&&a.isSelected()}};function g(a){return a.select&&a.deselect&&a.isSelected}e.exports=a}),null);
__d("SelectableMenu",["Menu","SelectableMenuUtils","createArrayFromMixed"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.focusAnItem=function(){for(var c=0;c<this._items.length;c++)if(b("SelectableMenuUtils").isSelected(this._items[c])&&this._focusItem(this._items[c])!==!1)return!0;return a.prototype.focusAnItem.call(this)};d.setValue=function(a){this._root||this._render();var c=b("createArrayFromMixed")(a);this._items.forEach(function(a){b("SelectableMenuUtils").doesItemSupportSelect(a)&&(c.includes(a.getValue())?a.select():b("SelectableMenuUtils").isSelected(a)&&a.deselect())});this.inform("change",this.getSelection())};d._handleItemClick=function(c,d){__p&&__p();if(!b("SelectableMenuUtils").doesItemSupportSelect(c))return a.prototype._handleItemClick.call(this,c,d);var e=this.inform("itemclick",{item:c,event:d});if(e)return;if(this._config.multiple){e=b("SelectableMenuUtils").isSelected(c)?c.deselect():c.select();e!==!1&&this.inform("change",this.getSelection());this._config.closeOnSelectWithMultiple&&this.done()}else b("SelectableMenuUtils").isSelected(c)||c.select()!==!1&&(this._items.forEach(function(a){b("SelectableMenuUtils").isSelected(a)&&a!==c&&a.deselect()}),this.inform("change",this.getSelection())),this.done();return c.handleClick(d)};d.getSelection=function(){var a=[];this._items.forEach(function(c){b("SelectableMenuUtils").isSelected(c)&&a.push({label:c.getLabel(),value:c.getValue(),item:c})});this._config.multiple||(a=a[0]);return a};return c}(b("Menu"));e.exports=a}),null);
__d("ReactMenu",["cx","Menu","MenuItem","MenuItemNoAction","MenuSelectableItem","MenuTheme","React","SelectableMenu","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();function h(a){var c=[];b("React").Children.forEach(a,function(a){a&&c.push(a)});return c}function a(a){a!=null&&(a.isReactLegacyFactory={},a.type=a)}c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){d=babelHelpers["extends"]({theme:b("MenuTheme"),maxheight:c?c.maxheight:null,className:c?c.className:null,testid:c?c["data-testid"]:null},d);return a.call(this,h(c.children),d)||this}return c}(b("Menu"));a(c);d=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){d=babelHelpers["extends"]({className:b("joinClasses")("_57di",c?c.className:null),theme:b("MenuTheme"),multiple:c&&c.multiple,closeOnSelectWithMultiple:c&&c.closeOnSelectWithMultiple,maxheight:c?c.maxheight:null,testid:c?c["data-testid"]:null},d);return a.call(this,h(c.children),d)||this}return c}(b("SelectableMenu"));a(d);c.SelectableMenu=d;a(b("MenuItem"));c.Item=b("MenuItem");c.ItemNoAction=b("MenuItemNoAction");a(b("MenuSelectableItem"));c.SelectableItem=b("MenuSelectableItem");e.exports=c}),null);
__d("ReactXUIMenu",["ReactMenu","XUIMenuTheme","XUIMenuWithSquareCorner"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){a.isReactLegacyFactory={},a.type=a}d=function(a){babelHelpers.inheritsLoose(c,a);function c(c){var d={behaviors:void 0,theme:b("XUIMenuTheme")};(!c||c.withsquarecorner!==!1)&&(d.behaviors=[b("XUIMenuWithSquareCorner")]);return a.call(this,c,d)||this}return c}(c=b("ReactMenu"));a(d);f=function(a){babelHelpers.inheritsLoose(c,a);function c(c){var d={behaviors:void 0,theme:b("XUIMenuTheme")};(!c||c.withsquarecorner!==!1)&&(d.behaviors=[b("XUIMenuWithSquareCorner")]);return a.call(this,c,d)||this}return c}(c.SelectableMenu);a(f);d.SelectableMenu=f;d.Item=c.Item;d.SelectableItem=c.SelectableItem;e.exports=d}),null);
__d("AbstractTextField.react",["cx","Keys","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").Component;c=b("React").PropTypes;d=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.onInputKeyDown=function(a){var c=d.props,e=a.keyCode,f=a.shiftKey;e===b("Keys").BACKSPACE&&!f&&c.onBackspace?c.onBackspace(a):e===b("Keys").TAB&&!f&&c.onTab?c.onTab(a):e===b("Keys").TAB&&f&&c.onBackTab?c.onBackTab(a):e===b("Keys").UP?f?c.onShiftUpArrow&&c.onShiftUpArrow(a):c.onUpArrow&&c.onUpArrow(a):e===b("Keys").DOWN&&c.onDownArrow?f?c.onShiftDownArrow&&c.onShiftDownArrow(a):c.onDownArrow&&c.onDownArrow(a):e===b("Keys").LEFT&&c.onLeftArrow?c.onLeftArrow(a):e===b("Keys").RIGHT&&c.onRightArrow?c.onRightArrow(a):e===b("Keys").RETURN?(c.onEnter&&c.onEnter(a),f?c.onShiftEnter&&c.onShiftEnter(a):c.onNoShiftEnter&&c.onNoShiftEnter(a)):e===b("Keys").ESC&&c.onEscape?c.onEscape(a):e==b("Keys").COMMA&&c.onComma?c.onComma(a):e==b("Keys").SPACE&&c.onSpace&&c.onSpace(a);c.onKeyDown&&c.onKeyDown(a)};d.onInputChange=function(a){d.props.onChange&&d.props.onChange(a),(d.props.value===null||d.props.value===void 0)&&d.setState({value:a.currentTarget.value})};d.onInputBlur=function(a){d.props.onBlur&&d.props.onBlur(a),a.isDefaultPrevented()||d.setState({focused:!1})};d.onInputFocus=function(a){d.props.onFocus&&d.props.onFocus(a),a.isDefaultPrevented()||d.setState({focused:!0})};d.state={focused:!1,value:d.props.defaultValue||""};return d}var d=c.prototype;d.getValue=function(){return this.props.value!=null?String(this.props.value):this.state.value};d.getHint=function(){return this.props.hint!=null?String(this.props.hint):""};d.cloneElement=function(a){var c=this.getHint()?this.getHint():this.getValue();return b("React").cloneElement(a,{"aria-activedescendant":this.props["aria-activedescendant"],"aria-autocomplete":this.props["aria-autocomplete"],"aria-controls":this.props["aria-controls"],"aria-describedby":this.props["aria-describedby"],"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-multiline":this.props["aria-multiline"],"aria-expanded":this.props["aria-expanded"],"aria-valuenow":this.props["aria-valuenow"],"aria-valuetext":this.props["aria-valuetext"],"data-testid":this.props["data-testid"],required:this.props.required,role:this.props.role,placeholder:this.props.placeholder,autoCapitalize:this.props.autoCapitalize,autoComplete:this.props.autoComplete,autoCorrect:this.props.autoCorrect,autoFocus:this.props.autoFocus,onKeyDown:this.onInputKeyDown,onKeyUp:this.props.onKeyUp,onBlur:this.onInputBlur,onFocus:this.onInputFocus,onChange:this.onInputChange,onInput:this.props.onInput,onPaste:this.props.onPaste,onWheel:this.props.onWheel,className:this.props.useLabel?a.props.className:b("joinClasses")(a.props.className,this.props.className),dir:this.props.dir,disabled:this.props.disabled,defaultValue:this.props.defaultValue,name:this.props.name,value:c,id:this.props.id,maxLength:this.props.maxLength,min:this.props.min,max:this.props.max,step:this.props.step,pattern:this.props.pattern,style:this.props.style,title:this.props.title,type:this.props.type||a.props.type})};d.render=function(){var a=b("React").Children.only(this.props.children);if(!this.props.useLabel)return this.cloneElement(a);var c=this.props.className;this.props.classNames&&(c=b("joinClasses")(c,this.props.classNames.root),this.getValue()||(c=b("joinClasses")(c,this.props.classNames.empty)));return b("React").jsxs("label",{className:c,style:this.props.styles.label,children:[this.props.leftChild,this.cloneElement(a),this.props.rightChild]})};return c}(a);d.defaultProps={useLabel:!0,classNames:{root:"_58ak",empty:"_3ct8"},styles:{label:null}};d.propTypes={useLabel:c.bool,leftChild:c.element,rightChild:c.element,classNames:c.shape({root:c.string.isRequired,empty:c.string.isRequired}),styles:c.shape({label:c.object}),"aria-activedescendant":c.string,"aria-autocomplete":c.string,"aria-controls":c.string,"aria-describedby":c.string,"aria-errormessage":c.string,"aria-invalid":c.oneOf(["grammar","false","spelling","true"]),"aria-label":c.node,"aria-labelledby":c.string,"aria-multiline":c.bool,"aria-expanded":c.bool,"aria-valuenow":c.number,"aria-valuetext":c.string,"data-testid":c.string,autoComplete:c.string,autoFocus:c.bool,className:c.string,defaultValue:c.string,dir:c.string,disabled:c.bool,id:c.string,max:c.oneOfType([c.number,c.string]),maxLength:c.number,min:c.string,name:c.string,onBackspace:c.func,onBackTab:c.func,onBlur:c.func,onChange:c.func,onClick:c.func,onComma:c.func,onDownArrow:c.func,onEnter:c.func,onEscape:c.func,onFocus:c.func,onKeyDown:c.func,onKeyPress:c.func,onKeyUp:c.func,onLeftArrow:c.func,onNoShiftEnter:c.func,onPaste:c.func,onRightArrow:c.func,onShiftDownArrow:c.func,onShiftEnter:c.func,onShiftUpArrow:c.func,onSpace:c.func,onTab:c.func,onUpArrow:c.func,onWheel:c.func,pattern:c.string,placeholder:c.node,required:c.bool,role:c.string,step:c.string,style:c.object,tabIndex:c.number,title:c.string,type:c.string,value:c.string,autoCapitalize:c.string,autoCorrect:c.string};e.exports=d}),null);
__d("AbstractTextInput.react",["cx","AbstractTextField.react","React"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").Component;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this;return b("React").jsx(b("AbstractTextField.react"),babelHelpers["extends"]({},this.props,{children:b("React").jsx("input",{className:"_58al",onClick:this.props.onClick,onMouseDown:this.props.onMouseDown,onKeyUp:this.props.onKeyUp,onKeyDown:this.props.onKeyDown,onPaste:this.props.onPaste,size:this.props.size,tabIndex:this.props.tabIndex,type:this.props.type,ref:function(b){return a.$1=b}})}))};d.focusInput=function(){this.$1&&this.$1.focus()};d.blurInput=function(){this.$1&&this.$1.blur()};d.selectInput=function(){this.$1&&this.$1.select()};d.getTextFieldDOM=function(){return this.$1};d.getValue=function(){return this.$1?this.$1.value:""};return c}(a);c.propTypes=b("AbstractTextField.react").propTypes;c.defaultProps={type:"text"};e.exports=c}),null);
__d("XUIError",["cx","invariant","Promise","ARIA","Bootloader","CSS","DataStore","DOM","Event","Parent","filterObject","getActiveElement","getElementText","isNode","memoize","nl2br","promiseDone"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i="data-xui-error-alignh",j="XUIError",k="data-xui-error",l="_1tp7",m="data-xui-error-position";b("Event").listen(document.documentElement,"mouseover",function(a){if(b("Parent").byClass(b("getActiveElement")(),l))return;a=b("Parent").byClass(a.getTarget(),l);a?v(a):w()});b("Event").listen(document.documentElement,"focusin",function(a){a=b("Parent").byClass(a.getTarget(),l);a?v(a):w()});b("Event").listen(document.documentElement,"focusout",function(a){w()});var n=b("memoize")(function(){return new(b("Promise"))(function(a,c){b("Bootloader").loadModules(["React","ReactDOM","XUIErrorDialogImpl"],function(b,c,d){a(babelHelpers["extends"]({React:b,ReactDOM:c},d.getNewDialog()))},"XUIError")})}),o=null;function p(a){return babelHelpers["extends"]({message:a.getAttribute(k),position:a.getAttribute(m),alignh:a.getAttribute(i)},b("DataStore").get(a,j))}function q(a,c){b("DataStore").set(a,j,c)}function r(a,c){b("DataStore").set(a,j,babelHelpers["extends"]({},b("DataStore").get(a,j),c))}function s(a){b("DataStore").remove(a,j)}var t=!1,u=!1;function v(a){__p&&__p();b("promiseDone")(n(),function(c){__p&&__p();var d=c.React,e=c.ReactDOM,f=c.dialog;c=c.dialogMessageNode;var g=p(a),i=g.message;if(i==null)return;d=d.isValidElement(i);t&&!d&&e.unmountComponentAtNode(c);d?e.render(i,c):(typeof i==="string"||b("isNode")(i)||h(0,652),typeof i==="string"&&(i=b("nl2br")(i)),b("DOM").setContent(c,i));t=d;f.setContext(a).setPosition(g.position||"right").setAlignment(g.alignh||(g.position==="above"||g.position==="below"?"right":null)).show();b("ARIA").notify(b("getElementText")(c));o=a}),u=!0}function w(){__p&&__p();if(!u)return;b("promiseDone")(n(),function(a){a.React;var b=a.ReactDOM,c=a.dialog;a=a.dialogMessageNode;if(!o)return;t&&(b.unmountComponentAtNode(a),t=!1);c.hide();o=null})}function x(a){b("DOM").contains(a,b("getActiveElement")())&&v(a)}a={set:function(a){var c=a.target,d=a.message,e=a.position;a=a.alignh;d!==null||h(0,653);b("CSS").addClass(c,l);r(c,b("filterObject")({message:d,position:e,alignh:a},function(a){return a!==void 0}));x(c)},clear:function(a){b("CSS").removeClass(a,l),a.removeAttribute(k),s(a),a===o&&w()},updatePosition:function(){if(!u)return;b("promiseDone")(n(),function(a){a=a.dialog;o&&a.updatePosition()})},__setReactError:function(a,b){var c=b.message,d=b.position;b=b.alignh;c!==null||h(0,653);q(a,{message:c,position:d,alignh:b});x(a)},__clearReactError:function(a){s(a),a===o&&w()}};e.exports=a}),null);
__d("XUIError.react",["cx","React","ReactDOM","XUIError","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="_1tp7";a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){this.props.xuiError!=null&&b("XUIError").__setReactError(b("ReactDOM").findDOMNode(this),{message:this.props.xuiError,position:this.props.xuiErrorPosition,alignh:this.props.xuiErrorAlignh})};d.componentDidUpdate=function(){this.props.xuiError==null?b("XUIError").__clearReactError(b("ReactDOM").findDOMNode(this)):b("XUIError").__setReactError(b("ReactDOM").findDOMNode(this),{message:this.props.xuiError,position:this.props.xuiErrorPosition,alignh:this.props.xuiErrorAlignh})};d.componentWillUnmount=function(){b("XUIError").__clearReactError(b("ReactDOM").findDOMNode(this))};d.render=function(){var a=b("React").Children.only(this.props.children);this.props.xuiError!=null&&(a=b("React").cloneElement(a,{className:b("joinClasses")(a.props.className,h)}));return a};return c}(b("React").Component);e.exports=a}),null);
__d("XUITextInput.react",["cx","AbstractTextInput.react","React","XUIError.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").Component;c=b("React").PropTypes;d=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){var c;c=a.call(this,b)||this;c.$1=function(a){c.props.onFocus&&c.props.onFocus(a),c.setState({focused:!0})};c.$2=function(a){c.props.onBlur&&c.props.onBlur(a),c.setState({focused:!1})};c.state={focused:!1};return c}var d=c.prototype;d.render=function(){var a="_55r1"+(this.props.height==="tall"?" _55r2":"")+(this.props.disabled?" _53a0":"")+(this.state.focused?" _1488":"");return b("React").jsx(b("XUIError.react"),babelHelpers["extends"]({},this.props,{children:b("React").jsx(b("AbstractTextInput.react"),babelHelpers["extends"]({},this.props,{onFocus:this.$1,onBlur:this.$2,ref:"textInput",className:b("joinClasses")(this.props.className,a)}))}))};d.focusInput=function(){this.refs.textInput&&this.refs.textInput.focusInput()};d.blurInput=function(){this.refs.textInput&&this.refs.textInput.blurInput()};d.selectInput=function(){this.refs.textInput&&this.refs.textInput.selectInput()};d.getValue=function(){return this.refs.textInput&&this.refs.textInput.getValue()};d.getTextFieldDOM=function(){return this.refs.textInput?this.refs.textInput.getTextFieldDOM():null};return c}(a);d.defaultProps={height:"short"};d.propTypes=babelHelpers["extends"]({},b("AbstractTextInput.react").propTypes,b("XUIError.react").propTypes,{height:c.oneOf(["short","tall"])});e.exports=d}),null);
__d("LitestandStoryInsertionStatus",["ArbiterMixin"],(function(a,b,c,d,e,f){var g="check";a={registerBlocker:function(a){return this.subscribe(g,function(b,c){c.can_insert&&a()&&(c.can_insert=!1)})},canInsert:function(){var a={can_insert:!0};this.inform(g,a);return a.can_insert}};Object.assign(a,b("ArbiterMixin"));e.exports=a}),null);
__d("MercuryTypingAnimation_DEPRECATED.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a;return(a=b("React")).jsx("div",{className:b("joinClasses")("_4a0v _1x3z",this.props.className),children:a.jsxs("div",{className:"_4b0g",children:[a.jsx("div",{className:"_5pd7"}),a.jsx("div",{className:"_5pd7"}),a.jsx("div",{className:"_5pd7"})]})})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("FileInput",["cx","ArbiterMixin","DOM","DOMClone","Event","Focus","Keys","UserAgent_DEPRECATED","mixin"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("UserAgent_DEPRECATED").ie();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e){__p&&__p();var f;f=a.call(this)||this;f.container=c;f.control=d;c=b("DOM").scry(f.container,"a")[0];c&&c.removeAttribute("href");d=b("DOM").create("div",{className:"_3jk"},e);b("DOM").appendContent(f.control,d);f._boundHandleChange=f._handleChange.bind(babelHelpers.assertThisInitialized(f));h&&(f._boundHandleIEKeyDown=f._handleIEKeyDown.bind(babelHelpers.assertThisInitialized(f)));f._setInputElement(e);return f}var d=c.prototype;d.getValue=function(){return this.input.value};d.getInput=function(){return this.input};d.getContainer=function(){return this.container};d.getControl=function(){return this.control};d.clear=function(){this.input.value="";if(this.input.value!==""){var a=b("DOMClone").deepClone(this.input);b("DOM").replace(this.input,a);this._setInputElement(a)}};d.destroy=function(){this._focus.remove(),this._focus=null,this._listener.remove(),this._listener=null,h&&(this._IEKeyDownListener.remove(),this._IEKeyDownListener=null),this.container=null,this.control=null,this.input=null};d._setInputElement=function(a){this.input=a,this._focus&&this._focus.remove(),this._focus=b("Focus").relocate(a,this.control),this._listener&&this._listener.remove(),this._listener=b("Event").listen(a,"change",this._boundHandleChange),h&&(this._IEKeyDownListener&&this._IEKeyDownListener.remove(),this._IEKeyDownListener=b("Event").listen(a,"keydown",this._boundHandleIEKeyDown))};d._handleChange=function(a){this.inform("change",a);if(this.input){var c=this.input.form;c&&h<9&&b("Event").fire(c,"change",a)}};d._handleIEKeyDown=function(a){if(a.keyCode===b("Keys").RETURN){a.preventDefault();a=document.createEvent("MouseEvents");a.initEvent("click",!0,!0);this.input.dispatchEvent(a)}};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a}),null);
__d("PhotosUploadID",[],(function(a,b,c,d,e,f){var g=1024;a={getNewID:function(){return(g++).toString()}};e.exports=a}),null);
__d("ContextualLayerPositionClassOnContext",["cx","CSS"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe("reposition",this._updateClassName.bind(this)),this._layer.isShown()&&this._updateClassName()};c.disable=function(){this._subscription.unsubscribe(),this._subscription=null,this._prevClassName&&(b("CSS").removeClass(this._layer.getContext(),this._prevClassName),this._prevClassName=null)};c._updateClassName=function(a,c){a=this._layer.getContext();c=h(c);if(this._prevClassName){if(this._prevClassName===c)return;b("CSS").removeClass(a,this._prevClassName)}b("CSS").addClass(a,c);this._prevClassName=c};return a}();function h(a){__p&&__p();var b=a.getAlignment();a=a.getPosition();if(a==="below")if(b==="left")return"_nk";else if(b==="right")return"_nl";else return"_nm";else if(a==="above")if(b==="left")return"_nn";else if(b==="right")return"_no";else return"_np";else if(a==="left")return"_nq";else return"_nr"}Object.assign(a.prototype,{_subscription:null,_prevClassName:null});e.exports=a}),null);
__d("VideoAutoplayRule",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this.$1=!0,this.videoUnit=a}var b=a.prototype;b.calculateAutoplayScore=function(){throw new Error("Should be overridden")};b.enableRule=function(){this.$1=!0};b.disableRule=function(){this.$1=!1};b.isEnabled=function(){return this.$1};return a}();e.exports=a}),null);
__d("Clipboard",["Promise","UserAgent"],(function(a,b,c,d,e,f){__p&&__p();var g={isSupported:function(){return window.document.queryCommandSupported instanceof Function&&window.document.queryCommandSupported("copy")&&!(b("UserAgent").isBrowser("Firefox < 41")||b("UserAgent").isPlatform("iOS < 10.3"))||b("UserAgent").isBrowser("Chrome >= 43")},copy:function(a,c){__p&&__p();c=c||document.body;if(!c)return!1;var d=!0,e=document.createElement("textarea");c.appendChild(e);e.value=a;if(b("UserAgent").isPlatform("iOS >= 10.3")){a=document.createRange();a.selectNodeContents(e);var f=window.getSelection();f.removeAllRanges();f.addRange(a);e.setSelectionRange(0,999999)}else e.select();try{d=document.execCommand("copy")}catch(a){d=!1}c.removeChild(e);return d},copyAsync:function(a){var c=window.navigator;if(c&&c.clipboard&&typeof c.clipboard.writeText==="function")return c.clipboard.writeText(a);return g.copy(a)?b("Promise").resolve():b("Promise").reject()}};e.exports=g}),null);
__d("Network",["mixInEventEmitter"],(function(a,b,c,d,e,f){__p&&__p();var g=!0,h=a.navigator.connection,i={0:"unknown",1:"ethernet",2:"wifi",3:"2g",4:"3g"};function c(){return g}function d(a){if(a==g)return;g=a;l.emit(a?"online":"offline")}function f(){return h?h.bandwidth:g?Infinity:0}function j(){return h?h.metered:!1}function k(){var a=h?String(h.type):"0";return i[a]||a}var l={getBandwidth:f,getType:k,isMetered:j,isOnline:c,setOnline:d};b("mixInEventEmitter")(l,{online:!0,offline:!0});l=l;a.addEventListener?(a.addEventListener("online",d.bind(null,!0)),a.addEventListener("offline",d.bind(null,!1))):a.attachEvent&&(a.attachEvent("online",d.bind(null,!0)),a.attachEvent("offline",d.bind(null,!1)));e.exports=l}),null);
__d("List.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this.props,c=a.className,d=a.border,e=a.direction,f=a.spacing,g=a.valign,h=a.edgepadding;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","border","direction","spacing","valign","edgepadding"]);e==="vertical"&&(g=null);e=(e==="vertical"?"_4kg":"")+(e==="horizontal"?" _4ki":"")+(g==="top"?" _509-":"")+(g==="middle"?" _509_":"")+(g==="bottom"?" _50a0":"");var i;(f!=="none"||d!=="none")&&(i=(d==="none"?"_6-i":"")+(d==="light"?" _4ks":"")+(d==="medium"?" _4kt":"")+(d==="dark"?" _4ku":""));var j;f!=="none"&&(j=(h?"":"_6-h")+(f==="small"?" _704":"")+(f==="medium"?" _6-j":"")+(f==="large"?" _703":""));c=b("joinClasses")(c,"uiList",e,i,j);return b("React").jsx("ul",babelHelpers["extends"]({className:c},a))};return c}(b("React").Component);c.propTypes={border:a.oneOf(["none","light","medium","dark"]),spacing:a.oneOf(["none","small","medium","large"]),direction:a.oneOf(["vertical","horizontal"]),valign:a.oneOf(["baseline","top","middle","bottom"]),edgepadding:a.bool};c.defaultProps={border:"medium",spacing:"medium",direction:"vertical",valign:"top",edgepadding:!1};e.exports=c}),null);
__d("ServerHTML.react",["React"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.blob;a=babelHelpers.objectWithoutPropertiesLoose(a,["blob"]);return typeof c==="string"?b("React").jsx("div",babelHelpers["extends"]({},a,{children:c})):b("React").jsx("div",babelHelpers["extends"]({},a,{dangerouslySetInnerHTML:c}))};return c}(b("React").Component);e.exports=a}),null);
__d("fbjs/lib/CSSCore",["CSSCore"],(function(a,b,c,d,e,f){"use strict";e.exports=b("CSSCore")}),null);
__d("renderSubtreeIntoContainer_DO_NOT_USE",["ReactDOM-fb"],(function(a,b,c,d,e,f){"use strict";e.exports=b("ReactDOM-fb").unstable_renderSubtreeIntoContainer}),null);