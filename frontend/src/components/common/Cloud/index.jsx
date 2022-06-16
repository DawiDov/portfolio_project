import React, { useState } from 'react'
import randomColor from 'randomcolor'
import TagCloud from 'react-tag-cloud'
import PropTypes from 'prop-types'
import useInterval from 'hooks/useInterval'


const CloudSkills = ({ skills }) => {
  const [count, setCount] = useState(true)

  useInterval(() => {
    setCount(!count)
  }, 3000)
  const cloud = skills.map((word) => <div key={word}>{word}</div>)
  
  return (
    <TagCloud 
      style={{
        fontFamily: 'sans-serif',
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: () => randomColor(),
        padding: 5,
        width: '100%',
        height: '100%'
      }}>
      {cloud}
    </TagCloud>
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