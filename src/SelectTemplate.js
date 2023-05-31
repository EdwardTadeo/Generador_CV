import React, { useState } from "react";
import { Grid, Button, Popover, Typography } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import CVsinexperiencia from "../src/PDF-CV/PRACTICANTE SIN EXPERIENCIA.pdf";
import PDF_SIN from "../src/PDF-CV/cv-sin-exp.png";
import PDF_CON from "../src/PDF-CV/cv-con-exp.png";
import PDF_JUNIOR from "../src/PDF-CV/JUNIOR.png";
import PDF_SENIOR from "../src/PDF-CV/Especialista.png";
import "./style.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const MyPDFs = () => {
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handlePDFClick = (pdf) => {
    setSelectedPDF(pdf);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Grid container spacing={2} style={{ height: "100vh" }}>
      <Grid
        item
        xs={12}
        md={6}
        style={{ overflowY: "auto", maxHeight: "100vh" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid container direction="column" alignItems="center">
              <img
                src={PDF_SIN}
                style={{ width: "150px" }}
                alt="PDF 1"
                onClick={() => handlePDFClick(CVsinexperiencia)}
              />
              <Button onClick={() => handlePDFClick(CVsinexperiencia)}>
                Ver PDF 1
              </Button>
            </Grid>
            <div>
              <Typography
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                sx={{
                  borderRadius: "50%",
                  width: 20,
                  height: 20,
                  display: "flex",
                  color: "white",
                  background: "red",
                  fontWeight: 800,
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid red",
                  cursor: "help",
                }}
              >
                ?
              </Typography>
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography sx={{ p: 1 }}>
                  Este modelo de CV es ideal para personas que no cuentan con
                  experiencia previa. Da tu primer paso con esta plantilla!!
                </Typography>
              </Popover>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Grid container direction="column" alignItems="center">
              <img
                src={PDF_CON}
                style={{ width: "150px" }}
                alt="PDF 2"
                onClick={() => handlePDFClick(CVsinexperiencia)}
              />
              <Button onClick={() => handlePDFClick(CVsinexperiencia)}>
                Ver PDF 2
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container direction="column" alignItems="center">
              <img
                src={PDF_JUNIOR}
                style={{ width: "150px" }}
                alt="PDF 3"
                onClick={() => handlePDFClick(CVsinexperiencia)}
              />
              <Button onClick={() => handlePDFClick(CVsinexperiencia)}>
                Ver PDF 3
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container direction="column" alignItems="center">
              <img
                src={PDF_SENIOR}
                style={{ width: "150px" }}
                alt="PDF 4"
                onClick={() => handlePDFClick(CVsinexperiencia)}
              />
              <Button onClick={() => handlePDFClick(CVsinexperiencia)}>
                Ver PDF 4
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} style={{ overflowY: "auto" }}>
        {selectedPDF && (
          <Document
            width={200}
            file={selectedPDF}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={1} width={350} />
          </Document>
        )}
      </Grid>
    </Grid>
  );
};

export default MyPDFs;
