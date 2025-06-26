import './Myevent.css';


function Myevent({ events }) {
  if (events.length === 0) return <p>No events registered yet.</p>;



  return (
    <div className="my-events-container">
      <h2>Registered Events</h2>

      {events.length === 0 ? (
        <p className="no-events">No events registered yet.</p>
      ) : (
        events.map((e, index) => (
          <div className="event-card" key={index}>
            <strong>{e.eventName}</strong><br />
            Attendee: {e.attendeeName}<br />
            Email: {e.email}
          </div>
        ))
      )}
    </div>
  );
};

export default Myevent;