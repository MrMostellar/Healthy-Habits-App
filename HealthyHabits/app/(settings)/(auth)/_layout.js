import { Tabs, Drawer, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native";
import AccountBubble from "../../../components/AccountBubble";
import DrawerLayout from "../_layout";

export default function TabLayout(){
    return(
        <Tabs screenOptions={{

                tabBarShowLabel: true,
                headerShown: false
            }}
        >
            <Tabs.Screen name="app" 
            options={{
                title: 'Home',
                tabBarIcon: () => <Ionicons name="home" size={30}/>
            }}/>

            <Tabs.Screen name="cookbook" 
            options={{
                title: 'Cookbook',
                tabBarIcon: () => <Ionicons name="book" size={30}/>,
            }}/>

            <Tabs.Screen name="(recipe)"
            options={{
                href: null
            }}/>

        </Tabs>
    )
}