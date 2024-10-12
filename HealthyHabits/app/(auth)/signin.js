import React from "react";
import { View, Text, TextInput, ScrollView, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../components/Logo";
import SignInOrUpForm from "../../components/SignInOrUpForm";

export default function SignIn(){
    return(
        <SafeAreaView className="flex-1">
            <View className="flex-1 space-y-10">
                <View className="flex-[0.2] items-center space-y-10">
                    <View>
                        <Logo/>
                    </View>    
                    <View>
                        <Text className="text-center text-2xl">Welcome to Healthy Habits!</Text>    
                        <Text className="text-center text-xs">Healthy food, healthy budget, and a happy wallet!</Text>
                    </View>
                </View>

                <SignInOrUpForm/>                  
            </View>
        </SafeAreaView>
    )
}