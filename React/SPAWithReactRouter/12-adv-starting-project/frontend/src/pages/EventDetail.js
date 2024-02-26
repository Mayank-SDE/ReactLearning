import React, { Suspense } from 'react';
import { useRouteLoaderData, json, redirect, defer, Await } from 'react-router-dom';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';
const EventDetail = () => {


  const { event, events } = useRouteLoaderData('event-detail');

  return <>
    <Suspense fallback={<p style={{
      textAlign: 'center'
    }}>Loading...</p>}>
      <Await resolve={event}>

        {(loadedEvent) => {

          return <EventItem event={loadedEvent} />
        }}

      </Await>
    </Suspense>
    <Suspense fallback={<p style={{
      textAlign: 'center'
    }}>Loading...</p>}>
      <Await resolve={events}>

        {(loadedEvents) => {
          return <EventsList events={loadedEvents}></EventsList>
        }}
      </Await>
    </Suspense>


  </>;
};

export default EventDetail;

async function loadEvent(id) {
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json({ message: 'Could not fetch details for selected events.' }, { status: 500 });
  } else {


    const responseData = await response.json();

    return responseData.event;

  }

}

export async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {

    // return { isError: true, message: "Could not fetch teh events." }
    // throw new Response(JSON.stringify({ message: 'could not fetch events' }), { status: 500 });

    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    const responseData = await response.json();

    return responseData.events;

  }
}

export async function loader({ request, params }) {

  const eventId = params.eventId;

  return defer({
    event: await loadEvent(eventId),
    events: loadEvents()
  });

}

export async function action({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: request.method
  });

  if (!response.ok) {
    throw json({ message: 'Could not delete event.' }, { status: 500 });
  }
  return redirect("/events");

}