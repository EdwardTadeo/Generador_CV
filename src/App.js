import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';

import PhotoUploader from './PhotoUploader';
import CVForm from './CVForm';
import ProfessionalSummary from './ProfessionalSummary';
import WorkExperience from './WorkExperience';
import logo from './logo_laborum.png';

import './App.css';

function App() {
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState(null);
  const [summary, setSummary] = useState('');

  const handlePhotoUpload = (file) => {
    setPhoto(file);
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const handleSummaryChange = (value) => {
    setSummary(value);
  };

  return (
    <Container>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <h1 className="title">CREA TU CV DESDE CERO</h1>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <PhotoUploader onUpload={handlePhotoUpload} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CVForm onSubmit={handleFormSubmit} />  
        </Grid>
        <Grid item xs={12}>
          <ProfessionalSummary onChange={handleSummaryChange} />
        </Grid>
        <Grid item xs={12}>
          <WorkExperience />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
