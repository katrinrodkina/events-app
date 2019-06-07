import React, { Component } from "react";
import { Segment, Icon, Item, List, Button } from "semantic-ui-react";
import  EventAttendee from './EventAttendee'

class EventItem extends Component {
  render() {
    const {event, openEvent, deleteEvent} = this.props
    return (
      <div>
        <Segment.Group>
          <Segment>
            <Item.Group>
              <Item>
                <Item.Image cicular='true' src={event.hostPhotoURL}  />
                <Item.Content>
                  <Item.Header as="a">{event.title}</Item.Header>
                  <Item.Description>
                    Hosted by <a>{event.hostedBy}</a>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
          <Segment>
            <span>
              <Icon name="clock" /> {event.date} 
            </span>
          </Segment>
          <Segment secondary>
            <List horizontal>
            {event.attendees.map (atendee => (
            <EventAttendee key={atendee.id} atendee={atendee}/>
        ))}
        

            </List>
          </Segment>
          <Segment clearing>

          <span>{event.description}</span>
            <Button   onClick={()=> openEvent(event)} as="a" color="teal" floated="right" content="View" />
            <Button   onClick={()=> deleteEvent(event.id)} as="a" color="red" floated="right" content="Delete" />
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}
export default EventItem;
