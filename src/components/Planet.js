import React from 'react'
import { Link } from 'react-router-dom';

export default function Planet(props) {

    const {id, name, population} = props.info;

    return (
        <div className="pt-3 px-3 mt-3">
            <div className="card text-center">
                <img src="./imagenes/mw.jpg"  height="500"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Population: {population}</h6>
                    <hr/>
                    <Link to={`/planetDetail/${id}`} className="btn btn-primary">Know more!</Link>
                </div>
            </div>
        </div>
    )
}
