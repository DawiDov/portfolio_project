import React from 'react' 
import style from './index.module.sass'

const Header = () => (
  <header className={style.header}>
    <div className={style.menuWrapper}>
      <nav className={style.menu}>
        <ul>
          <li>
            <a href='#contact'>Контакты</a>
          </li>
          <li>
            <a href='#education'>Образование</a>
          </li>
          <li>
            <a href='#experience'>Опыт</a>
          </li>
          <li>
            <a href='#stack'>Стек</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
