import axios from 'axios';

const baseUrl = 'https://data.stad.gent/api/explore/v2.1/catalog/datasets/publiek-sanitair-gent/records?limit=100'

export const getAll = async()=>{
  const response = await axios.get(baseUrl);
  console.log(response);
  console.log(response.data.results);
  return response.data.results;
}

export const getById = async(id)=>{
  const response = await axios.get(`${baseUrl}&refine.recordid=${id}`)
  return response.data.records;
}