//import React from "react"
import { View, TextInput } from "react-native"

export default function InputBox(props){
    //const [input, setInput] = React.useState('');

    return(
        <View>
            <TextInput placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                //onChangeText={setInput}
                secureTextEntry={props.secure}
                />
        </View>
    )
}