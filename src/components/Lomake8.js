import React from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const styles = {
  grid: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  row: {
    marginLeft: 15,
    marginRight: 5,
  },
  col: {
    paddingLeft: 5,
    paddingRight: 5,
  },
};

// alustava lomake
const Lomake8 = (props) => {
  const tiedot = props.array;

  return (
    <div className="mx-auto my-2">
      <h2>Kooste tiedoista:</h2>

      {console.log("lomake8 object:", tiedot)}
    </div>
  );
};

export default Lomake8;
