import React, { useRef } from 'react';
import {View, Text, StyleSheet, Dimensions} from "react-native";
import {GooglePlacesAutocomplete}  from "react-native-google-places-autocomplete";


const GoogleSearch = (props) => {


  return (
    <GooglePlacesAutocomplete
    placeholder='Search'
    onPress={(data, details = null) => {
      // 'details' is provided when fetchDetails = true
      console.log(data, details);
    }}
    query={{
      key: 'AIzaSyAWyLgCn1zx3725bP3Jl9sJ_lSY_Vph-gc',
      language: 'en',
    }}
    //styles={styles}

  /> 
  )
}

const styles = StyleSheet.create({
  textInputContainer:{
      backgroundColor: 'rgba(0,0,0,0)',
      borderTopWidth: 0,
      borderBottomWidth:0,
      zIndex:999,
      width:'90%',
  },
  textInput: {
      marginLeft: 0,
      marginRight: 0,
      height: 45,
      color: '#5d5d5d',
      fontSize: 16,
      borderWidth:1,
      zIndex:999,
    },
    predefinedPlacesDescription: {
      color: '#1faadb'
    },
    listView:{
        top:45.5,
        zIndex:10,
        position: 'absolute',
        color: 'black',
        backgroundColor:"white",
        width:'89%',
    },
    separator:{
      flex: 1,
      height: StyleSheet.hairlineWidth,
      backgroundColor: 'blue',
    },
    description:{
      flexDirection:"row",
      flexWrap:"wrap",
      fontSize:14,
      maxWidth:'89%',
    },
  });
  
export default GoogleSearch