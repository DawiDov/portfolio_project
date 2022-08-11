import { grey } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffea00',
    },
    secondary: {
      main: grey[800],
    }
  }

})

export default theme
