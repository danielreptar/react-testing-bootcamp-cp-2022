import { createGlobalStyle } from "styled-components";
import { black, offWhite } from "./colors";

import InterEot from "../fonts/Inter-Regular.eot";
import InterSVG from "../fonts/Inter-Regular.svg";
import InterTtf from "../fonts/Inter-Regular.ttf";
import InterWoff from "../fonts/Inter-Regular.woff";

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Inter';
    src: url(${InterEot});
    src: 
        url(${InterWoff}) format('woff'),
        url(${InterTtf}) format("truetype"),
        url(${InterSVG}) format('svg');
        font-weight: normal;
        font-style: normal;
    }
 
  html {
    box-sizing: border-box;
    font-family: "Inter", Sans-Serif;
    background-color: ${black};
    scroll-behavior: smooth;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
    cursor: pointer;
    text-decoration:none;
  }
 
  ul, li, h1, h2, h3, p  {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button {
    border: 0;
    outline: 0;
  }

  body {
    max-width: 1920px;
    margin: 0 auto;
    background-color: ${black};
    color: ${offWhite};
    overscroll-behavior: none;
    width: 100%;
  }

  body {
    margin: 0 auto;
    /* overscroll-behavior: none; */
    width: 100%;
  }

  #app {
    box-shadow: 0 0 10px rgba(0,0,0,.05);
    overflow-x: hidden;
  }
`;
