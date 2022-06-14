import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@mui/system'

const ContentContainer = ({children, background, sx }) => {
  const containerTheme = {
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <Container 
      maxWidth='100vh'
      sx={{
        ...containerTheme,
        ...sx,
        backgroundColor: background,
      }}
    >
      {children}
    </Container>
  )
}

ContentContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  sx: PropTypes.objectOf(PropTypes.string),
  background: PropTypes.string,
}

ContentContainer.defaultProps = {
  sx: null,
  background: 'white',
}

export default ContentContainer