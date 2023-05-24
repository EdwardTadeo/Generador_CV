import React, { useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import "./Knowledge.css";

const Knowledge = () => {
  const [knowledgeList, setKnowledgeList] = useState([]);

  const handleAddKnowledge = () => {
    const newKnowledge = {
      category: "",
      name: "",
      level: "",
    };
    setKnowledgeList([...knowledgeList, newKnowledge]);
  };

  const handleKnowledgeChange = (index, field, value) => {
    const updatedKnowledgeList = [...knowledgeList];
    updatedKnowledgeList[index][field] = value;
    setKnowledgeList(updatedKnowledgeList);
  };

  return (
    <div className="knowledge-container">
      <h1>Idiomas/Tecnologías/Programas</h1>
      {knowledgeList.map((knowledge, index) => (
        <div key={index} className="knowledge-form">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id={`category-label-${index}`}>
                  Categoría
                </InputLabel>
                <Select
                  labelId={`category-label-${index}`}
                  value={knowledge.category}
                  onChange={(event) =>
                    handleKnowledgeChange(index, "category", event.target.value)
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
                value={knowledge.name}
                onChange={(event) =>
                  handleKnowledgeChange(index, "name", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id={`level-label-${index}`}>Nivel</InputLabel>
                <Select
                  labelId={`level-label-${index}`}
                  value={knowledge.level}
                  onChange={(event) =>
                    handleKnowledgeChange(index, "level", event.target.value)
                  }
                >
                  <MenuItem value="basico">Básico</MenuItem>
                  <MenuItem value="intermedio">Intermedio</MenuItem>
                  <MenuItem value="avanzado">Avanzado</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </div>
      ))}
      <Button variant="contained" onClick={handleAddKnowledge}>
        Añadir conocimiento
      </Button>
    </div>
  );
};

export default Knowledge;
