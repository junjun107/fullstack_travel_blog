import React, { useState, useEffect } from "react";
import { Marker, Popup } from "react-map-gl";
import { listLogEntries } from "../API";
import useLogsContext from "../hooks/useLogsContext";
import MarkerRedSolid from "../asset/marker-red-solid.png";
import LogItem from "./LogItem";

const LogList = () => {
  const [showPopup, setShowPopup] = useState({});

  const { logs } = useLogsContext();

  return (
    <>
      {logs &&
        logs.map((entry) => (
          <div key={entry._id}>
            {/* markers on map */}
            <Marker
              // key={entry._id}
              longitude={entry.longitude}
              latitude={entry.latitude}
              anchor="bottom"
              onClick={() => {
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
                <LogItem entry={entry} />
              </Popup>
            ) : null}
          </div>
        ))}
    </>
  );
};

export default LogList;
