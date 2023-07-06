import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { EventData } from "@/services/events";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

interface Props {
  event_id: string;
  event: EventData;
  deleteEvent: (id: string) => void;
}

const EventCard: FC<Props> = ({ event_id, event, deleteEvent }) => {
  const { event_title, date, time, venue } = event;
  const router = useRouter();

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
          onClick={() => {
            deleteEvent(event_id);
          }}
          size="small"
          variant="outlined"
          sx={{ borderRadius: 0 }}
        >
          Delete
        </Button>
        <Button
          onClick={() => router.push(`/events/${event_id}`)}
          size="small"
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
