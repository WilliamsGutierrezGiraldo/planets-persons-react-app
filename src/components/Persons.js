import React from 'react'
import Person from './Person'

export default function Persons(props) {
    return (
        <div className="container col-md-12">
            <React.Fragment>
                <div className="row">
                    {
                        props.persons.map((person) => (
                            <div className="col-sm-6" key={person.id.toString()}>
                                <Person info={person} />
                            </div>
                        ))
                    }
                </div>
            </React.Fragment>
        </div>
    )
}
