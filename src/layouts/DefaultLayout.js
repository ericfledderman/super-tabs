import AppBar     from '@mui/material/AppBar'
import Box        from '@mui/material/Box'
import Container  from '@mui/material/Container'
import React      from 'react'
import Toolbar    from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Outlet } from 'react-router-dom'


export default function DefaultLayout () {
  return (
    <Box sx={{ minHeight : '100vh', minWidth : '100vw' }}>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar>
            <Typography variant='h6' sx={{ flexGrow : 1 }}>
              Super Tabs
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      <Box>
        <Container maxWidth='xl'>
          <Outlet />
        </Container>
      </Box>
    </Box>
  )
}
