import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:8000/',
  baseURL: 'http://1b80-82-45-246-13.ngrok.io/',
});

export default instance;
