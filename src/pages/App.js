import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
  Polyline
} from "react-google-maps";

import * as parksData from "../data/skateParks.json";
import mapStyle from "../mapStyle.js";

function Map() {
  const [selectedPark, setSelectedPark] = useState(null);
  return (
    //Para cada parque en el json, creo un marker
    <GoogleMap
      defaultOptions={{ styles: mapStyle }}
      defaultZoom={10}
      defaultCenter={{ lat: 45.4215, lng: -75.6971 }}
    >
      <Polyline
        path={[
          { lat: 45.383321536272049, lng: -75.3372987731628 },
          { lat: 45.467134581917357, lng: -75.546518086577947 }
        ]}
      />
      {parksData.features.map(park => (
        <Marker
          onClick={() => {
            setSelectedPark(park);
          }}
          icon={{
            url: "/park-icon.png",
            scaledSize: new window.google.maps.Size(50, 50)
          }}
          key={park.properties.PARK_ID}
          position={{
            lat: park.geometry.coordinates[1],
            lng: park.geometry.coordinates[0]
          }}
        />
      ))}

      {selectedPark && (
        <InfoWindow
          position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0]
          }}
          onCloseClick={() => setSelectedPark(null)}
        >
          <div>
            <h4>{selectedPark.properties.NAME}</h4>
            <p>{selectedPark.properties.DESCRIPTIO}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

/*
const InternalMap = props => (
  <GoogleMap defaultZoom={7} defaultCenter={{ lat: -34.897, lng: 151.144 }}>
    <Polyline
      path={[
        { lat: -34.397, lng: 150.644 },
        { lat: -35.397, lng: 151.644 },
        { lat: -36.987, lng: 145.644 }
      ]}
    />
  </GoogleMap>
);
const WrappedMap = withScriptjs(withGoogleMap(InternalMap));
*/
export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
