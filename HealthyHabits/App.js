import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './components/Login';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


export default function App() {
  return (
    <View style={styles.container}>
      
      <Header/>
      <Login/>
      <Footer/>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});
