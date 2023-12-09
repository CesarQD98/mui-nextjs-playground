import { Container, Typography } from '@mui/material'
import CreateForm from './components/CreateForm'
import NewItem from './components/NewItem'

export default function Home () {
  return (
    <main>
      <Typography variant='h1'>MUI + NextJS Playground</Typography>
      <Typography variant='h2'>Here are some links to the components or stuff I've been building and learning 👋</Typography>

      <Container>
        <NewItem href='dashboard' description='Making up a basic Dashboard layout' />
        <NewItem href='about-layouts' description='NextJS Layout docs' />
        <NewItem href='interfaz' description='Antamina basic interface - POC' />
        <NewItem href='testing-grid' description='Playing with MUI Grid component' />
      </Container>

      <Typography variant='h2'>Simple Form</Typography>

      <CreateForm />

    </main>
  )
}
