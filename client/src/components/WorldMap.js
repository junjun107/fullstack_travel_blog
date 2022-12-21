import React, { useState } from "react";
import mapboxgl from "mapbox-gl";
import Map, { Marker, Popup } from "react-map-gl";
import PlaceIcon from "@mui/icons-material/Place";
import LogEntryForm from "./LogEntryForm";
import LogList from "./LogList";

//prevent map-box to support older browser(downgrade)
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass =require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const WorldMap = () => {
  const [addNewEntryLocation, setAddNewEntryLocation] = useState(null); //default is nothing, when set it, show a marker there

  const showAddMarkerPopup = (e) => {
    //console.log(e.lngLat);
    const { lng, lat } = e.lngLat;
    setAddNewEntryLocation({
      longitude: lng,
      latitude: lat,
    });
  };
  return (
    <div className="map">
      <Map //Uncontrolled Map
        initialViewState={{
          longitude: 46,
          latitude: 17,
          zoom: 2,
        }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
        attributionControl={false}
        dragRotate={false}
        doubleClickZoom={false}
        onDblClick={showAddMarkerPopup}
      >
        {/* list of logs map over logItem with Markers and Popup */}
        <LogList />

        {/* if addlocation is true, show a marker & a form in popup to add new location  */}
        {addNewEntryLocation && (
          <>
            <Marker
              latitude={addNewEntryLocation.latitude}
              longitude={addNewEntryLocation.longitude}
            >
              {/* <img src={MarkerRedSolid} className="marker" alt="pin" /> */}
              <PlaceIcon
                style={{
                  fontSize: "60px",
                  color: "#DC3535",
                  cursor: "pointer",
                }}
              />
            </Marker>
            <Popup
              longitude={addNewEntryLocation.longitude}
              latitude={addNewEntryLocation.latitude}
              anchor="top-left"
              closeOnClick={false} //popup stays open when map is clicked
              onClose={() => {
                setAddNewEntryLocation(null);
              }}
            >
              <div>
                <LogEntryForm
                  location={addNewEntryLocation}
                  onClose={() => {
                    //close form
                    setAddNewEntryLocation(null);
                  }}
                />
              </div>
            </Popup>
          </>
        )}
      </Map>
    </div>
  );
};

export default WorldMap;
