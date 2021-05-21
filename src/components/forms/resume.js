import React, { useContext } from "react";
import {
  ResumeTitle,
  Resume,
  Icon,
  Sidebar,
  ResumeHeading,
  MainSection,
  ResumeCaption,
  ResumeDescription,
  ResumeItem,
  ResumeSubTitle,
  ResumeUsername,
  ResumeUserJob,
  ResumeIcon,
  ResumeBullets,
  ResumeList,
  FlexBetween,
  PrimaryButton,
  ContactIcon,
} from "../../styles/utilities";

import phoneImg from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";
import website from "../../assets/website.svg";
import location from "../../assets/map-marker.svg";
import { FormContext } from "./formContext";
import { dateConverter } from "../reusable";
export const ResumeTemplate = (props) => {
  const { state, switchPage } = useContext(FormContext);
  const { firstName, lastName, email, phone, address, zipcode, city, jobName } = state.personal;
  let photo = state.photoURL;
  if (photo === "") {
    photo = "https://picsum.photos/200";
  }
  return (
    <React.Fragment>
      <Resume>
        <Sidebar>
          <ResumeUsername borderBottom>
            {firstName} {lastName}
          </ResumeUsername>
          <ResumeUserJob>{jobName}</ResumeUserJob>
          <ResumeIcon src={photo} />

          <ResumeItem contact>
            <ResumeHeading borderBottom>Contact</ResumeHeading>
            <ResumeList>
              <ContactItem breakAll src={location}>
                {address}, {city}, {zipcode}
              </ContactItem>
              <ContactItem src={phoneImg}>{formatPhoneNumber(phone)}</ContactItem>
              <ResumeBullets breakAll>
                <ContactIcon smallIcon src={mail} />
                {email}
              </ResumeBullets>
            </ResumeList>
          </ResumeItem>
          <ResumeItem noMargin skills>
            <ResumeHeading borderBottom>Skills</ResumeHeading>
            <ResumeList>
              {state.skills.map((item) => {
                return <ResumeBullets>{item.text}</ResumeBullets>;
              })}
            </ResumeList>
          </ResumeItem>
          <ResumeItem noMargin interests>
            <ResumeHeading borderBottom>Interests</ResumeHeading>
            <ResumeList>
              {state.interests.map((item) => {
                return <ResumeBullets>{item.text}</ResumeBullets>;
              })}
            </ResumeList>
          </ResumeItem>
        </Sidebar>

        <MainSection>
          <ResumeTitle>Experience</ResumeTitle>
          {state.expArray.map((item) => {
            return <ResumeExpList data={item} key={item.id} />;
          })}
          <ResumeTitle>Education</ResumeTitle>
          {state.eduArray.map((item) => {
            return <ResumeEduList data={item} key={item.id} />;
          })}
        </MainSection>
      </Resume>
      <FlexBetween>
        <PrimaryButton
          backButton
          type="button"
          value="Back"
          onClick={(e) => switchPage(e, "resumeTemplate", false)}
        />
      </FlexBetween>
    </React.Fragment>
  );
};

function formatPhoneNumber(phoneNumberString) {
  const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    const intlCode = match[1] ? "+1 " : "";
    return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
  }
  return null;
}

const ResumeExpList = (props) => {
  const { companyName, startDate, endDate, jobName, location, description } = props.data;

  return (
    <ResumeItem>
      <ResumeSubTitle>{jobName}</ResumeSubTitle>
      <ResumeCaption>
        {companyName} / {location} / {dateConverter(startDate)} - {dateConverter(endDate)}
      </ResumeCaption>
      <ResumeDescription>{description}</ResumeDescription>
    </ResumeItem>
  );
};

const ResumeEduList = (props) => {
  const { educationName, startDate, endDate, degree, location, id } = props.data;
  return (
    <ResumeItem>
      <ResumeSubTitle>{degree}</ResumeSubTitle>
      <ResumeCaption>
        {educationName} / {location} / {dateConverter(startDate)} - {dateConverter(endDate)}
      </ResumeCaption>
    </ResumeItem>
  );
};
const ContactItem = (props) => {
  return (
    <ResumeBullets>
      <ContactIcon src={props.src} />
      {props.children}
    </ResumeBullets>
  );
};
