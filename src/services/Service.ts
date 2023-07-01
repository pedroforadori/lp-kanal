import axios, { AxiosRequestConfig } from 'axios';

const axiosDefaultConfig: AxiosRequestConfig = {
  baseURL: 'https://kanal.com.br/api',
  headers: { 
    'Bearer': 'WWxkV01XTkhSbnBrUjFaeldsZG9kRmxYYkhwWmJVWjVXVmhTZGc9PQ==',
   }
};

const Service = axios.create(axiosDefaultConfig);

export default Service;
