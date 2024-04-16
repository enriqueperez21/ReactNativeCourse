import { Button, Text, View } from "react-native"
import { ScreenDefault } from "../../components/ScreenDefault/ScreenDefault"
import { useApp } from "../../context"
import { MyText } from "../../components/Text/Text"

export const Login = ()=>{
    const useAppContext =  useApp()
    const {loginComplete} = useAppContext
    return(
        <ScreenDefault>
            <MyText type={"Tittle"}>Necesitas Logearte</MyText>
            <Button 
            title='Logearte'
            onPress={()=>loginComplete()}
            />
        
      </ScreenDefault>
    )
  }