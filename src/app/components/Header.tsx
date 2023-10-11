"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import Image from "next/image";
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
        <Box sx={{ flexGrow: 1 }}>
          <Image src="/logo.svg" width="100" height="40" alt="logo" />
        </Box>
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
