import axios from 'axios';

// Se define la URL base para el llamado a los servicios REST
const baseURL = 'http://localhost:8080';

// Se crea una instancia de axios y se le asigna una URL base
const API = axios.create({ baseURL });

// Se exporta la instancia para tenerla disponible en la app
export default API;