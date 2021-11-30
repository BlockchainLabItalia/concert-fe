/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as s from"../../_snowpack/pkg/react.js";import{useState as a,useEffect as l}from"../../_snowpack/pkg/react.js";import r from"../../_snowpack/pkg/csz.js";import{useParams as f}from"../../_snowpack/pkg/react-router-dom.js";import{fetchAssetById as u,fetchHistoryOfAsset as d}from"../services/index.js";import y from"../components/AssetCard.js";import A from"../components/AssetHistory.js";export default function j(){const[c,n]=a(null),[o,i]=a(null),{id:t}=f();async function m(){const e=await u(t);n(e)}async function p(){const e=await d(t);i(e)}return l(()=>{m(),p()},[t]),s.createElement("div",{className:g},s.createElement("h2",{className:k},"Certificato Asset Digitale"),s.createElement(y,{asset:c}),o&&s.createElement(A,{history:o}))}const k=r`
    color: #0047bb;
`,g=r`
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 650px;
`;
