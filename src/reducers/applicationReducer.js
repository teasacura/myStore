export default function applicationReducer(
  state = {
    cards: [],
    user: {},
    loggedIn: false
  }, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {...state, user: action.payload, loggedIn: true }
    case 'LOGOUT_USER':
      return {...state, user: action.payload, loggedIn: false }
    case 'ADD_CARD':
      let newCards = [...state.cards]
      newCards.push(action.payload)
      return { ...state, cards: newCards }
    default:
      return state;
  }
}
