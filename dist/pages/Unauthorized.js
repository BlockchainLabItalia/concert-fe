/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as t from"../../_snowpack/pkg/react.js";import{useState as s,useEffect as a}from"../../_snowpack/pkg/react.js";import{Redirect as c}from"../../_snowpack/pkg/react-router.js";import{Result as n}from"../../_snowpack/pkg/antd.js";export default function i(){const[r,o]=s(!1),e=3;return a(()=>{setTimeout(()=>{o(!0)},e*1e3)},[]),r?t.createElement(c,{to:"/"}):t.createElement(n,{status:"403",title:"403",subTitle:"Sorry you are not authorized to access this page.",extra:`Redirecting in ${e} seconds ...`})}
