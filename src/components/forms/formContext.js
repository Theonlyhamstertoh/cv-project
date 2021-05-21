import React, { createContext, useContext } from "react";

export const FormContext = createContext({});

export const INITIAL_STATE = {
  personal: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipcode: "",
    city: "",
    jobName: "",
  },
  exp: {
    jobName: "",
    startDate: "",
    endDate: "",
    companyName: "",
    location: "",
    description: "",
  },
  edu: {
    degree: "",
    startDate: "",
    endDate: "",
    educationName: "",
    location: "",
  },
  skills: [],
  interests: [],
  eduArray: [],
  expArray: [],
  photoURL: "",
};

export const TEMPLATE_STATE = {
  personal: {
    firstName: "Hok Pok ",
    lastName: "Lok",
    email: "hokpoklok@gmail.com",
    phone: "626-212-9172",
    address: "Antarctica 295 ",
    zipcode: "91235",
    city: "Freezo",
    jobName: "Web Designer",
  },
  exp: {
    jobName: "Graphics Designer",
    startDate: "2004-10-11",
    endDate: "2009-11-12",
    companyName: "asdasdasdasd",
    location: "Cypress",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    id: "",
  },
  edu: {
    degree: "Bachelor of Stealing",
    startDate: "1998-05-01",
    endDate: "2065-12-10",
    educationName: "Comma Te Bachelor",
    location: "NO NO NO",
  },
  skills: [],
  interests: [],
  photoURL: "",
  expArray: [
    {
      jobName: "Graphics Designer",
      startDate: "2004-10-11",
      endDate: "2009-11-12",
      companyName: "asdasdasdasd",
      location: "Cypress",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: "qj21js",
    },
    {
      jobName: "Graphics Designer",
      startDate: "2004-10-11",
      endDate: "2009-11-12",
      companyName: "asdasdasdasd",
      location: "Cypress",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: "1jnska",
    },
    {
      jobName: "Graphics Designer",
      startDate: "2004-10-11",
      endDate: "2009-11-12",
      companyName: "asdasdasdasd",
      location: "Cypress",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: "123jklx",
    },
  ],
  eduArray: [
    {
      degree: "Bachelor of Stealing1",
      startDate: "1998-05-01",
      endDate: "2065-12-10",
      educationName: ";laskd;aldka;sdlasdasdasdad",
      educationName: "Comma Te Bachelor",
      location: "New York Jersey, China",
      id: "l21k3jfncv",
    },
    {
      degree: "Bachelor of Stealing2",
      startDate: "1998-05-01",
      endDate: "2065-12-10",
      educationName: "Comma Te Bachelor",
      location: "New York Jersey, China",
      id: "l2123dsdf3jfncv",
    },
    {
      degree: "Bachelor of Stealing3",
      startDate: "1998-05-01",
      endDate: "2065-12-10",
      educationName: "Comma Te Bachelor",
      location: "New York Jersey, China",
      id: "lwwucscv",
    },
  ],
};
