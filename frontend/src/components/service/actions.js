import axios from 'axios'
import {
  SET_ARTUR_DATA,
  SET_DAMIR_DATA,
} from 'components/service/constants'
import { toastOnError } from 'utils/Utils'

const setArturDataAction = (data) => (
  {type: SET_ARTUR_DATA, payload: data }
)

const setDamirDataAction = (data) => (
  {type: SET_DAMIR_DATA, payload: data }
)

const getData = () => (dispatch) => {
  
  const link = 'api/v1/candidate/'
  
  
  axios
    .get(link).then(resp => {
      dispatch(setDamirDataAction(resp.data[0]))
      dispatch(setArturDataAction(resp.data[1]))
    })
    .catch(error => toastOnError(error))
}  

export default getData