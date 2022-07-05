import React, {useEffect, useId, useState} from 'react';

import {useLocation} from 'react-router-dom';

import {Container, Grid, Card, CardContent, Typography, CardActionArea, styled} from '@mui/material';

import {useActions} from '../../hooks/useActions';
import {LOCATIONS_URL} from '../../constants/charactersAPI';
import {useAppSelector} from '../../hooks/reduxHooks';
import useDebounce from '../../hooks/useDebounce';
import AppPagination from '../../components/AppPagination';
import InputSearch from '../../components/InputSearch';
import {RouteNames} from '../../types/routes';


const LocationsPage = (): JSX.Element => {
  const location = useLocation();
  const [pageNumber, setPageNumber] = useState<number>(
    parseInt(location.search?.split('=')[1]) || 1,
  );
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const locations = useAppSelector((state) => state.allLocations.locations);
  const pagesCount = useAppSelector(
    (state) => state.allLocations.locationsInfo.pages,
  );
  const isNotFound = useAppSelector(
    (state) => state.allLocations.locationsInfo.notFoundError,
  );
  const {getLocationsAsyncThunk} = useActions();
  const debouncedCallback = useDebounce(getLocationsAsyncThunk, 300);
  const id = useId();

  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInputValue(e.target.value);
    setPageNumber(1);
  };

  useEffect(() => {
    debouncedCallback(`${LOCATIONS_URL}?page=${pageNumber}&name=${searchInputValue}`);
  }, [pageNumber, searchInputValue]);


  const ListItem = styled('li')(({theme}) => ({
    paddingBottom: '30px',
    marginRight: '75px',
    [theme.breakpoints.down('md')]: {
      marginRight: '30px',
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: '0',
    },
  }));

  return (
    <Container maxWidth='xl'>
      <Grid
        container
        sx={{display: 'flex', justifyContent: 'center', marginBottom: '50px'}}
      >
        <Grid item xs={10} md={8} lg={6}>
          <InputSearch
            handleInputChange={handleSearchQuery}
            searchInputValue={searchInputValue}
            placeholder={'Search location by name'}
            isNotFound={isNotFound}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ul>
          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              margin: '0 auto 20px',
            }}
          >
            {locations?.map((location) => (
              <ListItem
                key={id}
              >
                <Card sx={{width: 300, height: 150}}>
                  <CardActionArea>
                    <CardContent>
                      <Typography sx={{fontSize: 14}} color='text.secondary' gutterBottom>
                                                Location №{location.id}
                      </Typography>
                      <Typography variant='h5' component='div'>
                        {location.name}
                      </Typography>
                      <Typography sx={{mb: 1.5}} color='text.secondary'>
                        {location.type}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </ListItem>
            ))}
          </Grid>
        </ul>

      </Grid>
      <AppPagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        pagesCount={pagesCount}
        route={RouteNames.ALL_LOCATIONS}
      />
    </Container>
  );
};

export default LocationsPage;
