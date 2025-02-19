import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const DashboardScreen = ({ route, navigation }) => {
  const [emissions, setEmissions] = useState(null);
  const [transportDistance, setTransportDistance] = useState('');
  const [energyConsumption, setEnergyConsumption] = useState('');
  const [wasteAmount, setWasteAmount] = useState('');

  useEffect(() => {
    if (route.params) {
      const { emissions, transportDistance, energyConsumption, wasteAmount } = route.params;
      setEmissions(emissions);
      setTransportDistance(transportDistance);
      setEnergyConsumption(energyConsumption);
      setWasteAmount(wasteAmount);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard de Resultados</Text>
      <Text style={styles.infoText}>Emissões totais de CO₂: {emissions?.toFixed(2)} kg</Text>

      {emissions && (
        <LineChart
          data={{
            labels: ['Transporte', 'Energia', 'Resíduos'],
            datasets: [{ data: [parseFloat(transportDistance) * 0.25 || 0, parseFloat(energyConsumption) * 0.3 || 0, parseFloat(wasteAmount) * 0.1 || 0] }],
          }}
          width={Dimensions.get('window').width - 30}
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

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ColetaDados')}>
        <Text style={styles.buttonText}>Ajustar Variáveis</Text>
      </TouchableOpacity>
      <TouchableOpacity
  style={styles.button}
  onPress={() =>
    navigation.navigate('FeedbackAjustes', {
      energyConsumption,
      transportDistance,
      wasteAmount,
      emissions,
    })
  }
>
        <Text style={styles.buttonText}>FeedBack</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 15 },
  title: { fontSize: 24, marginBottom: 20, padding: 5, fontWeight: 'bold', color: '#228B22' },
  infoText: { fontSize: 18, marginBottom: 20, fontWeight: 'bold' },
  button: { backgroundColor: '#228B22', paddingVertical: 12, paddingHorizontal: 40, borderRadius: 8, marginTop: 20 },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  graphStyle: { backgroundColor: '#228B22', marginVertical: 10, borderRadius: 8 },
});

export default DashboardScreen;
