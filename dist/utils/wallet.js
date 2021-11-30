/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import{passphrase as a,cryptography as s}from"../../_snowpack/pkg/@liskhq/lisk-client.js";export function createCredentials(t){const e=t||a.Mnemonic.generateMnemonic(),r=s.getPrivateAndPublicKeyFromPassphrase(e);return{address:s.getBase32AddressFromPassphrase(e),binaryAddress:s.getAddressFromPassphrase(e).toString("hex"),passphrase:e,publicKey:r.publicKey.toString("hex"),privateKey:r.privateKey.toString("hex")}}
