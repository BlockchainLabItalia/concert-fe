/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as e from"../../_snowpack/pkg/react.js";import{useState as f,useEffect as p}from"../../_snowpack/pkg/react.js";import t from"../../_snowpack/pkg/csz.js";import{Divider as u,Card as E,Empty as N}from"../../_snowpack/pkg/antd.js";import{fetchAllTransactions as h}from"../services/index.js";import{KIND as g}from"../types.js";export default function j(){const[n,o]=f(null);async function m(){const d=(await h()).filter(s=>s.asset.kind===g.OTHERS);let r=0,i=0;const c=[];d.forEach(s=>{s.moduleID===1e3&&(c.includes(s.senderPublicKey)||c.push(s.senderPublicKey),s.assetID===0&&(r+=1),s.assetID===1&&(i+=1))}),o({registrations:r,transfers:i,users:c.length})}return p(()=>{m()},[]),e.createElement("div",{className:b},e.createElement("h3",{className:v}),e.createElement(E,{className:C},n?e.createElement("div",null,e.createElement("div",{className:y},e.createElement("h2",{className:x},"Statistiche")),e.createElement(u,null),e.createElement("div",{className:k},e.createElement("div",{className:l},e.createElement("h3",{className:a},"Utenti"),e.createElement("h2",{className:a},n.users)),e.createElement("div",{className:l},e.createElement("h3",{className:a},"Asset Digitali"),e.createElement("h2",{className:a},n.registrations)),e.createElement("div",{className:l},e.createElement("h3",{className:a},"Cambio Propriet\xE0"),e.createElement("h2",{className:a},n.transfers)))):e.createElement(N,{description:"Le Statistiche non possono essere recuperate."})))}const C=t`
    min-width: 600px;
`,y=t`
    display: flex;
    flex-direction: row;
    justify-content: center;
`,x=t`
    color: #0047bb;
`,b=t`
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`,k=t`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`,v=t`
    color: #0047bb;
`,l=t`
    display: flex;
    flex-direction: column;
    align-items: center;
`,H=t`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
`,a=t`
    color: #0047bb;
`;
