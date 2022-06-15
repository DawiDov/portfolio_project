import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from './index.module.sass'

const Content = ({children, className, sx, sectionName }) => (

  <section 
    className={
      classNames(style.container, className)
    }
    style={{...sx}}>
    <div 
      className={style.titleBox}>
      <h1 className={style.title}>
        {sectionName}
      </h1>
    </div>
    <div className={style.children}>
      {children}
    </div>
  </section>
)

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  sx: PropTypes.objectOf(PropTypes.string),
  sectionName: PropTypes.string.isRequired,
}

Content.defaultProps = {
  sx: null,
  className: null,
}

export default Content