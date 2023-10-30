import { Button, MenuItem, Stack, TextField, Typography } from "@mui/material"
import CreateForm from "./components/CreateForm"

export default function Home() {
  async function handleSubmit(e) {
    e.preventDefault()
    // { firstName, genderSelect } = 
    console.log(e.target)
  }

  return (
    <main>
      <Typography variant="h1">Home Page</Typography>
      <Typography variant="h2">Simple Form</Typography>

      <CreateForm />

    </main>
  )
}
