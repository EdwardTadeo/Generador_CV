import React, { useEffect, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

import "./TalksAndSeminars.css";

const TalksAndSeminars = ({onChange}) => {
  const [eventList, setEventsList] = useState([]);

  useEffect(() =>{
    onChange(eventList);
  }, [eventList, onChange]);

  const handleAddEvent = () => {
    const newEvent = {
      eventName: "",
      universityOrLocation: "",
    };
    setEventsList([...eventList, newEvent]);
  };

  const handleEventChange = (index, field, value) => {
    const updatedEventsList = [...eventList];
    updatedEventsList[index][field] = value;
    setEventsList(updatedEventsList);
  };

  return (
    <div className="talks-and-seminars-container">
      <h1>Charlas y Seminarios</h1>
      {eventList.map((event, index) => (
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
