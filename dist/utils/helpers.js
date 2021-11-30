/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import o from"../../_snowpack/pkg/moment.js";import s from"../../_snowpack/pkg/lodash.js";export const getAssetPath=t=>`/browse/${t}`,getAccountPath=t=>`/account/${t}`,getDate=t=>o(parseInt(t)).format("YYYY/MM/DD, HH:mm:ss"),shorten=t=>s(t).truncate();
