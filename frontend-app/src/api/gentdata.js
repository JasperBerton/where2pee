import axios from 'axios';

const baseUrl = 'https://data.stad.gent/api/explore/v2.1/catalog/datasets/publiek-sanitair-gent/records?limit=100'

export const getAll = async()=>{
  const response = await axios.get(baseUrl);
  const part2 = await axios.get(`${baseUrl}&offset=100`);
  const part3 = await axios.get(`${baseUrl}&offset=200`);
  console.log(part2.data.results);
  const total = [...response.data.results, ...part2.data.results, ...part3.data.results];
  return total;
}

export const getById = async(id)=>{
  const response = await axios.get(`${baseUrl}&refine.recordid=${id}`)
  return response.data.records;
}