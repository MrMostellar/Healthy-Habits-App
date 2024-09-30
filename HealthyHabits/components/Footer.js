import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Footer(){
    return(
        <View style={styles.footerContainer}>
            <Text style={styles.link}>More Text</Text>
            <Text style={styles.link}>More Text</Text>
            <Text style={styles.link}>More Text</Text>
            <Text style={styles.link}>More Text</Text>
            <Text style={styles.link}>More Text</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    link: {
        padding: 5,
    }
});