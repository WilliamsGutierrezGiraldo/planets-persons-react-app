import React, { Component } from 'react'
import moment from 'moment';
import 'moment/locale/es';

export default class Consultas extends Component {

    
    constructor(props) {
        super(props);
        moment.locale('es');
        
    }

    state = {
        documentoIdentificacion: '',
        hayDatos: false,
        lista: []
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    limpiarFormulario = () => {
        this.setState({
            documentoIdentificacion: ''
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let listaResponse = [];

        let url = `http://localhost:8080/reservas/porUsuario/${this.state.documentoIdentificacion}`;

        fetch(url)
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {

            listaResponse = response.data.reservas;
            console.table(listaResponse);

            if (listaResponse.length > 0) {
                this.setState({hayDatos: true, lista: listaResponse})
            } else {
                this.limpiarFormulario();
                alert("No hay reservas registradas para el documento ingresado...");
            }
            
        });


    }

    render() {
        const format = `MMMM Do YYYY`;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="text-center mt-5">
                        <h3>¡Bienvenido!</h3>
                        <h3>Por favor, ingrese sus datos</h3>
                    </div>
                    <hr/>
                    <div className="row justify-content-md-center">
                        <label htmlFor="documentoIdentificacion" className="col-md-2 col-form-label font-weight-bold">
                                No. documento:
                        </label>
                        <div className="col-md-2">
                            <input id="documentoIdentificacion" name="documentoIdentificacion" type="text" className="form-control"
                                value={this.state.documentoIdentificacion} onChange={this.handleChange} required />
                            <div className="invalid-feedback">Campo Obligatorio</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row justify-content-md-center">
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-success text-uppercase font-weight-bold">Consultar</button>
                        </div>
                    </div>
                </form>
                {
                    <>
                    <hr/>
                    <table className="table table-striped">
                        <thead>
                            <th>Valor Total</th>
                            <th>Mascota</th>
                            <th>Fecha Inicio</th>
                            <th>Fecha Fin</th>
                            <th>Número Personas</th>
                            <th>Vivienda</th>
                        </thead>
                        <tbody>
                            {this.state.lista.map((reserva, index) => {
                                return (
                                    <tr key={reserva.id}>
                                    <td>{  new Intl.NumberFormat("es-CO").format(reserva.valorTotal)    }</td>
                                    <td>{reserva.mascota === 0 ? 'Sí' : 'No'}</td>
                                    <td>{ moment(reserva.fechaInicio).format( format ) }</td>
                                    <td>{ moment(reserva.fechaFin).format( format ) }</td>
                                    <td>{reserva.numeroPersonas}</td>
                                    <td>{reserva.idVivienda}</td>
                                    </tr>
                                );
                            })}                      
                        </tbody>

                    </table>
                    </>
                }
            </div>
        )
    }
}
