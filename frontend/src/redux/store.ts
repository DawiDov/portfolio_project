import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import persDataReducer from './persDataReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: { main: persDataReducer }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
