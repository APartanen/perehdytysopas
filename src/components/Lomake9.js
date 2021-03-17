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
import { useHistory } from "react-router-dom";

const Lomake9 = (props) => {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const call = props.call;
  const tiedot = props.array;

  let kaikki = props.kaikki;
  const kaikkiCall = props.kaikkiCall;

  const [submitted, setSubmitted] = useState([]);
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");

  const history = useHistory();
  const submitAndNavigate = (e) => {
    submit(e);
    history.push('uusilomake5');
  }


  const submit = (event) => {
    event.preventDefault();

    const submitValues = [
      {
        työpaikan_tilat: field1,
        Turvallisuusasiat: field2,
      },
    ];
    //päivittää kaikkitiedot arrayn kohdan tiedot1
    kaikki[3] = submitValues;

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
    <div className="Lomake9">
      <div className="otsikko">
        <h2>Työympäristö</h2>
        <h6>
          Työpaikan tilat, työskentely-ympäristö, turvallisuusasiat, omaisuuden
          suojaus
        </h6>
      </div>

      <Form onSubmit={submit}>
        <Form.Group>
          <Form.Label>Työpaikan tilat, työskentely-ympäristö</Form.Label>
          <Button variant="success" onClick={handleShow1}>
            Vinkki
          </Button>
          <Modal show={show1} onHide={handleClose1}>
            <Modal.Header closeButton>
              <Modal.Title>Työpaikan tilat, työskentely-ympäristö</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                {" "}
                Esimerkiksi:
                <br />
                – työpaikan sijainti, kulunvalvonta, avaimet
                <br />
                – esimies, työtoverit, heidän tehtävänsä
                <br />
                – asiakkaat, muut sidosryhmät
                <br />
                – yksikön toimintatavat
                <br />
                – oma työpiste, kulkutiet, hätäpoistumistiet, sosiaalitilat
                <br />
                – pysäköinti, työpaikan liikennesäännöt
                <br />
                – siisteys, järjestys, hygienia
                <br />
                – ympäristöasiat, jätehuolto
                <br />
                – muut yksiköt ja niiden sijainti
                <br />
                – vaara-alueet
                <br />
                – työn vaarojen selvittäminen ja arviointi
                <br />– työsuojelun toimintaohjelma
              </p>
            </Modal.Body>
          </Modal>
          <Form.Control as="textarea" rows={6} onChange={handleChangeField1} />
        </Form.Group>
        <br />

        <Form.Group>
          <Form.Label>Turvallisuusasiat, omaisuuden suojaus</Form.Label>
          <Button variant="success" onClick={handleShow2}>
            Vinkki
          </Button>
          <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
              <Modal.Title>Turvallisuusasiat, omaisuuden suojaus</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                {" "}
                Esimerkiksi:
                <br />
                – omaisuuden suojaus, valvonta- ja/tai hälytysjärjestelmä
                <br />
                – toiminta uhka- ja väkivaltatilanteessa
                <br />
                – pelastussuunnitelma, toiminta tulipalossa ja muussa
                onnettomuudessa – ensiapukaappi, ensiapuohjeet, toiminta
                tapaturmassa ja sairauskohtauksessa
                <br />
                – puhelinnumerot hätätilanteissa
                <br />
                – turvallisuusilmoitukset
                <br />
                – matkustusohje
                <br />– lakisääteinen tapaturmavakuutus ja työtapaturmat
                opastettu tarkistettu
              </p>
            </Modal.Body>
          </Modal>
          <Form.Control as="textarea" rows={6} onChange={handleChangeField2} />
        </Form.Group>
        <br />

        <div className="links">
          <NavLink to="uusilomake3">
            <Button variant="success">Edellinen</Button>
          </NavLink>
          <NavLink to="uusilomake5">
            <Button variant="success" onClick={submitAndNavigate}>Seuraava</Button>
          </NavLink>
        </div>

      
      </Form>
    </div>
  );
};

export default Lomake9;
