import { Grid, Paper } from '@mui/material'

export default function ClientInterface () {
  return (
    <Grid sx={{ height: '100vh' }} container spacing={1}>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Paper sx={{ height: '50%' }}>
          {/* Content for the first item */}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Paper sx={{ height: '50%' }}>
          {/* Content for the first item */}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Paper sx={{ height: '50%' }}>
          {/* Content for the first item */}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Paper sx={{ height: '50%' }}>
          {/* Content for the second item */}
        </Paper>
      </Grid>
    </Grid>
  )
}
