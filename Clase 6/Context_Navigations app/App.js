import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { appStyle } from './src/styles/App.styles';
import { AppProvider, useApp } from './src/context';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigations } from './src/Navigations/AppNavigations/AppNavigations';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <AppProvider>
      <Navigations/>
    </AppProvider>
  );
}

export const Navigations = ()=>{
  const useAppContext =  useApp()
  const {loggin} = useAppContext
  return(
    <NavigationContainer>
      <Stack.Navigator>
        {(loggin)?(
          <Stack.Screen name="Aplicacion" component={AppNavigations} 
          options={{ headerShown: false }}
        />
        ):(
          <Stack.Screen name="Login" component={Login} 
          options={{ headerShown: false }}
        />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export const Login = ()=>{
  const useAppContext =  useApp()
  const {loginComplete} = useAppContext
  return(
    <View style={appStyle.container}>
      <Text style={{fontSize: 32, color: "red"}}>Necesitas Logearte</Text>
      <Button 
        title='Logearte'
        onPress={()=>loginComplete()}
      />
      <StatusBar style="auto" />
    </View>
  )
}