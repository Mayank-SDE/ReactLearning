import { useLoaderData, json, defer, Await } from 'react-router-dom';
import { Suspense } from 'react';
import EventsList from '../components/EventsList';

function Events() {

  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{
      textAlign: 'center'
    }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => {
          return <EventsList events={loadedEvents} />
        }}
      </Await>
    </Suspense>
  );
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

export function loader() {

  return defer({
    events: loadEvents()
  });

}

export default Events;
