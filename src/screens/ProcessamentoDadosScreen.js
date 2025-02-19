import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const ProcessamentoDadosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Processando Dados</Text>
      <ActivityIndicator size="large" color="#228B22" />
      <Text style={styles.statusText}>Estamos calculando as emissões de CO₂ para o seu evento...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#F5F5F5' },
  title: { fontSize: 24, marginBottom: 20, fontWeight: 'bold', color: '#228B22' },
  statusText: { fontSize: 16, marginTop: 10, textAlign: 'center', color: '#333' },
});

export default ProcessamentoDadosScreen;
