import React, { useState } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
  Button,
  Modal,
} from "react-bootstrap";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Lomake3 = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  const [field6, setField6] = useState("");
  const [field7, setField7] = useState("");
  const [field8, setField8] = useState("");
  const [field9, setField9] = useState("");
  const [field10, setField10] = useState("");
  const [field11, setField11] = useState("");


  const history = useHistory();
  const submitAndNavigate = (e) => {
    submit(e);
    history.push('uusilomake6');
  }


  const submit = (event) => {
    event.preventDefault();

    const submitValues = [
      {
        nimike: field1,
        tehtävat: field2,
        suunnittelu: field3,
        merkitys: field4,
        työvalineet: field5,
        ergonomia: field6,
        elpyminen: field7,
        kehitys: field8,
        viat: field9,
        muutTilat: field10,
        lisätiedot: field11,
      },
    ];
    //päivittää kaikkitiedot arrayn kohdan tiedot1
    kaikki[4] = submitValues;

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

  return (
    <div className="Lomake3">
      <div className="otsikko">
        <h2>Työtehtävät</h2>
        <h6>Omat tehtävät</h6>
      </div>

      <Form onSubmit={submit}>
        <Form.Group>
          <Form.Label>Nimike</Form.Label>
          <Form.Control
            type="text"
            placeholder="Työntekijän nimike"
            onChange={handleChangeField1}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Keskeiset tehtävät ja vastuualueet</Form.Label>
          <Form.Control as="textarea" rows={2} onChange={handleChangeField2} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Oman työn suunnittelu, tavoitteet ja laatu</Form.Label>
          <Form.Control as="textarea" rows={2} onChange={handleChangeField3} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>
            Oman työn merkitys kokonaisuuteen, sisäinen yhteistyö
          </Form.Label>
          <Form.Control as="textarea" rows={2} onChange={handleChangeField4} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Koneet, laitteet, työvälineet, huolto</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Esim. käyttöohjeet, häiriötilanteet, apuvälineiden käyttö, henkilökohtaiset suojaimet jne."
            rows={2}
            onChange={handleChangeField5}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Työergonomia</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Työasennot ja -liikkeet, kalusteiden ja työvälineiden säätäminen"
            rows={2}
            onChange={handleChangeField6}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Elpyminen, työn vastaliikkeet</Form.Label>
          <Form.Control as="textarea" rows={2} onChange={handleChangeField7} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Oman tehtävän kehittäminen ja riskitekijät</Form.Label>
          <Form.Control as="textarea" rows={2} onChange={handleChangeField8} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Epäkohdista ja vioista ilmoittaminen</Form.Label>
          <Form.Control as="textarea" rows={2} onChange={handleChangeField9} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>
            Työskentely asiakkaan tai toisen työnantajan tiloissa
          </Form.Label>
          <Form.Control as="textarea" rows={2} onChange={handleChangeField10} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>
            Mistä ja/tai keneltä lisätietoa tehtävästä ja tukea työskentelyyn
          </Form.Label>
          <Form.Control as="textarea" rows={2} onChange={handleChangeField11} />
        </Form.Group>
     
        <br />
        <div className="links">
          <NavLink to="uusilomake4">
            <Button variant="success">Edellinen</Button>
          </NavLink>
          <NavLink to="uusilomake6">
            <Button variant="success" onClick={submitAndNavigate}>Seuraava</Button>
          </NavLink>
        </div>
      </Form>
    </div>
  );
};

export default Lomake3;
