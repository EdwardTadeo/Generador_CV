import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

function CVForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    education: '',
    workExperience: '',
    skills: '',
    // ... añade más campos según tus necesidades
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      
    </Box>
  );
}

export default CVForm;
