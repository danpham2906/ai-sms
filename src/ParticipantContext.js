/* eslint-disable */
import React, { createContext, useState } from "react";

export const ParticipantContext = createContext();

export const ParticipantProvider = ({children}) => {
    const [name, setName] = useState("Jocelynn Bucken");
  
    return (
      <ParticipantContext.Provider
        value={{
          name,
          setName
        }}
      >
        {children}
      </ParticipantContext.Provider>
    );
  };