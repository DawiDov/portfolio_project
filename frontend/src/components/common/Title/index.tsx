import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { TitleContainer, Name, LastName, Photo, Article } from './styles'
import { PhoneIcon, VkIcon } from 'pages/Home/icons'
import Content from '../Content'
import Card from '../Card'

interface Contacts {
  email: string
  gitFlic: string
  gitHub: string
  phoneNumber: string
  vk: string
}
const Title: React.FC<Contacts> = ({ email, gitFlic, gitHub, phoneNumber, vk }) => {
  const getNickName = (link: string) => {
    const splitArray = link.split('/')
    return splitArray[splitArray.length - 1]
  }
  return (
    <TitleContainer>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', paddingLeft: '40px' }}>
          <Name variant="h3">Damir</Name>
        </Box>
        <Content>
          <Card
            icon={<PhoneIcon />}
            title={phoneNumber}
            value='#'
          />
          <Card
            title={
              `VK@${getNickName(vk)}`
            }
            isLink
            value={vk}
            icon={< VkIcon />}
          />
        </Content>
        <Photo component="img" src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" />
      </Box>
      <Article>
        <LastName variant="h1">Akhmadullin</LastName>
      </Article>
    </TitleContainer>
  )
}
export default Title

