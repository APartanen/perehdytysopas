import React, { Component } from "react";
import LomakeNav from "./LomakeNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Lomake from "./Lomake";
import Lomake1 from "./Lomake1";
import Lomake2 from "./Lomake2";
import Lomake3 from "./Lomake3";
import Lomake4 from "./Lomake4";
import Lomake5 from "./Lomake5";
import Lomake6 from "./Lomake6";
import Lomake7 from "./Lomake7";
import Lomake8 from "./Lomake8";
import Lomake9 from "./Lomake9";
import PdfCreator from "./PdfCreator";
import { useState } from "react";

export default function Uusilomake() {
  const [tiedot0, setTiedot0] = useState([
    {
      kenttä1: "field1",
      kenttä2: "field2",
      kenttä3: "field3",
      kenttä4: "field4",
      box1: "check1",
      box2: "check2",
      box3: "check3",
      box4: "check4",
      textarea: "textarea",
    },
  ]);

  const [tiedot1, setTiedot1] = useState([
    {
      perehdytettävä: "?",
      perehdyttäjä: "?",
      yrityksen_nimi: "?",
      yrityksen_osoite: "?",
      yrityksen_num: "?",
      yrityksen_faksi: "?",
      yrityksen_sposti: "?",
      yrityksen_verkko: "?",
      työpaikan_nimi: "?",
      työpaikan_katuosoite: "?",
      työpaikan_num: "?",
      työpaikan_sposti: "?",
      kuvaus: "?",
      alkupvm: "?",
      loppupvm: "?",
    },
  ]);

  const [tiedot2, setTiedot2] = useState([
    {
      kenttä1: "?",
      kenttä2: "?",
    },
  ]);

  const [tiedot3, setTiedot3] = useState([
    {
      tunnit: "?",
      palkka: "?",
      työsuhde: "?",
      työterveys: "?",
      box1: "?",
      box2: "?",
      box3: "?",
      box4: "?",
      box5: "?",
      alkupvm: "?",
      loppupvm: "?",
    },
  ]);

  const [tiedot4, setTiedot4] = useState([
    {
      työpaikan_tilat: "?",
      Turvallisuusasiat: "?",
    },
  ]);

  const [tiedot5, setTiedot5] = useState([
    {
      nimike: "?",
      tehtävat: "?",
      suunnittelu: "?",
      merkitys: "?",
      työvalineet: "?",
      ergonomia: "?",
      elpyminen: "?",
      kehitys: "?",
      viat: "?",
      muutTilat: "?",
      lisätiedot: "?",
    },
  ]);

  const [tiedot6, setTiedot6] = useState([
    {
      aineisto: "?",
      keskustelut: "?",
      koulutus: "?",
      ilmoitukset: "?",
      tes: "?",
      kirjallisuus: "?",
    },
  ]);

  const [tiedot7, setTiedot7] = useState([
    {
      virkistys: "?",
      työkyky: "?",
      vakuutus: "?",
      henkilöstoedut: "?",
      asuminen: "?",
    },
  ]);

  const [tiedot8, setTiedot8] = useState([
    {
      muut: "?",
      perehSuunnitelma: "?",
      nimi: "?",
      sposti: "?",
      puh: "?",
      salasana1: "?",
      salasana2: "?",
      box1: "?",
      box2: "?",
      box3: "?",
      box4: "?",
      box5: "?",
      box6: "?",
      box7: "?",
      box8: "?",
    },
  ]);

  const [kaikkitiedot, setKaikkitiedot] = useState([
    tiedot1,
    tiedot2,
    tiedot3,
    tiedot4,
    tiedot5,
    tiedot6,
    tiedot7,
    tiedot8,
  ]);
  //console.log("kaikkitiedot: ", kaikkitiedot);

  /*
  const [mainTiedot, setMainTiedot] = useState([
  tiedot1: [],  
  tiedot2: []
  ])
*/

  //komponentti PDFCreator - lomakkeessa 9
  const PdfSivu = (props) => {
    return <PdfCreator array={kaikkitiedot} />;
  };

  //lomake sivu ? - komponentti 7
  const testiLomake = (props) => {
    return <Lomake7 call={setTiedot0} array={tiedot0} />;
  };

  //lomake - perustiedot 1
  const perusTiedot = (props) => {
    return (
      <Lomake
        call={setTiedot1}
        array={tiedot1}
        kaikki={kaikkitiedot}
        kaikkiCall={setKaikkitiedot}
      />
    );
  };

  //lomake1 - yrityksen organisaatio
  const organisaatio = (props) => {
    return (
      <Lomake1
        call={setTiedot2}
        array={tiedot2}
        kaikki={kaikkitiedot}
        kaikkiCall={setKaikkitiedot}
      />
    );
  };

  //lomake2 - sivu 3 työsopimus
  const tyosopimus = (props) => {
    return (
      <Lomake2
        call={setTiedot3}
        array={tiedot3}
        kaikki={kaikkitiedot}
        kaikkiCall={setKaikkitiedot}
      />
    );
  };

  const tyoymparisto = (props) => {
    return (
      <Lomake9
        call={setTiedot4}
        array={tiedot4}
        kaikki={kaikkitiedot}
        kaikkiCall={setKaikkitiedot}
      />
    );
  };

  const tyotehtavat = (props) => {
    return (
      <Lomake3
        call={setTiedot5}
        array={tiedot5}
        kaikki={kaikkitiedot}
        kaikkiCall={setKaikkitiedot}
      />
    );
  };

  const tehtavaanHaku = (props) => {
    return (
      <Lomake4
        call={setTiedot6}
        array={tiedot6}
        kaikki={kaikkitiedot}
        kaikkiCall={setKaikkitiedot}
      />
    );
  };

  const muuta = (props) => {
    return (
      <Lomake5
        call={setTiedot7}
        array={tiedot7}
        kaikki={kaikkitiedot}
        kaikkiCall={setKaikkitiedot}
      />
    );
  };

  const viimeistely = (props) => {
    return (
      <Lomake6
        call={setTiedot8}
        array={tiedot8}
        kaikki={kaikkitiedot}
        kaikkiCall={setKaikkitiedot}
      />
    );
  };

  return (
    <div>
      <Router>
        <LomakeNav />
        <Switch>
          <Route path="/uusilomake1" exact component={perusTiedot} />
          <Route path="/uusilomake2" component={organisaatio} />
          <Route path="/uusilomake3" component={tyosopimus} />
          <Route path="/uusilomake4" component={tyoymparisto} />
          <Route path="/uusilomake5" component={tyotehtavat} />
          <Route path="/uusilomake6" component={tehtavaanHaku} />
          <Route path="/uusilomake7" component={muuta} />
          <Route path="/uusilomake8" component={viimeistely} />
          <Route path="/uusilomake11" component={testiLomake} />
          <Route path="/uusilomake9" component={PdfSivu} />
          <Route path="/uusilomake10" component={Lomake8} />
        </Switch>
      </Router>
    </div>
  );
}
