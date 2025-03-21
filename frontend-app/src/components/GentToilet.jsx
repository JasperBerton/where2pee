import { Marker, Popup } from "react-leaflet";
import { memo } from "react";

function GentToilet({
  agent, breedtegraad, lengtegraad, adres, status
}){
  console.log(agent)
  return(
    <Marker position={[breedtegraad, lengtegraad]}>
      <Popup>
        <p>{adres}</p>
        <p>{status}</p>
      </Popup>
    </Marker>
  )
}

export default memo(GentToilet);