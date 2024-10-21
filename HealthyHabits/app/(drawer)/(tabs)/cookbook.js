import { SafeAreaView } from "react-native-safe-area-context";
import { View, ScrollView, Text } from "react-native";

export default function Cookbook(){
    return(
        <SafeAreaView className="flex-1 bg-brandBackground">
            <View className="items-center">
                <Text>
                    Cookbook
                </Text>
            </View>
        </SafeAreaView>
    )
}