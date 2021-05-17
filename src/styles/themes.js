import styled from "styled-components";

export const lightTheme = {
  background: "white",
  mainboxColor: "#FFFFFF",
  hover: "#751AA236",
  inputColor: "#f8f8f8",
  textColor: "#919092",
};

export const global = {
  primaryBtnColor: "#FFFFFF",
  asterisk: "#E1434A",
  boxShadow: "0px 4px 6px #00000016",
  borderRadius: "13px",
  mainColor: "#B48FF5",
};

export const darkTheme = {
  background: "#303030",
  mainboxColor: "#3a3a3a",
  inputColor: "#4B4B4B",
  hover: "##B7B7B742",
  textColor: "#d6d6d6",
};

export const resume = {
  titleFont: "50px",
  heading1Font: "35px",
  heading2Font: "16px",
  textFont: "13px",
  contactFont: "9px",
  captionColor: "#5E5E5E",
  whiteFontColor: "#E4E4E4",
  blackFontColor: "#242424",
  breakline: "#70707070",
  sidebarColor: "#2f2f2f",
};

export const ThemeSwitcher = styled.input`
  border-radius: ${global.borderRadius};
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  width: 50px;
  transition: 0.3s all;
  &:hover {
    transform: scale(1.1);
  }
`;
