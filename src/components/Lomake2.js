import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import "./Lomake2.css";
import { Form, Dropdown, Modal, Button, Col } from "react-bootstrap";
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

const Lomake2 = (props) => {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

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
  const [check5, setCheck5] = useState("");

  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  let kaikki = props.kaikki;
  const kaikkiCall = props.kaikkiCall;


  const history = useHistory();
  const submitAndNavigate = (e) => {
    submit(e);
    history.push('uusilomake4');
  }


  const submit = (event) => {
    event.preventDefault();

    const submitValues = [
      {
        tunnit: field1,
        palkka: field2,
        työsuhde: field3,
        työterveys: field4,
        box1: check1,
        box2: check2,
        box3: check3,
        box4: check4,
        box5: check5,
        alkupvm: date1,
        loppupvm: date2,
      },
    ];

    //päivittää kaikkitiedot arrayn kohdan tiedot1
    kaikki[2] = submitValues;

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

  const handleChangeField3 = (event) => {
    event.preventDefault();
    setField3(event.target.value);
  };

  const handleChangeField4 = (event) => {
    event.preventDefault();
    setField4(event.target.value);
  };

  //Checkboxit
  const handleChangeCheck1 = (event) => {
    const box = document.getElementById("Määräaikainen vaihtoehto");
    if (box.checked == true) {
      setCheck1(event.target.id);
    } else if (box.checked == false) {
      setCheck1("");
    }
  };

  const handleChangeCheck2 = (event) => {
    const box = document.getElementById("Toistaiseksi voimassa oleva");
    if (box.checked == true) {
      setCheck2(event.target.id);
    } else if (box.checked == false) {
      setCheck2("");
    }
  };

  const handleChangeCheck3 = (event) => {
    const box = document.getElementById("Tarvittaessa töihin kutsuttava");
    if (box.checked == true) {
      setCheck3(event.target.id);
    } else if (box.checked == false) {
      setCheck3("");
    }
  };

  const handleChangeCheck4 = (event) => {
    const box = document.getElementById("Osa-aikainen");
    if (box.checked == true) {
      setCheck4(event.target.id);
    } else if (box.checked == false) {
      setCheck4("");
    }
  };

  const handleChangeCheck5 = (event) => {
    const box = document.getElementById("Kokoaikainen");
    if (box.checked == true) {
      setCheck5(event.target.id);
    } else if (box.checked == false) {
      setCheck5("");
    }
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
    <div>
      <div className="screen">
        <div className="otsikko">
          <h2>Työsopimus</h2>
          <h6>Työaika, työnkesto, sopimustyyppi.</h6>
        </div>
      </div>

      <Form style={styles.row} onSubmit={submit}>
        <label>Työsopimuksen tyyppi</label>

        <Form.Row className="form-group" className="tunnit1">
          <Col>
            {/**Voiko valita usean?*/}
            <Form.Check
              inline
              label="Määräaikainen vaihtoehto"
              type="checkbox"
              id="Määräaikainen vaihtoehto"
              onChange={handleChangeCheck1}
            />
            <Form.Check
              inline
              label="Toistaiseksi voimassa oleva"
              type="checkbox"
              id="Toistaiseksi voimassa oleva"
              onChange={handleChangeCheck2}
            />
            <Form.Check
              inline
              label="Tarvittaessa töihin kutsuttava"
              type="checkbox"
              id="Tarvittaessa töihin kutsuttava"
              onChange={handleChangeCheck3}
            />
          </Col>
        </Form.Row>
        <div className="form-group"></div>
        <div>
          <label>Työsopimuksen kesto</label>
        </div>

        <div className="form-group"></div>

        <div className="date">
          <div>
            <Form.Label>Työ alkaa</Form.Label>
            <Form.Control
              type="date"
              name="pvm"
              onChange={handleDateChange1}
              id="startDate"
            />
          </div>
          <div>
            <Form.Label>Työ päättyy</Form.Label>
            <Form.Control
              type="date"
              name="pvm"
              onChange={handleDateChange2}
              id="endDate"
            />
          </div>
        </div>

        <div className="form-group"></div>
        {/**
         <formi className="tunnit1">
          <div className="form-group" className="tunnit2">
            <label>
              Tuntien määrä / viikko
            </label>

            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder=""
              onChange={handleChangeField1}
            ></input>
          </div>
        </formi>
 */}
        <Form.Row>
          <Form.Label>Tuntien määrä / viikko</Form.Label>
          <Form.Control as="textarea" rows={1} onChange={handleChangeField1} />
        </Form.Row>

        <div className="form-group"></div>

        <label>Työaika</label>
        <br></br>

        <Form.Row className="form-group" className="tunnit1">
          <Col>
            <Form.Check
              inline
              label="Osa-aikainen"
              type="checkbox"
              id="Osa-aikainen"
              onChange={handleChangeCheck4}
            />
            <Form.Check
              inline
              label="Kokoaikainen"
              type="checkbox"
              id="Kokoaikainen"
              onChange={handleChangeCheck5}
            />
          </Col>
        </Form.Row>

        <div className="form-group"></div>

        <Form.Group>
          <Form.Label>Palkka-asiat</Form.Label>
          <Button variant="success" onClick={handleShow1}>
            Vinkki
          </Button>
          <Modal show={show1} onHide={handleClose1}>
            <Modal.Header closeButton>
              <Modal.Title>Palkka</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                {" "}
                Esimerkiksi:
                <br />
                – palkan määräytyminen
                <br />
                – palkka ja palkanmaksu
                <br />
                – lisät, sairausajan palkka
                <br />
                – loma-ajan palkka, lomaraha ja -korvaukset
                <br />
                – verokortti
                <br />
                – luontaisedut
                <br />– matkakulut
              </p>
            </Modal.Body>
          </Modal>
          <Form.Control as="textarea" rows={6} onChange={handleChangeField2} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Työsuhteen päättyminen</Form.Label>
          <Button variant="success" onClick={handleShow2}>
            Vinkki
          </Button>
          <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
              <Modal.Title>Työsuhteen päättyminen</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                {" "}
                Esimerkiksi:
                <br />
                – irtisanomisaika
                <br />
                – vuosilomakorvaus
                <br />
                – lopputilin maksaminen
                <br />
                – työtodistus
                <br />
              </p>
            </Modal.Body>
          </Modal>
          <Form.Control as="textarea" rows={6} onChange={handleChangeField3} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Työterveyshuolto</Form.Label>
          <Button variant="success" onClick={handleShow3}>
            Vinkki
          </Button>
          <Modal show={show3} onHide={handleClose3}>
            <Modal.Header closeButton>
              <Modal.Title>Työterveyshuolto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                {" "}
                Esimerkiksi:
                <br />
                - työterveyshuollon palvelut, työhöntulotarkastus
                <br />
                – työpaikkaselvitys
                <br />– terveystarkastukset erityistä sairastumisen vaaraa
                aiheuttavat työt
              </p>
            </Modal.Body>
          </Modal>
          <Form.Control as="textarea" rows={6} onChange={handleChangeField4} />
        </Form.Group>
        <br />

        <div className="links">
          <NavLink to="uusilomake2">
            <Button variant="success">Edellinen</Button>
          </NavLink>
          <NavLink to="uusilomake4">
            <Button variant="success" onClick={submitAndNavigate}>Seuraava</Button>
          </NavLink>
        </div>


      </Form>
    </div>
  );
};
export default Lomake2;