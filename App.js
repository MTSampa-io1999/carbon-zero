import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from './src/screens/CadastroScreen';
import LoginScreen from './src/screens/LoginScreen';
import InformacoesEventoScreen from './src/screens/InformacoesEventoScreen';
import ColetaDadosScreen from './src/screens/ColetaDadosScreen';
import ProcessamentoDadosScreen from './src/screens/ProcessamentoDadosScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import FeedbackAjustesScreen from './src/screens/FeedbackScreen';
const Stack = createStackNavigator();
const App = () => {
 return (
 <NavigationContainer>
 <Stack.Navigator initialRouteName="Login">
 <Stack.Screen name="Cadastro" component={CadastroScreen} />
 <Stack.Screen name="Login" component={LoginScreen} />
 <Stack.Screen name="InformacoesEvento"
component={InformacoesEventoScreen} />
 <Stack.Screen name="ColetaDados" component={ColetaDadosScreen}
/>
 <Stack.Screen name="ProcessamentoDados"
component={ProcessamentoDadosScreen} />
 <Stack.Screen name="Dashboard" component={DashboardScreen} />
 <Stack.Screen name="FeedbackAjustes"
component={FeedbackAjustesScreen} />
 </Stack.Navigator>
 </NavigationContainer>
 );
};
export default App;