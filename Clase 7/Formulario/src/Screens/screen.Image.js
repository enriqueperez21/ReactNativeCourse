import { Button, Image, TextInput } from "react-native"
import { ScreenDefault } from "../components/ScreenDefault/ScreenDefault"
import { useApp } from "../context"
import { useState } from "react"
import axios from "axios"

export const UserImages = ()=>{
    const useAppContext =  useApp()
    const [url, setUrl] = useState("")
    const [name, setName] = useState("")
    const getData = async(name) =>{
      const response = await axios.get("https://dog.ceo/api/breed/"+name+"/images/random")
      const data = response.data
      const url = data.message
      setUrl(url) 
    }
    return(
      <ScreenDefault>
          <TextInput
                style={{fontSize: 18, marginVertical: 20}}
                value={name}
                onChangeText={(text)=>setName(text)}
                placeholder="User name"
                keyboardType="default"
            />
            <Button 
              title="Buscar"
              onPress={()=>getData(name)}
            />
          <Image 
            style={{width: 400, height: 400}}
            source={{uri:url,}}
          />
      </ScreenDefault>
    )
  }