import { useState, FC, ChangeEvent } from "react";
import {
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
}

const CreateEvent: FC<Props> = ({ open, onClose }) => {
  const [eventData, setEventData] = useState({
    eventTitle: "",
    venue: "",
    date: "",
    time: "",
    description: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setEventData({ ...eventData, [id]: value });
  };

  const handleSubmit = () => {};

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
            label="Flyer"
            size="small"
            id="flyer"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            onChange={() => {}}
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
