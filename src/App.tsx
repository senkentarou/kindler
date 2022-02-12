import React from 'react';

import { AppBar, Container, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { KindleSearchForm } from './components/KindleSearchForm';

const KindlerAppBar = styled(AppBar)({
  width: '100%',
  height: '4rem',
  marginBottom: '1rem',
  justifyContent: 'center'
});

const AppTitle = styled(Typography)({
  marginLeft: '1rem'
});

const SearchCard = styled(Card)({
  width: '100%',
  height: '100%'
});

export const App: React.VFC = () => {
  return (
    <>
      <KindlerAppBar position="static">
        <AppTitle variant="h4">Kindler（kindle 検索アプリ）</AppTitle>
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
            <KindleSearchForm />
          </CardContent>
        </SearchCard>
      </Container>
    </>
  );
};
