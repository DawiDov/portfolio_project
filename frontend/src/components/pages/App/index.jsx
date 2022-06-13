import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from 'components/layoutComponents/Layout'
import PageNotFound from 'components/pages/PageNotFound'
import Main from 'components/pages/Main'


const App = () => (
  <Routes>
    <Route path='/' element={<Layout/>} >
      <Route index element={<Main />} />
      <Route path='*' element={<PageNotFound/>} />
    </Route>
  </Routes>
)

export default App