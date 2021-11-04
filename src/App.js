import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './components/Home/Home';

function App() {
  const theme = createTheme({
    pallete: {
      primary: {
        main: 'red',
      },
      secondary: {
        main: 'blue',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
