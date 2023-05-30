import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import { LanguageIcon } from '@mui/icons-material';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from '../src/templates-cv/MyDocument'  // Asegúrate de importar tu componente de documento
import CvWithoutExperience from '../src/templates-cv/CvWithoutExperiencie';

import PersonalDetails from './CVForm';
import ProfessionalSummary from './ProfessionalSummary';
import WorkExperience from './WorkExperience';
import AcademicFormation from './AcademicFormation';
import Knowledge from './Knowledge';

const Generate = () => {
  const [sections, setSections] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    dniType: '',
    dni: '',
    cellphone: '',
    email: '',
    country: '',
    department: '',
    address: '',
    summary: '',
    workExperience: [],
    education: [],
    knowledge: [],
  });
  const addSection = (section) => {
    setSections([...sections, section]);
  };
  
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData)
  };
  const handleAddWorkExperience = () => {
    setFormData(prevState => ({
      ...prevState,
      workExperience: [
        ...prevState.workExperience,
        { jobTitle: '', company: '', startDate: '', endDate: '', objetive: '', achievements: '', },
      ],
    }));
  };

  const handleAddEducation = () => {
    setFormData(prevState => ({
      ...prevState,
      education: [
        ...prevState.education,
        { university: '', career: '', grade: '', condition: '', startDate: '', endDate: '', description: '', },
      ],
    }));
  };
  const handleAddKnowledge = () => {
    setFormData(prevState => ({
      ...prevState,
      knowledge: [
        ...prevState.knowledge,
        { category: '', name: '', level: '', },
      ],
    }));
  };

  const handleWorkExperienceChange = (event, index) => {
    const { name, value } = event.target;
    setFormData(prevState => {
      const workExperienceList = [...prevState.workExperience];
      workExperienceList[index][name] = value;
      return {
        ...prevState,
        workExperience: workExperienceList,
      };
    });
  };

  const handleEducationChange = (event, index) => {
    const { name, value } = event.target;
    setFormData(prevState => {
      const EducationList = [...prevState.education];
      EducationList[index][name] = value;
      return {
        ...prevState,
        education: EducationList,
      };
    });
  };
  const handleKnowledgeChange = (event, index) => {
    const { name, value } = event.target;
    setFormData(prevState => {
      const KnowledgeList = [...prevState.knowledge];
      KnowledgeList[index][name] = value;
      return {
        ...prevState,
        knowledge: KnowledgeList,
      };
    });
  };
  

  return (
    <Grid container spacing={2} style={{ height: '100vh' }}>
      <Grid item xs={12} md={6} style={{ overflowY: 'auto', maxHeight: '100vh' }}>
        {/* Aquí va tu formulario */}
        <div style={{padding: '16px 40px'}}>
          <h2>Detalles Personales</h2>
          <PersonalDetails formData={formData} handleChange={handleChange}/>
        </div>
        <div style={{padding: '16px 40px'}}>
          <h2>Resumen Profesional</h2>
          <p>Escribe de manera concisa y enérgica para interesar al reclutador. Destaca tu función, experiencia y tus logros más destacados, resaltando tus mejores cualidades y habilidades relevantes para el puesto.</p>
          <ProfessionalSummary formData={formData} handleChange={handleChange}/>
        </div>
        <div style={{padding: '16px 40px'}}>
          <h2>Experiencia Laboral</h2>
          <p>Agrega tus empleos anteriores. Incluye el nombre de la empresa, tu cargo, el periodo de empleo y una breve descripción de tus responsabilidades y logros destacados en cada puesto.</p>
          <WorkExperience
            workExperience={formData.workExperience}
            handleAddWorkExperience={handleAddWorkExperience}
            handleWorkExperienceChange={handleWorkExperienceChange}
          />
        </div>
        <div style={{padding: '16px 40px'}}>
          <h2>Formación Academica</h2>
          <p>Agrega tus empleos anteriores. Incluye el nombre de la empresa, tu cargo, el periodo de empleo y una breve descripción de tus responsabilidades y logros destacados en cada puesto.</p>
          <AcademicFormation
            education={formData.education}
            handleAddEducation={handleAddEducation}
            handleEducationChange={handleEducationChange}
          />
        </div>
        {sections.map((section, index) => {
          switch(section) {
            case 'Knowledge':
              return (
                <div style={{padding: '16px 40px'}} key={index}>
                  <h2>Idiomas</h2>
                  <Knowledge 
                    knowledge={formData.knowledge} 
                    handleAddKnowledge={handleAddKnowledge} 
                    handleKnowledgeChange={handleKnowledgeChange} 
                  />
                </div>
              )
            // Agrega más casos aquí para otras secciones
            default:
              return null;
          }
        })}
        <div style={{padding: '16px 40px'}}>
          <h2>Agregar Sección</h2>
            <Button onClick={() => addSection('Knowledge')}>Idiomas</Button>
          {/* Agrega más botones aquí para otras secciones */}
      </div>

      </Grid>
      <Grid item xs={12} md={6} style={{ overflowY: 'auto', maxHeight: '100vh' }}>
        {/* Aquí va la vista previa del PDF */}
        <PDFViewer style={{ width: '100%', height: '100%' }}>
          <CvWithoutExperience formData={formData} />
        </PDFViewer>
      </Grid>
    </Grid>
  );
};

export default Generate;
