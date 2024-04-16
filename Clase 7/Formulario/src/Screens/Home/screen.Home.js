import { StatusBar, Text } from "react-native"
import { ScreenDefault } from "../../components/ScreenDefault/ScreenDefault"
import { useApp } from "../../context"
import { MyText } from "../../components/Text/Text"

export const Home = ()=>{
    const useAppContext =  useApp()
    const {userInfo} = useAppContext
    return(
      <ScreenDefault>
          <MyText type={"normal"}>Hola React Native, {userInfo.name}</MyText>
          <MyText type={"normal"}>Email, {userInfo.email}</MyText>
      </ScreenDefault>
    )
  }