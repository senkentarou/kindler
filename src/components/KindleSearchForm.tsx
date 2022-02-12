import React, { useState, useCallback } from 'react';

import { FormControl, FormGroup, FormControlLabel, Checkbox, FormHelperText } from '@mui/material';
import { styled } from '@mui/material/styles';

import { SearchBar } from './utils/SearchBar';

type KindleSearchOption = 'kindleUnlimited' | 'primeReading';
type SearchOption = { [keys in KindleSearchOption]: boolean };

const KINDLE_SEARCH_OPTION_MAP = {
  kindleUnlimited: 'p_n_feature_nineteen_browse-bin:3169286051',
  primeReading: 'p_n_special_merchandising_browse-bin:5304495051'
};

const KindleSearchBar = styled(SearchBar)({
  marginTop: '1rem',
  maxWidth: '800px'
});

export const KindleSearchForm: React.VFC = () => {
  const [searchWord, setSearchWord] = useState<string>('');
  const [searchOptions, setSearchOptions] = useState<SearchOption>({
    kindleUnlimited: true,
    primeReading: true
  });

  const search = useCallback(() => {
    const initialOptions = ['n:2250738051'];
    const selectedOptions = (Object.keys(searchOptions) as Array<KindleSearchOption>).reduce((accArray, key) => {
      if (searchOptions[key]) {
        accArray.push(KINDLE_SEARCH_OPTION_MAP[key]);
      }

      return accArray;
    }, initialOptions);

    window.open(
      `https://www.amazon.co.jp/s?k=${encodeURIComponent(searchWord)}&rh=${encodeURIComponent(
        selectedOptions.join(',')
      )}`,
      '_blank',
      'noopener noreferrer'
    );
  }, [searchWord, searchOptions]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchOptions({
        ...searchOptions,
        [event.currentTarget.name]: event.currentTarget.checked
      });
    },
    [searchOptions, setSearchOptions]
  );

  return (
    <FormControl component="fieldset" variant="standard">
      <FormGroup row={true}>
        <FormControlLabel
          control={<Checkbox checked={searchOptions.kindleUnlimited} onChange={handleChange} name="kindleUnlimited" />}
          label="kindle unlimited"
        />
        <FormControlLabel
          control={<Checkbox checked={searchOptions.primeReading} onChange={handleChange} name="primeReading" />}
          label="prime reading"
        />
      </FormGroup>
      <FormHelperText>チェックの付いた項目が検索オプションに含まれます</FormHelperText>
      <KindleSearchBar value={searchWord} onChange={(word: string) => setSearchWord(word)} onRequestSearch={search} />
    </FormControl>
  );
};
