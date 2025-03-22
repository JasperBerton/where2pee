import { Marker, Popup } from "react-leaflet";
import { memo } from "react";

function BrusselToilet({
  location, geo_point_2d, openinghours
}){
  return(
    <Marker position={[geo_point_2d.lat, geo_point_2d.lon]}>
      <Popup>
        <p>{location}</p>
        <p>Open gedurende: {openinghours}</p>
      </Popup>
    </Marker>
  )
}

export default memo(BrusselToilet);