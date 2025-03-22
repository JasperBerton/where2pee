import axios from "axios";

const baseUrl = "https://opendata.brussel.be/api/explore/v2.1/catalog/datasets/toilettes_publiques_vbx/records?limit=100";

export const getAll = async()=>{
  const response = await axios.get(baseUrl);
  return response.data.results;
}

export const getById = async(id)=>{
  const response = await axios.get(`${baseUrl}&refine.recordid=${id}`)
  return response.data.records;
}