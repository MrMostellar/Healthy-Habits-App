import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native"
import { useLocalSearchParams } from "expo-router";


export default function Recipe(){
    const {recipe, ingredients, time} = useLocalSearchParams()

    return(
        <SafeAreaView>
            <View className="space-y-5">
                <View>
                    <Text className="text-center">{recipe}</Text>
                </View>
                <View className="px-5">
                    <Text className="text-left">Ingredients Needed: {ingredients}</Text>
                </View>
                <View className="px-5">
                    <Text className="text-left">Cook Time: {time}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}