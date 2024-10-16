import { Tabs, Drawer } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout(){
    return(
        <Tabs screenOptions={{
                tabBarActiveBackgroundColor: "#66666f",
                tabBarInactiveBackgroundColor: "#fff",
                headerShown: false,
                tabBarShowLabel: true,
        }}>
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
        </Tabs>
    )
}