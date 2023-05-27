import React from 'react';
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';
import { styles } from './styles-pdf';

const MyDocument = ({ formData,photo }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.box} fixed>
  
        </View>
        <Text style={styles.titlename}>
          {formData.personalInfo.name +' '+formData.personalInfo.lastName}
        </Text>
        <View style={styles.sectionimage}>
          {photo && (
              <Image
                style={styles.image}
                src={photo}
              />
          )}
        </View>
        <View style={styles.line}>
  
        </View>
        <View style={styles.section}>
          <Text style={styles.sectiontext}>
            Correo: {formData.personalInfo.email +'   '+formData.personalInfo.dniType +': '+formData.personalInfo.dni}
          </Text>
          <Text style={styles.sectiontext}>
            Contacto: {formData.personalInfo.cellphone + '                Distrito: '+formData.personalInfo.department+'-'+formData.personalInfo.country}
          </Text>
        </View>
        <View style={styles.line}>
  
        </View>
        <View>
          <Text style={styles.sectiontitle}>RESUMEN PROFESIONAL</Text>
          <View style={styles.section}>
            <Text style={styles.sectiontext}>
              {formData.summaryInfo.summary}
            </Text>
          </View>
        </View>
        <View style={styles.line}>
  
        </View>
        <View>
          <Text style={styles.sectiontitle}>FORMACIÓN ACADÉMICA & COMPLEMENTARIA</Text>
          <View style={styles.section}>
            {formData.academicInfo?.map((info, index) => {
              const institution = info.centerName || info.university;
              const course = info.courseName || info.career;
        
              return (
                <Text key={index} style={styles.sectiontext}>
                  . {institution+' - '+course}
                </Text>
              );
            })}
          </View>
        </View>
        <View style={styles.line}>
  
        </View>
        <View>
          <Text style={styles.sectiontitle}>IDIOMAS, TECNOLOGÍAS Y SOFTWARE</Text>
          <View style={styles.section}>
          {formData.idiomsInfo?.map((info, index) => (
            <Text key={index} style={styles.sectiontext}>
              . {info.name+' - ('+info.level+')'}
            </Text>
          ))}
          </View>
        </View>
        <View style={styles.line}>
  
        </View>
        <View>
          <Text style={styles.sectiontitle}>ACTIVIDADES EXTRA ACADÉMICAS Y VOLUNTARIADOS</Text>
          <View style={styles.section}>
          {formData.activitiesInfo?.map((info, index) => (
            <View key={index}>
              <Text style={styles.sectiontext}>
                {info.organizationName}
              </Text>
              <Text style={styles.sectiontext}>
                {info.organizationDescription}
              </Text>
              <Text style={styles.sectiontext}>
                Cargo: {info.position + '- ('+info.startDate+' - '+info.endDate+')'}
              </Text>
              <Text style={styles.sectiontext}>
                  . Funciones:
              </Text>
              <Text style={styles.sectiontext}>
                 {info.responsibilities}
              </Text>
            </View>
          ))}
          </View>
        </View>
        <View style={styles.line}>
  
        </View>
        <View>
          <Text style={styles.sectiontitle}>CHARLAS Y SEMINARIOS</Text>
          <View style={styles.section}>
          {formData.talksInfo?.map((info, index) => (
            <Text key={index} style={styles.sectiontext}>
              {info.eventName+' - '+info.universityOrLocation}
            </Text>
          ))}
          </View>
        </View>
        <View style={styles.line}>
  
        </View>
        <View>
          <Text style={styles.sectiontitle}>LOGROS ACADÉMICOS Y PERSONALES</Text>
          <View style={styles.section}>
          {formData.achievementsInfo?.map((info, index) => (
            <Text key={index} style={styles.sectiontext}>
              {info.description}
            </Text>
          ))}
          </View>
        </View>
      </Page>
    </Document>
);


export default MyDocument;