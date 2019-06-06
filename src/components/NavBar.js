import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";

class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top" style={{background:'#706F8E'}}>
        <Container>
          <Menu.Item header >
            <img src="http://eastendlocal.com/wp-content/uploads/2017/09/local_events_1024.png" />  
          </Menu.Item>
          <Menu.Item name="Events" />
          <Menu.Item>
            <Button floated="right" positive inverted content="Create Event" />
          </Menu.Item>
          <Menu.Item position="right">
            <Button basic inverted content="Login" />
            <Button basic inverted content="Sign Out" />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}
export default NavBar;
