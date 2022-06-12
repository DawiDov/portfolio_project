import React from 'react' 

import style from 'components/layoutComponents/Layout'
import Header from 'components/layoutComponents/Header'
import Title from 'components/layoutComponents/Title'

const Layout = () => (
  <div className={style.layoutContainer}>
    <Header/> 
    <Title />
  </div>
)

export default Layout
