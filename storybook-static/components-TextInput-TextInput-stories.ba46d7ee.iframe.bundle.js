/*! For license information please see components-TextInput-TextInput-stories.ba46d7ee.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[639],{"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/react/cjs/react-jsx-runtime.production.js":(__unused_webpack_module,exports)=>{var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element"),REACT_FRAGMENT_TYPE=Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;if(void 0!==maybeKey&&(key=""+maybeKey),void 0!==config.key&&(key=""+config.key),"key"in config)for(var propName in maybeKey={},config)"key"!==propName&&(maybeKey[propName]=config[propName]);else maybeKey=config;return config=maybeKey.ref,{$$typeof:REACT_ELEMENT_TYPE,type,key,ref:void 0!==config?config:null,props:maybeKey}}exports.Fragment=REACT_FRAGMENT_TYPE,exports.jsx=jsxProd,exports.jsxs=jsxProd},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.js")},"./src/components/TextInput/TextInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,ErrorState:()=>ErrorState,default:()=>TextInput_stories});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextInput=_ref=>{let{label,placeholder,value,onChange,disabled=!1,error=!1,helperText,className}=_ref;return(0,jsx_runtime.jsxs)("div",{className:"flex flex-col space-y-1",children:[label&&(0,jsx_runtime.jsx)("label",{className:"text-sm font-medium",children:label}),(0,jsx_runtime.jsx)("input",{type:"text",placeholder,value,onChange,disabled,className:(0,clsx.A)("px-3 py-2 border rounded-md focus:outline-none transition-all",disabled?"bg-gray-100 cursor-not-allowed":error?"border-red-500 focus:ring-1 focus:ring-red-500":"border-gray-300 focus:ring-1 focus:ring-blue-500",className)}),helperText&&(0,jsx_runtime.jsx)("p",{className:(0,clsx.A)("text-xs",error?"text-red-500":"text-gray-500"),children:helperText})]})};TextInput.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const TextInput_stories={title:"Components/TextInput",component:TextInput,tags:["autodocs"]},Default={render:()=>{const[value,setValue]=(0,react.useState)("");return(0,jsx_runtime.jsx)(TextInput,{label:"Name",placeholder:"Enter your name",value,onChange:e=>setValue(e.target.value)})}},ErrorState={render:()=>{const[value,setValue]=(0,react.useState)("");return(0,jsx_runtime.jsx)(TextInput,{label:"Email",placeholder:"Enter your email",value,onChange:e=>setValue(e.target.value),error:!0,helperText:"Invalid email address"})}},Disabled={args:{label:"Username",placeholder:"Disabled input",value:"vishwamohini",onChange:()=>{},disabled:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [value, setValue] = useState(\'\');\n    return <TextInput label="Name" placeholder="Enter your name" value={value} onChange={e => setValue(e.target.value)} />;\n  }\n}',...Default.parameters?.docs?.source}}},ErrorState.parameters={...ErrorState.parameters,docs:{...ErrorState.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [value, setValue] = useState(\'\');\n    return <TextInput label="Email" placeholder="Enter your email" value={value} onChange={e => setValue(e.target.value)} error helperText="Invalid email address" />;\n  }\n}',...ErrorState.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Username',\n    placeholder: 'Disabled input',\n    value: 'vishwamohini',\n    onChange: () => {},\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}}}}]);