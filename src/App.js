import React, {Component} from 'react';
import {Container} from 'semantic-ui-react'
import EventBoard   from './components/EventBoard'
import NavBar   from './components/NavBar'


class App extends Component {

  render () {
    return (
    <div>
      <NavBar  />
      <Container className='main'>
      <EventBoard  />
      </Container>
    </div>

    )
  }
}
export default App;
