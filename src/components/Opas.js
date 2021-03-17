import React from "react";
import { Tab, Tabs } from "react-bootstrap";

function Opas(defaultTab) {
  return (
<>
    <Tabs defaultActiveKey="opas1" id="tabit">
        <Tab eventKey="opas1" title="Työharjoittelu korkeakoulussa">
            <h3>Työharjoittelu korkeakoulussa</h3>
            <p>
            Ammattikorkeakouluasetuksen (1129/2014) 2§:n mukaan työharjoittelu on ammattikorkeakoulututkintoa suorittaville opiskelijoille pakollinen osa opintoja. Työharjoittelujakso on ennalta määritellyn pituinen ajanjakso, jonka aikana opiskelija hoitaa työtehtäviä jossain oman alansa työorganisaatiossa. Pääsääntöisesti opiskelija valitsee ja etsii itse työharjoittelupaikan. Harjoittelun aikana opiskelija tuo korkeakoulussa oppimiaan teoriatietoja käytännön työtehtäviin. Harjoittelujakson tarkoitus on syventää ammattiosaamista ja asiantuntijuutta. (Moor & Mruk 2020, 7; Tynjälä 2008, 125.) Harjoittelujakso tuo opiskelijalle uusia taitoja ja voi parhaimmillaan onnistuessaan tuoda opiskelijalle opinnäytetyön aiheen tai jopa tulevaisuuden työpaikan. (Karelia ammattikorkeakoulu, 2021; Konkola 2001, 149–150; Vesterinen 2002, 31.)</p>
            <p>
            Opiskelijan rooli harjoittelujaksolla yrityksessä poikkeaa hiukan tavallisen työntekijän roolista. Opiskelijalle annettavat tehtävät on suunniteltava ja organisoitava etukäteen siten, että ne sekä palvelevat työnantajaorganisaation tarvetta sekä opiskelijan ammatillisen asiantuntijuuden kehittämistä. Harjoittelijan työtehtäviin on sisällytettävä ja organisoitava oppimistilanteita. (Vesterinen 2002, 31; Karelia ammattikorkeakoulu 2021.) Harjoittelujaksolla toteutettavien työtehtävien tulisi olla kytketty teoriatasolta käytännön työhön sekä niiden tulisi sisältää runsaasti tehtävien hoitamisen ja siten oman oppimisen reflektointia (Tynjälä 2008; Vesterinen 2002, 33). 
            </p>
            <p>
        Ammattikorkeakouluopiskelijan asiantuntijuus voidaan jakaa kolmeen eri tasoon: tietopohjan kartuttamiseen, käytännön osaamiseen sekä tietämyksen lisäämiseen omasta tavoitteellisesta oppimisesta ja osaamisesta. Korkeakoulutasoinen asiantuntijuus edellyttää näiden kolmen tason vahvaa integroitumista toisiinsa. (Vesterinen 2002, 29 & Tynjälä 2008, 125.) Harjoittelujaksolla opiskelijalla on mahdollisuus sitoa yhteen nämä kolme osa-aluetta ja muodostaa näistä yhtenäinen syvän oppimisen kokonaisuus. (Vesterinen 2002, 31.) Korkeakoulutasoinen asiantuntijuus sisältää myös runsaasti käytännön työssä opittavaa hiljaista tietoa, eli äänetöntä, intuition kaltaista tietoa, jota on vaikeaa selittää sanoin tai opastaa sen oppimisessa (Tynjälä 2008, 126.)
            </p>
        </Tab>
        <Tab eventKey="Työaika ja työnkesto" title="Työaika ja työnkesto">

        </Tab>
      </Tabs>


    



    
    </>
  );
}

export default Opas;
