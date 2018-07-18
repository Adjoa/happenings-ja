export default function eventsReducer(state = { loading: false, eventItems: [] }, action) {
  switch (action.type) {
    case 'LOADING_EVENTS':
      return Object.assign({}, state, {loading: true})
    case 'GET_EVENTS':
      console.log("Getting events...")
      return { loading: false, eventItems: action.events }
 
    default:
      return state;
  }
};