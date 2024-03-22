import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./TopbarComponent";

const Meteoapp = () => {
  return (
    <>
      <Container className="meteo-app">
        <Navbar></Navbar>
      </Container>
    </>
  );
};
export default Meteoapp;
