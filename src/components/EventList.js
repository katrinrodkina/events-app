import React, { Component } from "react";
import EventItem from "./EventItem";

class EventList extends Component {
  render() {
    const { events , openEvent, deleteEvent } = this.props;
    return (
      <div>
        
        {events.map (event => (
            <EventItem key={event.id} event={event}  openEvent={openEvent} deleteEvent={deleteEvent} />
        ))}
        
       
      </div>
    );
  }
}
export default EventList;
