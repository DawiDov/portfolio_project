import { Route, Routes } from 'react-router-dom'
import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import getData from 'components/service/actions'
import Layout from 'components/layoutComponents/Layout'
import PageNotFound from 'components/pages/PageNotFound'
import Home from 'components/pages/Home'

const App = () => {
  const dispatch = useDispatch()
  const {
    damir,
    artur,
  } = useSelector(state => ({
    damir: state.persData.damir,
    artur: state.persData.artur,
  }) 
  )
  useEffect(() => {
    dispatch(getData())
  }, []
  )
  console.log(artur)
  console.log(damir)
  return (
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<div>hello world</div>} />
        <Route path='damir' element={<Home candidate={damir} />} />
        <Route path='artur' element={<Home candidate={artur} />} />
      </Route>
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
  )
}

export default App