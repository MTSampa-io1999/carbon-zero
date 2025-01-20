import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const DashboardScreen = ({ route, navigation }) => {
  const [emissions, setEmissions] = useState(null);
  const [transportDistance, setTransportDistance] = useState('');
  const [energyConsumption, setEnergyConsumption] = useState('');
  const [wasteAmount, setWasteAmount] = useState('');
  const [participants, setParticipants] = useState('');
  const [eventDuration, setEventDuration] = useState('');

  useEffect(() => {
    if (route.params) {
      // Desestruturação dos dados passados via navegação
      const { 
        emissions, 
        transportDistance, 
        energyConsumption, 
        wasteAmount, 
        participants, 
        eventDuration 
      } = route.params;

      // Atualizando o estado com os dados passados
      setEmissions(emissions);
      setTransportDistance(transportDistance);
      setEnergyConsumption(energyConsumption);
      setWasteAmount(wasteAmount);
      setParticipants(participants);
      setEventDuration(eventDuration);
    }
  }, [route.params]); // Reagir quando route.params mudar

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard de Resultados</Text>
      <Text style={styles.infoText}>Emissões totais de CO₂: {emissions?.toFixed(2)} kg</Text>

      {/* Gráfico de emissões */}
      {emissions && (
        <LineChart
          data={{
            labels: ['Transporte', 'Energia', 'Resíduos'],
            datasets: [
              {
                data: [
                  parseFloat(transportDistance) * 0.25 || 0, // Emissões de transporte
                  parseFloat(energyConsumption) * 0.3 || 0, // Emissões de energia
                  parseFloat(wasteAmount) * 0.1 || 0, // Emissões de resíduos
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width - 30} // Largura do gráfico
          height={220}
          yAxisSuffix=" kg"
          chartConfig={{
            backgroundColor: '#228B22',
            backgroundGradientFrom: '#228B22',
            backgroundGradientTo: '#228B22',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          style={styles.graphStyle}
        />
      )}

      {/* Botão para ajustar variáveis */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ColetaDados')}
      >
        <Text style={styles.buttonText}>Ajustar Variáveis</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 15 
  },
  title: { 
    fontSize: 24, 
    marginBottom: 20, 
    padding: 5 
  },
  infoText: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#228B22', // Verde folha
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  graphStyle: {
    backgroundColor: '#228B22',
    marginVertical: 10,
    borderRadius: 8,
  },
});

export default DashboardScreen;
