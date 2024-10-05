import React from 'react';
import { StyleSheet, Text, View, ScrollView, ScrollViewComponent } from 'react-native';
import { ExpoRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Recipe from '../components/Recipe';
import SignIn from '../tabs/SignIn';
import HomePage from '../tabs/HomePage';

export default function App() {
  {/*create a state for isSignedIn*/}
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            {isSignedIn ?
              <HomePage/>:
              <SignIn/>
            }

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
  },
  scrollView: {
    margin: 5,
    paddingTop: 50,
    flex: 1,

  }
});