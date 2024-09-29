import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Header(){
    return(
        <View style={styles.header}>
        
            <View style={styles.headerComponent}>
                <Text style={styles.title}>Healthy Habits</Text>
            </View>
        
            <View style={styles.headerComponent}>
                <Text style={styles.subtitle}>Healthy food, healthy wallet</Text>
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        alignItems: 'center',
        marginTop: 50
    },
    headerComponent:{
        margin: 5,
        
    },
    title:{
        fontSize: 30
    },
    subtitle:{
        fontSize: 15
    }
});