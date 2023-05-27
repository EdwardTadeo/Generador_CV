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
                onChange={(event) =>
                  handleActivityChange(index, "startDate", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Fecha de Fin"
                variant="outlined"
                fullWidth
                value={activity.endDate}
                onChange={(event) =>
                  handleActivityChange(index, "endDate", event.target.value)
                }
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
