import axios from 'axios'

import {
  SET_CANDIDATE_DATA,
} from 'components/service/constants'
import toastOnError from 'utils/Utils'


const setCandidate = (data) => ({
  type: SET_CANDIDATE_DATA, 
  payload: data,
})

const getData = (candidateName) => (dispatch) => {
  
  axios.defaults.baseURL = `${window.location.origin}/`

  const link = `http://localhost/api/v1${candidateName}`

  console.log(link)
  axios
    .get(link)
    .then(resp => {
      console.log(resp.data[0].full_name)
      dispatch(setCandidate(resp.data[0]))
    })
    .catch(error => toastOnError(error))
}  

export default getData