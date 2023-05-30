import React from 'react';
import { Button, Grid, TextField, InputLabel, Box, Typography } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Education = ({ education, handleAddEducation, handleEducationChange }) => {
  return (
    <div>
      {education.map((edu, index) => (
        <Accordion key={index} style={{marginBottom:'10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box>
            <Typography variant="body1">
              {edu.university ? `${edu.university} - ${edu.career}` : '(sin especificar)'}
            </Typography>
            <Typography variant="subtitle2">
              {edu.startDate ? `${edu.startDate} - ${edu.endDate}` : ''}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={2} className='experience-form'>
          <Grid item xs={12} sm={6}>
            <TextField
                fullWidth
                variant="outlined"
                name="university"
                label="Universidad"
                value={edu.university}
                onChange={(event) => handleEducationChange(event, index)}
            />
          </Grid> 
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              name="career"
              label="Nombre de la Carrera"
              value={edu.career}
              onChange={(event) => handleEducationChange(event, index)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              name="grade"
              label="Grado Académico"
              value={edu.grade}
              onChange={(event) => handleEducationChange(event, index)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              name="condition"
              label="Condicion Academica"
              value={edu.condition}
              onChange={(event) => handleEducationChange(event, index)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              name="startDate"
              label="Mes y año de inicio"
              value={edu.startDate}
              placeholder='Ej: 01/2011'
              onChange= {(event) => {
                let value = event.target.value;
              
                // Remueve todos los caracteres no numéricos
                value = value.replace(/\D/g, "");
              
                // Inserta el "/" después del segundo dígito
                if (value.length >= 2) value = value.slice(0,2) + "/" + value.slice(2);
              
                // Límita la longitud de la entrada a 7 (incluyendo el "/")
                if (value.length > 7) value = value.slice(0,7);
                
                handleEducationChange({
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
              value={edu.endDate}
              placeholder='Ej: 01/2011'
              onChange= {(event) => {
                let value = event.target.value;
              
                // Remueve todos los caracteres no numéricos
                value = value.replace(/\D/g, "");
              
                // Inserta el "/" después del segundo dígito
                if (value.length >= 2) value = value.slice(0,2) + "/" + value.slice(2);
              
                // Límita la longitud de la entrada a 7 (incluyendo el "/")
                if (value.length > 7) value = value.slice(0,7);
                
                handleEducationChange({
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
              label = "Descripción"
              fullWidth
              variant="outlined"
              name="description"
              value={edu.description}
              onChange={(event) => handleEducationChange(event, index)}
            />
          </Grid>
        </Grid>
        </AccordionDetails>
      </Accordion>
      ))}
      <Button variant="outlined" onClick={handleAddEducation} style={{color: '#DF321A', borderColor: '#DF321A'}}>
        Agregar Estudios
      </Button>
    </div>
  );
};

export default Education;
