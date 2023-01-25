import { Marker, Popup } from "react-leaflet";
import { memo } from "react";
import { Link } from "react-router-dom";

function GentToilet({
  fields, recordid
}){
  return(
    <Marker position={fields.geopoint}>
      <Popup>
        <p>{fields.adres}</p>
        <p>{fields.status}</p>
        <Link to={`toilet/Gent/${recordid}`}>
          <button className="btn btn-success">Info</button>
        </Link>
      </Popup>
    </Marker>
  )
}

export default memo(GentToilet);