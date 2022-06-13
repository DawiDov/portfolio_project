import getData from 'components/service/actions'
import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './index.module.sass'

const Home = () => {
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
    <div className={style.home}>{}</div>
  )
}

export default Home