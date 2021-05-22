import React, { Component } from 'react'

export default class AgregarVivienda extends Component {

    constructor(props) {
        super(props);

        this.state = {
            permiteMascotas: '',
            aireAcondicionado: '',
            calefaccion: '',
            numeroBanios: '',
            precioMinimo: '',
            numeroHabitaciones: '',
            tipo: '',
            imagenes: [],
            numeroPersonas: '',
            ubicacion: '',
            propietario: ''
        }

        this.onFileChange = this.onFileChange.bind(this);
        this.pushImage = this.pushImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    imagesBase64 = [];

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="container mt-3">
                <h1>¡Publica tu vivienda!</h1>
                <hr/>
                <form className="needs-validation mt-3" noValidate onSubmit={this.handleSubmit}>
                    {/* propietario */}
                    <div className="form-group row">
                        <label htmlFor="propietario" 
                            className="col-md-3 col-form-label font-weight-bold">
                                Documento del propietario: 
                        </label>
                        <div className="col-md-7">
                            <input id="propietario" name="propietario" type="text" onChange={this.handleChange}
                                className="form-control" required placeholder="Documento de identificación del propierario del inmueble"/>
                            <div className="invalid-feedback">Campo Obligatorio</div>
                        </div>
                    </div>

                    {/* ubicacion */}
                    <div className="form-group row">
                        <label htmlFor="busquedaPor" 
                            className="col-md-3 col-form-label font-weight-bold">
                                Ubicación de la vivienda: 
                        </label>
                        <div className="col-md-7">
                            <input id="ubicacion" name="ubicacion" type="text" onChange={this.handleChange}
                                className="form-control" required placeholder="Ciudad y departamento"/>
                            <div className="invalid-feedback">Campo Obligatorio</div>
                        </div>
                    </div>

                    {/* precio mínimo por día */}
                    <div className="form-group row">
                        <label htmlFor="busquedaPor" 
                            className="col-md-3 col-form-label font-weight-bold">
                                Precio mínimo por día:
                        </label>
                        <div className="col-md-7">
                            <input id="ubicacion" name="precioMinimo" type="number" onChange={this.handleChange}
                                className="form-control" required placeholder="En pesos colombianos"/>
                            <div className="invalid-feedback">Campo Obligatorio</div>
                        </div>
                    </div>

                    {/* mascotas y calefacción */}
                    <div className="form-group row">
                        <label htmlFor="formFileMultiple" className="col-md-2 col-form-label font-weight-bold">
                            ¿Aceptas mascotas?
                        </label>
                        <div className="col-md-3">
                            <select className="form-control" name="permiteMascotas" 
                                onChange={this.handleChange} aria-label="Default select example">
                                <option value>Selecciona</option>
                                <option value="1">Sí</option>
                                <option value="2">No</option>
                            </select>
                        </div>

                        <label htmlFor="formFileMultiple" className="col-md-2 col-form-label font-weight-bold">
                            ¿Tienes calefacción?
                        </label>
                        <div className="col-md-3">
                            <select className="form-control" name="calefaccion" 
                                onChange={this.handleChange} aria-label="Default select example">
                                <option value>Selecciona</option>
                                <option value="1">Sí</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                    </div>
                    {/* aire acondicionado y tipo de vivienda */}
                    <div className="form-group row">
                         <label htmlFor="formFileMultiple" className="col-md-2 col-form-label font-weight-bold">
                            ¿Aire acondicionado?
                        </label>
                        <div className="col-md-3">
                            <select className="form-control" name="aireAcondicionado" 
                                onChange={this.handleChange} aria-label="Default select example">
                                <option value>Selecciona</option>
                                <option value="1">Sí</option>
                                <option value="2">No</option>
                            </select>
                        </div>

                        <label htmlFor="formFileMultiple" className="col-md-2 col-form-label font-weight-bold">
                            Tipo de vivienda
                        </label>
                        <div className="col-md-3">
                            <select className="form-control" name="tipo" 
                               onChange={this.handleChange} aria-label="Default select example">
                                <option value>Selecciona</option>
                                <option value="1">Casa</option>
                                <option value="2">Cabaña</option>
                            </select>
                        </div>
                    </div>
                    {/* número de baños y habitaciones */}
                    <div className="form-group row">
                        <label htmlFor="formFileMultiple" className="col-md-2 col-form-label font-weight-bold">
                            Número de baños:
                        </label>
                        <div className="col-md-3">
                            <select className="form-control" name="numeroBanios" 
                                onChange={this.handleChange} aria-label="Default select example">
                                <option value>Selecciona</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>

                        <label htmlFor="formFileMultiple" className="col-md-2 col-form-label font-weight-bold">
                            Habitaciones:
                        </label>
                        <div className="col-md-3">
                            <select className="form-control" name="numeroHabitaciones" 
                                onChange={this.handleChange} aria-label="Default select example">
                                <option value>Selecciona</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </div>

                    {/* número de personas y carga de imágenes */}
                    <div className="form-group row">
                        <label htmlFor="busquedaPor" 
                            className="col-md-2 col-form-label font-weight-bold">
                                Número Personas: 
                        </label>
                        <div className="col-md-3">
                            <input id="numeroPersonas" name="numeroPersonas" type="text" onChange={this.handleChange}
                                className="form-control" required placeholder="Número máximo de personas"/>
                            <div className="invalid-feedback">Campo Obligatorio</div>
                        </div>
                        <label htmlFor="cargaImagenes" className="col-md-2 col-form-label font-weight-bold">
                            Subir imágenes:
                        </label>
                        <div className="col-md-3">
                            <input type="file" id="cargaImagenes" name="cargaImagenes"
                                onChange={this.onFileChange} accept="image/*" multiple />
                        </div>
                    </div>

                    <hr/>
                    <div className="form-group row mt-3 ml-1">
                        <button type="submit" className="btn btn-success text-uppercase font-weight-bold">Guardar</button>
                    </div>
                </form>
            </div>
        )
    }

    onFileChange(event) {
        let images = event.target.files;
        Array.from(images).forEach(imagen =>{
            let reader = new FileReader();
            reader.onload = () => {
                this.pushImage(reader.result);
            }
            reader.readAsDataURL(imagen);
        });
    }

    pushImage(data) {
        this.state.imagenes.push(data);
        this.setState({
            imagenes: this.state.imagenes
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const vivienda = {
            permiteMascotas: this.state.permiteMascotas,
            aireAcondicionado: this.state.aireAcondicionado,
            calefaccion: this.state.calefaccion,
            numeroBanios: this.state.numeroBanios,
            precioMinimo: this.state.precioMinimo,
            numeroHabitaciones: this.state.numeroHabitaciones,
            tipo: this.state.tipo,
            imagenes: this.state.imagenes,
            numeroPersonas: this.state.numeroPersonas,
            ubicacion: this.state.ubicacion,
            propietario: this.state.propietario
        }
        console.log(vivienda);
        fetch(`http://localhost:8080/viviendas`, {
            method: 'POST',
            body: JSON.stringify(vivienda),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            if (response.status === 2) {
                alert(`Vivienda registrada exitosamente`);
            } else {
                alert(`La vivienda no pudo ser registrada...`);
            }
            
        });
    }

    limpiarFormulario = () =>{
        this.setState = ({
            permiteMascotas: '',
            aireAcondicionado: '',
            calefaccion: '',
            numeroBanios: '',
            precioMinimo: '',
            numeroHabitaciones: '',
            tipo: '',
            imagenes: [],
            numeroPersonas: '',
            ubicacion: '',
            propietario: ''
        });
    }
}
