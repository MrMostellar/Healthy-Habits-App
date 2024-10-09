import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp(){
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text>Sign Up</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%'
    },
    scrollview: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%'
    }
})