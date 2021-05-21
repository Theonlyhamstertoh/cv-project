import React, { createContext, useContext, useReducer, useState } from "react";
import { ThemeProvider } from "styled-components";
import uniqid from "uniqid";
import { ExpAndEdu } from "./components/forms/expAndEduController";
import { PersonalDetails } from "./components/forms/personalForm";
import {
  FormContextProvider,
  FormContext,
  INITIAL_STATE,
  TEMPLATE_STATE,
} from "./components/forms/formContext";
import { GlobalStyle } from "./styles/globalStyles";
import { lightTheme, darkTheme, ThemeSwitcher } from "./styles/themes";
import LightThemeButton from "./assets/Light.svg";
import DarkThemeButton from "./assets/Dark.svg";
import { Route, Switch } from "react-router";
import { useHistory } from "react-router-dom";
import { SideInfoForm } from "./components/forms/sideInfoForm";
import { ResumeTemplate } from "./components/forms/resume";
import { HomePage } from "./components/forms/home";
import Particles from "react-particles-js";
import { Animation } from "./styles/utilities";
import ParticlesConfig from "./components/particlesjs-config.json";
const formReducer = (state, action) => {
  if (action.delete) {
    return {
      ...state,
      [action.category]: INITIAL_STATE[action.category],
    };
  }

  if (action.deleteFromArray) {
    return {
      ...state,
      [action.category]: state[action.category].filter((item) => item.id !== action.id),
    };
  }
  if (action.save) {
    console.log(action.data);
    return {
      ...state,
      [action.category]: state[action.category].concat(action.data),
      [action.form]: INITIAL_STATE[action.form],
    };
  }

  if (action.edit) {
    return {
      ...state,
      [action.category]: state[action.category].filter((item) => item !== action.data),
      [action.form]: action.data,
    };
  }

  if (action.photo) {
    return {
      ...state,
      [action.category]: action.url,
    };
  }

  if (action.sideInfo) {
    return {
      ...state,
      [action.category]: state[action.category].concat(action.data),
    };
  }
  return {
    ...state,
    [action.category]: {
      ...state[action.category],
      [action.id]: action.value,
      id: uniqid(),
    },
  };
};

const App = () => {
  const [theme, setTheme] = useState("light");
  const [experienceOn, setExperienceMode] = useState(false);
  const [educationOn, setEducationMode] = useState(false);
  const [expEdit, setExpEdit] = useState(false);
  const [eduEdit, setEduEdit] = useState(false);
  const [state, dispatch] = useReducer(formReducer, TEMPLATE_STATE);

  const themeToggler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const history = useHistory();
  const switchPage = (e, currentPage, toNextPage) => {
    e.preventDefault();
    toNextPage === true
      ? history.push(defineNextPage(currentPage))
      : history.push(definePrevPage(currentPage));
  };

  const handleChange = (e, category) => {
    const value = e.target.value;
    const id = e.target.id;

    dispatch({ value, id, category });
  };

  return (
    <React.Fragment>
      <Animation>
        <Particles params={ParticlesConfig} style={{ position: "fixed" }} />
      </Animation>

      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <FormContext.Provider
          value={{
            state,
            handleChange,
            switchPage,
            dispatch,
            expEdit,
            setExpEdit,
            eduEdit,
            setEduEdit,
          }}
        >
          <ThemeSwitcher
            type="image"
            onClick={themeToggler}
            src={theme === "light" ? LightThemeButton : DarkThemeButton}
          />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/personal">
              <PersonalDetails />
            </Route>

            <Route exact path="/expAndEdu">
              <ExpAndEdu
                exp={{ experienceOn, setExperienceMode }}
                edu={{ educationOn, setEducationMode }}
              />
            </Route>

            <Route exact path="/sideInfoForm">
              <SideInfoForm />
            </Route>

            <Route exact path="/resumeTemplate">
              <ResumeTemplate />
            </Route>
          </Switch>
        </FormContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
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
