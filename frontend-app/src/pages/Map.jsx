import Navigation from "../components/Navigation"
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker, Popup } from "react-leaflet"

export default function Map(){
return <div>
    <Navigation/>
    <h1>Toiletten</h1>
    <MapContainer center={[51.0543422, 3.7174243]} zoom={13} scrollWheelZoom={false} id="map">
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
</div>
}