import React, { useState, useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";

import "./ExtraActivities.css";

const ExtraActivities = ({onChange}) => {
  const [activitiesList, setActivitiesList] = useState([]);

  useEffect(() => {
    onChange(activitiesList);
  }, [activitiesList, onChange]);

  const handleAddActivity = () => {
    const newActivity = {
      organizationName: "",
      organizationDescription: "",
      startDate: "",
      endDate: "",
      position: "",
      responsibilities: "",
    };
    setActivitiesList([...activitiesList, newActivity]);
  };

  const handleActivityChange = (index, field, value) => {
    const updatedActivitiesList = [...activitiesList];
    updatedActivitiesList[index][field] = value;
    setActivitiesList(updatedActivitiesList);
  };

  return (
    <div className="extra-activities-container">
      <h1>Actividades Extras o Voluntariado</h1>
      {activitiesList.map((activity, index) => (
        <div key={index} className="activity-form">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nombre de la Organización"
                variant="outlined"
                fullWidth
                value={activity.organizationName}
                onChange={(event) =>
                  handleActivityChange(
                    index,
                    "organizationName",
                    event.target.value
                  )
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Descripción de la Organización"
                variant="outlined"
                fullWidth
                value={activity.organizationDescription}
                onChange={(event) =>
                  handleActivityChange(
                    index,
                    "organizationDescription",
                    event.target.value
                  )
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Fecha de Inicio"
                variant="outlined"
                fullWidth
                value={activity.startDate}
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
          
                  handleActivityChange(index, "startDate", value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Fecha de Fin"
                variant="outlined"
                fullWidth
                value={activity.endDate}
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
          
                  handleActivityChange(index, "endDate", value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Cargo"
                variant="outlined"
                fullWidth
                value={activity.position}
                onChange={(event) =>
                  handleActivityChange(index, "position", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Funciones"
                variant="outlined"
                fullWidth
                value={activity.responsibilities}
                onChange={(event) =>
                  handleActivityChange(
                    index,
                    "responsibilities",
                    event.target.value
                  )
                }
              />
            </Grid>
          </Grid>
        </div>
      ))}
      <Button variant="contained" onClick={handleAddActivity}>
        Añadir actividad
      </Button>
    </div>
  );
};

export default ExtraActivities;
