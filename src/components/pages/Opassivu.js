import React from "react";
import { Tab, Tabs } from "react-bootstrap";

class Opassivu extends React.Component {

  constructor(props) {
    super(props);
    this.defaultTab = this.props.defaultTab;
  }

  render() {
    return (
      <div className="align-middle">
        <h1>Opas</h1>
        <Tabs defaultActiveKey={this.defaultTab} id="tabit">
        <Tab eventKey="opas1" title="Työharjoittelu">
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
        <Tab eventKey="opas2" title="Ohjaaminen">
            <h3>Harjoitteluohjaaminen</h3>
            <h4>Harjoitteluohjaaminen käsitteenä</h4>
            <p>
            Vehviläinen (2014, 7) kuvaa ohjaustyötä vuorovaikutukselliseksi suhteeksi, jossa vaihdetaan tietoja, taitoja, tunteita ja reaktioita. Onnismaa (2011, 7) puolestaan esittää, että ohjaus on työmenetelmä, jossa ohjauksen osapuolille annetaan aikaa, huomiota ja kunnioitusta. Moor ja Mruk (2020, 37) kuvailevat ohjausta tarkkailun, tukemisen ja suuntaamisen prosessiksi. Voidaan siis todeta ohjauksen olevan monimuotoinen vuorovaikutuksellinen prosessi, joka ulottuu syvemmälle kuin pelkkien työtehtävien opastamiseen ja hoitamiseen.  
            </p>
            <p>
Työorganisaatiossa opiskelijalle erikseen nimetty harjoitteluohjaaja voi olla ohjausosaamiseen perehtynyt esimies, kouluttaja, mentori tai perehdyttäjä. (Onnismaa 2011, 20; Moor & Mruk, 2020, 37.) Ohjaukselle ominaista on antaa valmiiden vastausten sijaan ideoita ja ajatuksen aiheita, kuinka jokin asia tai ongelma voidaan ratkaista. Onnismaa (2011) erottaa suorien ratkaisujen ja vastausten antamisen ohjaustyöstä, jossa tarkoituksena on kannustaa ohjattavaa omaan päättelyyn ja ajattelun kehittämiseen annettavien vaihtoehtojen ja mahdollisuuksien pohjalta. Olennaista on suorista neuvoista ja eräänlaisesta tiedonvälityksestä pidättäytyminen, eli ohjaustyö antaa ohjattavalle tilaa itsenäiseen ajatteluprosessiin ja reflektointiin aikaisemman tiedon pohjalta. (Onnismaa 2011, 25–26.) 
            </p>
            <h4>Kolmikantainen vuorovaikutussuhde</h4>
            <p>Työharjoittelujakso on työelämäyhteistyötä, josta kaikki harjoitteluun osallistuvat osapuolet, eli koulutusorganisaatio, opiskelija sekä työorganisaatio hyötyvät. Tavoitteena on harjoittelijan asiantuntijuuden kehittämisen lisäksi sekä korkeakoulun että työorganisaation tuotteiden ja järjestelmien kehittäminen työelämästä saatavan palautteen kautta. (Kotila & Mäki 2015.) Harjoitteluohjaaminen onkin opintojen harjoittelujakson osallistujien kolmikantaisen suhteen vuorovaikutusta (Kotila & Mäki 2015). </p>
            <p>Kolmikantainen tarkoittaa kolmea toimijaa: opiskelijaharjoittelija, työorganisaation edustaja sekä harjoittelun ohjaaja korkeakoulun puolelta. (Kotila & Mäki 2015; Vehviläinen 2014, 12.) Työ- ja oppimisohjaus on yhteistoimintaa, jossa vaihdetaan tunteita, edistetään ohjattavan tiedonkäsittelyprosesseja ja vahvistetaan sekä ohjattavan että ohjaajan toimintaprosesseja. Voidaan siis sanoa, että harjoitteluohjaaminen on enemmänkin kuin työtehtäviin opastamista – se on työorganisaation kulttuuriin opastamista ja vastaavasti palautteenantoa myös työorganisaation ohjaajalle päin. (Vehviläinen 2014, 12–13.)</p>
            <h4>Hyvä ohjaussuhde</h4>
            <p>Ohjaussuhteen ytimessä on vuorovaikutus. Hyvä ohjaussuhde edellyttää vuorovaikutukselta kunnioitusta, arvostusta ja hyväksymistä. Hyvässä ohjaussuhteessa yhteys ohjaajan ja ohjattavan välillä on tiedollisesti, eettisesti ja emotionaalisesti eteenpäin vievä. (Vehviläinen 2014, 60–61.) Onnistunutta ohjaussuhdetta voidaan kuvata innostuneeksi yhteistyöksi, jaetuksi motivaatioksi, merkityksen rakentamiseksi ja ennakoimattomia oivalluksia tuottavaksi vuorovaikutukselliseksi yhteistyöksi. (Vehviläinen 2014, 72.) Hyvä ohjaaja huomioi ohjaustyössään erilaiset oppijat ja erilaisten persoonien tiedonkäsittelyn tyylit. Yksilöllisten oppimistyylien huomioiminen edistää oppijan tiedonkäsittelytaitoja sekä vahvistaa positiivista minäkuvaa. (Hätönen 2016, 8.)</p>
        </Tab>
        <Tab eventKey="opas3" title="Vaatimukset">
            <h3>Mitä harjoitteluohjaus vaatii työorganisaatiolta</h3>
            <p>Korkeakouluharjoittelijan vastaanottaminen työnantajaorganisaatiossa vaatii yritykseltä panostusta harjoittelun suunnitteluun ja sen onnistuneeseen toteuttamiseen. Opiskelijaharjoittelija kuten kuka tahansa muukin uusi työntekijä tulee perehdyttää uusiin työtehtäviin ja työympäristöön. (Hätönen 2016, 13; Moor & Mruk 2020, 37.) Perehdytyksen suunnittelu ja organisointi vaatii työnantajayritykseltä aikaa ja ohjaajan työpanosta. Näiden lisäksi muita työnantajalta vaadittavia resursseja ovat työvälineet sekä mahdollinen opiskelijan palkka. (Karelia ammattikorkeakoulu 2021.)</p>
            <h4>Ennen harjoittelua</h4>
            <p>Ennen harjoittelusuhteen alkamista on tärkeää valmistautua harjoittelijan tuloon. Koulutusorganisaatioon on pidettävä yhteyttä ja sovittava käytännön asioista, kuten työajasta ja mahdollisesta palkasta. Työharjoittelijalle tulee nimetä vastaava ohjaaja, joka toimii yhteyshenkilönä koulutusorganisaation ja työorganisaation välillä. Harjoittelijan työtehtävät tulee suunnitella sekä hankkia niihin liittyvät mahdolliset luvat ja käyttäjätunnukset. Työvälineet ja -tila tulee valmistella siten, että ne ovat valmiina harjoittelijaa varten harjoittelujakson alkaessa. (Hätönen 2016, 12.) </p>
            <p>Harjoittelijalle kuuluvat tehtävät ja vastuut on syytä miettiä etukäteen. Korkeakouluopiskelijalle voi antaa vastuullisiakin tehtäviä, mutta on muistettava, ettei harjoittelija vielä osaa aivan kaikkea vaan on harjoittelemassa ammattiosaamistaan. On tärkeää pohtia annettavien työtehtävien laajuus ja ammatillinen pedagogisuus. (Hätönen 2016, 12.)</p>
            <h4>Harjoittelusuhteen alussa ja aikana</h4>
            <p>Kun uusi harjoittelija on saapunut yritykseen, on tärkeää, että henkilö perehdytetään hyvin työtehtäviinsä ja uuteen työympäristöön. Perehdytyksellä tarkoitetaan kaikkia niitä toimenpiteitä, jotka valmistelevat työntekijän suorittamaan itsenäisesti työtehtäväänsä mahdollisimman laadukkaasti ja työturvallisesti. Perehdytyksellä pyritään saamaan perehdytettävä henkilö tuntemaan olonsa turvalliseksi työyhteisössä ja osaksi työyhteisöä. Onnistunut perehdytys sitouttaa henkilön työorganisaatioonsa. Kun työntekijä tuntee kuuluvansa joukkoon ja tekevänsä arvostettua työtä, ei hän välttämättä ole halukas lopettamaan työsuhdetta niin helpolla. (Joki 2018, 111–122.)</p>
            <p>Työtehtäviä tulee opettaa harjoittelijalle vaiheittain aloittaen perustehtävistä jatkaen vaativampiin työtehtäviin. Harjoittelijalle on annettava välitöntä palautetta työtehtävien hoitamisesta ja hänen kanssaan on keskusteltava avoimesti onnistumisiin ja epäonnistumisiin johtaneita syistä ja suunniteltava tulevia työtehtäviä. Harjoittelijaa tulee osallistaa ja tutustuttaa työyhteisön todellisiin tilanteisiin, kuten palavereihin ja muihin erilaisiin tilanteisiin ja kohtaamisiin. (Hätönen 2016, 15.) </p>
            <h4>Harjoittelun päättyessä</h4>
            <p>Kun harjoittelujakso on päättymässä, se arvioidaan koulutusorganisaation käytänteiden mukaisesti. Myös palaute oppimisesta ja harjoitteluohjauksesta työorganisaatiossa tulisi kerätä, jotta työnantaja voi jatkossa kehittää ohjausosaamistaan sekä perehdytysprosessia. Harjoittelun päätyttyä keskustelu ja tiedon vaihto koulutusorganisaation kanssa syventävät harjoittelujakson yhteistyötä. (Hätönen 2016, 16; Haikola 2009, 21.)</p>

        </Tab>
        <Tab eventKey="opas4" title="Hyödyt">
          <h3>Harjoittelun hyödyt työorganisaatiolle</h3>
          <p>Työharjoittelun ollessa harjoitteluun osallistuvien osapuolien kokonaisuuden muodostama vuorovaikutussuhde, on harjoittelujaksolle tyypillistä ja tavoiteltavaa, että ammattiosaamiseen liittyvä tieto liikkuu ekspansiivisesti kaikkiin suuntiin. Työharjoittelijalla on merkittävin oppijan rooli harjoittelusuhteessa, mutta yhtä lailla oppijoita ovat myös koulutusorganisaatio sekä työelämä. (Vesterinen 2002, 52.) Opiskelija tuo harjoittelun työorganisaatioonsa alansa uutta tietoa ja voi kyseenalaistaa työorganisaation vakiintuneita käytänteitä luoden keskustelua ja uusia toimintatapoja. (Vesterinen 2002, 52; Karelia ammattikorkeakoulu 2021.)</p>
          <p>Työorganisaatio voi hyötyä korkeakoulun työharjoittelujaksosta vastaanottamalla uutta tietoa ja tarkastelemalla kriittisesti omia toimintatapojaan. Kun työharjoittelijan ja työyhteisön välille on syntynyt luottamuksellinen ja avoin työsuhde, voi työharjoittelija parhaimmillaan auttaa jopa uusien tuotteiden tai toiminteiden innovoinnissa, jotka voivat edesauttaa yritystoiminnan kasvussa. (Vesterinen 2002, 52; Haikola 2009, 18-19.) Lisäksi harjoittelija tuo yritykseen arvokkaan lisäresurssin ja harjoittelijan kautta on mahdollista verkostoitua eteenpäin alan tulevaisuuden osaajiin sekä luoda positiivista työnantajamielikuvaa. (Porin yliopistokeskus 2021; Haikola 2009, 18-19; Karelia ammattikorkeakoulu 2021.)</p>

        </Tab>
        <Tab eventKey="opas5" title="Olemassa oleva tuki">
          <h3>Olemassa oleva tuki työorganisaatioille</h3>
          <p>Työterveyslaitoksen vuonna 2018 toteuttamassa kyselyssä työnantajaorganisaatiot kertoivat tarvitsevansa eniten opiskelijoiden ohjaamiseen liittyvää tukea eri kieli- ja kulttuuritaustaisten opiskelijoiden ohjaamiseen, työskentelyä koskevan palautteen antamiseen sekä osaamisen arviointiin. (Airila, Kurki, Nykänen & Mattila-Holappa 2019, 30.) Kyselyllä haluttiin selvittää mm. työnantajien näkemyksiä oppilaitosyhteistyöstä ammattiopiskelijoiden työharjoitteluihin liittyen. Tämä opinnäytetyö tarkastelee korkeakouluopiskelijan ohjausta harjoitteluorganisaatioissa ja siihen liittyvää tuen tarvetta. </p>
          <p>Kuten luvussa 2 on kuvattu, korkeakoulutasoiset työtehtävät vaativat syvempää asiantuntijuuden kehittymistä ja kehittyneitä metakognitiivisia taitoja, kun taas Opetushallituksen (2021) mukaan ammattiopinnoissa suoritettavan työharjoittelun tehtävissä keskitytään ammattiosaamisen keskeisiin perustehtäviin. Työterveyslaitoksen tutkimusta voidaan soveltaa myös tämän tutkimuksen tekemiseen, sillä kyseessä on sama ilmiö, vaikka työtehtävien laajuudessa on hiukan eroa. Työpaikalla ja käytännön työelämässä oppiminen on tärkeä oppimisen keino sekä korkeakoulutasolla että ammattiopinnoissa. </p>
        </Tab>
      </Tabs>
      </div>
    );
  }
}

export default Opassivu;
