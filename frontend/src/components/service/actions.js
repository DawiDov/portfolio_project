import axios from 'axios'
import {
  SET_ARTUR_DATA,
  SET_DAMIR_DATA,
} from 'components/service/constants'

const setArturDataAction = (data) => (
  {type: SET_ARTUR_DATA, payload: data }
)

const setDamirDataAction = (data) => (
  {type: SET_DAMIR_DATA, payload: data }
)

const getData = () => (dispatch) => {
  
  const link = 'http://localhost/api/v1/candidate/'
  
  
  axios.get(link).then(resp => {
    dispatch(setDamirDataAction(resp.data[0]))
    dispatch(setArturDataAction(resp.data[1]))
  // debugger // eslint-disable-line
  })
}  

export default getData