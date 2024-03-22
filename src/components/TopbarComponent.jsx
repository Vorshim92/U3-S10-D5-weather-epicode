import React, { useEffect, useState } from "react";
import { Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <Row className="justify-content-between align-items-center">
        <Col xs="auto">
          <h3>Nome della città</h3>
        </Col>
        <Col xs="auto">
          <InputGroup>
            <FormControl placeholder="Cerca..." aria-label="Cerca" aria-describedby="basic-addon2" />
            <InputGroup.Append>
              <Button variant="outline-secondary">
                <BsSearch />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </>
  );
};
export default Navbar;
