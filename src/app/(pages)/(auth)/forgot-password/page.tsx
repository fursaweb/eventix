"use client";
import { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import userAuth from "@/services/auth";

import { Container, Typography, Box, Button, TextField } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    userAuth.sendResetEmail(email);
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
        <Image
          src="/login.svg"
          width="141"
          height="188"
          priority={true}
          alt=""
        />
        <Typography
          variant="h5"
          align="center"
          sx={{ fontWeight: 700, textTransform: "uppercase" }}
        >
          Do you want to reset password?
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
            Reset password
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
