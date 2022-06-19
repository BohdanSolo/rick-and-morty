import React, {ReactElement, ReactNodeArray} from "react";
import {Container, Paper, Grid, Box, Typography, styled} from "@mui/material";
import {Link} from "react-router-dom";
import bg from "./bg.jpg";
import logo from "./RMlogo.png";

interface AuthWrapperTypes {
    question?: string;
    text?: string;
    route?: string;
    children:
        | ReactElement
        | ReactNodeArray
        | string
        | number
        | boolean
        | null
        | undefined;
}

const Root = styled("div")(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0",
    margin: "0",
    marginTop: "50px",
    [theme.breakpoints.down("md")]: {
        marginTop: "0",
    },
}));

const Wrapper = styled(Box)(({theme}) => ({
    paddingTop: "20px",
    width: "375px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
        width: "90%",
        height: "100%",
    },
}));

const InfoGrid = styled(Grid)(({theme}) => ({
    position: "absolute",
    bottom: "30px",
    left: "50%",
    transform: "translate(-50%)",
    [theme.breakpoints.down("lg")]: {
        position: "static",
        margin: "0 auto",
        left: "0",
        transform: "translate(0)",
    },
}));

const AuthWrapper = ({
                         text,
                         question,
                         route,
                         children,
                     }: AuthWrapperTypes): JSX.Element => {
    return (
        <Root>
            <Container fixed maxWidth="lg">
                <Paper elevation={3}>
                    <Grid container spacing={0}>
                        <Grid
                            item
                            md={6}
                            sm={12}
                            position="relative"
                            display="flex"
                            justifyContent="center"
                            height="auto"
                        >
                            <Wrapper>
                                <Box marginBottom="0px">
                                    <img
                                        src={logo}
                                        alt="Rick and Morty"
                                        style={{width: "100%"}}
                                    />
                                </Box>
                                {children}
                                <InfoGrid>
                                    <Typography
                                        variant="h2"
                                        component="div"
                                        fontSize="14px"
                                        fontWeight="600"
                                        margin="10px auto"
                                        color="#00b2c7"
                                    >
                                        {question}
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        component="div"
                                        fontSize="13px"
                                        fontWeight="500"
                                        marginBottom="10px"
                                    >
                                        <Link
                                            to={`${route}`}
                                            style={{
                                                fontWeight: "bold",
                                                color: "#57b742",
                                                textTransform: "uppercase",
                                                textDecoration: "none",
                                                marginBottom: "10px",
                                            }}
                                        >
                                            {text}
                                        </Link>
                                    </Typography>
                                </InfoGrid>
                            </Wrapper>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <img
                                src={bg}
                                alt="Rick and Morty"
                                style={{
                                    display: "block",
                                    width: "100%",
                                    maxWidth: "720px",
                                    maxHeight: "824px",
                                }}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Root>
    );
};

export default AuthWrapper;
