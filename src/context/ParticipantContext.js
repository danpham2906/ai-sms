/* eslint-disable */
import React, { createContext, useState } from "react";
import data from '../data/ParticipantData';

export const ParticipantContext = createContext();

export const ParticipantProvider = ({children}) => {
    const [name, setName] = useState(data.participants[0].name);
    const [street, setStreet] = useState(data.participants[0].address.street);
    const [city, setCity] = useState(data.participants[0].address.city);
    const [state, setState] = useState(data.participants[0].address.state);
  
    return (
      <ParticipantContext.Provider
        value={{
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