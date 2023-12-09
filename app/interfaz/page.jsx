import { Grid, Typography } from '@mui/material'
import VideoMonitor from '../components/VideoMonitor'

export default function ClientInterface () {
  return (
    <Grid container spacing={0}>
      <Grid item xs={10}>
        <Grid sx={{ height: '100vh' }} container spacing={0}>
          <Grid item xs={6}>
            <VideoMonitor videoUrl='http://127.0.0.1:5000/video_feed_sweden' />
          </Grid>
          <Grid item xs={6}>
            <VideoMonitor videoUrl='http://127.0.0.1:5000/video_feed_pendelcam' />
          </Grid>
          <Grid item xs={6}>
            {/* <VideoMonitor /> */}
          </Grid>
          <Grid item xs={6}>
            {/* <VideoMonitor /> */}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Typography fontWeight='bold' variant='h1'>Flex de imágenes de los filtros</Typography>
      </Grid>
    </Grid>
  )
}
