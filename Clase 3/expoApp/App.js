import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { appStyle } from './src/styles/App.styles';
import { FlexScreen } from './src/components/testFlex';

//Hooks
// Funciones especiales, para manejo de aplicaciones en React

//Actualizar la pantalla -> Estados.
//Estados -> useState
//[Variable, suFunción] = useState(estadoInicial)
//suFunción -> Cambia el valor de la variable
//suFunción(nuevaValor)

export default function App() {
  //Cuerpo de la función.
  const [nombre, setNombre] = useState("Enrique P")
  
  //El return del compontente:
  return (
    <FlexScreen />
    // <View style={appStyle.container}>
    //   {/* estilos en 1 linea */}
    //   <Text style={{fontSize: 25}}>Hola React Native</Text>
    //   <Saludo nombre={nombre} apellido={"Garcia"} setNombre={setNombre}/>
    //   <StatusBar style="auto" />
    // </View>
  );
}

function saludoConsola(){
  console.log("HOla")
}

function Saludo({nombre, apellido, setNombre}){
  return(
    <>
      <Text>{nombre}</Text>
      <Text>{apellido}</Text>
      <Button 
        title='Cambiar nombre'
        onPress={()=>{
          setNombre("Kevin")
        }}
      />
    </>
  )
}

//saludoConsola() -> Es una ejecución.
//saludoConsola   -> Es el guardado de la función.