/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as e from"../../_snowpack/pkg/react.js";import s from"../../_snowpack/pkg/csz.js";import E from"../../_snowpack/pkg/lodash.js";import{Link as o}from"../../_snowpack/pkg/react-router-dom.js";import{Timeline as l,Typography as r,Card as d,Row as f}from"../../_snowpack/pkg/antd.js";import{getAccountPath as m,getAssetPath as w,getDate as p}from"../utils/index.js";export default function k({history:i}){const c=E.cloneDeep(i).reverse();function u(t,n){if(t.type==="transfer"){const a=c[n+1];return e.createElement(l.Item,{color:"blue"},e.createElement(r.Title,{level:5},p(t.timestamp)," -"," ",e.createElement("span",null,t.type)),e.createElement(r.Text,null,"Nuovo proprietario: ",e.createElement(o,{to:m(a.owner)},a.owner)," >"," ",e.createElement(o,{to:w(t.owner)},t.owner)),e.createElement("br",null),e.createElement(r.Text,{type:"secondary"},"Nuovo CID: ",a.cid," > ",t.cid))}return e.createElement(l.Item,{color:"green"},e.createElement(r.Title,{level:5},p(t.timestamp)," -"," ",e.createElement("span",null,t.type)),e.createElement(r.Text,null,"Digital Asset registrato da: ",e.createElement(o,{to:m(t.owner)},t.owner)),e.createElement("br",null),e.createElement(r.Text,{type:"secondary"},"CID: ",t.cid))}return e.createElement("div",{className:y},e.createElement(d,{title:"Storia"},e.createElement(f,{className:g},e.createElement(l,null,c.map((t,n)=>u(t,n))))))}const y=s`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px 0;
`,g=s`
    justyfy: center;
`;
