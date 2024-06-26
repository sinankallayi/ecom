import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'

const Navbar = () => {
    
  return (
    <div>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6">
              SHOPNEST1
            </Typography>
            <Button color='error' variant='contained'>Login</Button>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar