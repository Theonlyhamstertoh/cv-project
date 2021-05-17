import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import uniqid from "uniqid";
import { ExpAndEdu } from "./components/forms/expAndEduController";
import { PersonalDetails } from "./components/forms/personalForm";
import { FormContextProvider, FormContext } from "./components/forms/formContext";
import { GlobalStyle } from "./styles/globalStyles";
import { lightTheme, darkTheme, ThemeSwitcher } from "./styles/themes";
import LightThemeButton from "./assets/Light.svg";
import DarkThemeButton from "./assets/Dark.svg";
import { Route, Switch } from "react-router";
import { useHistory } from "react-router-dom";
import { SideInfoForm } from "./components/forms/sideInfoForm";
import { ResumeTemplate } from "./components/forms/resume";
import { HomePage } from "./components/forms/home";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [personal, setPersonal] = useState();
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [sideInfo, setSideInfo] = useState({
    profile: "",
    skills: [],
    interests: [],
    social: {
      github: "",
      insta: "",
      facebook: "",
      linkedIn: "",
      youtube: "",
    },
    photo: "",
    website: "",
  });

  const themeToggler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const history = useHistory();
  const onSubmitHandler = (e, currentPage, toNextPage) => {
    e.preventDefault();
    updateState(e, currentPage);
    toNextPage === true
      ? history.push(defineNextPage(currentPage))
      : history.push(definePrevPage(currentPage));
  };

  const updateState = (e, currentSection) => {
    const data = new FormData(e.target);
    let currentState = [];
    switch (currentSection) {
      case "personal":
        currentState = [personal, setPersonal];
        addObject(currentState, data);
        return;
      case "experience":
        currentState = [experience, setExperience];
        addNewItemToArray(currentState, data);
        return;
      case "education":
        currentState = [education, setEducation];
        addNewItemToArray(currentState, data);
        return;
      case "SideInfo":
        currentState = [sideInfo, setSideInfo];
        addObject(currentState, data);
        return;
    }
  };
  const value = useContext(FormContext);

  return (
    <React.Fragment>
      <FormContextProvider value={"yo"}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyle />
          <ThemeSwitcher
            type="image"
            onClick={themeToggler}
            src={theme === "light" ? LightThemeButton : DarkThemeButton}
          />
          {/* <Switch> */}
          {/* <Route exact path="/">
              <HomePage />
            </Route> */}
          {/* <Route exact path="/personal"> */}
          {value}
          <PersonalDetails />
          {/* </Route> */}

          {/* <Route exact path="/expAndEdu">
              <ExpAndEdu />
            </Route>

            <Route exact path="/sideInfoForm">
              <SideInfoForm />
            </Route>

            <Route exact path="/resumeTemplate">
              <ResumeTemplate />
            </Route> */}
          {/* </Switch> */}
        </ThemeProvider>
      </FormContextProvider>
    </React.Fragment>
  );
};

const addObject = (currentState, data) => {
  const updatedObject = { ...currentState[0] };
  for (let [key, value] of data.entries()) {
    updatedObject[key] = value;
  }
  console.log(updatedObject);
  currentState[1](updatedObject);
};

const defineNextPage = (currentSection) => {
  switch (currentSection) {
    case "home":
      return "/personal";
    case "personal":
      return "/expAndEdu";
    case "expAndEdu":
      return "/sideInfoForm";
    case "sideInfoForm":
      return "/resumeTemplate";
  }
};

const definePrevPage = (currentSection) => {
  switch (currentSection) {
    case "expAndEdu":
      return "/personal";
    case "sideInfoForm":
      return "/expAndEdu";
    case "personal":
      return "/";
    case "resumeTemplate":
      return "/sideInfoForm";
  }
};

const addNewItemToArray = (currentState, data) => {
  const updatedObject = {};
  updatedObject.id = uniqid();
  for (let [key, value] of data.entries()) {
    updatedObject[key] = value;
  }
  currentState[1]((oldArray) => [...oldArray, updatedObject]);
  return;
};

export default App;
