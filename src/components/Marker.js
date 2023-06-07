import React, { useState, useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import { divIcon } from 'leaflet';
const UserMarker = ({ countryData }) => {
    const {capitalInfo,latlng,capital} = countryData
    const [userLocation, setUserLocation] = useState(null);
    const map = useMap();
    const icon = divIcon({
        className: 'user-marker-icon',
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff0000" width="36px" height="36px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12c0 5.51 4.48 10 10 10s10-4.49 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8zm0-15c-3.31 0-6 2.69-6 6 0 3.31 2.69 6 6 6s6-2.69 6-6c0-3.31-2.69-6-6-6zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>`
    });
    // get the navigater to locate the users current position
    useEffect(() => {
        const getUserLocation = () => {
            navigator.geolocation.getCurrentPosition(
                () => {
                    const [latitude, longitude] = capitalInfo?.latlng || latlng;
                    setUserLocation([latitude, longitude]);

                },
                (error) => {
                    console.error('Error retrieving user location:', error);
                }
            );
        };

        getUserLocation();
    }, [countryData]);

    // Zoom and pan the map to show the user's location
    useEffect(() => {
        if (userLocation) {
            map.flyTo(userLocation, 10);
        }
    }, [userLocation, map]);

    return (
        <>
            {userLocation && (
                <Marker position={userLocation} icon={icon}>
                    <Popup closeButton={false} autoClose={false} open={true}>
                        <div>
                        <h3 className='text-2xl'>Your are in 👉 {capital}</h3>
                        </div>
                    </Popup>
                </Marker>
            )}
        </>
    );
};

export default UserMarker;
