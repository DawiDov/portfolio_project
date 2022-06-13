import React from 'react'
import { Card } from '@mui/material'
import PropTypes from 'prop-types'

const Contact = ({title, value, icon}) => {

  const cardTheme = {
    padding: '1em 5em',
    borderRadius: '8px',
    margin: '20px',
  }
  
  return (
    <Card
      variant='outlined'
      sx={cardTheme}>
      {title}
      {value}
      {icon}
    </Card>
  )
}

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
}

export default Contact