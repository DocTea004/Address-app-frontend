import React, { useEffect, useState } from "react";
import { ViewBase,View,Text,TextInput, StyleSheet, Button } from "react-native";
import MenuBar from "../components/MenuBar";
import GoogleSearch from "../components/GoogleSearch";
//rimport GetLocation from "../components/GetLocation";
import * as Location from 'expo-location';
import MapView from "react-native-maps";
import Listing from "../components/Listing";
import { useNavigation } from "@react-navigation/native";

const MainScreen = () =>{
    
    const navigation = useNavigation();
  
    return(
        <View style= {styles.container}>
            <View style={styles.menuContainer}>
                <MenuBar    />
            </View>
            <View style={styles.searchContainer}>
                <GoogleSearch  />
            </View>
            <View style={styles.mapContainer}>
                <MapView style={styles.map} />
            </View>

            <View>
                <Button
                title="Search Location"
                onPress={()=> navigation.navigate('SearchLocation')}
                />
            </View>
            <View style={styles.listingContainer}>
                <Listing    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //alignItems:'center'
        
    },
    menuContainer:{

    },
    searchContainer:{
        marginTop:20,
        marginLeft:20,
        marginRight:20
    },
    mapContainer:{
       marginTop:70,
       marginLeft:0
    },
    map:{
        width:430,
        height:400
    },
    listingContainer:{
        marginTop:20,
        marginBottom:20
    }
})

export default MainScreen;