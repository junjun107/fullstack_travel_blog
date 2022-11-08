import React, { useState, useEffect } from "react";
import { Marker, Popup } from "react-map-gl";
import { listLogEntries } from "../API";
import useLogsContext from "../hooks/useLogsContext";
import MarkerRedSolid from "../asset/marker-red-solid.png";
import LogItem from "./LogItem";
import Spinner from "../asset/spinner.gif";

const LogList = () => {
  const [showPopup, setShowPopup] = useState({});

  // const [logs, setLogs] = useState(null);
  const { logs, dispatch, isLoading } = useLogsContext();

  useEffect(() => {
    getEntries();
  }, []);

  //fetch logs from backend
  const getEntries = async () => {
    const logs = await listLogEntries();
    console.log(logs);
    dispatch({ type: "GET_LOGS", payload: logs });
    dispatch({ type: "SET_LOADING" });
    // setLogs(logs);
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      {logs &&
        logs.map((entry) => (
          <React.Fragment key={entry._id}>
            {/* markers on map */}
            <Marker
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
          </React.Fragment>
        ))}
    </>
  );
};

export default LogList;
