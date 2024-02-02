import PlaceIcon from "@mui/icons-material/Place";
import { Box, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
// import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import React, { useState, useEffect } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { Virtuoso } from "react-virtuoso";
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
  // const [filteredData, setFilteredData] = useState([]);

  const { logs } = useLogsContext();

  // useEffect(() => {
  //   // Filter out items that might cause the "zero-sized element" error
  //   const validItems = logs.filter(
  //     (item) => item.image && item.image.trim() !== ""
  //   );
  //   setFilteredData(validItems);
  // }, [logs]);

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
    <Box
      sx={{ flexGrow: 1, flex: "auto", overflowY: "hidden", display: "flex" }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        component="main"
        justifyContent="center"
        sx={{
          height: "100vh",
        }}
      >
        {/* left cards */}
        <Grid item xs={6}>
          <Virtuoso
            style={{ height: "100%" }}
            totalCount={Math.ceil(logs.length / 2)} // Adjust totalCount to account for pairs
            itemContent={(index) => (
              <Grid container spacing={1}>
                {/* Render the pair of logs for the current index */}
                {logs && index * 2 < logs.length && (
                  <Grid item xs={6} md={6} lg={6} key={logs[index * 2]._id}>
                    <LogCard log={logs[index * 2]} />
                  </Grid>
                )}
                {logs && index * 2 + 1 < logs.length && (
                  <Grid item xs={6} md={6} lg={6} key={logs[index * 2 + 1]._id}>
                    <LogCard log={logs[index * 2 + 1]} />
                  </Grid>
                )}
              </Grid>
            )}
          />
        </Grid>
        {/* right map */}
        <Grid item xs={6}>
          <Map //Uncontrolled Map
            initialViewState={{
              longitude: 46,
              latitude: 17,
              zoom: 2,
            }}
            style={{ width: "100%", height: "100%" }}
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
