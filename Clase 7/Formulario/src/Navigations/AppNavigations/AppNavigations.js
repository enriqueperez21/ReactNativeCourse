import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {FontAwesome} from "react-native-vector-icons";
import { Home } from "../../Screens/Home/screen.Home";
import { UserInfoS } from "../../Screens/screen.userInfo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserImages } from "../../Screens/screen.Image";

const Tab = createBottomTabNavigator()

const Icon = ()=> <FontAwesome name = {"user"} size={30} color="black"/>

export const AppNavigations = ()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} 
            options={{ headerShown: false, tabBarIcon: ()=><Icon/> }}/>
            <Tab.Screen name="User" component={UserNavigations} 
            options={{ headerShown: false, tabBarIcon: ()=><Icon/> }}/>
        </Tab.Navigator>
    )
}

const Stack = createNativeStackNavigator()

export const UserNavigations = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="userInfo" component={UserInfoS} options={{ headerShown: false }}/>
            <Stack.Screen name="DogImages" component={UserImages} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}