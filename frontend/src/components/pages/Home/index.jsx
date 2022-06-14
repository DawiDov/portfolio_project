import React, { useEffect } from 'react'
import { Box, Paper } from '@mui/material'
import { useLocation } from 'react-router-dom'

import ContentContainer from 'components/common/ContentContainer'
import Contact from 'components/common/Contact'
import { useDispatch, useSelector } from 'react-redux'
import getData from 'components/service/actions'

const Home = () => {

  const location = useLocation()
  const dispatch = useDispatch()

  const { 
    fullName,
    contacts,
    education,
    experience,
    skills,
  } = useSelector(state => ({
    fullName: state.persData.fullName,
    contacts: state.persData.contacts,
    education: state.persData.education,
    experience: state.persData.experience,
    skills: state.persData.skills,
  }))
  const candidateName = location.pathname

  useEffect(() => {
    dispatch(getData(candidateName))
  }, [])
  console.log(fullName)
  return (
    <ContentContainer sx={{backgroundColor: 'red'}}>
      <Box
        sx={{
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'row',
          minHeight: '300px',
          backgroundColor: 'beige',
        }}
      >
        <Paper 
          elevation={3} 
          sx={{
            padding: '3em 5em',
            height: '1em',
            textAlign: 'center',
            margin: '50px auto',
          }}
        >
          {fullName}
        </Paper>
        <Box>
          <Contact
            title='гитхаб'
            value={contacts.git_hub}
            icon={null} />
        </Box>
      </Box>
    </ContentContainer>
  )
}

export default Home