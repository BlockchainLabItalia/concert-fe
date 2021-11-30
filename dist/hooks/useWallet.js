/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import{useState as a}from"../../_snowpack/pkg/react.js";import{getDataFromStorage as r,removeDataFromStorage as m,setDataToStorage as n}from"../utils/index.js";const t="concert-wallet";export default function s(){const[l,o]=a(r(t));return{wallet:l,setNewWallet:e=>{n(t,e),o(e)},removeWallet:()=>{confirm("Confirm to remove the wallet?")&&(m(t),o(null))}}}
