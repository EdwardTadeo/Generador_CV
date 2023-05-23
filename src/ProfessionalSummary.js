import React, { useState } from 'react';
import { Box, Typography, TextareaAutosize } from '@mui/material';
import './ProfessionalSummary.css';

function ProfessionalSummary({ onChange }) {
  const [summary, setSummary] = useState('');

  const handleSummaryChange = (event) => {
    const value = event.target.value;
    setSummary(value);
    onChange(value);
  };

  return (
    <Box className="professional-summary-container">
      <h1>
        Resumen Profesional
      </h1>
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
