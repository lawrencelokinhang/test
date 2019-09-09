import axios from "axios";
let host = process.env.API_HOST || 'localhost';
let port = 9000;
let ifHttp = 'http';
baseURL = `${ifHttp}://${host}:${port}`;

export default axios.defaults.baseURL = baseURL;
