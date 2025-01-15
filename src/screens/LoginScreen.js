import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
const LoginScreen = ({ navigation }) => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const handleLogin = () => {
 // Lógica de login
 navigation.navigate('InformacoesEvento');
 };
 return (
 <View style={styles.container}>
 <Text style={styles.title}>Login</Text>
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
 <Button title="Entrar" onPress={handleLogin} />
 <Text onPress={() => navigation.navigate('Cadastro')}>Não tem
uma conta? Cadastre-se</Text>
 </View>
 );
};
const styles = StyleSheet.create({
 container: { flex: 1, justifyContent: 'center', padding: 20 },
 title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
 input: { borderWidth: 1, marginBottom: 10, padding: 10,
borderRadius: 5 },
});
export default LoginScreen;