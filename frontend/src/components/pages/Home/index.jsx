import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// icons
import PersonIcon from '@mui/icons-material/Person'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'

import ContentContainer from 'components/common/ContentContainer'
import getData from 'components/service/actions'
import Content from 'components/common/Content'
import TextBox from 'components/common/TextBlock'
import Divider from 'components/common/Divider'
import Avatar from 'components/common/Avatar'
import Card from 'components/common/Card'
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
      <ContentContainer>
        <Content avatar={<Avatar />} >
          <Card value={fullName} icon={<PersonIcon />} />
          <Card value={contacts.vk} icon={<FacebookIcon />} />
          <Card value={contacts.git_hub} icon={<GitHubIcon />} />
          <Card value={contacts.git_flic} icon={<GitHubIcon />} />
          <Card value={contacts.phone_number} />
          <Card value={contacts.email} icon={<AlternateEmailIcon />} />
        </Content>
      </ContentContainer>
      <Divider />
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
      <h2 style={{
        fontSize: '24px',
        fontWeight: '800',
        margin: '5px auto',
        textAlign: 'center',
        textTransform: 'uppercase',
      }}>
        умения
      </h2>
      <Divider />
      <CloudSkills skills={skills} />
    </>
  )
}

export default Home
