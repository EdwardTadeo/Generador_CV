import React from 'react';
import { Button, Grid, TextField, InputLabel, Box, Typography } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const WorkExperience = ({ workExperience, handleAddWorkExperience, handleWorkExperienceChange }) => {
  return (
    <div>
      {workExperience.map((work, index) => (
        <Accordion key={index} style={{marginBottom:'10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box>
            <Typography variant="body1">
              {work.company ? `${work.company} - ${work.jobTitle}` : '(sin especificar)'}
            </Typography>
            <Typography variant="subtitle2">
              {work.startDate ? `${work.startDate} - ${work.endDate}` : ''}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={2} className='experience-form'>
          <Grid item xs={12} sm={6}>
            <TextField
                fullWidth
                variant="outlined"
                name="company"
                label="Empresa"
                value={work.company}
                onChange={(event) => handleWorkExperienceChange(event, index)}
            />
          </Grid> 
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              name="jobTitle"
              label="Puesto de trabajo"
              value={work.jobTitle}
              onChange={(event) => handleWorkExperienceChange(event, index)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              name="startDate"
              label="Mes y año de inicio"
              value={work.startDate}
              placeholder='Ej: 01/2011'
              onChange= {(event) => {
                let value = event.target.value;
              
                // Remueve todos los caracteres no numéricos
                value = value.replace(/\D/g, "");
              
                // Inserta el "/" después del segundo dígito
                if (value.length >= 2) value = value.slice(0,2) + "/" + value.slice(2);
              
                // Límita la longitud de la entrada a 7 (incluyendo el "/")
                if (value.length > 7) value = value.slice(0,7);
                
                handleWorkExperienceChange({
                  target: {
                    name: "startDate",
                    value,
                  },
                }, index);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              name="endDate"
              label="Mes y año de fin"
              value={work.endDate}
              placeholder='Ej: 01/2011'
              onChange= {(event) => {
                let value = event.target.value;
              
                // Remueve todos los caracteres no numéricos
                value = value.replace(/\D/g, "");
              
                // Inserta el "/" después del segundo dígito
                if (value.length >= 2) value = value.slice(0,2) + "/" + value.slice(2);
              
                // Límita la longitud de la entrada a 7 (incluyendo el "/")
                if (value.length > 7) value = value.slice(0,7);
                
                handleWorkExperienceChange({
                  target: {
                    name: "endDate",
                    value,
                  },
                }, index);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label = "Objetivos del Puesto"
              fullWidth
              variant="outlined"
              name="objetive"
              value={work.objetive}
              onChange={(event) => handleWorkExperienceChange(event, index)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label = "Logros"
              fullWidth
              variant="outlined"
              name="achievements"
              value={work.achievements}
              onChange={(event) => handleWorkExperienceChange(event, index)}
            />
          </Grid>
        </Grid>
        </AccordionDetails>
      </Accordion>
      ))}
      <Button variant="outlined" onClick={handleAddWorkExperience} style={{color: '#DF321A', borderColor: '#DF321A'}}>
        Agregar empleo
      </Button>
    </div>
  );
};

export default WorkExperience;
