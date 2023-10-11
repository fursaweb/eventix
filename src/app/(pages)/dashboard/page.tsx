"use client";
import React, { FC, useState } from "react";
import { Container, Box, Button } from "@mui/material";

import CreateEvent from "@/app/components/CreateEvent";
import EventsList from "@/app/components/EventsList";
import NoEvent from "@/app/components/NoEvent";
import useEventsList from "@/hooks/useEventsList";

const Dashboard: FC = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { eventsList, error } = useEventsList();

  const handleClick = (): void => {
    setOpenDialog(true);
  };

  const handleClose = (): void => {
    setOpenDialog(false);
  };

  if (!eventsList) {
    return (
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100% - 64px)",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h1>Loading</h1>
        </Box>
      </Container>
    );
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100% - 64px)",
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
    >
      {eventsList?.length === 0 ? (
        <NoEvent handleClick={handleClick} />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <EventsList list={eventsList} />
          <Box
            sx={{
              maxWidth: 500,
              width: "100%",
              padding: "0 22px",
              marginTop: "20px",
            }}
          >
            <Button
              fullWidth
              variant="contained"
              onClick={handleClick}
              sx={{
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 400,
              }}
            >
              Create new event
            </Button>
          </Box>
        </Box>
      )}
      <CreateEvent open={openDialog} onClose={handleClose} />
    </Container>
  );
};

export default Dashboard;
