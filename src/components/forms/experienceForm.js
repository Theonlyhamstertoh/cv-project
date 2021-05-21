import React, { useContext } from "react";
import trashcanButton from "../../assets/trashcan.svg";
import saveButton from "../../assets/save.svg";
import editButton from "../../assets/edit.svg";
import { InputText, TextAreaBlock } from "../reusable";
import { dateConverter } from "../reusable";

import {
  Grid,
  Icon,
  Description,
  Caption,
  PositionRight,
  EditIcon,
  ItemContainer,
  SubTitle,
} from "../../styles/utilities";
import { FormContext } from "./formContext";

export const ExperienceForm = (props) => {
  const { state } = useContext(FormContext);
  const { jobName, startDate, endDate, companyName, location, description } = state.exp;
  if (props.experienceOn === false) {
    return null;
  }

  return (
    <form onSubmit={(e) => props.save(e, "expArray", state.exp, "exp")}>
      <Grid>
        <InputText exp value={jobName} full id="jobName" label="Your Job Title" />
        <InputText exp value={startDate} date half id="startDate" label="Start Date" />
        <InputText exp value={endDate} date half id="endDate" label="End Date" />
        <InputText exp value={companyName} half id="companyName" label="Company Name" />
        <InputText exp value={location} half id="location" label="Location" />
        <TextAreaBlock exp value={description} full id="description" label="Description" />

        <div>
          <Icon trash src={trashcanButton} alt="trashcan" onClick={() => props.delete("exp")} />
          <Icon save as="input" type="image" src={saveButton} alt="save" />
        </div>
      </Grid>
    </form>
  );
};

export const ExpItem = (props) => {
  const { companyName, startDate, endDate, jobName, location, description, id } = props.data;

  return (
    <ItemContainer>
      <SubTitle as="h2">{jobName}</SubTitle>
      <Caption>
        {companyName} / {location} / {dateConverter(startDate)} - {dateConverter(endDate)}
      </Caption>
      <Description>{description}</Description>
      <PositionRight>
        <EditIcon as="span" onClick={(e) => props.edit("expArray", "exp", id)}>
          <img src={editButton} alt="edit" style={{ userSelect: "none" }} />
        </EditIcon>
        <Icon
          type="button"
          trash
          src={trashcanButton}
          alt="trashcan"
          onClick={() => props.delete("expArray", id)}
        />
      </PositionRight>
    </ItemContainer>
  );
};
