import { useLocalSearchParams } from "expo-router"
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function DynamicList(){
    const user = [{
        name: "Andrew"
    }]

    const {list} = useLocalSearchParams()
    return(
        <SafeAreaView className="flex-1 bg-brandBackground">
            <View className="items-center">
                <Text>{user[0].name}'s Shopping List</Text>
            </View>

            <View>
                <Text>{list}</Text>
            </View>
        </SafeAreaView>
    )
}