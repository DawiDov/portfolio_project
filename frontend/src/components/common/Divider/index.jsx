import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import style from './index.module.sass'

const Divider = ({ className }) => (
  <div className={
    classNames(style.divider, className)
  } />
)

Divider.propTypes = {
  className: PropTypes.string,
}

Divider.defaultProps = {
  className: null,
}

export default Divider
