/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as e from"../../_snowpack/pkg/react.js";import{useState as d}from"../../_snowpack/pkg/react.js";import a from"../../_snowpack/pkg/csz.js";import{Button as u,Card as v,message as r}from"../../_snowpack/pkg/antd.js";import{createCredentials as b}from"../utils/index.js";import{purchaseTokensTransaction as j}from"../services/index.js";function h(t,c=0){let i=0,o=[],l=null;if(c==0&&(l=prompt("Salvare la seguente passphrase in un posto sicuro:",t),l==null))return!1;o=t.split(" "),i=o.length;const p=Math.floor(Math.random()*(i+1)),n=prompt(`Inserire la parona nr. ${p.toString()} della passphrase`);return n==null?!1:n!=o[p-1]?(r.error("Le parole non coincidono."),!1):(c==0&&h(t,1),!0)}export default function P({wallet:t,setNewWallet:c,removeWallet:i}){const[o,l]=d(!1),[p,n]=d(!1),N=101;async function x(s){j(s,N).then(()=>{r.success("I Token gratuiti sono stati accreditati con successo.")}).catch(m=>{console.error(`It was not possible to get the Bonus tokens.${m}`),r.error("Non \xE8 stato possibile accreditare i Token gratuiti.")})}async function E(){try{const s=b();if(!h(s.passphrase))throw new Error;await x(s.address),r.success("Il Wallet \xE8 stato creato con successo."),c(s)}catch(s){r.error("Non \xE8 stato possibile creare il Wallet."),console.error(`It was not possible to create the wallet. ${s.message}`)}}async function w(){const s=prompt("Per favore inserire la Sua passphrase");if(!s){r.error("Nessuna passphrase specificata.");return}const m=b(s);r.success("Wallet creato con successo."),c(m)}function C(s){switch(s){case"passphrase":l(!o);break;case"privatekey":n(!p);break;default:l(!1),n(!1)}}return e.createElement(v,{title:"Wallet",className:z},e.createElement("div",null,t?e.createElement("div",{className:S},e.createElement("div",{className:g},e.createElement("div",{style:{fontSize:"18px"},className:y},"Address:"),e.createElement("div",{style:{fontSize:"18px"},className:k},t.address)),e.createElement("div",{className:g},e.createElement("div",{className:y},"Passphrase:"),e.createElement("div",{onClick:()=>C("passphrase"),className:o?k:W},t.passphrase)),e.createElement("div",{className:I},e.createElement(u,{className:f,type:"primary",size:"large",onClick:i},"Remove"),e.createElement(u,{className:f,type:"primary",size:"large",href:`data:text/json;charset=utf-8, ${encodeURIComponent(JSON.stringify(t))}`,download:"wallet.json"},"Download"))):e.createElement(e.Fragment,null,e.createElement(u,{className:f,type:"primary",size:"large",onClick:E},"Crea Wallet"),e.createElement(u,{className:f,type:"primary",size:"large",onClick:w},"Importa Wallet"))))}const W=a`
    -webkit-filter: blur(3px);
    -moz-filter: blur(3px);
    -o-filter: blur(3px);
    -ms-filter: blur(3px);
    filter: blur(3px);
    margin-left: 5px;
`,z=a`
  
`,I=a`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
`,S=a`
    display: flex;
    flex-direction: column;
    justify-content: baseline;
`,y=a`
    color: #0047bb;
    
`,k=a`
    margin-left: 12px;
`,g=a`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
`,f=a`
    &.ant-btn-primary {
        color: #0047bb;
        background: #eedc00;
        border-color: #0047bb;
    };
    
    &.ant-btn-primary:hover, .ant-btn-primary:focus {
        color: #eedc00;
        background: #0047bb;
        border-color: #0047bb;
    }
`;
