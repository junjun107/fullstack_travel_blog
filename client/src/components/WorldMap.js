import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import MarkerRedSolid from "../asset/marker-red-solid.png";
import LogEntryForm from "./LogEntryForm";
import LogList from "./LogList";

const WorldMap = () => {
  const [addNewEntryLocation, setAddNewEntryLocation] = useState(null);//default is nothing, when set it, show a marker there

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
        // mapStyle="mapbox://styles/mapbox/streets-v9"
        // mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
        mapStyle="mapbox://styles/junjun107/cl9n46hzi001415mu6coxy27i"
        attributionControl={false}
        doubleClickZoom={false}
        onDblClick={showAddMarkerPopup}
      >
        {/* map logs over logItem in popup */}
        <LogList />

      {/* if addlocation is true, show a marker & a form in popup to add new location  */}
        {addNewEntryLocation && (
          <>
            <Marker
              latitude={addNewEntryLocation.latitude}
              longitude={addNewEntryLocation.longitude}
            >
              <img src={MarkerRedSolid} className="marker" alt="pin" />
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
              <div className="formContainer">
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
