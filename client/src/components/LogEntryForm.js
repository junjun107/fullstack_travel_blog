import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  InputLabel,
  Rating,
  Box,
  Input,
  TextField,
  styled,
  Paper,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import useLogsContext from "../hooks/useLogsContext";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const LogEntryForm = ({ location, onClose }) => {
  const [loading, setLoading] = useState(false); //set loading to true when making request, when done set to false
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const { addLog } = useLogsContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      latitude: location.latitude,
      longitude: location.longitude,
      title,
      rating,
      description,
      image,
    };

    addLog(data);
    console.log("current log: " + JSON.stringify(data));
    onClose();
  };

  return (
    <Card
      component="form"
      onSubmit={handleSubmit}
      sx={{ minWidth: 200, borderBottom: 1 }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          City Name
        </Typography>
        <TextField
          name="title"
          type="text"
          sx={{ marginBottom: 2 }}
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Rating
        </Typography>

        <StyledRating
          className="heart_rating"
          sx={{ marginBottom: 2 }}
          name="customized-color"
          defaultValue={1}
          getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
          icon={<FavoriteIcon />}
          emptyIcon={<FavoriteBorderIcon />}
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Description
        </Typography>

        <TextField
          id="description"
          name="description"
          value={description}
          sx={{ marginBottom: 2 }}
          onChange={(e) => setDescription(e.target.value)}
          maxRows={4}
        />

        <Typography
          htmlFor="image"
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          Image Url
        </Typography>
        <Input
          id="image"
          name="image"
          value={image}
          type="text"
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit" className="submitBtn" disabled={loading}>
          ADD
        </button>
      </CardContent>
    </Card>
  );
};

export default LogEntryForm;
