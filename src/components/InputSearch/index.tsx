import React from 'react';
import {InputAdornment, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import {useAppSelector} from '../../hooks/reduxHooks';

interface InputSearchProps {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchInputValue: string;
    placeholder: string;
    isNotFound: boolean
}

const InputSearch = ({handleInputChange, searchInputValue, placeholder, isNotFound}: InputSearchProps): JSX.Element => {

  return (
    <TextField
      onChange={handleInputChange}
      value={searchInputValue}
      variant='outlined'
      label={placeholder}
      fullWidth
      error={isNotFound}
      helperText={isNotFound ? 'Not found, last result is displayed' : ''}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <SearchIcon/>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputSearch;
