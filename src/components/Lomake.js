import React, { useState } from "react";
import { Col, Row, Form, Button, Container, Modal } from "react-bootstrap";
import * as ReactBootstrap from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

// alustava lomake
const Lomake = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const call = props.call;
  const tiedot = props.array;

  let kaikki = props.kaikki;
  const kaikkiCall = props.kaikkiCall;

  console.log(kaikki);

  const [submitted, setSubmitted] = useState([]);
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [field4, setField4] = useState("");
  const [field5, setField5] = useState("");
  const [field6, setField6] = useState("");
  const [field7, setField7] = useState("");
  const [field8, setField8] = useState("");
  const [field9, setField9] = useState("");
  const [field10, setField10] = useState("");
  const [field11, setField11] = useState("");
  const [field12, setField12] = useState("");
  const [field13, setField13] = useState("");

  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  const history = useHistory();
  const submitAndNavigate = (e) => {
    submit(e);
    history.push('uusilomake2');
  }

  const submit = (event) => {
    event.preventDefault();

    const submitValues = [
      {
        perehdytettävä: field1,
        perehdyttäjä: field2,
        yrityksen_nimi: field3,
        yrityksen_osoite: field4,
        yrityksen_num: field5,
        yrityksen_faksi: field6,
        yrityksen_sposti: field7,
        yrityksen_verkko: field8,
        työpaikan_nimi: field9,
        työpaikan_katuosoite: field10,
        työpaikan_num: field11,
        työpaikan_sposti: field12,
        kuvaus: field13,
        alkupvm: date1,
        loppupvm: date2,
      },
    ];

    kaikki[0] = submitValues;
    //aiheuttaa mount errorin?
    setSubmitted(submitValues);
    call(submitValues);

    kaikkiCall(kaikki);

    //console.log(tiedot);
  };

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

  const handleChangeField5 = (event) => {
    event.preventDefault();
    setField5(event.target.value);
  };

  const handleChangeField6 = (event) => {
    event.preventDefault();
    setField6(event.target.value);
  };

  const handleChangeField7 = (event) => {
    event.preventDefault();
    setField7(event.target.value);
  };

  const handleChangeField8 = (event) => {
    event.preventDefault();
    setField8(event.target.value);
  };

  const handleChangeField9 = (event) => {
    event.preventDefault();
    setField9(event.target.value);
  };

  const handleChangeField10 = (event) => {
    event.preventDefault();
    setField10(event.target.value);
  };

  const handleChangeField11 = (event) => {
    event.preventDefault();
    setField11(event.target.value);
  };

  const handleChangeField12 = (event) => {
    event.preventDefault();
    setField12(event.target.value);
  };

  const handleChangeField13 = (event) => {
    event.preventDefault();
    setField13(event.target.value);
  };

  const handleDateChange1 = (event) => {
    const date = document.getElementById("startDate");
    setDate1(date.valueAsDate);
  };

  const handleDateChange2 = (event) => {
    const date = document.getElementById("endDate");
    setDate2(date.valueAsDate);
  };

  


  return (
    <div className="mx-auto my-2">
      <div className="otsikko">
        <h2>Perustiedot</h2>
        <h6>Yrityksen ja työpaikan yhteystiedot.</h6>
      </div>

      <hr />

      <Form onSubmit={submit}>
        <Row>
          <Col>
            <Form.Label>Perehdytettävä</Form.Label>
            <Form.Control
              type="text"
              placeholder="Perehdytettävän nimi"
              onChange={handleChangeField1}
              id="Perehdytettävän nimi"
            />
          </Col>
          <Col>
            <Form.Label>Perehdyttäjä</Form.Label>
            <Form.Control
              type="text"
              placeholder="Perehdyttäjän nimi"
              onChange={handleChangeField2}
              id="Perehdyttäjän nimi"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Label>Perehdytys alkaa</Form.Label>
            <Form.Control
              type="date"
              name="pvm"
              onChange={handleDateChange1}
              id="startDate"
            />
          </Col>
          <Col>
            <Form.Label>Perehdytys päättyy</Form.Label>
            <Form.Control
              type="date"
              name="pvm"
              onChange={handleDateChange2}
              id="endDate"
            />
          </Col>
        </Row>

        <hr />

        <Row>
          <Col>
            <Form.Label>
              Yrityksen nimi, osoite, puhelinnumero, faksi, sähköposti,
              verkkosivut
            </Form.Label>
          </Col>
          <Col>
            <Form.Label>
              Työpaikan nimi, osoite, puhelinnumero, sähköposti
            </Form.Label>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Yrityksen nimi"
                onChange={handleChangeField3}
                id="Yrityksen nimi"
              />
              <Form.Control
                type="text"
                placeholder="Yrityksen katuosoite"
                onChange={handleChangeField4}
                id="Yrityksen katuosoite"
              />
              <Form.Control
                type="text"
                placeholder="Yrityksen puhelinnumero"
                onChange={handleChangeField5}
                id="Yrityksen puhelinnumero"
              />
              <Form.Control
                type="text"
                placeholder="Yrityksen faksi"
                onChange={handleChangeField6}
                id="Yrityksen faksi"
              />
              <Form.Control
                type="text"
                placeholder="Yrityksen sähköposti"
                onChange={handleChangeField7}
                id="Yrityksen sähköposti"
              />
              <Form.Control
                type="text"
                placeholder="Yrityksen verkkosivut"
                onChange={handleChangeField8}
                id="Yrityksen verkkosivut"
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Control
              type="text"
              placeholder="Työpaikan nimi"
              onChange={handleChangeField9}
              id="Työpaikan nimi"
            />
            <Form.Control
              type="text"
              placeholder="Työpaikan katuosoite"
              onChange={handleChangeField10}
              id="Työpaikan katuosoite"
            />
            <Form.Control
              type="text"
              placeholder="Työpaikan puhelinnumero"
              onChange={handleChangeField11}
              id="Työpaikan puhelinnumero"
            />
            <Form.Control
              type="text"
              placeholder="Työpaikan sähköposti"
              onChange={handleChangeField12}
              id="Työpaikan sähköposti"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Label>Yrityksen Logo</Form.Label>
            <Form.File id="logo" label="Valitse yrityksen logo..." custom />

            <Form.Label>Yrityksen kuvaus</Form.Label>
            <Button variant="success" onClick={handleShow}>
              Vinkki
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Yrityksen kuvaus</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Mitä toivot uuden ihmisen tietävän yhtiöstä ja mitä
                  ehdottomasti pitää sisäistää?
                </p>
                <p>
                  Esimerkiksi:
                  <br />
                  – yrityksen toiminta-ajatus, liike- ja palveluidea
                  <br />
                  – yrityksen omistussuhteet
                  <br />
                  – asiakkaat ja heidän odotuksensa
                  <br />
                  – lisätietoa yrityksestä (esitteet, Internet, intranet jne.)
                  <br />– kilpailijat
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={handleClose}>
                  Sulje
                </Button>
              </Modal.Footer>
            </Modal>

            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleChangeField13}
              id="Yrityksen kuvaus"
            />
          </Col>
        </Row>

    

        <div className="links">
          <NavLink to="uusilomake2" onClick={submitAndNavigate}>
            <Button variant="success">Seuraava</Button>
          </NavLink>
        </div>
      </Form>
    </div>
  );
};

export default Lomake;
