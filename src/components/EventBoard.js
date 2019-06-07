import React, { Component } from "react";
import {Grid, Button, Header } from 'semantic-ui-react'
import EventList from './EventList'
import NewEvent from './NewEvent'
 
const events = [
 {
   id: '1',
   title: 'Brooklyn Bridge Walk',
    date: '2019-03-27',
    category: 'walking tour',
    description: 'Walk across Brooklyn Bridge',
    city: 'NYC',
    hostedBy: 'Matt',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Chelsea Market',
     date: '2019-05-27',
     category: 'tasting',
     description: 'Explore iconic Chelsea Market',
     city: 'NYC',
     hostedBy: 'Gill',
     hostPhotoURL: 'https://randomuser.me/api/portraits/men/23.jpg',
     attendees: [
       {
         id: 'a',
         name: 'Bob',
         photoURL: 'https://randomuser.me/api/portraits/men/23.jpg'
       },
       {
         id: 'b',
         name: 'Tom',
         photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
       }
     ]
   },
 
]


class EventBoard extends Component {
  constructor(props) {
    super(props)

    this.state={
      events:events,
      isOpen:false,
      selectedEvent:null
    }
    this.openForm = this.openForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.openEvent = this.openEvent.bind(this)
    this.editEvent = this.editEvent.bind(this)
    this.deleteEvent = this.deleteEvent.bind(this)
  }

  openForm() {
    this.setState( {
      isOpen:true,
      selectedEvent:null
    })
  }
   closeForm() {
      this.setState( {
        isOpen:false
      })
   }

   openEvent(event) {
    this.setState( {
      isOpen:true,
      selectedEvent:event
    })
   }

   editEvent(updatedEvent) {
    this.setState({
      events: events.map(event=> {
          if(event.id === updatedEvent.id) {
            return {...updatedEvent}
          }
          else {
            return event
          }
        }),
      isOpen:false,
      selectedEvent:null
    })
   }

   deleteEvent(eventId) {
    this.setState( {
      events: events.filter(event=>event.id !== eventId)
    })
   }
  
  render() {
    return (

        <Grid>
           <Grid.Column width={10}>
           <Header as='h1'>Event List: </Header>
           <EventList events={this.state.events}  openEvent={this.openEvent}  deleteEvent={this.deleteEvent}   />
           </Grid.Column>
           <Grid.Column width={6}
           >
           <Button positive content='Create Event'  onClick={()=>this.openForm()}/> 
           {this.state.isOpen &&  
             < NewEvent  key={this.state.selectedEvent ? this.state.selectedEvent.id : 0}  //!!!! in order for component to rerender
                  closeForm={this.closeForm} selectedEvent={this.state.selectedEvent} 
                  editEvent={this.editEvent}/>}
         
           </Grid.Column>
        </Grid>
    )
  }
}
export default EventBoard;
