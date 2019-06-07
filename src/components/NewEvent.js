import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '' ,//|| this.props.selectedEvent.title,
      date: '',
      city: '',
      hostedBy: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
      if (this.props.selectedEvent!==null) {
        this.setState({
          ...this.props.selectedEvent
        })
      }
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

   handleSubmit(event) {
    event.preventDefault();

    if (this.state.id){
      this.props.editEvent(this.state)
    }
    else {
      this.setState({ title: '', date: '', city: '' ,   hostedBy: ''});
    }

  
  }

  render() {
    const {closeForm} = this.props
    return (
      
      <div>
        <Segment>
          <Form   onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Event Title</label>
              <input   name="title" value={this.state.title}    onChange={this.handleChange} placeholder="Event Title" />
            </Form.Field>
            <Form.Field>
              <label>Event Date</label>
              <input  name="date" value={this.state.date}    onChange={this.handleChange}  type="date" placeholder="Event Date" />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input value={this.state.city}   name="city" onChange={this.handleChange}   placeholder="City event is taking place" />
            </Form.Field>
            <Form.Field>
              <label>Hosted By</label>
              <input value={this.state.hostedBy}    name="hostedBy"  onChange={this.handleChange}  placeholder="Enter the name of person hosting" />
            </Form.Field>
            <Button positive type="submit">
              Submit
            </Button>
            <Button type="button" onClick={closeForm}>Cancel</Button>
          </Form>
        </Segment>
      </div>
    );
  }
}
export default NewEvent;
