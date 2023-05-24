import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

import "./TalksAndSeminars.css";

const TalksAndSeminars = () => {
  const [events, setEvents] = useState([]);

  const handleAddEvent = () => {
    const newEvent = {
      eventName: "",
      universityOrLocation: "",
    };
    setEvents([...events, newEvent]);
  };

  const handleEventChange = (index, field, value) => {
    const updatedEvents = [...events];
    updatedEvents[index][field] = value;
    setEvents(updatedEvents);
  };

  return (
    <div className="talks-and-seminars-container">
      <h2>Charlas y Seminarios</h2>
      {events.map((event, index) => (
        <div key={index} className="event-form">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nombre del Evento"
                variant="outlined"
                fullWidth
                value={event.eventName}
                onChange={(event) =>
                  handleEventChange(index, "eventName", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Universidad/Lugar"
                variant="outlined"
                fullWidth
                value={event.universityOrLocation}
                onChange={(event) =>
                  handleEventChange(
                    index,
                    "universityOrLocation",
                    event.target.value
                  )
                }
              />
            </Grid>
          </Grid>
        </div>
      ))}
      <Button variant="contained" onClick={handleAddEvent}>
        Añadir evento
      </Button>
    </div>
  );
};

export default TalksAndSeminars;
