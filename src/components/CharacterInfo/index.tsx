import React, {useState, useEffect} from "react";
import {Box, Grid, Typography} from "@mui/material";
import axios from "axios";
import {CharacterTypesInfo} from "../../types/slicesTypes";

interface CharacterInfoProps {
    character: CharacterTypesInfo
}

interface CharacterInfoTypes {
    characteristic: string;
    info: string;
}

interface EpisodeTypes {
    name: string,
    episode: string
}

const CharacterInfo = ({character}: CharacterInfoProps): JSX.Element => {
    const [episodes, setEpisodes] = useState<EpisodeTypes[] | null | undefined>(null)

    useEffect(() => {
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
    }, [character])


    const characterInfo: CharacterInfoTypes[] = [
        {characteristic: "Name", info: character.name},
        {characteristic: "Gender", info: character.gender},
        {characteristic: "Species", info: character.species},
        {characteristic: "Status", info: character.status},
        {characteristic: "Created", info: character.created},
        {characteristic: "Location", info: character.location},
    ];


    return (
        <Grid item>
            {characterInfo?.map((item) => (
                <Box key={item.info} display="block" sx={{margin: "20px auto"}}>
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
            {episodes?.map((episode) => (
                <Typography key={episode.name} variant="h5" component="span">
                    {episode.name} ({episode.episode}); —
                </Typography>
            ))}
        </Grid>
    );
};

export default React.memo(CharacterInfo);
