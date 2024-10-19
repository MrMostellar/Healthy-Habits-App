import { Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import AccountBubble from '../../components/AccountBubble';
import Logo from '../../components/Logo';

export default function DrawerLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1}}>
            <Drawer
                screenOptions={{
                    headerShown: true,
                    headerTitle: 'Healthy Habits',
                    headerTitleAlign: 'center',
                    tabBarActiveBackgroundColor: "#66666f",
                    tabBarInactiveBackgroundColor: "#fff",
                    headerRight: () => <AccountBubble/>,
                }}
            >
                <Drawer.Screen name='profile'
                    options={{
                        drawerLabel: 'Profile'
                    }}
                />

                <Drawer.Screen name='settings'
                    options={{
                        drawerLabel: 'Settings',
                    }}
                />

                <Drawer.Screen name='(auth)'
                    options={{
                        drawerItemStyle: {display: 'none'}
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    ) 
}
