import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        const { email: storedEmail, password: storedPassword } = JSON.parse(userData);

        if (email === storedEmail && password === storedPassword) {
          Alert.alert('Sucesso', 'Login realizado com sucesso!');
          navigation.navigate('InformacoesEvento');
        } else {
          Alert.alert('Erro', 'E-mail ou senha incorretos!');
        }
      } else {
        Alert.alert('Erro', 'Nenhum usuário cadastrado. Por favor, cadastre-se.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível acessar os dados. Tente novamente.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />
      
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
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      
      <Text onPress={() => navigation.navigate('Cadastro')}>Não tem uma conta? Cadastre-se</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, alignItems: 'center' },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { 
    borderWidth: 1, 
    marginBottom: 10, 
    padding: 10,
    borderRadius: 5 
  },
  button: {
    backgroundColor: '#228B22',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
