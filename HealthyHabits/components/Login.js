import React from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";

export function Login(){
    // userData and passwordData will be fetched from a database in the future.
    const userData = 'Andrew'
    const passwordData = 'Password'

    const [user, setUser] = React.useState('User');
    const [password, setPassword] = React.useState('Password')
    const [incorrectValue, setIncorrectValue] = React.useState(null)
    
    function authenticate(){

        userData === user && passwordData === password ?
            alert('Successfully logged in!') :
            setIncorrectValue(<Text>Incorrect login information</Text>) 
    
    }

    return(
        <View style={styles.login}>
            <TextInput 
                style={styles.textBox}
                placeholder = 'Username'
                onChangeText={setUser}
            />

            <TextInput 
                placeholder = 'Password'                    onChangeText={setPassword}
                style={styles.textBox}
            />

            <Button 
                style={styles.button}
                title="Log in"
                onPress={authenticate}
            />
            <View>{incorrectValue}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    login:{
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textBox:{
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 1,
        minWidth: '50%',
        minHeight: '5%',
        margin: 5,
        padding: 5
    },
    button: {
        padding: 5
    }
})