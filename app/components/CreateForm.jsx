'use client'

import { Button, MenuItem, Stack, TextField } from '@mui/material'

export default function CreateForm () {
  const genderOptions = ['Masculino', 'Femenino', 'Otro']
  const textFieldVariant = 'outlined'

  async function handleSubmit (e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    console.log(data)
  }

  return (
    <Stack component='form' spacing={3} onSubmit={handleSubmit}>
      <TextField name='firstName' label='Nombres' variant={textFieldVariant} />
      <TextField
        name='genderSelect'
        select
        label='Género'
        defaultValue=''
        variant={textFieldVariant}
      >
        {genderOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Button type='submit' variant='contained'>Enviar</Button>

    </Stack>
  )
}
