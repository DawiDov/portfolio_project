import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from 'components/layoutComponents/Layout'
import PageNotFound from 'components/pages/PageNotFound'
import Main from 'components/pages/Main'
import style from 'components/pages/App/index.module.sass'

const App = () => (
  <body className={style.body}>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Main />} />
        <Route path='*' element={<PageNotFound/>} />
      </Route>
    </Routes>
  </body>
)

export default App