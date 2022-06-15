import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import ContentContainer from 'components/common/ContentContainer'
import getData from 'components/service/actions'
import Content from 'components/common/Content'
import TextBox from 'components/common/TextBlock'

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
  console.log(fullName)
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
      <ContentContainer background='#f5f5f5' >
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
      <ContentContainer >
        <Content
          sectionName='Умения'
        >
          {skills.map(skill => 
            <TextBox
              key={skill.skill_name}
              title={skill.skill_name}
              paragraph={skill.skill_icon}
            />
          )}
        </Content>
      </ContentContainer> 
    </> 
  )
}

export default Home