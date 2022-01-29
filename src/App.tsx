import React from 'react';

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

export const App = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Typography variant="h3" component="h1" className={classes.title}>
          Sample kindle unlimited 検索アプリ
        </Typography>
      </AppBar>
      <Container maxWidth={false}>
        <Card className={classes.mainCard}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              検索しよう
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              kindle unlimited の検索結果を表示します
            </Typography>
            <SearchBar className={classes.searchBar} />
          </CardContent>
        </Card>
      </Container>
    </>
  );
};
