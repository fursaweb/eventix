import { useEffect, useState, useContext, useCallback } from "react";
import { getEvents, EventWithID } from "@/services/events";
import { UserContext } from "@/contexts/UserContext";

const useEventsList = () => {
  const [eventsList, setEventsList] = useState<EventWithID[] | [] | null>(null);
  const [error, setError] = useState<boolean>(false);
  const user = useContext(UserContext);
  const uid = user?.uid;

  const getEventsFunction = useCallback(async () => {
    if (uid) {
      await getEvents(uid, setEventsList, setError);
    }
  }, [uid]);

  useEffect(() => {
    getEventsFunction();
  }, [getEventsFunction]);

  return { eventsList, error };
};

export default useEventsList;
