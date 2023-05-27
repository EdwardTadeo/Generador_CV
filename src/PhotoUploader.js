import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Typography } from '@mui/material';
import './PhotoUploader.css';

function PhotoUploader({ onUpload }) {
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
    <div className="photo-uploader">
      <h1>
        Elige una fotografía tuya
      </h1>
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
    </div>
  );
}

export default PhotoUploader;
