import React from "react";
import { Box, TextareaAutosize } from "@mui/material";
import "./ProfessionalSummary.css";


  const ProfessionalSummary = ({formData, handleChange}) => (
    <Box className="professional-summary-container">
      <TextareaAutosize
        rowsMin={4}
        placeholder="Escribe tu resumen profesional..."
        className="summary-textarea"
        name="summary"
        value={formData.summary}
        onChange={handleChange}
      />
    </Box>
  );

export default ProfessionalSummary;
