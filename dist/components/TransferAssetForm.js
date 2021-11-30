/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as e from"../../_snowpack/pkg/react.js";import{useState as n,useEffect as x}from"../../_snowpack/pkg/react.js";import a from"../../_snowpack/pkg/csz.js";import{Form as r,Button as y,Select as o,Typography as g,Divider as k}from"../../_snowpack/pkg/antd.js";import v from"./SpinnerEn.js";import{KIND as w}from"../types.js";import{fetchAssetByOwner as A}from"../services/index.js";import j from"../hooks/useWallet.js";export default function z({submitHandler:p}){const{wallet:l}=j(),[m,i]=n(!1),[c,u]=n([]),[d]=r.useForm();async function f(){i(!0);const h=(await A(l.address)||[]).filter(s=>s.kind===w.OTHERS).map(s=>({name:s.name,id:s.id}));u(h),i(!1)}x(()=>{f()},[l]);function E(t){p(t)}return m?e.createElement(v,null):e.createElement("div",{className:S},e.createElement(g.Title,{level:3},"Come funziona in questo POC:"),e.createElement("ol",null,e.createElement("li",null,"Selezionare l'asset digitale che si vuole trasferire e premre il pulsante."),e.createElement("li",null,"Un popup si aprir\xE0 chiedendo di inserire la passphrase del nuovo proprietario."),e.createElement("li",null,"Inserire la passphrase e premere OK"),e.createElement("li",null,"A questo punto la propriet\xE0 dell'asset passer\xE0 al nuovo proprietario e questo asset non sar\xE0 pi\xF9 presente nella lista dei propri asset.")),e.createElement("h4",null,"Nota: Il prossimo step \xE8 quello di integrare un sistema di richiesta/approvazione per il trasferimento delle propriet\xE0 degli asset digitali."),e.createElement(k,null),e.createElement(r,{layout:"vertical",form:d,onFinish:E},e.createElement(r.Item,{label:"Asset",name:"id",rules:[{required:!0}]},e.createElement(o,{placeholder:"Selezionare l'asset digitale da trasferire"},c.map(t=>e.createElement(o.Option,{value:t.id,key:t.id},t.name)))),e.createElement(r.Item,{style:{width:"100%"}},e.createElement(y,{className:N,type:"primary",htmlType:"submit"},"Transferisci la propriet\xE0 dell'Asset Digitale")),e.createElement("div",{className:T},e.createElement("h4",null,"Trasferire la propriet\xE0 di un asset digitale costa 25 tokens"))))}const N=a`
    &.ant-btn-primary {
        width: 100%;
    }
`,S=a`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`,T=a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`;
