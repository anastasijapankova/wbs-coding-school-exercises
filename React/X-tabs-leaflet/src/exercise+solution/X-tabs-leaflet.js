// npm install react-tabs react-leaflet leaflet

// Tabs.js

// Tabs.js
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const MyTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </TabList>

      <TabPanel>
        <h2>Content for Tab 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Content for Tab 2</h2>
      </TabPanel>
    </Tabs>
  );
};

export default MyTabs;

// MyMap.js

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MyMap = ({ lng, lat }) => {
  const position = [lat, lng];

  return (
    <MapContainer center={position} zoom={13} style={{ width: "100%", height: "400px" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Location: {lat}, {lng}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;


// App.js
import "leaflet/dist/leaflet.css";
import React from "react";
import "./styles.css";
import MyTabs from "./Tabs";
import MyMap from "./MyMap";

export default function App() {
  return (
    <div className="App">
      <div className="block">
        {/* ... */}
      </div>
      <div className="block">
        <MyTabs />
        <MyMap lng={-122.4194} lat={37.7749} />
      </div>
    </div>
  );
}
