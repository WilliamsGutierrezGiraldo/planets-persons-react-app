import React, {Component} from 'react'
import axios from '../services/config'

class TopOfPersons extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        topOfPersons: []
    }

    componentDidMount() {
        axios.get(`/persons/getTop3ByNumberOfVisits`)
        .then(response => {
            let topOfPersons = response.data.persons;
            this.setState({topOfPersons});
        })
        .catch(( error ) => console.log(error));
    }

    render() { 
        return (
            <>
                <div className="text-center mt-5">
                    <h1>Top 3 of persons!</h1>
                </div>
                <div className="container col-md-8 mt-3">
                    <table className="table table-striped">
                        <thead>
                            <th>Position</th>
                            <th>Name</th>
                            <th>Lastname</th>
                            <th>Number of visits</th>
                            <th>Planet</th>
                        </thead>
                        <tbody>
                            {this.state.topOfPersons.map((person, index) => {
                                return (
                                    <tr key={person.id}>
                                        <td>{index + 1}</td>
                                        <td>{person.name}</td>
                                        <td>{person.lastname}</td>
                                        <td>{person.numberOfVisits}</td>
                                        <td>{person.planetName}</td>
                                    </tr>
                                );
                            })}                      
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}
 
export default TopOfPersons;