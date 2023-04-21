import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import marker from '../marker-icon.png'
import L from 'leaflet'

const MyMap = ({ lng, lat }) => {
    const position = [lat, lng];

    const customIcon = L.icon({
        iconUrl: marker,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -41],
    });


    return (
        <>
            <h1>Friedrichshain: Boxhagener Kiez</h1>
            <MapContainer center={position} zoom={15} style={{ width: "100%", height: "400px" }}>
                <h1>Friedrichshain: Boxhagener Kiez</h1>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={customIcon}>
                    <Popup>
                        Location: {lat}, {lng}
                    </Popup>
                </Marker>
            </MapContainer>
        </>

    );
};

export default MyMap;