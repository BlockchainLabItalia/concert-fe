/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as t from"../../_snowpack/pkg/react.js";import{Button as r,Result as o}from"../../_snowpack/pkg/antd.js";import{useHistory as n}from"../../_snowpack/pkg/react-router-dom.js";export default function l(){const e=n();function a(){e.push("/my-account")}return t.createElement(o,{status:"warning",title:"Nessuna informazione del wallet \xE8 stata trovata.",subTitle:"Andare al profilo utente per creare un Wallet.",extra:t.createElement(r,{type:"primary",onClick:a},"Vai a Profilo Utente")})}
