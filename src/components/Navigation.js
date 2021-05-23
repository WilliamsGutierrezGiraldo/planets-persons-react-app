import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#"></a>
                <Link className="navbar-brand" to="/">P&P</Link>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/planets">Planets</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/persons">Persons</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/topOfPlanets">Top of Planets</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/topOfPersons">Top of Persons</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}
