import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { appStyle } from './src/styles/App.styles';

export default function App() {
  return (
    <View style={appStyle.container}>
      <Text>Hola React Native, Enrique</Text>
      <StatusBar style="auto" />
    </View>
  );
}