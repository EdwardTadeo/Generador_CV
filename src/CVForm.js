import React, { useState } from 'react';
import { Button, Grid, TextField, Select, MenuItem, FormControl, InputLabel, OutlinedInput  } from '@mui/material';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';

import './CVForm.css';

countries.registerLocale(enLocale);

function CVForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dniType, setDniType] = useState('DNI');
  const [dni, setDni] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [address, setAddress] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      lastName,
      dniType,
      dni,
      cellphone,
      email,
      department,
      address,
    };
    onSubmit(formData);
  };

  const handleResetForm = () => {
    setName('');
    setLastName('');
    setDni('');
    setCellphone('');
    setEmail('');
    setDepartment('');
    setAddress('');
  };

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

  return (
    <form onSubmit={handleFormSubmit} onReset={handleResetForm} className="cv-form-container">
      <h1>Ingresa tu información personal</h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Apellido"
            variant="outlined"
            fullWidth
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="dni-type-label">Tipo de documento</InputLabel>
            <Select
              labelId="dni-type-label"
              value={dniType}
              onChange={(event) => setDniType(event.target.value)}
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
            variant="outlined"
            fullWidth
            value={dni}
            onChange={(event) => setDni(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Celular"
            variant="outlined"
            fullWidth
            value={cellphone}
            onChange={(event) => setCellphone(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Correo"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="country-label">País</InputLabel>
            <Select
              labelId="country-label"
              value={department}
              label="País"
              onChange={(event) => setDepartment(event.target.value)}
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
              value={department}
              label="Departamento"
              onChange={(event) => setDepartment(event.target.value)}
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
            variant="outlined"
            fullWidth
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Siguiente
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default CVForm;