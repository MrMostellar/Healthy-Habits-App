import { View, Text, Pressable } from "react-native";
import React, { useEffect } from "react";

export default function CustomButton(props){

    const[buttonStyle, setButtonStyle] = React.useState("items-center bg-primary")

    return(
        <View className={`items-center rounded-3xl ${buttonStyle}`}>
            <Pressable 
                className="p-2 px-16"
                onPress={props.onPress}
                onPressIn={() => setButtonStyle("bg-secondary")}
                onPressOut={() => setButtonStyle("bg-primary")}
            >
                <Text className="text-lg text-brandText">{props.title}</Text>
            </Pressable>
        </View>
    )
}