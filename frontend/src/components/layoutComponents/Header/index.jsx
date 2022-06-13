import React from 'react' 
import style from './index.module.sass'

const Header = () => (
  <header className={style.header}>
    <nav className={style.menu}>
      <ul>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#resume'>Resume</a>
        </li>
        <li>
          <a href='#works'>Works</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
