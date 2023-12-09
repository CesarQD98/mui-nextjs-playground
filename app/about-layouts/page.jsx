import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

function Home () {
  return (
    <Box>
      <Typography variant='h1'>about-layouts</Typography>
      <Link href='/about-layouts/new-segment'>
        <Typography variant='p'>/new-segment</Typography>
      </Link>
    </Box>
  )
}

export default Home
