import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Button}  from "react-native";
import { ScrollView } from 'react-native-gesture-handler';

const PolicyScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
       <Text style={styles.heading}>
            Privacy Policy
        </Text>
       </View>
       <ScrollView
       showsHorizontalScrollIndicator={false}
       showsVerticalScrollIndicator={false}
       >
       <View style={styles.bodyContainer}>
        <Text style={styles.bodyText}>
        The AddressApp company (“AddressApp,” “we,” or “us”) 
        cares about your privacy and wants you to be familiar 
        with how we collect, use, and disclose data. 
        This Privacy Statement covers the collection, 
        use, and disclosure of data collected via AddressApp.com
         and any other AddressApp website where this Privacy 
         Statement is posted or linked (collectively, this “Site”).
          This Privacy Statement also describes your legal rights 
          in relation to such data. 
        Please note that this Privacy Statement 
        addresses the data collection and handling 
        practices associated with this Site only. Other websites, 
        including those provided by members of AddressApp’s 
        company are governed by their own privacy statements. 
        Additionally, AddressApp products and services may be 
        subject to their own statements specific to the product 
        or service. We encourage you to review these privacy 
        statements to understand how AddressApp products and 
        services use data. More information about the company 
        can be found here.
        By using this Site, you are subject to the terms and 
        conditions of this Privacy Statement. Please note that the data you provide through our Career Center is governed by our Careers Privacy Statement, which contains additional information intended specifically for job applicants.

        </Text>

        
       </View>
       <View style={styles.button}>
        <Button
        title='Proceed to Dashboard'
        onPress={()=> navigation.navigate("Dashboard")}
        />
       </View>
       </ScrollView>
      
      
       
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:25,
    //paddingTop:50,
  },
  headingContainer:{
    alignItems:'center',
    backgroundColor:'#1a96d5',
    paddingTop:10,
    paddingBottom:10
  },
  heading:{
    fontSize:25,
    fontWeight:'300',
    color:'white'
  },
  bodyContainer:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:100,
    marginLeft:10,
    marginRight:10
  },
  bodyText:{
    fontSize:15,
    fontWeight:'300'
  },
  button:{
    marginTop:100,
    //width:300,
    alignItems:'center',
    justifyContent:'center'
  }


})

export default PolicyScreen;