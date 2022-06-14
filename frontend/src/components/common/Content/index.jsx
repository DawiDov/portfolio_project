import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@mui/system'

const ContentContainer = ({children, sx }) => {
  const containerTheme = {
    width: '100vw',
    minHeight: '400px',
    display: 'flex',
    justifyContent: 'center',
  }
  return (
    <Container 
      sx={{
        ...containerTheme,
        ...sx,
      }}
    >
      {children}
    </Container>
  )
}

ContentContainer.propTypes = {
  children: PropTypes.objectOf(PropTypes.node).isRequired,
  sx: PropTypes.objectOf(PropTypes.string),
}

ContentContainer.defaultProps = {
  sx: null,
}

export default ContentContainer