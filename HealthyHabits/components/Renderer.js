import React from 'react'
import { Text, View, Pressable, StyleSheet } from 'react-native'
import { router, usePathname } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Renderer() {
const data = [{
    title: "Recipe 1",
    ingredients: ["sugar", "spice", "everything nice"],
    time: "10 minutes"
},
{
    title: "Recipe 2",
    ingredients: ["these", "nuts"],
    time: "instantaneous shame"
},
{
    title: "Recipe 3",
    ingredients: ["cream", "sugar", "salt", "flour", "water"],
    time: "2 hours"
}]
return (
    data.map((card, key) => 
        <Pressable
            key={key} 
            style={styles.border}
            className="items-center justify-center my-1.5 mx-1.5 w-48 h-48"
            onPress={() => {
                router.push({
                    pathname:'/(drawer)/(tabs)/(recipe)/[recipe]',
                    params: {
                        recipe: card.title,
                        ingredients: card.ingredients,
                        time: card.time
                    }
                })
            }}
        >
            <Text>{card.title}</Text>
        </Pressable>
    )
)}
const styles = StyleSheet.create({
    border: {
        borderColor: "#35a29f",
        borderWidth: 0.3,
        borderRadius: 35
    }
})