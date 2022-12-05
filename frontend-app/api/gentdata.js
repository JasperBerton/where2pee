import axios from 'axios';

const baseUrl = 'https://data.stad.gent/api/records/1.0/search/?dataset=publiek-sanitair-gent&q='

export const getAll = async()=>{
  const response = await axios.get(baseUrl);
  console.log(response);
}