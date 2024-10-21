import { View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, router } from "expo-router";

export default function Back(props){
    return(
    <View className="justify-start px-5">                
        <Pressable onPress={() => router.push(props.route)}>
            <Ionicons name="chevron-back-outline" size={24}/>
        </Pressable>
    </View>
    )
}