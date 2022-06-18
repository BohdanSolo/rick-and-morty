import React, {useEffect, useState, useCallback} from "react";
import {useAppSelector} from "../../hooks/reduxHooks";
import AppPagination from "../../components/AppPagination";
import {Link, useLocation} from "react-router-dom";
import {
    Container,
    Grid, InputAdornment, TextField,
} from "@mui/material";
import CustomCard from "../../UI/CustomCard";
import {useActions} from "../../hooks/useActions";
import {ALL_CHARACTERS_URL} from "../../api/charactersAPI";
import SearchIcon from "@mui/icons-material/Search";
import useDebounce from "../../hooks/useDebounce";

const AllCharactersPage = () => {
    const location = useLocation();
    const [pageNumber, setPageNumber] = useState<number>(parseInt(location.search?.split("=")[1])||1);
    const [searchInputValue, setSearchInputValue] = useState<string>("");
    const allCharacters = useAppSelector((state) => state.allCharacters.characters);
    const isNotFound = useAppSelector((state) => state.allCharacters.info.notFoundError);
    const {allCharactersAsyncThunk} = useActions()
    const debouncedCallback = useDebounce(allCharactersAsyncThunk, 300);

    useEffect(() => {
        debouncedCallback(`${ALL_CHARACTERS_URL}/?page=${pageNumber}&name=${searchInputValue}`);
    }, [pageNumber, searchInputValue]);


    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchInputValue(e.target.value);
    },[]);


    return (
        <Container maxWidth="xl">
            <Grid container sx={{display: "flex", justifyContent: "center", marginBottom: "50px"}}>
                <Grid item xs={6}>
                    <TextField
                        onChange={handleInputChange}
                        value={searchInputValue}
                        variant="outlined"
                        label="Search character by name"
                        fullWidth
                        error={isNotFound}
                        helperText={isNotFound ? 'Not found, last result is displayed' : ''}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon/>
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
                            justifyContent: "flex-start",
                            flexWrap: "wrap",
                            margin: "0 auto 20px",
                        }}
                    >
                        {allCharacters?.map(({name, id, image, status}) => (
                            <li key={id} style={{paddingBottom: "30px", marginRight: "70px"}}>
                                <Link to={`/characters/${id}`} style={{textDecoration: "none"}}>
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

                <AppPagination pageNumber={pageNumber} setPageNumber={setPageNumber} setSearchInputValue={setSearchInputValue}/>
            </Grid>
        </Container>
    );
};

export default React.memo(AllCharactersPage);
