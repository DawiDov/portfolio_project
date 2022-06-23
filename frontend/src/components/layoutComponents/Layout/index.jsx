import React from 'react'
import ParticlesBg from 'particles-bg'

import Title from 'components/layoutComponents/Title'
import Header from 'components/layoutComponents/Header'
import Button from 'components/layoutComponents/Button'
import style from 'components/layoutComponents/Layout/index.module.sass'
import { Outlet } from 'react-router-dom'

const Layout = () => (
  <>
    <section className={style.topContainer}>
      <ParticlesBg type="lines" bg />
      <Header />
      <Title />
      <Button />
    </section>
    <Outlet />
  </>
)

export default Layout
