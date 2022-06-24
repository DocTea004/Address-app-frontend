import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';

const Listing = () => {
  return (
    <View>
        <View style={styles.listcontainer}>
                <Text style={styles.listhead}>Premium Listing</Text>
                <Text style={styles.listhead}>Recent Listing</Text>
        </View>
        
        <View style={styles.list}>
            <ScrollView>
                <Text>-F&F Solutions, Accra, GH</Text>
                <Text>- AM Network, Abuja, NG</Text>
                <Text>- RoyalJen Supplies, Monrovia, LB</Text>
                <Text> - F&F Homes, Adenta, GH</Text>
                <Text>- F&F Developers, Taxes, USA</Text>
               
               
            </ScrollView>

            <ScrollView>
                <Text>-F&F Solutions, Accra, GH</Text>
                <Text>- AM Network, Abuja, NG</Text>
                <Text>- RoyalJen Supplies, Monrovia, LB</Text>
              
            </ScrollView>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    listcontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:10,
        paddingRight:10,
        borderBottomColor:'#1a96d5',
        borderBottomWidth:7,
        height:50,
        alignItems:'center',
        backgroundColor:'#1a82a1'
    },
    listhead:{
        color:'white',
        fontSize:17
    },
    list:{
        flexDirection:'row'
    }
})

export default Listing