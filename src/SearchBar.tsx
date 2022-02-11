import React from 'react';

import { InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
  value: string;
  onChange: (word: string) => void;
  onRequestSearch: () => void;
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.08)
  },
  margin: theme.spacing(1, 0, 1, 0),
  maxWidth: '800px'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%'
  }
}));

export const SearchBar: React.FC<Props> = ({ value, onChange, onRequestSearch }) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key == 'Enter') {
      onRequestSearch();
    }
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        fullWidth={true}
        placeholder="検索"
        inputProps={{ 'aria-label': 'search' }}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.currentTarget.value)}
        onKeyDown={(event: React.KeyboardEvent) => handleKeyDown(event)}
      />
    </Search>
  );
};
