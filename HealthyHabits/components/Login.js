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
            setIncorrectValue(<Text style={styles.error}>Incorrect login information</Text>) 
    
    }

    return(
        
        <View style={styles.loginContainer}>

            <View style={styles.inputBoxes}>

                <TextInput 
                    style={styles.textBox}
                    placeholder = 'Username'
                    onChangeText = {setUser}
                    textAlign = 'center'
                />

                <TextInput 
                    style = {styles.textBox}
                    placeholder = 'Password'                    
                    onChangeText = {setPassword}
                    secureTextEntry = {true}
                    textAlign = 'center'
                />

            </View>

            <Button 
                title="Log in"
                onPress={authenticate}
            />

            <View>{incorrectValue}</View>

        </View>
        
    );
}

const styles = StyleSheet.create({
    loginContainer:{
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    textBoxes:{
        flex: 1,
    },

    textBox:{
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        minWidth: 175,
        maxWidth: 175,
        minHeight: 35,
        maxHeight: 35,        
    },
    error:{
        color: 'red'
    }
});