import React from "react";
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
} from "../../styles/utilities";

import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";
import website from "../../assets/website.svg";
import location from "../../assets/map-marker.svg";

export const ResumeTemplate = (props) => {
  return (
    <React.Fragment>
      <Resume>
        <Sidebar>
          <ResumeUsername borderBottom>Weibo Zhang</ResumeUsername>
          <ResumeUserJob>Web Designer</ResumeUserJob>
          <ResumeIcon src="https://picsum.photos/200" />

          <ResumeItem contact>
            <ResumeHeading borderBottom>Contact</ResumeHeading>
            <ResumeList>
              <ContactItem src={location}>
                9653 Devon St. Palos Verdes Peninsula, CA 90274
              </ContactItem>
              <ContactItem src={phone}>(626) 297 9032</ContactItem>
              <ContactItem src={mail}>theonlyhamstertoh@gmail.com</ContactItem>
              <ContactItem src={website}>www.weibozhang.com</ContactItem>
            </ResumeList>
          </ResumeItem>
          <ResumeItem noMargin skills>
            <ResumeHeading borderBottom>Skills</ResumeHeading>
            <ResumeList>
              <ResumeBullets>Adobe XD</ResumeBullets>
              <ResumeBullets>Communication</ResumeBullets>
              <ResumeBullets>Leadership</ResumeBullets>
              <ResumeBullets>Organization</ResumeBullets>
              <ResumeBullets>Perseverence</ResumeBullets>
              <ResumeBullets>Disicplined</ResumeBullets>
              <ResumeBullets>Teamwork</ResumeBullets>
            </ResumeList>
          </ResumeItem>
          <ResumeItem noMargin interests>
            <ResumeHeading borderBottom>Interests</ResumeHeading>
            <ResumeList>
              <ResumeBullets>Adobe XD</ResumeBullets>
              <ResumeBullets>Communication</ResumeBullets>
              <ResumeBullets>Leadership</ResumeBullets>
              <ResumeBullets>Organization</ResumeBullets>
              <ResumeBullets>Perseverence</ResumeBullets>
              <ResumeBullets>Disicplined</ResumeBullets>
              <ResumeBullets>Teamwork</ResumeBullets>
            </ResumeList>
          </ResumeItem>
        </Sidebar>
        <MainSection>
          <ResumeTitle>Experience</ResumeTitle>
          <ResumeItem>
            <ResumeSubTitle>GRAPHICS DESIGNER</ResumeSubTitle>
            <ResumeCaption>Watergate Corporation / London, UK / 2021 - 2022</ResumeCaption>
            <ResumeDescription>
              Input fields. Text areas. Radio buttons and checkboxes. These are some of the main
              interaction points we, as developers, have with our users. We put them front and
              center, users fill them out as best as they can, and with any luck, they’ll send it
              back to you without any validation errors. Form handling is an integral part of a
              large number of web apps, and it’s one of the things React does best. You have a lot
              of freedom to implement and control those input controls how you want, and there are
              plenty of ways to achieve the same goal. But is there a best practice? Is there a best
              way to do things?
            </ResumeDescription>
          </ResumeItem>
          <ResumeItem>
            <ResumeSubTitle>GRAPHICS DESIGNER</ResumeSubTitle>
            <ResumeCaption>Watergate Corporation / London, UK / 2021 - 2022</ResumeCaption>
            <ResumeDescription>
              Input fields. Text areas. Radio buttons and checkboxes. These are some of the main
              interaction points we, as developers, have with our users. We put them front and
              center, users fill them out as best as they can, and with any luck, they’ll send it
              back to you without any validation errors. Form handling is an integral part of a
              large number of web apps, and it’s one of the things React does best. You have a lot
              of freedom to implement and control those input controls how you want, and there are
              plenty of ways to achieve the same goal. But is there a best practice? Is there a best
              way to do things?
            </ResumeDescription>
          </ResumeItem>
          <ResumeItem>
            <ResumeSubTitle>GRAPHICS DESIGNER</ResumeSubTitle>
            <ResumeCaption>Watergate Corporation / London, UK / 2021 - 2022</ResumeCaption>
            <ResumeDescription>
              Input fields. Text areas. Radio buttons and checkboxes. These are some of the main
              interaction points we, as developers, have with our users. We put them front and
              center, users fill them out as best as they can, and with any luck, they’ll send it
              back to you without any validation errors. Form handling is an integral part of a
              large number of web apps, and it’s one of the things React does best. You have a lot
              of freedom to implement and control those input controls how you want, and there are
              plenty of ways to achieve the same goal. But is there a best practice? Is there a best
              way to do things?
            </ResumeDescription>
          </ResumeItem>
          <ResumeTitle>Education</ResumeTitle>
          <ResumeItem>
            <ResumeSubTitle>Bachelor of Creative Arts & Design</ResumeSubTitle>
            <ResumeCaption>Watergate Corporation / London, UK / 2021 - 2022</ResumeCaption>
          </ResumeItem>
          <ResumeItem>
            <ResumeSubTitle>Bachelor of Creative Arts & Design</ResumeSubTitle>
            <ResumeCaption>Watergate Corporation / London, UK / 2021 - 2022</ResumeCaption>
          </ResumeItem>
          <ResumeItem>
            <ResumeSubTitle>Bachelor of Creative Arts & Design</ResumeSubTitle>
            <ResumeCaption>Watergate Corporation / London, UK / 2021 - 2022</ResumeCaption>
          </ResumeItem>
        </MainSection>
      </Resume>
      <FlexBetween>
        <PrimaryButton
          backButton
          type="button"
          value="Back"
          onClick={(e) => props.onSubmit(e, "resumeTemplate", false)}
        />
      </FlexBetween>
    </React.Fragment>
  );
};

const ContactItem = (props) => {
  return (
    <ResumeBullets small>
      <ResumeIcon smallIcon src={props.src} />
      {props.children}
    </ResumeBullets>
  );
};
