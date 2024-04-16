import { View } from "react-native"
import { MyText } from "../../../components/Text/Text"
import { styleHeadbar } from "./Style.Headbar"

export const LoginHeadbar = ()=>{
    return(
        <View style={styleHeadbar.container}>
            <MyText type={"Tittle"}>Login</MyText>
        </View>
    )
}