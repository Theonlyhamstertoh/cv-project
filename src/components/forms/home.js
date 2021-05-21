import React, { useContext } from "react";
import { InputText, PrimaryBtn } from "../reusable";
import { Board, Title, Grid, SubTitle, PrimaryButton, FlexCenter } from "../../styles/utilities";
import { FormContext } from "./formContext";

export const HomePage = (props) => {
  const { switchPage } = useContext(FormContext);

  return (
    <Board style={{ paddingBottom: "25px" }}>
      <Title center>Get started creating your resume!</Title>
      <SubTitle center>Press Start to continue!</SubTitle>

      <FlexCenter>
        <PrimaryButton
          animate
          type="button"
          value="Start"
          onClick={(e) => switchPage(e, "home", true)}
        />
      </FlexCenter>
    </Board>
  );
};
