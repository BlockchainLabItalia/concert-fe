/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as i from"../../_snowpack/env.js";import n from"../../_snowpack/pkg/axios.js";import{apiClient as o}from"../../_snowpack/pkg/@liskhq/lisk-client.js";let t;export function getHttpClient(){return n}export async function getWsClient(){const e=i.SNOWPACK_PUBLIC_WS_API;if(!e)throw new Error("No websocket endpoint specified");return t||(t=await o.createWSClient(e)),t}
