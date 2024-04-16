import { Text } from "react-native"
import { styleText } from "./style.Text"


export const MyText = ({children, type})=>{
    return(
        <Text style={styleText[type]}>{children}</Text>
    )
}