import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Lomake5 = (props) => {
  const call = props.call;
  const tiedot = props.array;

  let kaikki = props.kaikki;
  const kaikkiCall = props.kaikkiCall;

  const [submitted, setSubmitted] = useState([]);
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [field4, setField4] = useState("");
  const [field5, setField5] = useState("");

  const history = useHistory();
  const submitAndNavigate = (e) => {
    submit(e);
    history.push('uusilomake8');
  }

  const submit = (event) => {
    event.preventDefault();

    const submitValues = [
      {
        virkistys: field1,
        työkyky: field2,
        vakuutus: field3,
        henkilöstoedut: field4,
        asuminen: field5,
      },
    ];
    //päivittää kaikkitiedot arrayn kohdan tiedot1
    kaikki[6] = submitValues;

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

  const handleChangeField5 = (event) => {
    event.preventDefault();
    setField5(event.target.value);
  };

  return (
    <div className="mx-auto my-2">
      <div className="otsikko">
        <h2>Muut asiat</h2>
        <h6>Täydennä tarpeen mukaan.</h6>
      </div>

      <Form onSubmit={submit}>
        <Form.Group>
          <Form.Label>Harrastus- ja virkistysmahdollisuudet</Form.Label>
          <Form.Control as="textarea" rows={2} onChange={handleChangeField1} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Työ- ja toimintakyvyn ylläpito</Form.Label>
          <Form.Control as="textarea" rows={2} onChange={handleChangeField2} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Vakuutus- ja eläkeasiat</Form.Label>
          <Form.Control as="textarea" rows={2} onChange={handleChangeField3} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Muut henkilöstöpalvelut ja -edut</Form.Label>
          <Form.Control as="textarea" rows={2} onChange={handleChangeField4} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Työsuhdeasuminen</Form.Label>
          <Form.Control as="textarea" rows={2} onChange={handleChangeField5} />
        </Form.Group>
     
        <br />
        <div className="links">
          <NavLink to="uusilomake6">
            <Button variant="success">Edellinen</Button>
          </NavLink>
          <NavLink to="uusilomake8">
            <Button variant="success" onClick={submitAndNavigate}>Seuraava</Button>
          </NavLink>
        </div>
      </Form>
    </div>
  );
};

export default Lomake5;