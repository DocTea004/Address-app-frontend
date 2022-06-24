import React from 'react';
import {View, Text, StyleSheet}  from "react-native";
import { AntDesign } from '@expo/vector-icons';

const MenuScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.MenuIcon}>
        <AntDesign name="close" size={40} color="black" 
        onPress={()=> navigation.navigate("Home")}
        />
      </View>
        <View style={styles.Menu}>
          <View style={styles.homemenu}>
            <Text style={styles.hometitle}
            onPress={()=> navigation.navigate("Home")}
            >
              Home
            </Text>
          </View>

          { /*<View style={styles.homemenu}>
            <Text style={styles.hometitle}
            onPress={()=> navigation.navigate("Social")}
            >
              Social Media
            </Text>
          </View>

          <View style={styles.homemenu}>
            <Text style={styles.hometitle}
            onPress={()=> navigation.navigate("Contact")}
            >
              Contact Us
            </Text>
          </View>

          <View style={styles.homemenu}>
            <Text style={styles.hometitle}
            onPress={()=> navigation.navigate("AppInfo")}
            >
              App Info
            </Text>
  </View> */}

          <View style={styles.homemenu}>
            <Text style={styles.hometitle}
            onPress={()=> navigation.navigate("Policy")}
            >
              Privacy Policy
            </Text>
          </View>

          <View style={styles.homemenu}>
            <Text style={styles.hometitle}
            onPress={()=> navigation.navigate("Login")}
            >
              Login / Register
            </Text>
          </View>

          <View style={styles.homemenu}>
            <Text style={styles.hometitle}
            onPress={()=> navigation.navigate("Location")}
            >
              Register Location
            </Text>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:50,

  },
  MenuIcon:{
    alignItems:'center',
    justifyContent:'center'
  },
  Menu:{
    marginTop:50
  },
  homemenu:{
    borderBottomColor:'black',
    borderBottomWidth:2,
    marginBottom:30,
    paddingBottom:10,
    marginRight:30,
    marginLeft:30
  },
  hometitle:{
    fontSize:20,
    textAlign:'center'
  }

})

export default MenuScreen;