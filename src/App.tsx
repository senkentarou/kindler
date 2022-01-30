import React, { useState, useCallback } from 'react';

import { makeStyles, AppBar, Container, Card, CardContent, Typography } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';

const useStyles = makeStyles({
  appBar: {
    width: '100%',
    height: '5rem',
    marginBottom: '1rem'
  },
  title: {
    marginTop: '1rem',
    marginLeft: '1rem'
  },
  mainCard: {
    width: '100%',
    height: '100%'
  },
  searchBar: {
    marginTop: '1rem',
    maxWidth: '800px'
  }
});

export const App: React.FC = () => {
  const classes = useStyles();
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
      <AppBar position="static" className={classes.appBar}>
        <Typography variant="h3" component="h1" className={classes.title}>
          kindle unlimited 検索アプリ
        </Typography>
      </AppBar>
      <Container maxWidth={false}>
        <Card className={classes.mainCard}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              検索しよう
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              入力した文字で kindle unlimited の検索結果を開きます（別タブ）
            </Typography>
            <SearchBar
              className={classes.searchBar}
              value={searchWord}
              onChange={(word: string) => setSearchWord(word)}
              onRequestSearch={search}
            />
          </CardContent>
        </Card>
      </Container>
    </>
  );
};
