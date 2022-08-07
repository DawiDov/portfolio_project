import { styled, Box } from '@mui/material'

const ContentContainer = styled(Box)(({ theme, isWhite }) => ({
  width: '100vw',
  minHeight: '400px',
  padding: '30px',
  backgroundColor: isWhite ? 'white' : theme.palette.secondary.dark,
}))

export default ContentContainer
