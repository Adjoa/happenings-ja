export default function eventsReducer(state = { loading: false, eventItems: {} }, action) {
  switch (action.type) {
    case 'LOADING_EVENTS':
      return Object.assign({}, state, {loading: true})
    case 'GET_EVENTS':
      return { loading: false, eventItems: action.payload }
 
    default:
      return state;
  }
};