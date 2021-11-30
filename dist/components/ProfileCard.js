/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as e from"../../_snowpack/pkg/react.js";import a from"../../_snowpack/pkg/csz.js";import{Card as o}from"../../_snowpack/pkg/antd.js";import{useAuth0 as d}from"../../_snowpack/pkg/@auth0/auth0-react.js";import p from"../logo_opacity.png.proxy.js";export default function C(){const{user:t}=d();let c="",n="",r=p,i="",m="";return t&&(n=t.locale.toUpperCase(),r=t.picture,i=t.email,m=t.nickname,c=t.name),e.createElement("div",{className:f},e.createElement(o,{title:"Profilo",className:N},e.createElement("div",{className:v},e.createElement("div",{className:g},e.createElement("div",{className:u},e.createElement("img",{className:x,src:r}),e.createElement("h3",null,c))),e.createElement("div",{className:E},e.createElement("div",{className:s},e.createElement("div",{className:l},"Email:"),e.createElement("div",null,i)),e.createElement("div",{className:s},e.createElement("div",{className:l},"Nickname:"),e.createElement("div",null,m)),e.createElement("div",{className:s},e.createElement("div",{className:l},"Locale:"),e.createElement("div",null,n))))))}const f=a`
    max-width: 100%;  
`,l=a`
    color: #0047bb;
    margin-right: 5px;
`,u=a`
    margin-right: 20px;
`,x=a`
    border-radius: 70px;
    padding: 2px;
    border: 5px solid #eedc00;
    width: 100%;
`,N=a`   
    min-width: 650px;

    &.ant-card {
        margin-bottom: 20px;
    }
`,E=a`
    display: flex;
    flex-direction: column;
    
`,s=a`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`,g=a`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;    
`,v=a`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
