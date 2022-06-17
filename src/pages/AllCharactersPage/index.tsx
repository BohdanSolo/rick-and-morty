import React from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import AppPagination from "../../components/AppPagination";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Container,
  Grid,
  IconButton,
} from "@mui/material";

const AllCharactersPage = () => {
  const allCharacters = useAppSelector(
    (state) => state.allCharacters.characters
  );

  return (
    <Container maxWidth="xl">
      <ul>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            margin: "50px auto 20px",
          }}
        >
          {allCharacters?.map(({ name, id, image, status }) => (
            <li key={id} style={{ paddingBottom: "30px" }}>
              <Card sx={{ width: 300, height: 490 }}>
                <CardActionArea
                  sx={{ paddingBottom: "0px", marginBottom: "0px" }}
                >
                  <Link
                    to={`/characters/${id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={image}
                      alt={name}
                    />
                    <CardContent
                      sx={{ paddingBottom: "0px", marginBottom: "0px" }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color="secondary"
                        fontWeight="bold"
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="primary"
                        sx={{
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          color: status === "Dead" ? "red" : status === "unknown" ? "#a29d9d" : "#56ca3a"
                        }}
                      >
                        {status}
                      </Typography>
                    </CardContent>
                  </Link>
                </CardActionArea>
                <CardActions
                  disableSpacing
                  sx={{ paddingTop: "0px", marginTop: "0px" }}
                >
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </li>
          ))}
        </Grid>
      </ul>
      <AppPagination />
    </Container>
  );
};

export default React.memo(AllCharactersPage);
