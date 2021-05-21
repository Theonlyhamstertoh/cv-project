import React, { useContext } from "react";
import { FormContext } from "./formContext";
import { InputText } from "../reusable";
import { Board, Title, Grid, PrimaryButton, FlexBetween } from "../../styles/utilities";

export const PersonalDetails = (props) => {
  const { state, switchPage } = useContext(FormContext);
  const { firstName, lastName, email, phone, address, zipcode, city, jobName } = state.personal;
  return (
    <Board>
      <form>
        <Grid>
          <Title>Personal Details</Title>
          <InputText full personal value={firstName} id="firstName" label="First Name" />
          <InputText full personal value={lastName} id="lastName" label="Last Name" />
          <InputText half personal value={email} id="email" label="Email" />
          <InputText half personal value={phone} id="phone" label="Phone Number" />
          <InputText full personal value={address} id="address" label="Address" />
          <InputText half personal value={zipcode} id="zipcode" label="Zip Code" />
          <InputText half personal value={city} id="city" label="City / Town" />
          <InputText full personal value={jobName} id="jobName" label="Current Job Title" />
        </Grid>
        <FlexBetween>
          <PrimaryButton
            onClick={(e) => switchPage(e, "personal", false)}
            backButton
            type="button"
            value="Back"
          />
          <PrimaryButton
            onClick={(e) => switchPage(e, "personal", true)}
            type="button"
            value="Next"
          />
        </FlexBetween>
      </form>
    </Board>
  );
};
