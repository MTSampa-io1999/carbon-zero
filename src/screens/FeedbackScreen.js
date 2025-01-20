import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
const FeedbackAjustesScreen = () => {
 const [energyReduction, setEnergyReduction] = useState('');
 const [publicTransport, setPublicTransport] = useState(false);
 const handleApplyChanges = () => {
 // Aplicar ajustes e recalcular as emissões
 };
 return (
 <View style={styles.container}>
 <TextInput
 style={styles.input}
 placeholder="Redução de consumo de energia (%)"
 value={energyReduction}
 onChangeText={setEnergyReduction}
 />
 <Button title="Aplicar Ajustes" onPress={handleApplyChanges} />
 </View>
 );
};
const styles = StyleSheet.create({
 container: { flex: 1, justifyContent: 'center', padding: 20 },
 input: { borderWidth: 1, marginBottom: 10, padding: 10,
borderRadius: 5, backgroundColor: '#228B22'},

});
export default FeedbackAjustesScreen;