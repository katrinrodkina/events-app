import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link , withRouter} from "react-router-dom";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false
    };

  }

  signIn = () => {
    this.setState({
      authenticated:true
    })
  }

  singOut = () => {
    this.setState({
      authenticated:false
    })
    this.props.history.push('/')
  }




  render() {
    return (
      <Menu inverted fixed="top" style={{ background: "#153F70" }}>
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            <img src="http://eastendlocal.com/wp-content/uploads/2017/09/local_events_1024.png" />
          </Menu.Item>
          <Menu.Item name="Events" as={NavLink} to="/events" />
          <Menu.Item>
            <Button
              floated="right"
              as={Link}
              to="/createevent"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
          {this.state.authenticated ? <SignIn singOut={this.singOut}  /> : <SignOut signIn={this.signIn}   />}
        </Container>
      </Menu>
    );
  }
}
export default withRouter(NavBar);  //!!!
