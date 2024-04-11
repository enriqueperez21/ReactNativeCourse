import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { appStyle } from './src/styles/App.styles';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Questions" component={QuestionScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
}

const HomeScreen = ({navigation}) =>{
  return(
    <View style={appStyle.container}>
      <Text style={{fontSize: 25,}}>Hola React Native</Text>
      <Button 
        title='Navegar'
        onPress={()=>navigation.navigate("Questions")}
      />
    </View>
  )
}

const QuestionScreen = ()=>{
  return(
    <View style={appStyle.container}>
      <Text style={{fontSize: 25,}}>Esto es una navegacion ?</Text>
    </View>
  )
}