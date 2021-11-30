/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as e from"../../_snowpack/pkg/react.js";import{Route as t,Switch as c}from"../../_snowpack/pkg/react-router-dom.js";import{useAuth0 as m}from"../../_snowpack/pkg/@auth0/auth0-react.js";import p from"../pages/Home.js";import s from"../pages/Browse.js";import u from"../pages/Account.js";import i from"../pages/Asset.js";import f from"../pages/MyAccount.js";import l from"../pages/Upload.js";import h from"../pages/NotFound.js";import d from"../pages/Transfer.js";import g from"../pages/Unauthorized.js";export default function j(){const o=({component:r,path:a})=>{const{isAuthenticated:n}=m();return n?e.createElement(t,{exact:!0,path:a,component:r}):e.createElement(t,{component:g})};return e.createElement(c,null,e.createElement(t,{exact:!0,path:"/",component:p}),e.createElement(t,{exact:!0,path:"/browse",component:s}),e.createElement(t,{exact:!0,path:"/browse/:id",component:i}),e.createElement(t,{exact:!0,path:"/upload",component:l}),e.createElement(t,{exact:!0,path:"/transfer",component:d}),e.createElement(t,{exact:!0,path:"/account/:id",component:u}),e.createElement(o,{exact:!0,path:"/my-account",component:f}),e.createElement(t,{component:h}))}
