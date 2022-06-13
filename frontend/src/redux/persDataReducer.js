import {
  SET_ARTUR_DATA,
  SET_DAMIR_DATA,
} from 'components/service/constants'

const initialState = {
  damir: {},
  artur: {},
}
const defaultAction = {}

const persDataReducer = (state=initialState, action=defaultAction) => {
  switch (action.type) {
  case SET_ARTUR_DATA:
    return {
      ...state,
      artur: action.payload
    }  
  case SET_DAMIR_DATA:
    return {
      ...state,
      damir: action.payload
    }  
  default:
    return {
      ...state
    }
  }
}

export default persDataReducer