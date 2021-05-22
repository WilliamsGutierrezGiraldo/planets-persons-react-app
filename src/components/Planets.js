import React from 'react'
import Planet from './Planet'

export default function Planets(props) {
    return (
        <div className="container col-md-12">
            <React.Fragment>
                <div className="row">
                    {
                        props.planets.map((planet) => (
                            <div className="col-sm-6" key={planet.id.toString()}>
                                <Planet info={planet} />
                            </div>
                        ))
                    }
                </div>
            </React.Fragment>
        </div>
    )
}
