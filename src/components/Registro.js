import React, { Component } from 'react'

export default class Registro extends Component {

    state = {
        numDocumento: '',
        nombres: '',
        apellidos: '',
        email: '',
        telefono: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    limpiarFormulario = () => {
        this.setState({
            numDocumento: '',
            nombres: '',
            apellidos: '',
            email: '',
            telefono: ''
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let url = `http://localhost:8080/personas`;

        const user = {
            numDocumento: this.state.numDocumento,
            nombres: this.state.nombres,
            apellidos: this.state.apellidos,
            email: this.state.email,
            telefono: this.state.telefono
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {

            if (response.status === 2) {
                alert("Usuario creado satisfactoriamente...")
                this.limpiarFormulario();
            } else {
                alert("No se ha podido crear el usuario, intente nuevamente")
            }
            
        });

    }

    render() {
        return (
            <div div className="container mt-3">
                <div>
                    <h3>¡Bienvenido!</h3>
                    <h3>Por favor, ingrese sus datos</h3>
                </div>
                <hr/>
                <form className="needs-validation mt-3" noValidate onSubmit={this.handleSubmit}>
                    {/* número de documento */}
                    <div className="form-group row">
                        <label htmlFor="numDocumento" className="col-md-3 col-form-label font-weight-bold">
                                No. documento:
                        </label>
                        <div className="col-md-5">
                            <input id="numDocumento" name="numDocumento" type="text" className="form-control"
                                value={this.state.documentoIdentificacion} onChange={this.handleChange} required />
                            <div className="invalid-feedback">Campo Obligatorio</div>
                        </div>
                    </div>
                    {/* nombres */}
                    <div className="form-group row">
                        <label htmlFor="nombres" className="col-md-3 col-form-label font-weight-bold">
                            Nombres:
                        </label>
                        <div className="col-md-5">
                            <input id="nombres" name="nombres" type="text" className="form-control"
                                value={this.state.nombres} onChange={this.handleChange} required />
                            <div className="invalid-feedback">Campo Obligatorio</div>
                        </div>
                    </div>
                    {/* apellidos */}
                    <div className="form-group row">
                        <label htmlFor="nombres" className="col-md-3 col-form-label font-weight-bold">
                            Apellidos:
                        </label>
                        <div className="col-md-5">
                            <input id="apellidos" name="apellidos" type="text" className="form-control"
                                value={this.state.apellidos} onChange={this.handleChange} required />
                            <div className="invalid-feedback">Campo Obligatorio</div>
                        </div>
                    </div>
                    {/* correo */}
                    <div className="form-group row">
                        <label htmlFor="email" className="col-md-3 col-form-label font-weight-bold">
                            Correo electrónico:
                        </label>
                        <div className="col-md-5">
                            <input id="email" name="email" type="text" className="form-control"
                                value={this.state.direccion} onChange={this.handleChange} required />
                            <div className="invalid-feedback">Campo Obligatorio</div>
                        </div>
                    </div>
                    {/* telefono */}
                    <div className="form-group row">
                        <label htmlFor="telefono" className="col-md-3 col-form-label font-weight-bold">
                            Teléfono:
                        </label>
                        <div className="col-md-5">
                            <input id="telefono" name="telefono" type="text" className="form-control"
                                value={this.state.telefonos} onChange={this.handleChange} required />
                            <div className="invalid-feedback">Campo Obligatorio</div>
                        </div>
                    </div>
                    <hr/>

                    <div className="form-group row mt-3 ml-1">
                        <button type="submit" className="btn btn-success text-uppercase font-weight-bold">Registrarme</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}
