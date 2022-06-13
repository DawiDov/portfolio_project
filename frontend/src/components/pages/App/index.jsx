import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from 'components/layoutComponents/Layout'
import PageNotFound from 'components/pages/PageNotFound'
import Home from 'components/pages/Home'

const App = () => (
  <Routes>
    <Route path='/' element={<Layout/>} >
      <Route index element={<Home />} />
      <Route path='*' element={<PageNotFound/>} />
    </Route>
  </Routes>
)

export default App