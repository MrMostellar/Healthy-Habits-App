import { Tabs, Drawer, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AccountBubble from "../../../components/AccountBubble";
import DrawerLayout from "../../_layout";

export default function TabLayout(){
    const iconColor = "#000"
    return(
        <Tabs screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: "#15f5ba",
                tabBarInactiveTintColor: "#F0F3FF",
                tabBarActiveBackgroundColor: "#35a29f",
                tabBarInactiveBackgroundColor: "#35a29f",
            }}
        >
            <Tabs.Screen name="app" 
            options={{
                title: 'Home',
                tabBarIcon: ({color}) => <Ionicons name="home" color={color} size={30}/>,
            }}/>

            <Tabs.Screen name="cookbook" 
            options={{
                title: 'Cookbook',
                tabBarIcon: ({color}) => <Ionicons name="book" color={color} size={30}/>,
            }}/>

            <Tabs.Screen name="discover" 
            options={{
                title: 'Discover',
                tabBarIcon: ({color}) => <Ionicons name="search-outline" color={color} size={30}/>,
            }}/>

            <Tabs.Screen name="shoppingList" 
            options={{
                title: 'Shopping List',
                tabBarIcon: ({color}) => <Ionicons name="list-outline" color={color} size={30}/>,
            }}/>

            {/*Added(recipe) in this to have the tabs and drawer display on these pages*/}
            <Tabs.Screen name="(recipe)" 
            options={{
                href: null
            }}/>

        </Tabs>
    )
}