import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
const CadastroScreen = ({ navigation }) => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const handleRegister = () => {
 // Aqui você pode fazer a lógica de cadastro
 navigation.navigate('Login');
 };
 return (
 <View style={styles.container}>
 <Text style={styles.title}>Cadastro</Text>
 <TextInput
 style={styles.input}
 placeholder="Nome completo"
 value={name}
 onChangeText={setName}
 />
 <TextInput
 style={styles.input}
 placeholder="E-mail"
 value={email}
 onChangeText={setEmail}
 />
 <TextInput
 style={styles.input}
 placeholder="Senha"
 secureTextEntry
 value={password}
 onChangeText={setPassword}
 />
 <TextInput
 style={styles.input}
 placeholder="Confirmar senha"
 secureTextEntry
 value={confirmPassword}
 onChangeText={setConfirmPassword}
 />
 <Button title="Cadastrar" onPress={handleRegister} />
 <Text onPress={() => navigation.navigate('Login')}>Já possui
conta? Faça login</Text>
 </View>
 );
};
const styles = StyleSheet.create({
 container: { flex: 1, justifyContent: 'center', padding: 20 },
 title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
 input: { borderWidth: 1, marginBottom: 10, padding: 10,
borderRadius: 5 },
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
});
export default CadastroScreen;