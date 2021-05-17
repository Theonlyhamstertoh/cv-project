import React from "react";

import { Input, InputContainer, Asterisk, SecondaryButton, TextArea } from "../styles/utilities";

import { format } from "date-fns";

export const dateConverter = (date) => {
  const dateArray = date.split("-");
  return format(new Date(dateArray[2], dateArray[1], dateArray[0]), "PPP");
};

export const SecondaryBtn = (props) => {
  return <SecondaryButton type="button" value={props.value} onClick={props.onClick} />;
};

export const InputText = ({ name, label, full, type }) => {
  return (
    <InputContainer type={full ? "full" : "half"}>
      <label htmlFor={name}>
        {label}
        <Asterisk>*</Asterisk>
      </label>
      <Input type={type ? "date" : "text"} id={name} name={name} required />
    </InputContainer>
  );
};

export const TextAreaBlock = (props) => {
  const { label, name } = props;

  return (
    <InputContainer type="full">
      <label htmlFor={name}>
        {label}
        <Asterisk>*</Asterisk>
      </label>
      <TextArea id={name} name={name} maxLength="700" required />
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
