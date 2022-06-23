import React from 'react'
import { useSelector } from 'react-redux'
import ParticlesBg from 'particles-bg'

import Title from 'components/layoutComponents/Title'
import Header from 'components/layoutComponents/Header'
import GitButton from 'components/layoutComponents/GitButton'
import style from 'components/layoutComponents/Layout/index.module.sass'
import { Outlet } from 'react-router-dom'

const Layout = () => {

  const {
    projectLink,
  } = useSelector(state => ({
    projectLink: state.persData.projectLink
  }))


  return ( 
    <>
      <section className={style.topContainer}>
        <ParticlesBg type="lines" bg />
        <Header />
        <Title />
        <GitButton projectLink={projectLink} />
      </section>
      <Outlet />
    </>
  )
}

export default Layout
