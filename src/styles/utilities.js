import styled, { css, keyframes } from "styled-components";
import { global, resume, device } from "./themes";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const devices = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const Board = styled.section`
  width: 700px;
  padding: 40px;
  box-shadow: ${global.boxShadow};
  border-radius: ${global.borderRadius};
  background-color: ${({ theme }) => theme.mainboxColor};

  @media ${device.mobileL} {
    width: 90%;
    padding: 10px;
    margin: 5px;
  }

  @media ${device.tablet} {
    width: 80%;
    padding: 10px;
    margin: 5px;
  }
`;
export const Grid = styled.div`
  display: grid;
  column-gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(autofill, auto);

  @media ${device.mobileL} {
    display: block;
  }
`;
export const Title = styled.h1`
  font-size: 30px;
  font-family: "segoeBlack", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  grid-column: 1 / span 2;
  text-align: ${(props) => (props.center ? "center" : "initial")};
  margin: 15px 0;
  margin-bottom: 25px;
`;
export const SubTitle = styled(Title)`
  font-size: 18px;
  font-family: "segoeBold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 0;
  text-align: ${(props) => (props.center ? "center" : "initial")};
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${(props) =>
    props.fadeIn &&
    css`
      opacity: 0;
      color: red;
      animation: ${FadeInSlowly} 8s 10s forwards;
    `};
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 5px;
  grid-column: ${(props) => (props.type === "full" ? "1 / span 2" : "span 1")};
`;

export const Input = styled.input`
  font-size: 16px;
  border: none;
  box-shadow: ${global.boxShadow};
  user-select: none;
  outline: none;
  padding: 12px;
  width: auto;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.inputColor};
  border-radius: ${global.borderRadius};

  @media ${device.mobileS} {
    font-size: 11px;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  border-radius: ${global.borderRadius};
  background-color: ${({ theme }) => theme.inputColor};
  resize: none;
  color: ${global.mainColor};
  font-size: 16px;
  font-family: "segoeReg", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: ${global.boxShadow};
  outline: none;
  padding: 15px;
  min-height: 150px;
`;
export const Asterisk = styled.span`
  color: ${global.asterisk};
  margin-left: 5px;
  font-size: 1.2rem;
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;
export const FlexEnd = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const PrimaryButton = styled.input`
  background-color: ${global.mainColor};
  padding: 8px;
  width: 250px;
  font-size: 20px;
  font-family: "segoeBold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: ${global.boxShadow};
  border-radius: ${global.borderRadius};
  border: none;
  outline: none;
  cursor: pointer;
  color: ${global.primaryBtnColor};
  margin-top: 30px;
  margin-right: 5px;
  transition: 0.2s all;
  border: 2px solid ${global.mainColor};

  ${(props) =>
    props.backButton &&
    css`
      background-color: #d15056;
      border: 2px solid #d15056;
      &:hover {
        background-color: transparent;
        color: black;
      }
    `};

  ${(props) =>
    props.animate &&
    css`
      animation: ${MovingUpAndDown} 1s infinite ease-in-out;
    `};
  &:hover {
    background-color: transparent;
    color: ${(props) => (props.backButton ? "#d15056" : global.mainColor)};
  }

  @media ${device.mobileS} {
    width: 120px;
  }

  @media ${device.mobileL} {
    width: 150px;
  }
`;

const MovingUpAndDown = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1.1) scaleX(1.1);
    background: #936fd1;
    color: white;
  }

  60% {
    background: #7958b1;
    transform: translateY(6px)
  }
`;

const FadeInSlowly = keyframes`
  from{opacity: 0}
  to{opacity: 1; color: #d15056;}
`;
export const SecondaryButton = styled(PrimaryButton)`
  background-color: transparent;
  width: 150px;
  padding: 5px;
  font-size: 16px;
  color: ${global.mainColor};
  border: 2px solid ${global.mainColor};
  margin: 0;
  &:hover {
    background-color: ${global.mainColor};
    color: ${global.primaryBtnColor};
  }
`;

export const Icon = styled.img`
  padding: 7px;
  margin: ${(props) => (props.noMargin ? "0px" : "15px 10px 15px 0")};
  width: ${(props) => (props.smaller ? "20px" : "25px")};
  height: ${(props) => (props.smaller ? "20px" : "25px")};
  outline: none;
  background-color: ${(props) => (props.trash ? "#D28080" : "#70BA8B")};
  border-radius: ${global.borderRadius};
  border: none;
  cursor: pointer;
  transition: 0.3s all;

  ${(props) =>
    props.side &&
    css`
      margin: 0 0 5px 10px;

      @media ${device.mobileS} {
        margin: 0px 0px 6px 4px;
      }
    `};

  &:hover {
    background-color: ${(props) => (props.trash ? "#D53838" : "#2E9253")};
  }
  &:active {
    transform: scale(1.1);
  }
`;

export const FileIcon = styled.img`
  padding: 7px;
  margin: 20px 0;
  max-width: 75%;
`;
export const EditIcon = styled(Icon)`
  padding: 8px 9.6px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${global.mainColor};
  &:hover {
    background-color: #865c8d;
  }
  &:active {
    transform: scale(1.1);
  }
`;

