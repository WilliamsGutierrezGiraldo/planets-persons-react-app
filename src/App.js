import React, { Component } from 'react';
import Navegacion from './components/Navegacion';
import Bienvenida from './components/Bienvenida'
// import Registro from './components/Registro'
import Registro from './components/with-hooks/Registro'
import Consultas from './components/Consultas'
import {BrowserRouter as Router, Switch}  from 'react-router-dom';
import { Route } from 'react-router-dom';
import Planets from './components/Planets';
import PlanetDetail from './components/PlanetDetail';
import AgregarVivienda from './components/AgregarVivienda';
import axios from './services/config.js';


export default class App extends Component {

  state = {
    listPersons: [],
    listPlanets: []
  }

  componentDidMount() {

    axios.get('/persons/getAll')
      .then( (response) => {
        // console.log(response.data.persons)
        let listPersons = response.data.persons;
        this.setState({listPersons});
      })
      .catch( ( error ) => console.log(error) );

    axios.get('/planets/getAll')
      .then( (response) => {
        // console.log(response.data.planets)
        let listPlanets = response.data.planets;
        this.setState({listPlanets});
      })
      .catch( ( error ) => console.log(error) );

  }

  render() {
    return (
      <div>
        <Router>
            <Navegacion />
            <Switch>
              <Route exact path="/planets">
                <Planets planets={this.state.listPlanets}/>
              </Route>
              <Route exact path="/registro">
                <Registro />
              </Route>
              <Route exact path="/consultas">
                <Consultas />
              </Route>
              <Route exact path="/planetDetail/:planetId" render={(props) => {
                let planetId = props.location.pathname.replace("/planetDetail/","");
                let info = this.state.listPlanets.filter(planet => planet.id == planetId)[0];
                return(
                  <PlanetDetail info={info} />
                )
              }}/>
              <Route exact path="/agregarVivienda">
                <AgregarVivienda />
              </Route>
              <Route path="/" exact component={Bienvenida} />
            </Switch>
        </Router>
      </div>
    )
  }
}
