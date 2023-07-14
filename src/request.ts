// request.ts
import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://knn3-gateway.knn3.xyz/data-api/api',
  // baseURL: 'http://localhost:3010/api',
  headers: {
    'auth-key': 'knn3-common-AswT-mcYf',
  },
})

export const setAuthKey = (authKey: string) => {
  instance.defaults.headers['auth-key'] = authKey
}
