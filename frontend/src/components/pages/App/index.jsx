import { Route, Routes } from 'react-router-dom'
import React  from 'react'

import Layout from 'components/layoutComponents/Layout'
import PageNotFound from 'components/pages/PageNotFound'
import Home from 'components/pages/Home'

const App = () => (
  <Routes>
    <Route path='/' element={<Layout/>} >
      <Route path='artur' element={<Home />} />
      <Route path='damir' element={<Home />} />
    </Route>
    <Route path='*' element={<PageNotFound/>} />
  </Routes>
)


export default App