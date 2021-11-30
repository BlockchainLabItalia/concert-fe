/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
export function setDataToStorage(t,e){localStorage.setItem(t,JSON.stringify(e))}export function getDataFromStorage(t){const e=localStorage.getItem(t);return e?JSON.parse(e):null}export function removeDataFromStorage(t){localStorage.removeItem(t)}
