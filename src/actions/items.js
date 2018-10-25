export function loginUser(user) {
  return {
    type: "LOGIN_USER",
    payload: user
  }
}

export function logoutUser() {
  return {
    type: "LOGOUT_USER",
    payload: {}
  }
}

export function addCard(card) {
  return {
    type: "ADD_CARD",
    payload: card
  }
}
