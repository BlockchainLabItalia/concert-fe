/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import c from"../../_snowpack/pkg/crypto-js.js";function l(r){const o=r.hasOwnProperty("words")?r.words:[],s=r.hasOwnProperty("sigBytes")?r.sigBytes:o.length*4;let e=new Uint8Array(s),t=0,n,a;for(a=0;a<s;a++)n=o[a],e[t++]=n>>24,e[t++]=n>>16&255,e[t++]=n>>8&255,e[t++]=n&255;return e}export function encryptFile(r,o){return new Promise((s,e)=>{const t=new FileReader;t.onload=n=>{const a=n.target?.result;a||e("No file found");const i=c.lib.WordArray.create(a),y=c.AES.encrypt(i,o).toString(),d=new Blob([y],{type:"text/plain"}),p=new File([d],`${r.name}.txt`,{type:"text/plain"});s({file:p,hash:generateHashFromWordArray(i)})},t.readAsArrayBuffer(r)})}export function decryptFile(r,o,s){const e=c.AES.decrypt(r,o),t=l(e);return new Blob([t],{type:s})}export function generateHashFromWordArray(r){return c.MD5(r).toString()}export function generateHashFromFile(r){return new Promise((o,s)=>{const e=new FileReader;e.onload=()=>{const t=c.lib.WordArray.create(e.result),n=generateHashFromWordArray(t);o(n)},e.readAsArrayBuffer(r)})}
