import React, {useState} from 'react';
import axios from '../../services/config.js';

const Registro = () => {

    const [inputs, setInput] = useState({
        numDocumento: ' ',
        nombres: ' ',
        apellidos: ' ',
        email: '',
        telefono: ''
    });

    const handleChange = (event) => {
        setInput({
            ...inputs,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.table(inputs);

        axios.get('/episode/1')
            .then( (response) => console.table(response.data) )
            .catch( ( error ) => console.log(error) );
    }

    return (
        <div div className="container mt-3">
            <div>
                <h3>¡Bienvenido!</h3>
                <h3>Por favor, ingrese sus datos</h3>
            </div>
            <hr/>
            <form className="needs-validation mt-3" noValidate onSubmit={handleSubmit}>
                {/* número de documento */}
                <div className="form-group row">
                    <label htmlFor="numDocumento" className="col-md-3 col-form-label font-weight-bold">
                            No. documento:
                    </label>
                    <div className="col-md-5">
                        <input 
                            id="numDocumento" 
                            name="numDocumento" 
                            type="text" 
                            className="form-control"
                            onChange={handleChange} 
                            required 
                        />
                        <div className="invalid-feedback">Campo Obligatorio</div>
                    </div>
                </div>
                {/* nombres */}
                <div className="form-group row">
                    <label htmlFor="nombres" className="col-md-3 col-form-label font-weight-bold">
                        Nombres:
                    </label>
                    <div className="col-md-5">
                        <input 
                            id="nombres" 
                            name="nombres" 
                            type="text" 
                            className="form-control"
                            onChange={handleChange} 
                            required 
                        />
                        <div className="invalid-feedback">Campo Obligatorio</div>
                    </div>
                </div>
                {/* apellidos */}
                <div className="form-group row">
                    <label htmlFor="nombres" className="col-md-3 col-form-label font-weight-bold">
                        Apellidos:
                    </label>
                    <div className="col-md-5">
                        <input 
                            id="apellidos" 
                            name="apellidos" 
                            type="text" 
                            className="form-control"
                            onChange={handleChange} 
                            required 
                        />
                        <div className="invalid-feedback">Campo Obligatorio</div>
                    </div>
                </div>
                {/* correo */}
                <div className="form-group row">
                    <label htmlFor="email" className="col-md-3 col-form-label font-weight-bold">
                        Correo electrónico:
                    </label>
                    <div className="col-md-5">
                        <input 
                            id="email" 
                            name="email" 
                            type="text" 
                            className="form-control"
                            onChange={handleChange} 
                            required 
                        />
                        <div className="invalid-feedback">Campo Obligatorio</div>
                    </div>
                </div>
                {/* telefono */}
                <div className="form-group row">
                    <label htmlFor="telefono" className="col-md-3 col-form-label font-weight-bold">
                        Teléfono:
                    </label>
                    <div className="col-md-5">
                        <input 
                            id="telefono" 
                            name="telefono" 
                            type="text" 
                            className="form-control"
                            onChange={handleChange} 
                            required 
                        />
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

export default Registro;
