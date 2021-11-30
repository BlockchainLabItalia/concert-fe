/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import{useState as o}from"../../_snowpack/pkg/react.js";import{getDataFromStorage as m,removeDataFromStorage as r,setDataToStorage as p}from"../utils/index.js";const e="templates";export default function l(){const[a,t]=o(m(e));return{templates:a,setNewTemplates:s=>{p(e,s),t(s)},removeTemplates:()=>{r(e),t(null)}}}
