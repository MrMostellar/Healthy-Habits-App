import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Back from "../../components/Back";

export default function profile() {
const user = [{
    name: 'Andrew Mostella'
}]
    return(
        <SafeAreaView className="flex-1 bg-brandBackground">
            <View className="">
                <Back route={'(tabs)/app'}/>
                <View className="items-center">
                    <Text>{user[0].name}'s Profile</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}