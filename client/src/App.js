import React, { useState, useEffect } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import listLogEntries from "./API";
//import pinLogo from "./asset/orange-pin.svg";
import MarkerRedSolid from "./asset/marker-red-solid.png";
import LogEntryForm from "./LogEntryForm";

function App() {
  const [logEntries, setLongEntries] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [addNewEntry, setAddNewEntry] = useState(null);

  //fetch logs from backend
  const getEntries = async () => {
    const logEntries = await listLogEntries();
    setLongEntries(logEntries);
    console.log(logEntries);
  };

  useEffect(() => {
    getEntries();
  }, []);

  const showAddMarkerPopup = (e) => {
    console.log(e.lngLat);
    const { lng, lat } = e.lngLat;
    setAddNewEntry({
      longitude: lng,
      latitude: lat,
    });
  };
  return (
    <Map
      initialViewState={{
        longitude: 46,
        latitude: 17,
        zoom: 2,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      attributionControl={false}
      doubleClickZoom={false}
      onDblClick={showAddMarkerPopup}
    >
      {logEntries.map((entry) => (
        <React.Fragment key={entry._id}>
          {/* markers on map */}
          <Marker
            longitude={entry.longitude}
            latitude={entry.latitude}
            anchor="bottom"
            onClick={() => {
              console.log("marker clicked");
              setShowPopup({
                [entry._id]: true,
              });
            }}
          >
            <img src={MarkerRedSolid} className="marker" alt="pin" />
          </Marker>

          {/* show popup only if log has id */}
          {showPopup[entry._id] ? (
            <Popup
              longitude={entry.longitude}
              latitude={entry.latitude}
              anchor="top-left"
              closeOnMove={true} // popup closes when map moves
              closeOnClick={false} //popup stays open when map is clicked
              onClose={() => setShowPopup({})}
            >
              <div className="popup">
                <h3>{entry.title}</h3>
                <span>{entry.rating}</span>
                <p>{entry.description}</p>
                {entry.image && (
                  <img
                    src={entry.image}
                    alt={entry.title}
                    style={{ width: "300px" }}
                  />
                )}
              </div>
            </Popup>
          ) : null}
        </React.Fragment>
      ))}

      {addNewEntry ? (
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
            closeOnMove={true} // popup closes when map moves
            closeOnClick={false} //popup stays open when map is clicked
            onClose={() => setAddNewEntry(null)}
          >
            <div className="popup">
              <LogEntryForm />
            </div>
          </Popup>
        </>
      ) : null}
    </Map>
  );
}

export default App;
