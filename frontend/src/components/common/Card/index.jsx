import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

import style from './index.module.sass'

const Card = ({ value, icon, className }) => (

  <article
    className={
      classNames(style.contact, className)
    }>
    <picture className={style.icon}>
      {icon}
    </picture>
    <address className={style.value}>
      {value}
    </address>
  </article>
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
