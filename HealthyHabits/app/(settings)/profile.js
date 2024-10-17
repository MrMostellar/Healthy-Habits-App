import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function profile() {
const user = [{
    name: 'Andrew Mostella'
}]
    return(
        <SafeAreaView>
            <View className="items-center">
                <Text>{user[0].name}'s Profile</Text>
            </View>
        </SafeAreaView>
    )
}