import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Weather from './components/Weather';

export default function App() {

  return (
    <View style={styles.container}>
      <Weather zipCode="83120" />
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 5,
    borderColor: 'yellow',    
  }
})





