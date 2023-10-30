import { Paper, Typography } from '@mui/material'

export default function VideoMonitor({ filterName }) {
  return (
    <Paper sx={{ minHeight: "780px", padding: "8px" }} elevation={8}>
      <Typography fontWeight="bold" variant="h3">{filterName}</Typography>
    </Paper>
  )
}
