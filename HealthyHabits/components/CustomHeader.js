import { View, Image } from "react-native";
import { Asset } from "expo-asset";
import AccountBubble from "./AccountBubble";


export default function CustomHeader(){
    return(
            <View className="">
                <Image 
                    source={Asset.fromModule(require("../assets/Healthy_Habits_Android.png"))}
                    className="flex-1 items-start w-12 ml-10"
                    resizeMode='contain'
                />
            </View>
    )
}