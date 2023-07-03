import axios from 'axios'

export const api = axios.create({
    // headers: { 
    //     'Bearer': 'WWxkV01XTkhSbnBrUjFaeldsZG9kRmxYYkhwWmJVWjVXVmhTZGc9PQ==',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Credentials': "true",
    //     'Access-Control-Allow-Methods': 'POST, GET, PUT, PATCH, OPTIONS, DELETE',
    //     'Access-Control-Allow-Headers': 'Origin, Accept, Bearer, X-Requested-With, Content-Type, authorization, Authorization, Document-Profile, Profile-Access, Content-Disposition',
    // },
    baseURL: 'https://marketplace-api-v2.kanal.com.br/public/api',
})