import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://marketplace-api-v2.kanal.com.br/public/api/bitrix/banker-lead/'
})