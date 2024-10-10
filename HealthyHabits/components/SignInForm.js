    import { View, Text } from "react-native"
    import InputBox from "./InputBox"
    import { Link } from "expo-router"
    
    export default function SignInForm(props){

        return(
            <View className="flex-[0.7] justify-center space-y-5 px-8">
                <View className="my-3">
                    <Text className="text-xl text-center">Sign in</Text>
                </View>

                <View>
                    <InputBox 
                        placeholder={'Username'}
                        keyboardType={'default'}
                        secure={false}
                    />
                </View>
                            
                <View>
                    <InputBox 
                        placeholder={'Password'}
                        keyboardType={'default'}
                        secure={true}
                    />
                </View>
                <View className="items-center">
                    <Text>Don't have an account? <Link className="underline text-blue-700" href={'signup'}>Sign up!</Link></Text>
                </View>
            </View>
    )
}