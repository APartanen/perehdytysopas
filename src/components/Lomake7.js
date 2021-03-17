import { Col, Row, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
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
const Lomake7 = (props) => {
  const call = props.call;
  const tiedot = props.array;
  
 

  const [submitted, setSubmitted] = useState([]);
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [field4, setField4] = useState("");
  const [check1, setCheck1] = useState("");
  const [check2, setCheck2] = useState("");
  const [check3, setCheck3] = useState("");
  const [check4, setCheck4] = useState("");
  const [textarea, setTA] = useState("");


  const submit = (event) => {
    event.preventDefault();

    const submitValues = [
      {
        kenttä1: field1,
        kenttä2: field2,
        kenttä3: field3,
        kenttä4: field4,
        box1: check1,
        box2: check2,
        box3: check3,
        box4: check4,
        textarea1: textarea,
      },
    ];
    

      //ignore 
      setSubmitted(submitValues);
      call(submitValues);
  
    
  };

  //tallentaa kenttään kirjoitetun arvon
  const handleChangeField1 = (event) => {
    event.preventDefault();
    setField1(event.target.value);
  };

  const handleChangeField2 = (event) => {
    event.preventDefault();
    setField2(event.target.value);
  };

  const handleChangeField3 = (event) => {
    event.preventDefault();
    setField3(event.target.value);
  };

  const handleChangeField4 = (event) => {
    event.preventDefault();
    setField4(event.target.value);
  };
  //Text arean onchange
  const handleChangeTA = (event) => {
    event.preventDefault();
    setTA(event.target.value);
  };

  //Checkboxit
  const handleChangeCheck1 = (event) => {
    const box = document.getElementById("Pitkä vaihtoehto");
    if (box.checked == true) {
      setCheck1(event.target.id);
    } else if (box.checked == false) {
      setCheck1("");
    }
  };

  const handleChangeCheck2 = (event) => {
    const box = document.getElementById("Keskipitkä vaihtoehto");
    if (box.checked == true) {
      setCheck2(event.target.id);
    } else if (box.checked == false) {
      setCheck2("");
    }
  };

  const handleChangeCheck3 = (event) => {
    const box = document.getElementById("Lyhyt vaihtoehto");
    if (box.checked == true) {
      setCheck3(event.target.id);
    } else if (box.checked == false) {
      setCheck3("");
    }
  };

  const handleChangeCheck4 = (event) => {
    const box = document.getElementById("Ei vaihtoehtoa");
    if (box.checked == true) {
      setCheck4(event.target.id);
    } else if (box.checked == false) {
      setCheck4("");
    }
  };

  return (
    <div className="mx-auto my-2">
      <h2>PDF Demo</h2>
      <Form style={styles.row} onSubmit={submit}>
        <Form.Group id="textbox1">
          <Form.Row>
            <Col>
              <Form.Label>Lorem ipsum dolor sit?</Form.Label>
              <Form.Control
                type="text"
                placeholder="field1"
                onChange={handleChangeField1}
              />
            </Col>

            <Col>
              <Form.Label>Lorem ipsum dolor sit?</Form.Label>
              <Form.Control
                type="text"
                placeholder="field2"
                onChange={handleChangeField2}
              />
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Label>Lorem ipsum dolor sit?</Form.Label>
              <Form.Control
                type="text"
                placeholder="field3"
                onChange={handleChangeField3}
              />
            </Col>

            <Col>
              <Form.Label>Lorem ipsum dolor sit?</Form.Label>
              <Form.Control
                type="text"
                placeholder="field4"
                onChange={handleChangeField4}
              />
            </Col>
          </Form.Row>

          {/**toimii spacerina */}
          <Form.Row>
            <Col>
              <Form.Label></Form.Label>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              {/**Voiko valita usean?*/}
              <Form.Check
                inline
                label="Pitkä vaihtoehto"
                type="checkbox"
                id="Pitkä vaihtoehto"
                onChange={handleChangeCheck1}
              />
              <Form.Check
                inline
                label="Keskipitkä vaihtoehto"
                type="checkbox"
                id="Keskipitkä vaihtoehto"
                onChange={handleChangeCheck2}
              />
              <Form.Check
                inline
                label="Lyhyt vaihtoehto"
                type="checkbox"
                id="Lyhyt vaihtoehto"
                onChange={handleChangeCheck3}
              />
              <Form.Check
                inline
                label="Ei vaihtoehtoa"
                type="checkbox"
                id="Ei vaihtoehtoa"
                onChange={handleChangeCheck4}
              />
            </Col>
          </Form.Row>

          <Form.Row id="textarea">
            <Form.Label>Lorem ipsum</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={handleChangeTA} />
          </Form.Row>

          {/**toimii spacerina */}
          <Form.Row>
            <Col>
              <Form.Label></Form.Label>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Button variant="primary" type="submit">
                {" "}
                Submit{" "}
              </Button>
            </Col>
          </Form.Row>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Lomake7;
