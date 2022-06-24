import React from 'react';
import {View, Text, StyleSheet}  from "react-native";

const AppInfoScreen = () => {
  return (
    <View style={styles.container}>
        <Text>
            AppInfo Screen Development
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

export default AppInfoScreen;