export const PositionRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
`;

export const Animation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -999;
`;
export const ItemContainer = styled.div`
  padding: 20px;
  position: relative;
  background-color: ${({ theme }) => theme.inputColor};
  border-radius: ${global.borderRadius};
  margin-bottom: 20px;
  ${(props) =>
    props.flex &&
    css`
      padding: 8px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `};

  @media ${device.mobileL} {
    padding-bottom: ${(props) => (props.flex ? "8px" : "70px")};
    ${PositionRight} {
      position: absolute;
      bottom: 0;
      align-items: flex-end;
    }
  }
  @media ${device.tablet} {
    padding-bottom: ${(props) => (props.flex ? "8px" : "70px")};
    ${PositionRight} {
      position: absolute;
      bottom: 0;
      align-items: flex-end;
    }
  }
`;

// resume

export const Sidebar = styled.div`
  background: ${resume.sidebarColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 2.2in;
  padding: 10px;
`;
export const MainSection = styled.div`
  padding: 20px;
  flex-grow: 1;
`;
export const ResumeItem = styled.div`
  margin: ${(props) => (props.noMargin ? "0px" : "0 20px 20px 20px")};
  width: auto;
`;

export const ResumeTitle = styled.h1`
  font-family: "Great Vibes";
  font-size: ${resume.titleFont};
  color: ${resume.blackFontColor};
  font-weight: 300;
  margin-bottom: 10px;
`;

export const ResumeUsername = styled(Title)`
  font-size: 1.5625rem;
  width: 100%;
  font-family: "segoeBold";
  color: ${resume.whiteFontColor};
  margin-bottom: 5px;
  text-align: center;
  word-wrap: break-word;
`;

export const ResumeUserJob = styled(ResumeTitle)`
  color: ${resume.whiteFontColor};
  font-size: 1.1875rem;
  text-align: center;
  word-wrap: break-word;
  width: 100%;
`;

export const ResumeIcon = styled.img`
  border-radius: 100%;
  width: 140px;
  height: 140px;
  margin: 10px 0;
  border: 3px solid #ffffff20;
`;

export const ContactIcon = styled.img`
  border-radius: 0;
  border: none;
  width: 18px;
  height: 18px;
  padding: 8px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  margin-top: 5px;
`;
export const ResumeBullets = styled.li`
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 3px;
  word-break: ${(props) => props.breakAll && "break-all"};
  word-break: break-all;
`;
export const ResumeList = styled.ul`
  list-style-type: none;
  text-align: center;
  padding: 0;
  color: ${resume.whiteFontColor};
  font-family: "segoeReg";
  font-weight: 200;
  font-size: ${resume.textFont};
  width: 100%;
`;
export const ResumeHeading = styled(ResumeTitle)`
  font-size: ${resume.heading1Font};
  color: ${resume.whiteFontColor};
  text-align: center;
  border-bottom: ${(props) => (props.borderBottom ? "1px solid" + resume.breakline : "none")};
  margin: 20px 20px 5px 20px;
`;
export const ResumeSubTitle = styled(SubTitle)`
  color: ${resume.blackFontColor};
  font-family: "segoeBlack";
  color: #525050;
  letter-spacing: 1px;
`;

export const Description = styled.p`
  text-align: justify;
  word-wrap: break-word;
  margin-top: 15px;
  color: ${({ theme }) => theme.textColor};
  font-size: 14px;
  font-family: "segoeLight", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const Caption = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-family: "segoeLightItalic", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 11px;
  margin: 0;
`;

export const ResumeDescription = styled(Description)`
  font-family: "segoeReg";
  font-weight: 300;
  margin-top: 4px;
  color: ${resume.blackFontColor};
`;

export const ResumeCaption = styled(Caption)`
  font-family: "segoeBoldItalic";
  font-weight: 300;
  color: ${resume.captionColor};
  font-size: 13px;
`;

export const Resume = styled.div`
  width: 215.9mm;
  height: 279.4mm;
  box-shadow: ${global.boxShadow};
  background-color: white;
  display: flex;

  @media ${device.mobileL} {
    width: auto;
    height: auto;

    ${Sidebar} {
      width: 35%;
    }

    ${MainSection} {
      width: 65%;
    }

    ${ResumeUsername} {
      font-size: 12px;
    }

    ${ResumeIcon} {
      width: 60px;
      height: 60px;
    }

    ${ResumeBullets} {
      font-size: 9px;
    }

    ${ResumeTitle} {
      font-size: 20px;
    }

    ${ResumeUserJob} {
      font-size: 10px;
    }
    ${ResumeHeading} {
      font-size: 13px;
      margin: 0px;
    }

    ${ResumeItem} {
      width: 100%;
      margin: 0;
    }

    ${ResumeDescription} {
      font-size: 10px;
    }

    ${Caption} {
      font-size: 10px;
    }

    ${ResumeSubTitle} {
      font-size: 13px;
    }
  }
`;
