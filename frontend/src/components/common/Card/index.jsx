import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

import style from './index.module.sass'

const Card = ({ value, icon, className }) => (

  <div
    className={
      classNames(style.contact, className)
    }>
    <div className={style.icon}>
      {icon}
    </div>
    <div className={style.value}>
      {value}
    </div>
  </div>
)

Card.propTypes = {
  value: PropTypes.string.isRequired,
  icon: PropTypes.node,
  className: PropTypes.string,
}

Card.defaultProps = {
  className: null,
  icon: <LocalPhoneIcon />
}

export default Card
