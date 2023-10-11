"use client";
import React from "react";
import { useParams } from "next/navigation";
import { getEventByID } from "@/services/events";
import { Typography, Box } from "@mui/material";

const convertDate = (date: string) => {
  return date.split("-").reverse().join(" ");
};

const Event = async () => {
  const params = useParams();

  const event = await getEventByID(params.id);

  const date = event ? convertDate(event.date) : "";

  return (
    <>
      <Box
        sx={{
          height: "25%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#274d76",
          color: "#fff",
        }}
      >
        <Typography variant="h2" align="center">
          {event?.event_title}
        </Typography>
      </Box>

      <Box
        sx={{
          margin: "0 auto",
          maxWidth: 500,
          width: "100%",
          padding: "50px 22px 40px",
          height: "100%",
        }}
      >
        <p>
          <strong>Description:</strong> {event?.description}
        </p>
        <p>
          <strong>Venue:</strong> {event?.venue}
        </p>
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Time:</strong> {event?.time}
        </p>
      </Box>
    </>
  );
};

export default Event;
