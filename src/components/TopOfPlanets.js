import React, {Component} from 'react'
import axios from '../services/config'

class TopOfPlanets extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        topOfPlanets: []
    }

    componentDidMount() {
        axios.get(`/planets/getTop3ByNumberOfVisits`)
        .then(response => {
            let topOfPlanets = response.data.planets;
            this.setState({topOfPlanets});
        })
        .catch(( error ) => console.log(error));
    }

    render() { 
        return ( 
            <>
                <div className="text-center mt-5">
                    <h1>Top 3 of planets!</h1>
                </div>
                <div className="container col-md-8 mt-3">
                    <table className="table table-striped">
                        <thead>
                            <th>Position</th>
                            <th>Name</th>
                            <th>Number of visits</th>
                            <th>Population</th>
                        </thead>
                        <tbody>
                            {this.state.topOfPlanets.map((planet, index) => {
                                return (
                                    <tr key={planet.id.toString()}>
                                        <td>{index + 1}</td>
                                        <td>{planet.name}</td>
                                        <td>{planet.numberOfVisits}</td>
                                        <td>{planet.population}</td>
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
 
export default TopOfPlanets;