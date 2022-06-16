import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from './index.module.sass'

const Content = ({ children, avatar, className, sx, sectionName }) => (

  <section
    className={
      classNames(style.container, className)
    }
    style={{ ...sx }}>
    <div
      className={style.titleBox}>
      <div className={avatar ? style.avatar : null}>
        {avatar}
      </div>
      <h1 className={sectionName ? style.title : null}>
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
  sectionName: PropTypes.string,
  avatar: PropTypes.node,
}

Content.defaultProps = {
  sx: null,
  className: null,
  sectionName: null,
  avatar: null,
}

export default Content
