    import { View, Text, Pressable } from "react-native"
    import React from "react"
    import { Link } from "expo-router"
    import InputBox from "./InputBox"
    import CustomButton from "./CustomButton"
    
    export default function SignInOrUpForm(props){

        const [user, setUser] = React.useState('');
        const [pass, setPass] = React.useState('');
        const [isSignedIn, setIsSignedIn] = React.useState(true)
        const [isLoading, setIsLoading] = React.useState(false);

        const signIn = () => {
            isLoading ?
            alert('loading'):
            alert('Signing in');
        }

        const signUp = () => {
            isLoading ?
            alert('loading'):
            alert('Signing up');
        }

        const renderSignInButton = () => {
            return(
                <CustomButton title={'Sign in'} onPress={signIn}/>
            )
        }

        const renderSignUpButton = () => {
            return(
                <CustomButton title={'Sign up'} onPress={signUp}/>
            )
        }

        const renderSignInLink = () => {
            return(
                <View className="flex-row justify-center">
                    <Text>
                        Don't have an account?
                    </Text>
                    <Text> </Text>
                    <Pressable 
                        className="align-middle" 
                        onPress={() => setIsSignedIn(false)}
                    >
                        <Text className="underline text-blue-700">
                            Sign up!
                        </Text>
                    </Pressable>
                </View>
            )
        }

        const renderSignUpLink = () => {
            return(
                <View className="flex-row justify-center">
                    <Text>
                        Already have an account?
                    </Text>
                    <Text> </Text>  
                    <Pressable 
                        onPress={() => setIsSignedIn(true)}
                    >
                        <Text className="underline text-blue-700">
                            Sign in!
                        </Text>
                    </Pressable>
                </View>
            )
        }

        return(
            <View className="flex-[0.7] justify-center space-y-5 px-8">
                <View className="my-3">
                    {isSignedIn === true ?
                        <Text className="text-xl text-center">Sign in</Text>:
                        <Text className="text-xl text-center">Sign up</Text>
                    }
                </View>

                <View>
                    <InputBox 
                        user={user}
                        setUser={setUser}
                        placeholder={'Username'}
                        keyboardType={'default'}
                        secure={false}
                    />
                </View>
                            
                <View>
                    <InputBox 
                        pass={pass}
                        setPass={setPass}
                        placeholder={'Password'}
                        keyboardType={'default'}
                        secure={true}
                    />
                </View>
                
                <View className="">
                    {isSignedIn === true ?
                        renderSignInButton():
                        renderSignUpButton()
                    }
                </View>
                
                <View className="items-center">
                    {isSignedIn === false ?
                        renderSignUpLink():
                        renderSignInLink()
                    }
                </View>
            </View>
    )
}