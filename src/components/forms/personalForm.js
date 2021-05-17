import React, { useContext } from "react";
import { FormContext } from "./formContext";
import { InputText } from "../reusable";
import { Board, Title, Grid, PrimaryButton, FlexBetween } from "../../styles/utilities";
export const PersonalDetails = (props) => {
  return (
    <Board>
      <form onSubmit={(e) => props.onSubmit(e, "personal", true)}>
        <Grid>
          <Title>Personal Details</Title>
          <InputText full name="firstName" label="First Name" />
          <InputText full name="lastName" label="Last Name" />
          <InputText half name="email" label="Email" />
          <InputText half name="phone" label="Phone Number" />
          <InputText full name="address" label="Address" />
          <InputText half name="zipcode" label="Zip Code" />
          <InputText half name="city" label="City / Town" />
        </Grid>
        <FlexBetween>
          <PrimaryButton
            backButton
            type="button"
            value="Back"
            // onClick={(e) => props.onSubmit(e, "personal", false)}
          />
          <PrimaryButton
            type="button"
            value="Next"
            // onClick={(e) => props.onSubmit(e, "personal", true)}
          />
        </FlexBetween>
      </form>
    </Board>
  );
};
