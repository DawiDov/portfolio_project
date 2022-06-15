import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from 'index.module.sass'

const Card = ({title, value, icon, className}) => (

  <div
    className={
      classNames(style.contact, className)
    }>
    {title}
    {value}
    {icon}
  </div>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Card.defaultProps = {
  className: null,
}

export default Card