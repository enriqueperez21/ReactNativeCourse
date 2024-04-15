import { StatusBar, Text } from "react-native"
import { ScreenDefault } from "../components/ScreenDefault/ScreenDefault"
import { useApp } from "../context"

export const Home = ()=>{
    const useAppContext =  useApp()
    console.log(useAppContext)
    const {userInfo} = useAppContext
    return(
      <ScreenDefault>
          <Text style={{fontSize: 32}}>Hola React Native, Enrique</Text>
          <StatusBar style="auto" />
      </ScreenDefault>
    )
  }