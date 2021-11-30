/**
 * Copyright (c) 2021 BlockchainLAB
 *
 * License: GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007
 * https://www.gnu.org/licenses/agpl-3.0.en.html 
 * 
 * @author Enrico Zanardo <ezanardo@onezerobinary.com>
 *
 */
import*as e from"../../_snowpack/pkg/react.js";import n from"../../_snowpack/pkg/csz.js";import{Spin as t}from"../../_snowpack/pkg/antd.js";export default function r(){return e.createElement("div",{className:a},e.createElement(t,{tip:"In caricamento...",size:"large",className:o}))}const a=n`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    
`,o=n`
    .ant-spin-text {
        color: #0047bb;
        margin-top: 1rem;
    };

    .ant-spin-dot-item {
        background-color: #0047bb;
        width: 20px;
        height: 20px;
        font-size: 50px;
    };

`;
