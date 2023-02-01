import { Marker, Popup } from "react-leaflet";
import { memo } from "react";
import { Link } from "react-router-dom";

function AntwerpToilet({
  geometry,properties
}){
  return(
    <Marker position={[geometry.coordinates[1],geometry.coordinates[0]]}>
      <Popup>
        <p>{properties.OMSCHRIJVING}</p>
        <Link to={`toilet/Brussel/`}>
          <button className="btn btn-success">Info</button>
        </Link>
      </Popup>
    </Marker>
  )
}

export default memo(AntwerpToilet);