import fetch from 'isomorphic-fetch'

export function getEvents() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_EVENTS' });
    return fetch('events')
      .then(response => response.json())
      .then(events => dispatch({ type: 'GET_EVENTS', payload: events }));
  };
}