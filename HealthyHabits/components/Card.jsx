import { View, Text, StyleSheet } from "react-native";

export default function Card(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Add reusable component here for info, recipes, demo, etc...</Text>
            <Text style={styles.text}>Add reusable component here for info, recipes, demo, etc...</Text>
            <Text style={styles.text}>Add reusable component here for info, recipes, demo, etc...</Text>
            <Text style={styles.text}>Add reusable component here for info, recipes, demo, etc...</Text>
            <Text style={styles.text}>Add reusable component here for info, recipes, demo, etc...</Text>
            <Text style={styles.text}>Add reusable component here for info, recipes, demo, etc...</Text>
            <Text style={styles.text}>Add reusable component here for info, recipes, demo, etc...</Text>
            <Text style={styles.text}>Add reusable component here for info, recipes, demo, etc...</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 14
    }
})