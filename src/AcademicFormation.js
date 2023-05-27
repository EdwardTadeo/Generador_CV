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

import "./AcademicFormation.css";

const AcademicFormation = ({ onChange }) => {
  const [formationType, setFormationType] = useState("");
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    onChange(formations);
  }, [formations, onChange]);

  const handleFormationTypeChange = (event) => {
    setFormationType(event.target.value);
  };

  const handleAddFormation = () => {
    const newFormation = {
      university: "",
      career: "",
      grade: "",
      condition: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setFormations([...formations, newFormation]);
  };

  const handleFormationChange = (index, field, value) => {
    const updatedFormations = [...formations];
    updatedFormations[index][field] = value;
    setFormations(updatedFormations);
  };
  return (
    <div className="academic-formation-container">
      <h1>Formación Académica</h1>
      <FormControl className="formation-type-select" fullWidth>
        <InputLabel id="formation-type-label">
          Tipo de Formación académica
        </InputLabel>
        <Select
          labelId="formation-type-label"
          value={formationType}
          label="Tipo de Formación académica"
          onChange={handleFormationTypeChange}
        >
          <MenuItem value="">Seleccionar</MenuItem>
          <MenuItem value="centro">Centro de Formación</MenuItem>
          <MenuItem value="universidad">Universitaria</MenuItem>
        </Select>
      </FormControl>

      {formations.map((formation, index) => (
        <div key={index} className="formation-form">
          <Grid container spacing={2}>
            {formationType === "universidad" ? (
              <>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nombre de la Universidad"
                    variant="outlined"
                    fullWidth
                    value={formation.university}
                    onChange={(event) =>
                      handleFormationChange(
                        index,
                        "university",
                        event.target.value
                      )
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nombre de la Carrera"
                    variant="outlined"
                    fullWidth
                    value={formation.career}
                    onChange={(event) =>
                      handleFormationChange(index, "career", event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Grado Académico"
                    variant="outlined"
                    fullWidth
                    value={formation.grade}
                    onChange={(event) =>
                      handleFormationChange(index, "grade", event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Condición"
                    variant="outlined"
                    fullWidth
                    value={formation.condition}
                    onChange={(event) =>
                      handleFormationChange(
                        index,
                        "condition",
                        event.target.value
                      )
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Fecha de inicio"
                    variant="outlined"
                    fullWidth
                    value={formation.startDate}
                    onChange={(event) => {
                      // Obtén el valor de la entrada
                      let value = event.target.value;
              
                      // Remueve todos los caracteres no numéricos
                      value = value.replace(/\D/g, "");
              
                      // Inserta el "/" después del segundo dígito
                      if (value.length >= 2) value = value.slice(0,2) + "/" + value.slice(2);
              
                      // Límita la longitud de la entrada a 7 (incluyendo el "/")
                      if (value.length > 7) value = value.slice(0,7);
              
                      handleFormationChange(index, "startDate", value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Fecha de Fin"
                    variant="outlined"
                    fullWidth
                    value={formation.endDate}
                    onChange={(event) => {
                      // Obtén el valor de la entrada
                      let value = event.target.value;
              
                      // Remueve todos los caracteres no numéricos
                      value = value.replace(/\D/g, "");
              
                      // Inserta el "/" después del segundo dígito
                      if (value.length >= 2) value = value.slice(0,2) + "/" + value.slice(2);
              
                      // Límita la longitud de la entrada a 7 (incluyendo el "/")
                      if (value.length > 7) value = value.slice(0,7);
              
                      handleFormationChange(index, "endDate", value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Descripción"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={formation.description}
                    onChange={(event) =>
                      handleFormationChange(
                        index,
                        "description",
                        event.target.value
                      )
                    }
                  />
                </Grid>
              </>
            ) : formationType === "centro" ? (
              <>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nombre del Centro de Formación"
                    variant="outlined"
                    fullWidth
                    value={formation.centerName}
                    onChange={(event) =>
                      handleFormationChange(
                        index,
                        "centerName",
                        event.target.value
                      )
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nombre del Curso/Diplomado/Taller"
                    variant="outlined"
                    fullWidth
                    value={formation.courseName}
                    onChange={(event) =>
                      handleFormationChange(
                        index,
                        "courseName",
                        event.target.value
                      )
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Fecha de inicio"
                    variant="outlined"
                    fullWidth
                    value={formation.startDate}
                    onChange={(event) =>
                      handleFormationChange(
                        index,
                        "startDate",
                        event.target.value
                      )
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Fecha de Fin"
                    variant="outlined"
                    fullWidth
                    value={formation.endDate}
                    onChange={(event) =>
                      handleFormationChange(
                        index,
                        "endDate",
                        event.target.value
                      )
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Descripción"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={formation.description}
                    onChange={(event) =>
                      handleFormationChange(
                        index,
                        "description",
                        event.target.value
                      )
                    }
                  />
                </Grid>
              </>
            ) : null}
          </Grid>
        </div>
      ))}

      {(formationType === "centro" || formationType === "universidad") && (
        <Button
          variant="contained"
          className="add-formation-button"
          onClick={handleAddFormation}
        >
          Añadir Formación académica
        </Button>
      )}
    </div>
  );
};

export default AcademicFormation;
