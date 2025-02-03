import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';
import { AppBar, Toolbar, Button, Typography, Container, Box } from '@mui/material';

const navigationBar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <NavLink to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Home
            </NavLink>
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {!user ? (
              <>
                <Button color="inherit" component={NavLink} to="/login" sx={{ marginRight: 2 }}>
                  Login
                </Button>
                <Button color="inherit" component={NavLink} to="/register">
                  Register
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default navigationBar;