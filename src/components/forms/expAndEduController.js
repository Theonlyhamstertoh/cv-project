import React, { useState } from "react";
import { Board, Title, FlexBetween, PrimaryButton } from "../../styles/utilities";
import { PrimaryBtn, SecondaryBtn } from "../reusable";
import { ExperienceForm, ExpItem } from "./experienceForm";
import { EducationForm, EduItem } from "./educationForm";
import { SkillsItem } from "./sideInfoForm";
export const ExpAndEdu = (props) => {
  const [showExpInput, setExpInput] = useState(false);
  const [showEduInput, setEduInput] = useState(false);

  return (
    <Board>
      <Title>Experience</Title>

      <ExperienceForm />

      {showExpInput === false && <SecondaryBtn value="Add Experience" />}
      <Title>Education</Title>

      <EducationForm />

      {showEduInput === false && <SecondaryBtn value="Add Education" />}

      <FlexBetween>
        <PrimaryButton
          backButton
          type="button"
          value="Back"
          onClick={(e) => props.onSubmit(e, "expAndEdu", false)}
        />
        <PrimaryButton
          type="button"
          value="Next"
          onClick={(e) => props.onSubmit(e, "expAndEdu", true)}
        />
      </FlexBetween>
    </Board>
  );
};
