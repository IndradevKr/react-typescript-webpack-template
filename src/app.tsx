import React from "react";
import "../asset/css/styles.css";
import ReactLogo from "../asset/images/react-logo.png";
import SantaLogo from "../asset/images/santa.svg";

export const App = () => {
  return (
    <>
      <img src={SantaLogo} alt="santa-logo" height="50" width="50"/>
      <div className="justify-content-center">
        <img src={ReactLogo} alt="react-logo" width="200" height="200" />
        <h2>Hello World!</h2>
      </div>
    </>
  )
};
