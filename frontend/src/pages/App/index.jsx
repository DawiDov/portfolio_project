import { Route, Routes } from 'react-router-dom'
import React from 'react'

import PageNotFound from 'pages/PageNotFound'
import Home from 'pages/Home'
import Mockup from 'pages/Mockup'
import { ThemeProvider } from '@emotion/react'
import theme from 'style'

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes>
      <Route ipath='/' element={<Mockup />} />
      <Route path={encodeURIComponent('ADavidov')} element={<Home />} />
      <Route path={encodeURIComponent('DAkhmadullin')} element={<Home />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </ThemeProvider>
)


export default App
