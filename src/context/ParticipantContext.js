/* eslint-disable */
import React, { createContext, useState } from "react";
import data from '../data/ParticipantData';

export const ParticipantContext = createContext();

export const ParticipantProvider = ({children}) => {
    const [list, setList] = useState([]);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
  
    return (
      <ParticipantContext.Provider
        value={{
          list, setList,
          id, setId,
          name, setName,
          street, setStreet,
          city, setCity,
          state, setState,
        }}
      >
        {children}
      </ParticipantContext.Provider>
    );
  };