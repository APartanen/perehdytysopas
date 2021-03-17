
import React, { useState } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
  Button,
  Modal,
  Col,
} from "react-bootstrap";
import "../App.css";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";

const Lomake1 = (props) => {
  const call = props.call;
  const tiedot = props.array;

  let kaikki = props.kaikki;
  const kaikkiCall = props.kaikkiCall;

  const [submitted, setSubmitted] = useState([]);
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


  const history = useHistory();
  const submitAndNavigate = (e) => {
    submit(e);
    history.push('uusilomake3');
  }

  const submit = (event) => {
    event.preventDefault();

    const submitValues = [
      {
        kenttä1: field1,
        kenttä2: field2,
      },
    ];

    //päivittää kaikkitiedot arrayn kohdan tiedot1
    kaikki[1] = submitValues;

    //ignore
    setSubmitted(submitValues);
    call(submitValues);

    //setKaikkitiedot kutsu - kopio kaikki tiedot kohdalla, missä on muokattu arrayn kohtaa, muut jätetty rauhaan
    kaikkiCall(kaikki);
  };

  const handleChangeField1 = (event) => {
    event.preventDefault();
    setField1(event.target.value);
  };

  const handleChangeField2 = (event) => {
    event.preventDefault();
    setField2(event.target.value);
  };

  return (
    <div className="Lomake1">
      <div className="otsikko">
        <h2>Yrityksen organisaatio ja toimintatavat</h2>
        <h6>
          Yrityksen organisaatio ja henkilöstö sekä toimintatavat yrityksessä.
        </h6>
      </div>

      <Form onSubmit={submit}>
        <Form.Group>
          <Form.Label>Yrityksen organisaatio ja henkilöstö</Form.Label>
          <Button variant="success" onClick={handleShow1}>
            Vinkki
          </Button>
          <Modal show={show1} onHide={handleClose1}>
            <Modal.Header closeButton>
              <Modal.Title>Yrityksen organisaatio ja henkilöstö</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                {" "}
                Esimerkiksi:
                <br />
                – organisaatio ja toimipisteet
                <br />
                – johto, esimiehet, henkilöstö
                <br />
                – eri yksiköt, keskeiset henkilöt eri yksiköissä
                <br />
                – työnopastaja ja hänen sijaisensa
                <br />
                – yhteistoiminta- ja työsuojeluorganisaatio sekä -henkilöt
                <br />
                - luottamushenkilöt
                <br />
                - työsuojelupäällikkö
                <br />
                - työsuojeluvaltuutettu
                <br />– aloitetoimikunta
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose1}>
                Sulje
              </Button>
            </Modal.Footer>
          </Modal>
          <Form.Control as="textarea" rows={6} onChange={handleChangeField1} />
        </Form.Group>
        <br />

        <Form.Group>
          <Form.Label>Toimintatavat yrityksessä</Form.Label>
          <Button variant="success" onClick={handleShow2}>
            Vinkki
          </Button>
          <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
              <Modal.Title>Toimintatavat yrityksessä</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                {" "}
                Esimerkiksi:
                <br />
                – yrityksen arvot (mitkä ovat yrityksessä tärkeitä asioita?)
                <br />
                – mitä henkilöstöltä odotetaan?
                <br />
                – ulkoinen olemus, käytös, työasu, pukeutuminen, jalkineet
                <br />
                – asiakaspalvelu ja myyntityö
                <br />
                – puhelimen ja tietotekniikan käyttö (työasiat,
                tietoturvallisuus, yksityisasiat)
                <br />
                – vaitiolovelvollisuus (yrityksen asiat ja asiakkaiden asiat),
                salassapito
                <br />
                – täsmällisyyden merkitys
                <br />– aloitetoiminta
              </p>
              {/* placeholder video / demo videolle*/}
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  controls={true}
                  url="https://www.youtube.com/watch?v=Sdn8SNYyjxc"
                  width="100%"
                  height="100%"
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose2}>
                Sulje
              </Button>
            </Modal.Footer>
          </Modal>
          <Form.Control as="textarea" rows={6} onChange={handleChangeField2} />
        </Form.Group>
        <br />

        <div className="links">
          <NavLink to="uusilomake1">
            <Button variant="success">Edellinen</Button>
          </NavLink>
          <NavLink to="uusilomake3">
            <Button variant="success" onClick={submitAndNavigate}>Seuraava</Button>
          </NavLink>
        </div>

    
      </Form>
    </div>
  );
};

export default Lomake1;
