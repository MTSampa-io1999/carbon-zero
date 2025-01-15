import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
const InformacoesEventoScreen = ({ navigation }) => {
 const [eventName, setEventName] = useState('');
 const [eventLocation, setEventLocation] = useState('');
 const [responsibleCompany, setResponsibleCompany] = useState('');
 const handleNext = () => {
 // Envie os dados e navegue para a próxima tela
 navigation.navigate('ColetaDados');
 };
 return (
 <View style={styles.container}>
 <Text style={styles.title}>Informações do Evento</Text>
 <TextInput
 style={styles.input}
 placeholder="Nome do evento"
 value={eventName}
 onChangeText={setEventName}
 />
 <TextInput
 style={styles.input}
 placeholder="Local do evento"
 value={eventLocation}
 onChangeText={setEventLocation}
 />
 <TextInput
 style={styles.input}
 placeholder="Empresa responsável"
 value={responsibleCompany}
 onChangeText={setResponsibleCompany}
 />
 <Button title="Próximo" onPress={handleNext} />
 </View>
 );
};
const styles = StyleSheet.create({
 container: { flex: 1, justifyContent: 'center', padding: 20 },
 title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
 input: { borderWidth: 1, marginBottom: 10, padding: 10,
borderRadius: 5 },
});
export default InformacoesEventoScreen;
