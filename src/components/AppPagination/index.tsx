import React from 'react';
import {Pagination, PaginationItem, Grid} from '@mui/material';
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom';

interface AppPaginationProps {
    pageNumber: number,
    setPageNumber: (pageNumber: number) => void
    setSearchInputValue?: (searchQuery: string) => void
    pagesCount: number;
    route: string
}

const AppPagination = ({pageNumber, setPageNumber, pagesCount, route }: AppPaginationProps): JSX.Element => {

  const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    setPageNumber(value);
    window.scrollTo(0, 0);
  };


  return (
    <Grid
      sx={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}
    >
      <Stack spacing={2}>
        <Pagination
          color='primary'
          count={pagesCount}
          size='large'
          showFirstButton
          showLastButton
          onChange={handleChange}
          page={pageNumber}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              sx={{padding: '0 20px'}}
              to={`${route}/?page=${item.page}`}
              {...item}
            />
          )}
        />
      </Stack>
    </Grid>
  );
};

export default React.memo(AppPagination);
