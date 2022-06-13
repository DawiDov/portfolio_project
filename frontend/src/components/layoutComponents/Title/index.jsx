import classNames from 'classnames'
import React from 'react' 
import style from './index.module.sass'

const Title = () => (
  <div className={style.title_wrapper}>
    <div className={classNames(
      style.title,
      style.title_animate,
      style.title_border_animate,)}>
      <p>Проект-Резюме</p>
    </div>
    <div className={style.text}>
      <p>Я инженер веб-разработки и использую React для разработки SPA приложений. Этот проект представляет собой резюме и его можно использовать в качестве портфолио</p>
    </div>
  </div>
)

export default Title
