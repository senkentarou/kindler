import React, { useState, useCallback } from 'react';

import { styled, AppBar, Container, Card, CardContent, Typography } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';

const KindleUnlimitedSearchBar = styled(SearchBar)({
  marginTop: '1rem',
  maxWidth: '800px'
});

const KindlerAppBar = styled(AppBar)({
  width: '100%',
  height: '5rem',
  marginBottom: '1rem'
});

const AppTitle = styled(Typography)({
  marginTop: '1rem',
  marginLeft: '1rem'
});

const SearchCard = styled(Card)({
  width: '100%',
  height: '100%'
});

export const App: React.FC = () => {
  const [searchWord, setSearchWord] = useState<string>('');

  const search = useCallback(() => {
    window.open(
      `https://www.amazon.co.jp/s?k=${encodeURI(searchWord)}&rh=n%3A2250738051%2Cp_n_feature_nineteen_browse-bin%3A3169286051`,
      '_blank',
      'noopener noreferrer'
    )
  }, [searchWord]);

  return (
    <>
      <KindlerAppBar position="static">
        <AppTitle variant="h3">
          Kindler（kindle 検索アプリ）
        </AppTitle>
      </KindlerAppBar>
      <Container maxWidth={false}>
        <SearchCard>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              検索しよう
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              入力した文字でAmazon webサイトのkindle検索結果を開きます（別タブ）
            </Typography>
            <KindleUnlimitedSearchBar
              value={searchWord}
              onChange={(word: string) => setSearchWord(word)}
              onRequestSearch={search}
            />
          </CardContent>
        </SearchCard>
      </Container>
    </>
  );
};
