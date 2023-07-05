import {
  collection,
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  onSnapshot,
  deleteDoc,
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
}

export const createEvent = async (data: EventData) => {
  try {
    const docRef = await addDoc(collection(db, "events"), data);
    const imageRef = ref(storage, `events/${docRef.id}/image`);
    if (data.flier) {
      await uploadString(imageRef, data.flier as string, "data_url").then(
        async () => {
          //👇🏻 Gets the image URL
          const downloadURL = await getDownloadURL(imageRef);
          //👇🏻 Updates the docRef, by adding the flier URL to the document
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
  setter: (data: EventData[]) => void
) => {
  try {
    const q = query(collection(db, "events"), where("user_id", "==", uid));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data: EventData[] = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data() as EventData);
      });
      setter(data);

      return () => unsubscribe();
    });
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
