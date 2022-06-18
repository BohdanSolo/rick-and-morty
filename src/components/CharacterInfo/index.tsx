import React, {useState} from "react";
import {Box, Grid, Typography} from "@mui/material";
import axios from "axios";
import {CharacterTypes} from "../../types/slicesTypes";

interface CharacterInfoProps {
    character: CharacterTypes
}
interface characterInfoTypes {
    characteristic: string;
    info: string;
}

const CharacterInfo: React.FC<CharacterInfoProps> = ({character}) => {
    const [episodes, setEpisodes] = useState<Array<any> | null | undefined>(null)

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

    const characterInfo: characterInfoTypes[] = [
        {characteristic: "Name", info: character.name},
        {characteristic: "Gender", info: character.gender},
        {characteristic: "Created", info: character.created},
        {characteristic: "Status", info: character.status},
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
                <Typography variant="h5" component="span">
                    {episode.name} ({episode.episode}); —
                </Typography>
            ))}
        </Grid>
    );
};

export default CharacterInfo;
