import { Button, StatusBar, Text } from "react-native"
import { ScreenDefault } from "../components/ScreenDefault/ScreenDefault"
import { useApp } from "../context"

export const UserInfoS = ({navigation})=>{
    const useAppContext =  useApp()
    console.log(useAppContext)
    const {userInfo} = useAppContext
    return(
      <ScreenDefault>
          <Text style={{fontSize: 32}}>Información de usuario</Text>
          <Text style={{fontSize: 32}}>Nombre de usuario: {userInfo.name}</Text>
          <Text style={{fontSize: 32}}>Email: {userInfo.email}</Text>
          <Button 
            title="Ir a imagenes"
            onPress={()=>navigation.navigate("pokeImages")}
          />
          <StatusBar style="auto" />
      </ScreenDefault>
    )
  }