import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';

const ColetaDadosScreen = ({ navigation }) => {
  const [transportDistance, setTransportDistance] = useState('');
  const [energyConsumption, setEnergyConsumption] = useState('');
  const [wasteAmount, setWasteAmount] = useState('');
  const [participants, setParticipants] = useState('');
  const [eventDuration, setEventDuration] = useState('');
  const [totalEmissions, setTotalEmissions] = useState(null);

  const handleCalculate = () => {
    try {
      // Convertendo os valores para números e garantindo que não sejam negativos
      const distance = Math.max(parseFloat(transportDistance) || 0, 0);
      const energy = Math.max(parseFloat(energyConsumption) || 0, 0);
      const waste = Math.max(parseFloat(wasteAmount) || 0, 0);
      const numParticipants = Math.max(parseInt(participants) || 1, 1);
      const duration = Math.max(parseFloat(eventDuration) || 1, 1);

      // Cálculo das emissões
      let emissions = 0;
      emissions += distance * 0.25;
      emissions += energy * 0.3;
      emissions += waste * 0.1;

      const total = emissions * numParticipants * (duration / 24);
      setTotalEmissions(total);

      Alert.alert('Resultado', `Emissões totais calculadas: ${total.toFixed(2)} kg CO₂`);

      navigation.navigate('Dashboard', { 
        emissions: total,
        transportDistance,
        energyConsumption,
        wasteAmount,
        participants,
        eventDuration
      });
    } catch (error) {
      Alert.alert('Erro', 'Verifique os dados e tente novamente.');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <Text style={styles.title}>Coleta de Dados</Text>
      
      <TextInput style={styles.input} placeholder="Distância média de transporte (km)" value={transportDistance} onChangeText={setTransportDistance} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Consumo de energia (kWh)" value={energyConsumption} onChangeText={setEnergyConsumption} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Quantidade de resíduos (kg)" value={wasteAmount} onChangeText={setWasteAmount} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Número de participantes" value={participants} onChangeText={setParticipants} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Duração do evento (horas)" value={eventDuration} onChangeText={setEventDuration} keyboardType="numeric" />

      <TouchableOpacity style={styles.button} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Calcular Emissões</Text>
      </TouchableOpacity>

      {totalEmissions !== null && <Text style={styles.resultText}>Emissões de CO₂: {totalEmissions.toFixed(2)} kg</Text>}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#F5F5F5' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20, fontWeight: 'bold', color: '#228B22' },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5, backgroundColor: '#FFFFFF' },
  button: { backgroundColor: '#228B22', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 20 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  resultText: { marginTop: 20, fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
});

export default ColetaDadosScreen;
