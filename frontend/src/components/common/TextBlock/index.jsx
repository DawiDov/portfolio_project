import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const TextBox = ({ sx, title, paragraph }) => {
  
  const typographyTheme = {
    color: '#313131',
    fontSize: '14pt',
    textAlign: 'left',
    marginTop: '0',
  }

  const paragraphTheme = {
    color: '#838c95',
    marginBottom: '30px',
  }
  return (
    <Box 
      sx={{
        ...typographyTheme, 
        ...sx
      }}>
      <Typography variant='h4'>
        {title}
      </Typography>
      <Typography 
        paragraph
        sx={paragraphTheme}
      >
        {paragraph}
      </Typography>
    </Box>
  )
}

TextBox.propTypes = {
  sx: PropTypes.objectOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
}

TextBox.defaultProps = {
  sx: null,
}

export default TextBox