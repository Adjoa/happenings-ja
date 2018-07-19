import fetch from 'isomorphic-fetch'

export function getEvents() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_EVENTS' });
    return fetch('/events')
      .then(response => response.json())
      .then(events => dispatch({ type: 'GET_EVENTS', events }));
  };
}

export function addEvent(event) {
  return(dispatch) => {
    dispatch({ type: 'ADDING_EVENT' })
    return fetch('/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event })
    })
    .then(response => response.json())
    .then(event => dispatch({ type: 'ADD_EVENT', event }))
  }
}

