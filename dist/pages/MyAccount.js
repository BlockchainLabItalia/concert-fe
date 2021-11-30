/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as e from"../../_snowpack/pkg/react.js";import o from"../../_snowpack/pkg/csz.js";import{Card as c,Empty as s}from"../../_snowpack/pkg/antd.js";import l from"../components/CreateWallet.js";import m from"../hooks/useWallet.js";import i from"../hooks/useAccount.js";import p from"../components/AccountCard.js";import d from"../components/ProfileCard.js";import u from"../components/AddTokensCard.js";import f from"../components/AccountTransactionTable.js";export default function A(){const{wallet:t,setNewWallet:n,removeWallet:r}=m(),a=i(t?.address);return e.createElement("div",{className:C},e.createElement("h3",{className:E},"Dashboard"),e.createElement(d,null),e.createElement("div",{className:k},t&&!a&&e.createElement("div",{className:j},e.createElement(c,{title:"Descrizione"},e.createElement(s,{description:"Utente non trovato nella Blockchain. Per favore aggiungere fondi."}))),a&&e.createElement(p,{account:a,base32:t?.address}),e.createElement(l,{wallet:t,setNewWallet:n,removeWallet:r}),t&&e.createElement(u,{wallet:t}),t&&e.createElement(f,{publicKey:t.publicKey})))}const C=o`
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 600px;
`,E=o`
    color: #0047bb;
`,k=o`
    max-width: 650px;   
`,j=o`
    margin: 10px 0;
`;
