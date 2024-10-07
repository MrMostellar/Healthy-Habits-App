import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export default function LandingPage(){
    const signIn = () => {
        return(
            <Link href={'/signin'}/>
        )
    }
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollview}>
                <View>
                    <Text>Welcome to Healthy Habits!</Text>
                </View>
                <View>
                    <Pressable 
                        style={styles.pressable} 
                        onPress={signIn}
                        hitSlop={50}
                    >
                        <Text>Sign In</Text>
                    </Pressable>
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
    },
    pressable: {
        backgroundColor: 'black'
    }
})