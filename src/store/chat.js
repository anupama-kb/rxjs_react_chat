// In our chat.js file, we’ll import Subject from rxjs and create a new variable from the Subject class:

import { Subject } from 'rxjs'

const subject = new Subject();

  //use the data key to hold our array of message objects


const initialState = {
  data: [],
  newDataCount: 0,
}

let state = initialState;

/// init() method that will initialize our component’s state whenever it’s mounted
//  The Subject.next() method is used to feed a new value to the Subject
// When we call the next() method with a value as its parameter, that value is multicasted to all Observers subscribed to the Subject.

const chatStore = {
  init: () => {
    state = {...state, newDataCount: 0}
    subject.next(state)
  },

  subscribe: setState => subject.subscribe(setState),

  sendMessage:  message => {
    state ={
      ...state,
      data: [...state.data, message],
      newDataCount: state.newDataCount + 1
    }
    subject.next(state);
  },

  clearChat: () => {
   state = initialState;
   subject.next(state);
  },
  initialState

}

export default chatStore;
