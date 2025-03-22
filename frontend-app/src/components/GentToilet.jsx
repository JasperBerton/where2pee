import { Marker, Popup } from "react-leaflet";
import { memo } from "react";

function GentToilet({
  breedtegraad, lengtegraad, adres, status
}){
  if (status === "Gesloten permanent") {
    return null;
  }
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