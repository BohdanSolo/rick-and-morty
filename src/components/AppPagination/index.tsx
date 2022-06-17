import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useActions } from "../../hooks/useActions";
import { ALL_CHARACTERS_URL } from "../../api/charactersAPI";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";

const AppPagination = () => {
  const location = useLocation();
  const [pageNumber, setPageNumber] = useState<number>(
    parseInt(location.search?.split("=")[1]) || 1
  );
  const { allCharactersAsyncThunk } = useActions();
  const pagesCount = useAppSelector((state) => state.allCharacters.info.pages);



  useEffect(() => {
    allCharactersAsyncThunk(`${ALL_CHARACTERS_URL}/?page=${pageNumber}`);
  }, [pageNumber]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNumber(value);
  };


  return (
    <Grid
      sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}
    >
      <Stack spacing={2}>
        <Pagination
          color="primary"
          count={pagesCount}
          size="large"
          showFirstButton
          showLastButton
          onChange={handleChange}
          page={pageNumber}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              sx={{ padding: "0 20px" }}
              to={`/characters/?page=${item.page}`}
              {...item}
            />
          )}
        />
      </Stack>
    </Grid>
  );
};

export default AppPagination;
