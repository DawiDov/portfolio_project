import React from 'react'
import PropTypes from 'prop-types'

import style from './index.module.sass'

const GitButton = ({ projectLink }) => (
  <div className={style.buttonWrapper}>
    <buton type='butoon' className={style.button}>
      <a className={style.button_text} href={projectLink}>GITHUB</a>
    </buton>
  </div>
)

GitButton.propTypes = {
  projectLink: PropTypes.string
}

GitButton.defaultProps = {
  projectLink: null,
}

export default GitButton




