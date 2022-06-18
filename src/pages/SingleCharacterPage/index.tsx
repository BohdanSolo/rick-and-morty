import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import {useActions} from "../../hooks/useActions";
import {ALL_CHARACTERS_URL} from "../../api/charactersAPI";
import {useAppSelector} from "../../hooks/reduxHooks";
import CustomCard from "../../UI/CustomCard";
import {Box, CardActions, Container, Grid, IconButton, Typography, Button} from "@mui/material";
import axios from "axios";
import back from "./back.svg"

const SingleCharacterPage = () => {
  const [episodes, setEpisodes] = useState<Array<any> | null | undefined>(null)
  const character = useAppSelector((state) => state.singleCharacter.character);
  const { singleCharacterAsyncThunk, setSingleCharacter } = useActions();
  const { id } = useParams();
  const nav = useNavigate()
  const goBack = () => nav(-1)


  useEffect(() => {
    singleCharacterAsyncThunk(`${ALL_CHARACTERS_URL}/${id}`);
    return () => {
      setSingleCharacter([]);
    };
  }, []);

  interface characterInfoTypes {
    characteristic: string;
    info: string;
  }

  const characterInfo: characterInfoTypes[] = [
    { characteristic: "Name", info: character.name },
    { characteristic: "Gender", info: character.gender },
    { characteristic: "Created", info: character.created },
    { characteristic: "Status", info: character.status },
    { characteristic: "Location", info: character.location },
  ];

  const fetchAllEpisodes = async (arr: string[]) => {
    if (arr) {
      const requestsEpisodes = arr?.map((episodeURL) => axios.get(episodeURL));
      const responseAll = await Promise.all(requestsEpisodes);
      const episodes = responseAll.map((res) => res.data);
      return episodes.map((episode) => {
        return {
          name: episode.name,
          episode: episode.episode,
        };
      })
    }
  };

  fetchAllEpisodes(character.episode).then(res => setEpisodes(res));

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
              height={+460}
            >
              <CardActions
                disableSpacing
                sx={{ paddingTop: "0px", marginTop: "0 auto" }}
              >
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </CustomCard>
          </Grid>
          <Grid item>
            {characterInfo?.map((item) => (
              <Box key={item.info} display="block" sx={{ margin: "20px auto" }}>
                <Typography variant="h5" component="span" fontWeight={"bold"}>
                  {item.characteristic} —
                </Typography>
                <Typography variant="h5" component="span">
                  {item.info};
                </Typography>
              </Box>
            ))}
            <Typography variant="h5" component="span" fontWeight={"bold"}>
              Episodes —
            </Typography>
            {episodes?.map(episode => (
                <Typography variant="h5" component="span">
                   {episode.name} ({episode.episode}); —
                </Typography>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SingleCharacterPage;
