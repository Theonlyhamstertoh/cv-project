import React, { createContext } from "react";

export const FormContext = createContext("alsdkjalkdjaasdasds");

export const INITIAL_STATE = {
  firstName: "Weibo",
  lastName: "Zhang",
  email: "theonlyhamstertoh@gmail.com",
  phone: "626-297-9032",
  address: "6258 Promisa Way",
  zipcode: "90630",
  city: "Cypress",
};

export const FormContextProvider = (props) => {
  return <FormContext.Provider>{props.children}</FormContext.Provider>;
};
