/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as e from"../../_snowpack/pkg/react.js";import m from"../../_snowpack/pkg/csz.js";import{List as c,Avatar as a}from"../../_snowpack/pkg/antd.js";import{LockOutlined as i,UnlockOutlined as p}from"../../_snowpack/pkg/@ant-design/icons.js";import{Link as u}from"../../_snowpack/pkg/react-router-dom.js";import{getAssetPath as d}from"../utils/index.js";export default function k({assets:l}){function s(t,r){const[o,n]=t.split("/");return e.createElement(e.Fragment,null,e.createElement(a,{size:"default"},o)," \xA0",n&&e.createElement(a,{size:"default"},n))}function f(t){const r="16px",o="#ab273c",n="green";return e.createElement(e.Fragment,null,t?e.createElement(e.Fragment,null,e.createElement(a,{size:"default"},e.createElement(i,{style:{fontSize:r,color:o}}))):e.createElement(e.Fragment,null,e.createElement(a,{size:"default"},e.createElement(p,{style:{fontSize:r,color:n}}))))}return e.createElement(c,{className:g,bordered:!0,pagination:{onChange:t=>{console.log(t)},pageSize:9},dataSource:l,renderItem:t=>e.createElement(c.Item,null,e.createElement(c.Item.Meta,{avatar:s(t.type,t.private),title:e.createElement(u,{to:d(t.id)},t.name)}))})}const g=m`
    min-width: 600px;
`;
