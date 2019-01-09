import axios from 'axios';

const fetch = axios.create({
  baseURL:'/api',
  timeout:1000,
})

export const IndexApi = ()=>{
  return fetch({
    url:'/index.json',
    method:'get'
  })
}

export const CityApi = ()=>{
  return fetch({
    url:'/city.json',
    method:'get'
  })
}

export const DetailApi = (params)=>{
  return fetch({
    url:'/detail.json',
    params:params,
    method:'get'
  })
}