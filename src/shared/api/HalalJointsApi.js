import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/',
  // baseURL: "https://api-dev.halaljoints.com"
});

export default instance;
