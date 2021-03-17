import React, { Component } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

//TODO
// - PDF tiedoston tyylittely
// - kaiken tiedon mukaan ottaminen.

const MyDocument = (props) => {
  console.log("props:", props);
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 3,
    },
    text: {
      fontSize: 25,
    },
    subtitle: {
      fontSize: 18,
      margin: 10,
    },
    text2: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
    },
  });

  //TODO
  //Kokeile tiedon välitystä samalla tavalla kuin testi sivulle.

  let tiedot = props.tiedot;

  //Lomakkeen tiedot
  const perehdytettävä = tiedot[0][0].perehdytettävä;
  const perehdyttäjä = tiedot[0][0].perehdyttäjä;
  const yrityksen_nimi = tiedot[0][0].yrityksen_nimi;
  const yrityksen_osoite = tiedot[0][0].yrityksen_osoite;
  const yrityksen_num = tiedot[0][0].yrityksen_num;
  const yrityksen_faksi = tiedot[0][0].yrityksen_faksi;
  const yrityksen_sposti = tiedot[0][0].yrityksen_sposti;
  const yrityksen_verkko = tiedot[0][0].yrityksen_verkko;
  const työpaikan_nimi = tiedot[0][0].yrityksen_nimi;
  const työpaikan_katuosoite = tiedot[0][0].työpaikan_katuosoite;
  const työpaikan_num = tiedot[0][0].työpaikan_num;
  const työpaikan_sposti = tiedot[0][0].työpaikan_sposti;
  const kuvaus = tiedot[0][0].kuvaus;
  const alkupvm = tiedot[0][0].alkupvm.toString();
  const alkupvm_trim = alkupvm.substring(0, 15);
  const loppupvm = tiedot[0][0].loppupvm.toString();
  const loppupvm_trim = loppupvm.substring(0, 15);

  //Lomakkeen1 tiedot
  //1 on organisaatio ja henkilöstö, 2 on yrityksen toimintavat
  const organisaatio1 = tiedot[1][0].kenttä1;
  const organisaatio2 = tiedot[1][0].kenttä2;

  //Lomakkeen2 tiedot // HUOM MONI VALINTA BOXIT PITÄÄ VAIHTAA RADIOBUTTONIEN TYYPPISIKSI TAI AINAKIN TIEDON MERKITSEMINEN VAIN YHDELLE MUUTTUJALLE
  const tunnit = tiedot[2][0].tunnit;
  const palkka = tiedot[2][0].palkka;
  const työsuhde = tiedot[2][0].työsuhde;
  const työterveys = tiedot[2][0].työterveys;
  const box1 = tiedot[2][0].box1;
  const box2 = tiedot[2][0].box2;
  const box3 = tiedot[2][0].box3;
  const box4 = tiedot[2][0].box4;
  const box5 = tiedot[2][0].box5;
  const alkupvm_lomake2 = tiedot[2][0].alkupvm.toString();
  const alkupvm_lomake2_trim = alkupvm_lomake2.substring(0, 15);
  const loppupvm_lomake2 = tiedot[2][0].loppupvm.toString();
  const loppupvm_lomake2_trim = loppupvm_lomake2.substring(0, 15);

  //Lomakkeen9 tiedot
  const työpaikan_tilat = tiedot[3][0].työpaikan_tilat;
  const Turvallisuusasiat = tiedot[3][0].Turvallisuusasiat;

  //Lomakkeen3 tiedot
  const nimike = tiedot[4][0].nimike;
  const tehtävat = tiedot[4][0].tehtävat;
  const suunnittelu = tiedot[4][0].suunnittelu;
  const merkitys = tiedot[4][0].merkitys;
  const työvalineet = tiedot[4][0].työvalineet;
  const ergonomia = tiedot[4][0].ergonomia;
  const elpyminen = tiedot[4][0].elpyminen;
  const kehitys = tiedot[4][0].kehitys;
  const viat = tiedot[4][0].viat;
  const muutTilat = tiedot[4][0].muutTilat;
  const lisätiedot = tiedot[4][0].lisätiedot;

  //Lomakkeen4 tiedot
  const aineisto = tiedot[5][0].aineisto;
  const keskustelut = tiedot[5][0].keskustelut;
  const koulutus = tiedot[5][0].koulutus;
  const ilmoitukset = tiedot[5][0].ilmoitukset;
  const tes = tiedot[5][0].tes;
  const kirjallisuus = tiedot[5][0].kirjallisuus;

  //Lomakkeen5 tiedot
  const virkistys = tiedot[6][0].virkistys;
  const työkyky = tiedot[6][0].työkyky;
  const vakuutus = tiedot[6][0].vakuutus;
  const henkilöstoedut = tiedot[6][0].henkilöstoedut;
  const asuminen = tiedot[6][0].asuminen;

  //Viimestely sivua ei lisätty

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>LOMAKE 1: Perustiedot</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Perehdytettävä</Text>
          <Text wrap="true"> {perehdytettävä}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Perehdyttäjä</Text>
          <Text wrap="true"> {perehdyttäjä}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Perehdystys alkaa</Text>
          <Text wrap="true"> {alkupvm_trim}</Text>
          <Text wrap="true"></Text>
          <Text wrap="true">Perehdystys päättyy</Text>
          <Text wrap="true"> {loppupvm_trim}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Yrityksen tiedot:</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Nimi</Text>
          <Text wrap="true"> {yrityksen_nimi}</Text>
          <Text wrap="true">Katuosoite</Text>
          <Text wrap="true"> {yrityksen_osoite}</Text>
          <Text wrap="true">Puhelin</Text>
          <Text wrap="true"> {yrityksen_num}</Text>
          <Text wrap="true">Faksi</Text>
          <Text wrap="true"> {yrityksen_faksi}</Text>
          <Text wrap="true">Sähköposti:</Text>
          <Text wrap="true"> {yrityksen_sposti}</Text>
          <Text wrap="true">Verkkosivut</Text>
          <Text wrap="true"> {yrityksen_verkko}</Text>
          <Text wrap="true">Kuvaus</Text>
          <Text wrap="true"> {kuvaus}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Työpaikan tiedot:</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Nimi</Text>
          <Text wrap="true"> {työpaikan_nimi}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Katuosoite</Text>
          <Text wrap="true"> {työpaikan_katuosoite}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Puhelin</Text>
          <Text wrap="true"> {työpaikan_num}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Sähköposti</Text>
          <Text wrap="true"> {työpaikan_sposti}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>
            LOMAKE 2: Yrityksen organisaatio ja toimintatavat
          </Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Yrityksen organisaatio ja henkilöstö</Text>
          <Text wrap="true"> {organisaatio1}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Toimintatavat yrityksessä</Text>
          <Text wrap="true"> {organisaatio2}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>LOMAKE 2: Työsopimus</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Sopimuksen tyyppi:</Text>
          <Text wrap="true"> {box1}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Kesto</Text>
          <Text wrap="true">
            {alkupvm_lomake2_trim} - {loppupvm_lomake2_trim}
          </Text>
          <Text></Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Tuntien määrä/viikko</Text>
          <Text wrap="true"> {tunnit}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Työaika:</Text>
          <Text wrap="true"> {box4}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Palkka-asiat</Text>
          <Text wrap="true"> {palkka}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Työsuhteen päättyminen</Text>
          <Text wrap="true"> {työsuhde}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Terveyshuolto</Text>
          <Text wrap="true"> {työterveys}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>LOMAKE 9: Työympäristö</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Työpaikan tilat, työskentely-ympäristö</Text>
          <Text wrap="true"> {työpaikan_tilat}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Turvallisuusasiat, omaisuuden suojaus</Text>
          <Text wrap="true"> {Turvallisuusasiat}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>LOMAKE 3: Työtehtävät</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Nimike</Text>
          <Text wrap="true"> {nimike}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Keskeiset tehtävät ja vastuualueet</Text>
          <Text wrap="true"> {tehtävat}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Työnsuunnittelu, tavoitteet ja laatu</Text>
          <Text wrap="true"> {suunnittelu}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">
            Työn merkitys kokonaisuuteen, sisäinen yhteistyö
          </Text>
          <Text wrap="true"> {merkitys}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Koneet, laitteet, työvälineet, huolto</Text>
          <Text wrap="true"> {työvalineet}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Työergonomia</Text>
          <Text wrap="true"> {ergonomia}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Elpyminen, työn vastaliikkeet</Text>
          <Text wrap="true"> {elpyminen}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Tehtävän kehittäminen ja riskitekijät</Text>
          <Text wrap="true"> {kehitys}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Epäkohdista ja viosta ilmoittaminen</Text>
          <Text wrap="true"> {viat}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">
            Työskentely asiakkaan tai toisen työnantajan tiloissa
          </Text>
          <Text wrap="true"> {muutTilat}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">
            Mistä ja/tai keneltä lisätietoa tehtävästä ja tukea työskentelyyn
          </Text>
          <Text wrap="true"> {lisätiedot}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>LOMAKE 4: Tehtävään haku</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Perehdyttämisaineisto ja sen käyttö</Text>
          <Text wrap="true"> {aineisto}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">
            Palautekeskustelut perehdyttäjän ja/tai esimiehen kanssa ja
            perehdyttämisen arviointi
          </Text>
          <Text wrap="true"> {keskustelut}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Koulutusmahdollisuudet</Text>
          <Text wrap="true"> {koulutus}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">
            Ilmoitustaulu, palaverit, tiedotteet, intranet
          </Text>
          <Text wrap="true"> {ilmoitukset}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Työehtosopimus, lait, asetukset ja ohjeet</Text>
          <Text wrap="true"> {tes}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Ammattikirjallisuus ja -lehdet</Text>
          <Text wrap="true"> {kirjallisuus}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>LOMAKE 5: Muut asiat</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Harrastus- ja virkistysmahdollisuudet</Text>
          <Text wrap="true"> {virkistys}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Työ- ja toimintakyvyn ylläpito</Text>
          <Text wrap="true"> {työkyky}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Vakuutus- ja eläkeasiat</Text>
          <Text wrap="true"> {vakuutus}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Muut henkilöstöpalvelut ja edut</Text>
          <Text wrap="true"> {henkilöstoedut}</Text>
        </View>
        <View style={styles.section}>
          <Text wrap="true">Työsuhdeasuminen</Text>
          <Text wrap="true"> {asuminen}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;