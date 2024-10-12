import { View, Text, Pressable } from "react-native";

export default function CustomButton(props){
    return(
        <View className="items-center">
            <Pressable className="bg-blue-300 rounded-3xl p-2 px-16">
                <Text className="text-lg">{props.title}</Text>
            </Pressable>
        </View>
    )
}