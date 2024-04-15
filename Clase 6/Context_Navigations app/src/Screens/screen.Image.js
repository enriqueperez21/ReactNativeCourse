import { Image, StatusBar, Text } from "react-native"
import { ScreenDefault } from "../components/ScreenDefault/ScreenDefault"
import { useApp } from "../context"

export const UserImages = ()=>{
    const useAppContext =  useApp()
    console.log(useAppContext)
    const {userInfo} = useAppContext
    return(
      <ScreenDefault>
          <Text style={{fontSize: 32}}>Imagen de muestra</Text>
          <Image 
            style={{width: 400, height: 400}}
            source={{uri:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",}}
          />
          <StatusBar style="auto" />
      </ScreenDefault>
    )
  }