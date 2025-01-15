import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
const ProcessamentoDadosScreen = () => {
 return (
 <View style={styles.container}>
 <Text style={styles.title}>Processando Dados</Text>
 <ActivityIndicator size="large" color="#0000ff" />
 <Text>Estamos calculando as emissões de CO₂...</Text>
 </View>
 );
};
const styles = StyleSheet.create({
 container: { flex: 1, justifyContent: 'center', alignItems:
'center', padding: 20 },
 title: { fontSize: 24, marginBottom: 20 },
});
export default ProcessamentoDadosScreen;
