import React, { useContext, useState } from "react";
import {
  Board,
  ItemContainer,
  SubTitle,
  Title,
  Icon,
  PrimaryButton,
  FlexBetween,
  Grid,
  FlexEnd,
  FileIcon,
  SecondaryButton,
  InputContainer,
  Asterisk,
  Input,
} from "../../styles/utilities";
import { InputText } from "../reusable";
import saveButton from "../../assets/save.svg";
import trashcanButton from "../../assets/trashcan.svg";
import { FormContext } from "./formContext";
import uniqid from "uniqid";

export const SideInfoForm = (props) => {
  const { state, switchPage, dispatch } = useContext(FormContext);
  const [skillsText, setSkills] = useState("");
  const [interestText, setInterests] = useState("");

  const saveTask = (e, category) => {
    if (e.target.files && category === "photoURL") {
      const [file] = e.target.files;
      if (!file) return;
      const url = URL.createObjectURL(file);
      dispatch({ photo: "true", url, category });
      return;
    }

    const text = category === "skills" ? skillsText : interestText;
    const data = { id: uniqid(), text };
    if (text === "") return;
    dispatch({ category, sideInfo: true, data });
    category === "skills" ? setSkills("") : setInterests("");
  };

  const onDelete = (category, id) => {
    dispatch({ category, deleteFromArray: true, id });
  };
  const onChange = (e) => {
    if (e.target.id === "skills") {
      setSkills(e.target.value);
    } else {
      setInterests(e.target.value);
    }
  };
  return (
    <Board>
      <Title>Skills</Title>

      {state.skills.map((item) => (
        <Item key={item.id} item={item} skills onDelete={onDelete} />
      ))}

      <FlexEnd>
        <InputTask
          type="text"
          label="Adds A Skill"
          value={skillsText}
          id="skills"
          onChange={onChange}
        />
        <Icon save side src={saveButton} alt="save" onClick={(e) => saveTask(e, "skills")} />
      </FlexEnd>

      <Title>Interests</Title>
      {state.interests.map((item) => (
        <Item key={item.id} item={item} onDelete={onDelete} />
      ))}
      <FlexEnd>
        <InputTask
          type="text"
          value={interestText}
          label="Adds A Interest"
          id="interests"
          onChange={onChange}
        />
        <Icon save side onClick={(e) => saveTask(e, "interests")} src={saveButton} alt="save" />
      </FlexEnd>

      <Title>Photo</Title>
      <SecondaryButton as="label" htmlFor="file">
        <input
          id="file"
          type="file"
          accept="image/png, image/jpeg, image/gif"
          style={{ display: "none" }}
          onChange={(e) => saveTask(e, "photoURL")}
        />
        Upload Photo
      </SecondaryButton>

      <FileIcon style={{ display: "block", marginTop: "20px" }} src={state.photoURL} />

      <FlexBetween>
        <PrimaryButton
          backButton
          type="button"
          value="Back"
          onClick={(e) => switchPage(e, "sideInfoForm", false)}
        />
        <PrimaryButton
          type="button"
          value="Next"
          onClick={(e) => switchPage(e, "sideInfoForm", true)}
        />
      </FlexBetween>
    </Board>
  );
};

export const Item = (props) => {
  const category = props.skills === true ? "skills" : "interests";
  return (
    <ItemContainer flex>
      <SubTitle>{props.item.text}</SubTitle>
      <Icon
        noMargin
        smaller
        trash
        src={trashcanButton}
        onClick={(e) => props.onDelete(category, props.item.id)}
        alt={"trashcan"}
      />
    </ItemContainer>
  );
};

export const InputTask = (props) => {
  const { id, label, onChange, value } = props;

  return (
    <InputContainer>
      <label htmlFor={id}>
        {label}
        <Asterisk>*</Asterisk>
      </label>
      <Input type="text" value={value} id={id} onChange={onChange} />
    </InputContainer>
  );
};
