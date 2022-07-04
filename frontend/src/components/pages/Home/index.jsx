// used packages
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// icons
import { Facebook, GitHub, AlternateEmail } from '@mui/icons-material'
// personal components
import StackTitle from 'components/common/StackTitle'
import ContentContainer from 'components/common/ContentContainer'
import Button from 'components/common/Button'
import getData from 'service/actions'
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
    avatar,
    resumeLink,
  } = useSelector(state => ({
    fullName: state.persData.fullName,
    contacts: state.persData.contacts,
    education: state.persData.education,
    experience: state.persData.experience,
    skills: state.persData.skills,
    avatar: state.persData.avatar,
    resumeLink: state.persData.resumeLink,
  }))

  const candidateName = location.pathname

  const getNickName = (link) => {
    const splitArray = link.split('/')
    return splitArray[splitArray.length - 1]
  }

  useEffect(() => {
    dispatch(getData(candidateName))
  }, [])

  return (
    <main>
      <ContentContainer
        id='contact'
        background='#bec2c6'
      >
        <Content
          sectionName={fullName}
          childrenSX={{ alignSelf: 'center' }}
          avatar={<Avatar src={avatar} />} >
          <Card
            title={contacts.phone_number}
            link='#' />
          <Card
            title={
              `@${getNickName(contacts.vk)}`
            }
            isLink
            link={contacts.vk}
            icon={<Facebook />} />
          <Card
            title={
              `@${getNickName(contacts.git_hub)}`
            }
            isLink
            link={contacts.git_hub}
            icon={<GitHub />} />
          <Card
            title={
              `@${getNickName(contacts.git_flic)}`
            }
            isLink
            link={contacts.git_flic}
            icon={<GitHub />} />
          <Card
            title={contacts.email}
            link={contacts.email}
            icon={<AlternateEmail />} />
          <Button
            onClick={() => window.open(resumeLink)}
            title='скачать резюме' />
        </Content>
      </ContentContainer>
      <ContentContainer
        id='education'
      >
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
      <Divider sx={{ width: '200px' }} />
      <ContentContainer
        id='experience'
      >
        <Content
          sectionName='Опыт работы'
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
      <StackTitle id='stack' />
      <CloudSkills skills={skills} />
    </main>
  )
}

export default Home
