import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from './index.module.sass'

const ContentContainer = ({children, background, className, sx }) => (

  <section
    className={
      classNames(style.container, className)
    }
    style={{
      ...sx,
      backgroundColor: background,
    }}
  >
    {children}
  </section>
)

ContentContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  sx: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  background: PropTypes.string,
}

ContentContainer.defaultProps = {
  sx: null,
  background: 'white',
  className: null,
}

export default ContentContainer