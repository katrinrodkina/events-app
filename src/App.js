import React, {Component} from 'react';
import {Container} from 'semantic-ui-react'
import EventBoard   from './components/EventBoard'
import NavBar   from './components/NavBar'
import {Route} from 'react-router-dom'
import EventDetails   from './components/EventDetails'
import Settings   from './components/Settings'
import NewEvent   from './components/NewEvent'
import Profile   from './components/Profile'
 

class App extends Component {

  render () {
    return (
    <div>
      <NavBar  />
      <Container className='main'>

            <Route exact  path='/' component={EventBoard}     />
            <Route   path='/events' component={EventBoard}     />
            <Route   path='/events/:id' component={EventDetails}     />
            <Route   path='/profile/:id' component={Profile}     />
            <Route   path='/settings' component={Settings}     />
            <Route   path='/createevent' component={NewEvent}     />
      

      </Container>
    </div>

    )
  }
}
export default App;
