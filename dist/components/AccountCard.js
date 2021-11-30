/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as e from"../../_snowpack/pkg/react.js";import t from"../../_snowpack/pkg/csz.js";import{Card as r,Empty as c}from"../../_snowpack/pkg/antd.js";import m from"../../_snowpack/pkg/lodash.js";import{transactions as f}from"../../_snowpack/pkg/@liskhq/lisk-client.js";import{Link as d}from"../../_snowpack/pkg/react-router-dom.js";import{v4 as p}from"../../_snowpack/pkg/uuid.js";import{getAssetPath as u}from"../utils/index.js";export default function w({account:s,base32:E}){if(!s)return e.createElement(c,null);function j(a){return m.isEmpty(a)?"None":e.createElement("div",{className:k},a.map((n,l)=>e.createElement("div",{key:p()},e.createElement(d,{key:n,to:u(n)},"n.",l+1," -- ID: ",n))))}return e.createElement("div",{className:y},e.createElement(r,{title:"Informazioni"},e.createElement("div",{className:x},e.createElement("div",{className:N},e.createElement("div",{className:i},"Crediti:"),e.createElement("div",{className:o},f.convertBeddowsToLSK(BigInt(s.token.balance).toString())," credits")),e.createElement("div",{className:g},e.createElement("div",{className:i},"Numero di transazioni:"),e.createElement("div",{className:o},BigInt(s.sequence.nonce).toString())))))}const x=t`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`,z=t`
    display: flex;
    flex-direction: row;
    justify-content: center;
`,k=t`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`,L=t`
    display: flex;
    flex-direction: column;
    width: 100%;
`,N=t`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 10px
`,g=t`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: 10px
`,i=t`
    color: #0047bb;
`,o=t`
    margin-left: 5px;
`,y=t`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 15px 0;
`;
