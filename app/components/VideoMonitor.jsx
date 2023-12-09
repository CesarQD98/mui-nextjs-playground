import { Box, Paper } from '@mui/material'
import CustomStream from './CustomStream'

export default function VideoMonitor ({ videoUrl }) {
  return (
    <Paper sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }} elevation={4}>
      <Box sx={{ backgroundColor: '#cfecf7', flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CustomStream videoUrl={videoUrl} />
      </Box>
    </Paper>
  )
}
