import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000'
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('axios instance error: ', error)
    return Promise.reject(error)
  }
)

export default axiosInstance