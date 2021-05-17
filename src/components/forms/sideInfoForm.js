import React from "react";
import {
  Board,
  ItemContainer,
  SubTitle,
  Title,
  Icon,
  PrimaryButton,
  FlexBetween,
} from "../../styles/utilities";
import { InputText } from "../reusable";

import trashcanButton from "../../assets/trashcan.svg";

export const SideInfoForm = (props) => {
  return (
    <Board>
      <Title>Skills</Title>
      <InputText type="text" label="Adds A Skill" name="skillForm" />

      <Title>Interests</Title>
      <InputText type="text" label="Adds A Interest" name="interestForm" />
      <FlexBetween>
        <PrimaryButton
          backButton
          type="button"
          value="Back"
          onClick={(e) => props.onSubmit(e, "sideInfoForm", false)}
        />
        <PrimaryButton
          type="button"
          value="Next"
          onClick={(e) => props.onSubmit(e, "sideInfoForm", true)}
        />
      </FlexBetween>
    </Board>
  );
};

export const SkillsItem = (props) => {
  return (
    <ItemContainer flex>
      <SubTitle>I finished a task!</SubTitle>
      <Icon noMargin smaller trash src={trashcanButton} alt={"trashcan"} />
    </ItemContainer>
  );
};

export const InterestsItem = (props) => {
  return (
    <ItemContainer flex>
      <SubTitle>I finished a task!</SubTitle>
      <Icon noMargin smaller trash src={trashcanButton} alt={"trashcan"} />
    </ItemContainer>
  );
};
