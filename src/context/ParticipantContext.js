/* eslint-disable */
import React, { createContext, useState, useEffect } from "react";
import Axios from 'axios';
import data from '../data/ParticipantData';

export const ParticipantContext = createContext();

export const ParticipantProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [latestLocation, setLatestLocation] = useState([]);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    if (list != undefined) {
      if (list.length != 0 && name == "") {
        var firstParticipant = list[0];
        setName(firstParticipant.name);
        setId(firstParticipant.id);
        setLatestLocation(firstParticipant.latestLocation);
        if (firstParticipant.address) {
          setStreet(firstParticipant.address.street);
          setCity(firstParticipant.address.city);
          setState(firstParticipant.address.state);
        } else {
          setStreet("");
          setCity("");
          setState("");
        }
      }
    }
  }, [list]);

  useEffect(() => {
    getParticipantAPI();

    const intervalId = setInterval(() => {
      getParticipantAPI();
    }, 1000);
  }, []);

  function getParticipantAPI() {
    try {
      Axios.get('http://128.186.151.67:8080/api/nij/ai-sms/user-info/all', {}, {})
        .then(res => {
          var newParticipantArr = [];
          res.data.map((participant) => {
            newParticipantArr.push(participant);
          });
          setList(newParticipantArr);
        })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ParticipantContext.Provider
      value={{
        list, setList,
        id, setId,
        name, setName,
        latestLocation, setLatestLocation,
        street, setStreet,
        city, setCity,
        state, setState,
      }}
    >
      {children}
    </ParticipantContext.Provider>
  );
};