import React from "react";
import { Button, Grid, TextField, InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./Achievements.css";

const Achievements = ({achievement, handleAddAchievement, handleAchievementChange}) => {
  return (
    <div>
      {achievement.map((achievement, index) => (
        <Accordion key={index} style={{marginBottom:'10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <InputLabel>Logro</InputLabel>
        </AccordionSummary>
        <AccordionDetails>
          <Grid className="achievement-form">
            <Grid item xs={12}>
            <TextField
              label="Descripción del logro"
              variant="outlined"
              fullWidth
              name='description'
              value={achievement.description}
              onChange={(event) =>
                handleAchievementChange(event, index)
              }
            />
            </Grid>
          </Grid>
        </AccordionDetails>
        </Accordion>
      ))}
      <Button variant="outlined" onClick={handleAddAchievement} style={{color: '#DF321A', borderColor: '#DF321A'}}>
        Añadir logro
      </Button>
    </div>
  );
};

export default Achievements;
