import React from 'react';
import { Button, Grid, TextField, InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Knowledge = ({ knowledge, handleAddKnowledge, handleKnowledgeChange }) => {
  return (
    <div>
      {knowledge.map((knowledge, index) => (
        <Accordion key={index} style={{marginBottom:'10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <InputLabel>{knowledge.category ? `${knowledge.category} - ${knowledge.name} (${knowledge.level})` : '(sin especificar)'}</InputLabel>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={2} className='experience-form'>
        <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id={`category-label-${index}`}>
                  Categoría
                </InputLabel>
                <Select
                  labelId={`category-label-${index}`}
                  value={knowledge.category}
                  name='category'
                  label="Categoría"
                  onChange={(event) =>
                    handleKnowledgeChange(event, index)
                  }
                >
                  <MenuItem value="idioma">Idioma</MenuItem>
                  <MenuItem value="tecnologia">Tecnología</MenuItem>
                  <MenuItem value="programa">Programa</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Nombre"
                variant="outlined"
                fullWidth
                name='name'
                value={knowledge.name}
                onChange={(event) =>
                  handleKnowledgeChange(event, index)
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id={`level-label-${index}`}>Nivel</InputLabel>
                <Select
                  labelId={`level-label-${index}`}
                  value={knowledge.level}
                  label= "Nivel"
                  name='level'
                  onChange={(event) =>
                    handleKnowledgeChange(event, index)
                  }
                >
                  <MenuItem value="basico">Básico</MenuItem>
                  <MenuItem value="intermedio">Intermedio</MenuItem>
                  <MenuItem value="avanzado">Avanzado</MenuItem>
                </Select>
              </FormControl>
            </Grid>
        </Grid>
        </AccordionDetails>
      </Accordion>
      ))}
      <Button variant="outlined" onClick={handleAddKnowledge} style={{color: '#DF321A', borderColor: '#DF321A'}}>
        Agregar Estudios
      </Button>
    </div>
  );
};

export default Knowledge;
