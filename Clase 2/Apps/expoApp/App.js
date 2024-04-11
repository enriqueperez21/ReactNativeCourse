import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola React Native, Enrique</Text>
      <Saludo nombre ={"Estudiantes"} apellido={"Garcia"}/>
      <StatusBar style="auto" />
    </View>
  );
}

function Saludo({nombre, apellido}){
  return(
    <>
      <Text>{nombre}</Text>
      <Text>{apellido}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
