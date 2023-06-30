import axios from 'axios'

export const api = axios.create({
    headers: { Bearer: `WWxkV01XTkhSbnBrUjFaeldsZG9kRmxYYkhwWmJVWjVXVmhTZGc9PQ==` },
    baseURL: 'https://marketplace-api-v2.kanal.com.br/public/api/bitrix/banker-lead'
})