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
        <div className="App">
          <div className="form">
            <h1>Dados pessoais</h1>
            <input type="text" id="name" placeholder="Nome" required />
            <input
              type="email"
              id="email"
              pattern=".+@globex\.com"
              placeholder="E-mail"
              required
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Telefone"
              maxLength={15}
              required
            />
            <input type="text" id="cpf" placeholder="CPF" />
          </div>
        </div>
        <input className="button_submit" type="submit" value="Enviar" />
        <div className="api">
          <div>
            <h1>Destinos de interesse</h1>
            <div className="Components">
              <SelectCountry />
              <SelectCity />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default App
