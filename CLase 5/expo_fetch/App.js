import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { appStyle } from './src/styles/App.styles';
import {FontAwesome} from "react-native-vector-icons";
import {AntDesign} from 'react-native-vector-icons'
import { useEffect, useState } from 'react';

const getData = async (setMessage, nombre)=>{
    const uri = "https://pokeapi.co/api/v2/pokemon/"+nombre
    const response1 = await fetch(uri)
    const responseJson = await response1.json()
    const pokemonType = responseJson.types[0].type.name
    console.log(pokemonType)
    setMessage(pokemonType) //Una vez que esta la respuesta, cambia el valor con el set
}

export default function App() {
  const [message, setMessage] = useState("")
  const [send, setSend] = useState(false)

  //Ejecuta cuando cambia la variable entre []
  useEffect(()=>{
    console.log("Envio de datos? ",send)
    getData(setMessage, "pikachu")
    return(
      ()=>console.log("Abortando")
    )
  },[send])

  return(
    <View style={appStyle.container}>
      <Text style={{fontSize: 25,}}>Hola React Native</Text>
      <FontAwesome 
        name="user" size={30} color="black"
      />
    <Text style={{fontSize: 25,}}>Dato : {message}</Text>
    <Button
        title='Encender'
        onPress={()=>setSend(!send)}
    />
    </View>
  )
}