import React from 'react';
import {View, Text, StyleSheet}  from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
        <Text>
            Dashboard Development
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:25,
    //paddingTop:50
  }
})

export default WelcomeScreen;