
import React from "react";
import { MapContainer , Popup , Marker, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

function App() {
  const position = [51.505, -0.09]

  return (
    <div className="App">
  <MapContainer center={[51.505, -0.09]} style={{width:"100%", height:"100vh"}} zoom={13} scrollWheelZoom={false}>
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
  );
}

export default App;
