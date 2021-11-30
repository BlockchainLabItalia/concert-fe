/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as e from"../../_snowpack/pkg/react.js";import s from"../../_snowpack/pkg/csz.js";import{useState as r,useEffect as i}from"../../_snowpack/pkg/react.js";import{KIND as m}from"../types.js";import{getAllAssetsByKind as c}from"../services/index.js";import l from"../components/SpinnerEn.js";import p from"../components/AssetList.js";export default function E(){const[t,n]=r(null);async function o(){const a=await c(m.OTHERS);n(a.reverse())}return i(()=>{o()},[]),e.createElement("div",{className:f},e.createElement("h2",{className:d},"Storico Asset Digitali Depositati"),t?e.createElement("div",{className:u},e.createElement(p,{assets:t})):e.createElement(l,null))}const f=s`
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 600px;
`,u=s`
    margin-bottom: 1.5em;
`,d=s`
    color: #0047bb;
`;
