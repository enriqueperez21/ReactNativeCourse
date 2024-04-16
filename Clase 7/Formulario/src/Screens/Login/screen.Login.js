import { Button, Text, TextInput, View } from "react-native"
import { ScreenDefault } from "../../components/ScreenDefault/ScreenDefault"
import { useApp } from "../../context"
import { MyText } from "../../components/Text/Text"
import { LoginHeadbar } from "./Components/Login.Headbar"
import { styleLogin } from "./style.Login"
import { useState } from "react"

export const Login = ()=>{
    const useAppContext =  useApp()
    const {loginComplete} = useAppContext

    const userObject = {
      name: "",
      email: ""
    }
    const [userInfo, setUserInfo] = useState(userObject)

    const changeInfo = (newData) => setUserInfo({...userInfo, ...newData})
    return(
        <ScreenDefault>
          <LoginHeadbar/>
          <View style={styleLogin.container}>
            <MyText type={"Tittle"}>Necesitas Logearte</MyText>
            <TextInput
                style={{fontSize: 18, marginVertical: 20}}
                value={userInfo.name}
                onChangeText={(text)=>changeInfo({name: text})}
                placeholder="User name"
                keyboardType="default"
            />
            <TextInput
                style={{fontSize: 18, marginVertical: 20}}
                value={userInfo.email}
                onChangeText={(text)=>changeInfo({email: text})}
                placeholder="User Email"
                keyboardType="default"
            />
            <Button 
            title='Logearte'
            onPress={()=>loginComplete()}
            />
          </View>
      </ScreenDefault>
    )
  }