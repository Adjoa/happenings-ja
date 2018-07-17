import fetch from 'isomorphic-fetch'

export function getEvents() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_EVENTS' });
    return fetch('http://172.31.46.48:8081/events')
      .then(response => response.json())
      .then(events => dispatch({ type: 'GET_EVENTS', payload: events }));
  };
}