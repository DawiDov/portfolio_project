import axios from 'axios'

import {
  SET_CANDIDATE_DATA,
} from 'service/constants'
import toastOnError from 'utils/Utils'


const setCandidate = (data) => ({
  type: SET_CANDIDATE_DATA,
  payload: data,
})

const getData = (candidateName) => (dispatch) => {

  axios.defaults.baseURL = `${window.location.origin}/`

  const link = `https://pet-project.site/api/v1${candidateName}`
  // const link = `http://localhost/api/v1${candidateName}`

  axios.get(link).then(resp => {
    dispatch(setCandidate(resp.data[0]))
  })
    .catch(error => toastOnError(error))
}

export default getData
