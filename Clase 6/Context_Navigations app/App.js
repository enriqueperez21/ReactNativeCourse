import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { appStyle } from './src/styles/App.styles';
import { AppContext, AppProvider } from './src/context/AppContext/AppContext';
import { useContext } from 'react';

export default function App() {
  return (
    <AppProvider>
        <Home/>
    </AppProvider>
  );
}

export const Home = ()=>{
  const useAppContext =  useContext(AppContext)
  console.log(useAppContext)
  const {userInfo} = useAppContext
  return(
    <View style={appStyle.container}>
      <Text style={{fontSize: 32}}>Hola React Native, Enrique</Text>
      <Text style={{fontSize: 32}}>UserInfor: {userInfo}</Text>
      <StatusBar style="auto" />
    </View>
  )
}