import axios from "axios";

const baseUrl = "https://opendata.brussel.be/api/records/1.0/search/?dataset=toiletten&q=&rows=75";

export const getAll = async()=>{
  //const response = await axios.get(baseUrl);
  //return response.data;
}

export const getById = async(id)=>{
  const response = await axios.get(`${baseUrl}&refine.recordid=${id}`)
  return response.data.records;
}