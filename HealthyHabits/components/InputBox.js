//import React from "react"
import { View, TextInput, Keyboard } from "react-native"

export default function InputBox(props){

    return(
        <View className="items-center border-2 border-slate-800 rounded-2xl py-1">
            <TextInput
                className="text-sm"
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secure}
                />
        </View>
    )
}