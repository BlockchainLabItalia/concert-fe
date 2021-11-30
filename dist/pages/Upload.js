/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as N from"../../_snowpack/env.js";import*as e from"../../_snowpack/pkg/react.js";import r from"../../_snowpack/pkg/csz.js";import{useState as w}from"../../_snowpack/pkg/react.js";import{message as n}from"../../_snowpack/pkg/antd.js";import{v4 as h}from"../../_snowpack/pkg/uuid.js";import{KIND as _}from"../types.js";import{encryptFile as g}from"../utils/index.js";import{createIpfsAssetTransaction as k,uploadToIpfs as j}from"../services/index.js";import E from"../components/FormResult.js";import S from"../components/CreateAssetForm.js";import A from"../hooks/useWallet.js";import C from"../components/NoWallet.js";export default function I(){const{wallet:s}=A(),[i,l]=w(!1);async function c(t){if(!s){n.error("Nessun dato presente nel Wallet.");return}let o=s.passphrase;if(!t.private&&(o=N.SNOWPACK_PUBLIC_APP_GENESIS_PASSPHRASE,!o))throw new Error("Nessuna passphrase specificata.");const{file:m,hash:p}=await g(t.file,o);try{const a=await j(m),f=BigInt(Date.now()),d=_.OTHERS,u={...t,id:h(),cid:a,checksum:p,timestamp:f,kind:d,private:!!t.private,customFields:Buffer.from(JSON.stringify(t.customFields))};await k(u,o),l(!0)}catch(a){n.error("Non \xE8 stato possibile caricare l'asset digitale."),console.error(`It was not possible to Upload the asset.${a.message}`)}}return e.createElement("div",{className:v},e.createElement("h3",{className:F},"Carica Asset Digitale"),e.createElement("div",{className:x},!s&&e.createElement(C,null),s&&i&&e.createElement(E,{title:"Asset Digitale validato!"}),s&&!i&&e.createElement(S,{submitHandler:c})))}const v=r`
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 600px;
`,F=r`
    color: #0047bb;
`,x=r`
    width: 600px;
`;
