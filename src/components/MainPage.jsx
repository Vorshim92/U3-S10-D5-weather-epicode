import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "./TopbarComponent";
import City from "./CityComponent";

const Meteoapp = () => {
  const [inputSearchValue, setInputSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setInputSearchValue(event.target.value);
  };

  return (
    <>
      <Container className="meteo-app">
        <Navbar onSearchChange={handleSearchChange}></Navbar>
        <City query={inputSearchValue ? inputSearchValue : "Rome"}></City>
      </Container>
    </>
  );
};
export default Meteoapp;
