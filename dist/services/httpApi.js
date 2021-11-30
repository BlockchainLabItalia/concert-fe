/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as a from"../../_snowpack/env.js";import c from"../../_snowpack/pkg/file-saver.js";import{getHttpClient as r,decryptFile as f,generateHashFromFile as m}from"../utils/index.js";const s=`${a.SNOWPACK_PUBLIC_IPFS_API}/api`,A=`${a.SNOWPACK_PUBLIC_HTTP_API}/api`;export async function uploadToIpfs(e){const t=r();let n=new FormData;return n.append("asset",e),(await t.post(`${s}/ipfs`,n,{headers:{"Content-Type":"multipart/form-data"}})).data.path}export async function downloadIpfsAsset(e,t,n=!0){const p=(await r().get(`${s}/ipfs/${e.cid}`)).data;if(!e.private&&(t=a.SNOWPACK_PUBLIC_APP_GENESIS_PASSPHRASE,!t))throw new Error("No passphrase specified.");const o=f(p,t,e.type);if(await m(o)!==e.checksum)throw new Error("Checksum mismatch (downloader is probably not owner of the asset)");return n&&c.saveAs(o,e.name),new File([o],e.name)}
