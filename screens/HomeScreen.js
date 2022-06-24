import React from "react";
import { ViewBase,View,Text,TextInput } from "react-native";
import Dashboard from "./Dashboard";
import LoginScreen from "./LoginScreen";
import MainScreen from "./MainScreen";
import RegistrationScreen from "./RegisterScreen";


const HomeScreen = () =>{

  return(
    <View>
      {/* <Dashboard  />  */}
      <MainScreen /> 
      
    </View>
  )
}

export default HomeScreen;