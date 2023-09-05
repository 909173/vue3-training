import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "https://opendata.resas-portal.go.jp/api/v1/",
  headers: {
    "X-API-KEY": import.meta.env.VITE_RESAS_API_KEY
  }
})

export default axiosInstance
