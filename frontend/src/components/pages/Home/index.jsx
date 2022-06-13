import React from 'react'
import PropTypes from 'prop-types'

import { Box, Paper } from '@mui/material'

const Home = ({candidate}) => (
  <Box>
    <Paper elevation={3} >
      {candidate.full_name}
    </Paper>
  </Box>
)

Home.propTypes = {
  candidate: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.string
    )
  ).isRequired,
}

export default Home