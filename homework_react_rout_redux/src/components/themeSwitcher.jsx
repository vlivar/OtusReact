import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../slices/themeSlice';

const themeSwitcher = () => {
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Button
      onClick={handleToggleTheme}
      variant="contained"
      color="primary"
      style={{ position: 'absolute', top: 20, right: 20 }}
    >
      Переключить тему
    </Button>
  );
};

export default themeSwitcher;
