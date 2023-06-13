"use client";
import { useRouter } from "next/navigation";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import userAuth from "@/utils/auth";

const Header = () => {
  const router = useRouter();

  const logout = () => {
    userAuth.logOutUser(router);
  };

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
