import React, { useState } from 'react'

import PropTypes from 'prop-types'
import randomColor from 'randomcolor'
import TagCloud from 'react-tag-cloud'

import useInterval from 'hooks/useInterval'
import { randomFontSize, randomWordRegister } from 'utils/Utils'
import style from './index.module.sass'

const CloudSkills = ({ skills }) => {
  const [count, setCount] = useState(true)

  useInterval(() => {
    setCount(!count)
  }, 4000)
  const cloud = skills.map((skill) => <div 
    style={{
      textTransform: randomWordRegister(),
      fontSize: randomFontSize(20, 100),
    }}
    key={skill.id}>{skill.skill_name}</div>)
  
  return (
    <section className={style.cloudWrapper}>
      <div className={style.cloudBorder}>
        <TagCloud 
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: () => randomColor(),
            padding: 5,
            width: '100%',
            height: '100%'
          }}>
          {cloud}
        </TagCloud>
      </div>
    </section>
  )
}

export default CloudSkills

CloudSkills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
}

CloudSkills.defaultProps = {
  skills: [
    'Jango',
    'Python',
    'DRF',
    'Selenium',
    'BeautifullSoup',
    'React',
    'JavaScript',
    'Redux',
    'axios',
    'React-Router',
    'CSS',
    'HTML',
    'MUI',
    'Bootstrap',

  
  ]
}