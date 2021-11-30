/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as s from"../../_snowpack/pkg/react.js";import{useState as c,useEffect as p,useMemo as l}from"../../_snowpack/pkg/react.js";import k from"../../_snowpack/pkg/csz.js";import{Link as f}from"../../_snowpack/pkg/react-router-dom.js";import{Table as u}from"../../_snowpack/pkg/antd.js";import{getDate as y,getAssetPath as I,shorten as n}from"../utils/index.js";import{fetchTransactionsBySenderPublicKey as T}from"../services/index.js";import{KIND as g}from"../types.js";const h=[{title:"Data",dataIndex:"timestamp",key:"timestamp",render:e=>y(e)},{title:"Tipo",dataIndex:"type",key:"type",sorter:(e,a)=>e.type.length-a.type.length},{title:"Nome",dataIndex:"name",key:"name",sorter:(e,a)=>e.name.length-a.name.length},{title:"ID",dataIndex:"id",key:"id",render:e=>s.createElement(f,{to:I(e)},n(e))},{title:"ID Transazione",dataIndex:"transactionId",key:"transactionId",render:e=>n(e)}];export default function j({publicKey:e}){const[a,r]=c([]);async function o(){const m=(await T(e)).filter(d=>d.asset.kind===g.OTHERS);r(m)}p(()=>{o()},[e]);const i=l(()=>a.map(t=>({transactionId:t.id,id:t.asset.id,timestamp:t.asset.timestamp,type:t.assetID===0?"Created":"Transfered",name:t.asset.name,kind:t.asset.kind})),[a]);return s.createElement("div",{className:x},s.createElement(u,{dataSource:i,rowKey:t=>t.transactionId,columns:h,size:"small",bordered:!0}))}const x=k`
    max-width: 100%;
`;
