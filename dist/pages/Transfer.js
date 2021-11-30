/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as t from"../../_snowpack/pkg/react.js";import{useState as h}from"../../_snowpack/pkg/react.js";import c from"../../_snowpack/pkg/csz.js";import{Card as A,message as r}from"../../_snowpack/pkg/antd.js";import j from"../hooks/useWallet.js";import{downloadIpfsAsset as x,fetchAccount as E,fetchAssetById as k,transferIpfsAssetTransaction as F,uploadToIpfs as N}from"../services/index.js";import I from"../components/NoWallet.js";import y from"../components/FormResult.js";import C from"../components/TransferAssetForm.js";import{createCredentials as T,encryptFile as b}from"../utils/index.js";export default function P(){const{wallet:e}=j(),[o,m]=h(!1);async function p(n){const i=await k(n.id);if(!i){r.error("Non \xE8 stato possibile recuperare l'asset digitale da sistema IPFS.");return}if(!e){r.error("Nessuna informazione del wallet presente.");return}const l=prompt("Per favore inserire la passphrase del nuovo proprietario.");if(!l){r.error("Non \xE8 stata fornita la passphrase.");return}const a=T(l);let f;try{f=await E(a.address)}catch(s){r.error("L'utente non esiste"),console.error(`Account doen't exist. ${s.message}`);return}try{const s=await x(i,e.passphrase,!1),{file:d}=await b(s,a.passphrase),u=await N(d),w=BigInt(Date.now()),g={...n,newCid:u,newOwner:a.address,timestamp:w};await F(g,e.passphrase),m(!0)}catch(s){r.error(`${s.message}`),console.error(`Internal Error. ${s.message}`)}}return t.createElement("div",{className:v},t.createElement("h3",{className:O},"Trasferimento di propriet\xE0 di un Digital Asset"),t.createElement(A,null,!e&&t.createElement(I,null),e&&o&&t.createElement(y,{title:"Asset digitale trasferito con successo."}),e&&!o&&t.createElement(C,{submitHandler:p})))}const v=c`
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 600px;
`,O=c`
    color: #0047bb;
`;
