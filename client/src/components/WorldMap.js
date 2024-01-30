import PlaceIcon from "@mui/icons-material/Place";
import { Box, Grid } from "@mui/material";
// import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import useLogsContext from "../hooks/useLogsContext";
import LogCard from "./LogCard";
import LogEntryForm from "./LogEntryForm";
import LogList from "./LogList";

// for react-map-gl
import "mapbox-gl/dist/mapbox-gl.css";
//prevent map-box to support older browser(downgrade)
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
// mapboxgl.workerClass =
//   require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const WorldMap = () => {
  const [location, setLocation] = useState(null);

  const { logs } = useLogsContext();

  const showAddMarkerPopup = (e) => {
    const { lng, lat } = e.lngLat;
    const arr = [lng, lat];
    const ll = mapboxgl.LngLat.convert(arr);
    console.log(ll);
    setLocation({
      longitude: ll.lng,
      latitude: ll.lat,
    });
  };
  console.log(logs);
  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Grid
        container
        component="main"
        justifyContent="center"
        sx={{
          height: "100vh",
        }}
      >
        {/* left cards */}
        <Grid item xs={12} sm={6} md={6}>
          <Grid container>
            {logs && logs.map((log) => <LogCard log={log} key={log._id} />)}
          </Grid>
        </Grid>

        {/* right map */}
        <Grid item xs={12} sm={6}>
          <Map //Uncontrolled Map
            initialViewState={{
              longitude: 46,
              latitude: 17,
              zoom: 2,
            }}
            style={{ width: 800, height: "100%" }}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            mapStyle="mapbox://styles/junjun107/clk32th26004l01rj7pqp0uu1"
            attributionControl={false}
            dragRotate={false}
            doubleClickZoom={false}
            onDblClick={showAddMarkerPopup}
          >
            <LogList />

            {location && (
              <>
                <Marker
                  latitude={location.latitude}
                  longitude={location.longitude}
                >
                  <PlaceIcon
                    style={{
                      fontSize: "60px",
                      color: "#DC3535",
                      cursor: "pointer",
                    }}
                  />
                </Marker>
                <Popup
                  longitude={location.longitude}
                  latitude={location.latitude}
                  anchor="top-left"
                  closeOnClick={false}
                  onClose={() => {
                    setLocation(null);
                  }}
                >
                  <div>
                    <LogEntryForm
                      location={location}
                      onClose={() => {
                        setLocation(null);
                      }}
                    />
                  </div>
                </Popup>
              </>
            )}
          </Map>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorldMap;
