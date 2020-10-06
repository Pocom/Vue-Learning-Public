import axios from 'axios'
import {baseURL} from '@/common/url.js'

export function request(config) {
    const instance = axios.create({
      baseURL: baseURL,
      timeout: 5000
    })
    
    instance.interceptors.request.use(config => {
      return config 
    }, err => {
      return err
    })

    instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      return err
    })
    return instance(config)
  }