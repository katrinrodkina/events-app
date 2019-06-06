import React, { Component } from "react";
import {Grid, Button, Header } from 'semantic-ui-react'
import EventList from './EventList'
import NewEvent from './NewEvent'
 
const events = [
 {
   id: '1',
   title: 'Brooklyn Bridge Walk',
    date: '2019-03-27T11:00:00+00:00',
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
     date: '2019-05-27T11:00:00+00:00',
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
      isOpen:false
    }
    this.openForm = this.openForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
  }

  openForm() {
    this.setState( {
      isOpen:true
    })
  }
   closeForm() {
      this.setState( {
        isOpen:false
      })
   }
  
  render() {
    return (

        <Grid>
           <Grid.Column width={10}>
           <Header as='h1'>Event List: </Header>
           <EventList events={this.state.events} />
           </Grid.Column>
           <Grid.Column width={6}
           >
           <Button positive content='Create Event'  onClick={()=>this.openForm()}/> 
           {this.state.isOpen &&   < NewEvent closeForm={this.closeForm} />}
         
           </Grid.Column>
        </Grid>
    )
  }
}
export default EventBoard;
