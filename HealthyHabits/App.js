import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './components/Login';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.headerComponent}>
        <Header/>
      </View>

      <View style={styles.loginComponent}>
        <Login/>
      </View>

      <View style={styles.footerComponent}>
        <Footer/>
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  headerComponent:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 40
},

  loginComponent:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center', 
},

footerComponent:{
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10
},
});
