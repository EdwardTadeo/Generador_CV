import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@mui/material';
import { PDFViewer } from '@react-pdf/renderer';  // Asegúrate de importar tu componente de documento
import CvWithoutExperience from '../src/templates-cv/CvWithoutExperiencie';
import CvWithExperience from '../src/templates-cv/CvWithExperiencie';
import CVjunior from '../src/templates-cv/CvJuniorExperiencie';
import CVsenior from '../src/templates-cv/CvSeniorExperience';

import PersonalDetails from './CVForm';
import ProfessionalSummary from './ProfessionalSummary';
import WorkExperience from './WorkExperience';
import AcademicFormation from './AcademicFormation';
import Knowledge from './Knowledge';
import Achievements from './Achievements';
import Referents from './Referents';
import ExtraActivities from './ExtraActivities'
import TalksAndSeminars from './TalksAndSeminars';
import PhotoUploader from './PhotoUploader';


const Generate = () => {
  const [sections, setSections] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  useEffect(() => {
    const template = localStorage.getItem('selectedTemplate');
    setSelectedTemplate(template);
  }, []);
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
    achievements: [],
    referents: [],
    extraActivities: [],
    seminars: [],
    photo: null,
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

  const handleAddAchievement = () => {
    setFormData(prevState => ({
      ...prevState,
      achievements: [
        ...prevState.achievements,
        { descripcion: '', },
      ],
    }));
  };

  const handleAddReferents = () => {
    setFormData(prevState => ({
      ...prevState,
      referents: [
        ...prevState.referents,
        { companyReferent: '', nameReferent: '', phoneReferent: '', position: '', },
      ],
    }));
  };

  const handleAddExtraActivities = () => {
    setFormData(prevState => ({
      ...prevState,
      extraActivities: [
        ...prevState.extraActivities,
        { organizationName: '', organizationDescription: '', startDate: '', endDate: '', position: '', responsibilities:'', },
      ],
    }));
  };
  const handleAddSeminars = () => {
    setFormData(prevState => ({
      ...prevState,
      seminars: [
        ...prevState.seminars,
        { eventName: '', universityOrLocation: '', },
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

  const handleAchievementChange = (event, index) => {
    const { name, value } = event.target;
    setFormData(prevState => {
      const AchievementList = [...prevState.achievements];
      AchievementList[index][name] = value;
      return {
        ...prevState,
        achievements: AchievementList,
      };
    });
  };
  const handleReferentChange = (event, index) => {
    const { name, value } = event.target;
    setFormData(prevState => {
      const ReferentList = [...prevState.referents];
      ReferentList[index][name] = value;
      return {
        ...prevState,
        referents: ReferentList,
      };
    });
  };

  const handleExtraActivitiesChange = (event, index) => {
    const { name, value } = event.target;
    setFormData(prevState => {
      const ExtraActivitiesList = [...prevState.extraActivities];
      ExtraActivitiesList[index][name] = value;
      return {
        ...prevState,
        extraActivities: ExtraActivitiesList,
      };
    });
  };

  const handleSeminarsChange = (event, index) => {
    const { name, value } = event.target;
    setFormData(prevState => {
      const SeminarsList = [...prevState.seminars];
      SeminarsList[index][name] = value;
      return {
        ...prevState,
        seminars: SeminarsList,
      };
    });
  };

  console.log(selectedTemplate)
  const renderPDF = () => {
    switch (selectedTemplate) {
      case '1':
        return <CvWithoutExperience formData={formData} photo={formData.photo} />;
      case '2':
        return <CvWithExperience formData={formData} photo={formData.photo}/>;  
      case '3':
        return <CVjunior formData={formData} photo={formData.photo}/>;
      case '4':
        return <CVsenior formData={formData} photo={formData.photo}/>; 
      default:
        return null;
    }
  }
  return (
    <Grid container spacing={2} style={{ height: '100vh' }}>
      <Grid item xs={12} md={6} style={{ overflowY: 'auto', maxHeight: '100vh' }}>
        {/* Aquí va tu formulario */}
        <div style={{padding: '16px 40px'}}>
          <h2>Detalles Personales</h2>
          <PersonalDetails formData={formData} handleChange={handleChange}/>
        </div>
        <div style={{padding: '16px 40px'}}>
          <h2>Agregar fotografía para el CV</h2>
          <PhotoUploader
            onUpload={(photo) => {
              setFormData({
                ...formData,
                photo,
              });
            }}
          />
        </div>
        <div style={{padding: '16px 40px'}}>
          <h2>Resumen Profesional</h2>
          <p>Escribe de manera concisa y enérgica para interesar al reclutador. Destaca tu función, experiencia y tus logros más destacados, resaltando tus mejores cualidades y habilidades relevantes para el puesto.</p>
          <ProfessionalSummary formData={formData} handleChange={handleChange}/>
        </div>
        {selectedTemplate !== '1' && (
          <div style={{padding: '16px 40px'}}>
            <h2>Experiencia Laboral</h2>
            <p>Agrega tus empleos anteriores. Incluye el nombre de la empresa, tu cargo, el periodo de empleo y una breve descripción de tus responsabilidades y logros destacados en cada puesto.</p>
            <WorkExperience
              workExperience={formData.workExperience}
              handleAddWorkExperience={handleAddWorkExperience}
              handleWorkExperienceChange={handleWorkExperienceChange}
            />
          </div>
        )}
        <div style={{padding: '16px 40px'}}>
          <h2>Formación Academica</h2>
          <p>Agrega tus empleos anteriores. Incluye el nombre de la empresa, tu cargo, el periodo de empleo y una breve descripción de tus responsabilidades y logros destacados en cada puesto.</p>
          <AcademicFormation
            education={formData.education}
            handleAddEducation={handleAddEducation}
            handleEducationChange={handleEducationChange}
          />
        </div>
        {(selectedTemplate === '1' || selectedTemplate === '2') && (
        <div style={{padding: '16px 40px'}}>
          <h2>Actividades Extra Académicas y Voluntariados</h2>
          <p>Agrega las actividades extracurriculares en las que hayas participado. Indica el nombre de la organización, el cargo que desempeñaste y tus funciones</p>
          <ExtraActivities
            extraActivities={formData.extraActivities}
            handleAddExtraActivities={handleAddExtraActivities}
            handleExtraActivitiesChange={handleExtraActivitiesChange}
          />
        </div>
        )}
          <div style={{padding: '16px 40px'}}>
            <h2>Idiomas/Tecnología/ Programas</h2>
            <p>Agrega los idiomas, tecnologías y progrmas que manejes. Indica la especilidad y tu nivel</p>
            <Knowledge 
            knowledge={formData.knowledge} 
            handleAddKnowledge={handleAddKnowledge} 
            handleKnowledgeChange={handleKnowledgeChange} 
            />
          </div>
        <div style={{padding: '16px 40px'}}> 
            <h2>Logros Académicos</h2>
            <p>Agrega los logros que hayas obtenido en tu vida académica. Describe con detalle!!</p>
            <Achievements
                achievement={formData.achievements}
                handleAddAchievement={handleAddAchievement}
                handleAchievementChange={handleAchievementChange}
            />
        </div>
        {selectedTemplate === '1' && (
          <div style={{padding: '16px 40px'}}>
            <h2>Charlas y Seminarios</h2>
            <p>Agrega las charlas y seminarios a los que hayas asistido para fortalecer tu conocimientos</p>
            <TalksAndSeminars
              seminars={formData.seminars}
              handleAddSeminars={handleAddSeminars}
              handleSeminarsChange={handleSeminarsChange}
            />
          </div>
        )}
        {(selectedTemplate === '3' || selectedTemplate === '4') && (
        <div>
          <h2>Referencias Laborales</h2>
          <p>Agrega las referencias para que los reclutadores puedan validar tu experiencia. Indica todos los datos necesarios para poder contactarlos</p>
          <Referents
            referents={formData.referents}
            handleAddReferents={handleAddReferents}
            handleReferentChange={handleReferentChange}
          />
        </div>
        )}
      </Grid>
      <Grid item xs={12} md={6} style={{ overflowY: 'auto', maxHeight: '100vh' }}>
        {/* Aquí va la vista previa del PDF */}
        <PDFViewer style={{ width: '100%', height: '100%' }}>
          {renderPDF()}
        </PDFViewer>
      </Grid>
    </Grid>
  );
};

export default Generate;
