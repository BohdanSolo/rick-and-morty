import { Container, Grid,TextField, InputAdornment  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const SearchPage = () => {
    return (
        <Container maxWidth="xl">
            <Grid container sx={{display: "flex", justifyContent: "center"}}>
                <Grid item xs={6} >
                <TextField variant="outlined" label="Search character by name" fullWidth InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SearchPage;