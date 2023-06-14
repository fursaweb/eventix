"use client";
import React from "react";
import Image from "next/image";
import { Container, Typography, Box, Button } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100% - 64px)",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 500,
            width: "100%",
            padding: "0 22px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src="/no-event.svg" width="239" height="118" alt="" />
          <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: 700, textTransform: "uppercase" }}
          >
            No events yet
          </Typography>
        </Box>
        <Box sx={{ mb: "15px", position: "absolute", bottom: "100px" }}>
          <Button
            fullWidth
            variant="contained"
            // onClick={}
            sx={{
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: 400,
            }}
          >
            Create new event
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
