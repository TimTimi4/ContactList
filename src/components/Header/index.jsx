import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Logo, Title } from './styled'

const Header = ({ logo, title }) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Logo variant="h4" component="div" sx={{ flexGrow: 0.7 }}>
          {logo}
        </Logo>
        <Title variant="h5" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Title>
      </Toolbar>
    </AppBar>
  </Box>
)

export default Header
