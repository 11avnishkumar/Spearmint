import React, { useContext,useEffect} from 'react';
import { MapContainer, TileLayer,useMapEvents} from 'react-leaflet'
import './map.css'
import "leaflet/dist/leaflet.css"
import { context } from '../context/Context'
import CountryName from './CountryName';
import UserMarker from './Marker';

const WorldMap = () => {
  const {countryData,setClickedCountry} = useContext(context) // context data
  
  const handleClick = async (e) => {
    const { lat, lng } = e.latlng;
    
    const country = await CountryName(lat, lng);
    if(country) setClickedCountry(country); // set the countryName when user clicks on the map
    
  };

  return (
    <MapContainer  center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ClickHandler onClick={handleClick} />
      {countryData && 
        <UserMarker countryData={countryData}  />
      }
    </MapContainer>
  );
};

const ClickHandler = ({ onClick }) => {
  useMapEvents({
    click: onClick,
  });
  return null;
};

export default WorldMap;
