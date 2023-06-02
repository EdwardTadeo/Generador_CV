import React, { useState } from 'react';
import { Grid, Button, Popover, Typography } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import CVsinexperiencia from '../src/PDF-CV/cv-sin-exp.pdf'
import CVcomexperiencia from '../src/PDF-CV/cv-con-exp.pdf'
import CVjunior from '../src/PDF-CV/cv-junior.pdf'
import CVsenior from '../src/PDF-CV/cv-senior.pdf'
import { useNavigate } from 'react-router-dom'

import PDF_SIN from '../src/PDF-CV/cv-sin-exp.png';
import PDF_CON from '../src/PDF-CV/cv-con-exp.png';
import PDF_JUNIOR from '../src/PDF-CV/JUNIOR.png';
import PDF_SENIOR from '../src/PDF-CV/Especialista.png';
import './style.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const MyPDFs = () => {
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [numPages, setNumPages] = useState(null);

  const [anchorEl, setAnchorEl] = React.useState({
    popover1: null,
    popover2: null,
    popover3: null,
    popover4: null,
  });

  const navigate = useNavigate();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handlePDFClick = (pdf, pdfNumber) => {
    setSelectedPDF({number: pdfNumber, file: pdf});
  }

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleSelectTemplate = () => {
    if (selectedPDF) {
      // Guarda la plantilla seleccionada en el estado global (localStorage en este ejemplo)
      localStorage.setItem('selectedTemplate', selectedPDF.number);
      // Redirige a Generate.js
      navigate('/generate',  { state: { value: selectedPDF.number } });
    } else {
      alert('Por favor, selecciona una plantilla antes de proceder.');
    }
  }

  return (
    <Grid container spacing={2} style={{ height: '100vh'}}>
      <Grid item xs={12} md={6} style={{ overflowY: 'auto', maxHeight: '100vh' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid container direction="column" alignItems="center">
              <img src={PDF_SIN} style={{width: '150px', border: '1px solid black', cursor: 'pointer'}} alt="PDF 1" onClick={() => handlePDFClick(CVsinexperiencia)} />
              <Button variant='outlined' onClick={() => handlePDFClick(CVsinexperiencia,1)} style={{color: '#DF321A', borderColor: '#DF321A', marginTop: '10px'}}>Ver PDF 1</Button>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container direction="column" alignItems="center">
              <img src={PDF_CON} style={{width: '150px', cursor:'pointer' , border: '1px solid black'}} alt="PDF 2" onClick={() => handlePDFClick(CVcomexperiencia)} />
              <Button variant='outlined' onClick={() => handlePDFClick(CVcomexperiencia,2)} style={{color: '#DF321A', borderColor: '#DF321A', marginTop: '10px'}}>Ver PDF 2</Button>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container direction="column" alignItems="center">
              <img src={PDF_JUNIOR} style={{width: '150px', border: '1px solid black', cursor: 'pointer'}} alt="PDF 3" onClick={() => handlePDFClick(CVjunior)} />
              <Button variant='outlined' onClick={() => handlePDFClick(CVjunior,3)} style={{color: '#DF321A', borderColor: '#DF321A', marginTop: '10px'}}>Ver PDF 3</Button>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container direction="column" alignItems="center">
              <img src={PDF_SENIOR} style={{width: '150px', border: '1px solid black', cursor: 'pointer'}} alt="PDF 4" onClick={() => handlePDFClick(CVsenior)} />
              <Button variant='outlined' onClick={() => handlePDFClick(CVsenior,4)} style={{color: '#DF321A', borderColor: '#DF321A', marginTop: '10px'}}>Ver PDF 4</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} style={{ overflowY: "auto" }}>
        {selectedPDF && (
          <Document
            width={200}
            file={selectedPDF.file}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={1} width={350} />
          </Document>
        )}
        <Button variant='outlined' style={{color: '#DF321A', borderColor: '#DF321A', marginTop: '10px'}} onClick={handleSelectTemplate}>Seleccionar Plantilla</Button>
      </Grid>
    </Grid>
  );
};

export default MyPDFs;
