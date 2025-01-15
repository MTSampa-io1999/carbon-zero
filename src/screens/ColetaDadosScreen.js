import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const ColetaDadosScreen = ({ navigation }) => {
  const [transportDistance, setTransportDistance] = useState('');
  const [energyConsumption, setEnergyConsumption] = useState('');
  const [wasteAmount, setWasteAmount] = useState('');
  const [participants, setParticipants] = useState('');
  const [eventDuration, setEventDuration] = useState('');
  const [totalEmissions, setTotalEmissions] = useState(null);

  const handleCalculate = () => {
    try {
      // Convertendo os valores para números
      const distance = parseFloat(transportDistance) || 0;
      const energy = parseFloat(energyConsumption) || 0;
      const waste = parseFloat(wasteAmount) || 0;
      const numParticipants = parseInt(participants) || 1; // Pelo menos 1 participante
      const duration = parseFloat(eventDuration) || 1; // Pelo menos 1 hora

      // Lógica para calcular emissões
      let emissions = 0;
      emissions += distance * 0.25; // 0.25 kg CO₂ por km de transporte
      emissions += energy * 0.3; // 0.3 kg CO₂ por kWh de energia consumida
      emissions += waste * 0.1; // 0.1 kg CO₂ por kg de resíduo

      const total = emissions * numParticipants * (duration / 24); // Ajusta pela duração e participantes

      // Armazenar o resultado
      setTotalEmissions(total);
      alert(`Emissões totais calculadas: ${total.toFixed(2)} kg CO₂`);

      // Navegar para o dashboard (opcional)
      navigation.navigate('Dashboard', { emissions: total });
    } catch (error) {
      console.error('Erro ao calcular emissões:', error);
      alert('Erro ao calcular as emissões. Verifique os dados e tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coleta de Dados</Text>
      <TextInput
        style={styles.input}
        placeholder="Distância média de transporte (km)"
        value={transportDistance}
        onChangeText={setTransportDistance}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Consumo de energia (kWh)"
        value={energyConsumption}
        onChangeText={setEnergyConsumption}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade de resíduos (kg)"
        value={wasteAmount}
        onChangeText={setWasteAmount}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Número de participantes"
        value={participants}
        onChangeText={setParticipants}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Duração do evento (horas)"
        value={eventDuration}
        onChangeText={setEventDuration}
        keyboardType="numeric"
      />
      <Button title="Calcular Emissões" onPress={handleCalculate} />
      {totalEmissions !== null && (
        <Text style={styles.resultText}>Emissões de CO₂: {totalEmissions.toFixed(2)} kg</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
  resultText: { marginTop: 20, fontSize: 18, fontWeight: 'bold' },
});

export default ColetaDadosScreen;
