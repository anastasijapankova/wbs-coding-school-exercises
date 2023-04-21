import "leaflet/dist/leaflet.css";
import React from "react";
import "./styles.css";
import MyTabs from "./components/Tabs";
import MyMap from "./components/MyMap";

export default function App() {
  return (
    <div className="App">
      <div className="block">
        {/* ... */}
      </div>
      <div className="block">
        <MyTabs />
        <MyMap lng={13.4597} lat={52.5110} />
      </div>
    </div>
  );
}
