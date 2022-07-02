import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

import style from './index.module.sass'

const Card = ({ isLink, title, link, icon, className }) => (

  <article
    className={
      classNames(style.contact, className)
    }>
    <picture className={style.icon}>
      {icon}
    </picture>
    <address className={style.address}>
      {isLink ? (
        <a
          className={style.link}
          rel='noreferrer'
          target='_blank'
          href={link}>
          {title}
        </a>
      ) : (
        <div
          className={style.link}
        >
          {title}
        </div>)
      }
    </address>
  </article>
)

Card.propTypes = {
  isLink: PropTypes.bool,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  className: PropTypes.string,
}

Card.defaultProps = {
  isLink: false,
  className: null,
  icon: <LocalPhoneIcon />
}

export default Card
