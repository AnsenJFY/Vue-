import axios from 'axios';

const fetch = axios.create({
  baseURL:'http://localhost:8080/api',
  timeout:1000,
})

export const IndexApi = ()=>{
  return fetch({
    url:'/index.json',
    method:'get'
  })
}