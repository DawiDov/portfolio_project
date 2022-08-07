import { Container } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

const StyledContainer = styled(Container)(({ theme, isWhite }) => ({
  width: '100vw',
  minHeight: '400px',
  padding: '30px',
  backgroundColor: isWhite ? 'white' : theme.palette.secondary.light,
}))

const ContentContainer = ({ children, isWhite }) => (

  <StyledContainer isWhite>
    {children}
  </StyledContainer >
)

ContentContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  isWhite: PropTypes.bool,
}

ContentContainer.defaultProps = {
  isWhite: null,
}

export default ContentContainer
