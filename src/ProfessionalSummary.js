import React, { useState, useEffect } from "react";
import { Box, TextareaAutosize } from "@mui/material";
import "./ProfessionalSummary.css";

function ProfessionalSummary({ onChange }) {
  const [summary, setSummary] = useState("");

  useEffect(() => {
    onChange(summary);
  }, [summary, onChange]);

  const handleSummaryChange = (event) => {
    const value = event.target.value;
    setSummary(value);
  };

  return (
    <Box className="professional-summary-container">
      <h1>Resumen Profesional</h1>
      <TextareaAutosize
        rowsMin={4}
        placeholder="Escribe tu resumen profesional..."
        className="summary-textarea"
        value={summary}
        onChange={handleSummaryChange}
      />
    </Box>
  );
}

export default ProfessionalSummary;
