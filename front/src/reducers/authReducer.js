import * as actions from '../actions/authActions'

export const initialState = {
  email: null,
  uid: null,
  photoURL: null,
  displayName: null
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN:
      const payload = action.payload;
      return { email: payload.email, uid: payload.uid, photoURL: payload.photoURL, displayName: payload.displayName }
    case actions.LOGOUT:
      return initialState
    default:
      return state
  }
}
