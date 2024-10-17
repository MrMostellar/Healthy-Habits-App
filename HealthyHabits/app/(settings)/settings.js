import { onAuthStateChanged, signOut } from '@react-native-firebase/auth'
import React, { Component } from 'react'
import { Pressable, Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';

export default function settings () {
    return (
      <View className="items-center space-y-5">
        <Pressable className="bg-primary rounded-3xl px-3 py-1" onPress={async () => {auth().signOut()}}>
          <Text className="text-xl">Sign Out</Text>
        </Pressable>
      </View>
    )
}
