import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import Logo from "../../components/logo";
import Card from "../../components/Card";
import Button from "../../components/Button";

export default function LandingPage(){ 
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollview}>
                <View>
                    <View>
                        <Logo/>
                    </View>
                    
                    <View>
                        <Text style={styles.title}>Welcome to Healthy Habits!</Text>
                    </View>
                    
                    <View>
                        <Text style={styles.subtitle}>Healthy food, healthy budget, and a happy wallet!</Text>
                    </View>

                    <View>
                        <Card />
                    </View>

                    <View style={styles.buttonRow}>    
                        <View>
                            <Button location={'/signin'} functionText={'Sign In'}/>
                        </View>

                        <View>
                            <Button location={'/signup'} functionText={'Sign Up'}/>
                        </View>
                    </View>
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
    title: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 30
    },
    subtitle: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 14
    },
    button: {
        
    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})