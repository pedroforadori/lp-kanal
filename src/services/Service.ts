import axios, { AxiosRequestConfig } from 'axios';

const axiosDefaultConfig: AxiosRequestConfig = {
  baseURL: 'https://kanal.com.br/api', //'/api'  //'localhost:3000',
};

const Service = axios.create(axiosDefaultConfig);

export default Service;
