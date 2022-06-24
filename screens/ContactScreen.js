import React from 'react';
import {View, Text, StyleSheet}  from "react-native";

const ContactScreen = () => {
  return (
    <View style={styles.container}>
        <Text>
            ContactScreen Development
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

export default ContactScreen;