import React, { useContext } from "react";
import {
  Input,
  InputContainer,
  Asterisk,
  SecondaryButton,
  TextArea,
  Icon,
} from "../styles/utilities";
import trashcanButton from "../assets/trashcan.svg";
import saveButton from "../assets/save.svg";
import { format } from "date-fns";
import { FormContext } from "./forms/formContext";

export const dateConverter = (date) => {
  const dateArray = date.split("-");
  return format(new Date(dateArray[2], dateArray[1], dateArray[0]), "PPP");
};

export const SecondaryBtn = (props) => {
  return <SecondaryButton type="button" value={props.value} onClick={props.onClick} />;
};

export const InputText = (props) => {
  const { id, label, full, date, value } = props;
  const { handleChange } = useContext(FormContext);

  let category = determineCategory(props);

  return (
    <InputContainer type={full ? "full" : "half"}>
      <label htmlFor={id}>
        {label}
        <Asterisk>*</Asterisk>
      </label>
      <Input
        type={date ? "date" : "text"}
        value={value}
        id={id}
        required
        onChange={(e) => handleChange(e, category)}
      />
    </InputContainer>
  );
};

const determineCategory = (props) => {
  if (props.exp) {
    return "exp";
  } else if (props.personal) {
    return "personal";
  } else if (props.edu) {
    return "edu";
  }
};

export const TextAreaBlock = (props) => {
  const { label, id, value } = props;
  const { handleChange } = useContext(FormContext);
  let category = determineCategory(props);

  return (
    <InputContainer type="full">
      <label htmlFor={id}>
        {label}
        <Asterisk>*</Asterisk>
      </label>
      <TextArea id={id} value={value} onChange={(e) => handleChange(e, category)} required />
    </InputContainer>
  );
};

export const InputAddBtn = (props) => {
  const { name, label, full } = props;
  return (
    <InputContainer type={full ? "full" : "half"}>
      <Input type={props.date ? "date" : "text"} name={name} placeholder={label} required />
    </InputContainer>
  );
};

// export const PrimaryBtn = (props) => {
//   if (props.buttonOnly) {
//     return (
//       <FlexBetween>
//         <PrimaryButton backButton type="button" value="Back" onClick={props.onClick} />
//         <PrimaryButton type="button" value="Next" onClick={props.onClick} />
//       </FlexBetween>
//     );
//   } else if (props.center) {
//     return (
//       <FlexCenter>
//         <PrimaryButton animate type="button" value={props.value} onClick={props.onClick} />
//       </FlexCenter>
//     );
//   } else {
//     return (
//       <FlexBetween>
//         <PrimaryButton type="submit" value={props.value} />
//       </FlexBetween>
//     );
//   }
// };
