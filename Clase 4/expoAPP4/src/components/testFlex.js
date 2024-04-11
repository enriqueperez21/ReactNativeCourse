import { Text, View } from "react-native"

export const FlexScreen = () => {
    return(
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{flex: 1, backgroundColor: '#fff',
        alignItems: "center", justifyContent: "space-evenly", flexDirection: "row"}}>
            <Text>Hola flexboxs </Text>
            <Text style={{backgroundColor: "yellow"}}>- Valor 2</Text>
            <Text>- Valor 3</Text>
        </View>
        <View style={{flex: 1, backgroundColor: '#632', flexDirection: "column-reverse"}}>
            <View style={{flex: 1, backgroundColor: 'yellow'}}>

            </View>
            <View style={{flex: 1, backgroundColor: 'green'}}>

            </View>
        </View>
    </View>
)}