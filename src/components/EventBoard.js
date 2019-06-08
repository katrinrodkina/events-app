import React, { Component } from "react";
import {Grid, Button, Header } from 'semantic-ui-react'
import EventList from './EventList'
import NewEvent from './NewEvent'
import {connect} from 'react-redux' 
import {createEvent, updateEvent, deleteEvent} from '../store'


class EventBoard extends Component {
  constructor(props) {
    super(props)

    this.state={
      isOpen:false,
      selectedEvent:null
    }
    this.openForm = this.openForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.openEvent = this.openEvent.bind(this)
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

  //  editEvent(updatedEvent) {
  //   this.setState({
  //     events: events.map(event=> {
  //         if(event.id === updatedEvent.id) {
  //           return {...updatedEvent}
  //         }
  //         else {
  //           return event
  //         }
  //       }),
  //     isOpen:false,
  //     selectedEvent:null
  //   })
  //  }

  //  deleteEvent(eventId) {
  //   this.setState( {
  //     events: events.filter(event=>event.id !== eventId)
  //   })
  //  }
  
  render() {
    return (

        <Grid>
           <Grid.Column width={10}>
           <Header as='h1'>Event List: </Header>
           <EventList events={this.props.events}  openEvent={this.openEvent}  deleteEvent={this.props.deleteEvent}   />
           </Grid.Column>
           <Grid.Column width={6}
           >
           <Button positive content='Create Event'  onClick={()=>this.openForm()}/> 
           {this.state.isOpen &&  
             < NewEvent  key={this.state.selectedEvent ? this.state.selectedEvent.id : 0}  //!!!! in order for component to rerender
                  closeForm={this.closeForm} selectedEvent={this.state.selectedEvent} 
                  editEvent={this.props.editEvent}
                  createEvent={this.props.createEvent}
                  />}
         
           </Grid.Column>
        </Grid>
    )
  }
}

const mapStateToProps = state => {
  return { events: state.events };
};

const mapDispatchToProps = dispatch => {
  return {
    createEvent: () => {
      dispatch(createEvent());
    },
    editEvent: (event) => {
      dispatch(updateEvent(event));
    },
    deleteEvent: (id) => {
      dispatch(deleteEvent(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventBoard);

