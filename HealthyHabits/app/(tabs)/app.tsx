import React from 'react';
import { StyleSheet, Text, View, ScrollView, ScrollViewComponent } from 'react-native';
import { ExpoRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FullWindowOverlay } from 'react-native-screens';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View>
              <Text>Home Page</Text>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%'
  },
  scrollView: {
    margin: 5,
    paddingTop: 50,
    flex: 1,
  }
});