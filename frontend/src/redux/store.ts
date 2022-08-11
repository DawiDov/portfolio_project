import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import persDataReducer from './persDataReducer'

const reducers = combineReducers({
  persData: persDataReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleWare)))
// Infer the `RootState` and `AppDispatch` types from the store itself
type Store = typeof store
//export type RootState = ReturnType<Store>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
//export type AppDispatch = typeof store.dispatch

export default store
