/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as e from"../../_snowpack/pkg/react.js";import{Divider as r,Typography as c}from"../../_snowpack/pkg/antd.js";import{useParams as n}from"../../_snowpack/pkg/react-router-dom.js";import a from"../components/AccountCard.js";import s from"../hooks/useAccount.js";export default function m(){const{id:t}=n(),o=s(t);return e.createElement("div",null,e.createElement(c.Title,{level:1},"Visualizza Profilo Utente"),e.createElement(r,null),e.createElement(a,{account:o,base32:t}))}
