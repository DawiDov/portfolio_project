import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from './index.module.sass'

const Content = ({children, sx, modificator}) => (
  <section 
    className={
      classNames(style.container, modificator)
    } 
    style={{...sx}}
  >
    {children}
  </section>
)

Content.propTypes = {
  children: PropTypes.objectOf(PropTypes.node),
  sx: PropTypes.objectOf(PropTypes.string),
  modificator: PropTypes.string,
}

Content.defaultProps = {
  children: null,
  sx: null,
  modificator: null,
}

export default Content