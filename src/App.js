import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

// Assets
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
// import "bootswatch/dist/journal/bootstrap.css";

// Components
import WeatherDisplay from './WeatherDisplay';

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Aplicación de clima con React
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col md={4} sm={4}>
              <h3>Selecciona una ciudad</h3>
              <div className="bs-component">
                <Nav
                  bsStyle="pills"
                  stacked
                  activeKey={activePlace}
                  onSelect={index => {
                    this.setState({ activePlace: index });
                  }}
                >
                  {PLACES.map((place, index) => (
                    <NavItem 
                      key={index} 
                      eventKey={index} 
                      >{place.name}</NavItem>
                  ))}
                </Nav>
              </div>
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
