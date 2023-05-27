import React, { useState, useRef } from "react";
import { Button, Container, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { BlobProvider } from '@react-pdf/renderer';

import PhotoUploader from "./PhotoUploader";
import CVForm from "./CVForm";
import ProfessionalSummary from "./ProfessionalSummary";
import WorkExperience from "./WorkExperience";
import AcademicFormation from "./AcademicFormation";
import Knowledge from "./Knowledge";
import ExtraActivities from "./ExtraActivities";
import TalksAndSeminars from "./TalksAndSeminars";
import Achievements from "./Achievements";
import Referents  from "./Referents";
import logo from "./logo_laborum.png";

import "./App.css";



import WithoutExperienceDocument from '../src/templates-cv/CvWithoutExperiencie';
import WithExperienceDocument from '../src/templates-cv/CvWithExperiencie';
import JuniorExperienceDocument from '../src/templates-cv/CvJuniorExperiencie';
import SeniorExperienceDocument from '../src/templates-cv/CvSeniorExperience';


function App() {
  const [photo, setPhoto] = useState(null);
  const [hasExperience, setHasExperience] = useState(false);
  const [isJunior, setIsJunior] = useState(false);
  const [isSenior, setIsSenior] = useState(false);
  const [formData, setFormData] = useState({
    personalInfo: {},
    summaryInfo: {},
    academicInfo: [],
    experienceInfo: [],
    idiomsInfo: [],
    activitiesInfo: [],
    talksInfo: [],
    achievementsInfo: [],
    referentsInfo: [],
  });
  let DocumentToRender;
  const cvFormData = useRef({});

  const handlePhotoUpload = (file) => {
    setPhoto(file);
  };

  const handleCVFormChange = (data) => {
    setFormData((prevFormData) => ({ ...prevFormData, personalInfo: data }));
  };
  const handleSummaryChange = (summary) => {
    setFormData((prevFormData) => ({ ...prevFormData, summaryInfo: { summary } }));
  };
  const handleAcademicChange = (formations) => {
    setFormData((prevFormData) => ({ ...prevFormData, academicInfo: formations }));
  };
  const handleWorkExperienceChange = (experiences) => {
    setFormData((prevFormData) => ({ ...prevFormData, experienceInfo: experiences }));
  };
  const handleKnowledgeChange = (knowledge) => {
    setFormData((prevFormData) => ({...prevFormData, idiomsInfo: knowledge})) 
  }
  const handleActivityChange = (activities) => {
    setFormData((prevFormData) => ({...prevFormData, activitiesInfo: activities}));
  }
  const handleEventChange = (events) =>{
    setFormData((prevFormData) => ({...prevFormData, talksInfo: events}))
  }
  const handleAchievementChange = (achievements) => {
    setFormData((prevFormData) => ({...prevFormData, achievementsInfo: achievements}))
  }
  const handleReferentChange = (referents) => {
    setFormData((prevFormData) => ({...prevFormData, referentsInfo: referents}))
  }

  const handleExperienceChange = (hasExperience, isJuniorOrSenior) => {
    console.log("hasExperience: ", hasExperience);
    console.log("isJuniorOrSenior: ", isJuniorOrSenior);
    if(hasExperience && isJuniorOrSenior === 'junior'){
        setIsJunior(true);
        setIsSenior(false);
        setHasExperience(false);
    } else if(hasExperience && isJuniorOrSenior === 'senior') {
        setIsJunior(false);
        setIsSenior(true);
        setHasExperience(false);
    } else if(hasExperience) {
        setIsJunior(false);
        setIsSenior(false);
        setHasExperience(true);
    } else {
        setIsJunior(false);
        setIsSenior(false);
        setHasExperience(false);
    }
};



  const printFormData = () => {
    setFormData((prevState) => ({
      ...prevState,
      personalInfo: cvFormData.current,
    }));

    console.log(formData); 
  };

  const [pdfPreviewOpen, setPdfPreviewOpen] = useState(false);

  const openPdfPreview = () => {
    setPdfPreviewOpen(true);
  };

  const closePdfPreview = () => {
    setPdfPreviewOpen(false);
  };

  const handleButtonClick = () => {
    printFormData();
    openPdfPreview();
  };
  if (hasExperience) {
    DocumentToRender = <WithExperienceDocument formData={formData} photo={photo} />;
  } else if (isJunior) {
    DocumentToRender = <JuniorExperienceDocument formData={formData} photo={photo} />;
  } else if (isSenior) {
    DocumentToRender = <SeniorExperienceDocument formData={formData} photo={photo} />;
  } else {
    DocumentToRender = <WithoutExperienceDocument formData={formData} photo={photo} />;
  }

  return (
    <Container>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <h1 className="title">CREA TU CV DESDE CERO</h1>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <PhotoUploader onUpload={handlePhotoUpload} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CVForm onGeneratePDF={handleCVFormChange} />
        </Grid>
        <Grid item xs={12}>
          <ProfessionalSummary onChange={handleSummaryChange} />
        </Grid>
        <Grid item xs={12}>
          <AcademicFormation onChange={handleAcademicChange}/>
        </Grid>
        <Grid item xs={12}>
        <WorkExperience onChange={handleWorkExperienceChange} onExperienceChange={handleExperienceChange}/>
        </Grid>
        <Grid item xs={12}>
          <Knowledge onChange={handleKnowledgeChange}/>
        </Grid>
        <Grid item xs={12}>
          {!(isJunior || isSenior) && <ExtraActivities onChange={handleActivityChange}/>}
        </Grid>
        <Grid item xs={12}>
          {!(isJunior || isSenior || hasExperience) && <TalksAndSeminars onChange={handleEventChange}/>}
        </Grid>
        <Grid item xs={12}>
          <Achievements onChange={handleAchievementChange}/>
        </Grid>
        <Grid item xs={12}>
          {(isJunior || isSenior) && <Referents onChange={handleReferentChange}/>}
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleButtonClick}>Generar PDF</Button>
        </Grid>
        <Grid item xs={12}>
          <BlobProvider document={DocumentToRender}>
            {({ blob, url, loading, error }) => {
              if (loading) {
                return <div>Cargando...</div>;
              } else if (error) {
                return <div>Error al generar el PDF.</div>;
              } else {
                return (
                  <Dialog open={pdfPreviewOpen} onClose={closePdfPreview} maxWidth="md" fullWidth={true}>
                    <DialogTitle>Previsualización del PDF</DialogTitle>
                    <DialogContent style={{ height: '80vh' }}>
                      <embed
                        src={url}
                        type="application/pdf"
                        width="100%"
                        height="100%"
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={closePdfPreview}>Cerrar</Button>
                    </DialogActions>
                  </Dialog>
                );
              }
            }}
          </BlobProvider>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
