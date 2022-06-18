import React, {useEffect} from 'react';
import {Typography, Box} from "@mui/material";
import {useActions} from "../../hooks/useActions";
import {ALL_CHARACTERS_URL} from "../../constants/charactersAPI";

const WelcomePage = (): JSX.Element => {
    const {infoApiAsyncThunk} = useActions()

    useEffect(() => {
        infoApiAsyncThunk(`${ALL_CHARACTERS_URL}/?page=${1}`);
    }, [])

    return (
        <Box sx={{height: window.innerHeight - 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h2" component="div" color="secondary" fontWeight="bold" textAlign="center">
                Welcome on board the Rick and Morty Application! <br/>
                You can see all characters from this cartoon or find one of them. <br/> Just click on the appropriate buttons in Appbar.
                Do you like someone? <br/> Don't hesitate to add this character to your favorites!
            </Typography>
        </Box>

    );
};

export default WelcomePage;