import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import StackNavigator from './StackNavigator';



export default function App() {
  return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeee4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});