import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import style from './index.module.sass'

const Divider = ({ className }) => (
  <aside className={
    classNames(className, style.divider)
  } />
)

Divider.propTypes = {
  className: PropTypes.string,
}

Divider.defaultProps = {
  className: null,
}

export default Divider
