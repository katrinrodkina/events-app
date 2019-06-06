import React, { Component } from "react";
import EventItem from "./EventItem";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        
        {events.map (event => (
            <EventItem key={event.id} event={event}/>
        ))}
        
       
      </div>
    );
  }
}
export default EventList;
