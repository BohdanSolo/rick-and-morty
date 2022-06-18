import React from 'react';
import {Box, Typography} from "@mui/material";

const NotFoundPage = (): JSX.Element => {
    return (
        <Box sx={{height: window.innerHeight - 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h2" component="div" color="secondary" fontWeight="bold" textAlign="center">
                This page wasn't found
            </Typography>
        </Box>

    );
};

export default NotFoundPage;