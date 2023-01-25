import { Marker, Popup } from "react-leaflet";
import { memo } from "react";
import { Link } from "react-router-dom";

function BrusselToilet({
  fields,recordid
}){
  return(
    <Marker position={fields.wgs84_lalo}>
      <Popup>
        <p>{fields.adrvoisnl}</p>
        <p>{fields.gratuite}</p>
        <Link to={`toilet/${recordid}`}>
          <button className="btn btn-success">Info</button>
        </Link>
      </Popup>
    </Marker>
  )
}

export default memo(BrusselToilet);