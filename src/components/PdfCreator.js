import React, { Component, useState } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

// Create Document Component
//Hae tiedot ja aseta ne tekstiksi funktiolla?
/*
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        <Text wrap="true">{tekstiosa}</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);
*/

const PdfCreator = (props) => {
  const tiedot = props.array;

  console.log(tiedot);

  const [field1, setField1] = useState("");

  //("Nappi: ", this.state.teksti)}>
  return (
    <div className="col-md-6 col-md-offset-3">
      <PDFViewer height="600" width="400">
        <MyDocument tiedot={tiedot} />
      </PDFViewer>
    </div>
  );
};
export default PdfCreator;
