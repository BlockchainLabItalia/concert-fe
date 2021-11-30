/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as r from"../_snowpack/env.js";import*as t from"../_snowpack/pkg/react.js";import{Auth0Provider as n}from"../_snowpack/pkg/@auth0/auth0-react.js";import a from"./components/layout/AppLayout.js";import c from"./routes/index.js";export default function i(){const o=r.SNOWPACK_PUBLIC_REACT_APP_AUTH0_DOMAIN,e=r.SNOWPACK_PUBLIC_REACT_APP_AUTH0_CLIENT_ID;if(!o||!e)throw new Error("Missing Auth0 domain and / or client.");return t.createElement("div",{className:"App"},t.createElement(n,{domain:o,cacheLocation:"localstorage",clientId:e,redirectUri:window.location.origin},t.createElement(a,null,t.createElement(c,null))))}
