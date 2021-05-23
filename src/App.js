import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome'
import {BrowserRouter as Router, Switch}  from 'react-router-dom';
import { Route } from 'react-router-dom';
import Planets from './components/Planets';
import Persons from './components/Persons'
import PlanetDetail from './components/PlanetDetail';
import PersonDetail from './components/PersonDetail'
import TopOfPlanets from './components/TopOfPlanets';
import TopOfPersons from './components/TopOfPersons';
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
            <Navigation />
            <Switch>
              <Route exact path="/planets">
                <Planets planets={this.state.listPlanets}/>
              </Route>
              <Route exact path="/persons">
                <Persons persons={this.state.listPersons}/>
              </Route>
              <Route exact path="/topOfPlanets">
                <TopOfPlanets />
              </Route>
              <Route exact path="/topOfPersons">
                <TopOfPersons />
              </Route>
              <Route exact path="/planetDetail/:planetId" render={(props) => {
                let planetId = props.location.pathname.replace("/planetDetail/","");
                let info = this.state.listPlanets.filter(planet => planet.id == planetId)[0];
                return(
                  <PlanetDetail info={info} />
                )
              }}/>
              <Route exact path="/personDetail/:personId" render={(props) => {
                let personId = props.location.pathname.replace("/personDetail/","");
                let info = this.state.listPlanets.filter(person => person.id == personId)[0];
                return(
                  <PersonDetail info={info} />
                )
              }}/>
              <Route path="/" exact component={Welcome} />
            </Switch>
        </Router>
      </div>
    )
  }
}
