"use client";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import Image from "next/image";
const Signup = () => {
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
      <Box sx={{ textAlign: "center" }}>
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
          />
        </Box>
        <Box sx={{ mb: "35px" }}>
          <TextField
            type="password"
            fullWidth
            label="PASSWORD"
            size="small"
            variant="filled"
          />
        </Box>
        <Box sx={{ mb: "15px" }}>
          <Button
            fullWidth
            variant="contained"
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
