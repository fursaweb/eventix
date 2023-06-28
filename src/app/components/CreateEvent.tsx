import { useState, FC, ChangeEvent, useEffect, useContext } from "react";
import {
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { db, storage } from "../../firebase";
import { UserContext } from "@/utils/UserContext";
interface Props {
  open: boolean;
  onClose: () => void;
}

interface EventData {
  user_id: string;
  event_title: string;
  venue: string;
  date: string;
  time: string;
  description: string;
  flier: string | ArrayBuffer | null | undefined;
}

const CreateEvent: FC<Props> = ({ open, onClose }) => {
  const user = useContext(UserContext);
  const uid = user?.uid;

  const [loading, setLoading] = useState<boolean>(false);
  const [eventData, setEventData] = useState<EventData>({
    user_id: "",
    event_title: "",
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
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (readerEvent) => {
          setEventData({ ...eventData, flier: readerEvent.target?.result });
        };
      }
    }
  };

  const createEvent = async (data: EventData) => {
    data = { ...data, user_id: uid };
    try {
      const docRef = await addDoc(collection(db, "events"), data);
      const imageRef = ref(storage, `events/${docRef.id}/image`);
      if (eventData.flier) {
        await uploadString(
          imageRef,
          eventData.flier as string,
          "data_url"
        ).then(async () => {
          //👇🏻 Gets the image URL
          const downloadURL = await getDownloadURL(imageRef);
          //👇🏻 Updates the docRef, by adding the flier URL to the document
          await updateDoc(doc(db, "events", docRef.id), {
            flier_url: downloadURL,
          });
        });
      }
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    await createEvent(eventData);
    setLoading(false);
    setEventData({
      user_id: uid,
      event_title: "",
      venue: "",
      date: "",
      time: "",
      description: "",
      flier: undefined,
    });
    onClose();
  };

  useEffect(() => {}, []);

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
            value={eventData.event_title}
            id="event_title"
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
            disabled={loading}
          >
            {!loading ? "Create" : "Loading"}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default CreateEvent;
