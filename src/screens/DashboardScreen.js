import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard de Resultados</Text>
      <Text>Emissões totais de CO₂: 50 kg</Text>

      {/* Botão para visualizar gráficos */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          /* Exibir gráficos */
        }}
      >
        <Text style={styles.buttonText}>Ver Gráficos</Text>
      </TouchableOpacity>

      {/* Espaço pequeno entre os botões */}
      <View style={styles.buttonSpacer} />

      {/* Botão para navegar para a tela FeedbackScreen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FeedbackScreen')}
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
  button: {
    backgroundColor: '#228B22', // Verde folha (mais escuro)
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8, // Borda mais arredondada
    marginBottom: 10, // Espaço entre os botões
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold', // Deixa o texto mais destacado
    textAlign: 'center',
  },
  buttonSpacer: { 
    height: 10, // Espaço entre os botões
  },
});

export default DashboardScreen;
