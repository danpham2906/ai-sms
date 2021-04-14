/* eslint-disable */
import React, { createContext, useState } from "react";

export const TitleContext = createContext();

export const TitleProvider = ({children}) => {
  let currentTitle = window.location.href.split('/');
  currentTitle = currentTitle[currentTitle.length-1];
  if (currentTitle == "home") {
    currentTitle = "Home & Participant Selection";
  } else if (currentTitle == "apptask") {
    currentTitle = "App&Tasks or JOB";
  } else {
    currentTitle = currentTitle.charAt(0).toUpperCase() + currentTitle.slice(1);
  }

  const [name, setName] = useState(currentTitle);
  
  return (
      <TitleContext.Provider
        value={{
          name, setName,
        }}
      >
        {children}
      </TitleContext.Provider>
    );
  };