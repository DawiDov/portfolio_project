import Content from 'components/common/Content'
import React from 'react'

import style from './index.module.sass'

const Main = () => (
  <section className={style.container}>
    <Content sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      heello world
    </Content>
  </section>
)

export default Main