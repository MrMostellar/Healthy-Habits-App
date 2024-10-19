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
                    headerTitle: "",
                    headerBackground: () => <AccountBubble/>,
                    headerBackgroundContainerStyle: {alignItems: "flex-end"},
                }}
            >
                <Drawer.Screen name='(auth)'
                    options={{
                        drawerLabel: 'Home'
                    }}
                />

                <Drawer.Screen name='settings'
                    options={{
                        drawerLabel: 'Settings',
                        headerTitle: "Settings",
                    }}
                />

                <Drawer.Screen name='profile'
                    options={{
                        drawerLabel: 'Profile'
                    }}
                />
                <Drawer.Screen name='(recipe)'
                    options={{
                        drawerItemStyle: {display: 'none'}
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    ) 
}
