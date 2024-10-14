import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout(){
    return(
        <Tabs screenOptions={{
                tabBarActiveBackgroundColor: "#66666f",
                tabBarInactiveBackgroundColor: "#fff",
                headerTitleAlign: "center",
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

            <Tabs.Screen name="settings" 
            options={{
                title: 'Settings',
                tabBarIcon: () => <Ionicons name="settings" size={30}/>,
            }}/>
        </Tabs>
    )
}