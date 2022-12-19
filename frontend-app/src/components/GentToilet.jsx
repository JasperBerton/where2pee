import { Marker, Popup } from "react-leaflet";
import { memo } from "react";

function GentToilet({
  fields
}){
  return(
    <Marker position={fields.geopoint}>
      <Popup>
        <p>{fields.adres}</p>
        <p>{fields.status}</p>
        <button>Test</button>
      </Popup>
    </Marker>
  )
}

export default memo(GentToilet);