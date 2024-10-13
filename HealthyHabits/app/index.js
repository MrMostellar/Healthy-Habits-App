import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../components/Logo";
import CustomButton from "../components/CustomButton";
import auth from '@react-native-firebase/auth';

export default function Index(){
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [isSignedIn, setIsSignedIn] = React.useState(true)
  const [isLoading, setIsLoading] = React.useState(false);

  const signIn = async () => {
      try{
          await auth().signInWithEmailAndPassword(user, pass)
          alert("signing in")
      } catch(e){               
          console.error(e);
      }
  }

  const signUp = async () => {
      try{
          await auth().createUserWithEmailAndPassword(user, pass)
          alert('check your email')
      } catch(e){
          console.error(e);
      }
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
        
                <View className="flex-[0.7] justify-center space-y-5 px-8">
                    <View className="my-3">
                        {isSignedIn === true ?
                            <Text className="text-xl text-center">Sign in</Text>:
                            <Text className="text-xl text-center">Sign up</Text>
                        }
                    </View>

                    <View>
                        <View className="items-center border-2 border-slate-800 rounded-2xl py-1">
                                <TextInput
                                className="text-sm"
                                placeholder={"Username"}
                                onChangeText={setUser}
                                />
                        </View>
                    </View>
                                
                    <View>
                        <View className="items-center border-2 border-slate-800 rounded-2xl py-1">
                                <TextInput
                                className="text-sm"
                                placeholder={"Password"}
                                secureTextEntry={true}
                                onChangeText={setPass}
                                />
                        </View>
                    </View>
                
                <View className="items-center">
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

            </View>
        </SafeAreaView>
  )
}