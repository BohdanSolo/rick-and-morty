import React, {useEffect, useState} from "react";
import {useAppSelector} from "../../hooks/reduxHooks";
import AppPagination from "../../components/AppPagination";
import {Link, useLocation} from "react-router-dom";
import {Container, Grid} from "@mui/material";
import CustomCard from "../../UI/CustomCard";
import {useActions} from "../../hooks/useActions";
import {ALL_CHARACTERS_URL} from "../../api/charactersAPI";
import useDebounce from "../../hooks/useDebounce";
import InputSearch from "../../components/InputSearch";

const AllCharactersPage = () => {
    const location = useLocation();
    const [pageNumber, setPageNumber] = useState<number>(parseInt(location.search?.split("=")[1]) || 1);
    const [searchInputValue, setSearchInputValue] = useState<string>("");
    const allCharacters = useAppSelector((state) => state.allCharacters.characters);
    const {allCharactersAsyncThunk} = useActions();
    const debouncedCallback = useDebounce(allCharactersAsyncThunk, 300);

    useEffect(() => {
        debouncedCallback(
            `${ALL_CHARACTERS_URL}/?page=${pageNumber}&name=${searchInputValue}`
        );
    }, [pageNumber, searchInputValue]);

    const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInputValue(e.target.value);
        setPageNumber(1)
    };

    return (
        <Container maxWidth="xl">
            <Grid
                container
                sx={{display: "flex", justifyContent: "center", marginBottom: "50px"}}
            >
                <Grid item xs={6}>
                    <InputSearch
                        handleInputChange={handleSearchQuery}
                        searchInputValue={searchInputValue}
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
                            <li
                                key={id}
                                style={{paddingBottom: "30px", marginRight: "70px"}}
                            >
                                <Link
                                    to={`/characters/${id}`}
                                    style={{textDecoration: "none"}}
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

                <AppPagination
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    setSearchInputValue={setSearchInputValue}
                />
            </Grid>
        </Container>
    );
};

export default React.memo(AllCharactersPage);
