import React from 'react' 
import { Outlet } from 'react-router-dom'

import Header from 'components/layoutComponents/Header'
import Title from 'components/layoutComponents/Title'

const Layout = () => (
  <>
    <Header/> 
    <Title />
    <Outlet />
  </>
)

export default Layout
