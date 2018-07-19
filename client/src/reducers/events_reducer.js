export default function eventsReducer(state = { loading: false, events: [] }, action) {
  switch (action.type) {
    case 'LOADING_EVENTS':
      return Object.assign({}, state, {loading: true})
    case 'GET_EVENTS':
      console.log("Getting events...")
      // return { ...state, events: action.events }
      return Object.assign({}, state, {loading: false, events: action.events})
    case 'ADDING_EVENT':
      return Object.assign({}, state, {loading: true})
    case 'ADD_EVENT':
      console.log("Adding event...")
      return Object.assign({}, state, {loading: false, events: action.event})
    default:
      return state;
  }
};