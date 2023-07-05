"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import userAuth from "@/services/auth";
import { UserContext } from "@/contexts/UserContext";

const Header = () => {
  const router = useRouter();
  const user = useContext(UserContext);

  const logout = () => {
    userAuth.logOutUser(router);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EventTix
        </Typography>
        <Typography sx={{ mr: "15px" }}>{user?.email}</Typography>
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
