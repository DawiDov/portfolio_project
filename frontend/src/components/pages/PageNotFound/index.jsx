import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react' 

const PageNotFound = () => (
  <Box sx={{
    backgroundColor: 'beige', 
  }}>
    <Paper 
      variant='outlined'
      elevation={5} 
      sx={{
        marginTop: '200px',
        width: '400px',
        height: '3em',
        textAlign: 'center',
        padding: '3em',
      }}
    >
      <Typography
        sx={{
          fontSize: '20pt',
        }}
      >
        Sorry, page not found
      </Typography>
    </Paper>
  </Box>
)

export default PageNotFound