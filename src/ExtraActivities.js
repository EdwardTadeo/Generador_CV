import React from 'react';
import { Button, Grid, TextField, InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./ExtraActivities.css";

const ExtraActivities = ({extraActivities, handleAddExtraActivities, handleExtraActivitiesChange}) => {
  return (
    <div>
      {extraActivities.map((extraActivities, index) => (
          <Accordion key={index} style={{marginBottom:'10px'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <InputLabel>{extraActivities.organizationName ? `${extraActivities.organizationName} - ${extraActivities.position}` : '(sin especificar)'}</InputLabel>
          </AccordionSummary>
          <AccordionDetails>
          <Grid container spacing={2} className='activity-form'>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nombre de la Organización"
                variant="outlined"
                fullWidth
                name='organizationName'
                value={extraActivities.organizationName}
                onChange={(event) =>
                  handleExtraActivitiesChange(
                    event,index
                  )
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Descripción de la Organización"
                variant="outlined"
                fullWidth
                name='organizationDescription'
                value={extraActivities.organizationDescription}
                onChange={(event) =>
                  handleExtraActivitiesChange(
                    event, index
                  )
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Fecha de Inicio"
                variant="outlined"
                fullWidth
                name='startDate'
                value={extraActivities.startDate}
                placeholder="Ej: 01/2001"
                onChange={(event) => {
                  // Obtén el valor de la entrada
                  let value = event.target.value;
          
                  // Remueve todos los caracteres no numéricos
                  value = value.replace(/\D/g, "");
          
                  // Inserta el "/" después del segundo dígito
                  if (value.length >= 2) value = value.slice(0,2) + "/" + value.slice(2);
          
                  // Límita la longitud de la entrada a 7 (incluyendo el "/")
                  if (value.length > 7) value = value.slice(0,7);
          
                  handleExtraActivitiesChange({
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
                label="Fecha de Fin"
                variant="outlined"
                fullWidth
                name='endDate'
                value={extraActivities.endDate}
                placeholder="Ej: 01/2001"
                onChange={(event) => {
                  // Obtén el valor de la entrada
                  let value = event.target.value;
          
                  // Remueve todos los caracteres no numéricos
                  value = value.replace(/\D/g, "");
          
                  // Inserta el "/" después del segundo dígito
                  if (value.length >= 2) value = value.slice(0,2) + "/" + value.slice(2);
          
                  // Límita la longitud de la entrada a 7 (incluyendo el "/")
                  if (value.length > 7) value = value.slice(0,7);
          
                  handleExtraActivitiesChange({
                    target: {
                      name: "endDate",
                      value,
                    },
                  }, index);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Cargo"
                variant="outlined"
                fullWidth
                name='position'
                value={extraActivities.position}
                onChange={(event) =>
                  handleExtraActivitiesChange(event, index)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Funciones"
                variant="outlined"
                fullWidth
                name='responsibilities'
                value={extraActivities.responsibilities}
                onChange={(event) =>
                  handleExtraActivitiesChange(
                    event, index
                  )
                }
              />
            </Grid>
          </Grid>
          </AccordionDetails>
          </Accordion>
      ))}
        <Button variant="contained" onClick={handleAddExtraActivities}>
          Añadir actividad
        </Button>
    </div>
  );
};

export default ExtraActivities;
