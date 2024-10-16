import { Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import AccountBubble from '../../components/AccountBubble';

export default function DrawerLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer 
                screenOptions={{
                header: () => <AccountBubble/>
                }} 
            />
        </GestureHandlerRootView>
    )
}
