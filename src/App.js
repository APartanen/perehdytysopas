import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import MainNav from "./components/MainNav";
import Etusivu from "./components/pages/Etusivu";
import Lomakesivu from "./components/pages/Lomakesivu";
import Rekrysivu from "./components/pages/Rekrysivu";
import Footer from "./components/Footer";
import Opassivu from "./components/pages/Opassivu";
import uusilomake from "./components/uusilomake";
import Lomake1 from "./components/Lomake1";
import LomakeNav from "./components/LomakeNav";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const Opas1 = (props) => {
    return <Opassivu defaultTab="opas1" />;
  };

  const Opas2 = (props) => {
    return <Opassivu defaultTab="opas2" />;
  };

  const Opas3 = (props) => {
    return <Opassivu defaultTab="opas3" />;
  };

  const Opas4 = (props) => {
    return <Opassivu defaultTab="opas4" />;
  };

  const Opas5 = (props) => {
    return <Opassivu defaultTab="opas5" />;
  };



  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Router>
              <Header />
              <MainNav />
              <Switch>
                <Route path="/" exact component={Etusivu} />
                <Route path="/asiakkaat" component={Rekrysivu} />
                <Route path="/lomakeinfo" component={Lomakesivu} />
                <Route path="/uusilomake1" component={uusilomake} />
                <Route path="/opas" component={Opas1} />
                <Route path="/opas2" component={Opas2} />
                <Route path="/opas3" component={Opas3} />
                <Route path="/opas4" component={Opas4} />
                <Route path="/opas5" component={Opas5} />
              </Switch>
              <Footer />
            </Router>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
