// styles.js
import { StyleSheet, Font } from '@react-pdf/renderer';
//import CatamaranTTF from "../src/font/Catamaran-VariableFont_wght.ttf"
//import CatamaranExtraBoldTTF from "../src/font/static/Catamaran-ExtraBold.ttf"
Font.register({
    family: 'Roboto',
    fonts: [
      { src: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf" }, // Fuente regular
      { src: "https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfBBc9.ttf", fontWeight: 900 }  // Fuente Black 900
    ]
  });


export const styles = StyleSheet.create({
    page: {
        fontSize: 12,
        backgroundColor: '#F5F5F5'
    },
    section: {
        left: 45,
        width: 500,
        marginTop: 10,
        marginBottom: 5,
    },
    sectionSumarry: {
        left: 45,
        width: 320,
        marginTop: 10,
        marginBottom: 10,
    },
    sectiontext: {
        lineHeight: 1.5, //responsable
    },
    box: {
        width: 510, 
        height: 40,
        marginLeft: 45,
        marginTop: 0,
        backgroundColor: '#BCA97E',
    },
    titlename: {
        width: 450,
        height: 50,
        left: 45,
        fontFamily: "Roboto",
        fontSize: 30,
        fontWeight: 900,
        top: 5,
        color: '#000000',
    },
    sectiontitle: {
        width: 450,
        height: 20,
        left: 45,
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: 900,
        top: 5,
        color: '#000000',
    },
    line: {
        width: 310,
        height: 3,
        left: 45,
        top: 1,
        backgroundColor: '#BCA97E',
    },
    image: {
        width: 130, // Ajusta el ancho como necesites
        height: 150,
    },
    sectionimage:{
        left: 400,
        top: -75,
        marginBottom: -160,
    },
    sectioninfo:{
        left: 400,
        top: 110,
        marginBottom: -77,
    },
    lineInfo: {
        width: 200,
        height: 3,
        left: 380,
        top: 100,
        backgroundColor: '#BCA97E',
    },
  // Define other styles here
});
