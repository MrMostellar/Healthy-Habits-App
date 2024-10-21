import { Text, View, Image } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Asset } from 'expo-asset';
import AccountBubble from '../../components/AccountBubble';
import Logo from '../../components/Logo';
import CustomHeader from '../../components/CustomHeader';

export default function DrawerLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1}}>
            <Drawer
                screenOptions={{
                    headerRight: () => <AccountBubble/>,
                    headerStyle:{ 
                        backgroundColor: "#35a29f"
                        
                    }
                }}
            >
                <Drawer.Screen name='profile'
                    options={{
                        drawerLabel: 'Profile',
                        headerTitle: 'Profile'
                    }}
                />

                <Drawer.Screen name='settings'
                    options={{
                        drawerLabel: 'Settings',
                        headerTitle: 'Settings'
                    }}
                />

                <Drawer.Screen name='(tabs)'
                    options={{
                        drawerItemStyle: {display: 'none'},
                        title: ""
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    ) 
}
