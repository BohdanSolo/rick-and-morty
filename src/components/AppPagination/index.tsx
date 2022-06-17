import React from "react";
import { Pagination, PaginationItem, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";

interface AppPaginationProps {
  pageNumber: number,
  setPageNumber: (pageNumber: number) => void
  setSearchInputValue: (searchQuery: string) => void
}

const AppPagination: React.FC<AppPaginationProps> = ({pageNumber, setPageNumber, setSearchInputValue }) => {
  const pagesCount = useAppSelector((state) => state.allCharacters.info.pages);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNumber(value);
    setSearchInputValue(''); // Clear search input when user is clicking on pagination number
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
