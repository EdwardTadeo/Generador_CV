import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const MyDocument = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{formData.name}</Text>
      </View>
      <View style={styles.section}>
        <Text>{formData.lastname}</Text>
      </View>
      <View style={styles.section}>
        <Text>{formData.description}</Text>
      </View>
      <View style={styles.section}>
        {formData.education.map((edu, index) => (
            <Text key={index}>{edu.university}</Text>
          ))}
      </View>
    </Page>
  </Document>
);
export default MyDocument;