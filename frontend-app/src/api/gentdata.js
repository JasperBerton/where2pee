import axios from 'axios';

const baseUrl = 'https://data.stad.gent/api/records/1.0/search/?dataset=publiek-sanitair-gent&q=&rows=200'

export const getAll = async()=>{
  const response = await axios.get(baseUrl);
  return response.data;
}

export const getById = async(id)=>{
  const response = await axios.get(`${baseUrl}&refine.recordid=${id}`)
  return response.data.records;
}