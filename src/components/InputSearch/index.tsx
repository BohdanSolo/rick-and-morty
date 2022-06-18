import React from "react";
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useAppSelector} from "../../hooks/reduxHooks";

interface InputSearchProps {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchInputValue: string;
}

const InputSearch = ({handleInputChange, searchInputValue}: InputSearchProps): JSX.Element => {
    const isNotFound = useAppSelector(
        (state) => state.allCharacters.info.notFoundError
    );
    return (
        <TextField
            onChange={handleInputChange}
            value={searchInputValue}
            variant="outlined"
            label="Search character by name"
            fullWidth
            error={isNotFound}
            helperText={isNotFound ? "Not found, last result is displayed" : ""}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon/>
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default InputSearch;
