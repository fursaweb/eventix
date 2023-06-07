"use client";
import React from "react";
import { Container, Button, TextField, Box } from "@mui/material";

const Event = () => {
  return (
    <Container>
      Event
      <form action="">
        <Box>
          <TextField size="small" id="title" label="title" variant="outlined" />
        </Box>
        <Box>
          <TextField type="date" id="date" label="date" variant="outlined" />
        </Box>
        <Box>
          <TextField id="time" label="time" variant="outlined" />
        </Box>
        <Box>
          <TextField id="place" label="place" variant="outlined" />
        </Box>
        <Box>
          <TextField name="description" label="description" id="" rows={10} />
        </Box>
        <Box>
          <TextField name="note" label="note" id="" rows={10} />
        </Box>
        <Box>
          <label htmlFor=""></label>
          <input type="file" name="flier" />
        </Box>
        <Button variant="contained">Contained</Button>
      </form>
    </Container>
  );
};

export default Event;
