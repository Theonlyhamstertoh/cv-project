import React from "react";
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

export const ExperienceForm = (props) => {
  const submitInfo = (e) => {
    props.onSubmit(e, "experience");
    props.changeExp(false);
  };

  if (props.showExpInput === false) {
    return null;
  }

  return (
    <form onSubmit={submitInfo}>
      <Grid>
        <InputText full name="jobName" label="Your Job Title" />
        <InputText date half name="startDate" label="Start Date" />
        <InputText date half name="endDate" label="End Date" />
        <InputText half name="companyName" label="Company Name" />
        <InputText half name="location" label="Location" />
        <TextAreaBlock full name="description" label="Description" />
        <div>
          <Icon trash src={trashcanButton} alt="trashcan" onClick={() => props.changeExp(false)} />
          <Icon type="image" save src={saveButton} />
        </div>
      </Grid>
    </form>
  );
};

// if (props.experience !== undefined && props.experience !== null) {
//   const { jobName, startDate, endDate, companyName, location, description } = props.experience;
//   return (
//     <form onSubmit={submitInfo}>
//       <Grid>
//         <InputText full name="jobName" value="Your Job Title" inputText={jobName} />
//         <InputText date half name="startDate" value="Start Date" inputText={startDate} />
//         <InputText date half name="endDate" value="End Date" inputText={endDate} />
//         <InputText half name="companyName" value="Company Name" inputText={companyName} />
//         <InputText half name="location" value="Location" inputText={location} />
//         {/* <TextAreaBlock full name="description" value="Description" inputText={description} /> */}
//         <div>
//           <Icon
//             type="button"
//             trash
//             src={trashcanButton}
//             alt="trashcan"
//             onClick={() => props.changeExp(false)}
//           />
//           <Icon as="input" type="image" save src={saveButton} />
//         </div>
//       </Grid>
//     </form>
//   );
// }

export const ExpItem = (props) => {
  const { companyName, startDate, endDate, jobName, location, description } = props.data;
  const onDelete = props.onDelete;
  return (
    <ItemContainer>
      <PositionRight>
        <EditIcon as="span">
          <img src={editButton} alt="edit" style={{ userSelect: "none" }} />
        </EditIcon>
        <Icon
          type="button"
          trash
          src={trashcanButton}
          alt="trashcan"
          onClick={() => onDelete(props.id, "experience")}
        />
      </PositionRight>
      <SubTitle as="h2">{jobName}</SubTitle>
      <Caption>
        {companyName} / {location} / {dateConverter(startDate)} - {dateConverter(endDate)}
      </Caption>
      <Description>{description}</Description>
    </ItemContainer>
  );
};
