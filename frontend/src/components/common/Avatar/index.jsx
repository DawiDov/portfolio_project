import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from './index.module.sass'

const Avatar = ({ src, className }) => (
  <img
    className={
      classNames(style.avatar, className)
    }
    alt='avatar'
    src={src}
  />
)

Avatar.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
}

Avatar.defaultProps = {
  src: 'https://n-cdn.serienjunkies.de/hq/108312.jpg',
  className: null,
}

export default Avatar
