import axios from "axios";

const baseUrl = "https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/8/query?outFields=*&where=1%3D1&f=geojson";

export const getAll = async()=>{
  const response = await axios.get(baseUrl);
  return response.data.features;
}