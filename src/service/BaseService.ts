// apiService.js
import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080' // Replace with your API base URL

const apiService = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})
apiService.interceptors.request.use(
    (config) => {
        const jwt = localStorage.getItem('jwt')
        if (jwt) {
            console.log(jwt)
            config.headers['Authorization'] = `Bearer ${jwt}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
/*
  BachHH2
  Get data from API
  7/3/2023
*/
export const fetchData = async (endpoint: string, params = {}) => {
    try {
        const response = await apiService.get(endpoint, { params })
        return response.data
    } catch (error) {
        console.error('API Request Failed:', error)
        throw error
    }
}
/*
  BachHH2
  Post data API
  7/3/2023
*/
export const postData = async (endpoint: string, data: object) => {
    try {
        const response = await apiService.post(endpoint, data)
        return response.data
    } catch (error) {
        console.error('API Request Failed:', error)
        throw error
    }
}
/*
  BachHH2
  Put data API
  7/3/2023
*/
export const updateData = async (endpoint: string, data: object) => {
    try {
        const response = await apiService.put(endpoint, data)
        return response.data
    } catch (error) {
        console.error('API Request Failed:', error)
        console.log('Error Response:', error.response)
        throw error
    }
}
