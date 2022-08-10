import React from 'react'
import { Box, Container } from '@mui/material'
import { TitleContainer, Name, LastName, Photo, Article } from './styles'

const Title: React.FC = () => (
  <TitleContainer>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', paddingLeft: '40px' }}>
        <Name variant="h3">Damir</Name>
      </Box>
      <Photo component="img" src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" />
    </Box>
    <Article>
      <LastName variant="h1">Akhmadullin</LastName>
    </Article>
  </TitleContainer>
)

export default Title

