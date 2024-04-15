import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {FontAwesome} from "react-native-vector-icons";
import { Home } from "../../../App"

const Tab = createBottomTabNavigator()

const Icon = ()=> <FontAwesome name = {"user"} size={30} color="black"/>

export const AppNavigations = ()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} 
            options={{ headerShown: false, tabBarIcon: ()=><Icon/> }}/>
            <Tab.Screen name="Home2" component={Home} 
            options={{ headerShown: false, tabBarIcon: ()=><Icon/> }}/>
        </Tab.Navigator>
    )
}