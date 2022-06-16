import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import ContentContainer from 'components/common/ContentContainer'
import getData from 'components/service/actions'
import Content from 'components/common/Content'
import TextBox from 'components/common/TextBlock'
import Divider from 'components/common/Divider'
import CloudSkills from 'components/common/Cloud'

const Home = () => {

  const location = useLocation()
  const dispatch = useDispatch()

  const { 
    fullName,
    contacts,
    education,
    experience,
    skills,
  } = useSelector(state => ({
    fullName: state.persData.fullName,
    contacts: state.persData.contacts,
    education: state.persData.education,
    experience: state.persData.experience,
    skills: state.persData.skills,
  }))
  
  const candidateName = location.pathname

  useEffect(() => {
    dispatch(getData(candidateName))
  }, [])
  return (
    <>
      <ContentContainer >
        <Content
          sectionName='образование'
        >
          {education.map(edu => 
            <TextBox
              key={edu.edu_type}
              title={edu.edu_type}
              paragraph={edu.edu_description}
            />
          )}
        </Content>
      </ContentContainer>
      <Divider /> 
      <ContentContainer >
        <Content
          sectionName='Опыт'
        >
          {experience.map(exp => 
            <TextBox
              key={exp.exp_type}
              title={exp.exp_type}
              paragraph={exp.exp_description}
            />
          )}
        </Content>
      </ContentContainer> 
      <Divider /> 
      <CloudSkills/>
    </> 
  )
}

export default Home