"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { getEventByID, EventData } from "@/services/events";

const defaultEventData: EventData = {
  user_id: "",
  event_title: "",
  venue: "",
  date: "",
  time: "",
  description: "",
  flier: undefined,
  createdAt: null,
};

const Page = ({ params }: { params: { id: string } }) => {
  const [event, setEvent] = useState<EventData>(defaultEventData);

  const getData = useCallback(async () => {
    const data = await getEventByID(params.id);
    if (data) {
      setEvent(data);
    }
  }, [params.id]);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <>
      <h1>{event.event_title}</h1>
      {event.flier_url && (
        <Image src={event.flier_url} width="141" height="188" alt="" />
      )}
    </>
  );
};

export default Page;
