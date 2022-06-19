import React, {useEffect} from 'react';
import {Typography, Box, styled} from "@mui/material";
import {useActions} from "../../hooks/useActions";
import {ALL_CHARACTERS_URL} from "../../constants/charactersAPI";


const Wrapper = styled(Box)(({theme}) => ({
    height: window.innerHeight - 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        height: 'auto',
    },
}));

const WelcomePage = (): JSX.Element => {
    const {infoApiAsyncThunk} = useActions()

    useEffect(() => {
        infoApiAsyncThunk(`${ALL_CHARACTERS_URL}/?page=${1}`);
    }, [])

    return (
        <Wrapper>
            <Typography variant="h3" component="div" color="secondary" fontWeight="bold" textAlign="center" sx={{maxWidth: '1000px'}}>
                Welcome on board the Rick and Morty Application!
                You can see all characters from this cartoon or find one of them.Just click on the appropriate
                buttons in Appbar.
                Do you like someone? Don't hesitate to add this character to your favorites!
            </Typography>
        </Wrapper>

    );
};

export default WelcomePage;