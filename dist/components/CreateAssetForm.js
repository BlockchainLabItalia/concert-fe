/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as e from"../../_snowpack/pkg/react.js";import{useState as g}from"../../_snowpack/pkg/react.js";import l from"../../_snowpack/pkg/csz.js";import{Form as o,Input as f,Card as N,Checkbox as q,Button as d,Select as h,Upload as _,message as c,Tooltip as P}from"../../_snowpack/pkg/antd.js";import{InboxOutlined as R,DeleteOutlined as V}from"../../_snowpack/pkg/@ant-design/icons.js";import D from"../hooks/useTemplates.js";export default function Y({submitHandler:F}){const{templates:r,setNewTemplates:v}=D(),[x]=o.useForm(),[p,u]=g(void 0),[i,s]=g([]),[E,w]=g(!0);function z(){const t=[...i];t.push({fieldName:"",value:""}),s(t)}function C(t,a,n){const m=[...i];m[n][t]=a,s(m)}function T(t){const a=i.filter((n,m)=>m!==t);s(a)}function j(){const t=prompt("Inserire il nome del template personalizzato",p);if(!t){c.error("Nessun titolo fornito.");return}const a=i.map(({fieldName:n})=>({fieldName:n,value:""}));u(t),v({...r,[t]:a}),c.success("Template saved to local storage.")}function k(){if(!p){c.error("Nessun template da rimuovere.");return}if(confirm("Sei sicuro di voler rimuovere il template?")){const a={...r};delete a[p],v(a),u(void 0),s([]),c.success("Template eliminato dall'archivio locale.")}}function I(){let t=!0;return Object.values(i).forEach(a=>{(!a.value||!a.fieldName)&&(t=!1)}),t}function S(t){if(!I()){c.error("Uno o pi\xF9 campi personallizati sono vuoti.");return}const a=t.file.file.originFileObj;t.private=E,F({...t,file:a,customFields:i})}function O(t){const a=t.file.originFileObj,n=5e6;a.size>n?(c.error(`Il file eccede le dimensioni massime acconsentite: ${n/1e6} MB`),console.error("Uploaded file too large.")):x.setFieldsValue({name:a.name,type:a.type})}function A(t){const a=t.target.checked;w(a)}function B(t){if(!t){s([]),u(void 0);return}if(!r){s([]);return}const a=r[t];u(t),s(a)}return e.createElement(N,null,e.createElement(o,{layout:"vertical",form:x,onFinish:S},e.createElement(o.Item,{label:"Caricamento File [max 5MB]",name:"file",rules:[{required:!0}]},e.createElement(_.Dragger,{multiple:!1,maxCount:1,customRequest:()=>{},onChange:O,iconRender:()=>null,className:Q},e.createElement("p",{className:X},e.createElement(R,null)),e.createElement("p",{className:W},"Clicca or sposta un asset digitale su questa area."))),e.createElement(o.Item,{label:"Titolo Asset Digitale",name:"name",rules:[{required:!0}]},e.createElement(f,{className:K,placeholder:"Inserisci un titolo"})),e.createElement("div",{hidden:!0},e.createElement(o.Item,{label:"Type",name:"type",rules:[{required:!0}]},e.createElement(f,{placeholder:"Selezionare un file",disabled:!0})),e.createElement(o.Item,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",width:"100%",alignItems:"baseline"},label:"Privato (solo il proprietario pu\xF2 scaricare l'asset digi)",name:"private",rules:[{required:!1}]},e.createElement(q,{style:{marginLeft:"10px"},checked:E,onChange:t=>A(t)}))),e.createElement("div",{className:$},e.createElement(N,{style:{border:"1px dashed #f0f0f0"}},e.createElement(o.Item,{label:"Campi Personalizzati"},e.createElement("div",{className:J},e.createElement(h,{placeholder:"Selezionare un template personale (opzionale)",onChange:B,value:p},e.createElement(h.Option,{value:""},"None"),r&&Object.keys(r).map(t=>e.createElement(h.Option,{value:t},t)))),i.map((t,a)=>e.createElement("div",{className:G},e.createElement("div",{className:b},e.createElement(f,{placeholder:"Nome del campo personalizzato",value:t.fieldName,onChange:n=>C("fieldName",n.target.value,a)})),e.createElement("div",{className:b},e.createElement(f,{placeholder:"Valore del campo personalizzato",value:t.value,onChange:n=>C("value",n.target.value,a)})),e.createElement("div",null,e.createElement(P,{title:"Elimina campo"},e.createElement(d,{type:"primary",shape:"circle",icon:e.createElement(V,null),onClick:()=>T(a)}))))),e.createElement("div",{className:H},e.createElement(d,{className:y,onClick:z},"Aggiungi Campo"),e.createElement(d,{className:y,onClick:j},"Salva Template"),e.createElement(d,{onClick:k},"Elimina Template"))))),e.createElement("div",{className:U},e.createElement(o.Item,{style:{width:"100%"}},e.createElement(d,{className:M,type:"primary",htmlType:"submit"},"Valida Asset Digitale"))),e.createElement("div",{className:L},e.createElement("h4",null,"Il caricamento di un asset digitale necessita di 100 tokens."))))}const ne=l`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
`,U=l`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    margin-top: 25px;
`,M=l`
    &.ant-btn-primary {
        width: 100%;
    }
`,L=l`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`,$=l`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;

`,b=l`
    width: 100%;
    margin-right: 8px;
`,y=l`
    margin-right: 10px;
`,G=l`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 5px;
`,H=l`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    margin-top: 15px;
`,J=l`
    margin-bottom: 15px;
`,K=l`
    &.ant-input:hover {
        border-color: #eedc00;
        border-right-width: 1px !important;
    }
`,Q=l`
    &.ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover {
        border-color: #eedc00;
    }
`,W=l`
    &.ant-upload.ant-upload-drag, p.ant-upload-text {
    margin: 0 0 4px;
    color: hsl(217, 100%, 45%);
    font-size: 12px;
}

    font-size: 12px;
    color: #eedc00;
`,X=l`
    &.ant-upload.ant-upload-drag, p.ant-upload-drag-icon, .anticon {
        color: #eedc00;
        font-size: 36px;
    }
`;
