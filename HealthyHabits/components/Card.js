import { View, Text, } from "react-native";
import { StyleSheet } from "react-native";

export default function Card(props){
    return(
        <View 
            className="items-center justify-center bg-gray-700 rounded-3xl border-gray-200 my-1.5 mx-1.5 w-48 h-48"
            style={styles.border}
        >
            <Text>Recipe: {props.card}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    border: {
        borderWidth: 1.25
    }
})
