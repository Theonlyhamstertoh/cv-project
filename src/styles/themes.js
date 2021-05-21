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
  titleFont: "3.125rem",
  heading1Font: "2.1875rem",
  heading2Font: "1rem",
  textFont: "0.8125rem",
  captionFont: "14px",
  contactFont: "9px",
  captionColor: "#5E5E5E",
  whiteFontColor: "#E4E4E4",
  blackFontColor: "#242424",
  breakline: "#70707070",
  sidebarColor: "#2f2f2f",
};

const size = {
  mobileS: "320px",
  mobileM: "395px",
  mobileL: "455px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL}) `,
  tablet: `(max-width: ${size.tablet}) and (min-width: ${size.mobileL})`,
  tabletOnly: `(max-width: ${size.tablet}))`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
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
