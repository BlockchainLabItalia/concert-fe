/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as t from"../../_snowpack/pkg/react.js";import{Button as o,Result as a}from"../../_snowpack/pkg/antd.js";import{useHistory as c}from"../../_snowpack/pkg/react-router-dom.js";export default function i({title:e}){const r=c();function s(){r.push("/browse")}return t.createElement(a,{status:"success",title:e,subTitle:"Potrebbero passare 20 secondi prima che la richiesta sia processata.",extra:[t.createElement(o,{type:"primary",onClick:s},"Vai allo storico")]})}
