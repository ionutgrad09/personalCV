import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Achievement from "./achievement/Achievement";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";
import Contact from "./contact/Contact";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <Greeting />
        <StackProgress />
        <Education />
        <WorkExperience />
        <Achievement />
        <Contact />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
};

export default Main;
