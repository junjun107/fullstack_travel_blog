import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import Map, { Marker, Popup } from "react-map-gl";
import PlaceIcon from "@mui/icons-material/Place";
import LogEntryForm from "./LogEntryForm";
import LogList from "./LogList";
import {
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Paper,
  FormControlLabel,
} from "@mui/material";

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
    // parent grid container
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        // component="main"
        justifyContent="center"
        sx={{
          height: "100vh",
        }}
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          component={Paper}
          elevation={6}
          square
          sx={{ m: "auto" }}
        >
          <Box
            sx={{
              my: 2,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar> */}

            {/* <Typography component="h1" variant="h6">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              // onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box> */}
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} md={6}>
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

            {addNewEntryLocation && (
              <>
                <Marker
                  latitude={addNewEntryLocation.latitude}
                  longitude={addNewEntryLocation.longitude}
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorldMap;
