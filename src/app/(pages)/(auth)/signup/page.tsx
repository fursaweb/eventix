"use client";
import { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import userAuth from "@/services/auth";

import { Container, Typography, Box, Button, TextField } from "@mui/material";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    userAuth.signUpUser(email, password, router);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          maxWidth: 500,
          width: "100%",
          padding: "0 22px",
        }}
      >
        <Image src="/create-account.svg" width="141" height="188" alt="" />
        <Typography variant="h5" align="center" sx={{ fontWeight: 700 }}>
          CREATE YOUR ACCOUNT
        </Typography>
        <Box sx={{ mb: "15px", mt: "50px" }}>
          <TextField
            type="email"
            fullWidth
            label="EMAIL"
            size="small"
            variant="filled"
            value={email}
            id="email"
            onChange={handleEmailChange}
          />
        </Box>
        <Box sx={{ mb: "35px" }}>
          <TextField
            type="password"
            fullWidth
            label="PASSWORD"
            size="small"
            variant="filled"
            value={password}
            id="password"
            onChange={handlePasswordChange}
          />
        </Box>
        <Box sx={{ mb: "15px" }}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: 400,
            }}
          >
            Sign up
          </Button>
        </Box>
        <Box>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => {
              router.push("/login");
            }}
            sx={{
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: 400,
            }}
          >
            Already have an account
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
