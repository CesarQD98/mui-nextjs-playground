import { Typography } from '@mui/material'
import CreateForm from './components/CreateForm'

export default function Home () {
  return (
    <main>
      <Typography variant='h1'>Home Page</Typography>
      <Typography variant='h2'>Simple Form</Typography>

      <CreateForm />

    </main>
  )
}
