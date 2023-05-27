import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import "./WorkExperience.css";

const WorkExperience = ({ onChange, onExperienceChange }) => {
  const [experienceType, setExperienceType] = useState("");
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    onChange(experiences);
  }, [experiences, onChange]);


  const handleAddExperience = () => {
    const newExperience = {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      objective: "",
      achievements: "",
    };
    setExperiences([...experiences, newExperience]);
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);
  };
  const handleExperienceTypeChange = (event) => {
    const value = event.target.value;
    setExperienceType(value);
  
    if (value === "sin-experiencia") {
      setExperiences([]);
      onExperienceChange(false, '');
    } else if (value === "con-experiencia") {
      onExperienceChange(true, '');
    } else {
      // si es junior o senior
      onExperienceChange(true, value);
    }
  };

  return (
    <div className="work-experience-container">
      <h1>Experiencia Laboral</h1>
      <FormControl className="experience-type-select" fullWidth>
        <InputLabel id="experience-type-label">Tipo de experiencia</InputLabel>
        <Select
          labelId="experience-type-label"
          value={experienceType}
          label="Tipo de experiencia"
          onChange={handleExperienceTypeChange}
        >
          <MenuItem value="">Seleccionar</MenuItem>
          <MenuItem value="sin-experiencia">Sin experiencia</MenuItem>
          <MenuItem value="con-experiencia">Con experiencia</MenuItem>
          <MenuItem value="junior">Asistente/Junior</MenuItem>
          <MenuItem value="senior">Senior</MenuItem>
        </Select>
      </FormControl>
      {experienceType === "con-experiencia" && (
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
                      handleExperienceChange(
                        index,
                        "company",
                        event.target.value
                      )
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
                      handleExperienceChange(
                        index,
                        "position",
                        event.target.value
                      )
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
                      handleExperienceChange(
                        index,
                        "startDate",
                        event.target.value
                      )
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
                      handleExperienceChange(
                        index,
                        "endDate",
                        event.target.value
                      )
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
                      handleExperienceChange(
                        index,
                        "objective",
                        event.target.value
                      )
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
                      handleExperienceChange(
                        index,
                        "achievements",
                        event.target.value
                      )
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
