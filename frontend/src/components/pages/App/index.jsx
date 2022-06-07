import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from 'components/layoutComponents/Layout'
import Main from 'components/pages/Main'
import PageNotFound from 'components/pages/PageNotFound'


const App = () => (
  <Routes>
    <Route path='/' element={<Layout/>} >
      <Route index element={<Main />} />
      <Route path='*' element={<PageNotFound/>} />
    </Route>
  </Routes>
)

export default App