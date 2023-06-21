import { useState, FC, ChangeEvent, useEffect } from "react";
import {
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
interface Props {
  open: boolean;
  onClose: () => void;
}

interface EventData {
  eventTitle: string;
  venue: string;
  date: string;
  time: string;
  description: string;
  flier: File | string | undefined;
}

const CreateEvent: FC<Props> = ({ open, onClose }) => {
  const [eventData, setEventData] = useState<EventData>({
    eventTitle: "",
    venue: "",
    date: "",
    time: "",
    description: "",
    flier: undefined,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.type !== "file") {
      const { id, value } = e.target;
      setEventData({ ...eventData, [id]: value });
    } else {
      const { files } = e.target;

      if (files) {
        setEventData({ ...eventData, flier: "file" });
      }
    }
  };

  useEffect(() => {
    console.log(eventData);
  });

  const createEvent = async () => {
    try {
      const docRef = await addDoc(collection(db, "events"), eventData);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleSubmit = () => {
    createEvent();
    setEventData({
      eventTitle: "",
      venue: "",
      date: "",
      time: "",
      description: "",
      flier: undefined,
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle sx={{ textAlign: "center", pb: 0 }}>
        Create a new event
      </DialogTitle>
      <DialogContent>
        <Box sx={{ mt: "15px", mb: "15px" }}>
          <TextField
            type="text"
            fullWidth
            label="Event title"
            size="small"
            variant="outlined"
            value={eventData.eventTitle}
            id="eventTitle"
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ mb: "15px" }}>
          <TextField
            type="text"
            fullWidth
            label="Venue"
            size="small"
            variant="outlined"
            value={eventData.venue}
            id="venue"
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: "flex", mb: "15px" }}>
          <Box sx={{ mr: "4px", flex: "0 0 calc(50% - 4px)" }}>
            <TextField
              type="date"
              fullWidth
              label="Date"
              size="small"
              variant="outlined"
              value={eventData.date}
              id="date"
              InputLabelProps={{ shrink: true }}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ ml: "4px", flex: "0 0 calc(50% - 4px)" }}>
            <TextField
              type="time"
              fullWidth
              label="Time"
              size="small"
              variant="outlined"
              value={eventData.time}
              placeholder=""
              id="time"
              InputLabelProps={{ shrink: true }}
              onChange={handleChange}
            />
          </Box>
        </Box>
        <Box sx={{ mb: "15px" }}>
          <TextField
            type="text"
            fullWidth
            label="Description"
            size="small"
            variant="outlined"
            value={eventData.description}
            id="description"
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ mb: "15px" }}>
          <TextField
            type="file"
            fullWidth
            label="Flier"
            size="small"
            id="flier"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
          />
        </Box>
        <DialogActions sx={{ pl: 0, pr: 0 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={onClose}
            sx={{
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: 400,
            }}
          >
            Cancel
          </Button>
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: 400,
            }}
          >
            Create
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default CreateEvent;
