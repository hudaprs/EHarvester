import { combineReducers } from "redux"

import auth from "./authReducer"
import authModal from "./authModalReducer"

export default combineReducers({
  auth,
  authModal,
})
