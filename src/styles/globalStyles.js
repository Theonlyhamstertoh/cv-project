import { createGlobalStyle } from "styled-components";

import segoeUI from "../fonts/SEGOEUI.TTF";
import segoeUIB from "../fonts/SEGOEUIB.TTF";
import segoeUII from "../fonts/SEGOEUII.TTF";
import segoeUIL from "../fonts/SEGOEUIL.TTF";
import segoeUIBL from "../fonts/SEGUIBL.TTF";
import segoeUIISB from "../fonts/SEGUISB.TTF";
import segoeUILI from "../fonts/SEGUILI.TTF";
import GreatVibes from "../fonts/GreatVibes-Regular.ttf";
import { global, device } from "./themes";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Great Vibes";
    src: url(${GreatVibes}) format('truetype'); 
  }
  @font-face {
    font-family: "segoeReg";
    src: url(${segoeUI}) format('truetype'); 
  }
  @font-face {
    font-family: "segoeBoldItalic";
    src: url(${segoeUII}) format('truetype'); 
  }
  @font-face {
    font-family: "segoeLight";
    src: url(${segoeUIL}) format('truetype'); 
  }
  @font-face {
    font-family: "segoeBlack";
    src: url(${segoeUIBL}) format('truetype'); 
  }
  @font-face {
    font-family: "segoeSemiBold";
    src: url(${segoeUIISB}) format('truetype'); 
  }
  @font-face {
    font-family: "segoeBold";
    src: url(${segoeUIB}) format('truetype'); 
  }
  @font-face {
    font-family: "segoeLightItalic";
    src: url(${segoeUILI}) format('truetype'); 
  }

  body {
    margin: 0;
    padding: 0;
    margin-bottom: 5rem;
    font-weight: bolder;
    box-sizing: border-box;
    margin-top: 5rem;
    color: ${global.mainColor};
    display: flex; 
    overflow-x: hidden;
    justify-content: center;
    background-color: ${({ theme }) => theme.background};
  }

  label {
    font-family: "segoeBold", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  #root {
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 100vw;

  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  ::-webkit-calendar-picker-indicator { 
    filter: invert(72%) sepia(0%) saturate(990%) hue-rotate(83deg) brightness(80%) contrast(95%);
  }
  ::-webkit-datetime-edit {
    font-family: "segoeReg"
  }
  ::-webkit-datetime-edit-text { padding: 0 0.3em; }

`;
