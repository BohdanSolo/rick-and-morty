import React from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import AppPagination from "../../components/AppPagination";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
} from "@mui/material";
import CustomCard from "../../UI/CustomCard";

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
              <Link to={`/characters/${id}`} style={{ textDecoration: "none" }}>
                <CustomCard
                  name={name}
                  image={image}
                  status={status}
                  height={+425}
                />
              </Link>
            </li>
          ))}
        </Grid>
      </ul>
      <AppPagination />
    </Container>
  );
};

export default React.memo(AllCharactersPage);
