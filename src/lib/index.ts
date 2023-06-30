import axios from 'axios'

export const api = axios.create({
    headers: { 
        Bearer: 'WWxkV01XTkhSbnBrUjFaeldsZG9kRmxYYkhwWmJVWjVXVmhTZGc9PQ==',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        'Access-Control-Allow-Headers': "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    },
    baseURL: 'https://marketplace-api-v2.kanal.com.br/public/api/bitrix/banker-lead',
})