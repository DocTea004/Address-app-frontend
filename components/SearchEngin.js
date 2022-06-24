import React from 'react'
import {View, Text, StyleSheet, Button ,TextInput}  from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';


const SearchEngin = () => {
  return (
    <View style={styles.container}>
        
        <View style={styles.searchInput}>
            <TextInput
            placeholder='Search Location...'
            />
        </View>

        <View style={styles.searchIcon}>
        <SimpleLineIcons name="magnifier" size={24} color="#1a82a1" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'row',
        
    },
    searchInput:{
        borderWidth:4,
        borderColor:'#d1d2d4',
        width:300,
        height:42,
        alignItems:'flex-start',
        justifyContent:'center',
        backgroundColor:'white',
    },
    searchIcon:{
        borderWidth:2,
        borderColor:'#d1d2d4',
        height:42,
        width:50,
        alignItems:'center',
        justifyContent:'center'
        
    }
})

export default SearchEngin