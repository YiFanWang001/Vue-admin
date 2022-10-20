import axios from 'axios'
import { setItem } from '@/utils/storage'
const instance = axios.create({
    baseURL: 'https://www.markerhub.com/vueadmin-java'
})

// 添加请求拦截器
const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNjU3MDAyMjIxLCJleHAiOjE2NTc2MDcwMjF9.KmOXxjmGl8hqbE_PxFNPktQy_5qDvuyqzRi-KiwHDx_XJaizHUZi1r4nhIgeJn30hXL0oGBADt9LIWldk8GeNw'
setItem('token', token)
instance.interceptors.request.use(
    function(config) {
        // 在发送请求之前做些什么
        config.headers.Authorization = token
        config.Origin = 'https://www.markerhub.com/vueadmin-java'
        return config
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)

// 添加响应拦截器
instance.interceptors.response.use(
    function(response) {
        // 对响应数据做点什么
        return response.data
    },
    function(error) {
        // 对响应错误做点什么
        return Promise.reject(error)
    }
)

export default instance