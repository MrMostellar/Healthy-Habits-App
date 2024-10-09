import React from "react";
import { View, Text, TextInput, ScrollView, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../components/Logo";
import InputBox from "../../components/InputBox";

export default function SignIn(){
    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Logo/>
                </View>
                    
                <View>
                    <Text>Welcome to Healthy Habits!</Text>
                </View>
                    
                <View>
                    <Text>Healthy food, healthy budget, and a happy wallet!</Text>
                </View>

                <View>
                    <View>
                        <InputBox placeholder={'Username'}
                            keyboardType={'default'}
                            secure={false}/>
                    </View>

                    <View>
                        <InputBox placeholder={'Password'}
                            keyboardType={'default'}
                            secure={true}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}