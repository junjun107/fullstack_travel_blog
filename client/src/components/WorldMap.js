import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import MarkerRedSolid from "../asset/marker-red-solid.png";
import LogEntryForm from "./LogEntryForm";
import LogList from "./LogList";

const WorldMap = () => {
  const [addNewEntry, setAddNewEntry] = useState(null);

  const showAddMarkerPopup = (e) => {
    //console.log(e.lngLat);
    const { lng, lat } = e.lngLat;
    setAddNewEntry({
      longitude: lng,
      latitude: lat,
    });
  };
  return (
    <div className="map">
      <Map
        initialViewState={{
          longitude: 46,
          latitude: 17,
          zoom: 4,
        }}
        style={{ width: "100vw", height: "100vh" }}
        // mapStyle="mapbox://styles/mapbox/streets-v9"
        // mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
        mapStyle="mapbox://styles/junjun107/cl9n46hzi001415mu6coxy27i"
        attributionControl={false}
        doubleClickZoom={false}
        onDblClick={showAddMarkerPopup}
      >
        <LogList />

        {addNewEntry && (
          <>
            <Marker
              latitude={addNewEntry.latitude}
              longitude={addNewEntry.longitude}
            >
              <img src={MarkerRedSolid} className="marker" alt="pin" />
            </Marker>
            <Popup
              longitude={addNewEntry.longitude}
              latitude={addNewEntry.latitude}
              anchor="top-left"
              closeOnClick={false} //popup stays open when map is clicked
              onClose={() => setAddNewEntry(null)}
            >
              <div className="formContainer">
                <LogEntryForm
                  location={addNewEntry}
                  onClose={() => setAddNewEntry(null)}
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
