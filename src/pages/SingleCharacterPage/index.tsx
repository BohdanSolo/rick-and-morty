import React, {useEffect, useState, useContext} from "react";
import {useParams, useNavigate} from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useActions} from "../../hooks/useActions";
import {ALL_CHARACTERS_URL} from "../../constants/charactersAPI";
import {useAppSelector} from "../../hooks/reduxHooks";
import CustomCard from "../../UI/CustomCard";
import {CardActions, Container, Grid, IconButton, Button} from "@mui/material";
import back from "./back.svg"
import CharacterInfo from "../../components/CharacterInfo";
import {UIContext} from "../../UI/UIContext";

const SingleCharacterPage = (): JSX.Element => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false)
    const {singleCharacterAsyncThunk, setSingleCharacter} = useActions();
    const {setFavorite, removeFromFavorite} = useActions();
    const {setAlert} = useContext(UIContext)
    const {id} = useParams();
    const nav = useNavigate()
    const character = useAppSelector((state) => state.singleCharacter.character);
    const favoriteList = useAppSelector((state) => state.favorite.favoriteCharacters);

    const goBack = (): void => nav(-1)

    useEffect(() => {
        singleCharacterAsyncThunk(`${ALL_CHARACTERS_URL}/${id}`);
        favoriteList.find(item => item.id === Number(id)) ? setIsFavorite(true) : setIsFavorite(false)
        return () => {
            setSingleCharacter([]);
        };
    }, []);

    const handleFavorite = () => {
        if (isFavorite) {
            removeFromFavorite(Number(id))
            setIsFavorite(false)
            setAlert({
                show: true,
                severity: "info",
                message: "Removed to favorites"
            })
        } else {
            setFavorite({
                name: character.name,
                image: character.image,
                status: character.status,
                id: Number(id),
            })
            setIsFavorite(true)
            setAlert({
                show: true,
                severity: "info",
                message: "Added to favorites"
            })
        }
    }

    return (
        <>
            <Container maxWidth="lg">
                <Grid
                    container
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    marginBottom="30px"
                >
                    <Grid item xs={12} marginBottom="30px">
                        <Button variant="outlined" onClick={goBack}>
                            <img src={back} alt="Go back"/>Go back
                        </Button>
                    </Grid>
                    <Grid item>
                        <CustomCard
                            name={character.name}
                            image={character.image}
                            status={character.status}
                            height="auto"
                        >
                            <CardActions
                                disableSpacing
                                sx={{display: "flex", justifyContent: "flex-end"}}
                            >
                                <IconButton aria-label="add to favorites" onClick={handleFavorite}>
                                    {isFavorite ? <FavoriteIcon color="primary"/> :
                                        <FavoriteBorderIcon color="primary"/>}
                                </IconButton>
                            </CardActions>
                        </CustomCard>
                    </Grid>
                    <CharacterInfo character={character}/>
                </Grid>
            </Container>
        </>
    );
};

export default SingleCharacterPage;
