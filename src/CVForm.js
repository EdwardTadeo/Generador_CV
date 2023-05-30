import React from 'react';
import { Grid, TextField, Select, MenuItem, FormControl, InputLabel, OutlinedInput  } from '@mui/material';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';


countries.registerLocale(enLocale);

  const departments = [
    'Amazonas',
    'Ancash',
    'Apurimac',
    'Arequipa',
    'Ayacucho',
    'Cajamarca',
    'Callao',
    'Cusco',
    'Huancavelica',
    'Huanuco',
    'Ica',
    'Junin',
    'La Libertad',
    'Lambayeque',
    'Lima',
    'Loreto',
    'Madre de Dios',
    'Moquegua',
    'Pasco',
    'Piura',
    'Puno',
    'San Martin',
    'Tacna',
    'Tumbes',
    'Ucayali',
  ];

  const countryObj = countries.getNames('en', { select: 'official' });

  const countryOptions = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  const PersonalDetails = ({ formData, handleChange }) => (
    <Grid container spacing={2}>
      <Grid item sm={6}>
        <TextField fullWidth variant='standard' name="name" label="Nombres" value={formData.name} onChange={handleChange} />
      </Grid>
      <Grid item sm={6}>
        <TextField variant='standard' fullWidth name="lastname" label="Apellidos" value={formData.lastname} onChange={handleChange} />
      </Grid>
      <Grid item sm={6}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="dni-type-label">Tipo de documento</InputLabel>
          <Select
            labelId="dni-type-label"
            value={formData.dniType}
            onChange={handleChange}
            name='dniType'
            label="Tipo de documento"
            input={<OutlinedInput label="Tipo de documento" />}
          >
            <MenuItem value="DNI">DNI</MenuItem>
            <MenuItem value="Pasaporte">Pasaporte</MenuItem>
            <MenuItem value="Carne de Extranjería">Carne de Extranjería</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Número de documento"
          variant="standard"
          name="dni"
          fullWidth
          value={formData.dni}
          onChange={handleChange}
        />
      </Grid>
      <Grid item sm={6}>
        <TextField
          label='Celular'
          variant='standard'
          fullWidth
          name='cellphone'
          value={formData.cellphone}
          onChange={handleChange}
        />
      </Grid>
      <Grid item sm={6}>
        <TextField
          label='Correo'
          variant='standard'
          name='email'
          fullWidth
          value={formData.email}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="country-label">País</InputLabel>
            <Select
              labelId="country-label"
              value={formData.country}
              label="País"
              fullWidth
              name='country'
              onChange={handleChange}
            >
              {countryOptions.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="department-label">Departamento</InputLabel>
            <Select
              labelId="department-label"
              value={formData.department}
              label="Departamento"
              name='department'
              fullWidth
              onChange={handleChange}
            >
              {departments.map((dep) => (
                <MenuItem key={dep} value={dep}>
                  {dep}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Dirección"
            variant="standard"
            fullWidth
            value={formData.address}
            onChange={handleChange}
          />
        </Grid>
    </Grid>
  );

export default PersonalDetails;
