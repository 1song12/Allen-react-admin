import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunks from 'redux-thunk'
import token from './reducers/user'

let state=combineReducers({
    token,
})

let store = createStore(state,applyMiddleware(thunks))

export default store