import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class NewEvent extends Component {
  render() {
    const {closeForm} = this.props
    return (
      
      <div>
        <Segment>
          <Form>
            <Form.Field>
              <label>Event Title</label>
              <input placeholder="First Name" />
            </Form.Field>
            <Form.Field>
              <label>Event Date</label>
              <input type="date" placeholder="Event Date" />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input placeholder="City event is taking place" />
            </Form.Field>
            <Form.Field>
              <label>Hosted By</label>
              <input placeholder="Enter the name of person hosting" />
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
