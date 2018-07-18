export default function eventsReducer(state = { loading: false, events: [] }, action) {
  switch (action.type) {
    case 'LOADING_EVENTS':
      return Object.assign({}, state, {loading: true})
    case 'GET_EVENTS':
      console.log("Getting events...")
      return { loading: false, events: action.events }
 
    default:
      return state;
  }
};