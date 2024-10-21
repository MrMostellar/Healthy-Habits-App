import { Pressable, Text, View } from 'react-native'
import { router } from 'expo-router'

export default function AccountBubble() {
    return (
        <Pressable onPress={() => router.navigate('/(drawer)/profile')}>
            <View className="items-center justify-center my-6 mx-2 rounded-full w-12 h-12 bg-black">
            </View>
        </Pressable>
    )
}

