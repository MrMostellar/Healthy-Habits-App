import { Stack } from 'expo-router'

export default function AuthLayout() {
    return (
        <Stack screenOptions={{
            headerTitle: 'Healthy Habits',
            headerTitleAlign:'center',
        }}>
            <Stack.Screen name='signin'
                options={{
                    headerShown: true
                }}
            />
            <Stack.Screen name='signup'
                options={{
                    headerShown: true
                }}
            />
        </Stack>
    )

}
