import React, { Component } from 'react'
import axios from '../services/config.js';

class PlanetDetail extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        planetId: this.props.info.id,
        planet: {},
        listPersons: []
    }

    componentDidMount() {
        axios.patch(`/planets/incremetVisits/${this.state.planetId}`)
        .then( (response) => {
            console.log(response.status);
          })
        .catch( ( error ) => console.log(error) );

        axios.get(`/planets/getById/${this.state.planetId}`)
        .then( (response) => {
            let planet = response.data;
            this.setState({planet});
        })
        .catch( ( error ) => console.log(error) );

        axios.get(`/persons/findByPlanetId/${this.state.planetId}`)
        .then( (response) => {
          let listPersons = response.data.persons;
          this.setState({listPersons});
        })
        .catch( ( error ) => console.log(error) );
    }

    render() {

        const {id, rotationPeriod, name, diameter, weather,
            land, numberOfVisits, population} = this.state.planet;

        return (
            <>
            <div className="container col-md-10">
                <div className="text-center mt-5">
                    <h1>Planet Details</h1>
                </div>
                <div className="card text-center mt-5 mp-5">
                    <div className="card-header">
                        <h2>{name}</h2>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Population: {population}</h5>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    Rotation Period: {rotationPeriod}
                                </div>
                                <div className="col-sm">
                                    Weather: {weather}
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    Number Of Visits: {numberOfVisits}
                                </div>
                                <div className="col-sm">
                                    Land: {land}
                                </div>
                                <div className="col-sm">
                                    Diameter: {diameter}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <h3>Population</h3>
            </div>
            <div className="container col-md-8 mt-3">
                <table className="table table-striped">
                    <thead>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Gender</th>
                        <th>Number of visits</th>
                    </thead>
                    <tbody>
                        {this.state.listPersons.map((person) => {
                            return (
                                <tr key={person.id}>
                                    <td>{person.name}</td>
                                    <td>{person.lastname}</td>
                                    <td>{person.gender}</td>
                                    <td>{person.numberOfVisits}</td>
                                </tr>
                            );
                        })}                      
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}

export default PlanetDetail
