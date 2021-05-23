import React, { Component } from 'react'
import axios from '../services/config.js';

class PersonDetail extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        personId: this.props.info.id,
        person: {},
    }

    componentDidMount() {
        axios.patch(`/persons/incremetVisits/${this.state.personId}`)
        .then( (response) => {
            console.log(response.status);
          })
        .catch( ( error ) => console.log(error) );

        axios.get(`/persons/getById/${this.state.personId}`)
        .then( (response) => {
            let person = response.data;
            this.setState({person});
        })
        .catch( ( error ) => console.log(error) );
    }

    render() { 

        const {id, name, lastname, age, height, weight,
            gender, dateOfBirth, numberOfVisits, planetName} = this.state.person;

        return (
            <>
                <div className="container col-md-10">
                    <div className="text-center mt-5">
                        <h1>Person Details</h1>
                    </div>
                    <div className="card text-center mt-5 mp-5">
                        <div className="card-header">
                            <h2>{name}</h2>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Name: {name} {lastname}</h5>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                        Age: {age}
                                    </div>
                                    <div className="col-sm">
                                        Height: {height}
                                    </div>
                                    <div className="col-sm">
                                        Weight: {weight}
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                        Gender: {gender}
                                    </div>
                                    <div className="col-sm">
                                        Date Of Birth: {dateOfBirth}
                                    </div>
                                    <div className="col-sm">
                                        Planet: {planetName}
                                    </div>
                                    <div className="col-sm">
                                        Number Of Visits: {numberOfVisits}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default PersonDetail;