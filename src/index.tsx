import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from 'reportWebVitals';
import { GlobalStyles, theme } from 'styles';
import { ThemeProvider } from 'styled-components';
import { Content, Title, Card, Grid } from 'components';
import { Provider } from 'react-redux';
import { store } from './redux/store'
//
import type { RootState } from './redux/store'
import { Counter } from 'components/counter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <Counter />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Content>
          <Title>Sudoku</Title>
          <Card><Grid /></Card>
        </Content>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
