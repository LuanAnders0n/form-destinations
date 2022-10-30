import { FormControl, TextField } from '@mui/material'
import React from 'react'
import { SelectCity } from './components/SelectCity'
import { SelectCountry } from './components/SelectCountry'
import { Container } from './styled'
import { GlobalStyle } from './styles/global'

function App() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Formulario enviado')
  }

  return (
    <Container>
      <GlobalStyle />

      <form
        className="order"
        action="javascript:void(0);"
        onSubmit={handleSubmit}
      >
        <FormControl
          sx={{
            '& .MuiTextField-root': { m: 3, width: '25ch' }
          }}
        >
          <div className="App">
            <h1>Dados pessoais</h1>
            <TextField
              id="name"
              label="Nome"
              variant="outlined"
              required
              type="text"
            />
            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              required
              type="email"
            />
            <TextField
              id="tel"
              label="Telefone"
              variant="outlined"
              required
              type="tel"
            />
            <TextField
              id="cpf"
              label="CPF"
              variant="outlined"
              required
              type="text"
            />
          </div>
        </FormControl>
        <input className="button_submit" type="submit" value="Enviar" />
        <div className="destinies">
          <h1>Destinos de interesse</h1>
          <SelectCountry />
          <SelectCity />
        </div>
      </form>
    </Container>
  )
}

export default App
