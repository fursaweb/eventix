"use client";
import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { Container, Typography, Box, Button } from "@mui/material";

import CreateEvent, { EventData } from "@/app/components/CreateEvent";
import EventsList from "@/app/components/EventsList";
import { UserContext } from "@/contexts/UserContext";
import { getEvents } from "@/services/events";

const Dashboard = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [eventsList, setEventsList] = useState<EventData[] | []>([]);
  const user = useContext(UserContext);
  const uid = user?.uid;

  const handleClick = (): void => {
    setOpenDialog(true);
  };

  const handleClose = (): void => {
    setOpenDialog(false);
  };

  const setList = (data: EventData[]) => {
    setEventsList(data);
  };

  useEffect(() => {
    if (uid) {
      getEvents(uid, setList);
    }
  }, [uid]);

  return (
    <>
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
        {eventsList.length === 0 ? (
          <>
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
                sx={{
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#C4C4C4",
                  fontSize: "1.25rem",
                  marginTop: "20px",
                }}
              >
                No events yet
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: "100px",
                maxWidth: 500,
                width: "100%",
                padding: "0 22px",
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
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
    </>
  );
};

export default Dashboard;
