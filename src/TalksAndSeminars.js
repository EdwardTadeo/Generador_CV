import React from 'react';
import { Button, Grid, TextField, InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./TalksAndSeminars.css";

const TalksAndSeminars = ({seminars, handleAddSeminars, handleSeminarsChange}) => {
  return (
    <div>
      {seminars.map((seminars, index) => (
          <Accordion key={index} style={{marginBottom:'10px'}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <InputLabel>{seminars.eventName ? `${seminars.eventName} - ${seminars.universityOrLocation}` : '(sin especificar)'}</InputLabel>
            </AccordionSummary>
          <AccordionDetails>
          <Grid container spacing={2} className="talks-and-seminars-container">
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nombre del Evento"
                variant="outlined"
                fullWidth
                name="eventName"
                value={seminars.eventName}
                onChange={(event) =>
                  handleSeminarsChange(event, index)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Universidad/Lugar"
                variant="outlined"
                fullWidth
                name="universityOrLocation"
                value={seminars.universityOrLocation}
                onChange={(event) =>
                  handleSeminarsChange(
                    event, index
                  )
                }
              />
            </Grid>
          </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
      <Button variant="contained" onClick={handleAddSeminars}>
        Añadir evento
      </Button>
    </div>
  );
};

export default TalksAndSeminars;
