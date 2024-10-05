import React from "react"
import { StyleSheet, View, Text } from "react-native"

export default function Post(){
    return(
        <View style={styles.container}>
            <Text style={styles.postTitle}>Hello</Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flex: 1,
        padding: 30
    },
    postTitle: {
        fontSize: 50
    }
})