import { Stack, useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";
import auth, { FirebaseAuthTypes, getAuth, onAuthStateChanged } from "@react-native-firebase/auth";
import { firebase } from "@react-native-firebase/auth";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ReactNativeFirebase } from "@react-native-firebase/app";
import Drawer from "expo-router/drawer";

export default function RootLayout(){
    const [initializing, setInitializing] = React.useState(true);
    const [user, setUser] =React.useState();
    const router = useRouter();
    const segments = useSegments();

    //const isAuth = getAuth();
    const onAuthStateChanged = (user) => {
        setUser(user)        
        if (initializing) setInitializing(false)
    }

    useEffect(()=>{
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        const unsubscribe = auth().onAuthStateChanged((user) => {
            if(!user){
                router.replace('/')
            }
        })
        return subscriber;
    }, []);

    useEffect(() => {
        if(initializing) return;

        const inAuthGroup = segments[0] === '/(drawer)';

        if(user && !inAuthGroup) {
            router.replace('/(drawer)/(tabs)/app');
        } else if(!user && !inAuthGroup) {
            router.replace('/');
        }
    }, [user, initializing]);

    return(
        <Stack screenOptions={{             
        }}
        >
            <Stack.Screen name="(drawer)" 
                options={{
                    headerShown: false
                }} 
            />
        </Stack>
    )
}