import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Footer(){
    return(
        <View style={styles.footer}>
            <Text style={styles.footerComponent}>Footer</Text>
            <Text style={styles.footerComponent}>More Text</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    footerComponent: {
        marginLeft: 5,
        marginRight: 5
    }
});