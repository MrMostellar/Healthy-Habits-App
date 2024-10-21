import { onAuthStateChanged, signOut } from '@react-native-firebase/auth'
import React, { Component } from 'react'
import { Pressable, Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';
import Back from '../../components/Back';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function settings () {
    return (
      <SafeAreaView className="flex-1 bg-brandBackground">
        <View>
          <Back route={'(drawer)/(tabs)/app'}/>
        </View>
        <View className="items-center space-y-5">
          <Pressable className="bg-primary rounded-3xl px-3 py-1" onPress={async () => {auth().signOut()}}>
            <Text className="text-xl">Sign Out</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    )
}
