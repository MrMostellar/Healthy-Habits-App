import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Home(){
    return(
        <Tabs screenOptions={{
                tabBarActiveBackgroundColor: "#D8EFD3",
                tabBarInactiveBackgroundColor: "#F1F8E8",
                headerTitleAlign: "center",
                headerTransparent: true
        }}>
            <Tabs.Screen name="index" options={{
                title: 'Home',
                tabBarIcon: () => <Ionicons name="home"/>
            }}/>
            <Tabs.Screen name="settings" options={{
                title: 'Settings',
                tabBarIcon: () => <Ionicons name="settings"/>,

            }}/>
        </Tabs>
    )
}