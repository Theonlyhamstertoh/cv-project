import {
  Grid,
  Icon,
  Title,
  Caption,
  PositionRight,
  ItemContainer,
  SubTitle,
  EditIcon,
} from "../../styles/utilities";
import { dateConverter } from "../reusable";
import React, { useContext } from "react";
import trashcanButton from "../../assets/trashcan.svg";
import saveButton from "../../assets/save.svg";
import editButton from "../../assets/edit.svg";
import { InputText } from "../reusable";
import { FormContext } from "./formContext";

export const EducationForm = (props) => {
  const { state } = useContext(FormContext);
  const { degree, educationName, startDate, endDate, location } = state.edu;
  if (props.educationOn === false) {
    return null;
  }
  return (
    <form onSubmit={(e) => props.save(e, "eduArray", state.edu, "edu")}>
      <Grid>
        <InputText edu full value={degree} id="degree" label="Your degree" />
        <InputText edu date value={startDate} half id="startDate" label="Start Date" />
        <InputText edu date value={endDate} half id="endDate" label="End Date" />
        <InputText edu full value={educationName} id="educationName" label="Education" />
        <InputText edu full value={location} id="location" label="Location" />
        <div>
          <Icon trash src={trashcanButton} onClick={() => props.delete("edu")} alt="trashcan" />
          <Icon save as="input" type="image" src={saveButton} />
        </div>
      </Grid>
    </form>
  );
};

export const EduItem = (props) => {
  const { educationName, startDate, endDate, degree, location, id } = props.data;

  return (
    <ItemContainer>
      <PositionRight>
        <EditIcon as="span" onClick={(e) => props.edit("eduArray", "edu", id)}>
          <img src={editButton} alt="edit" style={{ userSelect: "none" }} />
        </EditIcon>
        <Icon
          trash
          src={trashcanButton}
          alt="trashcan"
          onClick={() => props.delete("eduArray", id)}
        />
      </PositionRight>
      <SubTitle>{degree}</SubTitle>
      <Caption>
        {educationName} / {location} / {dateConverter(startDate)} - {dateConverter(endDate)}
      </Caption>
    </ItemContainer>
  );
};
