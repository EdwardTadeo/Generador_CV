import React, { useState } from 'react';
import { Button, Grid, TextField, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

import './WorkExperience.css';

const WorkExperience = () => {
  const [experienceType, setExperienceType] = useState('');
  const [experiences, setExperiences] = useState([]);

  const handleExperienceTypeChange = (event) => {
    setExperienceType(event.target.value);
  };

  const handleAddExperience = () => {
    const newExperience = {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      objective: '',
      achievements: '',
    };
    setExperiences([...experiences, newExperience]);
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);
  };

  return (
    <div className="work-experience-container">
      <Typography variant="h5" className="work-experience-title">
        Experiencia Laboral
      </Typography>
      <FormControl className="experience-type-select">
        <InputLabel id="experience-type-label">Tipo de experiencia</InputLabel>
        <Select
          labelId="experience-type-label"
          value={experienceType}
          onChange={handleExperienceTypeChange}
        >
          <MenuItem value="">Seleccionar</MenuItem>
          <MenuItem value="sin-experiencia">Sin experiencia</MenuItem>
          <MenuItem value="con-experiencia">Con experiencia</MenuItem>
        </Select>
      </FormControl>
      {experienceType === 'con-experiencia' && (
        <div className="experience-forms-container">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-form">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nombre de la empresa"
                    variant="outlined"
                    fullWidth
                    value={experience.company}
                    onChange={(event) =>
                      handleExperienceChange(index, 'company', event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Cargo"
                    variant="outlined"
                    fullWidth
                    value={experience.position}
                    onChange={(event) =>
                      handleExperienceChange(index, 'position', event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Mes y año de inicio"
                    variant="outlined"
                    fullWidth
                    value={experience.startDate}
                    onChange={(event) =>
                      handleExperienceChange(index, 'startDate', event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Mes y año de fin"
                    variant="outlined"
                    fullWidth
                    value={experience.endDate}
                    onChange={(event) =>
                      handleExperienceChange(index, 'endDate', event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Objetivo del puesto"
                    variant="outlined"
                    fullWidth
                    value={experience.objective}
                    onChange={(event) =>
                      handleExperienceChange(index, 'objective', event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Logros"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={experience.achievements}
                    onChange={(event) =>
                      handleExperienceChange(index, 'achievements', event.target.value)
                    }
                  />
                </Grid>
              </Grid>
            </div>
          ))}
          <Button
            variant="contained"
            className="add-experience-button"
            onClick={handleAddExperience}
          >
            Añadir experiencia laboral
          </Button>
        </div>
      )}
    </div>
  );
};

export default WorkExperience;
