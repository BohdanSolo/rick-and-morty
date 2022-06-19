import React from "react";
import {CardActions, Container, Grid, IconButton, styled, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import CustomCard from "../../UI/CustomCard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useAppSelector} from "../../hooks/reduxHooks";


const LiItem = styled('li')(({theme}) => ({
    paddingBottom: "30px",
    marginRight: "70px",
    [theme.breakpoints.down('md')]: {
        marginRight: "30px",
    },
    [theme.breakpoints.down('sm')]: {
        marginRight: "0",
    },
}));

const LikedPage = (): JSX.Element => {
    const favoriteCharactersList = useAppSelector((state) => state.favorite.favoriteCharacters);
    return (
        (<Container maxWidth="xl">
            <Grid item xs={12}>
                <ul>
                    <Grid
                        container
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            margin: "0 auto 20px",
                        }}
                    >
                        {favoriteCharactersList.length ? favoriteCharactersList?.map(({name, id, image, status}) => (
                            <LiItem key={id}>
                                <Link
                                    to={`/characters/${id}`}
                                    style={{textDecoration: "none"}}
                                >
                                    <CustomCard
                                        name={name}
                                        image={image}
                                        status={status}
                                        height={+460}
                                    >
                                        <CardActions
                                            disableSpacing
                                            sx={{display: "flex", justifyContent: "center"}}
                                        >
                                            <IconButton aria-label="add to favorites">
                                                <FavoriteIcon color="primary"/>
                                            </IconButton>
                                        </CardActions>
                                    </CustomCard>
                                </Link>
                            </LiItem>
                        )) : <Typography variant="h4" component="div" color="secondary" fontWeight="bold"
                                         textAlign="left">
                            There is no liked characters. <br/> You can click on like on the page of particular
                            character.
                        </Typography>}
                    </Grid>
                </ul>
            </Grid>
        </Container>)

    );
};

export default LikedPage;
