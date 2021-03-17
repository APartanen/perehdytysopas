import React from "react";

import Lomake from "../Lomake";
import Lomake1 from "../Lomake1";
import Lomake2 from "../Lomake2";
import Lomake3 from "../Lomake3";
import Lomake4 from "../Lomake4";
import Lomake5 from "../Lomake5";
import Lomake6 from "../Lomake6";
import Lomake7 from "../Lomake7";
import Lomake8 from "../Lomake8";
import Lomake9 from "../Lomake9";
import PdfCreator from "../PdfCreator";

import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Button, NavLink } from "react-bootstrap";
import { useState } from "react";

// todo tyylittely
const Lomakesivu = () => {

  


  return (
    <div className="align-middle">
      <h1>Uusi perehdytysopas</h1>
      <p>
        Tämän lomakkeen avulla voit laatia harjoittelijallesi tulostettavan
        perehdytysoppaan.
      </p>
      <p>
        Perehdyttämisen tarkistuslista sisältää jäsennellyn luettelon
        perehdyttämisessä esille otettavia asioita suunnittelun ja toteutuksen
        tueksi. Perehdyttämisen seurannassa ja oppimisen varmistamisessa listaa
        käyttävät sekä perehdyttäjä että perehdytettävä. Listaa saa työpaikalla
        kopioida, karsia ja täydentää.
      </p>


      <div className="opasWrapper">
        

      <NavLink href="uusilomake1" className="lomakenappi">
        <Button variant="success">Täytä lomake</Button>
      </NavLink>

      {/* <div className="opasWrapper"> */}
      {/* <Tabs defaultActiveKey="Perustiedot" id="tabit">

          <Tab eventKey="Perustiedot" title="Perustiedot">
            <Lomake />
          </Tab>
          <Tab
            eventKey="Yrityksen organisaatio ja toimintatavat"
            title="Yrityksen organisaatio ja toimintatavat"
          >
            <Lomake1 />
          </Tab>
          <Tab eventKey="Työsopimus" title="Työsopimus">
            <Lomake2 />
          </Tab>
          <Tab eventKey="Työympäristö" title="Työympäristö">
            <Lomake9 />
          </Tab>
          <Tab eventKey="Työtehtävät" title="Työtehtävät">
            <Lomake3 call={setTiedot} array={tiedot} />
          </Tab>
          <Tab
            eventKey="Tehtävään haku"
            title="Koulutus ja sisäinen tiedottaminen"
          >
            <Lomake4 call={setTiedot} array={tiedot} />
          </Tab>
          <Tab eventKey="Muuta" title="Muuta">
            <Lomake5 call={setTiedot} array={tiedot} />
          </Tab>
          <Tab eventKey="viimeistely" title="Viimeistely">
            <Lomake6 call={setTiedot} array={tiedot} />
          </Tab>
          <Tab eventKey="Testisivu" title="Testisivu">
            <Lomake7 call={setTiedot} array={tiedot} />
          </Tab>

          <Tab eventKey="Tietojen kooste" title="Tietojen kooste">
            <Lomake8 array={tiedot} />
          </Tab>
          <Tab eventKey="PDF" title="PDF">
            <PdfCreator array={tiedot} />
          </Tab>
        </Tabs>

        </div> */}

    </div>
    </div>
  );
};

export default Lomakesivu;

