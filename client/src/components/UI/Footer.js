import { Box } from "@mui/material";
import { ReactComponent as MapMyWayLogo } from "../../asset/mapmyway-high-res-logo.svg";

const Footer = () => {
  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: "#1b1b1b",
        fontFamily: `"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans- serif`,

        "& > *": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
        },

        [theme.breakpoints.up("md")]: {
          "& > *": {
            flexDirection: "row",
          },
        },
      })}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <MapMyWayLogo />
      </div>
      <Box sx={{ padding: "1rem 1rem", display: "flex", alignItems: "center" }}>
        {`Copyright ©${new Date().getFullYear()} - MapMyWay`}
      </Box>
    </Box>
  );
};

export default Footer;
