import axios from 'axios'

let axiosInstance = axios.create({
  baseURL: 'http://1.15.41.249:3000/',
  timeout: 3000
})

export default axiosInstance