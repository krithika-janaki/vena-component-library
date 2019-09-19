(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1061:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"actions",function(){return actions});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(85),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(108),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(109),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(14),_FlatButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(49),actions={onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onClick")},webTheme=(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.createMuiTheme)({venaTheme:"addin"}),Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.createMuiTheme)({venaTheme:"web"})),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Standard FlatButton (Web)"),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Disabled State (Web)"),_ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Loading State (Web)");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("FlatButton",module).add("Default",Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__.withInfo)({source:!1,propTables:[_FlatButton__WEBPACK_IMPORTED_MODULE_5__.a],propTablesExclude:[_FlatButton__WEBPACK_IMPORTED_MODULE_5__.b]})(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.MuiThemeProvider,{theme:webTheme},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,_ref,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FlatButton__WEBPACK_IMPORTED_MODULE_5__.b,{color:"primary",style:{marginRight:"10px"},onClick:actions.onClick},"Primary"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FlatButton__WEBPACK_IMPORTED_MODULE_5__.b,{color:"secondary",style:{marginRight:"10px"},onClick:actions.onClick},"Secondary"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FlatButton__WEBPACK_IMPORTED_MODULE_5__.b,{color:"danger",style:{marginRight:"10px"},onClick:actions.onClick},"Danger"))))})).add("Disabled State",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.MuiThemeProvider,{theme:webTheme},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,_ref2,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FlatButton__WEBPACK_IMPORTED_MODULE_5__.b,{color:"primary",disabled:!0,style:{marginRight:"10px"},onClick:actions.onClick},"Primary"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FlatButton__WEBPACK_IMPORTED_MODULE_5__.b,{color:"secondary",disabled:!0,style:{marginRight:"10px"},onClick:actions.onClick},"Secondary"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FlatButton__WEBPACK_IMPORTED_MODULE_5__.b,{color:"danger",disabled:!0,style:{marginRight:"10px"},onClick:actions.onClick},"Danger"))))}).add("Loading State",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.MuiThemeProvider,{theme:webTheme},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,_ref3,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FlatButton__WEBPACK_IMPORTED_MODULE_5__.b,{color:"primary",isLoading:!0,iconClass:"fa fa-plus",style:{marginRight:"10px"},onClick:actions.onClick},"Create"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FlatButton__WEBPACK_IMPORTED_MODULE_5__.b,{color:"secondary",isLoading:!0,iconClass:"fa fa-cloud-upload",style:{marginRight:"10px"},onClick:actions.onClick},"Secondary"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FlatButton__WEBPACK_IMPORTED_MODULE_5__.b,{color:"danger",isLoading:!0,iconClass:"fa fa-trash",style:{marginRight:"10px"},onClick:actions.onClick},"Delete"))))})}.call(this,__webpack_require__(158)(module))},1072:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(8),__webpack_require__(22),__webpack_require__(28),__webpack_require__(35),__webpack_require__(17),__webpack_require__(93),__webpack_require__(1),__webpack_require__(94),__webpack_require__(95),__webpack_require__(16),__webpack_require__(24),__webpack_require__(23);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),client=__webpack_require__(85),dist=__webpack_require__(108),addon_info_dist=__webpack_require__(109),styles=__webpack_require__(14),prop_types=__webpack_require__(2),prop_types_default=__webpack_require__.n(prop_types),FormControlLabel=__webpack_require__(459),FormControlLabel_default=__webpack_require__.n(FormControlLabel),Switch=__webpack_require__(460),Switch_default=__webpack_require__.n(Switch),colours=__webpack_require__(4),Switch_Switch=function(_ref){var classes=_ref.classes,checked=_ref.checked,onChange=_ref.onChange,enabledText=_ref.enabledText,disabledText=_ref.disabledText;return react_default.a.createElement(FormControlLabel_default.a,{control:react_default.a.createElement(Switch_default.a,{classes:{switchBase:classes.switchBase,bar:classes.switchBar,icon:classes.switchIcon,iconChecked:classes.switchIconChecked,checked:classes.switchChecked},inputProps:{"aria-checked":checked},checked:checked,onChange:onChange}),label:checked?enabledText:disabledText,classes:{label:checked?classes.switchLabelOn:classes.switchLabelOff}})};Switch_Switch.displayName="Switch",Switch_Switch.defaultProps={checked:!1,onChange:function onChange(){},enabledText:"ON",disabledText:"OFF"},Switch_Switch.propTypes={classes:prop_types_default.a.object.isRequired,checked:prop_types_default.a.bool,onChange:prop_types_default.a.func.isRequired,enabledText:prop_types_default.a.string,disabledText:prop_types_default.a.string};var SwitchComponent=Switch_Switch,Switches_Switch=Object(styles.withStyles)(function(theme){return{switchBase:{"&$switchChecked":{color:colours.p,"& + $switchBar":{backgroundColor:colours.j}},transition:theme.transitions.create("transform",{duration:theme.transitions.duration.shortest,easing:theme.transitions.easing.sharp})},switchChecked:{transform:"translateX(12px)","& + $switchBar":{opacity:1}},switchBar:{borderRadius:10,width:30,height:16,marginTop:-8,marginLeft:-4,backgroundColor:colours.g,opacity:1},switchIcon:{width:12,height:12,marginLeft:23,boxShadow:"none"},switchLabelOn:{color:colours.j,fontWeight:700,fontSize:12,marginTop:1,fontFamily:"Open Sans"},switchLabelOff:{color:colours.h,fontWeight:700,fontSize:12,marginTop:1,fontFamily:"Open Sans"}}})(Switch_Switch);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Switch_Switch.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Controlled switch value"},onChange:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Switch change handler"},enabledText:{defaultValue:{value:'"ON"',computed:!1},type:{name:"string"},required:!1,description:"Switch label enabled text"},disabledText:{defaultValue:{value:'"OFF"',computed:!1},type:{name:"string"},required:!1,description:"Switch label disabled text"},classes:{type:{name:"object"},required:!0,description:"@ignore"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switches/Switch.js"]={name:"Switch",docgenInfo:Switch_Switch.__docgenInfo,path:"src/components/Switches/Switch.js"}),__webpack_require__.d(__webpack_exports__,"actions",function(){return actions});var actions={onClick:Object(dist.action)("onClick")},webTheme=(Object(styles.createMuiTheme)({venaTheme:"addin"}),Object(styles.createMuiTheme)({venaTheme:"web"})),Switch_stories_SwitchDemo=function(_React$Component){function SwitchDemo(){var _getPrototypeOf2,_this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,SwitchDemo);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}(this,(_getPrototypeOf2=_getPrototypeOf(SwitchDemo)).call.apply(_getPrototypeOf2,[this].concat(args))),_defineProperty(_assertThisInitialized(_this),"state",{checked:!1}),_defineProperty(_assertThisInitialized(_this),"handleChange",function(){_this.setState({checked:!_this.state.checked})}),_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(SwitchDemo,react_default.a.Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(SwitchDemo,[{key:"render",value:function render(){return react_default.a.createElement("div",null,react_default.a.createElement(Switches_Switch,{checked:this.state.checked,onChange:this.handleChange}))}}]),SwitchDemo}();Switch_stories_SwitchDemo.displayName="SwitchDemo";var Switch_stories_ref=react_default.a.createElement("div",null,react_default.a.createElement("h2",null,"Standard Switch (Web)"),react_default.a.createElement(styles.MuiThemeProvider,{theme:webTheme},react_default.a.createElement(Switch_stories_SwitchDemo,null)));Object(client.storiesOf)("Switch").add("Default",Object(addon_info_dist.withInfo)({source:!1,propTables:[SwitchComponent],propTablesExclude:[Switches_Switch,Switch_stories_SwitchDemo,styles.MuiThemeProvider]})(function(){return Switch_stories_ref}))},13:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return ButtonComponent});__webpack_require__(8),__webpack_require__(76),__webpack_require__(26),__webpack_require__(29),__webpack_require__(9),__webpack_require__(44),__webpack_require__(1),__webpack_require__(60),__webpack_require__(986),__webpack_require__(10),__webpack_require__(27);var react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__),prop_types__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(14),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(200),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__),_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(199),_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_15__),_styles_colours__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(4);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(source,!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var webStyles={root:{minHeight:"36px",borderRadius:"6px",fontWeight:"bold"}},addinStyles={root:{minHeight:"32px",borderRadius:"0",lineHeight:"20px",boxShadow:"none"}},_ref2=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_15___default.a,{color:"inherit",size:14});function Button(_ref){var classes=_ref.classes,color=_ref.color,disabled=_ref.disabled,isLoading=_ref.isLoading,iconClass=_ref.iconClass,onClick=_ref.onClick,children=_ref.children,rest=_objectWithoutProperties(_ref,["classes","color","disabled","isLoading","iconClass","onClick","children"]),colorClass="";switch(color){case"primary":colorClass=classes.primary;break;case"secondary":colorClass=classes.secondary;break;case"confirmation":colorClass=classes.confirmation;break;case"danger":colorClass=classes.danger;break;default:colorClass=classes.primary}return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14___default.a,_extends({classes:{root:classes.root,contained:colorClass,label:isLoading?classes.loadingButtonLabel:null},variant:"contained",disabled:disabled||isLoading,onClick:onClick},rest),iconClass&&react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("i",{className:iconClass+" "+classes.icon}),isLoading&&react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{className:classes.loadingIconContainer},_ref2),children)}Button.displayName="Button",Button.defaultProps={color:"primary",disabled:!1,isLoading:!1,iconClass:""},Button.propTypes={classes:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object.isRequired,color:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.oneOf(["primary","secondary","confirmation","danger"]),disabled:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,isLoading:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,iconClass:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.node};var ButtonComponent=Button;__webpack_exports__.b=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__.withStyles)(function(theme){return{root:_objectSpread({minWidth:"80px",paddingLeft:"16px",paddingRight:"16px",fontSize:"14px",color:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.p,textTransform:"none","&:disabled":{cursor:"not-allowed",pointerEvents:"auto"}},"addin"===theme.venaTheme?addinStyles.root:webStyles.root),primary:{backgroundColor:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.e,"&:hover":{backgroundColor:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.f},"&:disabled":{backgroundColor:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.c,color:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.p},"&:disabled&:hover":{backgroundColor:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.c,color:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.p}},secondary:{backgroundColor:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.g,color:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.a,"&:hover":{backgroundColor:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.h},"&:disabled":{backgroundColor:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.g,color:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.h},"&:disabled&:hover":{backgroundColor:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.g,color:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.h}},confirmation:{backgroundColor:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.j,"&:hover":{backgroundColor:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.k},"&:disabled":{backgroundColor:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.i,color:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.p},"&:disabled&:hover":{backgroundColor:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.i,color:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.p}},danger:{backgroundColor:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.n,"&:hover":{backgroundColor:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.o},"&:disabled":{backgroundColor:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.m,color:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.p},"&:disabled&:hover":{backgroundColor:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.m,color:_styles_colours__WEBPACK_IMPORTED_MODULE_16__.p}},icon:{marginRight:"8px"},loadingButtonLabel:{visibility:"hidden"},loadingIconContainer:{position:"absolute",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"calc(100% - 12px)",visibility:"visible"}}})(Button),Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{color:{defaultValue:{value:'"primary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"confirmation"',computed:!1},{value:'"danger"',computed:!1}]},required:!1,description:"Sets the background and text colours."},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Disables button including all pointer events."},isLoading:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Disables button and overlays a circular progress spinner."},iconClass:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:'Prepends the icon to the start of the button contents.\nExpects font-awesome class values such as "`fa fa-plus`".'},classes:{type:{name:"object"},required:!0,description:"@ignore"},onClick:{type:{name:"func"},required:!0,description:"Button onClick handler"},children:{type:{name:"node"},required:!1,description:"The content of the button."}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Buttons/Button.js"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/components/Buttons/Button.js"})},4:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"p",function(){return WHITE}),__webpack_require__.d(__webpack_exports__,"a",function(){return BLACK}),__webpack_require__.d(__webpack_exports__,"g",function(){return GRAY_50}),__webpack_require__.d(__webpack_exports__,"h",function(){return GRAY_70}),__webpack_require__.d(__webpack_exports__,"i",function(){return GREEN_30}),__webpack_require__.d(__webpack_exports__,"j",function(){return GREEN_50}),__webpack_require__.d(__webpack_exports__,"k",function(){return GREEN_70}),__webpack_require__.d(__webpack_exports__,"l",function(){return RED_10}),__webpack_require__.d(__webpack_exports__,"m",function(){return RED_30}),__webpack_require__.d(__webpack_exports__,"n",function(){return RED_50}),__webpack_require__.d(__webpack_exports__,"o",function(){return RED_70}),__webpack_require__.d(__webpack_exports__,"b",function(){return BLUE_10}),__webpack_require__.d(__webpack_exports__,"c",function(){return BLUE_30}),__webpack_require__.d(__webpack_exports__,"d",function(){return BLUE_50}),__webpack_require__.d(__webpack_exports__,"e",function(){return BLUE_70}),__webpack_require__.d(__webpack_exports__,"f",function(){return BLUE_90});var WHITE="#FFFFFF",BLACK="#333333",GRAY_50="#D8D8D8",GRAY_70="#B4B4B4",GREEN_30="#7EAA93",GREEN_50="#009C49",GREEN_70="#006E2A",RED_10="#FFD2D4",RED_30="#FF7F84",RED_50="#FF5555",RED_70="#BC3C3C",BLUE_10="#D0E8FC",BLUE_30="#76BDF5",BLUE_50="#0085FF",BLUE_70="#0061BB",BLUE_90="#00316E"},461:function(module,exports,__webpack_require__){__webpack_require__(462),__webpack_require__(572),module.exports=__webpack_require__(573)},484:function(module,exports){},49:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return FlatButtonComponent});__webpack_require__(8),__webpack_require__(29),__webpack_require__(9),__webpack_require__(10);var react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(14),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(200),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__),_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(199),_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__),_styles_colours__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(4);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var _ref2=react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8___default.a,{color:"inherit",size:14});function FlatButton(_ref){var classes=_ref.classes,color=_ref.color,disabled=_ref.disabled,isLoading=_ref.isLoading,iconClass=_ref.iconClass,onClick=_ref.onClick,children=_ref.children,rest=_objectWithoutProperties(_ref,["classes","color","disabled","isLoading","iconClass","onClick","children"]),colorClass="";switch(color){case"primary":colorClass=classes.primary;break;case"secondary":colorClass=classes.secondary;break;case"danger":colorClass=classes.danger;break;default:colorClass=classes.primary}return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a,_extends({classes:{root:classes.root,text:colorClass,label:isLoading?classes.loadingButtonLabel:null},variant:"text",disabled:disabled||isLoading,onClick:onClick},rest),iconClass&&react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i",{className:iconClass+" "+classes.icon}),isLoading&&react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:classes.loadingIconContainer},_ref2),children)}FlatButton.displayName="FlatButton",FlatButton.defaultProps={color:"primary",disabled:!1,isLoading:!1,iconClass:""},FlatButton.propTypes={classes:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,color:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(["primary","secondary","danger"]),disabled:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,isLoading:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,iconClass:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,children:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node};var FlatButtonComponent=FlatButton;__webpack_exports__.b=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.withStyles)(function(){return{root:{minHeight:"36px",minWidth:"80px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"6px",fontSize:"14px",fontWeight:"bold",textTransform:"none","&:disabled":{cursor:"not-allowed",pointerEvents:"auto",color:_styles_colours__WEBPACK_IMPORTED_MODULE_9__.g},"&:disabled&:hover":{color:_styles_colours__WEBPACK_IMPORTED_MODULE_9__.g}},primary:{color:_styles_colours__WEBPACK_IMPORTED_MODULE_9__.d,"&:hover":{backgroundColor:_styles_colours__WEBPACK_IMPORTED_MODULE_9__.b}},secondary:{color:_styles_colours__WEBPACK_IMPORTED_MODULE_9__.a,"&:hover":{backgroundColor:_styles_colours__WEBPACK_IMPORTED_MODULE_9__.g}},danger:{color:_styles_colours__WEBPACK_IMPORTED_MODULE_9__.n,"&:hover":{backgroundColor:_styles_colours__WEBPACK_IMPORTED_MODULE_9__.l}},icon:{marginRight:"8px"},loadingButtonLabel:{visibility:"hidden"},loadingIconContainer:{position:"absolute",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"calc(100% - 12px)",visibility:"visible",color:_styles_colours__WEBPACK_IMPORTED_MODULE_9__.a}}})(FlatButton),FlatButton.__docgenInfo={description:"",methods:[],displayName:"FlatButton",props:{color:{defaultValue:{value:'"primary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"danger"',computed:!1}]},required:!1,description:"Sets the background and text colours."},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Disables button including all pointer events."},isLoading:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Disables button and overlays a circular progress spinner."},iconClass:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:'Prepends the icon to the start of the button contents.\nExpects font-awesome class values such as "`fa fa-plus`".'},classes:{type:{name:"object"},required:!0,description:"@ignore"},onClick:{type:{name:"func"},required:!0,description:"FlatButton onClick handler"},children:{type:{name:"node"},required:!1,description:"The content of the button."}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Buttons/FlatButton.js"]={name:"FlatButton",docgenInfo:FlatButton.__docgenInfo,path:"src/components/Buttons/FlatButton.js"})},573:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(26),__webpack_require__(17),__webpack_require__(16),__webpack_require__(27),__webpack_require__(23);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(85),req=__webpack_require__(773);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(158)(module))},773:function(module,exports,__webpack_require__){var map={"./components/Buttons/Button.stories.js":774,"./components/Buttons/FlatButton.stories.js":1061,"./components/Switches/Switch.stories.js":1072};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=773},774:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"actions",function(){return actions});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(85),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(108),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(109),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(14),_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(13),actions={onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onClick")},addinTheme=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.createMuiTheme)({venaTheme:"addin"}),webTheme=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.createMuiTheme)({venaTheme:"web"}),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Standard Button (Web)"),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Standard Button (Addin)"),_ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Disabled State (Web)"),_ref4=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Disabled State (Addin)"),_ref5=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Loading State (Web)"),_ref6=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Loading State (Addin)");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Button",module).add("Default",Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__.withInfo)({source:!1,propTables:[_Button__WEBPACK_IMPORTED_MODULE_5__.a],propTablesExclude:[_Button__WEBPACK_IMPORTED_MODULE_5__.b]})(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.MuiThemeProvider,{theme:webTheme},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,_ref,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"primary",style:{marginRight:"10px"},onClick:actions.onClick},"Primary"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"secondary",style:{marginRight:"10px"},onClick:actions.onClick},"Secondary"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"confirmation",style:{marginRight:"10px"},onClick:actions.onClick},"Confirmation"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"danger",style:{marginRight:"10px"},onClick:actions.onClick},"Danger"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.MuiThemeProvider,{theme:addinTheme},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,_ref2,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"primary",style:{marginRight:"10px"},onClick:actions.onClick},"Primary"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"secondary",style:{marginRight:"10px"},onClick:actions.onClick},"Secondary"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"confirmation",style:{marginRight:"10px"},onClick:actions.onClick},"Confirmation"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"danger",style:{marginRight:"10px"},onClick:actions.onClick},"Danger"))))})).add("Disabled State",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.MuiThemeProvider,{theme:webTheme},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,_ref3,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"primary",disabled:!0,style:{marginRight:"10px"},onClick:actions.onClick},"Primary"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"secondary",disabled:!0,style:{marginRight:"10px"},onClick:actions.onClick},"Secondary"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"confirmation",disabled:!0,style:{marginRight:"10px"},onClick:actions.onClick},"Confirmation"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"danger",disabled:!0,style:{marginRight:"10px"},onClick:actions.onClick},"Danger"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.MuiThemeProvider,{theme:addinTheme},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,_ref4,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"primary",disabled:!0,style:{marginRight:"10px"},onClick:actions.onClick},"Primary"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"secondary",disabled:!0,style:{marginRight:"10px"},onClick:actions.onClick},"Secondary"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"confirmation",disabled:!0,style:{marginRight:"10px"},onClick:actions.onClick},"Confirmation"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"danger",disabled:!0,style:{marginRight:"10px"},onClick:actions.onClick},"Danger"))))}).add("Loading State",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.MuiThemeProvider,{theme:webTheme},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,_ref5,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"primary",isLoading:!0,iconClass:"fa fa-plus",style:{marginRight:"10px"},onClick:actions.onClick},"Create"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"secondary",isLoading:!0,iconClass:"fa fa-cloud-upload",style:{marginRight:"10px"},onClick:actions.onClick},"Secondary"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"confirmation",isLoading:!0,iconClass:"fa fa-plus",style:{marginRight:"10px"},onClick:actions.onClick},"Attach"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"danger",isLoading:!0,iconClass:"fa fa-trash",style:{marginRight:"10px"},onClick:actions.onClick},"Delete"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.MuiThemeProvider,{theme:addinTheme},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,_ref6,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"primary",isLoading:!0,iconClass:"fa fa-plus",style:{marginRight:"10px"},onClick:actions.onClick},"Create"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"secondary",isLoading:!0,iconClass:"fa fa-cloud-upload",style:{marginRight:"10px"},onClick:actions.onClick},"Secondary"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"confirmation",isLoading:!0,iconClass:"fa fa-plus",style:{marginRight:"10px"},onClick:actions.onClick},"Attach"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.b,{color:"danger",isLoading:!0,iconClass:"fa fa-trash",style:{marginRight:"10px"},onClick:actions.onClick},"Delete"))))})}.call(this,__webpack_require__(158)(module))},789:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":383,"./nestedObjectAssign.js":383};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=789}},[[461,1,2]]]);
//# sourceMappingURL=main.ca62685954295c01da09.bundle.js.map