import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './components/Login';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Healthy Habits</Text>
      <Text style={styles.subtitle}>Healthy food, healthy wallet</Text>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    flex: 1
  },

  subtitle: {
    flex: 1
  },

  login: {
    flex: 2
  }
});
