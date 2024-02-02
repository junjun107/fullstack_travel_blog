import React from "react";
import StarIcon from "@mui/icons-material/Star";
import useLogsContext from "../hooks/useLogsContext";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const LogItem = ({ entry }) => {
  const { deleteLog } = useLogsContext();

  const logDate = new Date(entry.createdAt).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const handleDelete = (id) => {
    deleteLog(entry._id);
    // console.log("logitem from front:" + entry._id);
  };

  return (
    <Card sx={{ minWidth: 275, borderBottom: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Place
        </Typography>
        <Typography variant="h5" component="div">
          {entry.title}
        </Typography>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Rating
        </Typography>

        <Typography sx={{ mb: 1 }} color="text.secondary">
          {Array.from(Array(entry.rating), (_, i) => (
            <StarIcon key={i} className="star" color={"warning"} />
          ))}
        </Typography>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Notes
        </Typography>
        <Typography variant="body2" gutterBottom>
          {entry.description}
        </Typography>
        {entry.image && (
          <img src={entry.image} alt={entry.title} style={{ width: "200px" }} />
        )}
      </CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          m: 1,
          borderRadius: 1,
        }}
      >
        {/* <button onClick={handleEdit}>
          <EditIcon />
        </button> */}
        <Typography variant="caption" display="block" gutterBottom>
          {logDate}
        </Typography>
        <Button variant="outlined" size="small" onClick={handleDelete}>
          {/* <DeleteIcon fontSize="small" /> */}
          Delete
        </Button>
      </Box>
    </Card>
  );
};

export default LogItem;
