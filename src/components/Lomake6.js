import React, { useState } from "react";
import { Col, Row, Form, Button, Modal } from "react-bootstrap";
import * as ReactBootstrap from "react-bootstrap";
import { RiQuestionLine as Vinkki } from "react-icons/ri";
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

const Lomake6 = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const call = props.call;
  const tiedot = props.array;
  let kaikki = props.kaikki;
  const kaikkiCall = props.kaikkiCall;

  const [submitted, setSubmitted] = useState([]);
  const [check1, setCheck1] = useState("");
  const [check2, setCheck2] = useState("");
  const [check3, setCheck3] = useState("");
  const [check4, setCheck4] = useState("");
  const [check5, setCheck5] = useState("");
  const [check6, setCheck6] = useState("");
  const [check7, setCheck7] = useState("");
  const [check8, setCheck8] = useState("");

  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [field4, setField4] = useState("");
  const [field5, setField5] = useState("");
  const [field6, setField6] = useState("");
  const [field7, setField7] = useState("");

  const history = useHistory();
  const submitAndNavigate = (e) => {
    submit(e);
    history.push('uusilomake9');
  }


  const submit = (event) => {
    event.preventDefault();

    const submitValues = [
      {
        muut: field1,
        perehSuunnitelma: field2,
        nimi: field3,
        sposti: field4,
        puh: field5,
        salasana1: field6,
        salasana2: field7,
        box1: check1,
        box2: check2,
        box3: check3,
        box4: check4,
        box5: check5,
        box6: check6,
        box7: check7,
        box8: check8,
      },
    ];
    //päivittää kaikkitiedot arrayn kohdan tiedot1
    kaikki[7] = submitValues;

    //ignore
    setSubmitted(submitValues);
    call(submitValues);

    //setKaikkitiedot kutsu - kopio kaikki tiedot kohdalla, missä on muokattu arrayn kohtaa, muut jätetty rauhaan
    kaikkiCall(kaikki);
  };

  const handleChangeCheck1 = (event) => {
    const box = document.getElementById("verohallinto");
    if (box.checked == true) {
      setCheck1(
        "Ilmoittaudu Verohallinnon työnantajarekisteriin viimeistään silloin, kun palveluksessasi on vakinaisesti enemmän kuin yksi työntekijä. Ilmoittaudu myös silloin, kun palveluksessasi on vuoden aikana enemmän kuin viisi työntekijää, joiden suhde ei kestä koko vuotta."
      );
    } else if (box.checked == false) {
      setCheck1("");
    }
  };
  const handleChangeCheck2 = (event) => {
    const box = document.getElementById("vakuutukset");
    if (box.checked == true) {
      setCheck2(
        "Hoida pakolliset vakuutukset: työeläkevakuutus (TyEL), työtapaturma- ja ammattivakuutus, työntekijäin ryhmähenkivakuutus, työttömyysvakuutusmaksu ja työnantajan sairausvakuutusmaksu (entinen sosiaaliturvamaksu)."
      );
    } else if (box.checked == false) {
      setCheck2("");
    }
  };
  const handleChangeCheck3 = (event) => {
    const box = document.getElementById("terveys");
    if (box.checked == true) {
      setCheck3(
        "Tee kirjallinen sopimus lakisäääteisestä työterveyshuollosta palveluntuottajan kanssa. Työnantaja on velvollinen järjestämään työntekijöille ennaltaehkäisevän työterveyshuollon palvelut. Lakisääteinen työterveyshuolto ei sisällä työntekijöiden sairaanhoitoa."
      );
    } else if (box.checked == false) {
      setCheck3("");
    }
  };
  const handleChangeCheck4 = (event) => {
    const box = document.getElementById("turvallisuus");
    if (box.checked == true) {
      setCheck4(
        "Pidä huolta työpaikan työturvallisuudesta. Käytännön lisätietoja työturvallisuuteen liittyvistä velvoitteista ja toimintatavoista löytyy mm. Työturvallisuuslaitoksen sivuilta (www.ttl.fi) sekä Työturvallisuuskeskuksen sivuilta (www.ttk.fi)."
      );
    } else if (box.checked == false) {
      setCheck4("");
    }
  };
  const handleChangeCheck5 = (event) => {
    const box = document.getElementById("tes");
    if (box.checked == true) {
      setCheck5(
        "Tarkista oman alasi työehtosopimuksen (TES) ehdot. Jos alalla on ns. yleissitova työehtosopimus, työnantajan on noudatettava työsopimuksissa tai työsuhteissa työehtosopimuksen määräyksiä, vaikka ei kuuluisi työnantajaliittoon."
      );
    } else if (box.checked == false) {
      setCheck5("");
    }
  };
  const handleChangeCheck6 = (event) => {
    const box = document.getElementById("sopimus");
    if (box.checked == true) {
      setCheck6(
        "Tee kirjallinen työsopimus työntekijän kanssa. Muista kirjata työsopimukseen myös koeaika ja sen pituus. Työsopimuksen esimerkki löytyy Yritystulkista kohdasta lomakkeet (http://www.yritystulkki.fi/fi/alue/joensuu/lomakkeet/)."
      );
    } else if (box.checked == false) {
      setCheck6("");
    }
  };
  const handleChangeCheck7 = (event) => {
    const box = document.getElementById("tulorekisteri");
    if (box.checked == true) {
      setCheck7(
        "Ilmoita maksetut palkat tulorekisteriin (https://www.vero.fi/tulorekisteri/)."
      );
    } else if (box.checked == false) {
      setCheck7("");
    }
  };
  const handleChangeCheck8 = (event) => {
    const box = document.getElementById("palkanlaskenta");
    if (box.checked == true) {
      setCheck8(
        "Mikäli et itse halua hoitaa palkanlaskentaa ja tilittää ennakonpidätyksiä sekä kirjata työnantajavelvoitteisiin liittyviä ilmoituksia, voit ostaa nämä ulkoistettuna palveluna esim. tilitoimistolta."
      );
    } else if (box.checked == false) {
      setCheck8("");
    }
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

  return (
    <div className="mx-auto my-2">
      <h2>Viimeistely</h2>

      <Form style={styles.row} onSubmit={submit}>
        <div>
          <h4>Työnantajavelvoitteet</h4>
          <Form.Check
            id="verohallinto"
            label="Ilmoittaudu Verohallinnon työnantajarekisteriin viimeistään silloin, kun palveluksessasi on vakinaisesti enemmän kuin yksi työntekijä. Ilmoittaudu myös silloin, kun palveluksessasi on vuoden aikana enemmän kuin viisi työntekijää, joiden suhde ei kestä koko vuotta."
            onChange={handleChangeCheck1}
          />
          <Form.Check
            id="vakuutukset"
            label="Hoida pakolliset vakuutukset: työeläkevakuutus (TyEL), työtapaturma- ja ammattivakuutus, työntekijäin ryhmähenkivakuutus, työttömyysvakuutusmaksu ja työnantajan sairausvakuutusmaksu (entinen sosiaaliturvamaksu)."
            onChange={handleChangeCheck2}
          />
          <Form.Check
            id="terveys"
            label="Tee kirjallinen sopimus lakisäääteisestä työterveyshuollosta palveluntuottajan kanssa. Työnantaja on velvollinen järjestämään työntekijöille ennaltaehkäisevän työterveyshuollon palvelut. Lakisääteinen työterveyshuolto ei sisällä työntekijöiden sairaanhoitoa."
            onChange={handleChangeCheck3}
          />
          <Form.Check
            id="turvallisuus"
            label="Pidä huolta työpaikan työturvallisuudesta. Käytännön lisätietoja työturvallisuuteen liittyvistä velvoitteista ja toimintatavoista löytyy mm. Työturvallisuuslaitoksen sivuilta (www.ttl.fi) sekä Työturvallisuuskeskuksen sivuilta (www.ttk.fi)."
            onChange={handleChangeCheck4}
          />
          <Form.Check
            id="tes"
            label="Tarkista oman alasi työehtosopimuksen (TES) ehdot. Jos alalla on ns. yleissitova työehtosopimus, työnantajan on noudatettava työsopimuksissa tai työsuhteissa työehtosopimuksen määräyksiä, vaikka ei kuuluisi työnantajaliittoon."
            onChange={handleChangeCheck5}
          />
          <Form.Check
            id="sopimus"
            label="Tee kirjallinen työsopimus työntekijän kanssa. Muista kirjata työsopimukseen myös koeaika ja sen pituus. Työsopimuksen esimerkki löytyy Yritystulkista kohdasta lomakkeet (http://www.yritystulkki.fi/fi/alue/joensuu/lomakkeet/)."
            onChange={handleChangeCheck6}
          />
          <Form.Check
            id="tulorekisteri"
            label="Ilmoita maksetut palkat tulorekisteriin (https://www.vero.fi/tulorekisteri/)."
            onChange={handleChangeCheck7}
          />
          <Form.Check
            id="palkanlaskenta"
            label="Mikäli et itse halua hoitaa palkanlaskentaa ja tilittää ennakonpidätyksiä sekä kirjata työnantajavelvoitteisiin liittyviä ilmoituksia, voit ostaa nämä ulkoistettuna palveluna esim. tilitoimistolta."
            onChange={handleChangeCheck8}
          />
          <Form.Check id="muucheck" label="Muu, mitä?" />
          <Form.Control
            id="muutext"
            type="text"
            placeholder="Listaa tähän..."
            onChange={handleChangeField1}
          ></Form.Control>
        </div>
        <div>
          <h4>Perehdyttämissuunnitelma</h4>

          <label>
            Kuinka perehdytän uuden henkilön työtehtäviin ja työyhteisön
            toimintatapoihin?
          </label>
          <Vinkki onClick={handleShow} className="svg" />
          <Form.Control
            id="perehdytys"
            as="textarea"
            rows={9}
            onChange={handleChangeField2}
          />
          {/* <Button variant="primary" onClick={handleShow}>
            ? Vinkki
          </Button> */}
        </div>
        <div>
          <h4>Ilmoittajan tiedot</h4>
          <label>
            Ilmoituksen hyväksymisestä ilmoitetaan antamaasi
            sähköpostiosoitteeseen. Ilmoittajan jättäjän tietoja ei näytetä
            ilmoituksessa.
          </label>
          <Form.Group as={Row} id="formGroupNimi">
            <Form.Label column sm={3}>
              Ilmoituksen jättäjän nimi
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                onChange={handleChangeField3}
              ></Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} id="formGroupEmail">
            <Form.Label column sm={3}>
              Ilmoituksen jättäjän sähköposti
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="email"
                onChange={handleChangeField4}
              ></Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} id="formGroupPuh">
            <Form.Label column sm={3}>
              Ilmoituksen jättäjän puhelinnumero
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="tel"
                onChange={handleChangeField5}
              ></Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} id="formGroupSalasana">
            <Form.Label column sm={3}>
              Ilmoituksen salasana
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="password"
                onChange={handleChangeField6}
              ></Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} id="formGroupSalaUudelleen">
            <Form.Label column sm={3}>
              Salasana uudelleen
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="password"
                onChange={handleChangeField7}
              ></Form.Control>
            </Col>
          </Form.Group>

          {/* <Button variant="primary" onClick={handleShow}>
            ? Vinkki
          </Button> */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Vinkki placeholder</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Vinkki: kannattaa tehdä hyvä ilmoitus.</p>
              <p>Ei kannata tehdä huonoa ilmoitusta.</p>
            </Modal.Body>
          </Modal>
        </div>

 
        <div className="links">
          <NavLink to="uusilomake7">
            <Button variant="success">Edellinen</Button>
          </NavLink>
          <NavLink to="uusilomake9">
            <Button variant="success" onClick={submitAndNavigate}>Seuraava</Button>
          </NavLink>
        </div>
      </Form>
    </div>
  );
};

export default Lomake6;
