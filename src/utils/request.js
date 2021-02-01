import axios from 'axios'
import store from '@/store'

const request = axios.create({
})
request.interceptors.request.use(config => {
  const { user } = store.state
  if (user && user.access_token) {
    config.headers.Authorization = user.access_token
  }
  return config
})
export default request
