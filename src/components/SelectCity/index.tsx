import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { City } from '../../utils/types'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Theme, useTheme } from '@mui/material/styles'
import { Container } from './style'

export const SelectCity = () => {
  const theme = useTheme()
  const [cities, setCieties] = useState<City[]>([])
  const [citiesName, setCitiesName] = React.useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof citiesName>) => {
    const {
      target: { value }
    } = event
    setCitiesName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
  }

  function getStyles(name: string, citiesName: string[], theme: Theme) {
    return {
      fontWeight:
        citiesName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium
    }
  }

  useEffect(() => {
    api
      .get('/city')
      .then(response => {
        setCieties(response.data)
      })
      .catch(error => {})
  }, [])

  return (
    <div>
      <Container>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Cidades</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            onChange={handleChange}
            value={citiesName}
            input={<OutlinedInput label="cities" />}
          >
            {cities.map(cities => (
              <MenuItem
                id="paises"
                key={cities.id}
                value={cities.name_ptbr}
                style={getStyles(cities.name_ptbr, citiesName, theme)}
              >
                {cities.name_ptbr}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Container>
    </div>
  )
}
