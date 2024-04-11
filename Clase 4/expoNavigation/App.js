import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { appStyle } from './src/styles/App.styles';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {FontAwesome} from "react-native-vector-icons";
import {AntDesign} from 'react-native-vector-icons'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} 
            options={{ headerShown: false, tabBarIcon: ()=><FontAwesome name = {"user"} size={30} color="black"/> }}/>
            <Tab.Screen name="Questions" component={QuestionScreen}
            options={{ headerShown: false, tabBarIcon: ()=><AntDesign name="question" size={30} color="black" />}}
            />
        </Tab.Navigator>
    </NavigationContainer>
    )
}

const HomeScreen = ({navigation}) =>{
  return(
    <View style={appStyle.container}>
      <Text style={{fontSize: 25,}}>Hola React Native</Text>
      <FontAwesome 
        name="user" size={30} color="black"
      />
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