import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Country } from '../../utils/types';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';
import { Container } from './style';

export const SelectCountry = () => {
  const theme = useTheme();

  const [countries, setCountries] = useState<Country[]>([]);
  const [countriesName, setcountriesName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof countriesName>) => {
    const {
      target: { value }
    } = event;
    setcountriesName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  function getStyles(name: string, countriesName: string[], theme: Theme) {
    return {
      fontWeight:
        countriesName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium
    };
  }

  useEffect(() => {
    api
      .get('/country')
      .then(reponse => {
        setCountries(reponse.data);
      })
      .catch(error => {});
  }, []);

  return (
    <div>
      <Container>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Paises</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            onChange={handleChange}
            value={countriesName}
            input={<OutlinedInput label="countries" />}
          >
            {countries.map(countries => (
              <MenuItem
                id="paises"
                key={countries.code}
                value={countries.name_ptbr}
                style={getStyles(countries.name_ptbr, countriesName, theme)}
              >
                {countries.name_ptbr}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Container>
    </div>
  );
};
