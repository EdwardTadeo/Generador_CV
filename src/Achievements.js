import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";

import "./Achievements.css";

const Achievements = ({onChange}) => {
  const [achievementsList, setAchievementsList] = useState([]);

  useEffect(() => {
    onChange(achievementsList);
  }, [achievementsList, onChange])

  const handleAddAchievement = () => {
    const newAchievement = {
      description: "",
    };
    setAchievementsList([...achievementsList, newAchievement])
  };

  const handleAchievementChange = (index, field, value) => {
    const updatedAchievementsList = [...achievementsList];
    updatedAchievementsList[index][field] = value;
    setAchievementsList(updatedAchievementsList);
  };

  return (
    <div className="achievements-container">
      <h1>Logros Académicos y Personales</h1>
      {achievementsList.map((achievement, index) => (
        <div key={index} className="achievement-form">
          <TextField
            label="Descripción del logro"
            variant="outlined"
            fullWidth
            value={achievement.description}
            onChange={(event) =>
              handleAchievementChange(index, "description" ,event.target.value)
            }
          />
        </div>
      ))}
      <Button variant="contained" onClick={handleAddAchievement}>
        Añadir logro
      </Button>
    </div>
  );
};

export default Achievements;
