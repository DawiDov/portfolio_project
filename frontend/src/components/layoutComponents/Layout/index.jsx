import React from 'react'
import { useSelector } from 'react-redux'
import ParticlesBg from 'particles-bg'

import Title from 'components/layoutComponents/Title'
import Menu from 'components/layoutComponents/Menu'
import GitButton from 'components/layoutComponents/GitButton'
import style from 'components/layoutComponents/Layout/index.module.sass'
import { Outlet } from 'react-router-dom'

const Layout = () => {

  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  const {
    projectLink,
  } = useSelector(state => ({
    projectLink: state.persData.projectLink
  }))

  return ( 
    <>
      <header className={style.header}>
        <ParticlesBg type="lines" bg />
        <Menu />
        <Title />
        <GitButton projectLink={projectLink} />
      </header>
      <Outlet />
    </>
  )
}

export default Layout
