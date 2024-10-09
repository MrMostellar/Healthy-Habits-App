import { View, Text, StyleSheet, Pressable} from 'react-native';
import { Redirect } from 'expo-router';

export default function Button(props){
    function goTo(){
        true === true ?
        <Redirect href ={props.location}/>:
        alert('error')
    }
    return (
        <View style={styles.container}>
           <Pressable onPress={goTo()} style={styles.button}>
            <Text>{props.functionText}</Text>
           </Pressable> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'grey'
    }
});
