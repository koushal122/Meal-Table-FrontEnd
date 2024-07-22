import http from './http'
import { BASE_URL } from '../config'

const getFullPath = endPoint => BASE_URL+endPoint;

const genericInterface=(endPoint)=>({
    create: async(payload,params={})=> http.post(getFullPath(endPoint),payload,{params}),
    read: async(params={})=> http.get(getFullPath(endPoint),{params}),
    delete: async()=> http.delete(getFullPath(endPoint))
})

export default genericInterface;