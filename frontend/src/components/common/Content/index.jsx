import React from 'react'
import PropTypes from 'prop-types'
import { Container, Box } from '@mui/system'
import { Typography } from '@mui/material'

const Content = ({children, sx, sectionName }) => {

  const contentTheme = {
    minHeight: '400px',
    padding: '40px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const sectionNameTheme = {
    textTransform: 'uppercase',
    fontSize: '14pt',
    alignSelf: 'start',
    fontWeight: '700',
    letterSpacing: '3px',
    textDecoration: 'underline blue 4px',
    marginRight: '5em',
  }

  const childrenContainerTheme = {
    display: 'flex',
    flexDirection: 'column',
  }

  return (
    <Container 
      sx={
        {...contentTheme, ...sx,}
      }>
      <Box sx={{alignItems: 'start'}}>
        <Typography variant='h1' sx={sectionNameTheme}>
          {sectionName}
        </Typography>
      </Box>
      <Box sx={childrenContainerTheme}>
        {children}
      </Box>
    </Container>
  )
}

Content.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  sx: PropTypes.objectOf(PropTypes.string),
  sectionName: PropTypes.string.isRequired,
}

Content.defaultProps = {
  sx: null,
}

export default Content