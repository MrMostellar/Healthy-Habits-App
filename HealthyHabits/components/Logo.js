import { Text, View, Image } from 'react-native'
import { Asset } from 'expo-asset'

export default function Logo() {
    return (
      <View className="w-fit bg-[#211951]">
        <Image 
          source={Asset.fromModule(require("../assets/Healthy_Habits.png"))}
          className="flex-1"
          resizeMode='contain'
        />
      </View>
    )
}
