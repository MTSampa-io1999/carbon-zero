import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';

const InformacoesEventoScreen = ({ navigation }) => {
  const [eventName, setEventName] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [responsibleCompany, setResponsibleCompany] = useState('');

  const handleNext = () => {
    if (!eventName || !eventLocation || !responsibleCompany) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    navigation.navigate('ColetaDados');
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
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
      
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#F5F5F5' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20, fontWeight: 'bold', color: '#228B22' },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5, backgroundColor: '#FFFFFF' },
  button: { backgroundColor: '#228B22', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 20 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default InformacoesEventoScreen;
