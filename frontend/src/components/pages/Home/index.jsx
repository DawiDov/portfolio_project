import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Paper, Container } from '@mui/material'

import Contact from 'components/common/Contact'

const Home = ({candidate}) => {
  // eslint-disable-next-line
  useEffect(() => {
    if (!candidate) {
      // eslint-disable-next-line
      return alert('no user')
    }
  })
  console.log(candidate)
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
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
          {candidate.full_name}
        </Paper>
        <Box>
          <Contact
            title='гитхаб'
            value={candidate.contacts.git_hub}
            icon={null} />
        </Box>
      </Box>
    </Container> 
  )
}

Home.propTypes = {
  candidate: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.string
    )
  ).isRequired,
}

export default Home