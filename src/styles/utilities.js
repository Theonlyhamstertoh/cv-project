import styled, { css, keyframes } from "styled-components";
import { global, resume } from "./themes";

export const Board = styled.section`
  width: 700px;
  padding: 40px;
  box-shadow: ${global.boxShadow};
  border-radius: ${global.borderRadius};
  background-color: ${({ theme }) => theme.mainboxColor};
`;
export const Grid = styled.div`
  display: grid;
  column-gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(autofill, auto);
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

  ${(props) =>
    props.fadeIn &&
    css`
      opacity: 0;
      color: red;
      animation: ${FadeInSlowly} 8s 10s forwards;
      /* animation-delay: 5s; */
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
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.inputColor};
  border-radius: ${global.borderRadius};
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
`;

const MovingUpAndDown = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1.1) scaleX(1.1);
    background: #936fd1;
    color: white;
  }

  60% {
    background: #7958b1;
    transform: translateY(-15px)
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
  outline: none;
  background-color: ${(props) => (props.trash ? "#D28080" : "#70BA8B")};
  border-radius: ${global.borderRadius};
  border: none;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    background-color: ${(props) => (props.trash ? "#D53838" : "#2E9253")};
  }
  &:active {
    transform: scale(1.1);
  }
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
`;
export const PositionRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
`;

export const unofficialResume = {
  titleFont: "40px",
  subtitleFont: "26px",
  headingFont: "16px",
  textFont: "11px",
  contactFont: "9px",
  captionColor: "#5E5E5E",
  whiteFontColor: "#E4E4E4",
  blackFontColor: "#242424",
  breakline: "#70707070",
  sidebarColor: "#3b3b3b",
};

// resume
export const Resume = styled.div`
  width: 215.9mm;
  height: 279.4mm;
  box-shadow: ${global.boxShadow};
  background-color: white;
  display: flex;
`;

export const Sidebar = styled.div`
  background: ${resume.sidebarColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 2.1in;
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
  font-size: 25px;
  font-family: "segoeBold";
  color: ${resume.whiteFontColor};
  margin-bottom: 5px;
`;

export const ResumeUserJob = styled(ResumeTitle)`
  color: ${resume.whiteFontColor};
  font-size: 19px;
`;

export const ResumeIcon = styled.img`
  border-radius: 100%;
  width: 140px;
  margin: 10px 0;
  border: 3px solid #ffffff20;
  ${(props) =>
    props.smallIcon &&
    css`
      border-radius: 0;
      border: none;
      width: 14px;
      padding: 8px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      margin-top: 5px;
    `};
`;

export const ResumeBullets = styled.li`
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;
export const ResumeHeading = styled(ResumeTitle)`
  font-size: ${resume.heading1Font};
  color: ${resume.whiteFontColor};
  text-align: center;
  border-bottom: ${(props) => (props.borderBottom ? "1px solid" + resume.breakline : "none")};
  min-width: 120px;
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
  margin-top: 15px;
  color: ${({ theme }) => theme.textColor};
  font-size: 14px;
  font-family: "segoeLight", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const Caption = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-family: "segoeLightItalic", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 9px;
  margin: 0;
`;

export const ResumeDescription = styled(Description)`
  font-family: "segoeReg";
  font-weight: 300;
  color: ${resume.blackFontColor};
`;

export const ResumeCaption = styled(Caption)`
  font-family: "segoeBoldItalic";
  font-weight: 300;
  color: ${resume.captionColor};
  font-size: 13px;
`;
