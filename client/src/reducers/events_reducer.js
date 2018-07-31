export default function eventsReducer(state = { loading: false, events: []}, action) {
  switch (action.type) {
    case 'LOADING_EVENTS':
      return Object.assign({}, state, {loading: true})
    case 'GET_EVENTS':
      return Object.assign({}, state, {loading: false, events: action.events})
    case 'ADDING_EVENT':
      return Object.assign({}, state, {loading: true})
    case 'ADD_EVENT':
      return Object.assign({}, state, {loading: false, events: state.events.concat(action.event)})
    default:
      return state;
  }
};