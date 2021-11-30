/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as e from"../../../_snowpack/pkg/react.js";import{useState as y,useEffect as p}from"../../../_snowpack/pkg/react.js";import a from"../../../_snowpack/pkg/csz.js";import{message as h,Menu as r,Spin as x,Layout as E}from"../../../_snowpack/pkg/antd.js";import{useHistory as w}from"../../../_snowpack/pkg/react-router.js";import{useAuth0 as v}from"../../../_snowpack/pkg/@auth0/auth0-react.js";const{Header:U}=E;import N from"./FooterEn.js";import C from"../../concert_small.png.proxy.js";import{Link as b}from"../../../_snowpack/pkg/react-router-dom.js";const u=[{title:"Statistiche",key:"/",private:!1},{title:"Storico",key:"/browse",private:!1},{title:"Carica",key:"/upload",private:!0},{title:"Trasferisci",key:"/transfer",private:!0},{title:"Utente",key:"/my-account",private:!0}];export default function z(d){const n=w(),{loginWithRedirect:f,logout:g,isAuthenticated:o,isLoading:i}=v(),[s,c]=y(u[0].key);p(()=>{i||h.info(`Successfully logged ${o?"in":"out"}`),o&&(c("/my-account"),n.push("/my-account"))},[o]);function l(t){const m="/"+t.split("/")[1];s!==m&&c(m)}p(()=>{l(n.location.pathname)},[n.location]);function k(t){switch(t.key){case"login":f();break;case"logout":g({returnTo:window.location.origin});break;default:l(t.key),n.push(t.key)}}return e.createElement("div",{className:M},e.createElement("div",{className:j},e.createElement("div",{className:_},e.createElement(b,{to:"/"},e.createElement("img",{src:C})),e.createElement("h2",{className:S},"ConCert")),e.createElement("div",{className:L},e.createElement(r,{mode:"horizontal",defaultSelectedKeys:[s],selectedKeys:[s],onClick:k,style:{background:"#eedc00"}},u.map(t=>e.createElement(r.Item,{disabled:t.private&&!o,key:t.key},t.title)),e.createElement(r.Item,{key:o?"logout":"login"},i?e.createElement(x,null):o?"Logout":"Login")))),e.createElement("div",{className:A},d.children),e.createElement("div",{className:I},e.createElement(N,null)))}const j=a`
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;
    width: 100%;
    background: #eedc00;
    height: 60px;
    border-bottom: none;
`,_=a`   
  display: flex;
  flex-direction: row;
  margin-top: 0.8rem;
  align-items: flex-start;
  margin-left: 10px;
`,L=a`
    margin-top: 15px;
    align-items: flex-end;
    margin-right: 8px;
`,S=a`
  font-family : Avenir;
  margin-left: 10px;
  color: #0047bb;
`,M=a`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`,A=a`
    flex: 1;
    align-items: center;
`,I=a`
    flex-shrink: 0;
    width: 100%;
    background: #eedc00;
`;
