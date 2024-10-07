import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn(){
    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Sign In</Text>
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