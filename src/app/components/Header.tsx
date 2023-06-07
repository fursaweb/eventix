"use client";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  const logout = () => {};

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EventTix
        </Typography>
        <Button
          color="inherit"
          variant="outlined"
          size="small"
          onClick={logout}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
