import React, { ReactElement, ReactNodeArray } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
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

const AuthWrapper = ({
  text,
  question,
  route,
  children,
}: AuthWrapperTypes): JSX.Element => {
    return (
        <Box
            height="100vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding="0"
            margin="0"
        >
            <Container fixed maxWidth="lg">
                <Paper elevation={3}>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
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
                        <Grid
                            item
                            xs={6}
                            position="relative"
                            display="flex"
                            justifyContent="center"
                        >
                            <Box paddingTop="20px" width="375px" textAlign="center">
                                <Box marginBottom="0px">
                                    <img
                                        src={logo}
                                        alt="Rick and Morty"
                                        style={{width: "100%"}}
                                    />
                                </Box>
                                {children}
                                <Grid
                                    item
                                    position="absolute"
                                    bottom="30px"
                                    sx={{left: "50%", transform: "translate(-50%)"}}
                                >
                                    <Typography
                                        variant="h2"
                                        component="div"
                                        fontSize="14px"
                                        fontWeight="600"
                                        marginBottom="10px"
                                        color="#00b2c7"
                                    >
                                        {question}
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        component="div"
                                        fontSize="13px"
                                        fontWeight="500"
                                    >
                                        <Link
                                            to={`${route}`}
                                            style={{
                                                fontWeight: "bold",
                                                color: "#57b742",
                                                textTransform: "uppercase",
                                                textDecoration: "none",
                                            }}
                                        >
                                            {text}
                                        </Link>
                                    </Typography>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default AuthWrapper;
