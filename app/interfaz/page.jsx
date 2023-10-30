import { Container, Grid, Paper, Stack, Typography } from '@mui/material'
import VideoMonitor from '../components/VideoMonitor'

export default function ClientInterface () {
  return (
    <Grid sx={{ height: '100vh' }} container spacing={1}>
      <Grid item xs={6}>
        <VideoMonitor filterName='Filtro 1' />
      </Grid>
      <Grid item xs={6}>
        <VideoMonitor filterName='Filtro 2' />
      </Grid>
      <Grid item xs={6}>
        <VideoMonitor filterName='Filtro 3' />
      </Grid>
      <Grid item xs={6}>
        <VideoMonitor filterName='Filtro 4' />
      </Grid>

      <Grid item container xs={12}>
        <Grid item xs={12}>
          <Paper elevation={16}>
            <Typography fontWeight='bold' variant='h3'>Carrusel de imágenes</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}
