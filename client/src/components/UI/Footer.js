import { Box, CardMedia } from "@mui/material";
// import { MENU_ITEMS } from "helpers/Constants";
// import useLocationHook from "hooks/useLocationHook";
import { Link } from "react-router-dom";
// import { tenantId } from "../../helpers/Configuration";

const Footer = () => {
  // const constantLinks = MENU_ITEMS.map((item, index) => {
  //   const { text, link } = item;
  //   return (
  //     <Link
  //       style={{
  //         padding: "0 !important",
  //         color: "#1b1b1b",
  //         textDecoration: "none",
  //         fontSize: "16px",
  //         textTransform: "uppercase",
  //         margin: ".4em 0 .4em 1.5em",
  //         "&:hover": {
  //           textDecoration: "underline",
  //         },
  //       }}
  //       key={index}
  //       to={link}
  //     >
  //       {text}
  //     </Link>
  //   );
  // });

  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        backgroundColor: "#FFF",
        padding: "1rem 1rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: "#1b1b1b",
        [theme.breakpoints.up("md")]: {
          alignItems: "flex-start",
        },
        [theme.breakpoints.down("md")]: {
          alignItems: "flex-end",
        },
        fontFamily: `"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans- serif`,
      })}
    >
      Map My Way
      <Box
        sx={(theme) => ({
          justifyContent: "center",
          alignItems: "flex-end",
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px",
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "4em",
          },
          [theme.breakpoints.down("md")]: {
            height: "180px",
          },
        })}
      >
        constantLinks
      </Box>
      <div>
        {`Copyright ©${new Date().getFullYear()} -`}
        {/* <Link color="inherit" href="https://hackforla.org/">
          MapMyWay
        </Link> */}
        MapMyWay
      </div>
    </Box>
  );
};

export default Footer;
