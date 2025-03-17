import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './EventCalendar.css'

function EventCalendar() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [eventDescription, setEventDescription] = useState('');

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleAddEvent = () => {
    const formattedDate = date.toLocaleDateString();
    const updatedEvents = { ...events, [formattedDate]: [...(events[formattedDate] || []), eventDescription] };
    setEvents(updatedEvents);
    setEventDescription('');
  };

  const handleEventClick = (eventDate) => {
    const formattedDate = eventDate.toLocaleDateString();
    if (events[formattedDate]) {
      return alert(`Events on ${formattedDate}: \n${events[formattedDate].join('\n')}`);
    } else {
      return alert(`No events on ${formattedDate}`);
    }
  };

  return (
    <div className="event-calendar-container">
      <h2>Event Calendar</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName={({ date, view }) => {
          const formattedDate = date.toLocaleDateString();
          if (events[formattedDate]) {
            return 'has-event';
          }
          return null;
        }}
        onClickDay={handleEventClick}
      />
      <div className="event-details">
        <h3>Add Event</h3>
        <textarea
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          placeholder="Enter event description"
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
      <div className="events-list">
        <h3>Events on {date.toLocaleDateString()}:</h3>
        <ul>
          {events[date.toLocaleDateString()] ? (
            events[date.toLocaleDateString()].map((event, index) => (
              <li key={index}>{event}</li>
            ))
          ) : (
            <li>No events for this day</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default EventCalendar;
