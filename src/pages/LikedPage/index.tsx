import React from "react";
import { CardActions, Container, Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import CustomCard from "../../UI/CustomCard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppSelector } from "../../hooks/reduxHooks";

const LikedPage = () => {
  const favoriteCharactersList = useAppSelector(
    (state) => state.favorite.favoriteCharacters
  );
  return (
    <Container maxWidth="xl">
      <Grid item xs={12}>
        <ul>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexWrap: "wrap",
              margin: "0 auto 20px",
            }}
          >
            {favoriteCharactersList?.map(({ name, id, image, status }) => (
              <li key={id} style={{ paddingBottom: "30px", marginRight: "70px" }}>
                <Link
                  to={`/characters/${id}`}
                  style={{ textDecoration: "none" }}
                >
                  <CustomCard
                    name={name}
                    image={image}
                    status={status}
                    height={+460}
                  >
                    <CardActions
                      disableSpacing
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon color="primary" />
                      </IconButton>
                    </CardActions>
                  </CustomCard>
                </Link>
              </li>
            ))}
          </Grid>
        </ul>
      </Grid>
    </Container>
  );
};

export default LikedPage;
