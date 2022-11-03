import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles, theme } from './styles';
import { ThemeProvider } from 'styled-components';
import { Content, Title, Card, Grid } from './components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content>
        <Title>Sudoku</Title>
        <Card><Grid /></Card>
      </Content>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
