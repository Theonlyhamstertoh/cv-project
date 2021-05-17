import { Grid, Icon, Title, Caption, PositionRight, ItemContainer } from "../../styles/utilities";
import { dateConverter } from "../reusable";
import React from "react";
import trashcanButton from "../../assets/trashcan.svg";
import saveButton from "../../assets/save.svg";
import editButton from "../../assets/edit.svg";
import { InputText } from "../reusable";

export const EducationForm = (props) => {
  return (
    <form onSubmit={(e) => props.onSubmit(e, "education")}>
      <Grid>
        <InputText full name="degree" label="Your degree" />
        <InputText date half name="startDate" label="Start Date" />
        <InputText date half name="endDate" label="End Date" />
        <InputText full name="educationName" label="Education" />
        <InputText full name="location" label="Location" />
        <div>
          <Icon as="input" type="image" save src={saveButton} />
          <Icon trash src={trashcanButton} alt="trashcan" />
        </div>
      </Grid>
    </form>
  );
};

// export const EduItem = (props) => {
//   const { educationName, startDate, endDate, degree, location, deleteHandler } = props.data;
//   const onDelete = props.onDelete;
//   const onEdit = props.onEdit;

//   return (
//     <ItemContainer>
//       <PositionRight>
//         <Icon edit src={editButton} alt="edit" />
//         <Icon
//           trashcan
//           src={trashcanButton}
//           alt="trashcan"
//           onClick={() => onDelete(props.id, "education")}
//         />
//       </PositionRight>
//       <Title>{degree}</Title>
//       <Caption>
//         {educationName} / {location} / {dateConverter(startDate)} - {dateConverter(endDate)}
//       </Caption>
//     </ItemContainer>
//   );
// };
