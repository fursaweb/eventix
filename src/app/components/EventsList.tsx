import React, { FC } from "react";
import { EventData } from "@/app/components/CreateEvent";
import EventCard from "@/app/components/EventCard";
import { Grid } from "@mui/material";

interface Props {
  list: EventData[];
}

const EventsList: FC<Props> = ({ list }) => {
  return (
    <Grid container spacing={2}>
      {list.map((item: EventData) => (
        <Grid key={item.event_title} item xs={6}>
          <EventCard event={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default EventsList;
