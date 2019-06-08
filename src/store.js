import {createStore, applyMiddleware} from 'redux'

const initialState = {
    events: [
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
}

const CREATE_EVENT = 'CREATE_EVENT'
const UPDATE_EVENT = 'UPDATE_EVENT'
const DELETE_EVENT = 'DELETE_EVENT'

export const createEvent  = (event) => ({
    type: CREATE_EVENT , 
    event
})

export const updateEvent  = (event) => ({
    type: UPDATE_EVENT , 
    event
}) 

export const deleteEvent  = (event) => ({
    type: DELETE_EVENT , 
    event
})


const rootReducer = (state = initialState, action) => {
    switch (action.type) { 
        case CREATE_EVENT:
        return {...state, events: action.event}
        case UPDATE_EVENT: 
        return { ...state, events: [ ...state.events.filter(event => event.id !== action.event.id) , action.event]} 
        case DELETE_EVENT: 
        return { ...state, events: state.events.filter(event => event.id !== action.event) } 
        default:
        return state
    }
    }

    const store =  createStore( rootReducer )
      
 export default store

