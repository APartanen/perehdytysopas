import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineLine } from "react-icons/ai";


export default function LomakeNav() {

  const [tiedot, setTiedot] = useState([
    {
      kenttä1: "field1",
      kenttä2: "field2",
      kenttä3: "field3",
      kenttä4: "field4",
      box1: "check1",
      box2: "check2",
      box3: "check3",
      box4: "check4",
    }
  ])



  return (
    <nav className="lomakenav">
      <ul className="nav-menu">
        <NavLink
          exact
          to="/uusilomake1"
          className="nav-links"
          activeClassName="nav-links-active"
        >
          <div className="nav-item">
            <h5 className="h5">
              <strong>1</strong>
            </h5>

            <li className="nav-items">Perustiedot</li>
          </div>
        </NavLink>

        <NavLink
          exact
          to="/uusilomake2"
          className="nav-links"
          activeClassName="nav-links-active"
        >
          <div className="nav-item">
            <h5 className="h5">
              <strong>2</strong>
            </h5>

            <li className="nav-items">Yrityksen organisaatio</li>
          </div>
        </NavLink>

        <NavLink
          exact
          to="/uusilomake3"
          className="nav-links"
          activeClassName="nav-links-active"
        >
          <div className="nav-item">
            <h5 className="h5">
              <strong>3</strong>
            </h5>

            <li className="nav-items">Työsopimus</li>
          </div>
        </NavLink>

        <NavLink
          exact
          to="/uusilomake4"
          className="nav-links"
          activeClassName="nav-links-active"
        >
          <div className="nav-item">
            <h5 className="h5">
              <strong>4</strong>
            </h5>

            <li className="nav-items">Työympäristö</li>
          </div>
        </NavLink>

        <NavLink
          exact
          to="/uusilomake5"
          className="nav-links"
          activeClassName="nav-links-active"
        >
          <div className="nav-item">
            <h5 className="h5">
              <strong>5</strong>
            </h5>

            <li className="nav-items">Työtehtävät</li>
          </div>
        </NavLink>

        <NavLink
          exact
          to="/uusilomake6"
          className="nav-links"
          activeClassName="nav-links-active"
        >
          <div className="nav-item">
            <h5 className="h5">
              <strong>6</strong>
            </h5>

            <li className="nav-items">Tehtävään haku</li>
          </div>
        </NavLink>

        <NavLink
          exact
          to="/uusilomake7"
          className="nav-links"
          activeClassName="nav-links-active"
        >
          <div className="nav-item">
            <h5 className="h5">
              <strong>7</strong>
            </h5>

            <li className="nav-items">Muuta</li>
          </div>
        </NavLink>

        <NavLink
          exact
          to="/uusilomake8"
          className="nav-links"
          activeClassName="nav-links-active"
        >
          <div className="nav-item">
            <h5 className="h5">
              <strong>8</strong>
            </h5>

            <li className="nav-items">viimeistely</li>
          </div>
        </NavLink>

        

        <NavLink
          exact
          to="/uusilomake9"
          className="nav-links"
          activeClassName="nav-links-active"
        >
          <div className="nav-item">
            <h5 className="h5">
              <strong>9</strong>
            </h5>

            <li className="nav-items">Tietojen kooste</li>
          </div>
        </NavLink>

        <NavLink
          exact
          to="/uusilomake11"
          className="nav-links"
          activeClassName="nav-links-active"
        >
          <div className="nav-item">
            <h5 className="h5">
              <strong>?</strong>
            </h5>

            <li className="nav-items">Testisivu</li>
          </div>
        </NavLink>
      </ul>
    </nav>
  );
}
