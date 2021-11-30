/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as u from"../../_snowpack/env.js";import*as e from"../../_snowpack/pkg/react.js";import{useState as p}from"../../_snowpack/pkg/react.js";import o from"../../_snowpack/pkg/csz.js";import{Card as n,Row as k,Col as d,message as a,Alert as C}from"../../_snowpack/pkg/antd.js";import{purchaseTokensTransaction as E}from"../services/index.js";const r=[{tokens:100,fiat:1},{tokens:200,fiat:2},{tokens:500,fiat:3}];export default function h({wallet:c}){const[i,s]=p(!1);if(!u.SNOWPACK_PUBLIC_PAYPAL_CLIENT_ID)throw new Error("No Paypal client ID found.");function l(t,m){confirm(`Sei sicuro di voler acquistare ${t} crediti a ${m}\u20AC ?`)&&E(c.address,t).then(()=>{a.success("L'acquisto si \xE8 concluso con successo."),s(!0)}).catch(f=>{console.error(`It was not possible to buy the tokens.${f}`),a.error("Non \xE8 stato possibile concludere l'acquisto."),s(!1)})}return e.createElement("div",{className:_},e.createElement(n,{title:"Compra Crediti"},e.createElement(k,{gutter:32},r.map(t=>e.createElement(d,{span:24/r.length},e.createElement(n,{key:t.tokens,style:{textAlign:"center",backgroundColor:"hsl(217, 100%, 99%)"},hoverable:!0,onClick:()=>l(t.tokens,t.fiat)},e.createElement("div",null,e.createElement("h4",null,t.tokens," credits"),e.createElement("h5",null,t.fiat," \u20AC")))))),i&&e.createElement("div",{className:g},e.createElement(C,{type:"info",message:"Potrebbero essere necessari circa 20 secondi affinch\xE8 la transazione sia registrata."}))))}const g=o`
    margin-top: 15px;
`,_=o`
    margin: 15px 0;
`;
