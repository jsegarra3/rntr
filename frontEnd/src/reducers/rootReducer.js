function reducer(state={}, action) {
  switch(action.type) {
    case 'NEW_USER':
      return action.payload
    case 'LOG_IN':
      console.log(action.payload)
      state.token = action.payload.jwt
      debugger
      return action.payload
    default:
      return state;
  }
}

module.exports = reducer