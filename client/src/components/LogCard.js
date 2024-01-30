import { Typography, CardMedia, CardContent, Card, Grid } from "@mui/material";
import "@fontsource/roboto"; // Defaults to weight 400.
import StarIcon from "@mui/icons-material/Star";
import Chip from "@mui/material/Chip";

export default function LogCard({ log }) {
  return (
    <Grid item xs={6}>
      <Card
        sx={{
          maxWidth: 300,
          border: 1,
          m: 1,
          p: 2,
          borderRadius: 3,
          borderColor: "#D8D8D8",
          boxShadow: "none",
        }}
      >
        <CardMedia sx={{ height: 200, borderRadius: 3 }} image={log.image} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {log.title}
          </Typography>
          <Chip icon={<StarIcon />} label={log.rating} />
          <Typography variant="body2" color="text.secondary">
            {log.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
