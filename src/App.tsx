import { FormControl, TextField } from '@mui/material'
import React from 'react'
import { SelectCity } from './components/SelectCity'
import { SelectCountry } from './components/SelectCountry'
import { Container } from './styled'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <Container>
      <GlobalStyle />

      <div className="order">
        <form action="/action_page.php" method="get">
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
        </form>
        <input className="button_submit" type="submit" value="Enviar" />
        <div className="api">
          <div className="Components">
            <form action="">
              <h1>Destinos de interesse</h1>
              <SelectCountry />
              <SelectCity />
            </form>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default App
