/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as N from"../../_snowpack/env.js";import*as e from"../../_snowpack/pkg/react.js";import n from"../../_snowpack/pkg/csz.js";import{Card as x,Empty as y,Button as E,message as m,Alert as h}from"../../_snowpack/pkg/antd.js";import k from"../../_snowpack/pkg/qrcode.react.js";import _ from"../../_snowpack/pkg/lodash.js";import{useAuth0 as j}from"../../_snowpack/pkg/@auth0/auth0-react.js";import{v4 as o}from"../../_snowpack/pkg/uuid.js";import C from"./SpinnerEn.js";import{downloadIpfsAsset as A}from"../services/index.js";import S from"../hooks/useWallet.js";export default function O({asset:r}){const{wallet:c}=S(),{isAuthenticated:i}=j();if(_.isNull(r))return e.createElement(C,null);if(typeof r=="undefined")return e.createElement(y,null);const v=Object.entries(r).filter(t=>t[0]!=="kind"&&t[0]!=="private");function d(){if(!i){m.error("Utente non autenticato.");return}if(!c){m.error("Nessun wallet trovato.");return}let t=c.passphrase;if(r){if(!r.private&&(t=N.SNOWPACK_PUBLIC_APP_GENESIS_PASSPHRASE,!t))throw new Error("Nessuna passphrase specificata.");A(r,t).catch(a=>{m.error(`Download fallito: ${a.message}`)})}}const s=r.owner===c?.address,l=r.private;function f(t,a){return t=="cid"?e.createElement("div",{className:g},e.createElement("div",{key:o(),className:w},t,":"),e.createElement("div",{key:o()},e.createElement("a",{href:`https://explore.ipld.io/#/explore/${a}`,target:"_blank"},a))):e.createElement("div",{className:g},e.createElement("div",{key:o(),className:w},t,":"),e.createElement("div",{key:o()},a))}return e.createElement("div",{className:D},e.createElement("div",null,e.createElement(x,{title:"Description"},e.createElement("div",{className:z},e.createElement("div",{className:P},v.map(([t,a])=>t==="customFields"?JSON.parse(Buffer.from(a,"hex").toString()).map(u=>e.createElement("div",null,f(u.fieldName,u.value))):e.createElement("div",null,f(t,a)))),e.createElement("div",{className:b},s&&i&&e.createElement(e.Fragment,null,e.createElement(k,{size:100,value:window.location.href}),e.createElement("h5",null,"Poste Italiane")))))),e.createElement("div",null,!s&&l&&e.createElement("div",{className:p},e.createElement(h,{type:"warning",message:"Download disabilitato",description:"Non hai il permesso per poter scaricare questo digital asset.",style:{textAlign:"center"}})),!l&&e.createElement("div",{className:p},e.createElement(E,{type:"primary",size:"large",onClick:d,disabled:!i||l},i?"Public Download":"Effettuare il Login per poter scaricare il digital asset")),s&&l&&e.createElement("div",{className:p},e.createElement(E,{type:"primary",size:"large",onClick:d,disabled:!i||!s},i?"Download":"Effettuare il Login per poter scaricare il digital asset."))))}const D=n`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
`,p=n`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`,g=n`
    display: flex;
    flex-direction: row;
    align-items: center;
`,P=n`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
`,b=n`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    min-width: 70px;
`,z=n`
    display: flex;
    flex-direction: row;
    align-items: center;
`,w=n`
    color: #0047bb;
    margin-right: 10px;
`;
