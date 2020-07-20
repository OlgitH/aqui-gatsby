
import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `RESET`) {
    return Object.assign({}, state, {
      formVisible: !state.formVisible,
    })
  }
  return state
}

const initialState = { formVisible: false }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
