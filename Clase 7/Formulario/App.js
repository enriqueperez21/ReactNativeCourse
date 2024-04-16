import { AppProvider, useApp } from './src/context';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigations } from './src/Navigations/AppNavigations/AppNavigations';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/Screens/Login/screen.Login';

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

