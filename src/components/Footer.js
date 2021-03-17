import React from "react";

export default function Footer() {
  return (
    <div className="Footer mt-5">
      <div className="footer text-center mt-3 mb-3">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0 mt-3">
            <h4 className="mb-4">YHTEYSTIEDOT</h4>
            <p className="pre-wrap mb-0">Tikkarinne 9, 80200 Joensuu</p>
            <p className="pre-wrap mb-0">Vaihde: 013 260 600</p>
            <p className="pre-wrap mb-0">info@karelia.fi</p>
          </div>

          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="mb-4 mt-3">ESIMERKKI</h4>
            <p className="pre-wrap mb-0">Yhteystiedot »</p>
            <p className="pre-wrap mb-0">Pakki-portaali »</p>
            <p className="pre-wrap mb-0">Karelia-intra »</p>
            <p className="pre-wrap mb-0">Rekisteriselosteet »</p>
            <p className="pre-wrap mb-0">Saavutettavuusseloste »</p>
            <p className="pre-wrap mb-0">Asiakirjajulkisuuskuvaus »</p>
          </div>

          <div className="col-lg-4 mb-5">
            <h4 className="mb-4 mt-3">ESIMERKKI</h4>
            <p className="pre-wrap mb-0">Tähän mahtuu myös tekstiä.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
