import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import auth from '@react-native-firebase/auth';

export default function Settings(){
    const DATA = {
        title: 'Account settings',
        data: 'Sign out'

    }
    return(
        <SafeAreaView>
            <View className="items-center">
                <Text>Account Settings</Text>
            </View>

            <View className="items-center">
                <Pressable
                    onPress={() => auth().signOut()}
                >
                    <Text>Sign out</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}