export function loginUser(user) {
  return {
    type: "LOGIN_USER",
    payload: user
  }
}

export function addCard(card) {
  return {
    type: "ADD_CARD",
    payload: card
  }
}
