import React, { FC } from "react";
import { EventWithID, deleteEvent } from "@/services/events";
import EventCard from "@/app/components/EventCard";
import { Grid } from "@mui/material";

interface Props {
  list: EventWithID[];
}

const EventsList: FC<Props> = ({ list }) => {
  return (
    <Grid container spacing={2}>
      {list.map((item: EventWithID) => (
        <Grid key={item.event_id} item xs={6}>
          <EventCard
            event_id={item.event_id}
            event={item.data}
            deleteEvent={deleteEvent}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default EventsList;
