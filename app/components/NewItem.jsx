import React from 'react'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'

function NewItem ({ href, description }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
      <Link href={`/${href}`} target='_blank' rel='noopener noreferrer'>
        <Typography variant='h3'>/{href}</Typography>
      </Link>
      <Typography variant='h4'>{description}</Typography>
    </Box>
  )
}

export default NewItem
