import {
  Typography,
  CardMedia,
  CardContent,
  Card,
  Chip,
  Grid,
} from "@mui/material";
import "@fontsource/roboto"; // Defaults to weight 400.
import StarIcon from "@mui/icons-material/Star";

export default function LogCard({ log }) {
  return (
    <Card
      raised={true}
      sx={{
        // maxWidth: 270,
        border: 1,
        m: 1,
        p: 2,
        borderRadius: 2,
        borderColor: "#D8D8D8",
      }}
    >
      <CardMedia
        sx={{ height: 200, borderRadius: 1 }}
        component="img"
        image={log.image}
      />
      {/* <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {log.title}
        </Typography>
        <Chip icon={<StarIcon />} label={log.rating} />
        <Typography variant="body2" color="text.secondary">
          {log.description}
        </Typography>
      </CardContent> */}
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="h6" component="div">
              {log.title}
            </Typography>
          </Grid>
          <Grid item>
            <Chip
              variant="outlined"
              icon={
                <StarIcon
                  color={"warning"}
                  label="Chip Outlined"
                  variant="outlined"
                />
              }
              label={log.rating}
            />
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" marginTop={2}>
          {log.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
