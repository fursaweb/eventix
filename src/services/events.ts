import {
  collection,
  doc,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  onSnapshot,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import {
  getDownloadURL,
  uploadString,
  ref,
  deleteObject,
} from "@firebase/storage";
import { db, storage } from "@/firebase";

export interface EventData {
  user_id: string;
  event_title: string;
  venue: string;
  date: string;
  time: string;
  description: string;
  flier: string | ArrayBuffer | null | undefined;
  flier_url?: string;
  createdAt?: Timestamp | null;
}

export interface EventWithID {
  event_id: string;
  data: EventData;
}

export const createEvent = async (data: EventData) => {
  try {
    const docRef = await addDoc(collection(db, "events"), data);
    const imageRef = ref(storage, `events/${docRef.id}/image`);
    if (data.flier) {
      await uploadString(imageRef, data.flier as string, "data_url").then(
        async () => {
          const downloadURL = await getDownloadURL(imageRef);

          await updateDoc(doc(db, "events", docRef.id), {
            flier_url: downloadURL,
          });
        }
      );
    }
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getEvents = async (
  uid: string,
  setter: (data: EventWithID[]) => void
) => {
  try {
    const q = query(collection(db, "events"), where("user_id", "==", uid));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data: EventWithID[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ data: doc.data() as EventData, event_id: doc.id });
      });
      setter(data);

      return () => unsubscribe();
    });
  } catch (error) {
    console.log(error);
  }
};

export const getEventByID = async (id: string) => {
  try {
    const docRef = doc(db, "events", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data() as EventData;
  } catch (error) {
    console.log(error);
  }
};

export const deleteEvent = async (eventId: string) => {
  await deleteDoc(doc(db, "events", eventId));

  const imageRef = ref(storage, `events/${eventId}/image`);
  deleteObject(imageRef)
    .then(() => {
      console.log("Deleted successfully");
    })
    .catch((error) => {
      console.error(error);
    });
};
