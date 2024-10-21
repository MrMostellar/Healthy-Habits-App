import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function discover(){
    return(
        <SafeAreaView className="flex-1 bg-brandBackground">
            <View>
                <Text>Discover new recipes</Text>
            </View>
        </SafeAreaView>
    )
}