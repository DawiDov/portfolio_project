import classNames from 'classnames'
import React from 'react'

import style from './index.module.sass'

const Title = () => (
  <section className={style.title_wrapper}>
    <article className={classNames(
      style.title,
      style.title_animate,
      style.title_border_animate)}>
      <p>Проект-Резюме</p>
    </article>
    <p className={style.text}>
      Я инженер веб-разработки и использую React для разработки SPA приложений. Этот проект представляет собой резюме и его можно использовать в качестве портфолио
    </p>
  </section>
)

export default Title
