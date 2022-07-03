import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Facebook, GitHub, AlternateEmail } from '@mui/icons-material'

import getData from 'service/actions'
import {
  Avatar,
  Button,
  Card,
  Content,
  ContentContainer,
  Divider,
  StackTitle,
  TextBlock,
  CloudSkills
} from 'components/common'

import {
  greyBackground,
  contentAlign
} from './styles'

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

  useEffect(() => {
    dispatch(getData(candidateName))
  }, [])

  const getNickName = (link) => {
    const splitArray = link.split('/')
    return splitArray[splitArray.length - 1]
  }
  return (
    <main>
      <ContentContainer
        id='contact'
        background={greyBackground}
      >
        <Content
          sectionName={fullName}
          childrenSX={contentAlign}
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
            <TextBlock
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
            <TextBlock
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
