import React, { useState } from 'react';
import { Button, Grid, FormControl, InputLabel } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./PhotoUploader.css";

const PhotoUploader = ({ onUpload }) => {
  const [photoPreview, setPhotoPreview] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Pasamos la cadena base64 en lugar del ArrayBuffer.
        onUpload(reader.result);
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Accordion style={{marginBottom:'10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <InputLabel>Subir Foto</InputLabel>
        </AccordionSummary>
        <AccordionDetails>
          <Grid className="photo-uploader">
            <Grid item xs={12}>
              <FormControl fullWidth>
                <input
                  accept="image/*"
                  id="upload-photo"
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handlePhotoChange}
                />
                <label htmlFor="upload-photo">
                  <Button variant="contained" component="span">
                    {photoPreview ? 'Elegir otra foto' : 'Cargar foto'}
                  </Button>
                </label>
                {photoPreview && (
                  <img src={photoPreview} alt="Preview" className="photo-preview" />
                )}
              </FormControl>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PhotoUploader;
