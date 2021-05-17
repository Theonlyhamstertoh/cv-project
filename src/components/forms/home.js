import React from "react";
import { InputText, PrimaryBtn } from "../reusable";
import { Board, Title, Grid, SubTitle, PrimaryButton } from "../../styles/utilities";

export const HomePage = (props) => {
  return (
    <Board>
      <Title center>Get started creating your resume!</Title>
      <SubTitle center>Press Start to continue!</SubTitle>

      <SubTitle center fadeIn>
        You better be clicking! Start button is getting tired! Don't make him impatient!
      </SubTitle>
      <PrimaryButton type="button" value="Start" onClick={(e) => props.onSubmit(e, "home", true)} />
    </Board>
  );
};
