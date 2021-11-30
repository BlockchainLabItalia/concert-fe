/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as t from"../../_snowpack/pkg/react.js";import{useState as r,useEffect as a}from"../../_snowpack/pkg/react.js";import{Result as c}from"../../_snowpack/pkg/antd.js";import{Redirect as i}from"../../_snowpack/pkg/react-router.js";export default function n(){const[s,o]=r(!1),e=3;return a(()=>{setTimeout(()=>{o(!0)},e*1e3)},[]),s?t.createElement(i,{to:"/"}):t.createElement(c,{status:"404",title:"404",subTitle:"Ci dispiace ma la pagina che stai cercando non esiste.",extra:`Reindirizzamento in ${e} secondi...`})}
