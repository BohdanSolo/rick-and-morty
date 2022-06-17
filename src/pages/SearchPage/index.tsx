import { Container, Grid, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { ALL_CHARACTERS_URL } from "../../api/charactersAPI";
import { useAppSelector } from "../../hooks/reduxHooks";
import { Link } from "react-router-dom";
import CustomCard from "../../UI/CustomCard";

const SearchPage = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const { allCharactersAsyncThunk } = useActions();
  const searchedCharacters = useAppSelector(
    (state) => state.allCharacters.characters
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  useEffect(() => {
    allCharactersAsyncThunk(`${ALL_CHARACTERS_URL}/?name=${searchInputValue}`);
  }, [searchInputValue]);

  return (
    <Container maxWidth="xl">
      <Grid container sx={{ display: "flex", justifyContent: "center", marginBottom: "50px" }}>
        <Grid item xs={6}>
          <TextField
            value={searchInputValue}
            onChange={handleInputChange}
            variant="outlined"
            label="Search character by name"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ul>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              margin: "0 auto 20px",
            }}
          >
            {searchedCharacters?.map(({ name, id, image, status }) => (
              <li key={id} style={{ paddingBottom: "30px" }}>
                <Link
                  to={`/characters/${id}`}
                  style={{ textDecoration: "none" }}
                >
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
      </Grid>
    </Container>
  );
};

export default SearchPage;
