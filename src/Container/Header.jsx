import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const navItems = ['Home', 'Services', 'Portfolio', 'Contact us', 'About us']

function AppBars() {
  return (
      <AppBar position="static" sx={{ backgroundColor: '#E9FDFF', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ color: '#000', flexGrow: 0.98, display: { xs: 'none', sm: 'block' } }}>
            Logo
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button size='large' key={item} sx={{ fontSize: '20px', fontWeight: '500', color: '#000', textTransform: 'capitalize' }}>
                {item}
              </Button>
            ))}
            <Button size='large' variant="contained" sx={{backgroundColor: '#65D9E6', boxShadow: 'none', borderRadius: '20px', textTransform: 'capitalize'}}>
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
  )
}

export default AppBars
