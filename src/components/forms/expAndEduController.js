import React, { useState, useContext } from "react";
import { Board, Title, FlexBetween, PrimaryButton, SecondaryButton } from "../../styles/utilities";
import { PrimaryBtn, SecondaryBtn, InputText } from "../reusable";
import { ExperienceForm, ExpItem } from "./experienceForm";
import { EducationForm, EduItem } from "./educationForm";
import { SkillsItem } from "./sideInfoForm";
import { FormContext } from "./formContext";
import uniqid from "uniqid";

export const ExpAndEdu = (props) => {
  const { experienceOn, setExperienceMode } = props.exp;
  const { educationOn, setEducationMode } = props.edu;
  const { switchPage, state, dispatch, expEdit, setExpEdit, eduEdit, setEduEdit } =
    useContext(FormContext);

  const deleteButtonHandler = (category, id) => {
    if (category === "expArray" || category === "eduArray") {
      return dispatch({ id, category, deleteFromArray: true });
    }
    category === "exp" ? setExperienceMode(false) : setEducationMode(false);
    dispatch({ category, delete: true });
  };

  const saveButtonHandler = (e, category, data, form) => {
    e.preventDefault();
    form === "exp" ? setExperienceMode(false) : setEducationMode(false);
    category === "expArray" ? setExpEdit(false) : setEduEdit(false);

    dispatch({ category, save: true, data, form });
  };

  const editButtonHandler = (category, form, id) => {
    const data = state[category].filter((item) => item.id === id)[0];
    category === "expArray" ? setExperienceMode(true) : setEducationMode(true);
    if (expEdit !== false && category === "expArray") {
      dispatch({ category, save: true, form, data: state[form] });
      setExpEdit(false);
    } else if (eduEdit !== false && category === "eduArray") {
      dispatch({ category, save: true, form, data: state[form] });
      setEduEdit(false);
    }

    console.log(category);
    category === "expArray" ? setExpEdit(true) : setEduEdit(true);
    dispatch({ category, form, data, edit: true });
  };

  return (
    <Board>
      <Title>Experience</Title>

      {state.expArray.map((item) => {
        return (
          <ExpItem
            key={item.id}
            data={item}
            delete={deleteButtonHandler}
            edit={editButtonHandler}
          />
        );
      })}
      <ExperienceForm
        experienceOn={experienceOn}
        save={saveButtonHandler}
        delete={deleteButtonHandler}
      />

      {experienceOn === false && (
        <SecondaryButton
          type="button"
          value="Add Experience"
          onClick={() => setExperienceMode(true)}
        />
      )}
      <Title>Education</Title>

      {state.eduArray.map((item) => {
        return (
          <EduItem
            key={item.id}
            data={item}
            delete={deleteButtonHandler}
            edit={editButtonHandler}
          />
        );
      })}

      <EducationForm
        educationOn={educationOn}
        save={saveButtonHandler}
        delete={deleteButtonHandler}
      />

      {educationOn === false && (
        <SecondaryButton
          value="Add Education"
          type="button"
          onClick={() => setEducationMode(true)}
        />
      )}

      <FlexBetween>
        <PrimaryButton
          backButton
          type="button"
          value="Back"
          onClick={(e) => switchPage(e, "expAndEdu", false)}
        />
        <PrimaryButton
          type="button"
          value="Next"
          onClick={(e) => switchPage(e, "expAndEdu", true)}
        />
      </FlexBetween>
    </Board>
  );
};
