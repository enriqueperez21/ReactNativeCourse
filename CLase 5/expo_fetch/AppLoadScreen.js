import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { appStyle } from './src/styles/App.styles';
import {FontAwesome} from "react-native-vector-icons";
import {AntDesign} from 'react-native-vector-icons'
import { useMessage } from './src/Hooks/messageHook';

export default function App() {
  const [message, setMessage] = useMessage()

  return(
    <View style={appStyle.container}>
        {(message == undefined) ? (
            <LoadScreen />
        ):(
            <HomeScreen message={message}/>
        )}
    </View>
  )
}

//Operador ternario ? -> Condicional
//(bolean) ? (Ejecución con true) : (Ejecución con false)

const LoadScreen = () =>{
    return(
        <>
            <Text style={{fontSize: 25,}}>CARGANDO...</Text>
        </>
    )
}

const HomeScreen = ({message}) =>{
    return(
        <>
            <Text style={{fontSize: 25,}}>Hola React Native</Text>
            <FontAwesome 
                name="user" size={30} color="black"
            />
            <Text style={{fontSize: 25,}}>Saludo a : {message.name}</Text>
            <Text style={{fontSize: 25,}}>Correo : </Text>
            <Text style={{fontSize: 25,}}>{message.email}</Text>
            <Text style={{fontSize: 25,}}>Pokemons:</Text>
            {
                message.pokemons.map((pokemon, index)=>
                {return(<Text key={index} style={{fontSize: 25,}}>{pokemon}</Text>)}
            )
                //undefined.array.map
            }
        </>
    )
}