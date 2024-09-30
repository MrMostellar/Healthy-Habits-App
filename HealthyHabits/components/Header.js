import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Header(){
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Healthy Habits</Text>
            <Text style={styles.subtitle}>Healthy food, healthy wallet</Text>
        </View>        
    );
}

const styles = StyleSheet.create({
    headerContainer:{
        alignItems: 'center',
        paddingTop: 50
    },

    title:{
        padding: 10,
        fontSize: 35
    },

    subtitle:{
        fontSize: 15
    }
});