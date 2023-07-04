import React, { FC } from "react";
import { EventData } from "@/app/components/CreateEvent";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

interface Props {
  event: EventData;
}

const EventCard: FC<Props> = ({ event }) => {
  const { event_title, description, date, time, flier, venue } = event;

  return (
    <Card sx={{ backgroundColor: "#E9EDF1" }}>
      <CardContent sx={{ padding: "7px 10px" }}>
        <Typography component="h5" sx={{ mb: "10px" }}>
          {event_title}
        </Typography>

        <Typography sx={{ mb: "5px", fontSize: 12 }} color="text.secondary">
          Date: {date}
        </Typography>
        <Typography sx={{ mb: "5px", fontSize: 12 }} color="text.secondary">
          Time: {time}
        </Typography>
        <Typography sx={{ mb: "5px", fontSize: 12 }} color="text.secondary">
          Venue: {venue}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "2px 0 0 " }}>
        <Button
          size="small"
          fullWidth
          variant="contained"
          sx={{ borderRadius: 0 }}
        >
          See more
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
