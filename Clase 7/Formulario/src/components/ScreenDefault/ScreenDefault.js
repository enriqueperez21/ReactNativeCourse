import { StatusBar, View } from "react-native"
import { StyleDefault } from "./styles.screenD"

export const ScreenDefault = ({children}) =>{
    return(
        <View style = {StyleDefault.container}>
            {children}
            <StatusBar style="auto" />
        </View>
    )
}
