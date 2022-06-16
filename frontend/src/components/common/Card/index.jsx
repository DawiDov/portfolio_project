import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from 'index.module.sass'

const Card = ({ title, value, icon, className }) => (

  <div
    className={
      classNames(style.contact, className)
    }>
    <div>
      {title}
    </div>
    <div>
      {value}
    </div>
    <div>
      {icon}
    </div>
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
