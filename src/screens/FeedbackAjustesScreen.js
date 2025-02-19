import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const FeedbackAjustesScreen = ({ route, navigation }) => {
  // Recebe os dados passados do Dashboard
  const { energyConsumption: originalEnergy, transportDistance, wasteAmount, emissions } = route.params || {};
  const [energyReduction, setEnergyReduction] = useState('');
  const [adjustedEnergy, setAdjustedEnergy] = useState(originalEnergy);

  useEffect(() => {
    if (originalEnergy) {
      setAdjustedEnergy(originalEnergy);
    }
  }, [originalEnergy]);

  const handleApplyChanges = () => {
    const reduction = parseFloat(energyReduction);
    if (isNaN(reduction) || reduction < 0 || reduction > 100) {
      Alert.alert('Erro', 'A redução de energia deve ser um valor entre 0 e 100.');
      return;
    }
    // Calcula o novo consumo de energia
    const newEnergyConsumption = originalEnergy - (originalEnergy * (reduction / 100));
    Alert.alert('Sucesso', `Redução aplicada. Novo consumo de energia: ${newEnergyConsumption.toFixed(2)}`);
    // Navega de volta para o Dashboard, enviando os valores atualizados
    navigation.navigate('Dashboard', {
      energyConsumption: newEnergyConsumption.toString(),
      transportDistance,
      wasteAmount,
      // Se desejar, você pode recalcular emissions ou deixar que o Dashboard faça o cálculo
      emissions: emissions, // ou recalcular com base no novo consumo
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feedback e Ajustes</Text>
      <Text style={styles.infoText}>
        Consumo de energia original: {originalEnergy}
      </Text>
      
      <TextInput
        style={styles.input}
        placeholder="Redução de consumo de energia (%)"
        value={energyReduction}
        onChangeText={setEnergyReduction}
        keyboardType="numeric"
      />
      
      <TouchableOpacity style={styles.button} onPress={handleApplyChanges}>
        <Text style={styles.buttonText}>Aplicar Ajustes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.buttonText}>Retornar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#F5F5F5' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20, fontWeight: 'bold', color: '#228B22' },
  infoText: { fontSize: 16, marginBottom: 10, textAlign: 'center' },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5, backgroundColor: '#FFFFFF' },
  button: { backgroundColor: '#228B22', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 20 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default FeedbackAjustesScreen;
