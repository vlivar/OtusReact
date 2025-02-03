import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

import NavigationBar from './components/navigationBar';
import HomePage from './components/homePage';
import LoginPage from './components/loginPage';
import RegisterPage from './components/registerPage';
import NotFoundPage from './components/notFoundPage';
import ThemeSwitcher from './components/themeSwitcher';

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ThemeSwitcher />
      </ThemeProvider>
  );
};

export default App;