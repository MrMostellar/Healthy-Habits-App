import React from 'react'
import { Text, View } from 'react-native'
import { Stack } from 'expo-router'

export default function AuthLayout() {
    return (
        <Stack screenOptions={{
            headerTitle: 'Healthy Habits',
            headerTitleAlign:'center',

        }}>
            <Stack.Screen name='signin'
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name='signup'
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    )

}
