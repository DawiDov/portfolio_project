import Typography from '@mui/material/Typography'
import { styled, Box } from '@mui/material'

export const TitleContainer = styled(Box)(
  ({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
  })) as typeof Box

export const Name = styled(Typography)(({ theme }) => ({
  color: 'white',
  letterSpacing: '5px',
  textTransform: 'uppercase',
  fontSize: '100px',
  alignSelf: 'flex-end',

})) as typeof Typography

export const LastName = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.primary.main}`,
  letterSpacing: '5px',
  textTransform: 'uppercase',
  marginLeft: '50px',
  fontWeight: 900,
  fontSize: '150px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '100px',
  }
})) as typeof Typography

export const Photo = styled(Box)(({ theme }) => ({
  maxHeight: '500px',
  maxWidth: '400px',
  boxShadow: '15px 15px 5px black',
  margin: '50px',
})) as typeof Box

export const Article = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
}))
