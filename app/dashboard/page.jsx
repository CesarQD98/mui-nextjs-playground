import { Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export default function Dashboard () {
  return (
    <div>
      <Typography variant='h1'>Dashboard</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ backgroundColor: '#EBFCFF' }}>
            <Typography variant='h4'>Cliente nuevo</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <Typography variant='h4'>Solicitud de crédito</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button variant='contained' color='primary'>Solicitar crédito</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button fullWidth sx={{ textTransform: 'none' }}>
            <Paper>
              <Typography variant='h4'>Aprobación de créditos</Typography>
            </Paper>
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <a href='#'>
            <Paper>
              <Typography variant='h4'>Aprobación de créditos</Typography>
            </Paper>
          </a>
        </Grid>
      </Grid>
    </div>
  )
}
