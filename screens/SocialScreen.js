import React from 'react';
import {View, Text, StyleSheet}  from "react-native";

const SocialScreen = () => {
  return (
    <View style={styles.container}>
        <Text>
            Social Screen Development
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

export default SocialScreen;