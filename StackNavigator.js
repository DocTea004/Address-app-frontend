import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {View, Text, StyleSheet}  from "react-native";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import AppInfoScreen from "./screens/AppInfoScreen";
import ContactScreen from "./screens/ContactScreen";
import LoginScreen from "./screens/LoginScreen";
import PolicyScreen from "./screens/PolicyScreen";
import RegisterLocation from "./screens/RegisterLocation";
import RegisterScreen from "./screens/RegisterScreen";
import SocialScreen from "./screens/SocialScreen";
import Dashboard from './screens/Dashboard';
import AddressDashboard from './screens/AddressDashboard';
import GoogleMapcomplete from "./components/GoogleMapcomplete"


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
        <Stack.Screen 
        name="Home"
        component={HomeScreen}
        />
        <Stack.Screen
        name="Menu"
        component={MenuScreen}
        />
        <Stack.Screen
        name="AppInfo"
        component={AppInfoScreen}
        />
        <Stack.Screen
        name="Contact"
        component={ContactScreen}
        />
        <Stack.Screen
        name="Login"
        component={LoginScreen}
        />
        <Stack.Screen
        name="Policy"
        component={PolicyScreen}
        />
        <Stack.Screen
        name="Register"
        component={RegisterScreen}
        />
        <Stack.Screen
        name="Location"
        component={RegisterLocation}
        />
        <Stack.Screen
        name="Social"
        component={SocialScreen}
        />
        <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        />
        <Stack.Screen
        name="Address"
        component={AddressDashboard}
        />
        <Stack.Screen
        name="SearchLocation"
        component={GoogleMapcomplete}
        />
    </Stack.Navigator>
  )
}

export default StackNavigator;