/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import{useState as r,useEffect as l}from"../../_snowpack/pkg/react.js";import{fetchAccount as a}from"../services/index.js";export default function s(t){const[u,c]=r(null);return l(()=>{const n=async()=>{try{const e=t?await a(t):null;c(e)}catch(e){c(null)}};n();const o=setInterval(()=>{n()},1e3);return()=>{clearInterval(o),c(null)}},[t]),u}
